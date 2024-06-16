// typeAlias: 별칭, 별명

type Test = string | string[];
const americano: Test = "디카페인";

// Coffee: name, kcal, shot, hasDecaffien, ingredients

type Bean = {
  hasDecaffien: boolean;
  ingredients: string[];
};

type Liquid = {
  name: string;
  kcal: number;
  shot: number;
};

type Carbonated = {
  isZero: boolean;
};

type Milk = {
  isLowFat: boolean;
  isSoy: boolean;
};

type Coffee = Bean & Liquid;
type Beverage = Carbonated & Liquid;
type LatteCoffee = Bean & Liquid & Milk;

type MyTypograph = {
  font: string;
  fontWeight: number;
  color: string;
};

type MyButton = {
  border: string;
  borderRadius: number;
  backgroundColor: string;
  Click: () => void;
};
