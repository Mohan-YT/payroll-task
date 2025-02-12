import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";

export default function Emplists() {
  const { searchResult, selectInput, handleCheckbox, handleDelete } = useContext(DataContext);

  return (
    <>
      <section className="emplist">
        <div className="row mx-1 header">
          <div className=" emp-name col-12 col-md-4 justify-content-start d-flex  ps-3">
            <input
              type="checkbox"
              className="mb-0 me-2"
              onChange={(e) => handleCheckbox("all", e.target.checked)} 
            />
            <label >
              <p className=" fw-bolder mb-0 ms-1">EMPLOYEE NAME</p>
            </label>
          </div>
          <div className="col-4 m-auto p-auto">
            <p className="fw-bolder mb-0">WORK EMAIL</p>
          </div>
          <div className="col-2">
            <p className="fw-bolder mb-0">DEPARTMENT</p>
          </div>
          <div className="col-2">
            <p className="fw-bolder mb-0">EMPLOYEE STATUS</p>
          </div>
        </div>

        <div className="list-box pb-3">
          {searchResult.map((item) => (
            <div className="row mx-1 content d-flex justify-content-center align-items-center" key={item.id}>
              <div className="emp-name col-12 col-md-4 d-flex align-items-center justify-content-start ps-3">
                <input
                  type="checkbox"
                  onChange={() => handleCheckbox(item.id)}
                  checked={selectInput.includes(item.id)}
                  className="mb-0 me-2"
                />
                <Link to={`/edit/${item.id}`}>
                  <label  className="d-flex justify-content-start align-items-center">
                    <i className="bi bi-person-circle"></i>
                    <p className="mb-0 ms-1">{item.name}</p>
                  </label>
                </Link>
              </div>
              {selectInput.includes(item.id) ? (
                <div className="col-8 justify-content-end pe-4">
                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              ) :
              (
                <>
                    <div className="col-4">
                        <p className="mb-0">{item.email}</p>
                    </div>
                    <div className="col-2">
                        <p className="mb-0">{item.department}</p>
                    </div>
                    <div className="col-2">
                        <p className={` mb-0 ${item.status.toLowerCase() === "active" ? "text-success" : "text-danger"}`}>{item.status}</p>
                    </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
