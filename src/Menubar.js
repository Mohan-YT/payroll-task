import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Addemp from './Addemp'

export default function Menubar() {
    const [isView,setIsView] = useState(true)
    const handleFilterBtn = ()=>{
        setIsView(!isView)
    }
  return (
    <>
      <div className='menubar p-2'>
            <select name="" id="" className='select d-none d-sm-block' value=''>
                <option value="active">Active Employees</option>
                <option value="inactive">Inactive Employees</option>
            </select>
            <div className='d-flex gap-2 add-div'>
                {/* <Addemp /> */}
                <Link to="/additem"><button className='add btn bg-primary text-white px-5 px-sm-3 '>Add Employee</button></Link>
                <button className='btn border-1 border-secondary d-flex justify-content-center align-items-center d-none d-sm-block'><i class="bi bi-three-dots"></i></button>
                <button onClick={handleFilterBtn} className='btn border-1 border-secondary d-flex justify-content-center align-items-center d-none d-sm-block'><i class="bi bi-funnel"></i></button>
            </div>
      </div>
        
    </>
  )
}
