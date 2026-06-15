// HW3 

const quizData = [
  {
    id: 1,
    question: "Find the geometric Jacobian matrix which describes the differential kinematics of the following cartesian robot manipulator (3 DoM)",
    type: "single-choice",
    image: "./img/RC/HW3/1.png",
    options: [
      { text: "$$J(q)=\\begin{bmatrix}0&0&0\\\\ 0&0&0\\\\ 0&0&0\\\\ 1&1&1\\\\ 0&0&0\\\\ 0&0&0\\end{bmatrix}$$" },
      { text: "$$J(q)=\\begin{bmatrix}0&1&0&0\\\\ 0&0&-1&0\\\\ 1&0&0&0\\\\ 0&0&0&1\\end{bmatrix}$$" },
      { text: "$$J(q)=\\begin{bmatrix}0&0&1\\\\ 0&1&0\\\\ 1&0&0\\\\ 0&0&0\\\\ 0&0&0\\\\ 0&0&0\\end{bmatrix}$$" },
      { text: "$$J(q)=\\begin{bmatrix}0&0&1\\\\ 0&0&0\\\\ 0&0&0\\\\ 0&0&0\\\\ 0&0&0\\\\ 0&0&0\\end{bmatrix}$$" },
      { text: "None of the replies" },
      { text: "$$J(q)=\\begin{bmatrix}0&0&1\\\\ 0&1&0\\\\ -1&0&0\\\\ 0&0&0\\\\ 0&0&0\\\\ 0&0&0\\end{bmatrix}$$" }
    ],
    correctAnswer: ["$$J(q)=\\begin{bmatrix}0&0&1\\\\ 0&1&0\\\\ -1&0&0\\\\ 0&0&0\\\\ 0&0&0\\\\ 0&0&0\\end{bmatrix}$$"],
    points: 1
  },
  {
    id: 2,
    question: "Given the information in the picture the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/HW3/2.png",
    options: [
      { text: "The components of vectors, $\\underline{z}_i^b, i=0,...,2,$ are incorrect." },
      { text: "The matrix which pre-multiplies $\\dot{\\underline{q}}(t)$ is the Geometric Jacobian Matrix." },
      { text: "Vectors $z_{i}^{b},i=0,...,2,$ are versors." },
      { text: "The matrix which pre-multiplies $\\dot{\\underline{q}}(t)$ is an homogeneous transformation matrix." },
      { text: "Reference frame $O_{2}-x_{2}y_{2}z_{2}$ is the D-H reference frame associated with Joint 2." },
      { text: "The components of vectors $\\underline{z}_i^b, i=0,...,2,$ are correctly determined." },
      { text: "None of the replies." },
      { text: "The last three components of the velocity vector of the end-effector are the elements of the set $\\Phi_{i}$." },
      { text: "The matrix which pre-multiplies $\\dot{\\underline{q}}(t)$ is the Analytic Jacobian Matrix." }
    ],
    correctAnswer: [
      "The matrix which pre-multiplies $\\dot{\\underline{q}}(t)$ is the Geometric Jacobian Matrix.",
      "Vectors $z_{i}^{b},i=0,...,2,$ are versors.",
      "The components of vectors, $\\underline{z}_i^b, i=0,...,2,$ are incorrect."
    ],
    points: 4
  },
  {
    id: 3,
    question: "Given the following robot its differential kinematics can be described via the Geometric Jacobian matrix indicated below (select the correct one):",
    type: "single-choice",
    image: "./img/RC/HW3/3.png",
    options: [
      { text: "$$\\begin{bmatrix}[z_{1}^{b}\\times(e_{1}^{b}-\\underline{z}_{1}^{b}] & [z_{2}^{b}\\times(e_{1}^{b}-\\underline{z}_{2}^{b})] & \\underline{z}_{3}^{b}\\\\ \\underline{z}_{1}^{b} & \\underline{z}_{2}^{b} & \\underline{0}\\end{bmatrix}$$" },
      { text: "$$\\begin{bmatrix}\\underline{z}_{0}^{b} & \\underline{z}_{1}^{b} & \\underline{z}_{2}^{b}\\\\ \\underline{0} & \\underline{0} & \\underline{0}\\end{bmatrix}$$" },
      { text: "$$\\begin{bmatrix}[{z_{0}}^{b}\\times({e_{t}}^{b}-{z_{0}}^{b})] & [{z_{1}}^{b}\\times({e_{t}}^{b}-{z_{0}}^{b})] & z_{2}^{b}\\\\ {{z_{0}}^{b}} & \\underline{z_{1}}^{b} & \\underline{0} \\end{bmatrix}$$" },
      { text: "$$\\begin{bmatrix}\\underline{z}_{0}^{b} & \\underline{z}_{1}^{b} & [{z_{2}}^{b}\\times(e_{t}^{b}-\\underline{z}_{2}^{b})]\\\\ \\underline{0} & \\underline{0} & \\underline{z}_{2}^{b}\\end{bmatrix}$$" },
      { text: "None of the replies." },
      { text: "$$\\begin{bmatrix}[{z_{0}}^{b}\\times({e_{t}}^{b}-{p_{0}}^{b})] & [{z_{1}}^{b}\\times({e_{t}}^{b}-{p_{1}}^{b})] & z_{2}^{b}\\\\ \\underline{z_{0}}^{b} & \\underline{z_{1}}^{b} & \\underline{0}\\end{bmatrix}$$" }
    ],
    correctAnswer: ["$$\\begin{bmatrix}[{z_{0}}^{b}\\times({e_{t}}^{b}-{p_{0}}^{b})] & [{z_{1}}^{b}\\times({e_{t}}^{b}-{p_{1}}^{b})] & z_{2}^{b}\\\\ \\underline{z_{0}}^{b} & \\underline{z_{1}}^{b} & \\underline{0}\\end{bmatrix}$$"],
    points: 1
  },
  {
    id: 4,
    question: "Given a 6 axes robot manipulator in the 3D space and the following mathematical expression: $$\\frac{d}{dt}\\frac{\\partial\\mathcal{L}}{\\partial\\dot{q}_{i}}-\\frac{\\partial\\mathcal{L}}{\\partial q_{i}}=\\xi_{i}$$ indicate which of the following claims are true.",
    type: "single-choice",
    options: [
      { text: "The mathematical expression represents the Lagrange equation of the robot relying on which the overall dynamic model of robot is determined." },
      { text: "Considering the mathematical expression, 3 equations of this type are needed to describe the manipulator dynamics." },
      { text: "None of the replies." },
      { text: "The mathematical expression includes the Lagrangian of the mechanical system which describes the difference between U and T." },
      { text: "Considering the mathematical expression, 6 equations of this type are needed to describe the manipulator dynamics." },
      { text: "The mathematical expression includes the Lagrangian of the mechanical system which describes the sum between T and U." },
      { text: "The mathematical expression represents the Newton-Euler equation of the robot relying on which the overall dynamic model of robot is determined." },
      { text: "Considering the mathematical expression, m equations of this type are needed to describe the differential kinematics of the manipulator." }
    ],
    correctAnswer: ["Considering the mathematical expression, 6 equations of this type are needed to describe the manipulator dynamics."],
    points: 1
  },
  {
    id: 5,
    question: "In the expression of the total kinetic energy of a robot manipulator with degrees of mobility: $$\\mathcal{T}=\\frac{1}{2}\\sum_{i=1}^{n}\\sum_{j=1}^{n}b_{ij}(q)\\dot{q}_{i}\\dot{q}_{j}=\\frac{1}{2}\\dot{q}^{T}\\mathcal{B}(q)\\dot{q}$$ matrix $B(q)$ is the $6\\times n$ inertia matrix, which is a function of the joint variables vector q",
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
    question: "Given the analytic transformation matrix $T_{A}(\\phi)$ the relationship between the geometric Jacobian matrix and the analytic Jacobian matrix of a robot manipulator can be expressed as follows:",
    type: "single-choice",
    image: "./img/RC/HW3/6.png",
    options: [
      { text: "$J(q)=T_{A}(\\phi)J_{A}^{T}(q)$" },
      { text: "None of the replies." },
      { text: "$J(q)=T_{A}^{-1}(\\phi)J_{A}(q)$" },
      { text: "$J(\\underline{q})=T_{A}^{T}(\\phi)J_{A}(\\underline{q})$" },
      { text: "$J_{A}(q)=T_{A}(\\phi)J(\\underline{q})$" },
      { text: "$J(\\underline{q})=T_{A}(\\phi)J_{A}^{-1}(\\underline{q})$" },
      { text: "$J(\\underline{q})=T_{A}(\\phi)J_{A}(\\underline{q})$" }
    ],
    correctAnswer: ["$J(\\underline{q})=T_{A}(\\phi)J_{A}(\\underline{q})$"],
    points: 1
  },
  {
    id: 7,
    question: "Given the minimal description of the orientation indicated in the picture, where $\\phi=[\\varphi,\\theta,\\psi]^{T}$ the following matrix: $$T_{ETIAny}(\\phi)=\\begin{bmatrix}0&-sin(\\varphi(t))sin(\\vartheta(t))&cos(\\varphi(t))\\\\ 0&cos(\\varphi(t))&sin(\\vartheta(t))sin(\\varphi(t))\\\\ 1&0&cos(\\vartheta(t))\\end{bmatrix}$$ enables to transform the angular velocity vector of the robot end-effector into the quantity $\\dot{\\phi}$",
    type: "single-choice",
    image: "./img/RC/HW3/7.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 8,
    question: "Given the robot manipulator in the picture: then, the elements $J_{i,j}(q)$ of the geometric Jacobian matrix of the robot with (i,j) equal to (1,2) and (2,3) are equal to -1 and 1, respectively.",
    type: "single-choice",
    image: "./img/RC/HW3/8.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Vero"],
    points: 1
  },
  {
    id: 9,
    question: "The Lagrange formulation enables to determine the dynamic model of a robot manipulator through the following steps",
    type: "multiple-choice",
    options: [
      { text: "1. Select the joint variables\n2. Determine the Jacobian of the system\n3. Determine the Lagrange Equations" },
      { text: "1. Select the generalized coordinates\n2. Determine the Lagrangian of the system\n3. Determine the Lagrange Equations." },
      { text: "1. Select the joint variables\n2. Determine the Lagrangian of the system\n3. Determine the Lagrange Equations." },
      { text: "1. Select the joint variables\n2. Determine the Lagrangian of the system\n3. Determine the Euler Equations." },
      { text: "None of the replies." },
      { text: "1. Select the motor variables\n2. Determine the Lagrangian of the system\n3. Determine the Lagrange Equations." },
      { text: "1. Select the Euler angles\n2. Determine the Lagrangian of the system\n3. Determine the Lagrange Equations." }
    ],
    correctAnswer: [
      "1. Select the joint variables\n2. Determine the Lagrangian of the system\n3. Determine the Lagrange Equations.",
      "1. Select the generalized coordinates\n2. Determine the Lagrangian of the system\n3. Determine the Lagrange Equations."
    ],
    points: 4
  }
];