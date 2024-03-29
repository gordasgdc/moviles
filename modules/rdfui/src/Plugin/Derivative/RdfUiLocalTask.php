<?php

/**
 * @file
 * Contains \Drupal\rdfui\Plugin\Derivative\RdfUiLocalTask.
 */

namespace Drupal\rdfui\Plugin\Derivative;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\Core\Entity\EntityManagerInterface;
use Drupal\Core\Plugin\Discovery\ContainerDeriverInterface;
use Drupal\Core\Routing\RouteProviderInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\StringTranslation\TranslationInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides local task definitions for all entity bundles.
 */
class RdfUiLocalTask extends DeriverBase implements ContainerDeriverInterface {
  use StringTranslationTrait;
  /**
   * The route provider.
   *
   * @var \Drupal\Core\Routing\RouteProviderInterface
   */
  protected $routeProvider;

  /**
   * The entity manager.
   *
   * @var \Drupal\Core\Entity\EntityManagerInterface
   */
  protected $entityManager;

  /**
   * Creates an FieldUiLocalTask object.
   *
   * @param \Drupal\Core\Routing\RouteProviderInterface $route_provider
   *   The route provider.
   * @param \Drupal\Core\Entity\EntityManagerInterface $entity_manager
   *   The entity manager.
   * @param \Drupal\Core\StringTranslation\TranslationInterface $string_translation
   *   The translation manager.
   */
  public function __construct(RouteProviderInterface $route_provider, EntityManagerInterface $entity_manager, TranslationInterface $string_translation) {
    $this->routeProvider = $route_provider;
    $this->entityManager = $entity_manager;
    $this->stringTranslation = $string_translation;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, $base_plugin_id) {
    return new static(
      $container->get('router.route_provider'),
      $container->get('entity.manager'),
      $container->get('string_translation')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $this->derivatives = array();

    foreach ($this->entityManager->getDefinitions() as $entity_type_id => $entity_type) {
      if ($entity_type->isFieldable() && $entity_type->hasLinkTemplate('admin-form')) {

        $this->derivatives['field_overview_' . $entity_type_id] = array(
          'route_name' => "field_ui.overview_$entity_type_id",
          'weight' => -1,
          'title' => $this->t('Fields'),
          'parent_id' => "field_ui.fields:overview_$entity_type_id",
        );

        $this->derivatives['rdf_' . $entity_type_id] = array(
          'route_name' => "field_ui.field_rdf_$entity_type_id",
          'weight' => 2,
          'title' => $this->t('RDF Mappings'),
          'parent_id' => "field_ui.fields:overview_$entity_type_id",
        );

      }
    }

    foreach ($this->derivatives as &$entry) {
      $entry += $base_plugin_definition;
    }

    return $this->derivatives;
  }

  /**
   * Alters the base_route definition for RDF UI local tasks.
   *
   * @param array $local_tasks
   *   An array of local tasks plugin definitions, keyed by plugin ID.
   */
  public function alterLocalTasks(array &$local_tasks) {
    foreach ($this->entityManager->getDefinitions() as $entity_type => $entity_info) {
      if ($entity_info->isFieldable() && $entity_info->hasLinkTemplate('admin-form')) {
        $admin_form = $entity_info->getLinkTemplate('admin-form');

        $local_tasks["field_ui.fields:rdf_$entity_type"]['base_route'] = $admin_form;
        $local_tasks["field_ui.fields:field_overview_$entity_type"]['base_route'] = $admin_form;
      }
    }
  }
}
