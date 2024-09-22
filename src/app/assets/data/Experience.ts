export const EXPERIENCE: IExperience[] = [
    // {
    //     role: "Freelance Web Developer",
    //     company: "Upwork & Fiverr",
    //     startDate: "Feb 2022",
    //     endDate: "Present",
    //     responsibilities: [
    //         "Built over 20 custom websites for different clients",
    //         "Handled everything from design to launch",
    //         "Ensured high client satisfaction through tailored solutions",
    //         "Managed client communication throughout the project lifecycle",
    //     ],
    // },
    {
        role: "Frontend Web Developer Intern",
        company: "MAZIV Technologies",
        startDate: "Jun 2024",
        endDate: "Sep 2024",
        responsibilities: [
            "Helped improve web applications by fixing issues",
            "Worked with developers and designers to add new features",
            "Participated in code reviews to ensure quality",
            "Learned and applied best practices in frontend development",
        ],
    },
    {
        role: "UI UX Intern",
        company: "If You Know (IfYK)",
        startDate: "March 2024",
        endDate: "April 2024",
        responsibilities: [
            "Helped design and build easy-to-use interfaces for websites",
            "Did user research and testing to get feedback for improvements",
            "Worked with the design team to create wireframes and prototypes",
            "Joined team meetings to talk about project progress and solutions",
        ],
    },
];

export interface IExperience {
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}