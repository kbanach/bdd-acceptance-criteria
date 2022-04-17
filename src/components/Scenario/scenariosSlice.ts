import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface IScenario {
    id: string;
    title: string;
    isEdited: boolean;
    given: string;
    givenAnds: string[],
    when: string;
    whenAnds: string[],
    then: string;
    thenAnds: string[],
}

type IArrayTypes = Pick<IScenario, "givenAnds" | "whenAnds" | "thenAnds">;

type ScenariosState = Record<IScenario['id'], IScenario>;

const initialState: ScenariosState = {};

const emptyScenario = {
    title: '',
    given: '',
    givenAnds: [],
    when: '',
    whenAnds: [],
    then: '',
    thenAnds: [],
};

export const scenariosSlice = createSlice({
    name: 'scenarios',
    initialState,
    reducers: {
        add: (state) => {
            const newId = '' + Date.now();

            state[newId] = {
                ...emptyScenario,
                id: newId,
                isEdited: true,
            };
        },
        addAnd: (state, action: PayloadAction<{ id: IScenario['id'], type: keyof IArrayTypes, value: string }>) => {
            state[action.payload.id][action.payload.type].push(action.payload.value);
        },
        update: (state, action: PayloadAction<Partial<Omit<IScenario, "givenAnds" | "whenAnds" | "thenAnds">> & { id: IScenario['id'] }>) => {
            state[action.payload.id] = {
                ...state[action.payload.id],
                ...action.payload,
            };
        },
        updateAnd: (state, action: PayloadAction<{ id: IScenario['id'], type: keyof IArrayTypes, andIdx: number, value: string }>) => {
            state[action.payload.id][action.payload.type][action.payload.andIdx] = action.payload.value;
        },
        remove: (state, action: PayloadAction<IScenario['id']>) => {
            delete state[action.payload];
        },
        removeAnd: (state, action: PayloadAction<{ id: IScenario['id'], type: keyof IArrayTypes, andIdx: number }>) => {
            state[action.payload.id][action.payload.type].splice(action.payload.andIdx, 1);
        },
        clearAll: (state) => {
            const allScenariosKeys = Object.keys(state);
            for (let key of allScenariosKeys) {
                delete state[key];
            }
        }
    }
});

export const { add, addAnd, update, updateAnd, remove, removeAnd, clearAll } = scenariosSlice.actions;

export const selectAllScenarios = (state: RootState) => Object.values(state.scenarios);
export const selectAllScenariosIds = (state: RootState) => Object.keys(state.scenarios);
export const selectById = (state: RootState, id: IScenario['id']) => state.scenarios[id] || null;

export const scenariosReducer = scenariosSlice.reducer;