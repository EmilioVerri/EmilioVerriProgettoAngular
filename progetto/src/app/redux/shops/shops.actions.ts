import { createAction, props } from '@ngrx/store';
import {Shop } from '../../core/model/shop.interface';

export const initTodos = createAction('[Todos] init', props<{todos: Shop[]}>());
export const insertTodo = createAction('[Todos] insert', props<{todo: Shop}>());
export const removeTodo = createAction('[Todos] remove', props<{id: number}>());
export const editTodo = createAction('[Todos] edit', props<{todo: Shop}>());
export const retrieveAllTodos =  createAction('[Todos] retrieve all');
export const updateTodo = createAction('[Todo] update', props<{todo: Shop}>());
export const postTodo = createAction('[Todo] add to server', props<{todo: Shop}>());