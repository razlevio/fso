import { useState } from 'react'

function App() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-4xl p-5">Hello World</h1>
      <button className="text-pink-400 border border-pink-400 hover:bg-pink-400 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-2 w-54 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Generate Anecdote</button>
    </div>
  )
}

export default App
