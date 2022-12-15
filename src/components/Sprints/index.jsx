import { useState } from 'react';
import './style.css';

const Sprints = ({ sprintsList }) => {

    const [ sprintSelected, setSprintSelected ] = useState();
    const handleChangeSelect = (e) => {
        setSprintSelected(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(sprintSelected);
    };

    return (
        <div className="sprints">
            <h1>Generátor sprint kartiček</h1>
            <p className="note">Zde můžete generovat tisknutelné kartičky pro vybraný sprint</p>
            <form className="sprints__form" onSubmit={ handleSubmit }>
                <select className="sprints__select" id="sprints__select" name="sprints__select" onChange={ handleChangeSelect }>
                    {/* tady ty option vytvořím přemapováním pole výsledků z fetche pro každý sprint */}
                    {sprintsList.map(sprintItem => <option key={sprintItem.id} value={sprintItem.id}>{sprintItem.name}</option>)}
                </select>
                <button className="btn submit" type="submit">Generovat</button>
            </form>
        </div>
    );
};

export default Sprints;