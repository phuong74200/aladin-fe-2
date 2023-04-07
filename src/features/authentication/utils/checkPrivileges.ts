import { v4 as uuidv4 } from "uuid";

import { PrivilegeModel } from "~/@types";

const isMatchAny = (o1: PrivilegeModel, o2: Partial<PrivilegeModel>) => {
  const keys = Object.keys(o2);
  for (const key of keys) {
    const privilegeKey = key as keyof PrivilegeModel;
    if (o1) {
      if (o1[privilegeKey] !== o2[privilegeKey]) return false;
    }
  }
  return true;
};

export default function checkPrivilege(
  usrPrivileges: PrivilegeModel[],
  reqPrivileges: Partial<PrivilegeModel>[] = []
) {
  const usrPrivilegesMap = new Map<string, PrivilegeModel>(
    usrPrivileges.map((privilege) => [privilege.entity, privilege])
  );
  for (const privilege of reqPrivileges) {
    const stat = usrPrivilegesMap.get(privilege.entity || uuidv4());
    if (stat && !isMatchAny(stat, privilege)) return false;
  }
  return true;
}
