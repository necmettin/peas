import {writable} from 'svelte/store';

export const active = writable({
	page: "",
	projects: 0,
	servers: 0,
});

export const lists = writable({
	projects: [],
	servers: []
});
