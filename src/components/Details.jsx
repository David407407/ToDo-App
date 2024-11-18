import React from 'react'
import { useTasksStore } from '../store/tasksStore'
import { formatearFecha } from '../helpers/formatearFecha'

const Details = () => {
  const { tasks, setTasks, task, setTask } = useTasksStore( state => state )
  const {id, title, actividad, date, state} = task

  const handleEliminarTarea = () => {
    const newTasks = tasks.filter( t => t.id !== task.id)
    setTasks(newTasks)
    setTask({})
  }
  return (
    <div className='col-end-2 rounded-md bg-[#e6ecff] px-8 py-4'>
        <h2 className='text-2xl font-bold roboto text-[#6b7db3] text-center'>
            <p>
              {Object.keys(task).length > 0 ? 'Detalles' : 'Selecciona una actividad'}
            </p>
        </h2>
        {
          Object.keys(task).length > 0 && (
            <>
              <div>
                  <h3 className='text-2xl font-semibold montserrat flex justify-between items-center'>
                    <p className='text-[#9999ff]'>{title}</p>
                    <p className='font-medium text-lg'><span>{formatearFecha(date)}</span></p>
                  </h3>
                  <p className='font-medium'>Actividad: <span>{actividad}</span></p>
                  <p className='font-medium'>Estado: <span className={state ? 'text-green-400' : 'text-red-400'}>{state ? 'Completada' : 'Sin completar'}</span></p>
              </div>
              <div className='flex justify-end'>
                <button className='bg-red-400 p-3 rounded-lg hover:scale-105 transition-all' onClick={handleEliminarTarea}>
                  <svg className='fill-white w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </button>
              </div>
            </>
          )
        }
    </div>
  )
}

export default Details