import React from 'react';

import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import { WORKEXPERIENCE } from '../../resources/ExperienceData';



const experience = () => {
    const exp = WORKEXPERIENCE.map((item) => <ExperienceItem key={item.id} experience={item} />);
    return (
        <div className="Experience">
            { exp }
        </div>
    );
}

export default experience;