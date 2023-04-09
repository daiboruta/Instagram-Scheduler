<script lang="ts">
    import { dndzone } from 'svelte-dnd-action';
    import { flip } from 'svelte/animate';
	import type { Post } from './Post';
	import PostCard from './PostCard.svelte';
	import { postItems, daysBetweenPosts } from './Stores';
	import { onDestroy } from 'svelte';

    const flipDurationMs = 100;
    const initialDate = new Date();
    let items: Post[];
    
    const unsubscribe = postItems.subscribe(value => {
		items = value;
	});

	onDestroy(unsubscribe);

    const handleConsider = (event: CustomEvent<DndEvent<Post>>) => { 
        $postItems = event.detail.items;
     };
    const handleFinalize = (event: CustomEvent<DndEvent<Post>>) => { 
        $postItems = event.detail.items;
        for(let i = $postItems.length - 1; i >= 0; i--) {
            if(i === 0)
                debugger;
            $postItems[i].whenToPost = new Date(initialDate);
            $postItems[i].whenToPost.setDate(initialDate.getDate() + ($postItems.length - 1 - i) * $daysBetweenPosts);
            $postItems[i] = $postItems[i];
            $postItems = $postItems;
        }
    };
</script>

<section
    class="w-9/12 grid grid-cols-3"
    use:dndzone={{items, flipDurationMs}}
    on:consider={handleConsider}
    on:finalize={handleFinalize}
>
    {#each items as item (item.id)}
        <div animate:flip={{duration: flipDurationMs}}>
            <PostCard post={item} />
        </div>
    {/each}
</section>