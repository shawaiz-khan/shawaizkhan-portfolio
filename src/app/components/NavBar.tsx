import * as React from 'react'

const NavBar: React.FC = () => {
    return (
        <header>
            <nav className='bg-secondary h-20 flex justify-between items-center px-6'>
                <div className="logo flex items-center gap-1 font-semibold text-3xl text-primary">
                    <span className='text-highlight font-fira'>&lt;</span>
                    <h1 className="font-fira">SK</h1>
                    <span className='text-highlight font-fira'>/&gt;</span>
                </div>
                <ul className='font-poppins font-semibold flex text-xl gap-7 text-primary'>
                    <li className='relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>HOME</li>
                    <li className='relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>ABOUT</li>
                    <li className='relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>EDUCATION</li>
                    <li className='relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>SKILLS</li>
                    <li className='relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>PROJECTS</li>
                    <li className='relative hover:text-highlight transition-all duration-200 ease-in before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-highlight before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-200'>CONTACT</li>
                </ul>
                <button className='bg-highlight w-48 h-9 rounded-md text-secondary font-poppins font-semibold hover:bg-primary transition-colors duration-200 ease-in text-lg'>BOOK A MEETING</button>
            </nav>
        </header>
    );
}

export default NavBar;