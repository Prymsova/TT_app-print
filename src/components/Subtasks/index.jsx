//import './style.css';
import Subtask from '../Subtask';

const Subtasks = ({ issues }) => {
    console.log(issues);
    
    return (
        <div className="subtasks">
            <ul className="subtasks__list">
            {issues
            .map((issue) => issue.fields.subtasks.map(subtask => <Subtask key={subtask.key} subtask={subtask} task={issue.key}/>))
            }
            </ul>
        </div>
    )
};

export default Subtasks;