import { writable } from 'svelte/store';

import AcademicModule from '../components/AcademicModule.svelte';
import CodeModule from '../components/CodeModule.svelte';
import ComicsModule from '../components/ComicsModule.svelte';
import CVModule from '../components/CVModule.svelte';

const schema_ = [
  {name: 'academic', module: AcademicModule, id: '0', path: "./academic"},
  {name: 'code', module: CodeModule, id: '844635429', path: "./code"},
  {name: 'comics', module: ComicsModule, id: '1024861770', path: "./comics"},
  {name: 'cv', module: CVModule, path: "./cv"}
];

export const schema = writable(schema_);
export const selectedModule = writable(schema_[0]);