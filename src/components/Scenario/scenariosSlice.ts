import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooleanLiteral } from "typescript";
import { RootState } from "../../store";

export interface IScenario {
    id: string;
    title: string;
    isEdited: boolean;
    given: string;
    when: string;
    then: string;
}

type ScenariosState = Record<IScenario['id'], IScenario>;

const initialState: ScenariosState = {};

const emptyScenario = {
    title: '',
    given: '',
    when: '',
    then: '',
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
        update: (state, action: PayloadAction<Partial<IScenario> & { id: IScenario['id'] }>) => {
            state[action.payload.id] = {
                ...state[action.payload.id],
                ...action.payload,
            };
        },
    }
});

export const { add, update } = scenariosSlice.actions;

export const selectAllScenarios = (state: RootState) => Object.values(state.scenarios);
export const selectAllScenariosIds = (state: RootState) => Object.keys(state.scenarios);
export const selectById = (state: RootState, id: IScenario['id']) => state.scenarios[id] || null;

export const scenariosReducer = scenariosSlice.reducer;