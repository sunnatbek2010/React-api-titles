import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts"
  const [title, setTitle] = useState([])

  async function fetchdata() {
    try {
      let data = await axios.get(apiUrl)
      console.log(data.data);
      setTitle(data.data)
    } catch (error) {
      console.log("ошибка", error);
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div className='max-w-[1200px] mx-auto'>

      <div className='flex justify-between flex-wrap '>
        {
          title.map((item) => (
            <div className='text-center' key={item.id}>
              <div>
                <h3 className='p-3 font-bold bg-white/5 backdrop-blur-lg rounded-lg text-white max-w-[300px] p-2 mt-2'>{item.title}</h3>
              </div>
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default App  