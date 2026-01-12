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
    <div>

      {
        title.map((item) => (
          <div className='text-center' key={item.id}>
            <div>
              <h3 className='font-bold bg-gray-500 text-white max-w-[500px] p-2'>{item.title}</h3>
            </div>
          </div>
        ))
      }


    </div>
  )
}

export default App  