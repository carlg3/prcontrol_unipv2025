// HOMEWORK 2 2021

const quizData = [
  {
    id: 1,
    question: "The cascade controllers based approach is recommended when the following conditions contemporarily hold:",
    type: "multiple-choice",
    options: [
      { text: "the control performance which could be achieved performing the controller synthesis only considering the first subsystem is worse than that obtained by designing the controller taking into account only the second subsystem" },
      { text: "the system to control is unstable in open loop" },
      { text: "the control performance which could be achieved performing the controller synthesis taking into account both subsystems is better than that obtained by designing the controller only considering the first subsystem" },
      { text: "the control performance which could be achieved performing the controller synthesis only considering the second subsystem is better than that obtained by designing the controller taking into account both subsystems" },
      { text: "the system to control can be subdivided into two subsystems (subsystem 1 and subsystem 2) in parallel connection" },
      { text: "the control performance which could be achieved performing the controller synthesis only considering the first subsystem is better than that obtained by designing the controller taking into account both subsystems" },
      { text: "the system to control can be subdivided into two subsystems (subsystem 1 and subsystem 2) in feedback connection" },
      { text: "the system to control can be subdivided into two subsystems (subsystem 1 and subsystem 2) in series connection" }
    ],
    correctAnswer: [
      "the system to control can be subdivided into two subsystems (subsystem 1 and subsystem 2) in series connection",
      "the control performance which could be achieved performing the controller synthesis only considering the first subsystem is better than that obtained by designing the controller taking into account both subsystems"
    ],
    points: 4
  },
  {
    id: 2,
    question: "Given a LTI system to control which can be subdivided into two subsystems (subsystem 1 and subsystem 2). Assume that the transfer function describing the second subsystem has a zero in 20. The system is controlled via a cascade controllers based control scheme. Select the correct claims:",
    type: "multiple-choice",
    options: [
      { text: "A closed loop bandwidth of 100 rad/s can be realized" },
      { text: "The design of the two controllers is based on decoupling in the frequency domain" },
      { text: "A closed loop bandwidth of 1 rad/s can be realized" },
      { text: "The design of the two controllers is based on decoupling in the time domain" },
      { text: "The controlled system must be asymptotically stable" },
      { text: "The controlled system must be stable" },
      { text: "The design of the two controllers is based on forward decoupling" },
      { text: "A closed loop bandwidth of 100 rad/s cannot be realized" }
    ],
    correctAnswer: [
      "A closed loop bandwidth of 1 rad/s can be realized",
      "A closed loop bandwidth of 100 rad/s cannot be realized",
      "The controlled system must be asymptotically stable",
      "The design of the two controllers is based on decoupling in the frequency domain"
    ],
    points: 4
  },
  {
    id: 3,
    question: "A nonminimum phase zero is a system zero located in the left-hand side of the complex plane",
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
    id: 4,
    question: "Given the transfer matrix:\n$$ G(s) = \\begin{bmatrix} \\frac{10}{s+10} & \\frac{s+1}{(1+3s)(s+100)} \\\\ 0 & \\frac{10^2}{s+200} \\end{bmatrix} $$\ndescribing a dynamic system, select the correct claims:",
    type: "multiple-choice",
    options: [
      { text: "the transfer matrix is upper triangular" },
      { text: "$G(s)$ is singular for $s=0$" },
      { text: "the system is LTI" },
      { text: "$G(s)$ is non singular for $s=0$" },
      { text: "the system is nonlinear" },
      { text: "the system is MIMO" },
      { text: "the transfer matrix is lower triangular" },
      { text: "the transfer matrix is of dimension 3x3" }
    ],
    correctAnswer: [
      "the system is MIMO",
      "the transfer matrix is upper triangular",
      "the system is LTI",
      "$G(s)$ is non singular for $s=0$"
    ],
    points: 4
  },
  {
    id: 5,
    question: "When a MIMO system is controlled via a decoupling based control scheme the overall controller matrix $\\check{R}(s) = \\Delta(s)R(s)$ is diagonal.",
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
    id: 6,
    question: "Given a transfer function $G(s)$ describing a LTI process, the following claims are correct:",
    type: "multiple-choice",
    options: [
      { text: "its gain is the limit of $G(s)$ for $s$ which tends to zero provided that the system type is zero" },
      { text: "its order is equal to the number of poles" },
      { text: "its relative degree is the difference between the number of zeroes and the number of poles" },
      { text: "the system is MIMO" },
      { text: "its order is equal to the number of poles in zero" },
      { text: "its gain is the limit of $G(s)$ for $s$ which tends to infinity provided that the system type is zero" },
      { text: "its relative degree is the number of poles in zero" },
      { text: "its relative degree is the difference between the number of poles and the number of zeroes" },
      { text: "its order is equal to the number of zeroes" },
      { text: "its gain is the limit of $G(s)$ for $s$ which tends to zero" }
    ],
    correctAnswer: [
      "its gain is the limit of $G(s)$ for $s$ which tends to zero provided that the system type is zero",
      "its relative degree is the difference between the number of poles and the number of zeroes",
      "its order is equal to the number of poles"
    ],
    points: 4
  },
  {
    id: 7,
    question: "When a LTI MIMO system with coupling effects is controlled via a decoupling based control scheme the decoupler transfer matrix is not diagonal",
    type: "single-choice",
    options: [
      { text: "True" },
      { text: "False" }
    ],
    correctAnswer: [
      "True"
    ],
    points: 1
  },
  {
    id: 8,
    question: "Given a 2x2 MIMO LTI system controlled via a decoupling based control scheme, and the following matrix:\n$$ \\begin{bmatrix} 1 & 0 \\\\ -\\frac{G_{21}(s)}{G_{22}(s)} & 1 \\end{bmatrix} $$\nThe matrix is:",
    type: "single-choice",
    image: "./img/HW3/Question_08.jpg",
    options: [
      { text: "the decoupler transfer matrix provided that the system transfer matrix is a full matrix" },
      { text: "the controller transfer matrix provided that the system transfer matrix is asymptotically stable" },
      { text: "the decoupler transfer matrix provided that the system transfer matrix is upper triangular" },
      { text: "the product between the controller transfer matrix and the decoupler transfer matrix" },
      { text: "the decoupler transfer matrix provided that the system transfer matrix is lower triangular" },
      { text: "the controller transfer matrix provided that the system transfer matrix is lower triangular" }
    ],
    correctAnswer: [
      "the decoupler transfer matrix provided that the system transfer matrix is lower triangular"
    ],
    points: 1
  },
  {
    id: 9,
    question: "The following matrix:\n$$ \\begin{bmatrix} 1 & -\\frac{G_{11}(s)}{G_{12}(s)} \\\\ -\\frac{G_{22}(s)}{G_{21}(s)} & 1 \\end{bmatrix} $$\nis the transfer matrix of the decoupler in a forward decoupling based control scheme when the system transfer matrix $G(s)$ is 2x2",
    type: "single-choice",
    image: "./img/HW3/Question_09.jpg",
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
    id: 10,
    question: "In backward decoupling based control schemes for mxm MIMO LTI systems, considering the notations introduced in the course, one has that:",
    type: "multiple-choice",
    image: "./img/HW3/Question_10.jpg",
    options: [
      { text: "$ \\Gamma(s) = (I - \\Delta(s))^{-1} $" },
      { text: "$ U(s) = \\Gamma(s)U(s) + V(s) $" },
      { text: "$ \\Gamma_{ij}(s) = -G_{ij}(s)/G_{ii}(s), \\ i \\neq j $" },
      { text: "$ \\Delta(s) = (I - \\Gamma(s))^{-1} $" },
      { text: "$ G_{d_{ij}}(s) \\neq G_{ij}(s), \\ i = j $, with $ G_d(s) = G(s) \\Delta(s) $" },
      { text: "$ \\Gamma(s) = \\begin{bmatrix} 1 & \\Gamma_{12}(s) & \\dots & \\Gamma_{1m}(s) \\\\ \\Gamma_{21} & \\ddots & & \\vdots \\\\ \\vdots & & 1 & \\Gamma_{(m-1)m}(s) \\\\ \\Gamma_{m1}(s) & \\dots & \\Gamma_{m(m-1)}(s) & 1 \\end{bmatrix} $" }
    ],
    correctAnswer: [
      "$ U(s) = \\Gamma(s)U(s) + V(s) $",
      "$ \\Delta(s) = (I - \\Gamma(s))^{-1} $",
      "$ \\Gamma_{ij}(s) = -G_{ij}(s)/G_{ii}(s), \\ i \\neq j $"
    ],
    points: 4
  }
];