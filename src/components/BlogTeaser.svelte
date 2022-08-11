<script>
  export let blog;
  export let helpers;
  export let showExcerpt = false, showCategory = true, showAuthor = true, showImage = true, showPublicationDate = false;
</script>

<a href={helpers.permalinks.blog({ slug: blog.slug })} class="hover:underline">
  {#if blog.frontmatter.img && showImage}
    {@html helpers.images.picture(`/images/${blog.frontmatter.img}`, {
      maxWidth: 2000,
      class: '',
      alt: '',
      ignoreCssString: false,
    })}
  {/if}
  {#if showCategory} 
    <p style="color: #f9a1bc;" class="font-black">Ukraine</p>
  {/if}
  <h1 class="text-gray-900 font-bold py-2 text-lg ">{blog.frontmatter.title}</h1>
  {#if blog.frontmatter.excerpt && showExcerpt}
    <p class="font-normal text-gray-400">{blog.frontmatter.excerpt}</p>
  {/if}
  {#if blog.frontmatter.author && showAuthor}
    <p class="font-bold py-1 text-gray-600 text-sm"> By {blog.frontmatter.author}</p>
  {/if}
  {#if blog.frontmatter.publicationDate && showPublicationDate}
  <p class="font-bold py-1 text-gray-600 text-sm"> {blog.frontmatter.publicationDate}</p>
{/if}
</a>
