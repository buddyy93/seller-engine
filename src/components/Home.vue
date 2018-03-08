<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="mx-2 my-2" xs6 md2 v-for="item in items" :key="item.id">
        <v-card>
          <v-card-media style="cursor:pointer" @click="clickDetail(item.id)">
            <img :src="item.gambar_produk" alt="" height="200">
          </v-card-media>
          <v-card-text>
            {{item.nama_produk}}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="masukChart()">Beli</v-btn>
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
        items: [{
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        },
        {
          id: 12,
          nama_produk: 'Tes Nama Produk',
          gambar_produk: 'https://dummyimage.com/vga'
        }
        ]
      }
    },
    methods: {
      clickDetail (id) {
        this.$router.push('/detail/' + id)
      },
      masukChart () {
        alert('Hello')
      }
    }
  }
</script>
