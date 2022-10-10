import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DeveloperList( {developer, handleDelete} ) {
  return (
    <div className="cardList">

        {developer.map((developer) => (
            
            <Card className="card" key={developer.id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{ developer.name }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ developer.progLanguage }</Card.Subtitle>
                    <Card.Text>
                        { developer.technologies }
                    </Card.Text>
                    <Card.Text>
                        { developer.favFood }
                    </Card.Text>
                    <Card.Text>
                        { developer.favDrink }
                    </Card.Text>
                    <Button variant="danger" onClick={ () => handleDelete( developer.id ) }>Delete</Button>    
                </Card.Body>
            </Card>
        )
        )}
        
    </div>
    );

}

export default DeveloperList;
