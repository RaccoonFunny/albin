<template>
  <section class="video">
    <iframe src="https://www.youtube.com/embed/89DSi6Ofdno" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen/>
  </section>
</template>

<script>
export default {
  name: "Video-albin"
}
</script>

<style scoped lang="scss">
.video {

  margin: 150px;

  @media screen and (max-width: 776px) {
    & {
      margin: 0;
    }
  }

  iframe {
    width: 100%;
    height: 560px;
  }
}
</style>
