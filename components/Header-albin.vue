<template>
  <section class="header">
    <div class="align-left">
      <div class="logo to-top">
        <img src="/img/logo.png" alt="">
      </div>
      <ul class="nav">
        <li>О нас</li>
        <li>Портфолио</li>
        <li>Связаться</li>
      </ul>
    </div>
    <div class="align-right">
      <div class="change-lang">
        {{ currentLang }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header-albin",
  data: function () {
    return {
      currentLang: "ru",
      availableLang: ["ru", "en"],
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  color: $white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    margin-right: 92px;
  }

  .align-left {
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      gap: 40px;
      li {
        cursor: pointer;
      }
    }
  }
  .align-right {
   cursor: pointer;
  }
}
</style>
