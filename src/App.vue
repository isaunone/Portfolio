<template>
  <Navigation v-if="!$route.meta.hideNavigation" />
  <router-view></router-view>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>
