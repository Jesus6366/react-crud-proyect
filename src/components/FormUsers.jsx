import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/formUsers.css"

const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
}

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose }) => {

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const { handleSubmit, reset, register } = useForm()

    const submit = (data) => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser(data)
        }
        reset(defaultValues)
        setFormIsClose(true)
    }

    const handleCloseForm = () => {
        setFormIsClose(true)
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <i onClick={handleCloseForm} className="form__x fa-solid fa-xmark"></i>
            <h2 className='form__title'>{updateInfo ? "Edit User" : "New User"}</h2>
            <div className='form__div'>
                <label className="form__label" htmlFor="email">Email</label>
                <input placeholder='Enter your email' className='form__input' type="email" id='email' {...register("email")} />
            </div>
            <div className='form__div'>
                <label className="form__label" htmlFor="password">Password</label>
                <input placeholder='Enter your password' className='form__input' type="password" id='password' {...register("password")} />
            </div>
            <div className='form__div'>
                <label className="form__label" htmlFor="first_name">First Name</label>
                <input placeholder='Enter your first name' className='form__input' type="text" id='first_name' {...register("first_name")} />
            </div>
            <div className='form__div'>
                <label className="form__label" htmlFor="last_name">Last Name</label>
                <input placeholder='Enter your last name ' className='form__input' type="text" id='last_name' {...register("last_name")} />
            </div>
            <div className='form__div'>
                <label className="form__label" htmlFor="birthday">Birthday</label>
                <input className='form__input' type="date" id='birthday' {...register("birthday")} />
            </div>
            <button className='form__btn'>{updateInfo ? "Update" : "Create"}</button>
        </form>
    )
}

export default FormUsers