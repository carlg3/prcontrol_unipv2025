/*
HOMEWORK 2, args:
	- control of open loop unstable systems
	- control of MIMO systems
	- PIDs
*/

const quizData = [
    {
        id: 1,
        question: "According to the definition recalled in the course, the root locus is:",
        type: "single-choice",
        options: [
            { text: "the plot in the complex plane of the closed loop poles of a unitary feedback control system as a function of the type k" },
            { text: "the plot in the complex plane of the closed loop poles of a unitary feedback control system starting from the open loop zeros" },
            { text: "the plot in the complex plane of the open loop poles of a unitary feedback control system starting from the origin" },
            { text: "none of the replies" },
            { text: "the plot in the complex plane of the open loop poles and zeroes of a unitary feedback control system as a function of the transfer constant k" },
            { text: "the plot in the complex plane of the closed loop zeroes of a unitary feedback control system as a function of the asymptotes" },
            { text: "the plot in the complex plane of the closed loop poles of a unitary feedback control system as a function of the transfer constant k" }
        ],
        correctAnswer: ["the plot in the complex plane of the closed loop poles of a unitary feedback control system as a function of the transfer constant k"],
        points: 1
    },
    {
        id: 2,
        question: "To control an open loop LTI unstable system it is advisable to use a scheme with an inner controller, aimed at asymptotically stabilizing the inner feedback loop, and an outer controller aimed at asymptotically stabilizing the outer feedback loop while complying with the design requirements",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 3,
        question: "Given a 2x2 MIMO LTI system controlled via a decoupling based control scheme, and the following matrix: [1, 0; G21(s)/G22(s), 1]. The matrix is:",
        type: "single-choice",
        options: [
            { text: "none of the replies" },
            { text: "the decoupler transfer matrix provided that the system transfer matrix is lower triangular" },
            { text: "the product between the controller transfer matrix and the decoupler transfer matrix" },
            { text: "the controller transfer matrix provided that the system transfer matrix is lower triangular" },
            { text: "the decoupler transfer matrix provided that the system transfer matrix is a full matrix" },
            { text: "the decoupler transfer matrix provided that the system transfer matrix is upper triangular" },
            { text: "the controller transfer matrix provided that the system transfer matrix is asymptotically stable" }
        ],
        correctAnswer: ["the decoupler transfer matrix provided that the system transfer matrix is lower triangular"],
        points: 1
    },
    {
        id: 4,
        question: "In the Relative Gain Array, the sum of all the elements on a row or a column is always positive and greater than 1",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 5,
        question: "In a decentralized control scheme:",
        type: "multiple-choice",
        options: [
            { text: "Any component of the controlled variable vector depends on a single component of the control vector" },
            { text: "The system to control must be SISO" },
            { text: "Any component of the control vector depends on a single component of a disturbance acting on the control vector" },
            { text: "Any component of the error vector depends on a single component of the decoupler output vector" },
            { text: "Any component of the control vector depends on a single component of the error vector" },
            { text: "None of the replies" },
            { text: "Any component of the controlled variable vector depends on a single component of the error vector" }
        ],
        correctAnswer: ["Any component of the control vector depends on a single component of the error vector"],
        points: 4
    },
    {
        id: 6,
        question: "Given the following MIMO control scheme [Image]. it is correct to claim that it implements a forward decoupling based control provided that the elements of the decoupler transfer matrix present in the scheme, i.e., Δ_12(s) and Δ_21(s), are chosen equal to 1.",
        type: "single-choice",
        image: "./img/PC/HW2/6.jpg",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 7,
        question: "The following picture [Root Locus] represents the Root Locus of an open loop unstable LTI system which cannot be stabilized whatever the choice of k is.",
        type: "single-choice",
        image: "./img/PC/HW2/7.jpg",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 8,
        question: "Given the MIMO LTI system described by the transfer matrix G(s) = [ 3/(s+1), -1/(1+0.2s); 4/(s+4), 6/(s+2) ]. the element (1,1) of the Relative Gain Array is:",
        type: "single-choice",
        options: [
            { text: "-0.8" },
            { text: "0.9" },
            { text: "0" },
            { text: "-2" },
            { text: "0.1" },
            { text: "0.5" },
            { text: "1" },
            { text: "None of the replies" },
            { text: "0.8" }
        ],
        correctAnswer: ["0.9"],
        points: 1
    },
    {
        id: 9,
        question: "The block scheme in the following figure [Image] is a PID controller with anti-wind up scheme",
        type: "single-choice",
        image: "./img/PC/HW2/9.jpg",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 10,
        question: "The following matrix: [1, -G11(s)/G12(s); G22(s)/G21(s), 1] is the transfer matrix of the decoupler in a forward decoupling based control scheme when the system transfer matrix G(s) is 2x2",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 11,
        question: "The wind-up effect is associated with controllers including an integral action in presence of a saturation on the controlled variable.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 12,
        question: "Given the controller R_PID(s) = 10^2 ( 1 + 10/s + 0.1s ) and assuming N = 10^2, making reference to the notation introduced in the course, then, the pole added to obtain the causal version of the controller is in:",
        type: "single-choice",
        options: [
            { text: "s = -10" },
            { text: "s = 10^-3" },
            { text: "s = 10^3" },
            { text: "s = -10^3" },
            { text: "s = -10^-3" },
            { text: "s = 0.1" },
            { text: "s = -1" },
            { text: "s = -0.1" },
            { text: "None of the replies" }
        ],
        correctAnswer: ["s = -10^3"],
        points: 1
    }
];