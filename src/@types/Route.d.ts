import { NonIndexRouteObject } from "react-router-dom";

import { PrivilegeModel } from "./models/PrivilegeModel";
import { LayoutProps } from "./Prop";

export interface AuthRouteObject extends NonIndexRouteObject {
    layout?: (props: LayoutProps) => JSX.Element;
    children?: AuthRouteObject[];
    child?: AuthRouteObject;
    priviliges?: PrivilegeModel[];
    nodeRef?: Ref<HTMLDivElement>;
    title?: string;
}
