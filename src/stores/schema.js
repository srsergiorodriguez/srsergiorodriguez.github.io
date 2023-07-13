import { writable } from 'svelte/store';

import AcademicModule from '../components/AcademicModule.svelte';
import CodingModule from '../components/CodingModule.svelte';
import ComicsModule from '../components/ComicsModule.svelte';
import CVModule from '../components/CVModule.svelte';

const schema_ = [
  {name: 'academic', module: AcademicModule, id: '0'},
  {name: 'prog', module: CodingModule, id: '844635429'},
  {name: 'comics', module: ComicsModule, id: '1024861770'},
  {name: 'cv', module: CVModule}
];

export const schema = writable(schema_);
export const selectedModule = writable(schema_[0]);