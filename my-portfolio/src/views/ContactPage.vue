
<template>
  <div class="container">
    <h1 class="title is-2">Contact Me</h1>
    <b-field label="Name"><b-input v-model="name"></b-input></b-field>
    <b-field label="Email"><b-input type="email" v-model="email"></b-input></b-field>
    <b-field label="Message"><b-input type="textarea" v-model="message"></b-input></b-field>

    <b-button type="is-primary" @click="submit">Send Message</b-button>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data(){ return { name:'', email:'', message:'' }},
  methods:{
    submit(){
      this.$buefy.toast.open("Message sent!")
    }
  }
}
</script>
