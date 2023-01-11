import './style.css';
import Task from '../Task';

const Tasks = ({ issues }) => {
  //v props jsou pouze tasky s alespoň jedním subtaskem
    
  return (
    <div className="tasks">
      <ul className="tasks__list">
        {issues
        .map((issue, index) => (<Task key={issue.key} issue={issue} index={index}/>))
        }
      </ul>
    </div>
  )
};

export default Tasks;