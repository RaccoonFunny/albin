<template>
  <div class="app">
    <div class="wrapper">
      <header-albin/>
      <banner-albin @createOrder="createOrder"/>
      <work-albin/>
      <video-albin/>
      <approach-albin/>
      <contact-us-albin/>
    </div>
    <footer-albin/>
  </div>
</template>

<script>
import HeaderAlbin from "../components/Header-albin";
import BannerAlbin from "../components/Banner-albin";
import WorkAlbin from "../components/Work-albin";
import VideoAlbin from "../components/Video-albin";
import ApproachAlbin from "../components/Approach-albin";
import ContactUsAlbin from "../components/ContactUs-albin";
import FooterAlbin from "../components/Footer-albin";

export default {
  components: {FooterAlbin, ContactUsAlbin, ApproachAlbin, VideoAlbin, WorkAlbin, BannerAlbin, HeaderAlbin},
  methods: {
    createOrder: function () {
      return 0
    }
  }
}
</script>

<style lang="scss">



.app {
}

@media screen and (min-width: 1300px) {
  .wrapper {
    width: 1300px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 771px) {
  * {
    font-size: 14px;
  }

  .wrapper {
    width: calc(100% - 20px);
    padding: 0 10px;
    margin: 0 auto;
  }
}
</style>
