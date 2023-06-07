import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    uid: null,
    // idVacina: null
}

export const slice = createSlice({
    name: 'slice',
    initialState: initialValues,
    reducers: {
        reducerSetSlice: (state, action) => {
            state.uid = action.payload.uid
            // state.idVacina = action.payload.idVacina
        }
    }
})

export const { reducerSetSlice } = slice.actions

export default slice.reducer