export class Trending {
    showDescription: boolean;
    constructor(public id: number, public name: string, public rating: string, public description: string, public ingridients:string, public number_served: number, public country: string){
        this.showDescription=false;
    }
}
