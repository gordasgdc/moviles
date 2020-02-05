<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/amp/templates/amp-pixel.html.twig */
class __TwigTemplate_ed5d456a21e48a98f15ae2baa5320509f1ccad41bbb2ff0f910cf1b223f0f9bb extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 14, "set" => 15, "for" => 18];
        $filters = ["merge" => 19, "length" => 22, "escape" => 91];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set', 'for'],
                ['merge', 'length', 'escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 14
        if ((($context["domain"] ?? null) && ($context["query_string"] ?? null))) {
            // line 15
            echo "  ";
            $context["src"] = (((("https://" . $this->sandbox->ensureToStringAllowed(($context["domain"] ?? null))) . "/") . $this->sandbox->ensureToStringAllowed(($context["query_string"] ?? null))) . "?");
            // line 16
            echo "  ";
            $context["activeSubs"] = [];
            // line 17
            echo "
  ";
            // line 18
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["subs"] ?? null));
            foreach ($context['_seq'] as $context["sub"] => $context["subDetails"]) {
                if (($this->getAttribute($context["subDetails"], "active", []) == true)) {
                    // line 19
                    echo "    ";
                    $context["activeSubs"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["activeSubs"] ?? null)), [0 => $context["sub"]]);
                    // line 20
                    echo "  ";
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['sub'], $context['subDetails'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 21
            echo "
  ";
            // line 22
            if ((twig_length_filter($this->env, ($context["activeSubs"] ?? null)) > 0)) {
                // line 23
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["activeSubs"] ?? null));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["activeSub"]) {
                    // line 24
                    echo "
      ";
                    // line 25
                    if (($context["activeSub"] == "AMPDOC_HOST")) {
                        // line 26
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "host=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 27
                        echo "      ";
                    } elseif (($context["activeSub"] == "AMPDOC_URL")) {
                        // line 28
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "ref=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 29
                        echo "      ";
                    } elseif (($context["activeSub"] == "CANONICAL_HOST")) {
                        // line 30
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "host=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 31
                        echo "      ";
                    } elseif (($context["activeSub"] == "CANONICAL_PATH")) {
                        // line 32
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "path=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 33
                        echo "      ";
                    } elseif (($context["activeSub"] == "CANONICAL_URL")) {
                        // line 34
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "href=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 35
                        echo "      ";
                    } elseif (($context["activeSub"] == "SOURCE_URL")) {
                        // line 36
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "href=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 37
                        echo "      ";
                    } elseif (($context["activeSub"] == "SOURCE_HOST")) {
                        // line 38
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "host=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 39
                        echo "      ";
                    } elseif (($context["activeSub"] == "DOCUMENT_CHARSET")) {
                        // line 40
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "charSet=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 41
                        echo "      ";
                    } elseif (($context["activeSub"] == "DOCUMENT_REFERRER")) {
                        // line 42
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "referrer=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 43
                        echo "      ";
                    } elseif (($context["activeSub"] == "TITLE")) {
                        // line 44
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "title=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 45
                        echo "      ";
                    } elseif (($context["activeSub"] == "VIEWER")) {
                        // line 46
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "viewer=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 47
                        echo "      ";
                    } elseif (($context["activeSub"] == "CONTENT_LOAD_TIME")) {
                        // line 48
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "contentLoadTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 49
                        echo "      ";
                    } elseif (($context["activeSub"] == "DOMAIN_LOOKUP_TIME")) {
                        // line 50
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "domainLookupTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 51
                        echo "      ";
                    } elseif (($context["activeSub"] == "DOM_INTERACTIVE_TIME")) {
                        // line 52
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "domInteractiveTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 53
                        echo "      ";
                    } elseif (($context["activeSub"] == "PAGE_DOWNLOAD_TIME")) {
                        // line 54
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "pageDownloadTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 55
                        echo "      ";
                    } elseif (($context["activeSub"] == "PAGE_LOAD_TIME")) {
                        // line 56
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "pageLoadTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 57
                        echo "      ";
                    } elseif (($context["activeSub"] == "REDIRECT_TIME")) {
                        // line 58
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "redirectTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 59
                        echo "      ";
                    } elseif (($context["activeSub"] == "SERVER_RESPONSE_TIME")) {
                        // line 60
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "serverResponseTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 61
                        echo "      ";
                    } elseif (($context["activeSub"] == "TCP_CONNECT_TIME")) {
                        // line 62
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "tcpConnectTime=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 63
                        echo "      ";
                    } elseif (($context["activeSub"] == "AVAILABLE_SCREEN_HEIGHT")) {
                        // line 64
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "availScreenHeight=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 65
                        echo "      ";
                    } elseif (($context["activeSub"] == "AVAILABLE_SCREEN_WIDTH")) {
                        // line 66
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "availScreenWidth=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 67
                        echo "      ";
                    } elseif (($context["activeSub"] == "BROWSER_LANGUAGE")) {
                        // line 68
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "lang=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 69
                        echo "      ";
                    } elseif (($context["activeSub"] == "SCREEN_COLOR_DEPTH")) {
                        // line 70
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "colorDepth=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 71
                        echo "      ";
                    } elseif (($context["activeSub"] == "VIEWPORT_HEIGHT")) {
                        // line 72
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "viewportHeight=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 73
                        echo "        ";
                    } elseif (($context["activeSub"] == "VIEWPORT_WIDTH")) {
                        // line 74
                        echo "          ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "viewportWidth=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 75
                        echo "      ";
                    } elseif (($context["activeSub"] == "PAGE_VIEW_ID")) {
                        // line 76
                        echo "        ";
                        $context["src"] = ($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 77
                        echo "      ";
                    } elseif (($context["activeSub"] == "RANDOM")) {
                        // line 78
                        echo "        ";
                        $context["src"] = ($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 79
                        echo "      ";
                    } elseif (($context["activeSub"] == "TIMESTAMP")) {
                        // line 80
                        echo "        ";
                        $context["src"] = (($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "timestamp=") . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 81
                        echo "      ";
                    } elseif (($context["activeSub"] == "TOTAL_ENGAGED_TIME")) {
                        // line 82
                        echo "        ";
                        $context["src"] = ($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . $this->sandbox->ensureToStringAllowed($context["activeSub"]));
                        // line 83
                        echo "      ";
                    }
                    // line 84
                    echo "
      ";
                    // line 85
                    if ( !$this->getAttribute($context["loop"], "last", [])) {
                        // line 86
                        echo "        ";
                        $context["src"] = ($this->sandbox->ensureToStringAllowed(($context["src"] ?? null)) . "&");
                        // line 87
                        echo "      ";
                    }
                    // line 88
                    echo "
    ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['activeSub'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 90
                echo "
    <amp-pixel src=\"";
                // line 91
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["src"] ?? null)), "html", null, true);
                echo "\">
    </amp-pixel>

  ";
            }
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/amp/templates/amp-pixel.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  312 => 91,  309 => 90,  294 => 88,  291 => 87,  288 => 86,  286 => 85,  283 => 84,  280 => 83,  277 => 82,  274 => 81,  271 => 80,  268 => 79,  265 => 78,  262 => 77,  259 => 76,  256 => 75,  253 => 74,  250 => 73,  247 => 72,  244 => 71,  241 => 70,  238 => 69,  235 => 68,  232 => 67,  229 => 66,  226 => 65,  223 => 64,  220 => 63,  217 => 62,  214 => 61,  211 => 60,  208 => 59,  205 => 58,  202 => 57,  199 => 56,  196 => 55,  193 => 54,  190 => 53,  187 => 52,  184 => 51,  181 => 50,  178 => 49,  175 => 48,  172 => 47,  169 => 46,  166 => 45,  163 => 44,  160 => 43,  157 => 42,  154 => 41,  151 => 40,  148 => 39,  145 => 38,  142 => 37,  139 => 36,  136 => 35,  133 => 34,  130 => 33,  127 => 32,  124 => 31,  121 => 30,  118 => 29,  115 => 28,  112 => 27,  109 => 26,  107 => 25,  104 => 24,  86 => 23,  84 => 22,  81 => 21,  74 => 20,  71 => 19,  66 => 18,  63 => 17,  60 => 16,  57 => 15,  55 => 14,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/amp/templates/amp-pixel.html.twig", "/home/movilesdonosti/public_html/modules/contrib/amp/templates/amp-pixel.html.twig");
    }
}
