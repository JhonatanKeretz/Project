<template>
  <v-app>
    <v-app-bar app blue>
      <v-toolbar-title fixed-tabs background-color="indigo" dark>
        <v-tabs>
          <v-tab to="/">Planos de Ação</v-tab>
          <v-tab to="/tasks/new">Adicionar plano</v-tab>
        </v-tabs>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
//import Navbar from './components/Navbar.vue';

export default Vue.extend({
  name: "App",
  data: () => ({}),
});
</script>

