// ESAME 2025-07-25

const quizData = [
    {
        id: 1,
        question: "Given the control scheme [Image] the following claims are true:",
        type: "multiple-choice",
        image: "./img/RC/20250725/1.png",
        options: [
            { text: "If measurements of operational space quantities are indirect, the controller has to compute the inverse kinematics to determine the pose vector." },
            { text: "None of the replies." },
            { text: "The scheme performs a nonlinear compensation of the configuration dependent gravitational generalized forces." },
            { text: "The scheme implements a PD control with gravity compensation in the operational space." },
            { text: "If measurements of operational space quantities are indirect, the controller has to compute the differential kinematics to determine the pose vector." },
            { text: "The control scheme can guarantee the asymptotic reaching of a constant equilibrium pose starting from any initial pose." },
            { text: "The control scheme can guarantee the finite time reaching of a constant equilibrium pose starting from any initial pose." },
            { text: "The scheme implements a PD control with gravity compensation in the joints space." },
            { text: "If measurements of operational space quantities are indirect, the controller has to compute the direct kinematics function to determine the pose vector." },
            { text: "The control scheme can guarantee the asymptotic tracking of a time-varying equilibrium pose starting from any initial pose." }
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
        id: 2,
        question: "Given the scheme [Image] the following claim are true:",
        type: "multiple-choice",
        image: "./img/RC/20250725/2.png",
        options: [
            { text: "It illustrates an interaction control scheme in the operational space for robot manipulators." },
            { text: "It illustrates a force control scheme in the operational space for robot manipulators." },
            { text: "It illustrates a motion control scheme in the joint space for robot manipulators." },
            { text: "None of the replies." },
            { text: "It illustrates a motion control scheme in the operational space for robot manipulators." },
            { text: "It illustrates an interaction control scheme in the joint space for robot manipulators." }
        ],
        correctAnswer: ["It illustrates a motion control scheme in the joint space for robot manipulators."],
        points: 4
    },
    {
        id: 3,
        question: "Given the robot manipulator and the homogeneous transformation matrix describing its direct kinematics below: [Image] the corresponding choice of the joint variables is the following: [Image]",
        type: "single-choice",
        image: "./img/RC/20250725/3a.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 4,
        question: "The formula $p^0 = o_1^0 + p_1^0 = o_1^0 + R_1^0 * p^1$ describes how to find the coordinate of a point P in the reference frame with index 0 knowing its coordinate in the reference frame with index 1.",
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
        question: "The Lagrange formulation enables to determine the dynamic model of a robot manipulator through the following steps:",
        type: "multiple-choice",
        options: [
            { text: "1. Select the Euler angles; 2. Determine the Lagrangian of the system; 3. Determine the Lagrange Equations." },
            { text: "1. Select the motor variables; 2. Determine the Lagrangian of the system; 3. Determine the Lagrange Equations." },
            { text: "1. Select the joint variables; 2. Determine the Lagrangian of the system; 3. Determine the Euler Equations." },
            { text: "1. Select the joint variables; 2. Determine the Jacobian of the system; 3. Determine the Lagrange Equations." },
            { text: "None of the replies." },
            { text: "1. Select the joint variables; 2. Determine the Lagrangian of the system; 3. Determine the Lagrange Equations." },
            { text: "1. Select the generalized coordinates; 2. Determine the Lagrangian of the system; 3. Determine the Lagrange Equations." }
        ],
        correctAnswer: [
            "1. Select the joint variables; 2. Determine the Lagrangian of the system; 3. Determine the Lagrange Equations.",
            "1. Select the generalized coordinates; 2. Determine the Lagrangian of the system; 3. Determine the Lagrange Equations."
        ],
        points: 4
    },
    {
        id: 6,
        question: "Given the control scheme [Image] the following claims are true:",
        type: "multiple-choice",
        image: "./img/RC/20250725/6.png",
        options: [
            { text: "The scheme is one of the elements of a motion control in the joints space of decentralized type for manipulators when only velocity feedback is used." },
            { text: "A scheme of this type must be designed for each joint of the manipulator." },
            { text: "The controller is a PI." },
            { text: "The controller is a proportional controller." },
            { text: "The controller is a PI with gravity compensation." },
            { text: "T_m is the torque generated by the considered motor." },
            { text: "The scheme is a motion control in the joints space of centralized type for manipulators when only position feedback is used." },
            { text: "T_P is the homogeneous transformation matrix which described the direct kinematics." },
            { text: "The exogenous signal entering the scheme after the controller block is a generalized force." },
            { text: "The exogenous signal entering the scheme after the controller block is a torque." },
            { text: "A scheme of this type cannot be used without a feedforward compensation." },
            { text: "None of the replies." },
            { text: "The scheme is one of the elements of a motion control in the joints space of decentralized type for manipulators when only position feedback is used." },
            { text: "The exogenous signal entering the scheme after the controller block is a voltage." }
        ],
        correctAnswer: [
            "A scheme of this type must be designed for each joint of the manipulator.",
            "The controller is a PI.",
            "The exogenous signal entering the scheme after the controller block is a voltage.",
            "The scheme is one of the elements of a motion control in the joints space of decentralized type for manipulators when only position feedback is used."
        ],
        points: 4
    },
    {
        id: 7,
        question: "Given the two reference frames in the picture, select among the following claims those which are true.",
        type: "multiple-choice",
        image: "./img/RC/20250725/7.png",
        options: [
            { text: "R_x(-gamma) = R_x(gamma)R_x(gamma)^-1" },
            { text: "Reference Frame O_1-x_1y_1z_1 is obtained by performing an elementary rotation of the Base Reference Frame around its z axes of an angle gamma" },
            { text: "If gamma = pi/2, then R_x(gamma) = [1 0 0; 0 1 0; 0 0 1]" },
            { text: "R_x(-gamma) = R_x(gamma)^T" },
            { text: "Adding 1 to determinant of the rotation matrix R_x(gamma) one obtains 0" },
            { text: "R_1^b = R_x(gamma) = [x_1^b y_1^b z_1^b] = [1 0 0; 0 cos(gamma) -sin(gamma); 0 sin(gamma) cos(gamma)]" },
            { text: "None of the replies." }
        ],
        correctAnswer: [
            "R_1^b = R_x(gamma) = [x_1^b y_1^b z_1^b] = [1 0 0; 0 cos(gamma) -sin(gamma); 0 sin(gamma) cos(gamma)]",
            "R_x(-gamma) = R_x(gamma)^T"
        ],
        points: 4
    },
    {
        id: 8,
        question: "The following robot [Image] can be classified as a 3-axes anthropomorphic robot operating in the 3D space.",
        type: "single-choice",
        image: "./img/RC/20250725/8.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 9,
        question: "The ZYX Euler's Angles when all the rotations are referred to the current reference frame attached to the object center of mass are called Roll, Pitch and Yaw angles.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 10,
        question: "The following differential equation $M_d * x_tilde_dot_dot + K_D * x_tilde_dot + K_P * x_tilde = M_d * B_A^-1(q) * h_A$ describes the dynamics of the controlled robot manipulator when the impedance control is applied by using the measurement (assumed to be available) of the generalized contact forces.",
        type: "single-choice",
        image: "./img/RC/20250725/10.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 11,
        question: "In case of closed kinematic chains the number of DOFs is less than the number of joints.",
        type: "single-choice",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
	{
		id: 12,
		question: "Given the robot manipulators in the pictures, select those having (starting from the base) 2 Revolute Joints and 1 Prismatic Joint.",
		type: "multiple-choice",
		image: "", // La domanda non ha un'immagine principale, le immagini sono nelle risposte
		options: [
			{
				text: "",
				image: "./img/RC/2026/12_a.png" // Robot antropomorfo (sbagliato)
			},
			{
				text: "None of the replies.",
				image: ""
			},
			{
				text: "",
				image: "./img/RC/2026/12_c.png" // Robot cartesiano/gantry (sbagliato)
			},
			{
				text: "",
				image: "./img/RC/2026/12_d.png" // Attuatore lineare (sbagliato)
			},
			{
				text: "",
				image: "./img/RC/2026/12_e.png" // Robot cilindrico (sbagliato)
			},
			{
				text: "",
				image: "./img/RC/2026/12_f.png" // Robot SCARA (CORRETTO: R-R-P)
			},
			{
				text: "",
				image: "./img/RC/2026/12_g.png" // Robot antropomorfo bianco (sbagliato)
			},
			{
				text: "",
				image: "./img/RC/2026/12_h.png" // Robot SCARA bianco (CORRETTO: R-R-P)
			}
		],
		correctAnswer: [
			"./img/RC/2026/12_f.png",
			"./img/RC/2026/12_h.png"
		],
		points: 4
	}
];