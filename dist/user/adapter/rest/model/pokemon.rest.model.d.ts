export declare class PokemonRestModel {
    id: number;
    name: string;
    sprites: Sprites;
}
declare class Sprites {
    backDefault: string;
    backFemale: string;
    backShiny: string;
    backShinyBack: string;
    frontDefault: string;
    frontFemale: string;
    frontShiny: string;
    frontShinyFemale: string;
    other: Other;
}
declare class Other {
    home: Home;
}
declare class Home {
    front_default: string;
    frontFemale: string;
}
export {};
