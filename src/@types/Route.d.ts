import { RouteObject } from "react-router-dom";

import { PrivilegeModel } from "./models/PrivilegeModel";
import { LayoutProps } from "./Prop";

type AuthRouteObject = RouteObject & {
    layout?: (props: LayoutProps) => JSX.Element;
    children?: AuthRouteObject[];
    priviliges?: PrivilegeModel[];
};
