module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? '../abc'
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