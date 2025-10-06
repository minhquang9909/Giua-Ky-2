import {data} from "../db.json"
import { useState } from "react"


function NavBar({ search, setSearch }) {

  const [movieList, setMovieList] = useState(data)
  const [searchText, setSearchText] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const onChange = (e) => {
    const text = e.target.value;
    setSearchText(text)
    setShowDropdown(true)
  }

  const onSelect = (item) => {
    setSearchText(item.movieName)
    setShowDropdown(false)
    if (typeof setSearch === 'function') setSearch(item.movieName)
  }

  return (
    <header className="flex flex-row justify-between items-center text-white tracking-[2px] mt-4 mb-4 relative">
      <h1 className="font-bold text-[36px]">Anonime</h1>
      <a href="#" className="text-[#868686] text-[18px] font-light hover:text-blue-400">Home</a>
      <a href="#" className="text-[#868686] text-[18px] font-light hover:text-blue-400">List anime</a>
      <div className="relative">
        <input
          type="text"
          placeholder="Search anime or movie"
          value={searchText}
          onChange={onChange}
          onFocus={() => {
            setShowDropdown(true)
          }}
          onBlur={() => setTimeout(() => setShowDropdown(false), 1)}
          className="border-none rounded-[37px] px-3 py-2 bg-[#374151] text-white w-100 h-12"
        />

        {showDropdown && (
          <ul className="absolute right-0 mt-1 w-100 max-h-60 overflow-auto rounded-md bg-[#0f1720] border border-gray-700 shadow-lg z-50">
            {movieList
              .filter((item) =>
                item.movieName.toLowerCase().includes(searchText.trim().toLowerCase())
              )
              .map((item) => (
                <li
                  key={item.id}
                  onMouseDown={() => onSelect(item)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-800 text-white"
                  style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#374151', backgroundBlendMode: 'multiply' }}
                >
                  {item.movieName}
                </li>
              ))}
          </ul>
        )}
      </div>
    </header>
  );
}
export default NavBar;