import { readable, writable } from 'svelte/store';
import type { Post } from './Post';

export const postItems = writable<Post[]>([]);

export const daysBetweenPosts = readable<number>(3);