<template>
  <section class="contact row">
    <div class="circle">
      <img src="/img/shame_on_me.png" alt="">
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
      <img src="/img/red_banner.jpg" alt="">
    </div>
    <div class="align-right">
      <img src="/img/red_banner.jpg" alt="">
      <form action="formAction.php">
        <label class="form-explain">
          Если у вас есть вопросы, свяжитесь с нами
        </label>
        <label>
          <input type="text" placeholder="Имя *">
        </label>
        <label>
          <input type="text" placeholder="Номер телефона *">
        </label>
        <input type="submit" value="Отправить">
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
  right: 40%;
  animation: rotateCircle 10s infinite linear;
}

.contact {
  margin-bottom: 100px;
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
    }

    span {
      margin-left: 190px;
    }
  }
  .our-contact{
    margin-top: 70px;
    margin-left: 190px;
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
      }
    }

    .sources p, .links p{
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      margin-bottom: 30px;
    }
  }
  img {
    width: 380px;
    height: 500px;
    object-fit: cover;
    margin-left: 190px;
  }
}

.align-right {
  margin-left: 120px;

  img {
    margin-top: 75px;
    width: 590px;
    height: 491px;
    object-fit: cover;
    position: relative;
    z-index: 10;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    .form-explain {
      margin-bottom: 30px;
    }

    input[type = 'text'] {
      width: 100%;
      background: none;
      border: none;
      border-bottom: 1px solid $gray;
      margin-bottom: 35px;
      padding-bottom: 20px;
    }

    input[type = 'submit'] {
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
