export const EXPERIENCE: IExperience[] = [
    {
        role: "Freelance Web Developer & Designer",
        company: "Self-employed",
        duration: "Feb 2019 - Present",
        responsibilities: [
            "Developed 20+ custom websites for various clients",
            "Managed full lifecycle from design to deployment",
            "Ensured high client satisfaction by delivering tailored web and graphic solutions",
        ],
    },
    {
        role: "Manager & CEO",
        company: "Infinity Shadow",
        duration: "Feb 2021 - Sep 2024",
        responsibilities: [
            "Led a web development and design agency",
            "Oversaw operations, client interactions, and mentoring interns",
            "Delivered tailored web solutions to clients globally",
        ],
    },
    {
        role: "Frontend Web Developer",
        company: "MAZIV Technologies",
        duration: "Jun 2024 - Sep 2024",
        responsibilities: [
            "Contributed to improving web applications by fixing bugs",
            "Added new features, working closely with developers and designers",
        ],
    },
];

// Interface for Experience
export interface IExperience {
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
}