<template>
  <section class="header">
    <div class="wrapper">
      <div class="align-left">
        <div class="logo to-top">
          <img :src="'./img/logo.png'" alt="">
        </div>
        <ul class="nav" :class="openedDropdown + '-show'" @click="openDropdown">
          <li v-scroll-to="'#banner'">О нас</li>
          <li v-scroll-to="'#work'">Портфолио</li>
          <li v-scroll-to="'#contact'">Связаться</li>
          <li>
            <div class="change-lang-sm">
              {{ currentLang }}
            </div>
          </li>
        </ul>

      </div>
      <div class="align-right">
        <div @click="openDropdown" class="dropdown-btn">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="14.5" y2="0.5" stroke="white" stroke-linecap="round"/>
            <line x1="0.5" y1="7.5" x2="14.5" y2="7.5" stroke="white" stroke-linecap="round"/>
            <line x1="0.5" y1="14.5" x2="14.5" y2="14.5" stroke="white" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="change-lang-lg">
          {{ currentLang }}
        </div>
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
      openedDropdown: false,
    }
  },
  methods: {
    openDropdown: function () {
      this.openedDropdown = !this.openedDropdown;
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  color: $white;
  height: 100px;
  position: fixed;
  background: $black;
  width: 100%;
  z-index: 11;
  top: 0;
  left: 0;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 771px) {
    & {
      width: calc(100% - 40px);
      padding: 10px;
    }
  }

  .logo {
    margin-right: 92px;
  }

  .align-left {
    display: flex;
    align-items: center;

    .change-lang-sm {
      display: none;
    }

    @media screen and (max-width: 771px) {
      .false-show {
        display: none !important;
      }

      .change-lang-sm {
        display: block;
      }
    }

    ul {
      list-style: none;
      display: flex;
      gap: 40px;


      @media screen and (max-width: 771px) {
        & {
          flex-direction: column;
          position: absolute;
          width: 100%;
          left: 0;
          padding: 30px;
          top: 100px;
          background: $black;
          border-bottom: 1px solid $red;
          gap: 0;

          li {
            height: 40px;
          }
        }
      }

      li {
        cursor: pointer;
      }
    }
  }

  .align-right {
    cursor: pointer;

    .dropdown-btn {
      display: none;
    }

    @media screen and (max-width: 771px) {
      .change-lang-lg {
        display: none;
      }

      .dropdown-btn {
        padding: 16px 19px;
        background: $red;
        display: block;
      }
    }
  }
}
</style>
