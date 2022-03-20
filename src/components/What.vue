<template>
  <section class="what" id="what">
    <div class="container">
      <div class="what-title">
        <h2>What we do</h2>
      </div>
      <div class="wrapper-card">
        <div class="what-card flex">
          <i class="fa-solid fa-calculator"></i>
        </div>
        <div class="what-card flex">
          <i class="fa-regular fa-clock"></i>
        </div>
        <div class="what-card flex">
          <i class="fa-solid fa-cloud"></i>
        </div>
        <div class="what-card flex">
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@media only screen and (min-width: 320px) {
  .what {
    text-align: center;
    margin: 1rem 0;
    .container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(auto);
      gap: 50px;
    }

    &-title {
      grid-column: 2/6;
      padding: 10px;
      h2 {
        font-size: 30px;

        text-transform: uppercase;
        line-height: 1.2;
        text-align: start;
      }
    }
    .wrapper-card {
      grid-column: 2/6;
      display: grid;
      grid-template-columns: 1fr;
      gap: 50px;
      .what-card {
        background-color: $back-color;
        height: 150px;
        width: 100%;

        justify-content: center;
        align-items: center;
        font-size: 55px;
        grid-column: 1;
        column-gap: 50px;
        i {
          color: $grey-color;
          transition: color 0.3s ease-in;
          &:hover {
            color: $green-light-color;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 480px) {
  .what {
    text-align: center;
    margin: 1rem 0;
    .container {
      grid-template-columns: repeat(9, 1fr);

      row-gap: 50px;
    }
    &-title {
      margin-left: -1rem;
      margin-right: -1rem;
      grid-column: 2/9;
      padding: 10px;
      h2 {
        font-size: 30px;
        font-family: Arial;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: start;
      }
    }

    .wrapper-card {
      margin-left: -1rem;
      margin-right: -1rem;
      grid-column: 2/9;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;

      .what-card {
        grid-column: span 1;
        background-color: $back-color;
        height: 150px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 55px;
        column-gap: 50px;
      }
    }
  }
}

@media only screen and (min-width: 769px) {
  .what {
    text-align: center;
    margin: 1rem 0;
    .container {
      grid-template-columns: repeat(14, 1fr);

      row-gap: 50px;
    }
    &-title {
      margin-left: 0rem;
      margin-right: 0rem;
      grid-column: 4/12;
      padding: 10px;
      h2 {
        font-size: 30px;
        font-family: Arial;
        text-transform: uppercase;
        line-height: 1.2;
        text-align: start;
      }
    }

    .wrapper-card {
      margin-left: 0rem;
      margin-right: 0rem;
      grid-column: 4/12;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;

      .what-card {
        grid-column: span 1;
        background-color: $back-color;
        height: 150px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 55px;
        column-gap: 50px;
      }
    }
  }
}
</style>
