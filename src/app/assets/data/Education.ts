export const EDUCATION: IEducation[] = [
    {
        degree: "Bachelor in Computer Science",
        institution: "University of Sialkot",
        startDate: "2023",
        endDate: "2027",
        score: "3.81/4 CGPA",
    },
    {
        degree: "Intermediate in Pre-Medical",
        institution: "Superior Group of Colleges",
        startDate: "2021",
        endDate: "2023",
        score: "785/1100",
    },
    {
        degree: "Matriculation in Science",
        institution: "Leads Grammar School",
        startDate: "2020",
        endDate: "2021",
        score: "1010/1100",
    },
];

// Corrected interface for Education
export interface IEducation {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    score: string;
}