import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import url from '../api/url';

const DataContext = createContext({})
 export function DataProvider({children}) {
    const [data,setData] = useState([])
    const [search,setSearch] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [form,setForm] = useState({
      name : "",
      email : "",
      department : "",
      status : ""
    })
    const [editData,setEditData] = useState({
      name : "",
      email : "",
      department : "",
      status : ""
    })
    const [selectInput,setSelectInput] = useState([])
    useEffect(()=>{
      const fetchAPI = async ()=>{
        try{
            const response = await url.get('/datas')
            if(!response) {
               console.error("No data found in response!")
                return;
            } 
            const result = response.data
            setData(result)
        }catch(err){
            console.log(err.message)
        }
      }
      fetchAPI()
    },[])

    useEffect(()=>{
      const filterData = data.filter((item)=>
      ((item.name).toLowerCase().trim()).includes(search.toLowerCase().trim()) ||
      ((item.department).toLowerCase().trim()).includes(search.toLowerCase().trim()) ||
      ((item.status).toLowerCase().trim()).includes(search.toLowerCase()))

      setSearchResult(filterData.reverse())
    },[data,search])
    
    const handleChange = (e)=>{
      const {name,value} = e.target
      setForm({
        ...form,
        [name] : value
      })
    }

    const handleSubmit = async (e)=>{
      e.preventDefault()

      const id = data.length ? data[data.length -1].id + 1 : 1 ;
      const newPost = {id,name:form.name,email:form.email,department:form.department,status:form.status}
      alert("Employee data successfully added")
      try{
          const response =await url.post("/datas",newPost)
          const newData = [...data,response.data]
          setData(newData)
          console.log(`newdata : ${data}`)
      }catch(err){
        console.log(`data not posted`)
      }
      setForm(
        {
          name : "",
          email : "",
          department : "",
          status : ""
        }
      )

    }

    const handleEdit = async (e, id) => {
      e.preventDefault(); 

      console.log(`Editing post with ID: ${id}`);
      console.log("Current Edit Data:", editData);
  
      const updatedData = {
        id,
        name: editData.name,
        email: editData.email,
        department: editData.department,
        status: editData.status
      };
    
      try {
        const response = await url.put(`/datas/${id}`, updatedData);
    
        setData(prevData =>
          prevData.map(post =>
            post.id === id ? { ...response.data } : post
          )
        );
    
        alert(" Employee data updated successfully!");
        setEditData({
          name: "",
          email: "",
          department: "",
          status: ""
        });
    
      } catch (err) {
        console.error("Error in handleEdit:", err.message);
      }
    };

    const handleCheckbox = (id)=>{
      setSelectInput((prev) =>
        prev.includes(id)
          ? prev.filter((selectedId) => selectedId !== id) 
          : [...prev, id] 
      );
    }

    const handleDelete = async (id)=>{
      try{
        await url.delete(`/datas/${id}`)
        const dataAfterDelete = data.filter((item)=>item.id !== id);
        setData(dataAfterDelete)
      }catch(err){
        console.log(`Error : ${err.message}`)
      }
    }
    
  

  return (
    <>
    <DataContext.Provider value={{data,search,setSearch,searchResult,handleSubmit,form,setForm,handleChange,handleEdit,editData,setEditData,handleCheckbox,selectInput,handleDelete}} >
        {children}
    </DataContext.Provider>
    </>
  )
}
export default DataContext