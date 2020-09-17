<template>
  <Navigation />
  <Home />

</template>

<script>
import Home from './views/Home'
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation,
    Home
  }
}
</script>
