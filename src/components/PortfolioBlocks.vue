<template>
  <section id="portfolioBlocks">
    <div class="container">
        <h1>Latest works</h1>
        <div class="row">
            <div v-for="(project, index) in projectsList" :key="index" class="col-md-6 project">
                <div @click="goTodetail(project.alt)">
                    <div class="project-img">
                        <img :src="project.thumb_img" :alt="project.title">
                    </div>
                    <h4 class="project-title">{{ project.title }}</h4>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import projectsList from '@/data/projects'

export default {
  data () {
    return {
      projectsList
    }
  },
  methods: {
    goTodetail (prodId) {
      const proId = prodId
      this.$router.push({ name: 'portfolio', params: { Pid: proId } })
    }
  }
}
</script>
