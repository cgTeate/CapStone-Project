import {getUserPending, getUserSuccess, getUserFail} from "../redux/userSlice"
import {fetchUser} from '../pages/api/client'

export const getUserProfile = () => async (dispatch) =>{
    try {
        dispatch(getUserPending())
        const user = await fetchUser()
        console.log(user)
        if(user){
            localStorage.setItem("user", JSON.stringify(user));
            return dispatch(getUserSuccess(user));
        }
        dispatch(getUserFail("User not found"))
    } catch (error) {
        dispatch(getUserFail("Server error: " + error))
    }
}