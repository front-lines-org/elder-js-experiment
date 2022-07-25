<script>
  export let blog;
  export let helpers;
</script>

<a href={helpers.permalinks.blog({ slug: blog.slug })}>
  <div class="flex flex-wrap justify-evenly">
    <div class="item w-44">
      {#if blog.frontmatter.img}
        {@html helpers.images.picture(`/images/${blog.frontmatter.img}`, {
          maxWidth: 600,
          class: '',
          alt: '',
          ignoreCssString: false,
        })}
      {/if}
    </div>
    <div class="item w-32 h-32 flex-grow p-4">
      <p style="color: #f9a1bc;" class="font-black">Ukraine</p>
      <h3 class="text-black font-black">{blog.frontmatter.title}</h3>
      <p>{blog.frontmatter.excerpt}</p>
    </div>
  </div>
</a>
