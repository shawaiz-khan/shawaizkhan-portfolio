import * as React from 'react'
import { BsInstagram } from 'react-icons/bs';

const Footer: React.FC = () => {
    const year = new Date().getFullYear().toString();
    return (
        <footer>
            <div className='cursor-pointer bg-secondary h-24 flex items-center justify-between p-6'>
                <div className="flex items-center gap-1 font-semibold text-3xl text-primary">
                    <span className='text-highlight font-fira'>&lt;</span>
                    <h1 className="font-fira">SK</h1>
                    <span className='text-highlight font-fira'>/&gt;</span>
                </div>
                <div className='flex gap-4'>
                    <BsInstagram size={30} />
                    <BsInstagram size={30} />
                    <BsInstagram size={30} />
                    <BsInstagram size={30} />
                    <BsInstagram size={30} />
                    <BsInstagram size={30} />
                </div>
            </div>
            <article className='p-5 bg-primary text-secondary font-poppins font-normal text-xl flex justify-center'>
                &copy; {year}&nbsp;<span className='text-highlight cursor-pointer font-medium'>Shawaiz Khan</span>. All rights reserved.
            </article>
        </footer>
    );
}

export default Footer;