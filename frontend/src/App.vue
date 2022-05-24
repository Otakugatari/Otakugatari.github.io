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
            fixed-tabs
            dark
          >
            <v-tab>Home</v-tab>
            <v-tab>About</v-tab>
            <v-tab>Event</v-tab>
            <v-tab>Contact</v-tab>
          </v-tabs>
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
