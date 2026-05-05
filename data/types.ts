interface Allergen {
  id: string;
  name: string;
}

interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
  allergens: Allergen[];
}

interface Category {
  id: string;
  name: string;
  subtitle: string;
  number: string;
  dishes: Dish[];
}

export interface MenuData {
  categories: Category[];
}