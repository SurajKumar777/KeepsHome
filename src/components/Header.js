import React from 'react'
import { useState, useEffect } from 'react'
import "../css/Global.css"

const Header = (props) => {
  const [search, setSearch] = useState('');

  const changeHandlerA = (e) => {
    setSearch(e.target.value)
    props.onSearch(search)
  }
  // if (search.length === 0) {
  //   console.log(search)
  // }


  return (
    <>
      <header>
        <div className="logo"><span>Keeps</span>Home</div>
        <div className="search">
          <input type="text" placeholder='Search For Title' onChange={changeHandlerA} />
        </div>
      </header>
    </>
  )
}

export default Header