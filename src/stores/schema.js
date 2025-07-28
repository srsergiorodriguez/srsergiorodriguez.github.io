import { writable } from 'svelte/store';

import AcademicModule from '../components/AcademicModule.svelte';
import CodeModule from '../components/CodeModule.svelte';
import ComicsModule from '../components/ComicsModule.svelte';
import CVModule from '../components/CVModule.svelte';
import SketchModule from '../components/SketchModule.svelte';

const schema_ = [
  {name: 'sketch', module: SketchModule, path: "./sketch", showOnMenu: false},
  {name: 'academic', module: AcademicModule, id: 'academic', path: "./academic", showOnMenu: true},
  {name: 'code', module: CodeModule, id: 'code', path: "./code", showOnMenu: true},
  {name: 'comics', module: ComicsModule, id: 'comics', path: "./comics", showOnMenu: true},
  {name: 'cv', module: CVModule, path: "./cv", showOnMenu: true},
];

export const schema = writable(schema_);
export const selectedModule = writable(schema_[0]);

export const hoveredModule = writable("none");