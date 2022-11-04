export interface Main {
  children?: React.ReactNode | [React.ReactNode];
}

export interface Product {
  category: string;
  currency: string;
  description: string;
  id: string;
  image: string;
  name: string;
  onstock: boolean;
  price: number;
  slug: string;
}
export interface Orders {
  amount: number;
  amountShipping: number;
  id: string;
  images: string[];
  items: {
    amount_discount: number;
    amount_subtotal: number;
    amount_tax: number;
    amount_total: number;
    currency: string;
    description: string;
    id: string;
    object: string;
    price: {
      unit_amount: number;
    };
    quantity: 1;
  }[];
  timestamp: number;
}
