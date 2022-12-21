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

    /* const options = {
        method: 'GET',
        headers: {
          cookie: 'atlassian.xsrf.token=BN8V-28CD-O255-NJ3H_39190a654ef9eef5395391e5a85c1dcb452949d0_lin',
          Authorization: 'Basic c2Fyc29uakBnbWFpbC5jb206eEhVMG5ublRZbk5VZVVsaUMyejcyMUYz'
        }
      };
      
    fetch('https://tappytaps2.atlassian.net/rest/agile/1.0/board/1/sprint/?state=active%2Cfuture', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err)); */


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