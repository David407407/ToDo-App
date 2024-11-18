import React from 'react'
import Form from './Form'

const AddTask = () => {
  return (
    <div className='col-end-2 rounded-md bg-[#e6ecff] px-8 py-4'>
        <h2 className='text-2xl font-bold roboto text-[#6b7db3] text-center'>
            <p>Agregar</p>
        </h2>
        <Form />
    </div>
  )
}

export default AddTask