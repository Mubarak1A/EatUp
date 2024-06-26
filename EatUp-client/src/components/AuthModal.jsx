import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextProvider'

export default function AuthModal() {
    const [page, setPage] = useState("login")
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signUpWithGmail, login, createUser, updateUser } = useContext(AuthContext)

    //google signin
    const handleLogin = () => {
        signUpWithGmail()
            .then(result => {
                const user = result.user;
                //console.log(user)
                updateUser(user.email, user.photoURL)
                localStorage.setItem('currentuser', JSON.stringify(user))
                document.getElementById("my_modal_5").close()
                alert('Login Successfull!')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // login
    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        login(email, password)
            .then((result) => {
                const user = result.user
                updateUser(user.email, user.photoURL)
                localStorage.setItem('currentuser', JSON.stringify(user))
                document.getElementById("my_modal_5").close()
                alert('Login Successfull!')
            })
            .catch(error => {
                setError("Invalid Email or/and Password!")
            })
    }

    // signup
    const onSignUpSubmit = (data) => {
        const email = data.email
        const password = data.password
        createUser(email, password)
            .then((result) => {
                const user = result.user
                updateUser(user.email, user.photoURL)
                localStorage.setItem('currentuser', JSON.stringify(user))
                document.getElementById("my_modal_5").close()
                alert('Account Created Successfull!')
            })
            .catch(error => {
                setError("Email alreby been used!")
            })
    }

    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box py-0">
                    {
                        (page === "login" || page === "home") && (
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
                                <h3 className="font-bold text-lg">Please Login!</h3>

                                {/* email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        {...register("email")}
                                    />
                                </div>

                                {/* password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        {...register("password")}
                                    />
                                    <label className="label mt-1">
                                        <a href="#" className="label-text-alt link link-hover">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>

                                {/* error */}
                                {
                                    error ? <p className="text-red text-xs italic">{error}</p> : ""
                                }

                                {/* login btn */}
                                <div className="form-control mt-4">
                                    <input
                                        type="submit"
                                        value="Login"
                                        className="btn bg-green text-white"
                                    />
                                </div>

                                <p className="text-center my-2">
                                    {"Dont have an account?"}
                                    <button className="underline text-red ml-1"
                                        onClick={() => setPage("signup")}>
                                        Signup Now
                                    </button>{" "}
                                </p>

                                <button
                                    htmlFor="my_modal_5"
                                    onClick={() => {
                                        setPage('login')
                                        document.getElementById("my_modal_5").close()
                                    }}
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                >✕</button>
                            </form>
                        )
                    }
                    {page === 'signup' && (
                        <form onSubmit={handleSubmit(onSignUpSubmit)} className="card-body" method="dialog">
                            <h3 className="font-bold text-lg">Create A Account!</h3>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    {...register("email")}
                                />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    {...register("password")}
                                />
                                <label className="label mt-1">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>

                            {/* error */}
                            {
                                error ? <p className="text-red text-xs italic">{error}</p> : ""
                            }

                            {/* signUp btn */}
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Signup"
                                    className="btn bg-green text-white"
                                />
                            </div>

                            <p className="text-center my-2">
                                Already have an account?
                                <button className="underline text-red ml-1"
                                    onClick={() => setPage("login")}
                                >
                                    Login
                                </button>
                            </p>

                            <button
                                onClick={() => {
                                    setPage('login')
                                    document.getElementById("my_modal_5").close()
                                }}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >✕</button>
                        </form>
                    )}

                    {/* social sign in */}
                    <div className="text-center space-x-3 mb-5">
                        <button className="btn btn-circle hover:bg-green hover:text-white"
                            onClick={handleLogin}
                        >
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle hover:bg-green hover:text-white">
                            <FaFacebookF />
                        </button>
                        <button className="btn btn-circle hover:bg-green hover:text-white">
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
