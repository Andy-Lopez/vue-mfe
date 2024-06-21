<template>
  <div id="app">
    <h1>Hello Vue</h1>
  <div>{{ someData }}</div>
  <div>{{ someOtherData }}</div>
  <button v-if="someBool">'I should show if someBool is true</button>
  </div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application.
 */

export default {
  /**
   * The name of the application.
   */
  name: 'Dashboard',

  /**
   * Fires when the app has been mounted.
   */
  props: {
    someData: '',
    someOtherData: '',
    someBool: false
  },
  mounted() {
    // If the user is authenticated,
    // fetch the data from the API

  },
};
</script>