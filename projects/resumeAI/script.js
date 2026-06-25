tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                "background": "#0B101B",
                "on-background": "#FFFFFF",

                "surface": "#0F1523",
                "on-surface": "#FFFFFF",

                "surface-dim": "#0B101B",
                "surface-bright": "#1A2235",

                "surface-container-lowest": "#080D16",
                "surface-container-low": "#0D1320",
                "surface-container": "#111827",
                "surface-container-high": "#1A2235",
                "surface-container-highest": "#232C40",

                "primary": "#2563EB",
                "on-primary": "#FFFFFF",
                "primary-container": "#1D4ED8",
                "on-primary-container": "#FFFFFF",

                "primary-fixed": "#3B82F6",
                "primary-fixed-dim": "#2563EB",
                "on-primary-fixed": "#FFFFFF",
                "on-primary-fixed-variant": "#DBEAFE",

                "secondary": "#9CA3AF",
                "on-secondary": "#111827",
                "secondary-container": "#1F2937",
                "on-secondary-container": "#D1D5DB",

                "tertiary": "#6D28D9",
                "on-tertiary": "#FFFFFF",
                "tertiary-container": "#4C1D95",
                "on-tertiary-container": "#E9D5FF",

                "error": "#EF4444",
                "on-error": "#FFFFFF",
                "error-container": "#7F1D1D",
                "on-error-container": "#FECACA",

                "outline": "#2A3348",
                "outline-variant": "#1F2937",

                "surface-variant": "#151D2F",
                "on-surface-variant": "#9CA3AF",

                "inverse-surface": "#FFFFFF",
                "inverse-on-surface": "#111827",
                "inverse-primary": "#1D4ED8",

                "surface-tint": "#2563EB"
                },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "base_unit": "4px",
                    "sidebar_width": "300px",
                    "gutter": "24px",
                    "container_padding": "20px",
                    "margin_page": "32px"
            },
            "fontFamily": {
                    "headline-xl-mobile": ["Inter"],
                    "headline-lg": ["Inter"],
                    "label-sm": ["Inter"],
                    "label-md": ["Inter"],
                    "body-md": ["Open Sans"],
                    "headline-xl": ["Inter"],
                    "headline-md": ["Inter"],
                    "body-lg": ["Open Sans"]
            },
            "fontSize": {
                    "headline-xl-mobile": ["26px", {"lineHeight": "32px", "fontWeight": "700"}],
                    "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-sm": ["11px", {"lineHeight": "14px", "fontWeight": "500"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "headline-xl": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
            }
          },
        },
      }
