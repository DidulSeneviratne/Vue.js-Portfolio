
<template>
  <div id="app">
    <Navbar />
    <section class="section">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/NavbarSection.vue'
import Footer from './components/FooterSection.vue'

export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>
