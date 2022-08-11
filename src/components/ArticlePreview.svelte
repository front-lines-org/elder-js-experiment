<script>
  export let blog;
  export let helpers;
  export let showExcerpt;
</script>

<a href={helpers.permalinks.blog({ slug: blog.slug })} class="hover:underline">
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
      <h1 class="text-gray-900 font-bold py-2 text-lg ">{blog.frontmatter.title}</h1>
      {#if blog.frontmatter.excerpt && showExcerpt}
        <p class="font-normal text-gray-400">{blog.frontmatter.excerpt}</p>
      {/if}
      {#if blog.frontmatter.author}
        <p class="font-bold py-1 text-gray-600 text-sm"> By {blog.frontmatter.author}</p>
      {/if}
    </div>
  </div>
</a>
