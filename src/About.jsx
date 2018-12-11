import React from "react"
import { UndrawWorking } from 'react-undraw-illustrations';

const About = () => (
    <div>
        <h1>About Me</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>

        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawWorking primaryColor='black' height='200px' />
                </div>
            </div>
        </div>
    </div>
);

export default About