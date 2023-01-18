import './style.scss';
import emojis from '../Main/emojis.js';

const Subtask = ({ subtask, task, taskIndex }) => {

  return (
    <li className="subtask">
      <div className="subtask__rectangle" />
      <div className="subtask__content">
        <div className="subtask__header">
          <span className="task__key" dataemojis={emojis[taskIndex]}>{task}</span>
        </div>
        <h3 className="subtask__summary">{subtask.fields.summary}</h3>
      </div>
    </li>
  )
};

export default Subtask;