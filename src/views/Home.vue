<template>
  <div id="home">
    <Intro />
    <PortfolioBlocks />
    <Contact />
  </div>
</template>

<script>
import Intro from '@/components/Intro'
import PortfolioBlocks from '@/components/PortfolioBlocks'
import Contact from '@/components/Contact'

export default {
  name: 'home',
  components: {
    Intro,
    PortfolioBlocks,
    Contact
  }
}
</script>
