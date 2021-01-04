import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(props){
    let value = useContext(ValueContext);
    return(
        <div>
            Child Number {value + 4}
        </div>
    );
}
export default Child;