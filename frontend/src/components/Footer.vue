<template>
  <v-footer
    color="background"
  >
    <v-card
      class="flex text-center"
      elevation="0"
      color="background"
    >
      <v-card-text>
        <v-btn
          v-for="(item, index) in footerlist"
          :key="index"
          class="mx-4"
          icon
          :href="item.link"
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>
        Copyright © Otakugatari 2022 All Rights Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data: () => ({
    footerlist: [
      {
        icon: 'mdi-home',
        link: 'https://hanehanehane.net/'
      },
      {
        icon: 'mdi-twitter',
        link: 'https://twitter.com/pentan_0331'
      },
      {
        icon: 'mdi-github',
        link: 'https://github.com/Otakugatari'
      }
    ]
  })
}

</script>
