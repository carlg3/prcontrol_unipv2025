// REZA 2025-01-31

const quizData = [
  {
    id: 4,
    question: "The following scheme implements a direct interaction control for robot manipulators.",
    type: "single-choice",
    image: "./img/RC/20250124/4.png",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["False"],
    points: 2
  },
  {
    id: 5,
    question: "Given a SCARA manipulator, the following scheme describes its motion control in the joint space when a centralized approach is adopted for the design:",
    type: "single-choice",
    image: "./img/RC/20250124/5.png",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["False"],
    points: 2
  },
  {
    id: 6,
    question: "Given the picture, the following claims are false.",
    type: "multiple-choice",
    image: "./img/RC/20250124/6.png",
    options: [
      { text: "The picture describes an elementary rotation expressed by $R_x(\\alpha)$ ", image: "" },
      { text: "The picture describes a rotation expressed by $R_b^1$", image: "" },
      { text: "The picture shows a reference frame rotation occurring counterclockwise.", image: "" },
      { text: "None of the replies.", image: "" }
    ],
    correctAnswer: [
      "The picture describes an elementary rotation expressed by $R_x(\\alpha)$ ",
      "The picture describes a rotation expressed by $R_b^1$",
      "None of the replies."
    ],
    points: 4
  },
  {
    id: 7,
    question: "Given the analytic transformation matrix, the relationship between the geometric Jacobian matrix and the analytic Jacobian matrix of a robot manipulator can be expressed as follows:",
    type: "single-choice",
    image: "",
    options: [
      { text: "$J(\\underline{q}) = T_T(\\phi) J_T(\\underline{q})$", image: "" },
      { text: "$J(\\underline{q}) = T_{T0}^{-1}(\\phi) J_T(\\underline{q})$", image: "" },
      { text: "$J_T(q) = T_T(\\phi) J(\\phi)$", image: "" },
      { text: "None of the replies.", image: "" }
    ],
    correctAnswer: ["$J(\\underline{q}) = T_T(\\phi) J_T(\\underline{q})$"],
    points: 4
  },
  {
    id: 8,
    question: "The description of a rigid object orientation via a rotation matrix can be obtained by composing 3 elementary rotation matrices based on the Euler's angles. This leads to 27 different options, but 12 of them are not acceptable since they correspond to cases when subsequent rotations occur around parallel rotation axes.",
    type: "single-choice",
    image: "",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["False"],
    points: 1
  },
  {
    id: 9,
    question: "The following differential equation $M_d\\underline{\\ddot{x}} + K_D\\underline{\\dot{x}} + K_P\\underline{\\tilde{x}} = M_d B_A^{-1}(\\underline{q})\\underline{h}_A$ describes the dynamics of the controlled robot manipulator when the impedance control is applied without using the measurement of the generalized contact forces.",
    type: "single-choice",
    image: "",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["True"],
    points: 2
  },
  {
    id: 10,
    question: "The robot illustrated in the following picture has 3 axes.",
    type: "single-choice",
    image: "./img/RC/20250124/10.png",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["True"],
    points: 1
  },
  {
    id: 11,
    question: "Given the picture with Config. a and Config. b, where the colored joint is the one moving, identify the true claims:",
    type: "multiple-choice",
    image: "./img/RC/20250124/11.png",
    options: [
      { text: "There is a loss of DoMs from 3 to 1 in both cases.", image: "" },
      { text: "In correspondence of both configurations the robot Analytic Jacobian Matrix loses rank.", image: "" },
      { text: "There is a loss of DoMs from 3 to 1 in Config. a, and from 3 to 2 in Config. b.", image: "" }
    ],
    correctAnswer: [
      "There is a loss of DoMs from 3 to 1 in both cases.",
      "In correspondence of both configurations the robot Analytic Jacobian Matrix loses rank."
    ],
    points: 4
  },
  {
    id: 12,
    question: "Given a point belonging to the Secondary Workspace of a robot, then there exists a solution to the inverse kinematics problem for any required orientation.",
    type: "single-choice",
    image: "",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["True"],
    points: 1
  },
  {
    id: 13,
    question: "Given the picture, the transformation matrices indicated below are correct:",
    type: "single-choice",
    image: "./img/RC/20250124/13.png",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["True"],
    points: 1
  },
  {
    id: 14,
    question: "Given the 3-axes cartesian robot in the picture, the indicated choices of the DH reference frames are wrong.",
    type: "single-choice",
    image: "./img/RC/20250124/14.png",
    options: [
      { text: "True", image: "" },
      { text: "False", image: "" }
    ],
    correctAnswer: ["False"],
    points: 1
  },
  {
    id: 15,
    question: "Given the matrix $A_1^0$, which of the following claims are true?",
    type: "multiple-choice",
    image: "./img/RC/20250124/15.png",
    options: [
      { text: "It is a homogeneous transformation matrix.", image: "" },
      { text: "It describes the roto-translation of reference frame 1 with respect to frame 0.", image: "" },
      { text: "Reference frame 1 has been obtained from frame 0 performing an elementary rotation of $45^{\\circ}$ around its x axis, and a translation.", image: "" },
      { text: "The origin of reference frame with index 1 is translated into space with respect to the origin of reference frame with index 0.", image: "" }
    ],
    correctAnswer: [
      "It is a homogeneous transformation matrix.",
      "It describes the roto-translation of reference frame 1 with respect to frame 0.",
      "Reference frame 1 has been obtained from frame 0 performing an elementary rotation of $45^{\\circ}$ around its x axis, and a translation.",
      "The origin of reference frame with index 1 is translated into space with respect to the origin of reference frame with index 0."
    ],
    points: 4
  },
  {
    id: 16,
    question: "Given the control scheme in the operational space, which of the following claims are true?",
    type: "multiple-choice",
    image: "./img/RC/20250124/16.png",
    options: [
      { text: "The scheme implements a PD control with gravity compensation in the operational space.", image: "" },
      { text: "The scheme performs a nonlinear compensation of the configuration dependent gravitational generalized forces.", image: "" },
      { text: "If measurements of operational space quantities are indirect, the controller has to compute the direct kinematics function to determine the pose vector.", image: "" },
      { text: "The control scheme can guarantee the asymptotic reaching of a constant equilibrium pose starting from any initial pose.", image: "" }
    ],
    correctAnswer: [
      "The scheme implements a PD control with gravity compensation in the operational space.",
      "The scheme performs a nonlinear compensation of the configuration dependent gravitational generalized forces.",
      "If measurements of operational space quantities are indirect, the controller has to compute the direct kinematics function to determine the pose vector.",
      "The control scheme can guarantee the asymptotic reaching of a constant equilibrium pose starting from any initial pose."
    ],
    points: 4
  }
];