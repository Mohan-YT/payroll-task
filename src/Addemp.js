import Form from 'react-bootstrap/Form';
import './Addemp.scss'
import { useContext } from 'react';
import DataContext from './context/DataContext';
function Addemp() {
    const {form,handleSubmit,handleChange} = useContext(DataContext)
  return (
    <>
    <main className='addemp'>
       <div>
       <h1>Add Employee Details</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="text" placeholder="username" name='name' required value={form.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Work Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name='email' required value={form.email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Department</Form.Label>
                        <select className='w-100' name='department' value={form.department} onChange={handleChange}>
                            <option value="" disabled>Select Department</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Accountent">Accountent</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Employee Status</Form.Label>
                        <select className='w-100' name='status' value={form.status} onChange={handleChange}>
                            <option value="" disabled selected >Select Department</option>
                            <option value="Active" selected >Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </Form.Group>
                    <button type='submit' className='btn'>Submit</button>
                </Form>
       </div>
    </main>
        
    </>
    
  );
}

export default Addemp;