import * as React from 'react'

interface DetailBarProps {
    text: string[];
    number: number[];
}

const DetailBar: React.FC<DetailBarProps> = ({ text, number }) => {
    return (
        <article className='h-24 bg-secondary'>
            <h1>{number}<span>{text}</span></h1>
        </article>
    );
}

export default DetailBar;