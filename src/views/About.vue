<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="about-img">
            <img src="@/assets/images/about-img.jpg" alt="About Valerie ">
          </div>
        </div>
        <div class="col-md-6 offset-md-1">
          <h1>Hi, I'm Valerie</h1>
          <p>
            I'm 28, living in the Netherlands but originally from the Philippines.
            Working as a Webdesigner and a Frontend developer. I enjoy both design and frontend coding.
          </p>
          <p>
            When I'm not designing or coding, you'll find me cooking, eating or travelling.
            Apart from that I'm also a musician, I'm either the drummer, keyboardist or rythm guitarist ;).
          </p>
        </div>
      </div>
    </div>
  </section>
  <Contact />
</template>

<script>
import Contact from '@/components/Contact'

export default {
  name: 'about',
  components: {
    Contact
  }
}
</script>
