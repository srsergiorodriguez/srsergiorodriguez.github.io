import { writable } from 'svelte/store';

import AcademicModule from '../components/AcademicModule.svelte';
import CodeModule from '../components/CodeModule.svelte';
import ComicsModule from '../components/ComicsModule.svelte';
import CVModule from '../components/CVModule.svelte';
import SketchModule from '../components/SketchModule.svelte';

const schema_ = [
  {name: 'academic', module: AcademicModule, id: '0', path: "./academic", showOnMenu: true},
  {name: 'code', module: CodeModule, id: '844635429', path: "./code", showOnMenu: true},
  {name: 'comics', module: ComicsModule, id: '1024861770', path: "./comics", showOnMenu: true},
  {name: 'cv', module: CVModule, path: "./cv", showOnMenu: true},
  {name: 'sketch', module: SketchModule, path: "./sketch", showOnMenu: false}
];

export const schema = writable(schema_);
export const selectedModule = writable(schema_[0]);