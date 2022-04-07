export class Recipe {
    constructor(public recipe_name: string, public recipe_pic: string, public recipe_rating: number, public procedure: string,  public ingredient: string, public category: string, public guests_served: number, public country: string, public created_date: Date, public created_by: string) { }
}
