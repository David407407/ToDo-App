import React from 'react'
import { useTasksStore } from '../store/tasksStore'
import ListItem from './ListItem'

const List = () => {
  const { tasks } = useTasksStore( state => state )

  return (
    <div className='col-start-2 col-end-5 flex flex-col gap-4 '>
        <h2 className='text-3xl font-bold montserrat text-[#e6ecff]'>
            <p className='text-center'>Lista de Actividades</p>
        </h2>

        {
            tasks.map( task => (
                <div className='bg-[#e6ecff] rounded-md px-8 py-4'>
                    <ListItem
                        key={task.id}
                        task={task}
                    />
                </div>
            ))
        }

        </div>
  )
}

export default List