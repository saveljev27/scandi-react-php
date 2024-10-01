import { ProductFormProps } from '@/types';

export const validateForm = (
  formData: ProductFormProps
): Record<string, string[]> => {
  const newErrors: Record<string, string[]> = {};

  const type = formData.product_type;

  const validateRule = (
    key: keyof ProductFormProps,
    ruleName: string,
    ruleValue?: string | number
  ): string | false => {
    const value = formData[key];

    switch (ruleName) {
      case 'required':
        if (!value || value.trim() === '') {
          return `Field ${key} is required.`;
        }
        break;
      case 'min':
        if (value && value.length < Number(ruleValue)) {
          return `Field ${key} must be at least ${ruleValue} characters long.`;
        }
        break;
      case 'max':
        if (value && value.length > Number(ruleValue)) {
          return `Field ${key} must be at most ${ruleValue} characters long.`;
        }
        break;
      case 'typeswitcher':
        if (!['DVD', 'Book', 'Furniture'].includes(value as string)) {
          return `Field type must have a valid type (DVD, Book, Furniture).`;
        }
        break;
      case 'size':
        if (type === 'DVD' && (!formData.size || formData.size === '')) {
          return `Field Size (MB) is required.`;
        }
        break;
      case 'weight':
        if (type === 'Book' && (!formData.weight || formData.weight === '')) {
          return `Field Weight (KG) is required.`;
        }
        break;
      case 'height':
        if (
          type === 'Furniture' &&
          (!formData.height || formData.height === '')
        ) {
          return `Field Dimension (H) is required.`;
        }
        break;
      case 'width':
        if (
          type === 'Furniture' &&
          (!formData.width || formData.width === '')
        ) {
          return `Field Dimension (W) is required.`;
        }
        break;
      case 'length':
        if (
          type === 'Furniture' &&
          (!formData.length || formData.length === '')
        ) {
          return `Field Dimension (L) is required.`;
        }
        break;
    }
    return false;
  };

  const rules: Record<keyof ProductFormProps, string[]> = {
    sku: ['required', 'min:3', 'max:50'],
    name: ['required', 'min:3', 'max:50'],
    price: ['required'],
    product_type: ['typeswitcher'],
    size: ['size'],
    weight: ['weight'],
    height: ['height'],
    width: ['width'],
    length: ['length'],
  };

  Object.entries(rules).forEach(([key, fieldRules]) => {
    fieldRules.forEach((rule) => {
      const [ruleName, ruleValue] = rule.split(':');
      const error = validateRule(
        key as keyof ProductFormProps,
        ruleName,
        ruleValue
      );
      if (error) {
        newErrors[key] = newErrors[key] ? [...newErrors[key], error] : [error];
      }
    });
  });

  return newErrors;
};
