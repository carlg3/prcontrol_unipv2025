const quizData = [
  {
    id: 1,
    question: "The formula\n$$ \\underline{p}^0 = \\underline{o}^0_1 + \\underline{p}^0_1 = \\underline{o}^0_1 + R^0_1 \\underline{p}^1 $$\n describes how to find the coordinate of a point P in the reference frame with index 0 knowing its coordinate in the reference frame with index 1.",
    type: "single-choice",
    image: "./img/RC/20260122/1.png",
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
    id: 2,
    question: "The following scheme\n[Image]\nimplements a direct interaction control for robot manipulators.",
    type: "single-choice",
    image: "./img/RC/20260122/2.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: [
      "Falso"
    ],
    points: 1
  },
  {
    id: 3,
    question: "Which of the following reference frames are not conventional Tool Reference Frames?",
    type: "multiple-choice",
    image: "./img/RC/20260122/3.png",
    options: [
      { text: "a)" },
      { text: "f)" },
      { text: "c)" },
      { text: "None of the reference frames" },
      { text: "e)" },
      { text: "d)" },
      { text: "b)" }
    ],
    correctAnswer: [
      "a)",
      "c)",
      "e)",
      "f)"
    ],
    points: 4
  },
  {
    id: 4,
    question: "The description of a rigid object orientation via a rotation matrix can be obtained by composing 3 elementary rotation matrices based on the Euler's angles. This leads to 27 different options, but 12 of them are not acceptable since they correspond to cases when subsequent rotations occur around parallel rotation axes.",
    type: "single-choice",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: [
      "Falso"
    ],
    points: 1
  },
  {
    id: 5,
    question: "Given a robot manipulator, by using the notation of the course, the angular velocity vector of the end-effector can be determined as:\n$$ J_o(\\underline{q}(t))\\dot{\\underline{q}}(t) $$",
    type: "single-choice",
    image: "./img/RC/20260122/5.png",
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
    id: 6,
    question: "Given the picture:\n[Image]\nwhere the coloured joint is the one moving, the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/20260122/6.png",
    options: [
      { text: "None of the replies." },
      { text: "There is a loss of DoMs from 2 to 1 in both cases." },
      { text: "There is a loss of DoMs from 3 to 1 in Config. a, and from 3 to 2 in Config. b." },
      { text: "There is a loss of DoMs from 3 to 1 in both cases." },
      { text: "In correspondence of both configurations the robot Analytic Jacobian Matrix loses rank." },
      { text: "In correspondence of both configurations the robot Analytic Jacobian Matrix does not lose rank." },
      { text: "There is a loss of DoMs from 3 to 1 in Config. a, and from 2 to 1 in Config. b." },
      { text: "In correspondence of Config. a the robot Analytic Jacobian Matrix loses rank. The rank does not vary in Config. b." },
      { text: "In correspondence of Config. b the robot Analytic Jacobian Matrix loses rank. The rank does not vary in Config. a." }
    ],
    correctAnswer: [
      "There is a loss of DoMs from 3 to 1 in both cases.",
      "In correspondence of both configurations the robot Analytic Jacobian Matrix loses rank."
    ],
    points: 4
  },
  {
    id: 7,
    question: "The following picture:\n[Image]\nillustrates the DH reference frames, the DH parameter and the joint $i$ velocity vector which must be considered to determine column $i$ of the Geometric Jacobian Matrix of the robot when joint $i$ is prismatic.",
    type: "single-choice",
    image: "./img/RC/20260122/7.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: [
      "Falso"
    ],
    points: 1
  },
  {
    id: 8,
    question: "Given the following scheme\n[Image]\nfind the correct claims.",
    type: "multiple-choice",
    image: "./img/RC/20260122/8.png",
    options: [
      { text: "None of the replies." },
      { text: "It enables to solve a motion control problem for robot manipulators in the operational space." },
      { text: "It enables to solve an interaction control problem for robot manipulators in the operational space." },
      { text: "It enables to solve a motion control problem for robot manipulators in the joint space." },
      { text: "It is designed using a decentralized approach in the operational space." },
      { text: "It implements an inverse dynamics control in the joint space." },
      { text: "It implements an inverse dynamics control in the operational space." },
      { text: "It is designed using a decentralized approach in the joint space." },
      { text: "It enables to solve an interaction control problem for robot manipulators in the joint space." }
    ],
    correctAnswer: [
      "It implements an inverse dynamics control in the operational space.",
      "It enables to solve a motion control problem for robot manipulators in the operational space."
    ],
    points: 4
  },
  {
    id: 9,
    question: "Given the picture and the notation adopted in the course, the following mathematical expressions are correct.",
    type: "multiple-choice",
    image: "./img/RC/20260122/9.png",
    options: [
      { text: "None of the replies." },
      { text: "$$ R^{b^T}_t R^b_t = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = I $$" },
      { text: "$$ \\underline{o}^b_t = \\underline{o}^b_{t_x}\\underline{x}_b + \\underline{o}^b_{t_y}\\underline{y}_b + \\underline{o}^b_{t_z}\\underline{z}_b $$" },
      { text: "$$ R^b_t = \\begin{bmatrix} \\underline{x}^b_t & \\vdots & \\underline{y}^b_t & \\vdots & \\underline{z}^b_t \\end{bmatrix} = \\begin{bmatrix} x^b_{t_x} & y^b_{t_x} & z^b_{t_x} \\\\ x^b_{t_y} & y^b_{t_y} & z^b_{t_y} \\\\ x^b_{t_z} & y^b_{t_z} & z^b_{t_z} \\end{bmatrix} $$" },
      { text: "$$ R^{b^T}_t = R^b_t $$" },
      { text: "$$ \\underline{o}^b_t = [o^b_{t_x}, o^b_{t_y}, o^b_{t_z}]^T $$" },
      { text: "$$ \\det\\{R^{b^T}_t\\} = -1 $$" },
      { text: "$$ R^b_t = \\begin{bmatrix} \\underline{s}^b & \\underline{a}^b & \\underline{n}^b \\end{bmatrix} $$" }
    ],
    correctAnswer: [
      "$$ \\underline{o}^b_t = [o^b_{t_x}, o^b_{t_y}, o^b_{t_z}]^T $$",
      "$$ \\underline{o}^b_t = \\underline{o}^b_{t_x}\\underline{x}_b + \\underline{o}^b_{t_y}\\underline{y}_b + \\underline{o}^b_{t_z}\\underline{z}_b $$",
      "$$ R^b_t = \\begin{bmatrix} \\underline{x}^b_t & \\vdots & \\underline{y}^b_t & \\vdots & \\underline{z}^b_t \\end{bmatrix} = \\begin{bmatrix} x^b_{t_x} & y^b_{t_x} & z^b_{t_x} \\\\ x^b_{t_y} & y^b_{t_y} & z^b_{t_y} \\\\ x^b_{t_z} & y^b_{t_z} & z^b_{t_z} \\end{bmatrix} $$",
      "$$ R^{b^T}_t R^b_t = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = I $$"
    ],
    points: 4
  },
  {
    id: 10,
    question: "Given the SCARA manipulator in the picture, with the choice of the joint variables there indicated, the homogeneous transformation matrix which describes the direct kinematics of the robot, obtained using the geometric approach, is not the following:\n$$ T^b_t(\\underline{q}) = \\begin{bmatrix} -s_{12} & c_{12} & 0 & -[l_2 s_1 + l_3 s_{12}] \\\\ c_{12} & s_{12} & 0 & l_2 c_1 + l_3 c_{12} \\\\ 0 & 0 & -1 & x_3 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} $$",
    type: "single-choice",
    image: "./img/RC/20260122/10.png",
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
    id: 11,
    question: "The dynamic model of a robot manipulator can be derived in a systematic way, independently of the reference coordinate frame which is adopted, by writing the following Euler's equations:\n$$ \\frac{d}{dt} \\frac{\\partial \\mathcal{L}}{\\partial \\dot{q}_i} - \\frac{\\partial \\mathcal{L}}{\\partial q_i} = \\xi_i \\quad i=1,\\dots,n $$\nwhere $n$ is the number of joints of the robot.",
    type: "single-choice",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: [
      "Falso"
    ],
    points: 1
  },
  {
    id: 12,
    question: "Given the formula in the picture\n[Image]\nthen one can conclude that the geometric Jacobian is a matrix of dimension $n \\times 6$",
    type: "single-choice",
    image: "./img/RC/20260122/12.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: [
      "Falso"
    ],
    points: 1
  },
  {
    id: 13,
    question: "The following expression describing a composition of rotation matrices is wrong:\n$$ R^0_4 = R^0_1 R^1_2 R^2_3 R^3_4 $$",
    type: "single-choice",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: [
      "Falso"
    ],
    points: 1
  }
];