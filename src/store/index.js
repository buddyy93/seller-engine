import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [{
      id: 10,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 120000
    },
    {
      id: 13,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 130000
    },
    {
      id: 14,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 120400
    },
    {
      id: 15,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 129900
    },
    {
      id: 16,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 220000
    },
    {
      id: 17,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 320000
    },
    {
      id: 18,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 420000
    },
    {
      id: 19,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 120040
    },
    {
      id: 20,
      namaProduk: 'Tes Nama Produk',
      gambarProduk: 'https://dummyimage.com/vga',
      harga: 124400
    }
    ],
    cart: []
  },
  mutations: {
    masukcart (state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
    masukCart ({commit}, payload) {
      const cart = {
        id: payload.id,
        namaProduk: payload.namaProduk,
        gambarProduk: payload.gambarProduk,
        harga: payload.harga
      }
      console.log('[Actions] ' + cart)
      commit('masukcart', cart)
    }
  },
  getters: {
    items (state) {
      return state.items
    },
    cart (state) {
      return state.cart
    }
  }
})
