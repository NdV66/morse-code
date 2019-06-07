import React from 'react';

export default (Component) => {
    return (props) => <div className={`${props.className || ''} bigger-icon text-center`}>
        <Component {...props} />
    </div>;
};
