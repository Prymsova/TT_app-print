import { useEffect } from 'react';
import './style.css';
import emojis from '../Main/emojis.js';

const Task = ({ issue, index }) => {
  //console.log(issue.fields.subtasks);
  //verze bez psedo-elementu ::before >> <p>{emojis[index]} {issue.key} {issue.fields.subtasks.length}</p>

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