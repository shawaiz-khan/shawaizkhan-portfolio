import { StaticImageData } from "next/image";
import TestimonialImg01 from '../images/testimonialIcon-01.jpg';

export interface Testimonial {
    img: StaticImageData;
    quote: string;
    name: string;
}

const testimonials: Testimonial[] = [
    {
        img: TestimonialImg01,
        quote: "Efficient communication is their top priority, ensuring you receive revisions that meet your needs. You can expect a seamless experience throughout the process.",
        name: 'Geenenict',
    },
    {
        img: TestimonialImg01,
        quote: "Good communication I found exactly what I was looking for. It works very well and has provided me with more examples than I had.",
        name: 'Mundosupay',
    },
    {
        img: TestimonialImg01,
        quote: "Well done thanks",
        name: 'Mh. Tech',
    },
    {
        img: TestimonialImg01,
        quote: "I'm extremely impressed with how quickly and efficiently they worked, while also being incredibly friendly and easy to communicate with. Thanks for your help, buddy!",
        name: 'Johnson Tangelo',
    },
    {
        img: TestimonialImg01,
        quote: "He pretty much went straight to it and made my logo a legendary work! It will be on display in the future and will recommend anyone interested in high quality work!",
        name: 'Zawyehtike',
    },
    {
        img: TestimonialImg01,
        quote: "Great response time, super helpful, and perfect fit for our app icon needs. Highly recommended to anyone looking for professional graphic and web design services.",
        name: 'Klayden',
    },
    {
        img: TestimonialImg01,
        quote: "Absolut top ein überragender Kooperationspartner kann ich weiterempfehlen 👍",
        name: 'Dicker0202',
    },
    {
        img: TestimonialImg01,
        quote: "Amazing literally made it in a couple of hours",
        name: 'Darkhuh',
    },
];

export default testimonials;