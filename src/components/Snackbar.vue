<template>
  <form novalidate @submit.stop.prevent="showSnackbar = true">
    <md-button type="submit" class="md-primary md-raised">Open Snackbar</md-button>

    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>Programme importé dans le presse-papier</span>
      <md-button class="md-primary" @click="showSnackbar = false">Ok</md-button>
    </md-snackbar>
  </form>
</template>

<script>
export default {
  name: 'Snackbar',
  data: () => ({
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false
  })
}
</script>
