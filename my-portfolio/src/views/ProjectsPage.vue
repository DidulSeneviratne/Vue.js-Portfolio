
<template>
  <div class="container">
    <h1 class="title is-2">My Projects</h1>
    <ProjectCard 
      v-for="(p, index) in projects" 
      :key="index" 
      :project="p" />
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue"

export default {
  name: "ProjectsPage",
  components: { ProjectCard },
  data() {
    return {
      projects: [
        { title: "UI/UX Generator", year: "2024", description: "ML powered UI Generator.", link: "#" },
        { title: "Weather App", year: "2025", description: "A modern weather app.", link: "#" }
      ]
    }
  }
}
</script>
