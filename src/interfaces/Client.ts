export interface Client {
  id: string;
  name: string;
  first_last_name: string;
  second_last_name: string;
  doc_type: string;
  doc_number: string;
  birth_date: string;
  gender: string;
}

export type OpClient = Partial<Client>;

