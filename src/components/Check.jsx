import { useState } from "react"
import { removeItem } from "./localStorage"
import Remove from "./Remove"

export default function Check() {
    const [checked, setChecked] = useState(false)
    const handleClick = (e) => {
        const list = e.target.closest('.task') //targeting task
        //reading custom attribute value and passing it into the removeItem function
        const dataId = list.getAttribute('data-id')

        removeItem('task', dataId)  //remove the task from local storage
        list.remove()   //remove the task from DOM

    }

    return (
        <>
            <div className="flex gap-4 items-center">
                {/* <button onClick={() => setChecked(!checked)}>{checked ? "uncheck" : "check"}</button> */}
                <input onChange={() => setChecked(!checked)} type="checkbox" className="w-[28px] h-[28px]" />
                <Remove checked={checked} handleClick={handleClick} />
            </div>
        </>
    )
}