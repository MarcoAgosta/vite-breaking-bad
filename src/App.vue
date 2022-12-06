<script>
import Main from "./components/main.vue"
import Selector from "./components/selector.vue"
export default{
  data(){
    return{

    }
  },
  components: {Main, Selector}
}
</script>

<template>
  <div class="general-background">
    <div class="pt-1 ml-1 d-flex align-items-center">
      <img class="logo m-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Logo Breaking-Bad">
      <h1 class="white">Star Wars API</h1>
    </div>
    <Selector></Selector>
    <Main></Main>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";

.general-background{
  background-color: black;
}

.white{
  color: white;
}

.logo{
  height: 4rem;
}

</style>