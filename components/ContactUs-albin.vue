<template>
  <section class="contact row" id="contact">
    <div class="circle">
      <img :src="'./img/shame_on_me.svg'" alt="">
    </div>
    <div class="align-left">
      <h3>
        CONTACT
        <br>
        <span>
        US
      </span>
      </h3>
      <div class="our-contact">
        <div class="sources">
          <p>
            E-mail:
          </p>
          <p>
            Телефон:
          </p>
          <p>
            Соц. сети:
          </p>
        </div>
        <div class="links">
          <p>
            <a href="mailto:info@albinstudio.ru">info@albinstudio.ru</a>
          </p>
          <p>
            <a href="tel:89096756755">+7 (909) 675-67-55</a>
          </p>
          <p>
            <a href="https://www.instagram.com/albin.team/">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Vk</a>
          </p>
        </div>
      </div>
      <img :src="'./img/custom/7R203643.jpg'" alt="">
    </div>
    <div class="align-right">
      <img :src="'./img/custom/7R203915.jpg'" alt="">
      <form action="formAction.php">
        <label class="form-explain">
          Если у вас есть вопросы, свяжитесь с нами
        </label>
        <label>
          <input class="inputArea" type="text" name="name" placeholder="Имя *">
        </label>
        <label>
          <input class="inputArea" type="text" name="tel" placeholder="Номер телефона *">
        </label>
        <input class="submit" type="submit" value="Отправить">
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs-albin"
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
  right: 20%;
  top: 45%;
  animation: rotateCircle 10s infinite linear;
}

.contact {
  margin-bottom: 100px;
  position: relative;

  @media screen and (max-width: 771px) {
    & {
      flex-direction: column;
    }
  }
}

.align-left {
  h3 {
    margin-bottom: 70px;

    span, & {
      font-family: Orbitron, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 70px;
      color: $red;

      span {
        margin-left: $gridGap;
        @media screen and (max-width: 771px) {
          & {
            margin-left: $gridGap770;
          }
        }
      }

      @media screen and (max-width: 771px) {
        & {
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 120%;
        }
      }
    }
  }

  .our-contact {
    margin-top: 70px;
    margin-left: $gridGap;
    @media screen and (max-width: 771px) {
      & {
        margin-left: $gridGap770;
      }
    }
    display: flex;

    .sources {
      width: 100px;

      p {
        color: #929292;
      }
    }

    .links {
      a {
        margin-right: 50px;

        @media screen and (max-width: 771px) {
          & {
            margin-right: 20px;
          }
        }
      }
    }

    .sources p, .links p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      margin-bottom: 30px;

      @media screen and (max-width: 771px) {
        & {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 140%;
        }
      }
    }
  }

  img {
    width: 380px;
    height: 500px;
    object-fit: cover;
    margin-left: $gridGap;
    @media screen and (max-width: 771px) {
      & {
        margin-left: $gridGap770 * 2;
        width: 70%;
        height: 290px;
      }
    }
  }
}

.align-right {
  margin-left: 120px;
  @media screen and (max-width: 771px) {
    & {
      margin-left: 0;
    }
  }

  img {
    margin-top: 75px;
    width: 500px;
    height: 491px;
    object-fit: cover;
    position: relative;
    z-index: 10;

    @media screen and (max-width: 771px) {
      & {
        margin-top: 30px;
        width: 70%;
        height: 290px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    .form-explain {
      margin-bottom: 30px;
    }

    .inputArea {
      width: 100%;
      background: none;
      border: none;
      border-bottom: 1px solid $gray;
      margin-bottom: 35px;
      padding-bottom: 20px;
    }

    .submit {
      width: 280px;
      height: 70px;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 140%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: 1px solid $red;
    }
  }
}
</style>
