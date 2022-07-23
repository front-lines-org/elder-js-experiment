<script>
  export let data, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
  
</script>

<style>
  h1 {
    margin-bottom: 10px;
  }

  .title {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }

  :global(h2) {
    margin-top: 2rem;
  }

  :global(pre) {
    background: #eee;
    padding: 1rem;
    border-radius: 1rem;
  }

  :global(blockquote) {
    margin: 0;
    background: #ddd;
    padding: 3px 1.5rem 3px 3rem;
    position: relative;
    border-radius: 1rem;
  }
  :global(blockquote:after) {
    content: '>';
    color: #aaa;
    font-size: 30px;
    position: absolute;
    top: 33%;
    left: 1rem;
  }

  :global(blockquote p) {
    padding: 0;
  }
</style>

<svelte:head>
  <title>{frontmatter.title}</title>
  <meta name="description" content={frontmatter.excerpt} />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

{#if html}
  <article class="prose prose-gray dark:prose-invert max-w-none prose-sm sm:prose mx-auto mt-9">
    <h3 class="not-prose primary-color font-black">
      Ukraine
    </h3>
    <h1 class="h1">
      {frontmatter.title}
    </h1>
    <p class="tw-font-bold">
      {frontmatter.description}
    </p>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/img/{frontmatter.img}" :alt="article" class="mb-0" />
    <p class="text-xs font-light mt-0 text-slate-300 not-prose">
      Image: Ukraine ministry of Defense. Troops training
    </p>
    {@html html}
  </article>
{:else}
  <h1>Oops!! Markdown not found!</h1>
{/if}
