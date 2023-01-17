import './style.css';
import emojis from '../Main/emojis.js';

const Subtask = ({ subtask, task, taskIndex }) => {
  //namísto subtask.key chtějí zobrazovat task.key, tedy pro subtasky ze stejného tasku bude stejný TM-1234 a podle něj taky stejný emoji

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