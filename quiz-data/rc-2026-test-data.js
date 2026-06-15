// TEST per risposte con immagini multiple

const quizData = [
{
    id: 12,
    question: "Given the robot manipulators in the pictures, select those having (starting from the base) 2 Revolute Joints and 1 Prismatic Joint.",
    type: "multiple-choice",
    image: "", // La domanda non ha un'immagine principale, le immagini sono nelle risposte
    options: [
        {
            text: "",
            image: "./img/RC/2026/12_a.png" // Robot antropomorfo (sbagliato)
        },
        {
            text: "None of the replies.",
            image: ""
        },
        {
            text: "",
            image: "./img/RC/2026/12_c.png" // Robot cartesiano/gantry (sbagliato)
        },
        {
            text: "",
            image: "./img/RC/2026/12_d.png" // Attuatore lineare (sbagliato)
        },
        {
            text: "",
            image: "./img/RC/2026/12_e.png" // Robot cilindrico (sbagliato)
        },
        {
            text: "",
            image: "./img/RC/2026/12_f.png" // Robot SCARA (CORRETTO: R-R-P)
        },
        {
            text: "",
            image: "./img/RC/2026/12_g.png" // Robot antropomorfo bianco (sbagliato)
        },
        {
            text: "",
            image: "./img/RC/2026/12_h.png" // Robot SCARA bianco (CORRETTO: R-R-P)
        }
    ],
    correctAnswer: [
        "./img/RC/2026/12_f.png",
        "./img/RC/2026/12_h.png"
    ],
    points: 4
}
];