import { Configuration } from "rollbar";

import { ROLLBAR_ACCESS_TOKEN } from "./env";

export const rollbarConfig: Configuration = {
    accessToken: ROLLBAR_ACCESS_TOKEN,
    environment: import.meta.env.MODE,
    autoInstrument: {
        log: false,
    },
};
