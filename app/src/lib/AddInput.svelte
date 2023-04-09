<script lang="ts">
	import type { Post } from "./Post";
    import { daysBetweenPosts, postItems } from "./Stores";
    let value = '';

    function addPost() {
        const newDate = new Date();
        if($postItems.length > 0)
            newDate.setDate(($postItems[0] as Post).whenToPost.getDate() + $daysBetweenPosts);
        const newPost: Post = {
			id: $postItems.length,
			title: value,
			description: "",
			tags: [],
			whenToPost: newDate
		}
        $postItems = [newPost, ...$postItems];
        value = '';
    }
</script>

<section class="text-xl flex flex-row w-6/12">
    <form class="w-full flex flex-row" on:submit={addPost}>
        <!-- svelte-ignore a11y-autofocus -->
        <input class="input" type="text" bind:value autofocus/>
        <button type="button" class="btn variant-filled">Add post</button>
    </form>
</section>