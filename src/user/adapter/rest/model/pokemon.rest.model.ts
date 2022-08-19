export class PokemonRestModel {
    id: number;
    name: string;
    sprites: Sprites;
}
class Sprites{
    backDefault:string;
    backFemale:string;
    backShiny:string;
    backShinyBack:string;
    frontDefault:string
    frontFemale:string
    frontShiny:string
    frontShinyFemale:string
    other: Other
}

class Other{
    home:Home
}

class Home{
    front_default:string
    frontFemale:string
}
