import { useEffect, useRef, useState } from "react";
import { getItem, setItem } from "./components/localStorage";
import Check from "./components/Check";

const App = () => {
  const inputRef = useRef()
  const [task, setTask] = useState(() => {
    const item = getItem('task')
    return item || []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputRef.current.value) {
      const newTask = {
        id: Date.now(),
        task: inputRef.current.value
      }
      setTask([...task, newTask])
    }
    inputRef.current.value = ""
  }

  useEffect(() => {
    setItem('task', task)
  }, [task])

  const handleClear = () => {
    try {
      window.localStorage.removeItem('task')
      window.location.reload()
      return true

    } catch (error) {
      console.log(`handleClear error ${error}`)
    }
  }

  return (
    <>
      <div
        className='w-screen h-screen flex justify-center items-center gap-2 bg-black/50 flex-col'
      >
        <h1 className="text-[5vmin] font-bold" >2Do List</h1>
        <form onSubmit={handleSubmit} className='main p-4 min-w-max w-[30vw] flex flex-col gap-4 bg-[var(--secondary-color)] rounded-lg'>
          <div className="rounded-[50px] bg-[var(--primary-color)] p-2 add-section flex gap-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your task"
              className="outline-none w-full text-white px-4 text-xl placeholder:text-white"
            />
            <div onClick={handleSubmit} type="submit" className=" border bg-[var(--secondary-color)] ml-auto rounded-[50%] w-[48px] hover:bg-[var(--quinary-color)]">
              <img className="w-full h-full object-center object-cover" src="/svg/add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </div>
          </div>
          <div className='taskSection'>
            <ul className="w-full min-h-[350px] h-[40vh] p-4 overflow-y-scroll scrollbar-hide bg-[var(--quaternary-color)]">
              {task.map((e) => {
                return (
                  <li
                    data-id={e.id}
                    className='task mb-2 w-full text-xl px-4 py-2 flex gap-4 bg-[var(--primary-color)] text-white'
                    key={e.id}
                  >
                    <Check />
                    <span className="text-white text-left">{e.task}</span>
                  </li>
                )
              })}
            </ul>
            <button
              className='bg-[var(--primary-color)] outline-none mt-4 uppercase w-max text-xl px-4 py-2 text-white'
              onClick={handleClear}
            >clear</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default App
