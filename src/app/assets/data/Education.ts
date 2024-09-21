export const EDUCATION: IEducation[] = [
    {
        degree: "Bachelor in Computer Science",
        institution: "University of Sialkot",
        startDate: "2023",
        endDate: "2027",
        details: 'Currently studying Computer Science at the University of Sialkot, I am developing skills in programming and web development, laying a strong foundation for my career ahead.',
    },
    {
        degree: "Intermediate in Pre-Medical",
        institution: "Superior Group of Colleges",
        startDate: "2021",
        endDate: "2023",
        details: 'Completed my Intermediate studies in Pre-Medical at Superior Group of Colleges, gaining essential knowledge in basic sciences and preparing for further education.',
    },
    {
        degree: "Matriculation in Science",
        institution: "Leads Grammar School",
        startDate: "2020",
        endDate: "2021",
        details: 'Finished Matriculation in Science at Leads Grammar School, establishing a solid grounding in core scientific subjects for my future academic pursuits.',
    },
];

export interface IEducation {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    details: string;
}
