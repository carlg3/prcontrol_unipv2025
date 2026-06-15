// ESAME 2024-06-20

const quizData = [
    {
        id: 1,
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
        id: 2,
        question: "The system described by the transfer matrix [ (1/(s+10)), (s+2)/(s+200); 0, 10/(s+3) ] is a LTI minimum phase SISO system.",
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
        question: "The following picture illustrates a method different from the so-called Euler Backward Discretization.",
        type: "single-choice",
        image: "./img/PC/20240620/3.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 4,
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
        id: 5,
        question: "In a decentralized control scheme:",
        type: "multiple-choice",
        options: [
            { text: "None of the replies" },
            { text: "Any component of the controlled variable vector depends on a single component of the control vector" },
            { text: "Any component of the controlled variable vector depends on a single component of the error vector" },
            { text: "Any component of the error vector depends on a single component of the decoupler output vector" },
            { text: "Any component of the control vector depends on a single component of a disturbance acting on the control vector" },
            { text: "Any component of the control vector depends on a single component of the error vector" },
            { text: "The system to control must be SISO" }
        ],
        correctAnswer: ["Any component of the control vector depends on a single component of the error vector"],
        points: 4
    },
    {
        id: 6,
        question: "The following Bode plots [...] describe a pre-filter used to enlarge the controlled system bandwidth in cases when this is not possible via the closed loop controller design.",
        type: "single-choice",
        image: "./img/PC/20240620/6.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 7,
        question: "Given the process described by the transfer function G(s) = (s+80) / ((s+20)(s+40)(s+60)) design a unitary feedback control scheme with a proportional controller by using the Root Locus. Determine the center of the asymptotes:",
        type: "single-choice",
        options: [
            { text: "(0, 0)" },
            { text: "None of the replies" },
            { text: "(20, 0)" },
            { text: "(0, -10)" },
            { text: "(-20, 0)" },
            { text: "(-10, 0)" },
            { text: "(0, -20)" },
            { text: "(0, 10)" },
            { text: "(10, 0)" }
        ],
        correctAnswer: ["(-20, 0)"],
        points: 1
    },
    {
        id: 8,
        question: "Given the digital controller R*(z) = (β_n z^n + β_{n-1} z^{n-1} + ... + β_0) / (z^n + α_{n-1} z^{n-1} + ... + α_0) it can be obtained by computing the ratio between the Laplace Transform of the control signal and that of the error signal.",
        type: "single-choice",
        image: "./img/PC/20240620/8.png",
		options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 9,
        question: "Considering LTI SISO control systems, the closed loop frequency response magnitude in dB must be very high (definitely larger than 20dB) in all the frequency range where the process disturbance has significant harmonics.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 10,
        question: "Given a continuous time closed loop system with a bandwidth of 10 rad/s, a sampling frequency of 2.1Hz is correct according to the sampling theory.",
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
        question: "Given an unstable open loop LTI system L(s), assuming to adopt a control scheme based on two nested loops:",
        type: "multiple-choice",
        options: [
            { text: "the outer controller must be designed so as to make the overall control scheme be a stable system and comply with the design requirements" },
            { text: "the inner controller must be designed so as to make the inner feedback loop be a proper system" },
            { text: "the two controllers must be PI controllers" },
            { text: "the inner controller must be designed so as to make the inner feedback loop be a second order system with real poles" },
            { text: "the two controllers must be causal" },
            { text: "the outer controller can be designed relying on the Nyquist Criterion" },
            { text: "the inner controller must be designed so as to make the inner feedback loop be an asymptotically stable system" },
            { text: "the outer controller must be designed so as to make the overall control scheme be an asymptotically stable system and comply with the design requirements" }
        ],
        correctAnswer: [
            "the two controllers must be causal",
            "the outer controller can be designed relying on the Nyquist Criterion",
            "the inner controller must be designed so as to make the inner feedback loop be an asymptotically stable system",
            "the outer controller must be designed so as to make the overall control scheme be an asymptotically stable system and comply with the design requirements"
        ],
        points: 4
    },
    {
        id: 12,
        question: "Given a MIMO LTI system with 3 x 3 full transfer matrix G(s), in case of backward decoupling, the following claims are true:",
        type: "multiple-choice",
        options: [
            { text: "Δ(s) = (I - Γ(s))^-1" },
            { text: "The element (1,1) of the transfer matrix G_diag(s) of the decoupled process is G_11(s) - G_12(s)G_21(s) / G_22(s)" },
            { text: "Δ(s) = [ Δ_11(s), Δ_12(s); Δ_21(s), Δ_22(s) ]" },
            { text: "Γ_ij(s) = { 0 if i=j, -G_ij(s)/G_ii(s) if i != j }" },
            { text: "Γ(s) = [ 0, Γ_12(s), 0; Γ_21(s), 0, Γ_22(s); 0, 0, 0 ] = [ 0, -G_12(s)/G_11(s); -G_21(s)/G_22(s), 0]" },
            { text: "None of the replies." }
        ],
        correctAnswer: ["Δ(s) = (I - Γ(s))^-1", "Γ_ij(s) = { 0 if i=j, -G_ij(s)/G_ii(s) if i != j }"],
        points: 4
    },
    {
        id: 13,
        question: "Let f(t) be a limited-band signal with maximum bandwidth ω_max. Then if ω_max < ω_N = π/T signal f(t), assumed to be continuous in the sampling instants, cannot be reconstructed exactly starting from the samples f(k) = f(kT).",
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
        question: "The system described by the transfer function: G(s) = 10(s+20)^2 / (s^2(s+30)) is a nonlinear system of the third order.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 15,
        question: "Given the following scheme [...] the following claims are true:",
        type: "multiple-choice",
        image: "./img/PC/20240620/15.png",
        options: [
            { text: "None of the replies." },
            { text: "The controller is not causal." },
            { text: "T_I = K_I / K_P" },
            { text: "The controller is causal." },
            { text: "T_D = K_P / K_D" },
            { text: "The scheme is an anti-wind-up scheme for a PI controller with derivative action from the output." },
            { text: "The scheme is an anti-wind-up scheme for a PID controller with derivative action from the output." }
        ],
        correctAnswer: ["The controller is causal.", "The scheme is an anti-wind-up scheme for a PID controller with derivative action from the output."],
        points: 4
    },
    {
        id: 16,
        question: "The pre-filter can be used to:",
        type: "multiple-choice",
        options: [
            { text: "improve the accuracy of the closed loop system in presence of a delay" },
            { text: "enlarge the closed loop bandwidth of a controlled system a posteriori" },
            { text: "cancel the non-minimum phase zeroes" },
            { text: "re-shape the measurement disturbance sensitivity function" },
            { text: "none of the replies" },
            { text: "improve the accuracy of the closed loop system versus measurement disturbance" },
            { text: "stabilize the closed loop system in case of small bandwidth" },
            { text: "smooth the abrupt peaks of the reference signal" },
            { text: "stabilize the closed loop system in case of unstable open loop systems" },
            { text: "perform static compensation in a non robust way" }
        ],
        correctAnswer: ["enlarge the closed loop bandwidth of a controlled system a posteriori", "smooth the abrupt peaks of the reference signal", "perform static compensation in a non robust way"],
        points: 4
    },
    {
        id: 17,
        question: "A LTI described by a rational transfer function with 3 poles and relative degree 1 has three zeros.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 18,
        question: "Given a process described by the following model: [...] Determine the transfer matrix G(s) for the entire process and select the correct claims:",
        type: "multiple-choice",
        image: "./img/PC/20240620/18.png",
        options: [
            { text: "The static gain of G_11 is 10^3." },
            { text: "The elements out of the diagonal of the decoupler, in case it can be used (check the assumptions for the use) and is designed following the approach seen in the course for this specific case, need to be modified by adding poles external with respect to the closed loop bandwidth of the MIMO control system to make them causal." },
            { text: "None of the replies." },
            { text: "The transfer matrix is a full 2 x 2 matrix." },
            { text: "The three assumptions for the application of a decoupling-based synthesis are not satisfied." },
            { text: "The transfer matrix is upper triangular." },
            { text: "The static gain of G_11 is 10^-1." },
            { text: "The static gain of G_11 is 0.02." },
            { text: "The transfer matrix is lower triangular." },
            { text: "The three assumptions for the application of a decoupling-based synthesis are satisfied." }
        ],
        correctAnswer: ["The transfer matrix is lower triangular.", "The static gain of G_11 is 10^-1.", "The three assumptions for the application of a decoupling-based synthesis are satisfied."],
        points: 4
    }
]