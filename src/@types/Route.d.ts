import { NonIndexRouteObject } from "react-router-dom";

import { PrivilegeModel } from "./models/PrivilegeModel";
import { LayoutProps } from "./Prop";

export type AuthRouteObject = NonIndexRouteObject & {
    layout?: (props: LayoutProps) => JSX.Element;
    children?: AuthRouteObject[];
    priviliges?: PrivilegeModel[];
};
