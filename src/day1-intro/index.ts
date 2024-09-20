// Day 1: Introduction to TypeScript

// TODO: Demonstrate number type
const age: number = 23;

// TODO: Demonstrate string type
const firstName: string = `John`;

// TODO: Demonstrate boolean type
const isAdult: boolean = true;

// TODO: Demonstrate array type
const names: string[] = [`John`, `Jane`, `Doe`];
const names2: Array<string> = [`John`, `Jane`, `Doe`];

// TODO: Demonstrate tuple type
const person: [string, number, boolean, Array<string>] = [
  `John`,
  23,
  true,
  [`Jane`, `Doe`],
];

// TODO: Demonstrate any type
const anything: any = `John`;

// TODO: Demonstrate unknown type
const unknown: unknown = `John`;

// TODO: Demonstrate never type
const arr: never[] = [];
arr.push();

// TODO: Demonstrate void type
const voidType: void = undefined;

const promise = new Promise((resolve, reject) => {
  resolve(123);
});

void promise;

// TODO: Demonstrate null and undefined
const nullType: null = null;
const undefinedType: undefined = undefined;
const lastName: string | null = null;

// TODO: Demonstrate object type
const obj: object = {};
const actualObj: {} = {
  name: `John`,
  age: 23,
};

// actualObj.name;

const person1: Record<string, number | string> = {
  name: `John`,
  age: 23,
};

person1.asd;
person1.age;

type Person = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
  favoriteColors: string[];
  isStudent: boolean;
  subjects: string[];
};

type PersonValue =
  | number
  | string
  | Record<string, string>
  | string[]
  | boolean;

type PersonObj = {
  [key: string]: PersonValue;
};

const person2 = {
  name: `John`,
  age: 23,
  address: {
    city: `New York`,
    country: `USA`,
  },
  favoriteColors: [`red`, `blue`, `green`],
  isStudent: true,
  subjects: [`Math`, `Science`, `History`],
} satisfies Record<string, PersonValue>;
