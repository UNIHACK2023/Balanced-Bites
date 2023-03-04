import React from 'react';

interface customiseModal {
    title: string;
    description: string;
}

const InfoModal = (props: customiseModal) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    );
};

export default InfoModal;
