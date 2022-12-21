import './style.css';

const Btn = ({ classValue, value }) => {

    return (
        <button className={"btn " + classValue } type="submit">{ value }</button>
    );
};

export default Btn;