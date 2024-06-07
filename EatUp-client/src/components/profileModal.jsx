import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContextProvider'

export default function ProfileModal() {
    const [page, setPage] = useState("login")
    const [ name, setName ] = useState('')
    const [photoURL, setphotoURL] = useState('')

    const { updateUserProfile } = useContext(AuthContext)

    const handleSubmit = () => {
        updateUserProfile(name, photoURL)
        .then(result => {
            const user = result.user
            console.log(user)
        })
    }

    const { user } =  useContext(AuthContext)
    
    return (
        <div>
            <dialog id="my_modal_6" className="modal modal-middle sm:modal-middle">
                <div className="modal-box py-0">
                        <form onSubmit={() => handleSubmit} className="card-body" method="dialog">
                            <h3 className="font-bold text-lg">Update Profile.</h3>

                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    placeholder={user.displayName}
                                    onChange={ (e) => setName(e.target.value)}
                                />
                            </div>

                            {/* photoURL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.photoURL}
                                    className="input input-bordered"
                                    onChange={(e) => setphotoURL(e.target.value)}
                                />
                            </div>

                            {/* Update btn */}
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Update"
                                    className="btn bg-green text-white"
                                />
                            </div>

                            <button
                                onClick={() => {
                                    document.getElementById("my_modal_6").close()
                                }}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >✕</button>
                        </form>
                </div>
            </dialog>
        </div>
    )
}
