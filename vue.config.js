module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? '../app/src/main/resources/static'
        : './dist',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/_variables.scss";
                `
            }
        }
    },
    devServer: {
        port:3000,
        proxy: `http://localhost:8080`
    }
};