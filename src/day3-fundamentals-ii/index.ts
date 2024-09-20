// Day 3: TypeScript Fundamentals II

// TODO: Create a class with inheritance

interface DogInterface {
  name: string;
  getName: () => string;
  setName: (name: string) => void;
}

class Dog implements DogInterface {
  public name;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}

const dog1 = new Dog("Browny");

dog1.getName();
dog1.setName("Browny 2");
dog1.getName();

class MockDog implements DogInterface {
  public name;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}

// TODO: Demonstrate generics

type GenericDog<TProperties = Record<string, unknown>> = {
  name: string;
  properties: TProperties;
};

type GenericDog2<TProperties extends Record<string, unknown>> = {
  name: string;
  properties: TProperties;
};

type DogProperties = {
  age: number;
  breed: string;
};

const dog3: GenericDog = {
  name: "Browny",
  properties: { age: 2, breed: "Labrador" },
};

const dog4: GenericDog2<DogProperties> = {
  name: "Browny",
  properties: { age: 2, breed: "Labrador" },
};

// TODO: Create an enum
enum DogBreeds {
  Labrador = "Labrador",
  Bulldog = "Bulldog",
  ShihTzu = "Shih Tzu",
}

const dogBreed1 = DogBreeds.Labrador;
const dogBreed2 = DogBreeds.Bulldog;
const dogBreed3 = DogBreeds.ShihTzu;
const dogBreed4 = "Labrador";

if (dogBreed4 === DogBreeds.Labrador) {
  console.log("Dog breed is Labrador");
}

// TODO: Create a native enum or const enum
const CatBreeds = {
  Siamese: "Siamese 123",
  Persian: "Persian 123 ",
  Bengal: "Bengal 123",
} as const;

type CatBreedKey = keyof typeof CatBreeds;
type CatBreedValue = (typeof CatBreeds)[CatBreedKey];

const catBreed1 = CatBreeds.Siamese;
const catBreed2 = CatBreeds.Persian;
const catBreed3 = CatBreeds.Bengal;
const a = "" as unknown as CatBreedValue;

if (a === CatBreeds.Siamese) {
  console.log("Cat breed is Siamese");
}

// TODO: Create a function with a generic type

type GetCatDataArgs<TData> = {
  id: string;
  data: TData;
};

function getCatData<TData>({ data, id }: GetCatDataArgs<TData>) {
  return {
    data,
    id,
  };
}

const catData = getCatData({ data: { name: "Cat" }, id: "123" });

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  age: number;
  adminAccess: boolean;
};

type GetUserProperties<TType extends "user" | "admin"> = TType extends "user"
  ? User
  : Admin;

const userData: GetUserProperties<"user"> = {
  name: "John",
  age: 20,
};

const adminData: GetUserProperties<"admin"> = {
  name: "John",
  age: 20,
  adminAccess: true,
};

const getUserProperties = <TType extends "user" | "admin">(userType: TType) => {
  return {} as GetUserProperties<TType>;
};

const userData2 = getUserProperties("user");
userData2.name;
userData2.age;

const adminData2 = getUserProperties("admin");
adminData2.name;
adminData2.age;
adminData2.adminAccess;

const aaaa = {
  name: "John",
  test: () => {
    // this.name; // Cannot access name here
  },
};

const bbbb = {
  name: "John",
  test: function () {
    this.name;
  },
};
