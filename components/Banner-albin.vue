<template>
  <section class="banner">
    <div class="circle">
      <img src="/img/shame_on_me.png" alt="">
    </div>
    <div class="content">
      <div class="align-left">
        <h1>
          THE ALBIN
          <br>
          <span>TEAM STUDIO</span>
        </h1>
        <p class="tagline">
          Кинематограф для вашего бизнеса
          Креативный видеопродакшн полного цикла, Москва
          Реклама, имиджевые и корпоративные фильмы
        </p>
        <button class="order-btn pointer">
          Записаться на фотосессию
        </button>
        <div class="row">

          <img src="/img/tmp/angelua.jpg" alt="" class="under-btn">

          <div class="carousel-arrows">
            <p class="counter">
              {{current}} / 6
            </p>
            <p class="title">Фотосессия в своем стиле</p>
            <div class="controls">
              <div class="pointer arrow" @click="lower">
                <svg class="before" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 1.25L0.75 10L9.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="pointer arrow"  @click="increase">
                <svg class="next" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.25L10.25 10L1.5 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="align-right">
        <img :src="giantSrc" alt="" class="giant">
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Banner-albin",
  data: function () {
    return {
      current: '1',
      giant: ['./img/red_banner.jpg','./img/tmp/ABC_6995.JPG',"./img/tmp/ABC_6998.JPG","./img/tmp/ABC_6996.JPG","./img/tmp/ABC_7010.JPG", "./img/tmp/ABC_7023.JPG"]
    }
  },
  computed: {
    giantSrc: function () {
      return this.giant[this.current - 1];
    }
  },
  methods: {
    increase : function () {
      this.current++;
      if (this.current > 6) {
        this.current = 1;
      }
    },
    lower : function () {
      this.current--;
      if (this.current <= 0) {
        this.current = 6;
      }
    },
    createOrder : function () {
      this.$emit("createOrder")
    }
  }
}
</script>

<style scoped lang="scss">
.circle {
  position: absolute;
  right: 10%;
  animation: rotateCircle 10s infinite linear;
}

.content {
  padding-top: 124px;
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 400px) {
    & {
      display: block;
    }
  }

  .align-left {
    width: 780px;

    h1 {
      margin-top: 81px;

      span, & {
        font-family: Orbitron, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 70px;
        color: $red;

        @media screen and (max-width: 400px) {
          & {
            font-size: 30px;
          }
        }
      }

      span {
        margin-left: 190px;

        @media screen and (max-width: 400px) {
          & {
            margin-left: 50px;
          }
        }
      }

      .padding {
        width: 190px;
      }
    }

    .tagline {
      margin-left: 190px;
      font-family: Futura PT, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;

      width: 552px;
      height: 50px;
      margin-top: 35px;

      @media screen and (max-width: 400px) {
        & {
          margin-left: 50px;
          width: 267px;
          height: max-content;
        }
      }
    }

    .order-btn {
      width: 280px;
      height: 70px;
      margin: 35px 0 30px 190px;
      border: 2px solid $red;
      background: none;
      box-sizing: border-box;


      @media screen and (max-width: 400px) {
        & {
          margin-left: 50px;
          width: 200px;
        }
      }
    }

    .under-btn {
      min-width: 280px;
      height: 323px;
      background: gray;
      margin-left: 190px;
      object-fit: cover;
      @media screen and (max-width: 400px) {
        & {
          display: none;
        }
      }
    }

    .carousel-arrows {
      max-width: 220px;
      height: 120px;
      padding: 30px;
      background: $gray;
      margin-left: 90px;
      margin-top: 50px;
      position: relative;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;

      @media screen and (max-width: 400px) {
        & {
          margin: 0;
        }
      }

      .title {
        margin-top: 21px;
      }

      .controls {
        width: 100px;
        height: 50px;
        background: red;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        z-index: 10;
        right: -50px;
        bottom: 0;

        .arrow {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .align-right {
    display: flex;
    flex-wrap: nowrap;
    .giant {
      width: 520px;
      height: 100%;
      background: gray;

      position: relative;
      z-index: 5;
      object-fit:cover;

      @media screen and (max-width: 400px) {
        & {
          width: 70%;
          margin: 10px auto;
          height: max-content;
        }
      }
    }
  }
}

@keyframes rotateCircle {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
