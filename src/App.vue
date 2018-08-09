<script>
export default {
  name: "app"
};
</script>
<template>
  <div id="main">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/docs'>Docs</router-link>
    </nav>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  padding-left: 15px; 
}
</style>
