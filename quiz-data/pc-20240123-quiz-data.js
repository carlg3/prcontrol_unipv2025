// ESAME 2024-01-23

const quizData = [
    {
        id: 1,
        question: "The following picture [...] illustrates the numerical integration method called Euler Backward method.",
        type: "single-choice",
        image: "./img/PC/20240123/1.jpg",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 2,
        question: "Let f(t) be a limited-band signal with maximum bandwidth ωMax and let fs be the adopted sampling frequency. If ωs = (2/3)ωMax, then signal f(t) can be reconstructed exactly starting from the samples.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 3,
        question: "Given the scheme: [...] with G_D(s) ≠ 0, the following claims are true:",
        type: "multiple-choice",
        image: "./img/PC/20240123/3.jpg",
        options: [
            { text: "None of the replies." },
            { text: "The decoupler transfer matrix is the 2 x 2 identity matrix." },
            { text: "The transfer functions G_ij(s) may be unstable." },
            { text: "The transfer functions G_ij(s) are asymptotically stable." },
            { text: "The transfer functions G_ij(s) may be not rational." },
            { text: "The decoupler transfer matrix is a 2 x 2 diagonal matrix." },
            { text: "The transfer functions G_ij(s) are stable." },
            { text: "The decoupler transfer matrix is a 2 x 2 non diagonal matrix." }
        ],
        correctAnswer: ["The transfer functions G_ij(s) are asymptotically stable.", "The decoupler transfer matrix is a 2 x 2 non diagonal matrix."],
        points: 4
    },
    {
        id: 4,
        question: "When a LTI system with delay is controlled via a control scheme including the Smith Predictor, it is advisable that the closed loop bandwidth is sufficiently large to compensate for possible uncertainty in the delay value.",
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
        question: "In a feedback control scheme, the use of a pre-filter which is a pure gain different from 1 is never admissible because the pre-filter static gain must be equal to 1.",
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
        question: "Given two systems described by the transfer functions G(s) = 10 / (s^2(s+10)^2) and G(s) = (s+1) / (s(s+10)(s+100)) it is correct to claim that the parallel connection of them is described by a transfer function with relative degree 1, type 2 and gain equal to 10^-2.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 7,
        question: "The Ziegler-Nichols rules illustrated in the course are:",
        type: "multiple-choice",
        options: [
            { text: "Rules to select the sampling time in a digital PID controller" },
            { text: "Rules to calibrate the parameters of a PID controller" },
            { text: "A closed loop tuning method for PID controllers" },
            { text: "Rules to be used to make the ideal PID controller become causal" },
            { text: "Rules to select the closed loop bandwidth when designing a PID controller" },
            { text: "None of the replies" },
            { text: "Rules to decide whether to use a P, a PI or a PID controller" },
            { text: "Rules to eliminate the wind-up effect" }
        ],
        correctAnswer: ["Rules to calibrate the parameters of a PID controller", "A closed loop tuning method for PID controllers"],
        points: 2
    },
    {
        id: 8,
        question: "Given a MIMO LTI system described by a triangular transfer matrix, assume that it is controlled via a decoupling based control scheme. Then, the decoupler matrix is diagonal.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 9,
        question: "Given an open loop LTI system such that in the Bode Plot the critical pulse ωc is equal to 100 [rad/s], assume that the sampling pulse ωs has been selected equal to 400 [rad/s]. Then, it is correct to claim that the the presence of the ZOH produces a phase shift that, at ωc is -45°.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 2
    },
    {
        id: 10,
        question: "Considering LTI SISO control systems, the closed loop frequency response magnitude must be approximately 1 in all the frequency range where the reference signal has significant harmonics.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 11,
        question: "Given an open loop system with transfer function L(s) = 10k / (s^2 + 12s + 20)(s + p) the associated root locus has the center of the asymptotes in (-3, 0) provided that:",
        type: "single-choice",
        options: [
            { text: "None of the replies." },
            { text: "p = 1" },
            { text: "p = 3" },
            { text: "p = 9" },
            { text: "p = -3" },
            { text: "p = 0" },
            { text: "p = -1" },
            { text: "p = -9" }
        ],
        correctAnswer: ["p = -3"],
        points: 2
    },
    {
        id: 12,
        question: "The following control scheme [...] is an alternative representation of the Smith Predictor-based control scheme useful to show that the equivalent controller R(s) performs a cancellation of the open loop zeros of G(s).",
        type: "single-choice",
        image: "./img/PC/20240123/12.jpg",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 13,
        question: "To control an open loop LTI unstable system it is advisable to use a scheme with an inner controller only aimed at complying with the design requirements, and an outer controller only aimed at asymptotically stabilizing the overall control scheme.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 14,
        question: "Given the following control scheme [...] With G(s) = 10 / (s+20), R(s) = 10/s, C(s) = 20, it is correct to claim that Y(s) = (200(s+0.5)) / (s^2 + 20s + 100) * W(s) where Y(s) and W(s) are the Laplace transforms of the controlled variable and of the reference signal, respectively.",
        type: "single-choice",
        image: "./img/PC/20240123/14.jpg",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 2
    },
    {
        id: 15,
        question: "Assume that the overall closed-loop bandwidth of a controlled MIMO system is 10^3 [rad/s]. Then, given a component Δ_ij(s) of the adopted decoupler matrix characterized by relative degree equal to -2, it is correct to modify that component by adding the following poles λ_1 = -10, λ_2 = -2000.",
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
        question: "Given the continuous-time controller transfer function R(s) = (s+1) / (s+10) it is correct to claim that, discretizing it via the Euler Forward method with sampling time T_s = 1 [s], the obtained digital controller R(z) maintains the same stability property as the original continuous-time controller.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 2
    },
    {
        id: 17,
        question: "Given a unitary feedback control scheme where G(s) = (s+1) / (s(s+20)) if the controller is designed as R(s) = k/s, then the closed loop transfer function F(s) has a zero in -1 and a unitary static gain.",
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
        question: "Given the delay factor e^(-Ts), the Padé approximator of the first order G_1(s), assuming a, b > 0, is:",
        type: "multiple-choice",
        options: [
            { text: "a rational transfer function of the type G_1 = μ(1-as)/(1+bs) with parameters to be determined relying on McLaurin series expansion." },
            { text: "such that G_1(s) = e^(-Ts)" },
            { text: "a rational transfer function of the type G_1 = μ(1-as)/(1+bs) with parameters to be determined relying on McLaurin series expansion." },
            { text: "a rational transfer function of the type G_1 = μ(1+as)/(1-bs) with parameters to be determined relying on McLaurin series expansion." },
            { text: "such that G_1'(s) = e^(-Ts)" },
            { text: "such that G_1(s) = e^(Ts)" },
            { text: "None of the replies." },
            { text: "a rational transfer function of the type G_1 = μ(1+as)/(1+bs) with parameters to be determined relying on McLaurin series expansion." }
        ],
        correctAnswer: ["a rational transfer function of the type G_1 = μ(1+as)/(1+bs) with parameters to be determined relying on McLaurin series expansion."],
        points: 2
    },
    {
        id: 19,
        question: "In a decentralized control scheme:",
        type: "multiple-choice",
        options: [
            { text: "Any component of the control vector depends on a single component of a disturbance acting on the control vector" },
            { text: "Any component of the control vector depends on a single component of the error vector" },
            { text: "None of the replies" },
            { text: "The system to control must be SISO" },
            { text: "Any component of the error vector depends on a single component of the decoupler output vector" },
            { text: "Any component of the controlled variable vector depends on a single component of the error vector" },
            { text: "Any component of the controlled variable vector depends on a single component of the control vector" }
        ],
        correctAnswer: ["Any component of the control vector depends on a single component of the error vector"],
        points: 3
    },
    {
        id: 20,
        question: "PID controllers can be made physically realizable by adding a zero out of bandwidth of the closed loop system in which they are included.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    }
]