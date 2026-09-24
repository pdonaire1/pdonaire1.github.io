import React from 'react';
import Porject from './Project';

const Challenge = (props) => {
    const { data } = props;
    switch (data.type) {
        case "percentage":
            var className = 'bar-expand ' + data.name.toLowerCase();
            return (<li key={data.name}>
                <span style={{width:data.level}} className={className}></span>
                <em><a href={data.link} target="_blank">{data.name}</a></em>
            </li>);
        case "project":
            return (
                    <Porject data={data} challenge={true}/>
                );
        
        default:
            return <span></span>;
    }
}

export default Challenge;
