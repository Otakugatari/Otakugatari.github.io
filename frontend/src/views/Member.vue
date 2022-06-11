<template>
<!--メンバーの専門分野など -->
<v-container>
  <div class="text-h4 pb-2">
    運営メンバー
  </div>
  <v-row>
    <v-col
     v-for="member in admin_member"
     :key="member"
     cols="6" xs="4"
    >
      <v-card>
        <v-img
         height="150"
         contain
         :src="member.img"
        ></v-img>
        <v-card-title>{{member.name}}</v-card-title>
      </v-card>
    </v-col>
  </v-row>

  <div class="text-h4 pt-10 pb-2">
    参加メンバー
  </div>
  <v-row>
    <v-col
     v-for="member in general_member"
     :key="member"
     cols="4"
    >
      <v-card>
        <v-img
         height="150"
         contain
         :src="member.img"
        ></v-img>
        <v-card-title>{{member.name}}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  export default {
  name: 'FooterComp',
  data: () => ({
    admin_member: [
      {
        name: 'ぺんたん。',
        img: '/image/icon/pentan.png',
        field: ['分子生物学', '遺伝学'],
        hobby: ['Splatoon2', 'お絵描き'],
        greeting: '分子生物学はいいぞ。',
        twitter: '@pentan_0331',
        HP: ''
      },
      {
        name: 'まっしろ',
        img: '/image/icon/default.png',
        field: ['電磁気', '電磁波'],
        hobby: ['スキー', 'ジグソーパズル', 'パラドゲー'],
        greeting: '',
        twitter: '',
        HP: ''
      },
      {
        name: 'ハネ',
        img: '/image/icon/hane.jpg',
        field: ['機械学習', '集積回路'],
        hobby: ['個人開発', 'TRPG'],
        greeting: '一緒に共同開発したいものがあれば是非誘ってください!',
        twitter: '@barla_wings',
        HP: 'https://hanehanehane.net/'
      }
    ],
    general_member: [
      {
        name: 'カシオレ侍',
        img: '/image/icon/cassiore.jpeg',
        field: ['医学'],
        hobby: [],
        greeting: 'オンラインで医学の知識を提供するアイカルシンも運営しております。是非下のリンクからご覧ください。',
        twitter: '',
        HP: 'https://icalsine334.wixsite.com/website'
      },
    ]
  })
}
</script>