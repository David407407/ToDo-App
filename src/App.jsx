import './App.css'
import AddTask from './components/addTask'
import Details from './components/Details'
import List from './components/List'

function App() {

  return (
    <div className='w-full min-h-screen bg-slate-900'>
      <header className='max-w-full mx-8 my-4 bg-[#e6ecff] p-6 rounded-md'>
        <h1 className='uppercase font-bold text-4xl text-[#9999ff] montserrat text-center'>To Do List</h1>
      </header>

      <main className='grid grid-cols-4 max-w-full mx-8 gap-4'>
        <aside className='flex flex-col gap-2'>
          <AddTask />
          <Details />
        </aside>
        <List />
      </main>
    </div>
  )
}

export default App
