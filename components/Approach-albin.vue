<template>
  <section class="approach">
    <div class="circle">
      <img :src="'./img/shame_on_me.svg'" alt="">
    </div>
    <div class="align-left">
      <h3>
        OUR APPROACH
        <br>
        <span>
        TO WORK
      </span>
      </h3>
      <p>
        Креатив
        Разрабатываем сценарии и слоганы, отталкиваясь от бизнес целей, а не абстракций
      </p>
      <img :src="photos[0]" alt="" class="side">
    </div>
    <div class="align-right">
      <img :src="photos[2]" alt="" class="main">
      <p>
        Продакшн
        Работаем с разными задачами и бюджетами, предлагая варианты реализации
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Approach-albin",
  data: function () {
    return {
      photos: [
        'https://kikimoraki.ru/wp-content/uploads/2020/09/gde-mozhno-nalozhit-krasnyj-filtr-neskolko-sposobov-3-700x1244.jpg',
        './img/tmp/ABC_6995.JPG',
        './img/tmp/ABC_6998.JPG',
        './img/tmp/ABC_6996.JPG',
        './img/tmp/ABC_7010.JPG',
        './img/tmp/ABC_7023.JPG'
      ]

    }
  },
}
</script>

<style scoped lang="scss">
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

.circle {
  position: absolute;
  right: 10%;
  animation: rotateCircle 10s infinite linear;
  @media screen and (max-width: 771px) {
    & {
      top: 100vh;
      right: 40px;
    }
  }
}

.approach {
  display: flex;
  position: relative;
  margin-bottom: 150px;
  @media screen and (max-width: 771px) {
    & {
      flex-direction: column;
    }
  }
}

.align-left {
  width: 60%;
  @media screen and (max-width: 771px) {
    & {
      width: 100%;
    }
  }

  h3 {
    margin-bottom: 70px;

    span, & {
      font-family: Orbitron, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 70px;
      color: $red;

      @media screen and (max-width: 771px) {
        & {
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 120%;
        }
      }
    }

    span {
      margin-left: $gridGap;
      @media screen and (max-width: 771px) {
        & {
          margin-left: $gridGap770;
        }
      }
    }
  }

  p {
    width: 415px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 60px;
    margin-left: $gridGap;
    @media screen and (max-width: 771px) {
      & {
        margin-left: $gridGap770;
        width: auto;
      }
    }
  }

  img {
    width: 415px;
    height: 614px;
    margin-left: $gridGap;
    object-fit: cover;

    @media screen and (max-width: 771px) {
      & {
        width: 80%;
        height: 410px;
        margin-left: $gridGap770;
      }
    }
  }
}

.align-right {
  img {
    width: 589px;
    height: 809px;
    margin-top: 70px;
    position: relative;
    z-index: 10;
    object-fit: cover;

    @media screen and (max-width: 771px) {
      & {
        width: 80%;
        height: 410px;
        margin-top: 70px;
      }
    }
  }

  p {
    margin-top: 30px;
    @media screen and (max-width: 771px) {
      & {
        margin-left: $gridGap770;

        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
      }
    }
  }
}
</style>
