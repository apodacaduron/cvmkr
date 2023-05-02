import type { MantineThemeOverride } from "@mantine/core";

export const mantineTheme: MantineThemeOverride = {
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
    Title: {
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
  fontFamily: "Poppins",
  colorScheme: "light",
};
