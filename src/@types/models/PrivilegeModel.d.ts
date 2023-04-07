export interface PrivilegeModel {
  entity: string;
  create?: boolean;
  read?: boolean;
  update?: boolean;
  delete?: boolean;
}
