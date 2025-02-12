import Search from "./Search";
import './Navbar.scss'
import { BsPeople, BsBell, BsGear } from "react-icons/bs"; 
function Navigation() {
  return (
    <>
     <nav className="d-flex justify-content-between align-items-center p-1 px-2 bg-dark">
        <div className="d-flex justify-content-between w-md-50 w-100 align-items-center order-1 order-md-0">
            <div className=" w-25 d-flex d-md-block justify-content-between align-items-center text-white">
                <h1 className="text-start ">Payroll</h1>
            </div>
            <div className="w-75 search mx-2 mx-sm-0 order-2 ">
                <Search />
            </div>
        </div>
        <div className="d-flex  justify-content-between align-items-center gap-3 pe-1 order-0 order-sm-1">
            <input type="text" className="" style={{width : "100px"}} />
            <BsPeople  className="text-white" />
            < BsBell className="text-white"/>
            < BsGear className="text-white"/>
            <div className="profile-img"><img src="./profile.jpeg" alt="profile" /></div>
        </div>
     </nav>
    </>
  );
}

export default Navigation;