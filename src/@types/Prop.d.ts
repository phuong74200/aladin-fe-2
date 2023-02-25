import { PrivilegeModel } from "./models/PrivilegeModel";

export type LayoutProps = PropsWithChildren & {
    priviliges?: PrivilegeModel[];
};
