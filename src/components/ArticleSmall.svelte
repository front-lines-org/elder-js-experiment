<script>
  export let blog;
  export let helpers;
</script>

<div class="hover:underline">
  <a href={helpers.permalinks.blog({ slug: blog.slug })}>
    <a class="text-black font-black" href={helpers.permalinks.blog({ slug: blog.slug })}>{blog.frontmatter.title}</a>
    <p>{blog.frontmatter.excerpt}</p>
    {#if blog.frontmatter.img}
      {@html helpers.images.picture(`/images/${blog.frontmatter.img}`, {
        maxWidth: 2000,
        class: '',
        alt: '',
        ignoreCssString: false,
      })}
    {/if}
  </a>
</div>
