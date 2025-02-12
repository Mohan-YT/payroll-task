import React from 'react'
import { NavLink} from "react-router-dom"
import "./Menulist.scss"
export default function Menulist() {
  return (
    <>
        <main className=' Menulist d-flex flex-column justify-content-between p-1 p-sm-2 ps-0 ps-sm-4 '>
            <div className='lists d-flex flex-column justify-content-around p-1 p-sm-2'>
                <NavLink to="/empty/dashboard">Dashboard</NavLink>
                <NavLink to="/">Employee</NavLink>
                <NavLink to="/empty/payruns">Pay Runs</NavLink>
                <NavLink to="/empty/approvals">Approvals</NavLink>
                <NavLink to="/empty/form16">Form 16</NavLink>
                <NavLink to="/empty/loans">Loans</NavLink>
                <NavLink to="/empty/reports">Reports</NavLink>
                <NavLink to="/empty/settings">Settings</NavLink>
            </div>
            <div>
                <p className='p-2'>Contact Support</p>
            </div>
        </main>
    </>
  )
}
