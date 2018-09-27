<template>
  <v-app>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Fishoneer</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Fish</v-btn>
      <v-btn flat>More Fish</v-btn>
      <v-btn flat>Morer FISH</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" }
      ],
      miniVariant: false,
      right: true,
      title: "Fishoneer"
    };
  }
};
</script>
