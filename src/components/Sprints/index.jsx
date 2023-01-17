import { useRef } from 'react';
import './style.css';
import Btn from '../Btn';

const Sprints = ({ sprintsList, onSubmitSprints }) => {

    const sprintSelectRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const sprintSelectValue = sprintSelectRef.current.value;
        onSubmitSprints(sprintSelectValue);
    };

    return (
        <div className="sprints">
            <h1>Generátor sprint kartiček</h1>
            <span className="note">Zde můžete generovat tisknutelné kartičky pro vybraný sprint</span>
            <form className="sprints__form" onSubmit={ handleSubmit }>
                <select className="sprints__select" id="sprints__select" name="sprints__select" ref={ sprintSelectRef }>
                    {sprintsList.map(sprintItem => <option key={sprintItem.id} value={sprintItem.id}>{sprintItem.name}</option>)}
                </select>
                <Btn classValue="btn--primary" type="submit" value="Generovat"/>
            </form>
        </div>
    );
};

export default Sprints;