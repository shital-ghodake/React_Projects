import React from 'react'
import UserLogin from './UserLogin';
import GuestLogin from './GuestLogin';

/*const SignUp=({isLogin})=>{
        if(isLogin)
        {
            return(<UserLogin/> )
        }
        return(<GuestLogin/>)
    }
export default SignUp;*/

const SignUp =({isLogin})=>{
    return(
        <>
        {(isLogin)?<UserLogin/>:<GuestLogin/>}
        </>
    )
}
export default SignUp;