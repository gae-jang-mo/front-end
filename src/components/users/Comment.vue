<template>
    <div id="disqus_thread"></div>
</template>
<script id="dsq-count-scr" src="//gaejangmo-1.disqus.com/count.js" async></script>


<script>

    export default {
        name: "Comment"
        , props: ["username"],
        mounted() {
            (function () {
                const dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = 'https://gaejangmo-1.disqus.com/embed.js';
                dsq.setAttribute('data-timestamp', +new Date());

                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();

            // eslint-disable-next-line no-unused-vars
            var reset = function (newIdentifier, newUrl, newTitle, newLanguage) {
                DISQUS.reset({
                    reload: true,
                    config: function () {
                        this.page.identifier = newIdentifier;
                        this.page.url = newUrl;
                        this.page.title = newTitle;
                        this.language = newLanguage;
                    }
                });
            }
            reset('https://gaejangmo-1.disqus.com/embed.js', 'http://localhost:3000/#/users/' + this.username, this.username, 'en');
        }
    }
</script>

<noscript>
    Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by
    Disqus.</a></noscript>
<style scoped>

</style>