<script>
  export let data, request, settings, helpers; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
</script>

<style>
  .primary-color {
    color: #f9a1bc;
  }
</style>

<svelte:head>
  <title>{frontmatter.title}</title>
  <meta name="description" content={frontmatter.excerpt} />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

{#if html}
  <article class="prose prose-xs xs:prose max-w-none prose-sm sm:prose mx-auto mt-9">
    <h3 class="not-prose primary-color font-black">Ukraine</h3>
    <h1 class="h1">
      {frontmatter.title}
    </h1>
    <p class="font-bold">
      {frontmatter.description}
    </p>
    <!-- svelte-ignore a11y-missing-attribute -->
    {#if frontmatter.img}
      {@html helpers.images.picture(`/images/${frontmatter.img}`, {
        maxWidth: 2000,
        class: '',
        alt: '',
        ignoreCssString: false,
      })}
    {/if} 

    {#if frontmatter.video}
      <!-- svelte-ignore a11y-media-has-caption -->
      <video width="100%" autoplay muted>
        <source src="/videos/{frontmatter.video}" type="video/mp4">
        Your browser does not support HTML video.
      </video>  
    {/if}
  
    <p class="text-xs font-light mt-0 text-slate-300 not-prose">Image: Ukraine ministry of Defense. Troops training</p>
    {@html html}
  </article>
{:else}
  <h1>Oops!! Markdown not found!</h1>
{/if}
