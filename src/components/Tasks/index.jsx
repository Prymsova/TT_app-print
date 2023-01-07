//import './style.css';
import Task from '../Task';

const Tasks = ({ issues }) => {
    //v props jsou pouze tasky s alespoň jedním subtaskem
    
    return (
        <div className="tasks">
            <ul className="tasks__list">
            {issues
            .map(issue => <Task key={issue.key} issue={issue}/>)
            }
            </ul>
        </div>
    )
};

export default Tasks;