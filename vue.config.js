
module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
  ? '/' + process.env.CI_PROJECT_NAME + '/'
  : '/',


    css: {
      loaderOptions: {
    scss: {
      prependData: `@import "~@/assets/scss/base.scss";`
       
        }
        
       
      }
    }
  }