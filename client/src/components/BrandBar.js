import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Form className='d-flex '>
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className='p-2'
                    onClick = {() => device.setSelectedBrand(brand)}
                    style={{cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'grey' : 'light'}
                >
                    {brand.name}
                </Card>
                )}
        </Form>
    );
});

export default BrandBar;