import React from 'react'
import { useTasksStore } from '../store/tasksStore'

const ListItem = ({task}) => {
    const { tasks, setTasks, setTask } = useTasksStore( state => state )
    
    const { id, title, actividad, state } = task
    const handleChangeState = (id) => {
        const [newStateTask] = tasks.filter((e) => e.id === id)
        newStateTask.state = !newStateTask.state
        const newTasks = tasks.map(e => e.id === newStateTask.id ? newStateTask : e)
        setTasks(newTasks)
      }
    
      const handleSetTask = (tarea) => {
        setTask(tarea)
      }
  return (
    <div className='flex gap-4 cursor-pointer' onClick={() => handleSetTask({...task})}>
        <div className='flex items-center'>
            <div onClick={() => handleChangeState(id)} className={`w-[24px] h-[24px] rounded-full cursor-pointer border-2  flex items-center justify-center ${state ? 'border-[#9999ff]' : 'border-gray-400'}`}>
                {
                    state && (
                        <div className='w-[16px] h-[16px] rounded-full cursor-pointer bg-[#9999ff]'></div>
                    )
                }
            </div>
        </div>
        <div className="flex-1">
            <p className='text-semibold montserrat text-xl'>{title}</p>
            <p>{actividad}</p>
        </div>
    </div>
  )
}

export default ListItem