import './App.css'

function App() {

  return (
    <div className='flex dark:bg-gray-700 justify-center h-screen items-center'>
      <div className='text-center dark:bg-gray-800 dark:text-white bg-gray-200 p-10 rounded-2xl w-[400px]'>
        <h1 className='font-medium text-xl pb-2'><span className='text-purple-400'>GENZ</span>Stack is almost here!</h1>
        <p className='pb-5'>join the waitlist now.</p>
        <form action="">
          <input type="text" className='border p-2 border-purple-300 rounded-md focus:outline-none mb-5 focus:border-purple-600 w-full' placeholder='Enter your name '/>
          <input type="text" className='border p-2 border-purple-300 rounded-md focus:outline-none mb-5 focus:border-purple-600 w-full' placeholder='Enter email ' />
          <button className='bg-purple-400 hover:bg-purple-600 dark:bg-purple-500 cursor-pointer text-white px-4 py-2 rounded-md'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
