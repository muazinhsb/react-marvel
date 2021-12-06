import React, {useState, useEffect} from 'react';
import "./App.css";
import Characters from "./components/Characters";
import axios from "axios";
import { ReactComponent as Logo } from "./images/logo.svg";

const App = () => {
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=61c57f9c13e9453675b3a4619db9e73d`
      )
      .then((res) => {
        setChar(res.data.data.results);
        console.log(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredChar = char.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  

  return (
    <div className="App">
      <div className="char-search">
        <Logo className="logo" />
        <form>
          <input type="text" placeholder="Search" className="char-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredChar.map(char => {
        return(
          <Characters name={char.name} 
          image={`${char.thumbnail.path}/portrait_incredible.jpg`} 
          desc={char.description}
          // stories={char.stories.items}
          /> 
        )
      })}
      
    </div>
  );
};

export default App;
