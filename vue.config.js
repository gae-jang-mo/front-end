module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? './abc'
        : './dist'
}