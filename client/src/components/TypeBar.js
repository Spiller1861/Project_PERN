import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
    <ListGroup>
            <ListGroup.Item 
            style={{cursor: 'pointer'}}
            onClick = {() => device.setSelectedNull([],[])}
            >
                Обнулить
            </ListGroup.Item>
        {device.types.map(type =>
            <ListGroup.Item 
                key={type.id}
                onClick = {() => device.setSelectedType(type)}
                style={{cursor: 'pointer'}}
                active={type.id === device.selectedType.id}
                >
                {type.name}
            </ListGroup.Item>
            )}
    </ListGroup>
    );
});

export default TypeBar;