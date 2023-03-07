import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error"
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        // setProduct(state, action) {
        //     state.data = action.payload
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchproduct.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchproduct.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchproduct.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }
})

export const { setProduct, setStatus } = productSlice.actions

export default productSlice.reducer


// thunk
//fetchproduct( here we can recivew the data) 

export const fetchproduct = createAsyncThunk('product/fetch', async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    return data
})

// export function fetchproduct() {
//     return async function fetchProductApi(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch(`https://fakestoreapi.com/products`);
//             const data =await res.json();
//             dispatch(setProduct(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }
