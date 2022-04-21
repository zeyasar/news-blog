import { CLEAR_LOADING, SET_LOADING } from "../types/appTypes";

export const setLoading = () => ({
    type: SET_LOADING

})

export const clearLoading = () => ({
    type: CLEAR_LOADING
})
