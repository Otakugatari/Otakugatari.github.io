<template>
  <v-app class="background" style="">
    <v-main class="background">
      <v-container class="pa-0 background">
          <v-col cols="12" xl="8" class="pa-0 mx-auto">
            <v-img
              src="./assets/header.png"
            ></v-img>
            <v-container class="pa-0">
              <v-row no-gutters>
                <v-col
                 v-for="con in contents"
                 :key="con"
                 cols="6" md="4" lg="2"
                >
                  <v-btn block tile dark :to="con.link" active-class="secondary--text text--lighten-3" elevation="0">
                    {{con.text}}
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <router-view/>
            </v-container>
          </v-col>
      </v-container>
      <!--
      <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="8" class="pt-0">
          <v-tabs
            color="secondary lighten-2"
            grow
            dark
          >
            <v-tab to="/">Home</v-tab>
            <v-tab to="/about">About</v-tab>
            <v-tab to="/event">Event</v-tab>
            <v-tab to="/member">Member</v-tab>
            <v-tab to="/contact">Contact</v-tab>
            <v-tab to="/links">Links</v-tab>
          </v-tabs>
          <router-view/>
        </v-col>
      </v-row>
      </v-container>
      -->
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
    contents: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Event',
        link: '/event'
      },
      {
        text: 'Member',
        link: '/member'
      },
      {
        text: 'Contact',
        link: '/contact'
      },
      {
        text: 'Links',
        link: '/links'
      }
    ]
  }),
};
</script>
