import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [name,setName] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const [message,setMessage] = useState<string>("")
  const [error,setError] = useState<string>("")
  const url = import.meta.env.VITE_API_URL

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()

    try {
      const res =  await axios.post(`${url}`, {name,email})
      setMessage("Details added successfully ...")
      console.log(res.data)

      setTimeout(() => {
        setMessage("")
        window.location.reload()
      },3000)
      
    } catch (error:unknown) {
      if(axios.isAxiosError(error) && error.response){
        setError(error.response.data.message || "Try again later ...")
        setTimeout(() => {
          setError("")
        },3000)
      }
    }


  }

  return (
    <div className='flex dark:bg-gray-700 justify-center h-screen items-center'>
      <div className='text-center dark:bg-gray-800 dark:text-white bg-gray-200 p-10 rounded-2xl w-[400px]'>
        <h1 className='font-medium text-xl pb-2'><span className='text-purple-400'>GENZ</span>Stack is almost here!</h1>
        <p className='pb-5'>join the waitlist now.</p>
        <form action="" onSubmit={handleSubmit}>
          {message && <p className='bg-green-500/20 text-md text-green-400 p-2 mb-4 rounded-md'>{message}</p>}
          {error && <p className='bg-red-500/20 text-md text-red-400 p-2 mb-4 rounded-md'>{error}</p>}
          <input type="text" onChange={(e) => setName(e.target.value)} className='border p-2 border-gray-500 rounded-md focus:outline-none mb-5 focus:border-purple-600 w-full' placeholder='Enter your name '/>
          <input type="text" onChange={(e) => setEmail(e.target.value)} className='border p-2 border-gray-500 rounded-md focus:outline-none mb-5 focus:border-purple-600 w-full' placeholder='Enter email ' />
          <button type='submit' className='bg-purple-400 hover:bg-purple-600 dark:bg-purple-500 cursor-pointer text-white px-4 py-2 rounded-md'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
