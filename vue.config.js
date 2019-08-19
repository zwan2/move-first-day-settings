// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_mixins.scss";
                `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/my-project/' :
        '/'
}