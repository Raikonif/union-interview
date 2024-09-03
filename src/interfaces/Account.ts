export interface Account {
  id: string;
  account_type: string;
  account_number: number;
  currency: string;
  amount: string;
  created_at: string;
  branch: string;
}

export type OpAccount = Partial<Account>;
