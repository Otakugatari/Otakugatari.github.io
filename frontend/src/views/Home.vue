<template>
<!-- サイトの各ページに何が書いてあるか紹介 -->
  <v-container>
    <v-row>
      <!-- サークルについて軽く紹介 -->
      <v-col cols="12">
        <v-card tile>
          <v-card-title class="font-weight-bold">
            About Us
          </v-card-title>
          <v-card-text>
            自分たちの「好き！」を人々に「布教」しようという想いのもと集まったサークルです。
            メンバーは大学生・大学院生で、専門分野は生物学や医学、物理学、情報学など多岐にわたります。普段は触れることのない分野もぜひ覗いてみてください。
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn to="/about">
              ABOUT
            </v-btn>
            <v-btn to="/member">
              MEMBER
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- 告知 -->
      <v-col cols="12" md="6">
        <v-card tile>
          <v-card-title class="font-weight-bold">
            イベント告知
          </v-card-title>
          <v-card-text>
            「オタク語ル」の開催や、イベント参加の告知を行います。
            各種更新記録は<a href="https://twitter.com/pentan_0331" target="_brank">Twitter</a>を参照
          </v-card-text>
        </v-card>
      </v-col>

      <!-- リンク -->
      <v-col cols="12" md="6">
        <v-card tile>
          <v-card-title class="font-weight-bold">
            リンク
          </v-card-title>
          <v-card-text>
            メンバーブログやグッズの購入はこちらから
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn to="/links">
              LINKS
            </v-btn>
            <!--
            <v-btn href="https://pentan.booth.pm/" target="_brank">
              Booth
            </v-btn> -->
          </v-card-actions>
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
