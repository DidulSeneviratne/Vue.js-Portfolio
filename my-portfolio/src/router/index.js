
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Projects from '../views/ProjectsPage.vue'
import Contact from '../views/ContactPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/contact', name: 'contact', component: Contact }
  ]
})
