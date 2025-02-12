import React from 'react'
import Menubar from './Menubar'
import './Employee.scss'
import Emplists from './Emplists'
// import Addemp from './Addemp';

export default function Employee() {
  return (
    <>
    <main className='employee d-flex flex-column'>
         <div className='w-sm-100'>
             <Menubar />
         </div>
         <div className='filter px-4 py-2 w-100'>
             <div className='filter-item'>
                <label htmlFor="" className='d-flex justify-content-center align-items-center'>FILTER BY :</label>
                    <select name="" id="" value=''>
                        <option value="" disabled selected >Select Work Location</option>
                        <option value="">Coimbatore</option>
                        <option value="">Chennai</option>
                        <option value="">Bengalor</option>
                    </select><span>|</span>
                    <select name="" id="" value=''>
                        <option value="" disabled selected> Select Department</option>
                        <option value="">IT</option>
                        <option value="">NON-IT</option>
                    </select><span>|</span>
                    <select name="" id="" value=''>
                        <option value="" disabled selected>Select Designation</option>
                        <option value="">Software Developer</option>
                        <option value="">UI/UX Designer</option>
                        <option value="">HR Executive</option>
                    </select><span>|</span>
                   <div className='d-flex justify-content-center align-items-center'>
                        <p className='text-primary d-flex'><span className='border border-primary border-1'><i class="bi bi-three-dots text-primary"></i></span> More Filters</p>
                   </div>
             </div>
             <button className=' text-primary d-flex justify-content-center align-items-center'><i class="bi bi-x"></i></button>
        </div>
        <div className='w-sm-100 emp-lists '>
          
            <Emplists />
        </div>
        
    </main>
        
    </>
  )
}
