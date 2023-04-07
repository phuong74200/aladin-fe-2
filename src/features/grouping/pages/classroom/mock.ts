import { faker } from "@faker-js/faker";

export const mock = new Array(50).fill(undefined).map(() => ({
  personnal: {
    name: faker.name.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  },
  group: {
    subject: faker.hacker.noun(),
    students: undefined,
    lessons: 0,
    duration: 0,
    description: faker.hacker.phrase() + " " + faker.hacker.phrase(),
    location: `${faker.address.streetAddress()}, ${faker.address.cityName()}, ${faker.address.country()} ${faker.address.streetAddress()}, ${faker.address.cityName()}, ${faker.address.country()} ${faker.address.streetAddress()}, ${faker.address.cityName()}, ${faker.address.country()}`,
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
}));

export const couponMock = new Map(
  new Array(10)
    .fill(undefined)
    .map(() => [faker.system.networkInterface(), parseFloat(faker.commerce.price()) * 100])
);

couponMock.set("test", parseFloat(faker.commerce.price()) * 100);
