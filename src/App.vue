<template>
  <v-app>
    <v-main>
      <Entete />
      <Calendar />
      <!-- <HelloWorld /> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Calendar from "./components/Calendar";
import Entete from "./components/Entete";
export default {
  name: "App",

  components: {
    Calendar,
    Entete
    // HelloWorld
  },

  data: () => ({
    //
  }),
};
</script>
