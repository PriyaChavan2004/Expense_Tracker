import React, { useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input"
import { validateEmail } from "../../utils/helper"
import axiosInstance from "../../utils/axiosInstance";   
import { API_PATH } from "../../utils/apiPath";   
import { UserContext } from '../../context/userContext';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const {updateUser}= useContext(UserContext)
    const navigate = useNavigate();

    //handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter valid email")
            return;
        }
        if (!password) {
            setError("Please enter the password");
            return;
        }
        setError("")
        
        

        //login API call

        try {
            const response = await axiosInstance.post(API_PATH.AUTH.LOGIN, {
                email,
                password,
            });

            const { token, user } = response.data; // ✅ fixed response spelling

            if (token) {
                localStorage.setItem("token", token); // ✅ fixed typo
                updateUser(user);
                navigate("/dashboard");
            }
        } catch (error) {
            if (error.response && error.response.data.message) { // ✅ fixed typo
                setError(error.response.data.message);
            } else {
                setError("Something went wrong. Please try again.");
            }
        }




    }
    return (
        <AuthLayout>
            <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
                <h3 className=' text-xl font-semibold text-black'>Welcome back</h3>
                <p className='text-xs text-slate-700 mt-[50px] mb-6'> please enter your details to log in</p>
                <form onSubmit={handleLogin}>
                    <Input
                        type="text"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email Address"
                        placeholder='enter email'
                    />

                    <Input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        label="password"
                        placeholder='min 5 character'
                    />
                    {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                    <button type='submit' className='btn-primary'>
                        LOGIN
                    </button>
                    <p className='text-[13px] text-slate-800 mt-3'>
                        Don't have an account?
                        <Link className='font-medium text-primary underline' to="/signUp">
                            SignUp
                        </Link>
                    </p>

                </form>
            </div>
        </AuthLayout>


    )
}

export default Login
