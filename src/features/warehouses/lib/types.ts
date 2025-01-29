export interface WarehouseData {
    id: string;
    name: string;
    code: string;
    branchName: string;
    Free_capacity: number;
    main_warehouse: string|null;
    keeper: string;
    is_Distribution_point: string
}
export type Warehouse = {
    id: string;
    name: string;
    code: string;
    location: number[];
    branch: Branch ;
    Free_capacity: number;
    main_warehouse: Branch;
    keeper: string;
    is_Distribution_point: boolean;
  };
  type Branch = {
    id: number|null;
    name: string|null;
  };
