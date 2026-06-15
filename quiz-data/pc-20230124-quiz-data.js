// ESAME 2023-01-24

const quizData = [
    {
        id: 1,
        question: "The pre-filter can be used to:",
        type: "multiple-choice",
        options: [
            { text: "improve the accuracy of the closed loop system versus measurement disturbance" },
            { text: "none of the replies" },
            { text: "enlarge the closed loop bandwidth of a controlled system a posteriori" },
            { text: "perform static compensation in a non robust way" },
            { text: "stabilize the closed loop system in case of small bandwidth" },
            { text: "remove non-minimum phase zeroes" },
            { text: "solve design requirements not solvable by the closed loop controller" },
            { text: "smooth the abrupt peaks of the reference signal" },
            { text: "re-shape the measurement disturbance sensitivity function" }
        ],
        correctAnswer: [
            "enlarge the closed loop bandwidth of a controlled system a posteriori",
            "perform static compensation in a non robust way",
            "solve design requirements not solvable by the closed loop controller",
            "smooth the abrupt peaks of the reference signal"
        ],
        points: 4
    },
    {
        id: 2,
        question: "Considering LTI SISO control systems, the closed loop frequency response magnitude in dB must be negative in all the frequency range where the measurement disturbance has significant harmonics.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 3,
        question: "A LTI described by a rational transfer function with 3 poles and relative degree 1 has three zeros.",
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
        question: "Given a zero-order hold, the following claims are true:",
        type: "multiple-choice",
        options: [
            { text: "it can be regarded as a high-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lag equal to T_s/2" },
            { text: "it can be regarded as a high-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lead equal to T_s" },
            { text: "it can be regarded as a Ziegler-Nichols filter with a bandwidth from 0 to the Nyqvist Pulse" },
            { text: "it can be regarded as a low-pass filter with a bandwidth larger than 2ω_Max" },
            { text: "it can be regarded as a low-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lag equal to T_s/2" },
            { text: "it can be regarded as an all-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lag equal to T_s" },
            { text: "it can be regarded as a low-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lag equal to T_s" },
            { text: "None of the replies" },
            { text: "it can be regarded as a low-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lead equal to T_s" },
            { text: "it can be regarded as a high-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lag equal to ω_s" }
        ],
        correctAnswer: ["it can be regarded as a low-pass filter with a bandwidth from 0 to the Nyquist Pulse introducing a phase lag equal to T_s/2"],
        points: 4
    },
    {
        id: 5,
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
        id: 6,
        question: "Given the MIMO LTI system described by the transfer matrix: $G(s) = \\begin{bmatrix} \\frac{s+1}{s+\\frac{1}{3}} & \\frac{s-1}{s+1} \\\\ \\frac{2(s+2)}{1+s} & \\frac{4}{s+\\frac{2}{3}} \\end{bmatrix}$ the element (2, 2) of the Relative Gain Array is:",
        type: "single-choice",
        options: [
            { text: "1" },
            { text: "none of the replies" },
            { text: "-0.75" },
            { text: "-0.9" },
            { text: "0.125" },
            { text: "0.75" },
            { text: "-0.125" },
            { text: "0.9" },
            { text: "-1" }
        ],
        correctAnswer: ["none of the replies"],
        points: 1
    },
    {
        id: 7,
        question: "In a decentralized control scheme:",
        type: "multiple-choice",
        options: [
            { text: "Any component of the controlled variable vector depends on a single component of the control vector" },
            { text: "The system to control must be SISO" },
            { text: "Any component of the controlled variable vector depends on a single component of the error vector" },
            { text: "Any component of the error vector depends on a single component of the decoupler output vector" },
            { text: "None of the replies" },
            { text: "Any component of the control vector depends on a single component of a disturbance acting on the control vector" },
            { text: "Any component of the control vector depends on a single component of the error vector" }
        ],
        correctAnswer: ["Any component of the control vector depends on a single component of the error vector"],
        points: 4
    },
    {
        id: 8,
        question: "A nonminimum phase zero is a system zero located in the left-hand side of the complex plane",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 9,
        question: "Given the transfer function $G(z) = \\frac{10(z+0.3)}{(z+10)}$ the following claims are true:",
        type: "multiple-choice",
        options: [
            { text: "The system is stable" },
            { text: "The system is of the first order" },
            { text: "z is the Laplace variable" },
            { text: "It describes a LTI continuous-time process" },
            { text: "The system is asymptotically stable" },
            { text: "It describes a LTI discrete-time process" },
            { text: "z is the one-step-delay operator" },
            { text: "None of the replies" }
        ],
        correctAnswer: ["The system is of the first order", "It describes a LTI discrete-time process"],
        points: 4
    },
	{
		id: 10,
		question: "Given a MIMO LTI system with $3 \\times 3$ full transfer matrix $G(s)$, in case of backward decoupling, the following claims are true:",
		type: "multiple-choice",
		options: [
			{ text: "$\\Delta(s) = (I - \\Gamma(s))^{-1}$" },
			{ text: "None of the replies." },
			{ text: "$\\Gamma_{ij}(s) = \\begin{cases} 0 & \\text{if } i=j \\\\ -\\frac{G_{ij}(s)}{G_{ii}(s)} & \\text{if } i \\neq j \\end{cases}$" },
			{ text: "The element $(1,1)$ of the transfer matrix $G_{\\text{diag}}(s)$ of the decoupled process is $G_{11}(s) - \\frac{G_{12}(s)G_{21}(s)}{G_{22}(s)}$" },
			{ text: "$\\Delta(s) = \\begin{bmatrix} \\Delta_{11}(s) & \\Delta_{12}(s) \\\\ \\Delta_{21}(s) & \\Delta_{22}(s) \\end{bmatrix}$" },
			{ text: "$\\Gamma(s) = \\begin{bmatrix} 0 & \\Gamma_{12}(s) & 0 \\\\ \\Gamma_{21}(s) & 0 & \\Gamma_{22}(s) \\\\ 0 & 0 & 0 \\end{bmatrix} = \\begin{bmatrix} 0 & -\\frac{G_{12}(s)}{G_{11}(s)} & 0 \\\\ -\\frac{G_{21}(s)}{G_{22}(s)} & 0 & 0 \\end{bmatrix}$" }
		],
		correctAnswer: [
			"$\\Delta(s) = (I - \\Gamma(s))^{-1}$",
			"$\\Gamma_{ij}(s) = \\begin{cases} 0 & \\text{if } i=j \\\\ -\\frac{G_{ij}(s)}{G_{ii}(s)} & \\text{if } i \\neq j \\end{cases}$"
		],
		points: 4
	},
    {
        id: 11,
        question: "To control an open loop LTI unstable system it is advisable to use a scheme with an inner controller only aimed at complying with the design requirements, and an outer controller only aimed at asymptotically stabilizing the overall control scheme.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 12,
        question: "Given a signal $f(t)$ with limited bandwidth $\\omega_{Max}$ to be sampled, the following claims are false:",
        type: "multiple-choice",
        options: [
            { text: "None of the replies" },
            { text: "To avoid the aliasing phenomenon the Nyqvist pulse must be greater than 2ω_Max" },
            { text: "To avoid the aliasing phenomenon the Nyqvist pulse must be greater than the signal limited bandwidth" },
            { text: "The signal spectrum is different from zero for ω > ω_Max" },
            { text: "To avoid the aliasing phenomenon the sampling pulse must be greater than ω_Max" },
            { text: "To avoid the aliasing phenomenon the sampling time must be greater than ω_Max" },
            { text: "The signal spectrum is practically zero for ω > ω_Max" },
            { text: "The signal spectrum is practically zero for pulses lower than the signal limited bandwidth" },
            { text: "To avoid the aliasing phenomenon the sampling pulse must be greater than 2ω_Max" }
        ],
        correctAnswer: [
            "To avoid the aliasing phenomenon the sampling time must be greater than ω_Max",
            "To avoid the aliasing phenomenon the sampling pulse must be greater than ω_Max",
            "To avoid the aliasing phenomenon the Nyqvist pulse must be greater than 2ω_Max",
            "The signal spectrum is different from zero for ω > ω_Max",
            "The signal spectrum is practically zero for pulses lower than the signal limited bandwidth"
        ],
        points: 4
    },
    {
        id: 13,
        question: "Given the control scheme:",
        type: "multiple-choice",
        image: "./img/PC/20230124/13.jpg",
        options: [
            { text: "It is a PID-based control scheme with anti-wind-up." },
            { text: "It is a pre-filter-based control scheme." },
            { text: "It is a parallel-compensator-based control scheme." },
            { text: "It has a large closed loop bandwidth." },
            { text: "It is a LTI control scheme." },
            { text: "It is asymptotically stable." },
            { text: "None of the replies" }
        ],
        correctAnswer: ["It is a parallel-compensator-based control scheme.", "It is a LTI control scheme."],
        points: 4
    },
    {
        id: 14,
        question: "Let f(t) be a limited-band signal with maximum bandwidth $\\omega_{max}$. Then if $\\omega_{max}<\\omega_N = \\frac{\\pi}{T}$ signal f(t), assumed to be continuous in the sampling instants, cannot be reconstructed exactly starting from the samples $f(k) = f(kT)$.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 15,
        question: "In the following picture you see a root locus associated with a control scheme where the process transfer function has a pole in -5 and a pole in 10. If p = 30, the controller, which cancels the process pole in -5 with a zero, asymptotically stabilizes the closed loop system for any negative value of k.",
        type: "single-choice",
        image: "./img/PC/20230124/15.jpg",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 16,
        question: "The following process [Conveyor Belt] can be described using the following transfer function (select the correct reply):",
        type: "single-choice",
        image: "./img/PC/20230124/16.jpg",
        options: [
            { text: "G(s) = e^(+Ts), T = L/V" },
            { text: "None of the replies." },
            { text: "G(s) = e^(+Ts), T = q_e/q_a" },
            { text: "G(s) = e^(-Ts), T = L/V" },
            { text: "G(s) = e^(+Ts), T = L/V" },
            { text: "G(s) = e^(-s/T), T = L/V" },
            { text: "G(s) = e^(-Ts), T = V/L" },
            { text: "G(s) = e^(-Ts), T = q_e/q_a" },
            { text: "G(s) = e^(-Ts), T = q_a/q_e" }
        ],
        correctAnswer: ["G(s) = e^(-Ts), T = L/V"],
        points: 1
    },
    {
        id: 17,
        question: "When a LTI system with a delay τ is controlled via a control scheme including the Smith Predictor, then the output of the parallel connection between the process and the predictor is equal to the controlled variable delayed in time of τ seconds.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 18,
        question: "Given the following scheme [...] one can claim that:",
        type: "multiple-choice",
        image: "./img/PC/20230124/18.jpg",
        options: [
            { text: "It is a scheme adopted when the process is affected by disturbance on the output measurement." },
            { text: "It is a scheme adopted to implement a PID." },
            { text: "None of the replies." },
            { text: "It is a scheme adopted when the process is affected by disturbance on the control variable." },
            { text: "It is a scheme adopted to implement a parallel compensator." },
            { text: "It is a scheme adopted when the process is described by a triangular transfer matrix to decouple it." },
            { text: "It is not scheme adopted when the process is affected by a measurable disturbance." }
        ],
        correctAnswer: ["It is a scheme adopted when the process is described by a triangular transfer matrix to decouple it.", "It is not scheme adopted when the process is affected by a measurable disturbance."],
        points: 4
    },
    {
        id: 19,
        question: "When a MIMO system is controlled via a decoupling based control scheme the decoupler matrix is diagonal.",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 20,
        question: "The following picture illustrates the so-called Euler Backward Discretization method.",
        type: "single-choice",
        image: "./img/PC/20230124/20.jpg",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    }
]