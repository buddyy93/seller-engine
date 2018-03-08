<template>
   <v-app>
    <!-- <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar color="indigo" dark fixed app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-title style="cursor:pointer">
        <router-link to="/">Seller Engine</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge left>
      <span slot="badge">{{nilai}}</span>
      <v-icon large color="grey lighten-1">shopping_cart</v-icon>
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
      drawer: true,
      nilai: 0
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


