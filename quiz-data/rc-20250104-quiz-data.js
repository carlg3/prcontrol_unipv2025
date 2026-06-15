// HW4 

const quizData = [
  {
    id: 1,
    question: "Given the expression $$\\mathcal{U}_{l_{i}}=-\\int_{V_{l_{i}}}\\underline{g}_{0}^{T}\\underline{p}_{i}^{*}\\rho dV=-m_{l_{i}}\\underline{g}_{0}^{T}p_{l_{i}}$$ the following claims are true:",
    type: "single-choice",
    options: [
      { text: "It is the contribution to the potential energy of a generic link due only to gravitational forces, under the assumption of rigid link." },
      { text: "It is the contribution to the potential energy of a generic link due only to gravitational forces." },
      { text: "It is the contribution to the potential energy of a robot manipulator due only to gravitational forces, under the assumption of rigid links." },
      { text: "None of the replies." },
      { text: "It is the contribution to the potential energy of a generic motor due to the conservative forces." },
      { text: "It is the contribution to the kinetic energy of a generic link due only to gravitational forces, under the assumption of rigid link." },
      { text: "It is the contribution to the potential energy of a generic motor due only to gravitational forces." },
      { text: "It is the contribution to the kinetic energy of a generic link due to the conservative forces, under the assumption of rigid link." },
      { text: "It is the contribution to the potential energy of a generic link due to the conservative forces, under the assumption of rigid link." }
    ],
    correctAnswer: ["It is the contribution to the potential energy of a generic link due only to gravitational forces, under the assumption of rigid link."],
    points: 1
  },
  {
    id: 2,
    question: "Given the picture it is correct to claim that the end-effector velocity vector can be expressed as $\\underline{v}(t)=[\\dot{o}_{t}(t) \\; \\underline{\\omega}(t)]^T$",
    type: "single-choice",
    image: "./img/RC/HW4/2.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Vero"],
    points: 1
  },
  {
    id: 3,
    question: "The following matrix $$\\begin{bmatrix}0&-1&0\\\\ 0&0&0\\\\ 1&0&0\\\\ 0&0&0\\\\ 0&0&0\\\\ 0&0&1\\end{bmatrix}$$ is the geometric Jacobian matrix of a SCARA when the base reference frame has a z axis directed as the axis of the first joint and pointing up.",
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
    question: "A planar manipulator having 3 axes is intrinsically redundant.",
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
    question: "Consider an initial reference frame $O_{0}-x_{0}y_{0}z_{0}.$ Determine a second reference frame by rotating counterclockwise the previous reference frame of 90 degrees around the axis yo and, again, turning clockwise the obtained frame of 45 degrees around its axis z, obtaining the reference frame $O_{2}-x_{2}y_{2}z_{2}.$ Compute the rotation matrix that describes the transformation of the coordinates of a point expressed in the reference frame $O_{2}-x_{2}y_{2}z_{2}$ into the coordinates of the same point expressed in the reference frame $O_{0}-x_{0}y_{0}z_{0}.$ Then transform the coordinate of point P written w.r.t. $O_{2}-x_{2}y_{2}z_{2}$ as $\\underline{p}^{2}=[\\sqrt{2} \\; \\sqrt{8} \\; 2]^{T}$ into the coordinate of the same point referred to the space described by $O_0$, obtaining $p^{0}.$",
    type: "single-choice",
    options: [
      { text: "$p^{0}=[-2 \\; -1 \\; -3]^{T}$" },
      { text: "$p^{0}=[-\\sqrt{2} \\; -\\sqrt{8} \\; -2]^{T}$" },
      { text: "$p^{0}=[2 \\; 1 \\; 3]^{T}$" },
      { text: "$p^{0}=[\\sqrt{8} \\; \\sqrt{2} \\; -2]^{T}$" },
      { text: "$p^{0}=[-1 \\; -2 \\; -3]^{T}$" },
      { text: "$p^{0}=[-\\sqrt{2} \\; -\\sqrt{8} \\; 2]^{T}$" },
      { text: "$p^{0}=[1 \\; -1 \\; 1]^{T}$" },
      { text: "$p^{0}=[1 \\; 2 \\; 3]^{T}$" },
      { text: "$p^{0}=[-1 \\; 1 \\; -1]^{T}$" },
      { text: "None of the replies." }
    ],
    correctAnswer: ["None of the replies."],
    points: 1
  },
  {
    id: 6,
    question: "Given the scheme the following claim are true:",
    type: "single-choice",
    image: "./img/RC/HW4/6.png",
    options: [
      { text: "It illustrates a force control scheme in the operational space for robot manipulators." },
      { text: "It illustrates a motion control scheme in the joint space for robot manipulators." },
      { text: "None of the replies." },
      { text: "It illustrates a motion control scheme in the operational space for robot manipulators." },
      { text: "It illustrates an interaction control scheme in the joint space for robot manipulators." },
      { text: "It illustrates an interaction control scheme in the operational space for robot manipulators." }
    ],
    correctAnswer: ["It illustrates a motion control scheme in the joint space for robot manipulators."],
    points: 1
  },
  {
    id: 7,
    question: "Given the control scheme the following claims are false:",
    type: "multiple-choice",
    image: "./img/RC/HW4/7.png",
    options: [
      { text: "The scheme implements a decentralized motion control with inner position loop for robot manipulator." },
      { text: "The scheme implements a force control with inner velocity loop for robot manipulator." },
      { text: "None of the replies." },
      { text: "The scheme can be classified as a direct interaction control scheme." },
      { text: "The scheme implements a control in the operational space." },
      { text: "The scheme implements a force control with inner position loop for robot manipulator." }
    ],
    correctAnswer: [
      "The scheme implements a force control with inner velocity loop for robot manipulator.",
      "The scheme implements a decentralized motion control with inner position loop for robot manipulator.",
      "None of the replies."
    ],
    points: 4
  },
  {
    id: 8,
    question: "Given the two reference frames in the picture, select among the following claims those which are true.",
    type: "multiple-choice",
    image: "./img/RC/HW4/8.png",
    options: [
      { text: "Reference Frame $O_{1}-x_{1}y_{1}z_{1}$ is obtained by performing an elementary rotation of the Base Reference Frame around its z axes of an angle $\\gamma$" },
      { text: "$R_{x}(-\\gamma)=R_{x}(\\gamma)R_{x}(\\gamma)^{-1}$" },
      { text: "If $\\gamma=\\frac{\\pi}{2}$ then $R_{x}(\\gamma)=\\begin{bmatrix}1&0&0\\\\ 0&1&0\\\\ 0&0&1\\end{bmatrix}$" },
      { text: "Adding 1 to determinant of the rotation matrix $R_{x}(\\gamma)$ one obtains 0" },
      { text: "None of the replies." },
      { text: "$R_{x}(-\\gamma)=R_{x}(\\gamma)^{T}$" },
      { text: "$R_{1}^{b}=R_{x}(\\gamma)=\\begin{bmatrix}1&0&0\\\\ 0&cos(\\gamma)&-sin(\\gamma)\\\\ 0&sin(\\gamma)&cos(\\gamma)\\end{bmatrix}$" }
    ],
    correctAnswer: [
      "$R_{x}(-\\gamma)=R_{x}(\\gamma)^{T}$",
      "$R_{1}^{b}=R_{x}(\\gamma)=\\begin{bmatrix}1&0&0\\\\ 0&cos(\\gamma)&-sin(\\gamma)\\\\ 0&sin(\\gamma)&cos(\\gamma)\\end{bmatrix}$"
    ],
    points: 4
  },
  {
    id: 9,
    question: "The following robot is a 3-axes spheric robot.",
    type: "single-choice",
    image: "./img/RC/HW4/9.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 10,
    question: "Given the control scheme the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/HW4/10.png",
    options: [
      { text: "A scheme of this type cannot be used without a feedforward compensation." },
      { text: "The exogenous signal entering the scheme after the controller block is a torque." },
      { text: "The scheme is one of the elements of a motion control in the joints space of decentralized type for manipulators when only velocity feedback is used." },
      { text: "The scheme is one of the elements of a motion control in the joints space of decentralized type for manipulators when only position feedback is used." },
      { text: "None of the replies." },
      { text: "$T_{m}$ is the torque generated by the considered motor." },
      { text: "The scheme is a motion control in the joints space of centralized type for manipulators when only position feedback is used." },
      { text: "$T_{P}$ is the homogeneous transformation matrix which described the direct kinematics." },
      { text: "The controller is a PI with gravity compensation." },
      { text: "A scheme of this type must be designed for each joint of the manipulator." },
      { text: "The controller is a proportional controller." },
      { text: "The exogenous signal entering the scheme after the controller block is a voltage." },
      { text: "The controller is a PI." },
      { text: "The exogenous signal entering the scheme after the controller block is a generalized force." }
    ],
    correctAnswer: [
      "A scheme of this type must be designed for each joint of the manipulator.",
      "The controller is a PI.",
      "The exogenous signal entering the scheme after the controller block is a voltage.",
      "The scheme is one of the elements of a motion control in the joints space of decentralized type for manipulators when only position feedback is used."
    ],
    points: 4
  }
];