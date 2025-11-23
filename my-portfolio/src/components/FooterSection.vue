
<template>
  <footer class="footer has-background-dark has-text-white">
    <div class="content has-text-centered">
      © {{ year }} My Portfolio. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default { 
  name: "FooterSection",
  data(){ return { year: new Date().getFullYear() }}
}
</script>
