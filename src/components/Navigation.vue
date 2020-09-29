<template>
    <nav :class="{navwhite : isActive}"
    class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a :href="$router.resolve({name: 'home'}).href" class="logo" >V.</a>
            <button @click="toggleBackground"
            class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a :href="$router.resolve({name: 'home'}).href" class="nav-link" >Home</a>
                    </li>
                    <li class="nav-item">
                         <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link scroll" to="/" href="#portfolioBlocks" >Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="http://valerievarias.com/" target="_blank" class="nav-link">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scroll" href="#contact" >Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleBackground: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>
