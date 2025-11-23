
<template>
  <b-card :title="project.title" :header="project.year" class="mb-4">
    <div class="content">{{ project.description }}</div>
    <b-button type="is-link" @click="open(project.link)">Visit</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: { project: Object },
  methods: {
    open(url) { window.open(url, "_blank"); }
  }
}
</script>
