import React, { useContext, useEffect, useState } from 'react'; 
import { useParams } from 'react-router';
import DataContext from './context/DataContext';
import Form from 'react-bootstrap/Form';
import './Addemp.scss';

export default function Editdata() {
  const { data, handleEdit, editData, setEditData } = useContext(DataContext);
  const { id } = useParams();
  
  const [loading, setLoading] = useState(true);
console.log(id)
useEffect(() => {
 
  const edited = data.find((p) => p.id === id);

  if (edited) {
    setLoading(false)
    console.log(" Employee Found:", edited);
    setEditData({
      name: edited.name ,
      email: edited.email ,
      department: edited.department ,
      status: edited.status 
    });
  } else {
    console.error(` No post found with ID ${id}`);
  }
}, [data, id, setEditData]);



  if (loading) {
    return <h2>Loading employee data...</h2>;
  }

  return (
    <main className="addemp">
      <div>
        <h1>Edit Employee Details</h1>
        <Form onSubmit={(e) => handleEdit(e, id)}>
          <Form.Group className="mb-3">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              required
              value={editData?.name}
              onChange={(e) => setEditData({...editData, name: e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Work Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              required
              value={editData?.email}
              onChange={(e) => setEditData({...editData, email: e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <select
              className="w-100"
              name="department"
              value={editData?.department}
              onChange={(e) => setEditData({...editData, department: e.target.value})}
            >
              <option value="" disabled>Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Accountant">Accountant</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Status</Form.Label>
            <select
              className="w-100"
              name="status"
              value={editData?.status}
              onChange={(e) => setEditData({...editData, status: e.target.value})}
            >
              <option value="" disabled>Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </Form.Group>

          <button type="submit" className="btn">Save Changes</button>
        </Form>
      </div>
    </main>
  );
}
