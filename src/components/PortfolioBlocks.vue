<template>
    <div class="container">
        <h1>Latest works</h1>
        <div class="row">
            <div v-for="(project, index) in projects" :key="index" class="col-6 project">
                <div class="project-img">{{ project.title }}</div>
                <div class="project-title"></div>
                <div class="project-description"></div>
            </div>
        </div>
    </div>
</template>

<script>
import projects from '@/data/projects'

export default {
  data () {
    return {
      projects
    }
  }
}
</script>
