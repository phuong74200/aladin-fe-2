import { PropsWithChildren } from "react";

import { PrivilegeModel } from "./models/PrivilegeModel";

export interface LayoutProps extends PropsWithChildren, AuthRouteObject {
    priviliges?: PrivilegeModel[];
    _children?: AuthRouteObject[];
}
