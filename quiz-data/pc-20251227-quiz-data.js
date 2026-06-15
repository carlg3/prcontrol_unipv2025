// HW 3

const quizData = [
  {
    id: 1,
    question: "The Closed Loop Ziegler-Nichols rules illustrated in the course are:",
    type: "multiple-choice",
    options: [
      { text: "A closed loop tuning method for PIDs" },
      { text: "Rules to select the sampling time in a digital PID" },
      { text: "Rules to be used to make the ideal PID become causal" },
      { text: "None of the replies" },
      { text: "Rules to decide whether to use a P, a PI or a PID controller" },
      { text: "Rules to calibrate the parameters of a PID controller" },
      { text: "Rules to eliminate the wind-up effect" }
    ],
    correctAnswer: [
      "Rules to calibrate the parameters of a PID controller",
      "A closed loop tuning method for PIDs"
    ],
    points: 4
  },
  {
    id: 2,
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
    id: 3,
    question: "Given a signal $f(t)$ with limited bandwidth $\\omega_{Max}$ to be sampled, the following claims are true:",
    type: "multiple-choice",
    options: [
      { text: "The signal spectrum is practically zero for $\\omega>\\omega_{Max}$" },
      { text: "None of the replies" },
      { text: "To avoid the aliasing phenomenon the Nyquist pulse must be greater than the signal limited bandwidth" },
      { text: "To avoid the aliasing phenomenon the sampling pulse must be greater than $\\omega_{Max}$" },
      { text: "To avoid the aliasing phenomenon the sampling time must be greater than $\\omega_{Max}$" },
      { text: "The signal spectrum is different from zero for $\\omega>\\omega_{Max}$" },
      { text: "To avoid the aliasing phenomenon the Nyquist pulse must be greater than $2\\omega_{Max}$" },
      { text: "The signal spectrum is practically zero for pulses lower than the signal limited bandwidth" },
      { text: "To avoid the aliasing phenomenon the sampling pulse must be greater than $2\\omega_{Max}$" }
    ],
    correctAnswer: [
      "The signal spectrum is practically zero for $\\omega>\\omega_{Max}$",
      "To avoid the aliasing phenomenon the Nyquist pulse must be greater than the signal limited bandwidth",
      "To avoid the aliasing phenomenon the sampling pulse must be greater than $2\\omega_{Max}$"
    ],
    points: 4
  },
  {
    id: 4,
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
    id: 5,
    question: "Considering the Bilinear Transformation formula, find the correct correspondences:",
    type: "multiple-choice",
    options: [
      { text: "The discretization rule $\\frac{z-1}{T_{s}}$ is used in the Forward Euler method" },
      { text: "The discretization rule $\\frac{z-1}{T_{s}z}$ is used in the Backward Euler method" },
      { text: "The discretization rule $\\frac{z-1}{T_{s}}$ is used in the Backward Euler method" },
      { text: "The discretization rule $\\frac{z-1}{T_{s}z}$ is used in the Forward Euler method" }
    ],
    correctAnswer: [
      "The discretization rule $\\frac{z-1}{T_{s}}$ is used in the Forward Euler method",
      "The discretization rule $\\frac{z-1}{T_{s}z}$ is used in the Backward Euler method"
    ],
    points: 4
  },
  {
    id: 6,
    question: "Given the following \"first line\" of a Jury Table:\n\n2 1 4 6\n\nthen, the first element and the second element of the subsequent row of the table are equal to -16 and -11, respectively.",
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
    question: "Given the Z-transform:\n\n$E(z)=2+4z^{-1}+6z^{-2}+8z^{-3}+10z^{-3}+...$\n\nthen, the corresponding sequence in the discrete-time domain can be written as: $\\{e(k)\\}$, such that $e(k)=e(k-1)+2$ $k\\ge1$, with $e(0)=0$.",
    type: "single-choice",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 8,
    question: "Given a digital controller, described by the following discrete-time transfer function:\n\n$R(z)=\\frac{6(z+0,3)}{6z^{2}-z-1}$\n\nknowing that it was obtained by discretizing an original asymptotically stable continuous-time controller $R_{o}(s)$, it is correct to claim that the discretization procedure has preserved the controller stability property.",
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
    question: "Given the digital controller\n\n$R(z)=\\frac{20}{z^{-1}(z-1)}$\n\nit is correct to claim that it has been obtained by discretizing the original continuous-time integral controller\n\n$R_{o}(s)=\\frac{10}{s}$\n\nusing the Forward Euler discretization method with a sampling time $T_{s}$ equal to:",
    type: "single-choice",
    options: [
      { text: "$20[s]$" },
      { text: "$2[s]$" },
      { text: "$0,2[s]$" },
      { text: "$1[s]$" },
      { text: "None of the replies." },
      { text: "$10^{-1}[s]$" },
      { text: "$10[s]$" },
      { text: "$10^{-2}[s]$" }
    ],
    correctAnswer: ["None of the replies."],
    points: 1
  },
  {
    id: 10,
    question: "Consider the ZOH present in a digital control scheme where the digital controller has been obtained starting from an original continuous-time controller $R_{o}(s)$ designed with reference to the process model $G(s)$. It is correct to claim that when the continuous time frequency response of the open loop system $L(j\\omega)$ has a critical pulse $\\omega_{c}$ equal to 10 $[rad/s]$ and the sampling frequency is $10^{2}\\pi^{-1}$ [Hz], then the phase shift introduced by the ZOH at $\\omega_{c}$ is:",
    type: "single-choice",
    options: [
      { text: "-9 degrees" },
      { text: "-18 degrees" },
      { text: "None of the replies." },
      { text: "-90 degrees" },
      { text: "-1 degree" },
      { text: "-10 degrees" },
      { text: "-60 degrees" }
    ],
    correctAnswer: ["-9 degrees"],
    points: 1
  },
  {
    id: 11,
    question: "When a MIMO system is controlled via a decoupling based control scheme the overall controller matrix $\\tilde{R}(s)=\\Delta(s)R(s)$ is diagonal.",
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
    question: "Given the control scheme\n\n[Scheme Image]\n\nwhere $G(s)=e^{-\\tau s}G^{\\prime}(s)$, the following claims are true:",
    type: "multiple-choice",
    image: "./img/PC/HW3/12.png",
    options: [
      { text: "In the scheme $R^{\\prime}(s)=\\frac{R(s)}{1+R(s)P(s)}$" },
      { text: "If $P(s)=(1+e^{-\\tau s})G^{\\prime}(s)$, then the scheme is an alternative representation of the Smith predictor scheme." },
      { text: "In the scheme $G^{\\prime}(s)=R(s)P(s)$" },
      { text: "If $P(s)=(1-e^{-\\tau s})G^{\\prime}(s)$, then the scheme is an alternative representation of the Smith predictor scheme." },
      { text: "In the scheme $R(s)=\\frac{R^{\\prime}(s)}{1+R^{\\prime}(s)P(s)}$" },
      { text: "In the scheme $R^{\\prime}(s)=G(s)+P(s)$" },
      { text: "None of the replies." },
      { text: "if $P(s)=(1-e^{-\\tau s})G(s)$, then the scheme is an alternative representation of the Smith predictor scheme." }
    ],
    correctAnswer: [
      "If $P(s)=(1-e^{-\\tau s})G^{\\prime}(s)$, then the scheme is an alternative representation of the Smith predictor scheme.",
      "In the scheme $R(s)=\\frac{R^{\\prime}(s)}{1+R^{\\prime}(s)P(s)}$"
    ],
    points: 4
  },
  {
    id: 13,
    question: "Given the LTI discrete-time system with characteristic polinomial:\n\n$\\varphi(z)=det(zI-A)=5z^{4}+2z^{3}+2z^{2}+z+3$\n\nby using one of the necessary conditions seen in the course, one can coclude that the system is not asymptotically stable.",
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
    question: "The following scheme represents a 2-degrees-of-freedom control scheme with process disturbance d and measurament disturbances n and w",
    type: "single-choice",
    image: "./img/PC/HW3/14.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 15,
    question: "Given the dynamic system described by\n\n$\\begin{cases}\\dot{x}_{1}&=&x_{2}\\\\ \\dot{x}_{2}&=&-x_{1}-2x_{2}\\end{cases}$\n\nselect the correct claims:",
    type: "multiple-choice",
    options: [
      { text: "it is linear time-invariant" },
      { text: "it has a matrix of the dynamics A of dimension 3x3" },
      { text: "none of the replies" },
      { text: "it has 3 eigenvalues" },
      { text: "it is time-varying" },
      { text: "it is SISO" },
      { text: "the state vector is bi-dimensional" },
      { text: "it has two coincinding real eigenvalues" },
      { text: "it is not autonomous" },
      { text: "it is a second order system" }
    ],
    correctAnswer: [
      "it is a second order system",
      "it has two coincinding real eigenvalues",
      "it is linear time-invariant",
      "the state vector is bi-dimensional"
    ],
    points: 4
  }
];