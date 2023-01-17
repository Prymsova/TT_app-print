import './style.css';

const Btn = ({ classValue, type, value, handleClick }) => {

    return (
        <button className={"btn " + classValue } type={type} onClick={handleClick}>{ value }</button>
    );
};

export default Btn;