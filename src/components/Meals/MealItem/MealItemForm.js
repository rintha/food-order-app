import React, { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartCntx from '../../../store/cart-context';

const MealItemForm = (props) => {
    const cartcntx = useContext(CartCntx);
    console.log('reinitialised cartcntx', cartcntx)
    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById('amount_' + props.id).value;
        cartcntx.addItem({...props.item, quantity:quantity})
        console.log('after addItemToCart', cartcntx);
    };
    return (
        <form className={classes.form}>
            {console.log('inside render', cartcntx.items)}
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button onClick={addItemToCart}>+ Add</button>
        </form>
    );
};

export default MealItemForm;