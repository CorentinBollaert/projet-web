<template>
  <v-app-bar
    app
    color="#43a047"
    dark
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-5"
  >
    <v-spacer></v-spacer>
    <DropDownMenu />
  </v-app-bar>
</template>

<script>
// import DropDownMenu from "./components/DropDownMenu";
import DropDownMenu from "./DropDownMenu.vue";
export default {
  components: { DropDownMenu },
};
</script>

<style>
@media (min-width: 1850px) {
  #dropdown-small {
    display: none;
  }
  .v-app-bar.v-app-bar--fixed {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 1850px) {
  #dropdown-wide {
    display: none;
  }
}

v-app-bar {
  flex-direction: row;
  align-items: center;
}
</style>