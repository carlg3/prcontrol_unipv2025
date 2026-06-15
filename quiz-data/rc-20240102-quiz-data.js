// Homework 2 - 2024

const quizData = [
  {
    id: 1,
    question: "Given a point belonging to the Secondary Workspace of a robot, then there exists a solution to the inverse kinematics problem for any required orientation.",
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
    id: 2,
    question: "Given a 3 axes planar anthropomorphic robot manipulator in the plane [x,y] with links of equal lengths $l$, then the inverse kinematics problems has a nonsingular solution if the required position for the origin of the tool reference frame (placed at the end of the third link) is at point $p=[p_{x},p_{y}]^{T}$ with $||p||=3l$",
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
    id: 3,
    question: "Given a robot manipulator, with reference to the inverse kinematics problem, the following claims are true:",
    type: "multiple-choice",
    options: [
      { text: "Infinite solutions are always possible." },
      { text: "It is not guaranteed that a closed form analytic solution can be found." },
      { text: "It may happen that the solutions are multiple." },
      { text: "The presence of mechanical limit switches may increase the number of multiple solution." },
      { text: "Singular solutions are not possible." },
      { text: "Multiple solutions are not possible." },
      { text: "None of the replies." },
      { text: "The equations to solve are in general LTI." },
      { text: "A solution always exists." },
      { text: "The equations to solve are in general nonlinear." }
    ],
    correctAnswer: [
      "The equations to solve are in general nonlinear.",
      "It is not guaranteed that a closed form analytic solution can be found.",
      "It may happen that the solutions are multiple."
    ],
    points: 4
  },
  {
    id: 4,
    question: "Given the following picture select the correct claims:",
    type: "multiple-choice",
    image: "./img/RC/20240102/04.png",
    options: [
      { text: "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using a nonminimal representation." },
      { text: "None of the replies." },
      { text: "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the RPY Angles." },
      { text: "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the Euler's Angles." },
      { text: "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the ZYZ Euler's Angles Set." },
      { text: "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the ZYX Euler's Angles Set." },
      { text: "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the XYZ Euler's Angles Set." },
      { text: "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the YZY Euler's Angles Set." }
    ],
    correctAnswer: [
      "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the ZYZ Euler's Angles Set.",
      "It describes the orientation of the Tool Reference Frame w.r.t. the Base Reference Frame using the Euler's Angles."
    ],
    points: 4
  },
  {
    id: 5,
    question: "Given the robot in the picture (source: https://www.fanucamerica.com) and its specifications, select the correct claims:",
    type: "multiple-choice",
    image: "./img/RC/20240102/05.png",
    options: [
      { text: "The manipulator may be redundant depending on the task it must perform." },
      { text: "None of the replies." },
      { text: "The manipulator is functionally redundant." },
      { text: "In its Primary Workspace multiple solutions to the inverse kinematics problem can exist." },
      { text: "The manipulator is intrinsically redundant." },
      { text: "Its Reachable Workspace is a circle of radius 2230 [mm]." },
      { text: "Its Dexterous Workspace is a circle of radius 2230 [mm]." },
      { text: "In its Primary Workspace multiple solutions to the inverse kinematics problem do not exist." },
      { text: "Its Primary Workspace is a circle of radius 2230 [mm]." }
    ],
    correctAnswer: [
      "The manipulator is intrinsically redundant.",
      "In its Primary Workspace multiple solutions to the inverse kinematics problem can exist."
    ],
    points: 4
  },
  {
    id: 6,
    question: "Given the picture where the coloured joint is the one moving, the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/20240102/06.png",
    options: [
      { text: "In correspondence of Config. a the robot Analytic Jacobian Matrix loses rank. The rank does not vary in Config. b." },
      { text: "In correspondence of both configurations the robot Analytic Jacobian Matrix does not lose rank." },
      { text: "There is a loss of DoMs from 3 to 1 in Config. a, and from 2 to 1 in Config. b." },
      { text: "There is a loss of DoMs from 2 to 1 in both cases." },
      { text: "In correspondence of both configurations the robot Analytic Jacobian Matrix loses rank." },
      { text: "There is a loss of DoMs from 3 to 1 in Config. a, and from 3 to 2 in Config. b." },
      { text: "In correspondence of Config. b the robot Analytic Jacobian Matrix loses rank. The rank does not vary in Config. a." },
      { text: "There is a loss of DoMs from 3 to 1 in both cases." },
      { text: "None of the replies." }
    ],
    correctAnswer: [
      "There is a loss of DoMs from 3 to 1 in both cases.",
      "In correspondence of both configurations the robot Analytic Jacobian Matrix loses rank."
    ],
    points: 4
  },
  {
    id: 7,
    question: "Given the following picture: solve the inverse kinematic problem when $p_{x}=\\frac{2\\sqrt{2}+3}{2}$ and $p_{y}=\\frac{2\\sqrt{2}+3\\sqrt{3}}{2}$. Then, select the correct solution/solutions:",
    type: "single-choice",
    image: "./img/RC/20240102/07.png",
    options: [
      { text: "$q_{1}=\\frac{\\pi}{12}$, $q_{2}=\\frac{\\pi}{4}$" },
      { text: "$q_{1}=\\frac{\\pi}{6}$, $q_{2}=\\frac{\\pi}{6}$" },
      { text: "$q_{1}=\\frac{\\pi}{12}$, $q_{2}=\\frac{\\pi}{3}$" },
      { text: "$q_{1}=\\frac{\\pi}{4}$, $q_{2}=\\frac{\\pi}{3}$" },
      { text: "$q_{1}=\\frac{\\pi}{4}$, $q_{2}=\\frac{\\pi}{6}$" },
      { text: "$q_{1}=\\frac{\\pi}{3}$, $q_{2}=\\frac{\\pi}{4}$" },
      { text: "$q_{1}=\\frac{\\pi}{3}$, $q_{2}=\\frac{\\pi}{12}$" },
      { text: "$q_{1}=\\frac{\\pi}{6}$, $q_{2}=\\frac{\\pi}{4}$" },
      { text: "$q_{1}=\\frac{\\pi}{4}$, $q_{2}=\\frac{\\pi}{4}$" },
      { text: "None of the replies." },
      { text: "$q_{1}=\\frac{\\pi}{3}$, $q_{2}=\\frac{\\pi}{6}$" },
      { text: "$q_{1}=\\frac{\\pi}{6}$, $q_{2}=\\frac{\\pi}{12}$" },
      { text: "$q_{1}=\\frac{\\pi}{4}$, $q_{2}=\\frac{\\pi}{12}$" },
      { text: "$q_{1}=\\frac{\\pi}{3}$, $q_{2}=\\frac{\\pi}{3}$" },
      { text: "$q_{1}=\\frac{\\pi}{12}$, $q_{2}=\\frac{\\pi}{3}$" }
    ],
    correctAnswer: [
      "$q_{1}=\\frac{\\pi}{4}$, $q_{2}=\\frac{\\pi}{12}$"
    ],
    points: 1
  },
  {
    id: 8,
    question: "The following formula: $\\underline{q}^{k+1} =\\underline{q}^{k}+\\alpha J_{A}^{T}(x(\\underline{q})-x(\\underline{q}^{k}))$ with $x(\\underline{q})=x^{*}$ being the desired pose of the robot end-effector, describes the Newton method for the solution of the inverse kinematic problem.",
    type: "single-choice",
    options: [
      { text: "True" },
      { text: "False" }
    ],
    correctAnswer: [
      "False"
    ],
    points: 1
  }
];