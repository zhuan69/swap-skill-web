import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loginUser, setValue } from "./LoginSlice";
import { userDetail } from "../../services/Member";
import Swal from "sweetalert2";

const Login = (props: { setEmail: (email: string) => void }) => {
    const user = useAppSelector((state) => state.login.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const login = async (e: any) => {
        e.preventDefault()
        const res = await dispatch(loginUser({
            email: email,
            password: password
        }))
        if (!res.payload) {
            Swal.fire({
                title: "Error Login",
                text: "Erro credential mismatch, will close in 3 seconds",
                timer: 3000
            })
            return
        }
        if (res.payload) {
            navigate('/home')
        }
    }


    return (
        <>
            <div style={{ backgroundColor: "white", filter: 'brightness(0.5)' }} className="absolute inset-0 w-auto h-auto"></div>
            <div className="max-w-auto mx-auto relative flex flex-col">
                <div className="h-[500px] w-[50%] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D] mt-16">
                    {/* form */}
                    <div className="flex items-center justify-center min-h-[580px] mt-20 shadow-2xl rounded-xl w-[70%] bg-white">
                        <form className="flex flex-col gap-10 w-[70%]" onSubmit={login}>
                            <h2 className="text-3xl font-medium text-black">
                                Login to your account {user?.email}
                            </h2>
                            {/* email */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Email & Username
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email & Username"
                                        className="border-2 p-3 rounded-md w-full hover:border-purple-500/[.5] focus:border-purple-500 focus:outline-none"
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={isVisible ? "text" : "password"}
                                        placeholder="Password"
                                        className="border-2 p-3 rounded-md w-full hover:border-red-500/[.5] focus:border-red-500 focus:outline-none"
                                        required
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                                        <div onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <AiOutlineEyeInvisible size={20} />
                                            ) : (
                                                <AiOutlineEye size={20} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* end password */}
                            <div className="flex flex-col">
                                <button
                                    type="submit"
                                    className="bg-[#007DFA] -mt-5 flex items-center justify-center mx-14 w-[70%] text-white 
            text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
                                >
                                    Login
                                </button>
                                <div className="mt-3 text-center flex items-center">
                                    <div className="flex-1 border-t border-gray-300"></div>
                                    <p className="mx-4">OR</p>
                                    <div className="flex-1 border-t border-gray-300"></div>
                                </div>
                                <Link to={"/signup"}>
                                    <button
                                        type="submit"
                                        className="bg-white text-[#3390ed] 
            text-center font-medium p-3 rounded-md mt-3 flex items-center justify-center mx-14 w-[70%] border-solid border-2 border-sky-500
            hover:bg-[#f4f6f7]"
                                    >
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
