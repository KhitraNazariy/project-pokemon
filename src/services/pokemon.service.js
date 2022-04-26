import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const pokemonService = {
    getAll: (offset) => axiosService.get(urls.pokemon, {params: {limit: 20, offset}}).then(value => value.data),
    getPokemonByName: (name) => axiosService.get(`${urls.pokemon}/${name}`).then(value => value.data)
}