<template>
<div class="container m-auto b-white mt-3 p-5 mb-3">
    <div class="m-auto found"> 
        <h5 class="p-3 white">Found {{store.charactersList.length}} characters</h5>
    </div>

    <div class="row g-3">
        <div class="colonna" v-for="personaggio in store.charactersList">
            <div class="card text-center p-1">
                <h5>{{personaggio.name}}</h5>
                <h6 class="display-6 fs-6">{{personaggio.gender}}</h6>
                <span>{{personaggio.height}}cm x {{personaggio.mass}}Kg</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {store, fetchStarWars} from '../store'

export default{
    data () {
        return{
            store
        };
    },

    created() {
        fetchStarWars()
    },

}
</script>

<style lang="scss" scoped>
.found{
    background-color: black;
}
.b-white{
    background-color: white;
}
.card{
    min-height: 125px;
}
.colonna{
    width: 20%;
}
</style>