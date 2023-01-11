import './style.css';

const Subtask = ({ subtask, task }) => {
  //namísto subtask.key chtějí zobrazovat task.key, tedy pro subtasky ze stejného tasku bude stejný TM-1234 a podle něj taky stejný emoji

  return (
    <div className="subtask">
      <li>{task}, {subtask.fields.summary}</li>
    </div>
  )
};

export default Subtask;