import {reactive} from 'vue'
import axios from "axios"

export const store = reactive({

    charactersList: [],

})

export function fetchStarWars () {

    axios.get('https://swapi.dev/api/people/')
        .then((response)=>{
            
            store.charactersList = response.data.results;

        })
}