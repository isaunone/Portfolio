<template>
  <div class="project-details">
    <div class="close-outer" @click="$router.go(-1)">
      <div class="close-inner">
        <label>Back</label>
      </div>
    </div>

    <h1>{{projectsList.title}}</h1>
    <div class="main-img"><img :src="projectsList.main_img" :alt="projectsList.title"></div>
    <div class="row description container">
      <div class="col-md-6">
        <h3>Project overview</h3>
        <p>{{projectsList.description}}</p>
      </div>
      <div class="col-md-5 offset-md-1">
        <h3>My roles</h3>
        <ul>
          <li v-for="(role, index) in projectsList.role" :key="index">
            {{ role }}
          </li>
        </ul>
      </div>
    </div>
    <div v-if="projectsList.screen">
      <img v-bind:src="projectsList.screen" :alt="projectsList.title">
    </div>
  </div>
</template>

<script>
import projectsList from '@/data/projects'
export default {
  name: 'portfolio',
  data () {
    return {
      projectsList
    }
  },
  mounted () {
    this.projectsList = projectsList.find(item => item.alt === this.$route.params.Pid)
  }
}
</script>
