
module.exports = {

  publicPath:"nm-test",


    css: {
      loaderOptions: {
    scss: {
      prependData: `@import "~@/assets/scss/base.scss";`
       
        }
        
       
      }
    }
  }