import React, { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

function SearchForm() {

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000)

    return () => clearTimeout(timeout)
  }, [isAnimating])
  

  function handleSearchInput(e: React.FormEvent<HTMLInputElement>) {
    setSearchTerm(e.currentTarget.value)
  }
  
  function handleSubmit(e: any) {
    e.preventDefault();

    // verify user input
    if(searchTerm.trim() === "" || searchTerm.length < 1) {
      setIsAnimating(true)
      return
    }

    navigate(`/search?query=${searchTerm}`)
  }

  

  return (
    <form onSubmit={handleSubmit} className={`${isAnimating ? "animate-shake" : "animate-none"} w-full relative`}>
      
      <input
        onChange={handleSearchInput}
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