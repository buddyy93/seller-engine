<template>
   <v-app>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer" 
      right
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-title>
            <h2>Keranjang</h2>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-for="item in cart" :key="item.id">
          <v-list-tile-content>
            <v-list-tile-title>{{item.namaProduk}}</v-list-tile-title>
            {{item.harga}}
            <p>Total : {{total = item.harga + total}}</p>
          </v-list-tile-content>
        </v-list-tile>
        <hr>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" app fixed clipped-right>
      <v-toolbar-title style="cursor:pointer">
        <router-link to="/">Seller Engine</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge left>
      <span slot="badge">{{cart.length}}</span>
      <v-icon color="grey lighten-1" @click.stop="drawer = !drawer" style="cursor:pointer">shopping_cart</v-icon>
    </v-badge>
      <v-btn flat>Seller</v-btn>
    </v-toolbar>
    <v-content>
     <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      nilai: 0,
      total: 0
    }
  },
  computed: {
    cart () {
      return this.$store.getters.cart
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: white;
  }
</style>


