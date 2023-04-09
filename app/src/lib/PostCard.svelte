<script lang="ts">
	import type { Post } from './Post';

    export let post: Post;
    
    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    }
</script>

<div class="card card-hover mx-4 my-4">
    <header class="card-header">
        <h4>
            {post.title}
        </h4>
        <section class="p-4">
            {post.whenToPost.toLocaleString('es-AR', dateOptions)}
        </section>
    </header>
</div>