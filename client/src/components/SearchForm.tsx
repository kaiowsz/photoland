import React from "react"
import { FiSearch } from "react-icons/fi"

function SearchForm() {
  return (
    <form className="w-full relative">
      
      <input 
        type="text" 
        className="input" 
        placeholder="Search for a product..." />

      <button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <FiSearch className="text-xl" />
      </button>      
    </form>
  )
}

export default SearchForm