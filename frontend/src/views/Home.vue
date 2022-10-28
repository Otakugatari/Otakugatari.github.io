<template>
<!-- サイトの各ページに何が書いてあるか紹介 -->
  <v-container>
    <v-row>
      <!-- サークルについて軽く紹介 -->
      <v-col cols="12">
        <v-card tile>
          <v-card-title class="font-weight-bold">
            オタク語りとは
          </v-card-title>
          <v-card-text>
            自分たちの好きな分野を人々に「布教」しようという想いのもと集まったサークルです。
            メンバーは大学生・大学院生で、専門分野は生物学や医学、物理学、情報学など多岐にわたります。普段は触れることのない分野もぜひ覗いてみてください。
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 告知 -->
      <v-col cols="12">
        <v-card tile>
          <v-card-title class="font-weight-bold">
            イベント告知
          </v-card-title>
          <v-card-text>
            各種更新記録は<a href="https://twitter.com/pentan_0331" target="_brank">Twitter</a>を参照
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
  name: 'home',
  data: () => ({
    //
  })
}
</script>
