import React from 'react'

const Childcomponent = props => {
    console.log(props);
    return (
        <div>
            <h1>Iam {props.username}</h1>
        </div>
    );
}

export default Childcomponent
