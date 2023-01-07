import './style.css';
import Sprint from '../Sprint/index.jsx';
import Tasks from '../Tasks/index.jsx';
import Subtasks from '../Subtasks/index.jsx';

import sprint124 from './sprint124.js';
import issue124 from './issue124.js';

const Main = () => {

  //console.log(issue124.issues[0]);
  //v issue124 jsou issues, pro první z nich budu chtít key a v položce fields budu chtít subtasks
  
  //filter udělám pro response z fetche pro daný sprint, zde příklad sprintu id 124
  const issues = issue124.issues.filter(issue => issue.fields.subtasks.length > 0);

  return (
    <main>
      <Sprint sprint={ sprint124 }/>
      <Tasks issues={ issues }/>
      <Subtasks issues= { issues }/>
    </main>
  );
};

export default Main;
