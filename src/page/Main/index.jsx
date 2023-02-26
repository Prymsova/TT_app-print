import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import Menu from '../../components/Menu';
import Sprint from '../../components/Sprint';
import Tasks from './Tasks';
import Subtasks from './Subtasks';

const Main = ({ sprintSelect }) => {

  const [issues, setIssues] = useState([]);
  const [imagePath, setImagePath] = useState(null);
  const [cardsCount, setCardsCount] = useState(0);

  const handleChangeImage = (selectedImage) => {
    setImagePath(selectedImage);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/sprint/${sprintSelect.id}`);
        const issuesFilter = response.data.issues.filter(issue => issue.fields.subtasks.length > 0);
        setIssues(issuesFilter);
        let newCount = issuesFilter.length;
        issuesFilter.map(issue => newCount += issue.fields.subtasks.length);
        setCardsCount(newCount);
      } catch (error) {
        console.error(error);
      }
    };

    getData()
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
