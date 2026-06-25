tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
                "colors": {
                        "background": "#252525",
                        "on-background": "#FFFFFF",

                        "surface": "#1E1E1E",
                        "on-surface": "#FFFFFF",

                        "surface-dim": "#0E0E0E",
                        "surface-bright": "#444444",

                        "surface-container-lowest": "#0E0E0E",
                        "surface-container-low": "#1E1E1E",
                        "surface-container": "#252525",
                        "surface-container-high": "#323232",
                        "surface-container-highest": "#444444",

                        "primary": "#44CC77",
                        "on-primary": "#070E08",
                        "primary-container": "#38583E",
                        "on-primary-container": "#FFFFFF",

                        "secondary": "#5C68D1",
                        "on-secondary": "#FFFFFF",
                        "secondary-container": "#2E3568",
                        "on-secondary-container": "#D1D1D1",

                        "tertiary": "#F149C0",
                        "on-tertiary": "#FFFFFF",
                        "tertiary-container": "#7A2560",
                        "on-tertiary-container": "#FFFFFF",

                        "error": "#EF2C4A",
                        "on-error": "#FFFFFF",
                        "error-container": "#7A1C2A",
                        "on-error-container": "#FFFFFF",

                        "outline": "#38583E",
                        "outline-variant": "#444444",

                        "surface-variant": "#444444",
                        "on-surface-variant": "#A0A0A0",

                        "inverse-surface": "#FFFFFF",
                        "inverse-on-surface": "#252525",
                        "inverse-primary": "#5CBA6C",

                        "surface-tint": "#44CC77"
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
