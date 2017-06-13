<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo">{{title}}</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
        </ul>
      </div>
    </nav>
    <main class="container">
      <router-view class="view"></router-view>
    </main>
    <footer class="page-footer">
      <div class="footer-copyright">
        <div class="container">
        <small>This starter uses the <a class="vuetify-link" href="https://vuetifyjs.com/" target="_blank">Vuetify.js</a> ui component framework.</small>
        <small>© 2017</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
module.exports = {
	data: function() {
		return {
      title: 'Hello Vue.js'
    };
	}
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

a.vuetify-link {
  color: white;
}
</style>
