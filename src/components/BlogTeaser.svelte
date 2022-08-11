<script>
  export let blog;
  export let helpers;
</script>

<a href={helpers.permalinks.blog({ slug: blog.slug })} class="hover:underline">
  <a class="text-black font-black" href={helpers.permalinks.blog({ slug: blog.slug })}>{blog.frontmatter.title}</a>
  {#if blog.frontmatter.excerpt}
    <p>{blog.frontmatter.excerpt}</p>
  {/if}
  {#if blog.frontmatter.img}
    {@html helpers.images.picture(`/images/${blog.frontmatter.img}`, {
      maxWidth: 2000,
      class: '',
      alt: '',
      ignoreCssString: false,
    })}
  {/if}
</a>
