// ESAME rc 2024-06-20

const quizData = [
  {
    id: 1,
    question: "Given the 3-axes cartesian robot in the picture, the indicated choices of the DH reference frames are wrong.",
    type: "single-choice",
    image: "./img/RC/20240620/1.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 2,
    question: "Given the matrix \n\n A_1^0 = [matrix image/text] \n\n the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/20240620/2.png",
    options: [
      { text: "Reference frame with index 0 has been obtained from reference frame with index 1 performing an elementary rotation of 45° around its x axis, and a translation." },
      { text: "The origin of reference frame with index 1 is translated in space with respect to the origin of reference frame with index 0." },
      { text: "It describes the pure translation of reference frame with index 0 with respect to reference frame with index 1." },
      { text: "Its inverse is equal to its transpose." },
      { text: "Reference frame with index 1 has been obtained from reference frame with index 0 performing an elementary rotation of -45° around its x axis, and a translation." },
      { text: "None of the replies." },
      { text: "It is an homogeneous transformation matrix." },
      { text: "Reference frame with index 1 has been obtained from reference frame with index 0 performing an elementary rotation of 45° around its z axis, and a translation." },
      { text: "Reference frame with index 1 has been obtained from reference frame with index 0 performing an elementary rotation of 45° around its x axis, and a translation." },
      { text: "The translation to make the origin O_0 coincide with the origin O_1 is elementary." },
      { text: "It describes the roto-translation of reference frame with index 1 with respect to reference frame with index 0." }
    ],
    correctAnswer: [
      "It is an homogeneous transformation matrix.",
      "It describes the roto-translation of reference frame with index 1 with respect to reference frame with index 0.",
      "Reference frame with index 1 has been obtained from reference frame with index 0 performing an elementary rotation of 45° around its x axis, and a translation.",
      "The origin of reference frame with index 1 is translated in space with respect to the origin of reference frame with index 0."
    ],
    points: 4
  },
  {
    id: 3,
    question: "Given the control scheme",
    type: "multiple-choice",
    image: "./img/RC/20240620/3.png",
    options: [
      { text: "If measurements of operational space quantities are indirect, the controller has to compute the differential kinematics to determine the pose vector." },
      { text: "The control scheme can guarantee the asymptotic reaching of a constant equilibrium pose starting from any initial pose." },
      { text: "The scheme implements a PD control with gravity compensation in the operational space." },
      { text: "The scheme performs a nonlinear compensation of the configuration dependent gravitational generalized forces." },
      { text: "If measurements of operational space quantities are indirect, the controller has to compute the inverse kinematics to determine the pose vector." },
      { text: "The scheme implements a PD control with gravity compensation in the joints space." },
      { text: "The control scheme can guarantee the asymptotic tracking of a time-varying equilibrium pose starting from any initial pose." },
      { text: "None of the replies." },
      { text: "The control scheme can guarantee the finite time reaching of a constant equilibrium pose starting from any initial pose." },
      { text: "If measurements of operational space quantities are indirect, the controller has to compute the direct kinematics function to determine the pose vector." }
    ],
    correctAnswer: [
      "The scheme implements a PD control with gravity compensation in the operational space.",
      "The scheme performs a nonlinear compensation of the configuration dependent gravitational generalized forces.",
      "If measurements of operational space quantities are indirect, the controller has to compute the direct kinematics function to determine the pose vector.",
      "The control scheme can guarantee the asymptotic reaching of a constant equilibrium pose starting from any initial pose."
    ],
    points: 4
  },
  {
    id: 4,
    question: "The following scheme implements a direct interaction control for robot manipulators.",
    type: "single-choice",
    image: "./img/RC/20240620/4.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 5,
    question: "Given the following picture the following claims are false:",
    type: "multiple-choice",
    image: "./img/RC/20240620/5.png",
    options: [
      { text: "Reference frame O_i - x_i y_i z_i is associated with joint i." },
      { text: "a_i is the offset of joint i." },
      { text: "None of the replies." },
      { text: "The z axes of two subsequent referent frames can be orthogonal." },
      { text: "O_i and O'_i are always placed on different joint axes." },
      { text: "The z axis of the reference frame associated with the end effector has to be parallel to the z axis of the wrist." },
      { text: "theta_i is the twist angle of joint i." },
      { text: "The choice of axis x_0 is arbitrary." }
    ],
    correctAnswer: [
      "Reference frame O_i - x_i y_i z_i is associated with joint i.",
      "a_i is the offset of joint i.",
      "O_i and O'_i are always placed on different joint axes.",
      "theta_i is the twist angle of joint i.",
      "None of the replies."
    ],
    points: 4
  },
  {
    id: 6,
    question: "Given a SCARA manipulator, the following scheme describes its motion control in the joint space when a decentralized approach is adopted for the design:",
    type: "single-choice",
    image: "./img/RC/20240620/6.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 7,
    question: "The following formula:\n\n$R_2^0 = R_z(-\\alpha)R_x(\\gamma)$\n\ndescribes the rotation matrix of the reference frame $O_2 - x_2y_2z_2$ w.r.t. the one with index 0. The reference frame with index 2 has been obtained starting from the reference $O_0 - x_0y_0z_0$ and performing two subsequent elementary rotations, the first one clockwise and the second on counterclockwise.",
    type: "single-choice",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Vero"],
    points: 1
  },
  {
    id: 8,
    question: "Given the robot in the picture (source: Franka Emika) and its specifications:\nControlled axes: 7; Max payload: 3 [Kg]; Reach: 855 [mm]; Repeatability: 1,25 [mm];\nselect the correct claims:",
    type: "multiple-choice",
    image: "./img/RC/20240620/8.png",
    options: [
      { text: "The manipulator is functionally redundant." },
      { text: "Its Reachable Workspace is an empty set." },
      { text: "The robot cannot be used to perform planar motions." },
      { text: "Its Primary Workspace is a circle of radius 855 [mm]." },
      { text: "In its Primary Workspace multiple solutions to the inverse kinematics problem do not exist." },
      { text: "Its Reachable Workspace is a circle of radius 855 [mm]." },
      { text: "Its Dexterous Workspace is a circle of radius 855 [mm]." },
      { text: "The manipulator is intrinsically redundant." },
      { text: "The manipulator may be redundant depending on the task it must perform." },
      { text: "None of the replies." },
      { text: "In its Primary Workspace multiple solutions to the inverse kinematics problem can exist." }
    ],
    correctAnswer: [
      "The manipulator is intrinsically redundant.",
      "In its Primary Workspace multiple solutions to the inverse kinematics problem can exist."
    ],
    points: 4
  },
  {
    id: 9,
    question: "Given the situation illustrated below and $o_1^0 = [1 2 -1]^T$ determine the homogeneous transformation matrix describing the roto-translation of reference frame $O_1 - x_1y_1z_1$ w.r.t. $O_0 - x_0y_0z_0$. Then, select the correct claims:",
    type: "multiple-choice",
    image: "./img/RC/20240620/9.png",
    options: [
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to -sqrt(2)/2 and element (3, 4) is equal to 1" },
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to 1 and element (3, 4) is equal to -1" },
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to 1 and element (3, 4) is equal to 2" },
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to 1 and element (3, 4) is equal to 1" },
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to sqrt(2)/2 and element (3, 4) is equal to 1" },
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to sqrt(2)/2 and element (3, 4) is equal to 2" },
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to sqrt(2)/2 and element (3, 4) is equal to -1" },
      { text: "Element (2, 3) of the homogeneous transformation matrix is equal to -sqrt(2)/2 and element (3, 4) is equal to -1" },
      { text: "None of the replies" }
    ],
    correctAnswer: [
      "Element (2, 3) of the homogeneous transformation matrix is equal to -sqrt(2)/2 and element (3, 4) is equal to -1"
    ],
    points: 4
  },
  {
    id: 10,
    question: "Given the minimal description of the orientation indicated in the picture, where phi = [phi, theta, psi]^T the following matrix:\n\n[Matrix Image/Text]\n\nenables to transform the quantity dot{phi} into the angular velocity vector of the robot end-effector",
    type: "single-choice",
    image: "./img/RC/20240620/10.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Vero"],
    points: 1
  }
];