import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  const [ sprintsList, setSprintsList] = useState([]);
  const [ sprintSelect, setSprintSelect ] = useState();

  const handleSubmitSprints = (selectValue) => {
    setSprintSelect(sprintsList.filter(sprint => sprint.id === Number(selectValue))[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch(`${process.env.REACT_APP_JIRA_API}board/1/sprint/?state=active%2Cfuture`, {
        method: 'GET',
        headers: {
          cookie: `${process.env.REACT_APP_REQUEST_TOKEN}`,
          Authorization: `${process.env.REACT_APP_REQUEST_AUTH}`
        } 
      });
      const data = await response.json();
      setSprintsList(data.values);
    };

    fetchData()
    .catch(err => console.error(err));

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
