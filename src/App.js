import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import response from './sprintsList';

function App() {

  const [ sprintsList, setSprintsList] = useState([]);
  const [ sprintSelect, setSprintSelect ] = useState();

  const handleSubmitSprints = (selectValue) => {
    setSprintSelect(sprintsList.filter(sprint => sprint.id === Number(selectValue))[0]);
    //setSprintSelect(selectValue);
  };

  useEffect(() => {
    console.log(sprintSelect);
  }, [sprintSelect]);

  useEffect(() => {
    /* fetch('https://tappytaps2.atlassian.net/rest/agile/1.0/board/1/sprint/?state=active%2Cfuture', {
      method: 'GET',
      headers: {
        cookie: 'atlassian.xsrf.token=BN8V-28CD-O255-NJ3H_39190a654ef9eef5395391e5a85c1dcb452949d0_lin',
        Authorization: 'Basic c2Fyc29uakBnbWFpbC5jb206YnhzNGxFbkJaUU1tTUd0RW05YnE1NUND'
      } 
    })
      .then(response => response.json())
      .then(response => setSprintsList(response.values))
      .catch(err => console.error(err)); */
    setSprintsList(response.values)
  }, []);
      
  return (
    <div className="App">
      <Header sprintsList={sprintsList} onSubmitSprints={ handleSubmitSprints }/>
      {/* podmínka je-li vybrán sprint (nenulový state), tak zobraz main sekci s těmi tasks*/}
      { sprintSelect ? <Main sprintSelect={ sprintSelect }/> : null }
      <Footer />
    </div>
  );
}

export default App;
