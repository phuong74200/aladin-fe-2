import { faker } from "@faker-js/faker";

// export const mock = new Array(50).fill(undefined).map(() => ({
//   personal: {
//     name: faker.name.fullName(),
//     phone: faker.phone.number(),
//     email: faker.internet.email(),
//   },
//   group: {
//     id: "HK22023G001",
//     subject: faker.hacker.noun(),
//     students: undefined,
//     lessons: 0,
//     duration: 0,
//     description: faker.hacker.phrase().split(" ").slice(0, 5).join(" "),
//     location: faker.address.streetAddress(),
//     schedule: [faker.date.between("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z")],
//     ta: {
//       name: faker.name.fullName(),
//     },
//   },
//   checkout: {
//     coupon: undefined,
//     sale: parseFloat(faker.commerce.price()) * 100,
//     price: parseFloat(faker.commerce.price()) * 1000,
//   },
//   disabled: false,
//   step: 1,
// }));

export const mock = new Array(50).fill(undefined).map(() => ({
  personal: {
    name: "Nguyễn Văn A",
    phone: "0123456789",
    email: "nguyenvana@gmail.com",
  },
  group: {
    id: "HK22023G001",
    subject: "Fundamentals of Financial Management",
    students: 2,
    lessons: 3,
    duration: 4,
    description: "Midterm - Dành cho K21 trở về trước",
    location: "MS Teams",
    schedule: [
      faker.date.between("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z"),
      faker.date.between("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z"),
    ],
    ta: {
      name: "Lê Đỗ Mai Oanh",
    },
  },
  checkout: {
    coupon: undefined,
    price: 911000,
    sale: 46700,
  },
  disabled: false,
  step: 1,
}));

export const couponMock = new Map(
  new Array(10)
    .fill(undefined)
    .map(() => [faker.system.networkInterface(), parseFloat(faker.commerce.price()) * 100])
);

couponMock.set("test", parseFloat(faker.commerce.price()) * 100);
