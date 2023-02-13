import './style.scss';
import emojis from '../../assets/emojis.js';

const Task = ({ issue, index }) => {

  return (
    <li className="task">
      <div className="task__header">
        <span className="task__key" dataemojis={emojis[index]}>{issue.key}</span>
        <span className="task__count">{issue.fields.subtasks.length}</span>
      </div>
      <h3 className="task__summary">{issue.fields.summary}</h3>
    </li>
  )
};

export default Task;