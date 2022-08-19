import { Pokemon } from "../../../domain/pokemon.model";
export interface AvatarRepository {
    get(id: number): Promise<Pokemon>;
}
