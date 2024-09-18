/* eslint-disable react/no-unescaped-entities */
import * as React from 'react'

const Hero: React.FC = () => {
    return (
        <div>
            <article className='text-secondary'>
                <span className='text-base font-poppins font-light'>WELCOME TO MY WORLD!</span>
                <h1>I'M SHAWAIZ KHAN</h1>
                <h3>a FRONT-END DEVELOPER</h3>
                <p>I design and build websites that look great and work
                    smoothly. I focus on making things simple and easy
                    to use, ensuring every detail serves a purpose and
                    enhances the user experience.</p>
            </article>
        </div>
    );
}

export default Hero;