import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import  { buyCake } from '../Redux'

function HookCakeContainer() {
    const noOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch()
    return (
        <div>
            <h4>No of Cakes {noOfCakes}</h4>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer;
