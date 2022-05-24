<template>
  <v-app class="background">
    <v-main class="background">
      <v-container class="pa-0 background">
        <v-row justify="center">
          <v-col cols="12" xl="8">
            <v-img
              src="./assets/header.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="pa-0">
      <v-row justify="center">
        <v-col cols="12" xl="8" class="pt-0">
          <v-tabs
            color="secondary lighten-2"
            fixed-tabs
            dark
          >
            <v-tabs-slider color="secondary lighten-2"></v-tabs-slider>
            <v-tab to="/">Home</v-tab>
            <v-tab to="/about">About</v-tab>
            <v-tab to="/event">Event</v-tab>
            <v-tab to="/contact">Contact</v-tab>
            <v-tab href="https://hanehanehane.net/">
              Blog&nbsp;<v-icon>mdi-open-in-new</v-icon>
            </v-tab>
          </v-tabs>
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
