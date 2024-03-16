<script>
    import { base } from '$app/paths';
    let title = "Other";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
<h1>Other page</h1>
<a href="{`${base}/`}">Home</a>
