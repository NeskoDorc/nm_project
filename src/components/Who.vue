<template>
  <section class="who" id="who">
    <div class="container">
      <div class="who-title">
        <h2>Who we are</h2>
      </div>

      <div class="who-card">
        <div class="card-img">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div class="card-text">
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
          <a href="#">Show More</a>
        </div>
      </div>
      <div class="who-card">
        <div class="card-img">
          <i class="fa-solid fa-thumbs-up"></i>
        </div>
        <div class="card-text">
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
          <a href="#">Show More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhoWeAre",
  props: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 320px) {
  .who {
    text-align: center;
    margin: 1rem 0;

    .container {
      
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(4, auto);
      row-gap: 50px;
    }
    &-title {
      grid-column: 2/6;
      padding: 10px;
      h2 {
        font-size: 30px;
        font-family: Arial;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: start;
      }
    }

    &-card {
      grid-column: 2/6;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 50px;
      column-gap: 50px;

      .card-img {
        background-color: $back-color;
        height: 150px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 55px;

        i {
          color: $grey-color;
          transition: color 0.3s ease-in;
          &:hover {
            color: $green-light-color;
          }
        }
      }

      .card-text {
        h4 {
          font-size: 15px;
          font-family: "Arial";
          color: $font-color;
          line-height: 1.2;
          text-align: left;
          padding: 6px;
        }
        p {
          display: none;
          font-size: 15px;
          
          color: $font-color;
          line-height: 1.2;
          text-align: left;
          padding: 6px;
        }
        a {
          font-size: 11.513px;

          color: $font-color;
          text-transform: uppercase;
          line-height: 1.2;
          text-align: left;
          text-decoration: none;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 6px;
          float: right;
          text-transform: uppercase;
          background: #f3f3f4;
          transition: background 0.3s ease-in;
          margin-top: auto;

          &:hover {
            background: $green-light-color;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 480px) {
  .who {
    text-align: center;
    margin: 1rem 0;

    .container {
      grid-template-columns: repeat(9, 1fr);

      row-gap: 50px;
    }

    &-title {
      grid-column: 2/6;
      margin-left: -1rem;
      margin-right: -1rem;
      grid-column: 2/9;
    }
    &-card {
      margin-left: -1rem;
      margin-right: -1rem;
      grid-column: 2/9;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 50px;
      .card-text p {
        display: block;
        font-size: 15px;
        font-family: "Arial";
        color: $font-color;
        line-height: 1.2;
        text-align: left;
        padding: 6px;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .who {
    text-align: center;
    margin: 1rem 0;

    .container {
      grid-template-columns: repeat(14, 1fr);

      row-gap: 50px;
    }

    &-title {
      margin-left: 0;
      margin-right: 0;
      grid-column: 4/12;
    }
    &-card {
      margin-left: 0;
      margin-right: 0;
      grid-column: 4/12;

      .card-text p {
        display: block;
        font-size: 15px;
        font-family: "Arial";
        color: $font-color;
        line-height: 1.2;
        text-align: left;
        padding: 6px;
      }
    }
  }
}
</style>
