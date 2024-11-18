import React, { useState } from 'react'
import { useTasksStore } from '../store/tasksStore' 
import PropTypes from 'prop-types'
import createId from '../helpers/createId'

const Form = () => {
    const { tasks, setTasks } = useTasksStore( state => state )
    const [title, setTitle] = useState('')
    const [actividad, setActividad] = useState('')
    const [date, setDate] = useState('')
    const id = createId()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTasks = [...tasks, {
            id, title, actividad, date, state: false
        }]
        setTasks(newTasks)
        setActividad('')
        setTitle('')
        setDate('')
    }
  return (
    <form onSubmit={handleSubmit} method='post' className='flex flex-col gap-3'>
        <div>
            <label className="font-semibold">Título</label>
            <input value={title} onChange={ e => setTitle(e.target.value)} type="text" id="title" name="title" className="w-full py-1 px-2 border-b-2 border-gray-400 transition-all focus:border-[#6b7db3] bg-transparent outline-none" />
        </div>
        <div>
            <label className="font-semibold">Actividad</label>
            <input value={actividad} onChange={ e => setActividad(e.target.value)} type="text" id="actividad" name="actividad" className="w-full py-1 px-2 border-b-2 border-gray-400 transition-all focus:border-[#6b7db3] bg-transparent outline-none" />
        </div>
        <div>
            <label className="font-semibold">Fecha</label>
            <input value={date} onChange={ e => setDate(e.target.value)} type="date" id="fecha" name="fecha" className="w-full py-1 px-2 border-b-2 border-gray-400 transition-all focus:border-[#6b7db3] bg-transparent outline-none" />
        </div>

        <div className='flex justify-end'>
            <button className='font-semibold text-white bg-[#9999ff] px-3 py-2 rounded-md hover:scale-105 transition-all'>
                <p>Agregar</p>
            </button>
        </div>
    </form>
  )
}

// Form.PropTypes = {
//     tasks.PropTypes.obj.isRequired
// }

export default Form