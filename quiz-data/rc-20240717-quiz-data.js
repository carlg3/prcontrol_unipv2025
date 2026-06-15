// ESAME 2024-07-17

const quizData = [
    {
        id: 1,
        question: "The following differential equation M_d * x_tilde_dot_dot + K_D * x_tilde_dot + K_P * x_tilde = M_d * B_A^-1(q) * h_A describes the dynamics of the controlled robot manipulator when the impedance control is applied without using the measurement of the generalized contact forces.",
        type: "single-choice",
        image: "./img/RC/20240717/1.png",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 2,
        question: "Given the scheme [Inverse Kinematics -> Controller -> Actuators -> Gear-box -> Manipulator] the following claim are true:",
        type: "multiple-choice",
        image: "./img/RC/20240717/2.png",
        options: [
            { text: "It illustrates a motion control scheme in the joint space for robot manipulators." },
            { text: "It illustrates an interaction control scheme in the operational space for robot manipulators." },
            { text: "It illustrates an interaction control scheme in the joint space for robot manipulators." },
            { text: "None of the replies." },
            { text: "It illustrates a force control scheme in the operational space for robot manipulators." },
            { text: "It illustrates a motion control scheme in the operational space for robot manipulators." }
        ],
        correctAnswer: ["It illustrates a motion control scheme in the joint space for robot manipulators."],
        points: 4
    },
    {
        id: 3,
        question: "The term d_d = K_r^-1 * Delta_B(q_d) * K_r^-1 * q_dot_dot_md + K_r^-1 * C(q_d, q_dot_d) * K_r^-1 * q_dot_md + K_r^-1 * g(q_d) is used in centralized motion control schemes in the joints space with a decentralized feedforward compensation to compensate the actual disturbance due to nonlinear and coupling effects.",
        type: "single-choice",
        image: "./img/RC/20240717/3.png",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 4,
        question: "Find the geometric Jacobian matrix which describes the differential kinematics of the following cartesian robot manipulator (3 DoM)",
        type: "single-choice",
        image: "./img/RC/20240717/4.png",
        options: [
            { text: "J(q) = [0 1 0 0; 0 0 -1 0; 1 0 0 0; 0 0 0 1]" },
            { text: "J(q) = [0 1 0; 0 0 1; 1 0 0; 0 0 0; 0 0 0; 0 0 0]" },
            { text: "J(q) = [0 0 1; 0 1 0; -1 0 0; 0 0 0; 0 0 0; 0 0 0]" },
            { text: "None of the replies" },
            { text: "J(q) = [0 0 1; 0 1 0; 1 0 0; 0 0 0; 0 0 0; 0 0 0]" },
            { text: "J(q) = [0 0 0; 0 0 0; 0 0 0; 0 0 1; 0 1 0; 1 0 0]" },
            { text: "J(q) = [1 0 0; 0 1 0; 0 0 1; 0 0 0; 0 0 0; 0 0 0]" }
        ],
        correctAnswer: ["J(q) = [0 0 1; 0 1 0; 1 0 0; 0 0 0; 0 0 0; 0 0 0]"],
        points: 1
    },
    {
        id: 5,
        question: "Given the control scheme [PD control with gravity compensation] the following claims are true:",
        type: "multiple-choice",
        image: "./img/RC/20240717/5.png",
        options: [
            { text: "If measurements of operational space quantities are indirect, the controller has to compute the direct kinematics function to determine the pose vector." },
            { text: "The scheme implements a PD control with gravity compensation in the operational space." },
            { text: "The scheme implements a PD control with gravity compensation in the joints space." },
            { text: "The scheme performs a nonlinear compensation of the configuration dependent gravitational generalized forces." },
            { text: "The control scheme can guarantee the asymptotic tracking of a time-varying equilibrium pose starting from any initial pose." },
            { text: "The control scheme can guarantee the finite time reaching of a constant equilibrium pose starting from any initial pose." },
            { text: "The control scheme can guarantee the asymptotic reaching of a constant equilibrium pose starting from any initial pose." },
            { text: "If measurements of operational space quantities are indirect, the controller has to compute the differential kinematics to determine the pose vector." },
            { text: "None of the replies." },
            { text: "If measurements of operational space quantities are indirect, the controller has to compute the inverse kinematics to determine the pose vector." }
        ],
        correctAnswer: [
            "If measurements of operational space quantities are indirect, the controller has to compute the direct kinematics function to determine the pose vector.",
            "The scheme implements a PD control with gravity compensation in the operational space.",
            "The scheme performs a nonlinear compensation of the configuration dependent gravitational generalized forces.",
            "The control scheme can guarantee the asymptotic reaching of a constant equilibrium pose starting from any initial pose."
        ],
        points: 4
    },
    {
        id: 6,
        question: "Given the information in the picture [v(t) = Jacobian relation...] the following claims are true:",
        type: "multiple-choice",
        image: "./img/RC/20240717/6.png",
        options: [
            { text: "Reference frame O_2 - x_2y_2z_2 is the D-H reference frame associated with Joint 2." },
            { text: "Vectors z_i^b, i = 0,..., 2, are versors." },
            { text: "The components of vectors z_i^b, i = 0,..., 2, are incorrect." },
            { text: "The last three components of the velocity vector of the end-effector are the elements of the set Phi_dot, where the set Phi has been defined during the course." },
            { text: "None of the replies." },
            { text: "The matrix which pre-multiplies q_dot(t) is the Analytic Jacobian Matrix." },
            { text: "The components of vectors z_i^b, i = 0,..., 2, are correctly determined." },
            { text: "The matrix which pre-multiplies q_dot(t) is the Geometric Jacobian Matrix." },
            { text: "The matrix which pre-multiplies q_dot(t) is an homogeneous transformation matrix." }
        ],
        correctAnswer: [
            "Vectors z_i^b, i = 0,..., 2, are versors.",
            "The components of vectors z_i^b, i = 0,..., 2, are incorrect.",
            "The matrix which pre-multiplies q_dot(t) is the Geometric Jacobian Matrix."
        ],
        points: 4
    },
    {
        id: 7,
        question: "Given the relationship $\dot{x}(q(t)) = \begin{bmatrix} \dfrac{\partial x(q(t))}{\partial q(t)} \\ \dfrac{\partial \phi(q(t))}{\partial q(t)} \end{bmatrix} \, \dot{q}(t)$",
        type: "multiple-choice",
        image: "./img/RC/20240717/7.png",
        options: [
            { text: "The quantity in brackets is a homogeneous transformation matrix." },
            { text: "The quantity in brackets is a matrix called rotation matrix." },
            { text: "The quantity in brackets is a matrix called Geometric Jacobian." },
            { text: "The quantity in brackets is always a column vector called Geometric Jacobian." },
            { text: "None of the replies." },
            { text: "The quantity in brackets is a matrix called Analytic Jacobian." },
            { text: "The quantity in brackets is always a column vector called Analytic Jacobian." }
        ],
        correctAnswer: ["The quantity in brackets is a matrix called Analytic Jacobian."],
        points: 4
    },
    {
        id: 8,
        question: "Given the following robot manipulator , it is correct to classify it as a cylindrical robot.",
        type: "single-choice",
        image: "./img/RC/20240717/8.png",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["False"],
        points: 1
    },
    {
        id: 9,
        question: "The following matrix [1 0 0; 0 sqrt(2)/2 -sqrt(2)/2; 0 sqrt(2)/2 sqrt(2)/2] is equal to the matrix R_x(pi/4).",
        type: "single-choice",
        options: [
            { text: "True" },
            { text: "False" }
        ],
        correctAnswer: ["True"],
        points: 1
    },
    {
        id: 10,
        question: "The space in which the pose vector x(q(t)) is defined is:",
        type: "multiple-choice",
        options: [
            { text: "the secondary workspace." },
            { text: "the space in which the joint trajectories are specified." },
            { text: "the three-dimensional space." },
            { text: "the space in which the operations required to the robot manipulator are specified." },
            { text: "the dexterous workspace." },
            { text: "the joint space." },
            { text: "the operational space." },
            { text: "none of the replies." },
            { text: "the 3D space in which the Euler's angles are specified." }
        ],
        correctAnswer: [
            "the space in which the operations required to the robot manipulator are specified.",
            "the operational space."
        ],
        points: 4
    }
];