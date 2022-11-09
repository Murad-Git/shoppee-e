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
  quantity: number;
  totalPrice: number;
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
    quantity: number;
  }[];
  totalItems: number;
  timestamp: number;
}

export interface Session {
  id: string;
  object: string;
  after_expiration: null | number;
  allow_promotion_codes: null | boolean;
  amount_subtotal: null | number;
  amount_total: null | number;
  automatic_tax: {
    enabled: boolean;
    status: null | string;
  };
  billing_address_collection: null;
  cancel_url: string;
  client_reference_id: null | number;
  consent: null;
  consent_collection: null;
  created: number;
  currency: null | string;
  customer: null | string;
  customer_creation: null;
  customer_details: null | string;
  customer_email: null | string;
  expires_at: number;
  livemode: boolean;
  locale: null | string;
  metadata: {
    [key: string]: any;
  };
  mode: string;
  payment_intent: string;
  payment_link: null | string;
  payment_method_collection: null;
  payment_method_options: object;
  payment_method_types: [string];
  payment_status: string;
  phone_number_collection: {
    enabled: boolean;
  };
  recovered_from: null;
  setup_intent: null;
  shipping_address_collection: {
    allowed_countries: [string];
  };
  shipping_cost: null | number;
  shipping_details: null | string;
  shipping_options: [];
  status: string;
  submit_type: null;
  subscription: null;
  success_url: string;
  total_details: {
    [key: string]: any;
  };
  url: null | string;
}
// export interface ErrnoException extends Error {
//   errno?: number;
//   code?: string;
//   path?: string;
//   syscall?: string;
//   stack?: string;
// }
