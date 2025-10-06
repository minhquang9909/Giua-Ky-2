import './App.css'
import { useState } from 'react'
import { data } from './db.json'
import NavBar from './component/navbar'
import BigScreen from './component/BigScreen'
import SmallScreen from './component/SmallScreen'

function App() {

    const [thisMovie, setThisMovie] = useState("1");
    const [search, setSearch] = useState(thisMovie);

    console.log('thisMovie:', thisMovie)


    const smallClick = (movie) => {
      setThisMovie(movie.id)
    }


    
    return (
      <div className="flex flex-col bg-[#192026] min-h-screen p-4 px-30">
        <NavBar search={search} setSearch={setSearch} />
          {console.log('thisMovie after set:', thisMovie)}
  <BigScreen id={`${thisMovie}`}/>
  <SmallScreen onSelect={smallClick} />
      </div>
    )
}

export default App