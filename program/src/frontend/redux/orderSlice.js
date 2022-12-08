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
    historyloading: true,
    orders: [],
    historyerror: '',
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
     // fetchReset: (state)=>{
    //     state.loading = false
    //     state.error = ''
    // },
    historyfetchRequest: (state)=>{
        state.historyloading = true
        state.historyerror = ''
    },
    historyfetchSuccess: (state, action)=>{
        state.historyloading = false
        state.orders = action.payload
        state.historyerror = ''
    },
    historyfetchFail: (state, action)=>{
        state.historyloading = false
        state.historyerror = action.payload
    },
    payRequest: (state)=>{
        state.loadingPay = true
    },
    paySuccess: (state, action)=>{
        state.loadingPay = false 
        state.successPay = true
        state.order = action.payload
    },
    payFail: (state, action)=>{
        state.loadingPay = false
        state.errorPay = action.payload
    },
    payReset: (state)=>{
        state.loadingPay = false
        state.successPay = false
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
    deliverRequest, deliverSuccess, deliverFail, deliverReset, historyfetchRequest, historyfetchSuccess, historyfetchFail } = orderSlice.actions;

export default orderSlice.reducer;
