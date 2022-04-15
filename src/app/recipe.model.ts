export interface Recipe {
    id?: any;
    name?: string;
    description: string;
    imagePath: string;
    ingredients: string[];
    rating: number;
    procudure: string;
    category: string;
    guests: number;
    country: string;
    date: string;
    by: string;
}
