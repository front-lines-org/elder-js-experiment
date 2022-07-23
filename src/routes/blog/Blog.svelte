<script>
  export let data, request, settings, helpers; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
  
</script>

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
    {@html helpers.images.picture(`/images/${frontmatter.img}`, {maxWidth: 2000, class:'', alt: '', ignoreCssString: false})}
    <p class="text-xs font-light mt-0 text-slate-300 not-prose">
      Image: Ukraine ministry of Defense. Troops training
    </p>
    {@html html}
  </article>
{:else}
  <h1>Oops!! Markdown not found!</h1>
{/if}
