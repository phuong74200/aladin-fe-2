import { ROLLBAR_ACCESS_TOKEN } from "./env";

export const rollbarConfig = {
    accessToken: ROLLBAR_ACCESS_TOKEN,
    environment: import.meta.env.MODE,
};
