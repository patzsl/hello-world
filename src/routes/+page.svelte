<script>
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';
    let title = "Home";

    function navigateByPath(path) {
        goto(path);
    }
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main class="flex flex-col items-center justify-center h-screen w-full">
    <div class="flex gap-2">
     <button class="btn btn-primary" on:click={() => navigateByPath('about')} data-test="btn-primary">Primary</button>
   
     <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1" data-test="dropdown">Click</div>
      <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
       <li><button on:click={() => navigateByPath('about')} data-test="link-about">About my site</button></li>
       <li><button on:click={() => navigateByPath('other')} data-test="link-other">Other page</button></li>
      </ul>
     </div>
    </div>
   
    <div>
     <article class="prose">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
       For years parents have espoused the health benefits of eating garlic bread with cheese to
       their children, with the food earning such an iconic status in our culture that kids will
       often dress up as warm, cheesy loaf for Halloween.
      </p>
      <p>
       But a recent study shows that the celebrated appetizer may be linked to a series of rabies
       cases springing up around the country.
      </p>
     </article>
    </div>
   </main>