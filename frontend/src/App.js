import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './page/Header';
import Footer from './page/Footer';
import Main from './page/Main';
//import isDev from './assets/isDev.js';

function App() {

  const [ sprintsList, setSprintsList] = useState([]);
  const [ sprintSelect, setSprintSelect ] = useState();

  const handleSubmitSprints = (selectValue) => {
    setSprintSelect(sprintsList.filter(sprint => sprint.id === Number(selectValue))[0]);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api`);
        const response = await axios.get('/api');
        setSprintsList(response.data.values);
      } catch (error) {
        console.error(error);
      }
    };

    getData()
  }, []);
      
  return (
    <div className="App">
      <Header sprintsList={sprintsList} onSubmitSprints={ handleSubmitSprints }/>
      { sprintSelect &&
        <Main sprintSelect={ sprintSelect } />
      }
      <Footer />
    </div>
  );
}

export default App;
