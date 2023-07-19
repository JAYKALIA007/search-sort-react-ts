import React from 'react';
import { personModel } from '../utils/model';

interface Props{
    person : personModel
}

export const PersonCard : React.FC<Props> = ({person}) => {
    return (
        <div>
            <span>{person.name.first} {person.name.last}</span>
        </div>
    );
}