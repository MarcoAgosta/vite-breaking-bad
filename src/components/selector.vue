<template>
    <div class="container mt-3 w-25">
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="filtro"
            @change="onFilter">
            <option value="">All</option>
            <option value="Darth">Darth</option>
            <option value="Skywalker">Skywalker</option>
            <option value="Organa">Organa</option>
        </select>
    </div>
</template>

<script>
import { fetchStarWars, store } from '../store'
export default {

    data() {
        return {
            store,
            filtro: 'Seleziona categoria'
        }
    },

    methods: {
        onFilter() {

            this.store.filter = this.filtro;
            fetchStarWars();
        }

    },
}


</script>

<style lang="scss" scoped>

</style>