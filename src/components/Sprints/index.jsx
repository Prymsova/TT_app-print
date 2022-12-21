import { useRef, useState, useEffect } from 'react';
import './style.css';
import Btn from '../BtnPrimary';

const Sprints = ({ sprintsList }) => {

    const sprintSelectRef = useRef();
    const [ sprintSelect, setSprintSelect ] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const sprintSelectValue = sprintSelectRef.current.value;
        setSprintSelect(sprintSelectValue);
        //window.print();
    };

    useEffect(() => {
        console.log(sprintSelect);
    }, [sprintSelect]);

    return (
        <div className="sprints">
            <h1>Generátor sprint kartiček</h1>
            <p className="note">Zde můžete generovat tisknutelné kartičky pro vybraný sprint</p>
            <form className="sprints__form" onSubmit={ handleSubmit }>
                <select className="sprints__select" id="sprints__select" name="sprints__select" ref={ sprintSelectRef }>
                    {sprintsList.map(sprintItem => <option key={sprintItem.id} value={sprintItem.id}>{sprintItem.name}</option>)}
                </select>
                <Btn classValue="btn--primary" value="Generovat"/>
            </form>
        </div>
    );
};

export default Sprints;