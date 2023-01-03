import React, { useEffect } from 'react'
import "../css/Global.css"

const Card = (props) => {
    const data = props.data;
    const newInput = props.input

    const clickHandler = (id) => {

        props.remove(id);

    }

    useEffect(() => {
        localStorage.setItem('saved', JSON.stringify(data))
    }, [data])

    // console.log(newInput.length - 1)


    // console.log(cardContent);

    if (newInput.length === 1) {
        return (
            <>
                <div className="full-container">
                    <div className="card-container">
                        {
                            data.map((val) => {
                                return (<>
                                    <div className='notescard' key={val.id}>
                                        <h3>{val.title}</h3>
                                        <hr />
                                        <p>{val.note}</p>
                                        <div className="card-btn-con">

                                            <button onClick={() => clickHandler(val.id)} ><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </>)
                            })}
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="full-container">
                    <div className="card-container">
                        {
                            data.filter((val) => val.title.toLowerCase().trim().includes(newInput)).map((val) => {
                                return (<>
                                    <div className='notescard' key={val.id}>
                                        <h1>{val.title}</h1>
                                        <hr />
                                        <p>{val.note}</p>
                                        <div className="card-btn-con">

                                            <button onClick={() => clickHandler(val.id)} ><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </>)
                            })}
                    </div>
                </div>
            </>
        )
    }
}

export default Card