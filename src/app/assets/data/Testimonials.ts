import { StaticImageData } from "next/image";
import TestimonialImg01 from '../images/testimonialIcon-01.jpg';

export interface Testimonial {
    img: StaticImageData;
    quote: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: 'Jessie J',
        role: 'Acme LTD',
    },
    {
        img: TestimonialImg01,
        quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: 'Nick V',
        role: 'Malika Inc.',
    },
    {
        img: TestimonialImg01,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Amelia W',
        role: 'Panda AI',
    },
    {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: 'Jessie J',
        role: 'Acme LTD',
    },
    {
        img: TestimonialImg01,
        quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: 'Nick V',
        role: 'Malika Inc.',
    },
    {
        img: TestimonialImg01,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Amelia W',
        role: 'Panda AI',
    },
    {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: 'Jessie J',
        role: 'Acme LTD',
    },
    {
        img: TestimonialImg01,
        quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: 'Nick V',
        role: 'Malika Inc.',
    },
    {
        img: TestimonialImg01,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Amelia W',
        role: 'Panda AI',
    },
];

export default testimonials;