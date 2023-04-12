import { faker } from "@faker-js/faker";
import { create } from "zustand";

import { UserModel } from "@/@types";
import { GroupModel } from "@/@types/models/GroupModel";

const fakeGroup = new Array(50).fill(undefined).map(() => ({
  personal: {
    id: faker.datatype.uuid(),
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
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
    },
    price: parseFloat(faker.commerce.price()) * 1000,
  },
  checkout: {
    coupon: undefined,
    sale: parseFloat(faker.commerce.price()) * 100,
  },
}));

interface GroupServiceState {
  group: {
    personal: UserModel;
    group: GroupModel;
    checkout: {
      coupon?: string;
      sale: number;
    };
  }[];
}

export const useAuthService = create<GroupServiceState>(() => ({
  group: fakeGroup,
}));
