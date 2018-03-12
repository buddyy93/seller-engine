<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="px-2 py-2" xs6 sm3  md2 v-for="item in items" :key="item.id">
        <v-card>
          <v-card-media style="cursor:pointer" @click="clickDetail(item.id)">
            <img style="object-fit:cover" :src="item.gambarProduk" alt="" height="200">
          </v-card-media>
          <v-card-text>
            {{item.namaProduk}}
          </v-card-text>
          <v-card-text>
            Rp{{item.harga}}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="masukCart(item.id, item.namaProduk, item.gambarProduk, item.harga)">Beli</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      items () {
        return this.$store.getters.items
      }
    },
    methods: {
      clickDetail (id) {
        this.$router.push('/detail/' + id)
      },
      masukCart (id, namaProduk, gambarProduk, harga) {
        this.$store.dispatch('masukCart', {id: id, namaProduk: namaProduk, gambarProduk: gambarProduk, harga: harga})
      }
    }
  }
</script>
