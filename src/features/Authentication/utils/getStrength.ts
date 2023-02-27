import { Validation } from "~/@types/Validation";

export default function getStrength(
    password: string,
    requirements: Validation[] = []
) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}
