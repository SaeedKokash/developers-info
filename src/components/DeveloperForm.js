import React, { useReducer } from "react";
import { Developer } from "./Developer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DeveloperList from "./DeveloperList";

function DeveloperForm() {
    const [ developer, dispatch ] = useReducer( Developer, [] );

    // console.log( developer );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const name = e.target.name.value;   
        const progLanguage = e.target.progLanguage.value;
        const technologies = e.target.technologies.value;
        const favFood = e.target.favFood.value;
        const favDrink = e.target.favDrink.value;

        if( !name || !progLanguage || !technologies || !favFood || !favDrink ) return;

        dispatch({
            type: 'ADD_DEVELOPER',
            payload: {
                name,
                progLanguage,
                technologies,
                favFood,
                favDrink,
            }
        });

        e.target.reset();
    }

    const handleDelete = ( id ) => {
        dispatch({
            type: 'REMOVE_DEVELOPER',
            payload: { id }
        });
    }

  return (
    <div className="form">

        <Form onSubmit={ handleSubmit }>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" id="name" placeholder="Write Your Name" required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Programming Language</Form.Label>
                <Form.Select id="progLanguage">
                    {/* <option >Select Language</option> */}
                    <option value="JavaScript" >JavaScript</option>
                    <option value="Python" >Python</option>
                    <option value="Java" >Java</option>
                    <option value="C++" >C++</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Technologies</Form.Label>
                <Form.Select id="technologies">
                    {/* <option >Select Technology</option> */}
                    <option value="React" >React</option>
                    <option value="Node" >Node</option>
                    <option value="Express" >Express</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Favorite Food</Form.Label>
                <Form.Control type="text" id="favFood" placeholder="Write Your Favorite Food" required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Favorite Drink</Form.Label>
                <Form.Control type="text" id="favDrink" placeholder="Write Your Favorite Drink" required/>
            </Form.Group>

            <Button className="addButton" variant="outline-dark" type="submit">Add Developer</Button>

        </Form>

        { developer.length !== 0 ? <DeveloperList  developer={developer} handleDelete={handleDelete}/> : <p className="no-developer">No Developers Available</p> }

    </div>
    );
}

export default DeveloperForm;
