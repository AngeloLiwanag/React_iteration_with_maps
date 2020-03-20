import React from 'react';
 
export default ({ items }) => (
    <ul>
        {items.map((item, i) => (
            <li key={i}>
                {item}
            </li>
            )
        )}
    </ul>
)
