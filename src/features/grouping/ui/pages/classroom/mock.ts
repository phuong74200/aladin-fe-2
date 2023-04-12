import { faker } from "@faker-js/faker";

export const mock = new Array(50).fill(undefined).map(() => ({
  personal: {
    name: faker.name.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  },
  group: {
    subject: faker.hacker.noun(),
    students: undefined,
    lessons: 0,
    duration: 0,
    description: faker.hacker.phrase().split(" ").slice(0, 5).join(" "),
    location: faker.address.streetAddress(),
    schedule: [faker.date.between("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z")],
    ta: {
      name: faker.name.fullName(),
    },
  },
  checkout: {
    coupon: undefined,
    sale: parseFloat(faker.commerce.price()) * 100,
    price: parseFloat(faker.commerce.price()) * 1000,
  },
  disabled: false,
  step: Math.floor(Math.random() * 2) + 1,
}));

export const couponMock = new Map(
  new Array(10)
    .fill(undefined)
    .map(() => [faker.system.networkInterface(), parseFloat(faker.commerce.price()) * 100])
);

couponMock.set("test", parseFloat(faker.commerce.price()) * 100);
