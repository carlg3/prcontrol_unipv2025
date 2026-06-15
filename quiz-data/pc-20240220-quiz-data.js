// ESAME 2024-02-20

const quizData = [
    {
        id: 1,
        question: "The wind-up effect is associated with controllers including an integral action in presence of a saturation on the control variable.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 2,
        question: "Given the following picture [...] select the correct claims:",
        type: "multiple-choice",
        image: "./img/PC/20240220/2.png",
        options: [
            { text: "It represents the signal produced at the output of the digital controller" },
            { text: "The controller is of the 5th order" },
            { text: "The represented signal is constant" },
            { text: "The controller is of the 3th order" },
            { text: "None of the replies" },
            { text: "It represents the signal produced at the output of a ZOH block" },
            { text: "It represents the signal produced at the output of the A/D converter" },
            { text: "The represented signal is piece-wise constant" }
        ],
        correctAnswer: ["It represents the signal produced at the output of a ZOH block", "The represented signal is piece-wise constant"],
        points: 4
    },
    {
        id: 3,
        question: "When a LTI system with delay is controlled via a control scheme including the Smith Predictor, it is advisable that the closed loop bandwidth is sufficiently large to compensate for possible uncertainty in the delay value.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 4,
        question: "Given a MIMO LTI system described by a triangular transfer matrix, assume that it is controlled via a decoupling based control scheme. Then, the decoupler matrix is diagonal.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 5,
        question: "Given the following control scheme [...] It is correct to claim that: Y(s) = (R(s)G(s) + C(s)G(s)) / (1 + R(s)G(s)) * W(s) where Y(s) and W(s) are the Laplace transforms of the controlled variable and of the reference signal, respectively.",
        type: "single-choice",
        image: "./img/PC/20240220/5.png",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 6,
        question: "The controller described by the following transfer function R(s) = (0.2(s+1)) / s is:",
        type: "single-choice",
        options: [
            { text: "A static controller" },
            { text: "A PI controller" },
            { text: "A PD controller" },
            { text: "None of the replies" },
            { text: "A nonminimum phase controller" },
            { text: "A proportional controller" },
            { text: "A PID controller" }
        ],
        correctAnswer: ["A PI controller"],
        points: 1
    },
    {
        id: 7,
        question: "The following control scheme [...] is an alternative representation of the Smith predictor-based control scheme.",
        type: "single-choice",
        image: "./img/PC/20240220/7.png",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 8,
        question: "Given the MIMO process described by the following transfer matrix G(s) = [ 2/(1+s), 1/(1+5s); -1/(1+0.5s), 2/(1+2s) ] the value of element λ_22 of the corresponding Relative Gain Array Λ is equal to 0.8.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 9,
        question: "The scheme in the picture: [...] represents the control scheme to be used when the open loop system is unstable.",
        type: "single-choice",
        image: "./img/PC/20240220/9.png",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 10,
        question: "Given the open loop transfer function L(s) = k / (s^2(s^2+2s+1)(s+4)) the center of the asymptotes of its root locus is located at (2,0).",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 11,
        question: "The following picture [...] illustrates the numerical integration method called Euler forward method.",
        type: "single-choice",
        image: "./img/PC/20240220/11.png",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 12,
        question: "Given the scheme: [...] the following claim are true:",
        type: "multiple-choice",
        image: "./img/PC/20240220/12.png",
        options: [
            { text: "The diagonal elements of the decoupler transfer matrix are equal to zero." },
            { text: "G_11(s) is MIMO" },
            { text: "The control scheme is based on the backward decoupling approach." },
            { text: "The control scheme is based on the forward decoupling approach." },
            { text: "None of the replies." },
            { text: "The system to be controlled is lower triangular." },
            { text: "Δ_12 is the decoupler" },
            { text: "The system to be controlled is SISO" },
            { text: "The system to be controlled is MIMO" }
        ],
        correctAnswer: ["The control scheme is based on the forward decoupling approach.", "The system to be controlled is MIMO"],
        points: 4
    },
    {
        id: 13,
        question: "Given the control scheme: [...] the following claims are true:",
        type: "multiple-choice",
        image: "./img/PC/20240220/13.png",
        options: [
            { text: "It is a parallel-compensator-based control scheme." },
            { text: "None of the replies" },
            { text: "It is a pre-filter-based control scheme." },
            { text: "It is asymptotically stable." },
            { text: "It has a large closed loop bandwidth." },
            { text: "It is a PID-based control scheme with anti-wind-up." },
            { text: "It is a LTI control scheme." }
        ],
        correctAnswer: ["It is a parallel-compensator-based control scheme.", "It is a LTI control scheme."],
        points: 4
    },
    {
        id: 14,
        question: "In a decentralized control scheme:",
        type: "multiple-choice",
        options: [
            { text: "Any component of the control vector depends on a single component of a disturbance acting on the control vector" },
            { text: "Any component of the error vector depends on a single component of the decoupler output vector" },
            { text: "Any component of the controlled variable vector depends on a single component of the error vector" },
            { text: "Any component of the control vector depends on a single component of the error vector" },
            { text: "The system to control must be SISO" },
            { text: "None of the replies" },
            { text: "Any component of the controlled variable vector depends on a single component of the control vector" }
        ],
        correctAnswer: ["Any component of the control vector depends on a single component of the error vector"],
        points: 4
    },
    {
        id: 15,
        question: "Given the control scheme [...] the following claims are true:",
        type: "multiple-choice",
        image: "./img/PC/20240220/15.png",
        options: [
            { text: "If d is a sinusoidal signal of pulsation ω*, it will be sufficient to use a compensator M(s) such that M(jω*) = -H(jω*)G(jω*)^-1" },
            { text: "This scheme is used when d is a measurable disturbance." },
            { text: "H(s) is a pre-filter." },
            { text: "This scheme is used when d is an unmeasurable disturbance." },
            { text: "If d is a sinusoidal signal of pulsation ω*, it will be sufficient to use a compensator M(s) such that M(jω*) = -G(jω*)H(jω*)^-1" },
            { text: "None of the replies." },
            { text: "If d is a sinusoidal signal of pulsation ω*, it will be sufficient to use a compensator M(s) such that M(jω*) = -G(jω*)H(jω*)^-1" },
            { text: "If d is a sinusoidal signal of pulsation ω*, it will be sufficient to use a compensator M(s) such that M(jω*) = -H(jω*)G(jω*)^-1" },
            { text: "M(s) is a pre-filter." }
        ],
        correctAnswer: ["This scheme is used when d is a measurable disturbance.", "If d is a sinusoidal signal of pulsation ω*, it will be sufficient to use a compensator M(s) such that M(jω*) = -H(jω*)G(jω*)^-1"],
        points: 4
    },
    {
        id: 16,
        question: "Considering LTI SISO control systems, the closed loop frequency response magnitude must be approximately 1 in all the frequency range where the reference signal has significant harmonics.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 17,
        question: "Given a continuous time closed loop system with a bandwidth of 10 rad/s, a sampling time of 0.3s is correct according to the sampling theory.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 18,
        question: "Given the transfer function G_p(s) = (1 - 0.5τs) / (1 + 0.5τs) the following claims are true:",
        type: "multiple-choice",
        options: [
            { text: "Its phase is decreasing as ω decreases" },
            { text: "It is the first order Padé approximation of the delay term e^(-τs)" },
            { text: "None of the replies" },
            { text: "Its phase is increasing as ω increases" },
            { text: "It introduces a pure phase shift since its frequency response has zero magnitude at any ω > 0" },
            { text: "It is nonlinear" },
            { text: "It is the first order Padé approximation of the delay term e^(τs)" },
            { text: "Its phase is decreasing as ω increases" },
            { text: "It introduces a pure phase shift since its frequency response has unitary magnitude at any ω > 0" },
            { text: "It is unstable" }
        ],
        correctAnswer: ["It is the first order Padé approximation of the delay term e^(-τs)", "Its phase is decreasing as ω increases", "It introduces a pure phase shift since its frequency response has unitary magnitude at any ω > 0"],
        points: 4
    },
    {
        id: 19,
        question: "Given the controller transfer function: R(s) = (s+1) / (s+10) one obtains the following discretized version: R(z) = ( (2/3)z - (1/3) ) / ( z - (1/3) ) provided that the Euler Backward method is adopted with a sampling time of 2 [s].",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 20,
        question: "The following formula: F*(e^(jωT)) = (1/T) * F_s(jω) with F_s(jω) = Σ[k=-∞ to +∞] F(j(ω + kω_s)), ω_s = 2π/T describes the discrete Fourier Transform and ω_s is the sampling time.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    }
]