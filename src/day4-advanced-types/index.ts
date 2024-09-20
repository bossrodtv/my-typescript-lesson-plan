// Day 4: Advanced TypeScript

// TODO: Demonstrate type inference
const text = "Hello, world!";
let text2 = "Hello, world!";

// TODO: Use type assertions
let text3 = "Hello, world!" as unknown as number;

let test = [1, 2, 3, 4, 5];

function getLength(obj: unknown) {
  return (obj as string[]).length;
}

getLength(test);

// TODO: Create a decorator
function log(
  target: any,
  methodKeyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodKeyName} with arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${methodKeyName} returned: ${result}`);
    return result;
  };
  return descriptor;
}

class PersonSomething {
  @log
  greet(name: string) {
    console.log("This is calling from the greet method");
    return `Hello, ${name}`;
  }
}

const personSomething = new PersonSomething();
personSomething.greet("John");

// TODO: Use utility types (Partial, Pick, Omit, Readonly, Record, Required, NonNullable, ReturnType, Awaited)
type BaseUser = {
  name: string;
  age: number;
  email: string;
};

type OptionalUser = Partial<BaseUser>;
type PickUser = Pick<BaseUser, "name" | "email">;
type OmitUser = Omit<BaseUser, "email">;
type ReadonlyUser = Readonly<BaseUser>;

const user: ReadonlyUser = {
  name: "John",
  age: 20,
  email: "john@doe.com",
};

// user.name = "something"

type RecordUser = Record<"a" | "b" | "c", string>;

const user2: RecordUser = {
  a: "1",
  b: "2",
  c: "3",
};

type RequiredUser = Required<OptionalUser>;

// const asd: NonNullable<string> = null

function getUserData() {
  return {
    name: "John",
    age: 20,
    email: "john@doe.com",
  };
}

type GetUserDataResponse = ReturnType<typeof getUserData>;

async function getUserData2() {
  return new Promise<GetUserDataResponse>((resolve) => {
    resolve({
      name: "John",
      age: 20,
      email: "john@doe.com",
    });
  });
}

type GetUserDataResponse2 = Awaited<ReturnType<typeof getUserData2>>;

// TODO: Create a custom type mapper

type MappedType<TObj> = {
  [K in keyof TObj as `${K}-test`]: TObj[K];
};

type test = MappedType<BaseUser>;

const test2: test = {
  "name-test": "John",
  "age-test": 20,
  "email-test": "john@doe.com",
};

// TODO: Demonstrate conditional types

type SportType = "football" | "basketball" | "tennis";

type BasketballPlayer = {
  name: string;
  age: number;
  something1: string;
  sport: "basketball";
};

type FootballPlayer = {
  name: string;
  age: number;
  something2: string;
  sport: "football";
};

type TennisPlayer = {
  name: string;
  age: number;
  something3: string;
  sport: "tennis";
};

type Player<TSportType extends SportType> = TSportType extends "basketball"
  ? BasketballPlayer
  : TSportType extends "football"
  ? FootballPlayer
  : TennisPlayer;

const player: Player<"basketball"> = {
  name: "John",
  age: 20,
  something1: "something",
  sport: "basketball",
};

type PlayerType = BasketballPlayer | FootballPlayer | TennisPlayer;

function getPlayer(player: PlayerType) {
  if (player.sport === "tennis") {
  }
}

// TODO: Create a custom type guard
function isString<TValue>(value: TValue) {
  return typeof value === "string";
}

function testFunction(value: unknown) {
  if (!isString(value)) {
    console.log(value.toUpperCase());
  }
}
