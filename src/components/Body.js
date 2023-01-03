import React, { useState } from 'react'
import "../css/Global.css"


const Body = (props) => {

    const [data, setData] = useState({
        title: '',
        notes: ''
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value }
        })

    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (data.title.length === 0 || data.notes.length === 0) {
            return;
        }

        props.setDataA(data.title, data.notes);

        setData({
            title: '',
            notes: ''
        })
    }



    return (
        <>
            <div className="hero-section">
                <div className="input-container">
                    <form onSubmit={submitHandler}>
                        <div className="title">
                            <input type="text" placeholder='Title' value={data.title} name='title' autoComplete='off' onChange={changeHandler} />
                        </div>
                        <hr />
                        <div className="notes">
                            <textarea cols="30" placeholder='Notes...' value={data.notes} name='notes' autoComplete='off' onChange={changeHandler} />
                        </div>
                        <div className="hero-button">
                            <button type='submit'><i class="fa-solid fa-circle-plus"></i></button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Body