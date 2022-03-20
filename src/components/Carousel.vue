<template>
  <div class="container">
    <div class="slider">
      <hooper group="group1" class="main-carousel" :settings="hooperSettings">
        <slide class="main flex">
          <img class="hero-img" src="../assets/img/mediumImge.png" alt="" />
          <h1>Lorem ipsum dolor sit amet</h1>
        </slide>
        <slide class="main flex">
          <img class="hero-img" src="../assets/img/mediumImge.png" alt="" />
          <h1>Lorem ipsum dolor sit amet</h1>
        </slide>
        <slide class="main flex">
          <img class="hero-img" src="../assets/img/mediumImge.png" alt="" />
          <h1>Lorem ipsum dolor sit amet</h1>
        </slide>

        <hooper-pagination class="pagination" slot="hooper-addons"></hooper-pagination>
      </hooper>
      <hooper :wheelControl="false" group="group1" class="first-carousel">
        <slide class="hero flex">
          <img class="hero-img__small" src="../assets/img/sliderimg.png" alt="" />
        </slide>

        <slide class="hero flex">
          <img class="hero-img__small" src="../assets/img/sliderimg.png" alt="" />
        </slide>
      </hooper>

      <hooper
        :wheelControl="false"
        group="group1"
        :itemsToShow="1"
        :centerMode="true"
        class="second-carousel"
      >
        <slide class="second-carousel__slide flex">
          <h1>Lorem ipsum dolor sit amet</h1>
        </slide>
        <slide class="second-carousel__slide flex">
          <h1>Lorem ipsum dolor sit amet</h1>
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from "hooper";
import "../assets/scss/hooper.scss";

export default {
  name: "Carousel",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  data() {
    return {
      hooperSettings: {
        autoPlay: true,
        playSpeed: "5000",
        wheelControl: false,
        touchDrag: false,

        breakpoints: {
          480: {
            autoPlay: true,
            playSpeed: "1000",
          },
          700: {
            autoPlay: true,
            playSpeed: "2000",
          },
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 320px) {
  .pagination {
    display: none;
  }

  .hooper {
    &.main-carousel {
      display: none;

      height: 60vh;

      .main {
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: $back-color;
        background-image: url("../assets/img/sliderBack.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        gap: 20px;
        justify-content: center;
        align-items: center;
        .hero-img {
          height: auto;
          width: 20%;
        }

        h1 {
          width: 60%;
          font-size: 30px;
          color: $grey-color;
          text-transform: uppercase;
          line-height: 1.2;
          text-align: left;
          margin: 0;
        }
      }
    }

    &.first-carousel {
      // color: $base-color;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      /* height: 200px; */
      height: 30vh;

      .hero {
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: $back-color;
        background-image: url("../assets/img/sliderBack.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &-img__small {
          display: block;
        }
      }
    }

    &.second-carousel {
      height: 15vh;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      border-top: 1px solid $grey-color;
      border-bottom: 1px solid $grey-color;

      .second-carousel__slide {
        justify-content: center;
        align-items: center;
        h1 {
          font-size: 23px;

          color: $grey-color;
          font-weight: bold;
          line-height: 1.2;
          text-align: center;
          margin: 0;
          width: 85%;
        }
      }
    }
  }
}

@media only screen and (min-width: 480px) {
  .pagination {
    display: flex;
  }

  .hooper {
    .hooper-list {
      display: none;
    }
    &.main-carousel {
      display: block;

      height: 60vh;
      border-bottom: 1px solid black;
    }

    &.first-carousel {
      display: none;
    }
  }

  &.second-carousel {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .hooper {
    .hooper-list {
      display: none;
    }
    &.main-carousel {
      display: block;

      height: 80vh;

      .main {
        background-color: $back-color;
        background-image: url("../assets/img/sliderBack.png");

        // gap: 20px;

        h1 {
          width: 60%;
          font-size: 48px;
          color: $grey-color;
          text-transform: uppercase;
          line-height: 1.2;
          text-align: left;
          margin: 0;
        }
      }
    }

    &.first-carousel {
      display: none;
    }
  }

  &.second-carousel {
    display: none;
  }
}
</style>
