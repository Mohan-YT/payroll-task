import React, { useContext } from 'react'
import DataContext from './context/DataContext'

export default function Search() {
  const {search,setSearch} = useContext(DataContext)
  return (
    <>
        <div>
            <input type="text" placeholder='Search Employee' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
    </>
  )
}
