export interface ProductFormProps {
  sku: string;
  name: string;
  price: string;
  product_type: string;
  size?: string;
  weight?: string;
  height?: string;
  width?: string;
  length?: string;
}
export const defaultFormData: ProductFormProps = {
  sku: '',
  name: '',
  price: '',
  product_type: '',
  size: '',
  weight: '',
  height: '',
  width: '',
  length: '',
};

export interface ProductProps {
  sku: string;
  name: string;
  price: number;
  details: {
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
  };
}

export interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (name: string, value: string) => void;
  errors: Record<string, string[]>;
}
