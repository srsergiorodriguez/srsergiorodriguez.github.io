import { readable } from 'svelte/store';

export const capitalize = readable(str => str.charAt(0).toUpperCase()+str.slice(1));