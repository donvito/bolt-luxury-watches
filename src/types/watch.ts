export interface Watch {
  id: string;
  brand: string;
  model: string;
  reference: string;
  price: number;
  year: number;
  movement: string;
  case: {
    material: string;
    diameter: number;
    thickness: number;
    waterResistance: number;
  };
  description: string;
  history: string;
  imageUrl: string;
}