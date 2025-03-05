import "styled-components";
import Theme from "@theme/index";

type ThemeType = typeof Theme;

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
