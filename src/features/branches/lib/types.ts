export interface Branch {
  id: number;
  name: string;
  code: string;
  main_branch: MainBranch;
  phone: string;
  address: string;
}

export interface MainBranch {
  id: number;
  name: string;
}
