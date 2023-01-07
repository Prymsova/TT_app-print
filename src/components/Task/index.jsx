//import './style.css';


const Task = ({ issue }) => {
    //console.log(issue.fields.subtasks);

    return (
        <div className="task">
            <li>{issue.key}</li>
        </div>
    )
};

export default Task;