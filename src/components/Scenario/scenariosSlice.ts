import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Scenario {
    id: string;
    title: string;
}

type ScenariosState = Record<Scenario['id'], Scenario>;

const initialState: ScenariosState = {};

export const scenariosSlice = createSlice({
    name: 'scenarios',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Scenario>) => {
            state[action.payload.id] = action.payload;
        }
    }
});

export const { add } = scenariosSlice.actions;

export const selectAllScenarios = (state: RootState) => Object.values(state.scenarios);

export const scenariosReducer = scenariosSlice.reducer;