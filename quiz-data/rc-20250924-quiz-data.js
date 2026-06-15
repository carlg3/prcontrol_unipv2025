// ESAME 2025-09-24

const quizData = [
    {
        id: 1,
        question: "The following differential equation M_d * x_tilde_ddot + K_D * x_tilde_dot + K_P * x_tilde = M_d * B_A^-1(q) * h_A describes the dynamics of the controlled robot manipulator when the impedance control is applied without using the measurement of the generalized contact forces.",
        type: "single-choice",
        image: "./img/RC/20250924/1.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 2,
        question: "Given the scheme [Inverse Kinematics -> Controller...], the following claim are true:",
        type: "multiple-choice",
        image: "./img/RC/20250924/2.png",
        options: [
            { text: "None of the replies." },
            { text: "It illustrates an interaction control scheme in the operational space for robot manipulators." },
            { text: "It illustrates a motion control scheme in the joint space for robot manipulators." },
            { text: "It illustrates a motion control scheme in the operational space for robot manipulators." },
            { text: "It illustrates an interaction control scheme in the joint space for robot manipulators." },
            { text: "It illustrates a force control scheme in the operational space for robot manipulators." }
        ],
        correctAnswer: ["It illustrates a motion control scheme in the joint space for robot manipulators."],
        points: 4
    },
    {
        id: 3,
        question: "The following scheme [Image] implements a direct interaction control for robot manipulators.",
        type: "single-choice",
        image: "./img/RC/20250924/3.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 4,
        question: "Which of the following reference frames are not conventional Tool Reference Frames?",
        type: "multiple-choice",
        image: "./img/RC/20250924/4.png",
        options: [
            { text: "Frame a)" },
            { text: "Frame b)" },
            { text: "Frame c)" },
            { text: "Frame d)" },
            { text: "Frame e)" },
            { text: "Frame f)" },
            { text: "None of the reference frames" }
        ],
        correctAnswer: ["Frame a)", "Frame c)", "Frame e)", "Frame f)"],
        points: 4
    },
    {
        id: 5,
        question: "Given the robot [SCARA Image], the following claims are true:",
        type: "multiple-choice",
        image: "./img/RC/20250924/5.png",
        options: [
            { text: "The robot is a SCARA." },
            { text: "Versor s is the versor of the axis y of the tool reference frame." },
            { text: "The homogeneous transformation matrix describing its direct kinematics is [Matrix A]", image: "./img/RC/20250924/5-3.png"},
            { text: "The robot has three axes." },
            { text: "The joint variable vector is q = [theta1, theta2, d3]" },
            { text: "None of the replies." },
            { text: "The robot is a cylindrical robot." },
            { text: "Versor s is the versor of the axis z of the tool reference frame." },
            { text: "The homogeneous transformation matrix describing its direct kinematics is [Matrix B]", image: "./img/RC/20250924/5-9.png"},
            { text: "Versor a is the versor of the axis y of the tool reference frame." }
        ],
        correctAnswer: [
            "The homogeneous transformation matrix describing its direct kinematics is [Matrix B]", 
            "Versor s is the versor of the axis y of the tool reference frame."
        ],
        points: 4
    },
    {
        id: 6,
        question: "Given a SCARA manipulator, the following scheme describes its motion control in the joint space when a decentralized approach is adopted for the design:",
        type: "single-choice",
        image: "./img/RC/20250924/6.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 7,
        question: "In the following picture, concerning the D-H conventional way to choose reference frames in robotics, there is a mistake",
        type: "single-choice",
        image: "./img/RC/20250924/7.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 8,
        question: "Given the picture: [Right Hand Rule / Rotation]. The following claims are false:",
        type: "multiple-choice",
        image: "./img/RC/20250924/8.png",
        options: [
            { text: "The picture describes an elementary rotation expressed by R_z(alpha)" },
            { text: "The picture describes an elementary rotation expressed by R_x(alpha)" },
            { text: "The picture describes a rotation expressed by R_b^1" },
            { text: "The picture describes a rotation expressed by R_1^b" },
            { text: "None of the replies." },
            { text: "The picture shows a reference frame rotation occurring counterclockwise." },
            { text: "The picture shows a reference frame rotation occurring in the positive verse." }
        ],
        correctAnswer: [
            "The picture describes an elementary rotation expressed by R_x(alpha)", 
            "The picture describes a rotation expressed by R_b^1",
            "None of the replies."
        ],
        points: 4
    },
    {
        id: 9,
        question: "The following formula [p^0 = A_1^0 ... p^n] allows one to find the coordinates of a point in Reference Frame 0, given the coordinates of the same point written with respect to the Reference Frame n, even in case the two reference frames are reciprocally rototranslated",
        type: "single-choice",
        image: "./img/RC/20250924/9.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 10,
        question: "The following machine can be classified as a cartesian robot",
        type: "single-choice",
        image: "./img/RC/20250924/10.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Vero"],
        points: 1
    },
    {
        id: 11,
        question: "The following mathematical expression: [partial derivative of o_n^0 / partial q] allow one to determine $J_{o}(q(t))$ in the Geometric Jacobian matrix of a robot manipulator.",
        type: "single-choice",
        image: "./img/RC/20250924/11.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 12,
        question: "The following control scheme for robot manipulators [Image] implements a PD Control with Gravity Compensation in the Joint Space according to a decentralized approach.",
        type: "single-choice",
        image: "./img/RC/20250924/12.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
        id: 13,
        question: "Given the following robot manipulator [Image ABB]. It is correct to classify it as a 4-axes robot.",
        type: "single-choice",
        image: "./img/RC/20250924/13.png",
        options: [
            { text: "Vero" },
            { text: "Falso" }
        ],
        correctAnswer: ["Falso"],
        points: 1
    },
    {
		id: 14,
		question: "Select the correct procedure to determine the description of the direct kinematics of a robot manipulator according to the geometric approach.",
		type: "single-choice",
		image: "",
		options: [
		  { 
			text: "Select the Base Reference Frame and the Tool reference Frame; define the vector of the joint variables; determine the geometric Jacobian matrix $$ J = \\dots $$", 
			image: "" 
		  },
		  { 
			text: "Select the Base Reference Frame and the DH reference frames for the joints including the end-effector (virtual joint); define the vector of the joint variables; determine the geometric Jacobian matrix.", 
			image: "" 
		  },
		  { 
			text: "Select the Base Reference Frame and the DH reference frames for the joints including the end-effector (virtual joint); define the vector of the joint variables; determine the Homogeneous Transformation Matrix.", 
			image: "" 
		  },
		  { 
			text: "None of the replies.", 
			image: "" 
		  },
		  { 
			text: "Select the Base Reference Frame and the Tool reference Frame; define the vector of the joint variables; determine the Homogeneous Transformation Matrix $$ T_t^b(q) = \\begin{bmatrix} n^b(q) & s^b(q) & a^b(q) & p^b(q) \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} $$ where the entries are defined using the notation adopted during the course.", 
			image: "./img/RC/20250924/14e.png" 
		  },
		  { 
			text: "Select the Base Reference Frame and the DH reference frames for the joints including the end-effector (virtual joint); define the vector of the joint variables; determine the Homogeneous Transformation Matrix $$ T(q) = \\begin{bmatrix} R & p \\\\ 0 & 1 \\end{bmatrix} $$", 
			image: "" 
		  }
		],
		correctAnswer: [
		  "Select the Base Reference Frame and the Tool reference Frame; define the vector of the joint variables; determine the Homogeneous Transformation Matrix $$ T_t^b(q) = \\begin{bmatrix} n^b(q) & s^b(q) & a^b(q) & p^b(q) \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} $$ where the entries are defined using the notation adopted during the course."
		],
		points: 3
    }
];


