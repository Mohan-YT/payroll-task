import React from 'react'
import { useParams } from 'react-router'

export default function Missing() {
  const {slug} = useParams()
  return (
    <main className='d-flex justify-content-center align-items-center h-75 w-75'>
        <p className='fs-3'>No Data Available in <span className='fw-bolder'>{slug}</span></p>
    </main>
  )
}
