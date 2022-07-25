<script>
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import ArticleTitle from '../../components/ArticleSmall.svelte';
  import ArticlePreview from '../../components/ArticlePreview.svelte';
  import InsetBorder from '../../components/InsetBorder.svelte';

  export let data, helpers, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
</script>

<div class="blog">
  <div class="entries">
    {#each data.markdown.blog as blog}
      <!-- <BlogTeaser {blog} {helpers} /> -->
    {/each}
  </div>
</div>

<div class="grid overflow-hidden grid-lines lg:grid-cols-6 md:grid-cols-4 grid-rows-8 sm:grid-cols-2">
  <div class="box col-start-1"><InsetBorder><BlogTeaser blog={data.markdown.blog[1]} {helpers} /></InsetBorder></div>
  <div class="box row-span-2 col-span-4">
    <InsetBorder><BlogTeaser blog={data.markdown.blog[1]} {helpers} /></InsetBorder>
  </div>
  <div class="box row-start-1 row-span-6 col-start-6">
    <InsetBorder>
      <div class="box"><ArticleTitle blog={data.markdown.blog[3]} {helpers} /></div>
      <div class="box"><ArticleTitle blog={data.markdown.blog[5]} {helpers} /></div>
      <div class="box"><ArticleTitle blog={data.markdown.blog[6]} {helpers} /></div>
      <div class="box"><ArticleTitle blog={data.markdown.blog[8]} {helpers} /></div>
      <div class="box"><ArticleTitle blog={data.markdown.blog[9]} {helpers} /></div>
    </InsetBorder>
  </div>
  <div class="box"><InsetBorder><BlogTeaser blog={data.markdown.blog[1]} {helpers} /></InsetBorder></div>
  <div class="box"><InsetBorder><BlogTeaser blog={data.markdown.blog[3]} {helpers} /></InsetBorder></div>
  <div class="box col-span-4"><InsetBorder><ArticlePreview blog={data.markdown.blog[9]} {helpers} /></InsetBorder></div>
</div>
