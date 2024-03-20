import { createContext, useContext, useEffect, useState } from "react";
import apiRequest from "../helpers/HttpRequestHelper";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider =({children}) =>{
    const [authState, setAuthState ] = useState({
        isAuthenticated: false,
        user:null,
        token:null
    })
    const [transactionsCount, setTransactionsCount] = useState(0)
    let navigate = useNavigate()
    
    // useEffect(()=>{
    //     //check if token exists 
    //     let token = localStorage.getItem("token")
    //     console.log(token);
    //     if(token== undefined){
    //         navigate("/login")
    //     }
    //     else{
    //         const fetchProfile = async () =>{
    //             var response = await apiRequest("get","/profile", null, {Authorization:token})
    //             console.log(response);
    //         }
    //         const resp = fetchProfile()
    //         console.log(resp)
    //         if(resp.status == "fail") navigate('/login')
    //     }
    // }, [])

    // const login =async (data)=>{
    //     var response = await apiRequest("post","/login",data,{device:"YWZjYWJmZDI3MTRmYTRlMnx8c2Ftc3VuZ3x8QW5kcm9pZHx8OXx8ZG0temFDbnhRUk9FdzdWLXBXdXdhMTpBUEE5MWJGRzBrbG15cDNOM083dkVVc0lqODhzeTRNVlVkaVRFcXhPRVZ6djhLQ3VNVDhNSUtqS1E3cWR3VjB5UmQ1bElNTnpJZnRPUWprbHp2QzFFZ1IxbDdJZjhFS19lYmpNY21JajJJUE5ScExrem5zc2MwbWk3cGdQN1dUSXlDWXBIRHIyM243ZA=="
    //     })
    //     console.log(data);
    //     console.log(response)
    //     localStorage.setItem("token",response.data.accessToken.token)
    //     localStorage.setItem("isLoggedIn", true)
    //     setIsLoggedIn(true)
    //     setUser(response.data.personalDetail)
    //     console.log(isLoggedIn);
    //     navigate("/overview")

    // }
    const login = (user, token) => {
        console.log(user,token);
        setAuthState({
          isAuthenticated: true,
          user,
          token,
        });
        console.log(authState);
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("isAuthenticated", authState.isAuthenticated)
        navigate("/overview")
    };

    const logout =() =>{
        setAuthState({
            isAuthenticated: false,
            user,
            token,
          });
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("isAuthenticated")
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ authState, login, logout, transactionsCount, setTransactionsCount}}>
          {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => {
    return useContext(AuthContext);
};