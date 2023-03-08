import { faker } from "@faker-js/faker";

export const mock = new Array(1000).fill(undefined).map((_, index) => ({
    id: index,
    subject: faker.hacker.noun(),
    time: faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2030-01-01T00:00:00.000Z"
    ),
    location: faker.address.streetAddress(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    ta: faker.name.fullName(),
    name: faker.name.fullName(),
    description: faker.hacker.phrase(),
    price: parseFloat(faker.commerce.price()) * 1000,
    saleOff: parseFloat(faker.commerce.price()) * 100,
}));

export const couponMock = new Map(
    new Array(10)
        .fill(undefined)
        .map(() => [
            faker.system.networkInterface(),
            parseFloat(faker.commerce.price()) * 100,
        ])
);
