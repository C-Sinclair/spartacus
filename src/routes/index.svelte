<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
        const url = `/api/posts`
		const res = await fetch(url);
		if (res.ok) {
            const { posts } = await res.json()
			return {
				props: {
					posts
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<svelte:head>
	<title>Spartacus</title>
</svelte:head>

<script>
    import { isLoggedIn } from "../stores/auth";

    /**
     * @type {import('./api/_types').Post[]}
     */
    export let posts
</script>

<h1>Spartacus</h1>

{#if !$isLoggedIn}
    <a href='/login'>Login</a>
{/if}

<h4>Feed</h4>

<p>Total Posts = {posts.length}</p>

<ul>
    {#each posts as post}
        <li>{post.text}</li>
    {/each}
</ul>