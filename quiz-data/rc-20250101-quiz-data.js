// HW1

const quizData = [
  {
    id: 1,
    question: "The robot in the picture is a spheric robot",
    type: "single-choice",
    image: "./img/RC/HW1/1.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  },
  {
    id: 2,
    question: "Given the matrix:\n$$ \\begin{bmatrix} R_t^b & 0 \\\\ 0 & 1 \\end{bmatrix} $$\nwhere the elements have been defined in the course, the following claims are true.",
    type: "multiple-choice",
    options: [
      { text: "The matrix is obtained via the product between the rotation matrix from t to b and the transpose of the rotation matrix from t to b itself." },
      { text: "None of the replies." },
      { text: "The matrix is the null matrix." },
      { text: "The matrix is obtained via the product between the rotation matrix from t to b and the inverse of the rotation matrix from t to b itself." },
      { text: "The matrix is the identity matrix." },
      { text: "The matrix is obtained via the product between the transpose of the rotation matrix from t to b and the rotation rotation matrix from t to b itself." },
      { text: "The matrix is obtained via the product between the inverse of the rotation matrix from t to b and the rotation rotation matrix from t to b itself." },
      { text: "The matrix is the product of two elementary rotation matrices." }
    ],
    correctAnswer: [
      "The matrix is the identity matrix.",
      "The matrix is obtained via the product between the transpose of the rotation matrix from t to b and the rotation rotation matrix from t to b itself.",
      "The matrix is obtained via the product between the inverse of the rotation matrix from t to b and the rotation rotation matrix from t to b itself."
    ],
    points: 4
  },
  {
    id: 3,
    question: "Given the two reference frames in the picture: select the correct rotation matrix from the Reference frame of index 1 to the Base Reference frame.",
    type: "single-choice",
    image: "./img/RC/HW1/3.png",
    options: [
      { text: "None of the replies." },
      { text: "$$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}$$" },
      { text: "$$\\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & 0 & -1 \\\\ 0 & -1 & 0 \\end{bmatrix}$$" },
      { text: "$$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$" },
      { text: "$$\\begin{bmatrix} 0 & 0 & -1 \\\\ -1 & 0 & 0 \\\\ 0 & -1 & 0 \\end{bmatrix}$$" },
      { text: "$$\\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}$$" }
    ],
    correctAnswer: ["$$\\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & 0 & -1 \\\\ 0 & -1 & 0 \\end{bmatrix}$$"],
    points: 1
  },
  {
    id: 4,
    question: "Given the picture: the following claims are false.",
    type: "multiple-choice",
    image: "./img/RC/HW1/4.png",
    options: [
      { text: "The picture shows a reference frame rotation occurring counterclockwise." },
      { text: "The picture describes an elementary rotation expressed by $R_{x}(\\alpha)$" },
      { text: "None of the replies." },
      { text: "The picture describes a rotation expressed by $R_{b}^{1}$" },
      { text: "The picture describes a rotation expressed by $R_{1}^{b}$" },
      { text: "The picture describes an elementary rotation expressed by $R_{z}(\\alpha)$" },
      { text: "The picture shows a reference frame rotation occurring in the positive verse." }
    ],
    correctAnswer: [
      "The picture describes an elementary rotation expressed by $R_{x}(\\alpha)$",
      "The picture describes a rotation expressed by $R_{b}^{1}$",
      "None of the replies."
    ],
    points: 4
  },
  {
    id: 5,
    question: "Given the robot: the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/HW1/5.png",
    options: [
      { text: "The homogeneus transformation matrix describing its direct kinematics is $$T_{t}^{b}(q)=\\begin{bmatrix}1&0&0&0\\\\ 0&1&0&x_{2}\\\\ 0&0&1&x_{1}+l\\\\ 0&0&0&1\\end{bmatrix}$$" },
      { text: "The homogeneus transformation matrix describing its direct kinematics is $$T_{t}^{b}(q)=\\begin{bmatrix}-1&0&0&0\\\\ 0&-1&0&x_{2}\\\\ 0&0&1&x_{1}+l\\\\ 0&0&0&1\\end{bmatrix}$$" },
      { text: "The robot is a SCARA" },
      { text: "The robot is a cylindrical robot." },
      { text: "The robot has three axes." },
      { text: "Versor s is the versor of the axis y of the tool reference frame." },
      { text: "Versor a is the versor of the axis y of the tool reference frame." },
      { text: "Versor s is the versor of the axis z of the tool reference frame." },
      { text: "None of the replies." },
      { text: "The joint variable vector is $$\\underline{q}=[q_{1},q_{2},q_{3}]^{T}=[x_{1},x_{2},x_{3}]^{T}$$" }
    ],
    correctAnswer: [
      "The homogeneus transformation matrix describing its direct kinematics is $$T_{t}^{b}(q)=\\begin{bmatrix}1&0&0&0\\\\ 0&1&0&x_{2}\\\\ 0&0&1&x_{1}+l\\\\ 0&0&0&1\\end{bmatrix}$$",
      "Versor s is the versor of the axis y of the tool reference frame."
    ],
    points: 4
  },
  {
    id: 6,
    question: "Given the robot manipulator. Select the correct choice/choices, among the following ones, for the D-H reference frames associated with joints 1, 2 and 3 (using the standard way to number the joints)",
    type: "single-choice",
    image: "./img/RC/HW1/6.png",
    options: [
      { text: "Configuration A (see image source)" },
      { text: "Configuration B (see image source)" },
      { text: "Configuration C (see image source)" },
      { text: "Configuration D (see image source)" },
      { text: "None of the replies." }
    ],
    correctAnswer: ["Configuration D (see image source)"],
    points: 1
  },
  {
    id: 7,
    question: "Given the following robot manipulator with the illustrated choice of the D-H reference frames select the correct set of D-H parameters associated with reference frame 1.",
    type: "single-choice",
    image: "./img/RC/HW1/7.png",
    options: [
      { text: "None of the replies." },
      { text: "a1=0, d1=l2, alpha1=0" },
      { text: "a1=l1, d1=0, alpha1=0" },
      { text: "a1=l1, d1=0, alpha1=180" },
      { text: "a1=l1, d1=0, alpha1=90" }
    ],
    correctAnswer: ["a1=l1, d1=0, alpha1=0"],
    points: 1
  },
  {
    id: 8,
    question: "The following reference frames assignment is correct:",
    type: "single-choice",
    image: "./img/RC/HW1/8.png",
    options: [
      { text: "Vero" },
      { text: "Falso" }
    ],
    correctAnswer: ["Falso"],
    points: 1
  }
];