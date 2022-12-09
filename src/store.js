import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({

    charactersList: [],
    filter: '',

});

export function fetchStarWars(){

    axios.get('https://swapi.dev/api/people/', {
        params: {
            search: store.filter,
        }
    }).then((response) => {

        store.charactersList = response.data.results;
        console.log("ciao")

    })
}