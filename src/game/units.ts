export enum MatterState {
  solid = 0,
  liquid = 1,
  gas = 2,
}

export enum Temperature {
  freezing = -3,
  cold = -2,
  chilled = -1,
  normal = 0,
  warm = 1,
  hot = 2,
  scorching = 3,
}

export enum Color {
  clear,
  black,
  white,
  red,
  blue,
  green,
}

// TODO: expand
export const ColorAliases = {
  transparent: Color.clear,
  dark: Color.black,
  light: Color.white,
  cherry: Color.red,
  navy: Color.blue,
  forest: Color.green,
};

export enum Size {
  tiny = 0,
  small = 1,
  medium = 2,
  large = 3,
  massive = 4,
}

export enum Weight {
  insignificant = 0,
  light = 1,
  heavy = 2,
  immovable = 3,
}
