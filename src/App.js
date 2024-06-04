import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  //const [selectedCategory, setSelectedCategory] = useState('');
  const [jokes, setJokes] = useState([])
  const [type, setType] = useState('')
  useEffect(() => {
    fetchjokes("Any", "single")
  }, [])
  function fetchjokes(category) {
    const url = `https://v2.jokeapi.dev/joke/${category}?type=single&amount=1`

    axios.get(url)
        .then((res) => {
          //console.log(res.data.joke)  
          setJokes(res.data.joke) 
          setType(res.data.category)

        })
        .catch((err) => {
          console.log(err)
        })
  }
  //console.log(jokes)
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  return (
    <div className="bg-aliceblue flex items-center justify-center py-8 font-poppins">
      <div className="w-2/3 p-6 h-auto text-white rounded-lg shadow-lg bg-gradient-to-r from-purple-800 to-purple-600">
        <h1 className="text-center text-3xl font-normal">Joke App</h1>
        <img src="./haha.png" className="mx-auto mt-4 bg-transparent w-48 " alt="Cartoon" />
        <div className="mt-4 flex ">
          {/* <div>
            <select 
              id="category"
              value={selectedCategory}
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 focus:border-purple-500"
            >
              <option value="" disabled>Select a category</option>
              <option value="any,single">Single Part Joke</option>
              <option onSelect={()=>fetchjokes("Any", 'twopart')}>Two Part Joke</option>
              <option value="celebrity">Single Programming Joke</option>
              <option value="dev">Two Part Programming Joke</option>
              <option value="dev">Single Pun Joke</option>
              <option value="dev">Two Part Pun Joke</option>
            </select>
          </div> */}

          <div className="flex flex-col items-center text-xl  font-semibold text-justify p-2 bg-opacity-30 h-64 bg-black w-2/3 mx-auto  rounded-lg">
            
            <h1 className="mt-0 underline underline-offset-4">{type} Joke</h1>
            <h2 className="mt-8"  >{jokes}</h2>
          </div>
        </div>
        <button className="border-2 border-gray-500 p-2 mt-6 mx-auto flex rounded-md hover:bg-gray-800"
        onClick={()=>fetchjokes("Any")}>Get New One</button>

      </div>  
    </div>
  );
}

export default App;
