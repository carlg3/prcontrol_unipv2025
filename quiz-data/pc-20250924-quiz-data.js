/*
// Esempio per risposte con immagini:
{
    id: 100,
    question: "Quale di queste è una mela?",
    type: "single-choice",
    options: [
        { text: "Opzione A", image: "./img/banana.jpg" }, // Immagine aggiunta
        { text: "Opzione B", image: "./img/mela.jpg" },    // Immagine aggiunta
        { text: "Opzione C" }                           // Solo testo
    ],
    correctAnswer: ["Opzione B"],
    points: 1
}
*/

// ESAME 2025-09-24

const quizData = [
            {
                id: 1,
                question: "The pre-filter can be used to:",
                type: "multiple-choice",
                options: [
                    { text: "re-shape the measurement disturbance sensitivity function" },
                    { text: "stabilize the closed loop system in case of small bandwidth" },
                    { text: "stabilize the closed loop system in case of unstable open loop systems" },
                    { text: "improve the accuracy of the closed loop system in presence of a delay" },
                    { text: "none of the replies" },
                    { text: "smooth the abrupt peaks of the reference signal" },
                    { text: "perform static compensation in a non robust way" },
                    { text: "enlarge the closed loop bandwidth of a controlled system a posteriori" },
                    { text: "cancel the non-minimum phase zeroes" },
                    { text: "improve the accuracy of the closed loop system versus measurement disturbance" }
                ],
                correctAnswer: ["enlarge the closed loop bandwidth of a controlled system a posteriori", "smooth the abrupt peaks of the reference signal", "perform static compensation in a non robust way"],
                points: 4
            },
            {
                id: 2,
                question: "Given a transfer function G(s) describing a LTI process, the following claims are correct:",
                type: "multiple-choice",
                options: [
                    { text: "its relative degree is the difference between the number of zeroes and the number of poles" },
                    { text: "its gain is the limit of G(s) for s which tends to zero" },
                    { text: "its order is equal to the number of poles" },
                    { text: "its order is equal to the number of zeroes" },
                    { text: "its gain is the limit of G(s) for s which tends to infinity provided that the system type is zero" },
                    { text: "its order is equal to the number of poles in zero" },
                    { text: "its relative degree is the number of poles in zero" },
                    { text: "its relative degree is the difference between the number of poles and the number of zeroes" },
                    { text: "its gain is the limit of G(s) for s which tends to zero provided that the system type is zero" },
                    { text: "the system is MIMO" }
                ],
                correctAnswer: ["its gain is the limit of G(s) for s which tends to zero provided that the system type is zero", "its relative degree is the difference between the number of poles and the number of zeroes", "its order is equal to the number of poles"],
                points: 4
            },
            {
                id: 3,
                question: "A LTI discrete-time system is asymptotically stable if and only if all its eigenvalues have strictly negative real part.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Falso"],
                points: 1
            },
            {
                id: 4,
                question: "Considering LTI SISO control systems, the closed loop frequency response magnitude must be approximately 1dB in all the frequency range where the reference signal has significant harmonics.",
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
                question: "Given an open loop transfer function having 3 poles and 2 zeros, suppose to draw the overall Root Locus associated with it, under the assumption of unitary feedback and transfer constant k. The Root Locus has 3 asymptotes that form a star of half-lines.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Falso"],
                points: 1
            },
            {
                id: 6,
                question: "Given a MIMO LTI system described by a triangular transfer matrix, assume that it is controlled via a decoupling based control scheme. Then, the decoupler matrix is triangular.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Vero"],
                points: 1
            },
            {
                id: 7,
                question: "Given the process described by the transfer function $G(s) = \\frac{1}{(s+10)(s-20)}$, assuming to control it by means of the control scheme: [...] where the inner controller $R_1(s) = k$ and k is selected using the root locus approach, the following claims are true:",
                type: "multiple-choice",
                image: "./img/PC/20250924/7.png",
                options: [
                    { text: "The number of asymptotes is 2" },
                    { text: "The system can be asymptotically stabilized selecting k > 200" },
                    { text: "The center of the asymptotes is 5" },
                    { text: "None of the replies" },
                    { text: "The number of asymptotes is 4" },
                    { text: "The system can be asymptotically stabilized selecting k < 200" },
                    { text: "The center of the asymptotes is -5" },
                    { text: "The value of k at the limit of stability is 200" }
                ],
                correctAnswer: ["The center of the asymptotes is 5", "The number of asymptotes is 2", "The value of k at the limit of stability is 200"],
                points: 4
            },
            {
                id: 8,
                question: "When a LTI MIMO system with coupling effects is controlled via a decoupling based control scheme the decoupler transfer matrix is not diagonal.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Vero"],
                points: 1
            },
            {
                id: 9,
                question: "Given a LTI system controlled via a control scheme including the Smith Predictor:",
                type: "multiple-choice",
                options: [
                    { text: "The equivalent controller appearing in the second formulation of the scheme seen in the course performs a forbidden cancellation" },
                    { text: "Two equivalent controller appearing in the second formulation of the scheme seen in the course performs a cancellation of the open loop poles" },
                    { text: "None of the replies" },
                    { text: "The equivalent controller appearing in the second formulation of the scheme seen in the course performs a cancellation of the open loop poles" },
                    { text: "The new controlled variable z(t) results in being equal to the actual controlled variable y(t) apart from the sign" },
                    { text: "The new controlled variable z(t) results in being a prediction of the actual control variable u(t)" },
                    { text: "The new controlled variable z(t) results in being a prediction of the actual controlled variable y(t)" },
                    { text: "The equivalent controller appearing in the second formulation of the scheme seen in the course performs a cancellation of the open loop zeroes" },
                    { text: "The controller appearing in the first formulation of the scheme seen in the course contains an exponential term depending on the delay" }
                ],
                correctAnswer: ["The equivalent controller appearing in the second formulation of the scheme seen in the course performs a cancellation of the open loop poles", "The new controlled variable z(t) results in being a prediction of the actual controlled variable y(t)", "The controller appearing in the first formulation of the scheme can be designed relying on G(s) (defined in the course)"],
                points: 4
            },
            {
                id: 10,
                question: "The control scheme in the figure: [...] can be used when:",
                type: "multiple-choice",
                image: "./img/PC/20250924/10.png",
                options: [
                    { text: "none of the replies" },
                    { text: "the system to control is MIMO with a 2 x 2 lower triangular transfer matrix" },
                    { text: "the system to control is MIMO with a 2 x 2 full transfer matrix" },
                    { text: "the system to control is affected by a measurable disturbance" },
                    { text: "the system to control is MIMO with a 3 x 3 triangular transfer matrix" },
                    { text: "the system to control is MIMO with a 2 x 2 upper triangular transfer matrix" },
                    { text: "the system to control is SISO and LTI" }
                ],
                correctAnswer: ["the system to control is MIMO with a 2 x 2 lower triangular transfer matrix"],
                points: 4
            },
            {
                id: 11,
                question: "The system described by the following mathematical expression: $\\frac{e^{(-2s)}}{(s+1)^2}$ is nonlinear",
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
                question: "The process described by the transfer function $G(s) = \\frac{s+10^2}{10s^3(s+10)}$ is nonlinear and has gain equal to 1.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Falso"],
                points: 1
            },
            {
                id: 13,
                question: "Given the control scheme: [...] the following claims are true:",
                type: "multiple-choice",
                image: "./img/PC/20250924/13.png",
                options: [
                    { text: "It is a parallel-compensator-based control scheme." },
                    { text: "It is a PID-based control scheme with anti-wind-up." },
                    { text: "It is a pre-filter-based control scheme." },
                    { text: "It is asymptotically stable." },
                    { text: "None of the replies." },
                    { text: "It has a large closed loop bandwidth." },
                    { text: "It is a LTI control scheme." }
                ],
                correctAnswer: ["It is a LTI control scheme.", "It is a parallel-compensator-based control scheme."],
                points: 4
            },
            {
                id: 14,
                question: "The following picture [...] illustrates the numerical integration method called Euler forward method.",
                type: "single-choice",
                image: "./img/PC/20250924/14.png",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Falso"],
                points: 1
            },
            {
                id: 15,
                question: "A LTI described by a rational transfer function with 3 poles and relative degree 2 has two zeros.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Falso"],
                points: 1
            },
            {
                id: 16,
                question: "The wind-up effect is associated with controllers including an integral action in presence of a saturation on the control variable.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Vero"],
                points: 1
            },
            {
                id: 17,
                question: "The poles of a transfer function are the roots of its denominator.",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Vero"],
                points: 1
            },
            {
                id: 18,
                question: "Given the scheme: [...] the following claim are true:",
                type: "multiple-choice",
                image: "./img/PC/20250924/18.png",
                options: [
                    { text: "The system to be controlled is lower triangular." },
                    { text: "None of the replies." },
                    { text: "The system to be controlled is SISO." },
                    { text: "G_11(s) is MIMO" },
                    { text: "The control scheme is based on the forward decoupling approach." },
                    { text: "The system to be controlled is MIMO" },
                    { text: "The diagonal elements of the decoupler transfer matrix are equal to zero." },
                    { text: "The control scheme is based on the backward decoupling approach." },
                    { text: "L is the decoupler" }
                ],
                correctAnswer: ["The system to be controlled is MIMO", "The control scheme is based on the forward decoupling approach."],
                points: 4
            },
            {
                id: 19,
                question: "In a decentralized control scheme:",
                type: "multiple-choice",
                options: [
                    { text: "Any component of the controlled variable vector depends on a single component of the control vector" },
                    { text: "The system to control must be SISO" },
                    { text: "Any component of the controlled variable vector depends on a single component of the error vector" },
                    { text: "Any component of the control vector depends on a single component of a disturbance acting on the control vector" },
                    { text: "Any component of the control vector depends on a single component of the error vector" },
                    { text: "Any component of the error vector depends on a single component of the decoupler output vector" },
                    { text: "None of the replies" }
                ],
                correctAnswer: ["Any component of the control vector depends on a single component of the error vector"],
                points: 4
            },
            {
                id: 20,
                question: "To reject a measurable process disturbance, in case of LTI systems, the only possibility is to use a compensator $M(s) = -\\frac{H(s)}{G(s)}$ (H and G defined in the course).",
                type: "single-choice",
                options: [
                    { text: "Vero" },
                    { text: "Falso" }
                ],
                correctAnswer: ["Falso"],
                points: 1
            }
		]