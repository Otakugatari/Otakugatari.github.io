<template>
<!--連絡先 -->
  <v-card>
    <v-card-title class="font-weight-bold">
      連絡先
    </v-card-title>
    <v-list-item single-line>
      <v-list-item-avatar
        tile
        size="80">
        <v-img src="@/assets/icon/pentan.png"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1">
          代表：ぺんたん。
          <v-btn icon href="mailto:pentan0331@gmail.com">
            <v-icon size="24px">
              mdi-email
            </v-icon>
          </v-btn>
          <v-btn icon href="https://twitter.com/pentan_0331">
            <v-icon size="24px">
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
  name: 'contact',
  data: () => ({
    //
  })
}
</script>
