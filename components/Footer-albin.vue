<template>
  <section class="footer">
    <div class="wrapper row">
      <img :src="'./img/logo.png'" alt="" class="logo">
      <div class="site-links">
        <ul>
          <li>О нас</li>
          <li>Портфолио</li>
          <li>Связаться</li>
        </ul>
      </div>
      <div class="social-links">
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>VK</li>
        </ul>
      </div>
      <div class="feedback">
        <ul>
          <li><a href="tel:89096756755">+ 7(929) 303-29-32</a></li>
          <li><a href="mailto:info@albinstudio.ru">info@albinstudio.ru</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer-albin"
}
</script>

<style scoped lang="scss">
.footer {
  background: $gray;

  img {
    width: 98px;
    height: 98px;
    margin-right: 92px;
    position: relative;
    top: -30px;

    @media screen and (max-width: 771px) {
      & {
        width: 50px;
        height: 50px;
        margin-right: 30px;
      }
    }
  }

  .wrapper {
    padding: 75px 0 85px;
  }

  .site-links li, .social-links li, .feedback li {
    margin-bottom: 40px;

    @media screen and (max-width: 771px) {
      & {
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 140%;
      }
    }
  }

  .site-links , .social-links {
    margin-right: 150px;
    @media screen and (max-width: 771px) {
      & {
        margin-right: 30px;
      }
    }
  }
}
</style>
