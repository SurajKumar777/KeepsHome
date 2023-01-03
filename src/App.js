import Header from './components/Header';
import './App.css';
import Body from './components/Body'
import { useState } from 'react';
import Card from "./components/Card"

const getdata = () => {
  const savedData = localStorage.getItem('saved')
  if (savedData) {
    return JSON.parse(savedData)
  } else {
    return []
  }
}

function App() {
  const [newSearch, setNewSearch] = useState('');
  const [dataA, setDataA] = useState(getdata())

  const getData = (newTitle, newNotes) => {
    setDataA((prev) => {
      const update = { id: Math.random(), title: newTitle, note: newNotes }
      return [...prev, update]

    })

    // console.log(dataA)

  }
  const deleteData = (Aid) => {

    // console.log(Aid)
    const updateA = dataA.filter((elem) => {
      return elem.id !== Aid
      // console.log(elem.id)
    })

    setDataA(updateA)
  }

  const getSearch = (search) => {
    setNewSearch(search)
  }
  // console.log(newSearch)

  return (
    <div className="App">
      <Header onSearch={getSearch} />
      <Body setDataA={getData} />
      <Card data={dataA} remove={deleteData} input={newSearch} />
    </div>
  );
}

export default App;
