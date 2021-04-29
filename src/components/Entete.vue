<template>
  <!--<v-app-bar app color="primary" dark> -->

  <v-app-bar
    app
    color="#43a047"
    dark
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-5"
  >
    <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

    <ToggleButton />

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
@media (min-width: 1850px)  {
  #dropdown-small {
    display: none;
  }
  .v-app-bar.v-app-bar--fixed{
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 1850px)  {
  #dropdown-wide {
    display: none;
  }
}

v-app-bar {
  flex-direction: row;
  align-items: center;
}
</style>