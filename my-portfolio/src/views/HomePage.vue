
<template>
  <div class="container">
    <h1 class="title is-1">Hi, I'm Your Name</h1>
    <p></p>
    <p class="subtitle is-4">I am a Developer, Designer, and Creator.</p>
    <b-button type="is-primary" size="is-medium" @click="$router.push('/projects')">
      View My Work
    </b-button>
  </div>
</template>

<script>
export default { name: "HomePage" }
</script>
