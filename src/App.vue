<template>
  <v-app>
    <v-main>
      <Entete />
      <Calendar />
    </v-main>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar";
import Entete from "./components/Entete";

export default {
  name: "App",

  components: {
    Calendar,
    Entete
  },

  data: () => ({
  }),
};
</script>
