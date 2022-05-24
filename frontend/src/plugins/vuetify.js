import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#013D7A',
        secondary: '#BB3F00',
        accent: '#BB9000',
        background: '#e6ebf1'
      }
    }
  }
});
