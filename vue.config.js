
module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
    ? '/nm_project/'
    : '/',

    css: {
      loaderOptions: {
    scss: {
      prependData: `@import "~@/assets/scss/base.scss";`
       
        }
        
       
      }
    }
  }