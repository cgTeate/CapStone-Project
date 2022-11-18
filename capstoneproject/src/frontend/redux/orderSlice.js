import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    order: {},
    error: '',
    loadingPay: false,
    successPay: false,
    errorPay: '',
    loadingDeliver: false,
    successDeliver: false,
}
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchRequest: (state)=>{
        state.loading = true
        state.error = ''
    },
    fetchSuccess: (state, action)=>{
        state.loading = false
        state.order = action.payload
        state.error = ''
    },
    fetchFail: (state, action)=>{
        state.loading = false
        state.error = action.payload
    },
    payRequest: (state)=>{
        state.loading = true
    },
    paySuccess: (state)=>{
        state.loadingPay = false 
        state.successPay = true
    },
    payFail: (state, action)=>{
        state.loadingPay = false
        state.errorPay = action.payload
    },
    payReset: (state)=>{
        state.loadingPay = false
        state.succesPay = false
        state.errorPay = ''
    },
    deliverRequest: (state)=>{
        state.loadingDeliver = true
    },
    deliverSuccess: (state)=>{
        state.loadingDeliver = false
        state.successDeliver = true
    },
    deliverFail: (state)=>{
        state.loadingDeliver = false
    },
    deliverReset: (state)=>{
        state.loadingDeliver = false
        state.successDeliver = false
    },
  }
});

export const {fetchRequest, fetchSuccess, fetchFail, payRequest, paySuccess, payFail, payReset,
    deliverRequest, deliverSuccess, deliverFail, deliverReset } = orderSlice.actions;

export default orderSlice.reducer;
