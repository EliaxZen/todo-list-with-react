"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Fazer dever de casa', checked: false },
    { id: 2, label: 'Comprar bolo', checked: false },
  ])

  const handleAddButton = () => {
    if (itemInput.trim() === '') return;
    setList([...list, { id: list.length + 1, label: itemInput, checked: false }])
    setItemInput('')
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
    )
  }

  const toggleItem = (id: number) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }
    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden">
      <h1 className="text-3xl mt-5">Lista de Tarefas</h1>

      <div className="flex justify-between w-full items-center my-3 p-2 rounded-md bg-blue-500 max-[620px]:flex-col">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="w-full border-black p-2 text-2xl text-black rounded-md mr-3 outline outline-2 outline-offset-0 outline-green-600 max-[620px]:mr-0"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton} className="bg-green-600 hover:text-gray-950 font-black p-3 rounded max-[320px]:mt-3">Adicionar</button>
      </div>

      <p>{list.length} itens na lista</p>

      <ul className="flex flex-col w-full h-auto p-3 list-disc pl-5">
        {list.map(item => (
          <li key={item.id} className="w-full h-full p-3 flex items-center  justify-between bg-cyan-700 mb-2 rounded-lg">
              <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-10 h-full mr-3" />
              <p className="w-full">{item.label}</p>
            <button onClick={() => deleteItem(item.id)} className="bg-red-800 rounded-md p-2 z-10">deletar</button></li>
        ))}
      </ul>
    </div>
  )
}
export default Page;