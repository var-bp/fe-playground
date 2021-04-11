export interface Colors {
  BODY_BACKGROUND_COLOR: string;
  PRIMARY_LOADER_COFFEE_CUP_BORDER: string;
  PRIMARY_LOADER_COFFEE_CUP_BORDER_AFTER: string;
  PRIMARY_LOADER_COFFEE_CUP_BORDER_BEFORE: string;
  PRIMARY_LOADER_COFFEE_CUP_BEFORE_BOX_SHADOW: string;
}

export interface Typography {}

export interface Theme extends Colors, Typography {}

export interface Themes {
  default: Theme;
}
