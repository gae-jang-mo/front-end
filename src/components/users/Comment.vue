<template>
    <div id="disqus_thread"></div>
</template>


<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    // const disqus_config = function () {
    // this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    // this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    // };
    (function () { // DON'T EDIT BELOW THIS LINE
        const d = document, s = d.createElement('script');
        s.src = 'https://gaejangmo-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    export default {
        name: "Comment"
    }


</script>

<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<style scoped>

</style>