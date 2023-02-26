import './style.scss';
import Task from '../../../components/Task';

const Tasks = ({ issues }) => {

  return (
    <div className="tasks">
      <ul className="tasks__list">
        {issues
        .map((issue, index) => {
          return <Task key={issue.key} issue={issue} index={index} />
        })
        }
      </ul>
    </div>
  )
};

export default Tasks;