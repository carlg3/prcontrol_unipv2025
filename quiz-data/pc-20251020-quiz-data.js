// HW 1 - 2024

const quizData = [
  {
    id: 1,
    question: "Given the dynamic system described by the equations in the figure, select the correct claims:",
    type: "multiple-choice",
    image: "./img/PC/HW1/01.png",
    options: [
      { text: "it has a matrix of the dynamics $A$ of dimension $3 \\times 3$" },
      { text: "it is SISO" },
      { text: "it is time-varying" },
      { text: "the state vector has dimension 2" },
      { text: "one of its eigenvalues lies in the right-half of the complex plane" },
      { text: "it is not autonomous" },
      { text: "it is linear time-invariant" },
      { text: "it has 3 eigenvalues" },
      { text: "it is a second order system" },
      { text: "none of the replies" }
    ],
    correctAnswer: [
      "it is a second order system",
      "one of its eigenvalues lies in the right-half of the complex plane",
      "it is linear time-invariant",
      "the state vector has dimension 2"
    ],
    points: 4
  },
  {
    id: 2,
    question: "Considering LTI SISO control systems, the closed loop frequency response magnitude must be approximately $0 \\text{ dB}$ in all the frequency range where the reference signal has significant harmonics",
    type: "single-choice",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: [
      "Vero"
    ],
    points: 1
  },
  {
    id: 3,
    question: "The pre-filter can be used to:",
    type: "multiple-choice",
    options: [
      { text: "stabilize the closed loop system in case of small bandwidth" },
      { text: "perform static compensation in a non robust way" },
      { text: "cancel unstable poles of the closed loop unitary feedback scheme" },
      { text: "remove non-minimum phase zeroes" },
      { text: "none of the replies" },
      { text: "smooth the abrupt peaks of the reference signal" },
      { text: "enlarge the closed loop bandwidth of a controlled system a posteriori" },
      { text: "improve the accuracy of the closed loop system versus measurement disturbance" },
      { text: "re-shape the measurement disturbance sensitivity function" },
      { text: "solve design requirements not solvable by the closed loop controller" }
    ],
    correctAnswer: [
      "enlarge the closed loop bandwidth of a controlled system a posteriori",
      "smooth the abrupt peaks of the reference signal",
      "perform static compensation in a non robust way",
      "solve design requirements not solvable by the closed loop controller"
    ],
    points: 4
  },
  {
    id: 4,
    question: "The pre-filter has to be:",
    type: "multiple-choice",
    options: [
      { text: "always equal to the inverse of the closed loop static gain" },
      { text: "always a low-pass filter" },
      { text: "none of the replies" },
      { text: "described by a transfer function with unitary gain if it is not used for static compensation" },
      { text: "described by a first order transfer function" },
      { text: "described by a non-minimum phase transfer function" },
      { text: "non causal" },
      { text: "a proper system" },
      { text: "an asymptotically stable system" },
      { text: "a strictly proper system" }
    ],
    correctAnswer: [
      "a proper system",
      "an asymptotically stable system",
      "described by a transfer function with unitary gain if it is not used for static compensation"
    ],
    points: 4
  },
  {
    id: 5,
    question: "The compensator $M(s) = - \\frac{H(s)}{G(s)}$ ($H(s)$ defined in the course and $G(s)$ model of the process) used to counteract a measurable disturbance:",
    type: "single-choice",
    options: [
      { text: "is always causal" },
      { text: "none of the replies" },
      { text: "must be a low pass filter" },
      { text: "is always minimum-phase" },
      { text: "must be causal" },
      { text: "must be of the same order of $G(s)$" },
      { text: "is never minimum-phase" },
      { text: "must be time-varying" }
    ],
    correctAnswer: [
      "must be causal"
    ],
    points: 1
  },
  {
    id: 6,
    question: "Given a LTI system controlled via a control scheme including the Smith Predictor:",
    type: "multiple-choice",
    options: [
      { text: "The new controlled variable $z(t)$ results in being a prediction of the actual controlled variable $y(t)$" },
      { text: "The equivalent controller appearing in the second formulation of the scheme seen in the course performs a cancellation of the open loop zeroes" },
      { text: "The new controlled variable $z(t)$ results in being equal to the actual controlled variable $y(t)$ apart from the sign" },
      { text: "The equivalent controller appearing in the second formulation of the scheme seen in the course performs a cancellation of the open loop poles" },
      { text: "The controller appearing in the first formulation of the scheme can be designed relying only on $G'(s)$ (defined in the course)" },
      { text: "The Smith Predictor in its classical formulation has a rational transfer function" },
      { text: "The equivalent controller appearing in the second formulation of the scheme seen in the course performs a forbidden cancellation" },
      { text: "None of the replies" },
      { text: "The controller appearing in the first formulation of the scheme seen in the course contains an exponential term depending on the delay" }
    ],
    correctAnswer: [
      "The equivalent controller appearing in the second formulation of the scheme seen in the course performs a cancellation of the open loop poles",
      "The new controlled variable $z(t)$ results in being a prediction of the actual controlled variable $y(t)$",
      "The controller appearing in the first formulation of the scheme can be designed relying only on $G'(s)$ (defined in the course)"
    ],
    points: 4
  },
  {
    id: 7,
    question: "A LTI system with delay cannot be modelled as a ratio of two polynomials",
    type: "single-choice",
    options: [
      { text: "True" },
      { text: "False" }
    ],
    correctAnswer: [
      "False"
    ],
    points: 1
  },
  {
    id: 8,
    question: "The following scheme represents a 2-degrees-of-freedom control scheme with process disturbance $d$ and measurament disturbances $n$ and $w$",
    type: "single-choice",
    image: "./img/PC/HW1/08.png",
    options: [
      { text: "True" },
      { text: "False" }
    ],
    correctAnswer: [
      "False"
    ],
    points: 1
  },
  {
    id: 9,
    question: "Given the control scheme, the following claims are true:",
    type: "multiple-choice",
    image: "./img/PC/HW1/09.png",
    options: [
      { text: "The synthesis of $R_1(s)$ is performed with reference to $G_2(s)$ only." },
      { text: "This is a control scheme to be used when the performance that can be achieved in the design of a control system only for $G_1(s)$ are worse than those achievable in the synthesis of a controller for the whole process $G_1(s)G_2(s)$." },
      { text: "The output of $G_2(s)$ is not measurable." },
      { text: "The synthesis of $R_2(s)$ is performed with reference to $G_1(s)$ only." },
      { text: "The input to $G_2(s)$ is measurable." },
      { text: "The synthesis of $R_2(s)$ is performed with reference to $G_2(s)$ only." },
      { text: "The input to $G_2(s)$ is not measurable." },
      { text: "None of the replies." },
      { text: "This is a control scheme to be used when the performance that can be achieved in the design of a control system only for $G_1(s)$ are better than those achievable in the synthesis of a controller for the whole process $G_1(s)G_2(s)$." }
    ],
    correctAnswer: [
      "This is a control scheme to be used when the performance that can be achieved in the design of a control system only for $G_1(s)$ are better than those achievable in the synthesis of a controller for the whole process $G_1(s)G_2(s)$.",
      "The input to $G_2(s)$ is measurable.",
      "The synthesis of $R_2(s)$ is performed with reference to $G_2(s)$ only."
    ],
    points: 4
  },
  {
    id: 10,
    question: "Given the control scheme where $G(s) = e^{-\\tau s}G'(s)$, the following claims are true:",
    type: "multiple-choice",
    image: "./img/PC/HW1/10.png",
    options: [
      { text: "None of the replies." },
      { text: "If $P(s) = (1 + e^{-\\tau s})G'(s)$, then the scheme is an alternative representation of the Smith predictor scheme." },
      { text: "In the scheme $G'(s) = R(s)P(s)$" },
      { text: "If $P(s) = (1 - e^{-\\tau s})G'(s)$, then the scheme is an alternative representation of the Smith predictor scheme." },
      { text: "If $P(s) = (1 - e^{-\\tau s})G(s)$, then the scheme is an alternative representation of the Smith predictor scheme." },
      { text: "In the scheme $R'(s) = \\frac{R(s)}{1+R(s)P(s)}$" },
      { text: "In the scheme $R'(s) = G(s) + P(s)$" },
      { text: "In the scheme $R(s) = \\frac{R'(s)}{1+R'(s)P(s)}$" }
    ],
    correctAnswer: [
      "If $P(s) = (1 - e^{-\\tau s})G'(s)$, then the scheme is an alternative representation of the Smith predictor scheme.",
      "In the scheme $R(s) = \\frac{R'(s)}{1+R'(s)P(s)}$"
    ],
    points: 4
  }
];