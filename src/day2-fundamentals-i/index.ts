// Day 2: TypeScript Fundamentals I

// TODO: Define an interface
interface Product {
  name: string;
  price: number;
  description: string;
  isAvailable: boolean;
  category?: string | undefined;
}

const product: Product = "JOHN" as unknown as Product;

// TODO: Define a type alias
type Car = {
  brand: string;
  model: string;
  year: number;
  color: string;
};

type PersonArray = Array<string | number>;

type PersonName = string | number;

// TODO: Demonstrate union types

type UnionType = string | number | boolean | undefined | null;

// TODO: Demonstrate intersection types

type IntersectionType = Car & Product & { age: number };

const intersection: IntersectionType = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Red",
  name: "John",
  price: 1000,
  description: "This is a car",
  isAvailable: true,
  age: 123,
};

interface IntersectionInterfaceType extends Car {
  age: number;
}

const intersectionInterface: IntersectionInterfaceType = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Red",
  age: 123,
};

// TODO: Create a function with optional parameters

function optionalParameters(name: string, age?: number) {
  return `Hello ${name} ${age ? `and you are ${age} years old` : ""}`;
}

optionalParameters("John");
optionalParameters("John", 123);

// TODO: Create a function with default parameters

function defaultParameters({
  name,
  age = 123,
}: {
  name?: string;
  age?: number;
}) {
  return `Hello ${name} ${age ? `and you are ${age} years old` : ""}`;
}

defaultParameters({ name: "John" });
defaultParameters({ name: "John", age: 456 });

// TODO: Create a function with rest parameters

function restParameters(name: string, ...rest: [string, number, boolean]) {
  return `Hello ${name} ${rest.join(" ")}`;
}

restParameters("John", "Doe", 123, true);

function restParameters2({
  name,
  ...rest
}: {
  name: string;
  age: number;
  gender: string;
}) {
  return `Hello ${name} ${rest.age} ${rest.gender}`;
}

restParameters2({ name: "John", age: 123, gender: "male" });
