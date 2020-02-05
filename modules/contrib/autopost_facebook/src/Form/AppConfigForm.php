<?php

namespace Drupal\autopost_facebook\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeBundleInfoInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class AppConfigForm.
 */
class AppConfigForm extends ConfigFormBase {

  /**
   * The entity type bundle info.
   *
   * @var \Drupal\Core\Entity\EntityTypeBundleInfoInterface
   */
  protected $entityTypeBundleInfo;

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['autopost_facebook.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'autopost_facebook_app_settings_form';
  }

  /**
   * Class constructor.
   */
  public function __construct(EntityTypeBundleInfoInterface $entityTypeBundleInfo) {
    $this->entityTypeBundleInfo = $entityTypeBundleInfo;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    // Instantiates this form class.
    return new static(
      // Load the service required to construct this class.
      $container->get('entity_type.bundle.info')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('autopost_facebook.settings');

    $form['app_id'] = [
      '#type' => 'textfield',
      '#required' => TRUE,
      '#title' => $this->t('App ID'),
      '#default_value' => $config->get('app_id'),
      '#description' => $this->t('Copy the Consumer Key here'),
    ];

    $form['app_secret'] = [
      '#type' => 'textfield',
      '#required' => TRUE,
      '#title' => $this->t('App secret'),
      '#default_value' => $config->get('app_secret'),
      '#description' => $this->t('Copy the Consumer Secret here'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $this->config('autopost_facebook.settings')
      ->set('app_id', $values['app_id'])
      ->set('app_secret', $values['app_secret'])
      ->save();

    parent::submitForm($form, $form_state);
  }

}
