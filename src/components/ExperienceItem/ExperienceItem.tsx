import React from 'react';

import './ExperienceItem.scss';

const experienceItem = (props: any) => {
    return (
        <div className="ExperienceItem">
            <div className="Heading">{ props.experience.company }</div>
            <div className="Dates">{ props.experience.startDate } - { props.experience.endDate }</div>
            <div className="Role">{ props.experience.role }</div>
            <div className="Description">{ props.experience.description }</div>
        </div>
    );
}

export default experienceItem;