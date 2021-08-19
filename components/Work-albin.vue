<template>
  <section class="work" id="work">
    <h2>OUR WORK</h2>
    <hr>
    <div class="content row">
      <div class="sidebar">
        <ul>
          <li @click="changeActive('chosenPhoto')" id="chosen_photo" :class="status.chosenPhoto ?'active':''"><span>Фотопортфолио</span>
          </li>
          <li @click="changeActive('chosenVideo')" id="chosen_video" :class="status.chosenVideo ?'active':''"><span>Видеопортфолио</span>
          </li>
          <li @click="changeActive('ads')" id="ads" :class="status.ads ?'active':''"><span>Рекламные ролики</span></li>
          <li @click="changeActive('teaser')" id="teaser" :class="status.teaser ?'active':''"><span>Тизеры</span></li>
          <li @click="changeActive('reportage')" id="reportage" :class="status.reportage ?'active':''"><span>Корпоративы и вечеринки</span>
          </li>
          <li @click="changeActive('marriage')" id="marriage" :class="status.marriage ?'active':''"><span>Свадебные сьемки</span>
          </li>
        </ul>
      </div>
      <div class="promo">
        <div v-show="activeType == 'photo'" class="photo">
          <img :src="photos[active][0]" alt="" class="main">
          <img :src="photos[active][1]" alt="" class="side">
          <img :src="photos[active][2]" alt="" class="side">
        </div>
        <div v-show="activeType == 'video' " class="video">
          <iframe height="560" :src="video[active]" title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen/>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Work-albin",
  data: function () {
    return {
      active: 'chosenPhoto',
      activeType: 'photo',
      status: {
        chosenPhoto: true,
        chosenVideo: false,
        ads: false,
        teaser: false,
        reportage: false,
        marriage: false,
      },
      video: {
        chosenVideo: 'https://www.youtube.com/embed/DzrFit3OW8Q',
        ads: 'https://www.youtube.com/embed/PwBH-ly9gsY',
        teaser: "https://www.youtube.com/embed/SRDFEx7rpFc",
      },
      photos: {
        chosenPhoto: ["./img/custom/14.jpg", "./img/custom/FtlybgonSb0.jpeg", "./img/custom/pm0RB4ZoZhs.jpg"],
        reportage: ["./img/funny/5YxNCXE1Ofs.jpeg", "./img/funny/7R205508.jpg", "./img/funny/7R205839.jpg"],
        marriage: ["./img/marriage/7R204403.jpg", "./img/marriage/7R208496.jpg", "./img/marriage/IMG_2488.jpeg"],
        chosenVideo: '',
        ads: '',
        teaser: "",
      }
    }
  },
  methods: {
    changeActive: function (message) {
      switch (message) {
        case "chosenPhoto":
        case "reportage":
        case "marriage":
          this.activeType = "photo";
          console.log('photo')
          break;
        default:
          console.log("video")
          this.activeType = "video";
      }

      this.status[this.active] = false;
      this.status[message] = true;
      this.active = message;

    }
  },
}
</script>

<style scoped lang="scss">

@media screen and (max-width: 770px) {
  .row {
    flex-direction: column;
  }
}

.work {
  margin: 70px 0;
}

h2 {
  font-family: Orbitron, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 120%;
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

hr {
  width: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
  border: solid 1px $red;

  @media screen and (max-width: 771px) {
    & {
      display: none;
    }
  }
}

.content {

  .sidebar {

    @media screen and (max-width: 771px) {
      & {
        width: 100%;
        overflow-x: scroll;
      }
    }

    ul {
      width: 200px;

      @media screen and (max-width: 771px) {
        & {
          display: flex;
          gap: 20px;
          width: max-content;
        }
      }

      & .active {
        list-style-image: url("/img/ArrowRight.png");
        margin-left: 30px;
        @media screen and (max-width: 771px) {
          & {
            list-style-image: none;
            margin-left: 0;
          }
        }
      }

      li {
        cursor: pointer;
        margin-bottom: 30px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
      }

      .active span {
        display: flex;
        align-items: center;
        height: 100%;

        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
      }
    }

  }

  .promo {
    margin-left: 216px;
    width: 100%;

    @media screen and (max-width: 771px) {
      & {
        margin-left: 0;
      }

      .photo {
        width: 100%;
        overflow-x: scroll;
      }

      .main, .side {
        width: 265px !important;
        height: 404px !important;
        object-fit: cover;
      }
    }

    .photo {
      display: flex;
      flex-wrap: nowrap;


      img {
        background: gray;
      }

      .main {
        width: 40%;
        height: max-content;
        object-fit: cover;
      }

      .side {
        width: 25%;
        height: 300px;
        margin-left: 5%;
        object-fit: cover;
      }
    }

    .video {
      width: 100%;

      iframe {
        width: 100%;
        height: 560px;
      }
    }
  }


}
</style>
