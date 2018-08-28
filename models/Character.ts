import CharacterThumbnail from "./CharacterThumbnail";
import CharacterComics from "./CharacterComics";

class Character {
    public id: number;
    public name: string;
    public description: string;
    public thumbnail: CharacterThumbnail;
    public comics: CharacterComics;
}

export default Character;
