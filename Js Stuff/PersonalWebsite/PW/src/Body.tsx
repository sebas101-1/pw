import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from 'react';
import './Side.css'

function Bold(props: any)
    
{
    return(
        <span className='Bold'>{props.children}</span>
    );
}
export default function Body(){



    return(
        <>
        <br/>
            <p className="Body">
            I am a amateur computer scientist with proficiency in <Bold>TypeScript, </Bold> <Bold>JavaScript, </Bold> <Bold>Python </Bold> and  <Bold>Java, </Bold> I am eager to apply my skills and knowledge to real-world projects. 
            My experience with front-end development using HTML, CSS and JavaScript frameworks, as well as my familiarity with JS libraries such as React and hopefully Tailwind, 
            make me a valuable asset to any development team. I am constantly seeking new challenges and opportunities to grow and improve as a developer.
            </p>
        </>
    )
}
