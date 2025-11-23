
<template>
  <b-navbar type="is-dark" fixed-top>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ name: 'home' }">
        <strong>My Portfolio</strong>
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ name: 'about' }">About</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'projects' }">Projects</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'contact' }">Contact</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default { name: 'NavbarSection' }
</script>
