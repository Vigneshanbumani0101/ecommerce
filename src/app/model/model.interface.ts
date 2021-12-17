export interface productModel {
    category: string;
    image: string;
    items: { name: string;
          price: number; 
          color: string;
          image: string }[];
};
