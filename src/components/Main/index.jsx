import { useEffect, useState } from 'react';
import './style.css';
import Menu from '../Menu/index.jsx';
import Sprint from '../Sprint/index.jsx';
import Tasks from '../Tasks/index.jsx';
import Subtasks from '../Subtasks/index.jsx';

//import issue124 from './issue124.js';

const Main = ({ sprintSelect }) => {

  const [issues, setIssues] = useState([]);
  const [imagePath, setImagePath] = useState(null);
  const [cardsCount, setCardsCount] = useState(0);

  const handleChangeImage = (selectedImage) => {
    setImagePath(selectedImage);
  };

  useEffect(() => {
    fetch(`https://tappytaps2.atlassian.net/rest/agile/1.0/sprint/${sprintSelect.id}/issue`, {
      method: 'GET',
      headers: {
        cookie: 'atlassian.xsrf.token=BN8V-28CD-O255-NJ3H_39190a654ef9eef5395391e5a85c1dcb452949d0_lin',
        Authorization: 'Basic c2Fyc29uakBnbWFpbC5jb206YnhzNGxFbkJaUU1tTUd0RW05YnE1NUND'
      }
    })
      .then(response => response.json())
      .then(response => {
        const issuesFilter = response.issues.filter(issue => issue.fields.subtasks.length > 0);
        setIssues(issuesFilter);
        let newCount = issuesFilter.length;
        issuesFilter.map(issue => newCount += issue.fields.subtasks.length);
        setCardsCount(newCount);
      })
      .catch(err => console.error(err));

    /* const issuesFilter = issue124.issues.filter(issue => issue.fields.subtasks.length > 0);
    setIssues(issuesFilter);
    let newCount = issuesFilter.length;
    issuesFilter.map(issue => newCount += issue.fields.subtasks.length);
    setCardsCount(newCount); */

  }, [sprintSelect]);

  return (
    <main className="main">
      <Menu onChangeImage={ handleChangeImage } cardsCount={ cardsCount } />
      <Sprint sprint={ {...sprintSelect, imagePath} } />
      <Tasks issues={ issues } />
      <Subtasks issues= { issues }/>
    </main>
  );
};

export default Main;
