import React from 'react'


function About({ img = 'https://via.placeholder.com/215', about }) {



    return (
        <aside>
            <img src={img} alt='blog logo' />
            <p>{about}</p>
        </aside>
    )
}

export default About