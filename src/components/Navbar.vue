<template>
  <header id="home">
    <nav class="nav flex">
      <div class="logo flex">
        <img src="../assets/img/LogoSmall.png" alt="Logo" />
      </div>
      <div class="nav-center">
        <div class="center-medium">
          <ul>
            <li>
              <div class="medium-link">
                <a href="#home" v-smooth-scroll><i class="fa-solid fa-house"></i></a>
              </div>
            </li>
            <li>
              <div class="medium-link">
                <a href="#who" v-smooth-scroll><i class="fa-solid fa-circle-question"></i></a>
              </div>
            </li>
            <li>
              <div class="medium-link">
                <a href="#what" v-smooth-scroll><i class="fa-solid fa-graduation-cap"></i></a>
              </div>
            </li>
            <li>
              <div class="medium-link">
                <a href="mailto:name@email.com"><i class="fa-solid fa-envelope"></i></a>
              </div>
            </li>
          </ul>
        </div>
        <div class="center-large">
          <ul>
            <li>
              <div class="large-link">
                <a href="#home" v-smooth-scroll>Home</a>
              </div>
            </li>
            /
            <li>
              <div class="large-link">
                <a href="#Who" v-smooth-scroll>About Us</a>
              </div>
            </li>
            /
            <li>
              <div class="large-link">
                <a href="#what" v-smooth-scroll>Our work</a>
              </div>
            </li>
            /
            <li>
              <div class="large-link">
                <a href="mailto:name@email.com">Contact</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="nav-right">
        <div class="burger" @click="showNavMenu = !showNavMenu">
          <i class="fa-solid fa-bars"></i>
        </div>

        <div class="search" @click="showSearchBar = !showSearchBar">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </nav>
    <div class="nav-search" :class="{ showSearch: showSearchBar }">
      <input
        type="nav-search__input"
        class="search"
        id="search"
        placeholder=""
        name="search"
      />
    </div>

    <div class="underline" :class="{ showNavMenu: showNavMenu }"></div>
    <div class="burger-menu" :class="{ showNavMenu: showNavMenu }">
      <ul>
        <div class="list-item">
          <li><a href="#home" v-smooth-scroll>Home</a></li>
        </div>
        <div class="list-item">
          <li><a href="#who" v-smooth-scroll>About us</a></li>
        </div>
        <div class="list-item">
          <li><a href="#what" v-smooth-scroll>Our Work</a></li>
        </div>
        <div class="list-item">
          <li><a href="mailto:name@email.com">Contact</a></li>
        </div>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  props: {},
  data() {
    return {
      showSearchBar: false,
      showNavMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 200px) {
  header {
    position: relative;
  }

  .underline {
    &.showNavMenu {
      display: none;
    }
  }
  .showNavMenu {
    transform: translateX(0) !important;
    position: relative !important;
    opacity: 1 !important;
  }

  .burger-menu {
    position: fixed;
    left: 0;
    display: flex;
    opacity: 0;
    background-color: white;
    justify-content: start;
    width: 100vw;
    transform: translateX(-100%);
    transition: transform 250ms ease-in;
    z-index: 1000;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;

      .list-item {
        background-color: $back-color;

        margin-bottom: 1px;
        padding: 10px;
        transition: all 0.3s ease-in-out;
        li {
          margin-left: 10px;
          a {
            text-decoration: none;
            font-size: 18px;
            color: $font-color;
            padding: 10px;
            text-transform: uppercase;
          }
        }

        &:hover {
          background-color: $green-light-color;

          li {
            a {
              color: $back-color;
            }
          }
        }
        &:active {
          background-color: $green-active-color;

          li {
            a {
              color: $back-color;
            }
          }
        }
        &:focus {
          background-color: $green-focus-color;

          li {
            a {
              color: $back-color;
            }
          }
        }
        &:visited {
          background-color: $blue-visited-color;

          li {
            a {
              color: $back-color;
            }
          }
        }
      }
    }
  }

  /* Navigation */
  .nav {
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    .logo {
     
      justify-content: center;
      align-items: center;
      margin-left: 2%;
      img {
        width: 118px;
        height: auto;
      }
    }

    .center-medium {
      display: none;
    }
    .center-large {
      display: none;
    }
    .nav-right {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $grey-color;
      margin-right: 2%;
      & > div i {
        padding: 10px;
        font-size: 20px;

        &:active {
          transform: scale(1.2);
          color: $green-light-color;
        }
      }
    }
  }
  .nav-search {
    position: absolute;
    opacity: 0;
    input {
      width: 99%;
      border: 1px solid $grey-color;
      border-radius: 4px;
      margin-right: 10px;
    }

    padding: 5px;
    padding-left: 5px;

    &.showSearch {
      position: static;
      opacity: 1;
    }

    &.nav-search__input {
      width: 100%;
      border: 1px solid $grey-color;
      border-radius: 4px;
    }
  }
  .underline {
    height: 8px;
    background-image: url("../assets/img/underline.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media only screen and (min-width: 480px) {
    .burger-menu{
        display: none;

    }



  .nav {
    .center-medium {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .center-large {
      display: none;
    }
    .nav-center {
      .center-medium {
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        li {
          padding: 10px;
          margin: 0 10px;
          color: $grey-color;
          transition: color 0.3s ease-in;
          font-size: calc(clamp(1rem, 0.0625rem + 3.125vw, 1.5625rem));

          a {
            text-decoration: none;
            color: $font-color;

            &:hover {
              color: $green-light-color;
            }
            &:active {
              color: $green-active-color;
            }
            &:visited {
              color: $blue-visited-color;
            }
            &:focus {
              color: $green-focus-color;
            }
          }
        }
      }
    }
  }

  .nav-right .burger {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .nav-search {
    width: 300px;
    margin-left: auto;
    margin-right: 20px;
  }

  .nav {
    .logo {
      margin-left: 5%;
      img {
        width: 150px;
        height: auto;
      }
    }
    .center-medium {
      display: none;
    }

    .nav-center .center-large {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        li a {
          text-transform: uppercase;
          line-height: 1.2;
          text-align: left;
          text-decoration: none;
          padding: 10px;
          margin-left: 0;
          color: $grey-color;
          transition: color 0.3s ease-in;
          font-size: 17px;

          &:hover {
            color: $green-light-color;
          }
          &:active {
            color: $green-active-color;
          }
          &:visited {
            color: $blue-visited-color;
          }
          &:focus {
            color: $green-focus-color;
          }
        }
      }
    }
  }
}
</style>
