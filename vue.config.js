module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? '../../app/main/resources/web'
        : './dist',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/_variables.scss";
                `
            }
        }
    }
};