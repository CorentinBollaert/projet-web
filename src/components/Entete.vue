<template>
 
    <v-app-bar app color="primary" dark>
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


      <ToggleButton/>

      <v-spacer></v-spacer>

      <DropDownMenu/>


    </v-app-bar>

</template>

<script>

// import DropDownMenu from "./components/DropDownMenu";
import DropDownMenu from './DropDownMenu.vue';
import ToggleButton from './ToggleButton.vue';

export default {
  components: { DropDownMenu, ToggleButton },
  }
</script>

<style>
v-app-bar{
  flex-direction: row;
  align-items: center;
}
</style>