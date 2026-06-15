// Homework 1 - 2024

const quizData = [
  {
    id: 1,
    question: "The robot in the picture is a spheric robot",
    type: "true-false",
    image: "./img/RC/20240101/1.png", // Ritaglia il robot sferico da pag. 1
    options: [
      { text: "Vero", image: "" },
      { text: "Falso", image: "" }
    ],
    correctAnswer: ["Falso"],
    points: 2
  },
  {
    id: 2,
    question: "Given the matrix below (where the elements have been defined in the course), the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/20240101/2.png", // Ritaglia la matrice R^T R da pag. 2
    options: [
      { text: "The matrix is obtained via the product between the rotation matrix from t to b and the transpose of the rotation matrix from t to b itself.", image: "" },
      { text: "The matrix is the null matrix.", image: "" },
      { text: "The matrix is obtained via the product between the rotation matrix from t to b and the inverse of the rotation matrix from t to b itself.", image: "" },
      { text: "The matrix is the identity matrix.", image: "" },
      { text: "The matrix is obtained via the product between the transpose of the rotation matrix from t to b and the rotation matrix from t to b itself.", image: "" },
      { text: "The matrix is obtained via the product between the inverse of the rotation matrix from t to b and the rotation matrix from t to b itself.", image: "" },
      { text: "The matrix is the product of two elementary rotation matrices.", image: "" },
      { text: "None of the replies.", image: "" }
    ],
    correctAnswer: [
      "The matrix is the identity matrix.",
      "The matrix is obtained via the product between the transpose of the rotation matrix from t to b and the rotation matrix from t to b itself.",
      "The matrix is obtained via the product between the inverse of the rotation matrix from t to b and the rotation matrix from t to b itself."
    ],
    points: 3
  },
  {
    id: 3,
    question: "Given the two reference frames in the picture, select the correct rotation matrix from the Reference frame of index 1 to the Base Reference frame.",
    type: "single-choice",
    image: "./img/RC/20240101/3.png", // Ritaglia i sistemi di riferimento da pag. 3
    options: [
      { text: "None of the replies.", image: "" },
      { text: "$$ \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} $$", image: "" },
      { text: "$$ \\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & 0 & -1 \\\\ 0 & -1 & 0 \\end{bmatrix} $$", image: "" },
      { text: "$$ \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} $$", image: "" },
      { text: "$$ \\begin{bmatrix} 0 & 0 & -1 \\\\ -1 & 0 & 0 \\\\ 0 & -1 & 0 \\end{bmatrix} $$", image: "" },
      { text: "$$ \\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix} $$", image: "" }
    ],
    correctAnswer: [
      "$$ \\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & 0 & -1 \\\\ 0 & -1 & 0 \\end{bmatrix} $$"
    ],
    points: 4
  },
  {
    id: 4,
    question: "Given the picture, the following claims are false:",
    type: "multiple-choice",
    image: "./img/RC/20240101/4.png", // Ritaglia la mano destra/assi da pag. 4
    options: [
      { text: "The picture shows a reference frame rotation occurring counterclockwise.", image: "" },
      { text: "The picture describes an elementary rotation expressed by $R_x(\\alpha)$", image: "" },
      { text: "None of the replies.", image: "" },
      { text: "The picture describes a rotation expressed by $R_b^1$", image: "" },
      { text: "The picture describes a rotation expressed by $R_1^b$", image: "" },
      { text: "The picture describes an elementary rotation expressed by $R_z(\\alpha)$", image: "" },
      { text: "The picture shows a reference frame rotation occurring in the positive verse.", image: "" }
    ],
    correctAnswer: [
      "The picture describes an elementary rotation expressed by $R_x(\\alpha)$",
      "The picture describes a rotation expressed by $R_b^1$"
    ],
    points: 3
  },
  {
    id: 5,
    question: "Given the robot in the picture, the following claims are true:",
    type: "multiple-choice",
    image: "./img/RC/20240101/5.png", // Ritaglia il robot SCARA da pag. 5
    options: [
      { text: "The homogeneus transformation matrix describing its direct kinematics is $$ T_t^b(q) = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & x_2 \\\\ 0 & 0 & 1 & x_1+l \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} $$", image: "" },
      { text: "The homogeneus transformation matrix describing its direct kinematics is $$ T_t^b(q) = \\begin{bmatrix} -1 & 0 & 0 & 0 \\\\ 0 & -1 & 0 & x_2 \\\\ 0 & 0 & 1 & x_1+l \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} $$", image: "" },
      { text: "The robot is a SCARA.", image: "" },
      { text: "The robot is a cylindrical robot.", image: "" },
      { text: "The robot has three axes.", image: "" },
      { text: "Versor $s$ is the versor of the axis $y$ of the tool reference frame.", image: "" },
      { text: "Versor $a$ is the versor of the axis $y$ of the tool reference frame.", image: "" },
      { text: "Versor $s$ is the versor of the axis $z$ of the tool reference frame.", image: "" },
      { text: "None of the replies.", image: "" },
      { text: "The joint variable vector is $q=[q_1, q_2, q_3]^T = [x_1, x_2, x_3]^T$", image: "" }
    ],
    correctAnswer: [
      "The homogeneus transformation matrix describing its direct kinematics is $$ T_t^b(q) = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & x_2 \\\\ 0 & 0 & 1 & x_1+l \\\\ 0 & 0 & 0 & 1 \\end{bmatrix} $$",
      "Versor $s$ is the versor of the axis $y$ of the tool reference frame."
    ],
    points: 4
  },
  {
    id: 6,
    question: "Given the robot manipulator, select the correct choice/choices for the D-H reference frames associated with joints 1, 2 and 3 (using the standard way to number the joints).",
    type: "single-choice",
    image: "./img/RC/20240101/6.png", // Ritaglia il robot principale da pag. 6
    options: [
      { text: "Option A", image: "./img/RC/20240101/6_a.png" }, // Ritaglia il diagramma A
      { text: "Option B", image: "./img/RC/20240101/6_b.png" }, // Ritaglia il diagramma B (Errato)
      { text: "Option D", image: "./img/RC/20240101/6_d.png" }, // Ritaglia il diagramma D (Corretto)
      { text: "Option E", image: "./img/RC/20240101/6_e.png" }, // Ritaglia il diagramma E (se esiste) o usa un placeholder
      { text: "None of the replies.", image: "" }
    ],
    correctAnswer: [
      "Option B" // Assicurati di assegnare "Option D" all'immagine corretta (quella con y0 verso l'alto, x1 orizzontale, z1 uscente ecc)
    ],
    points: 6
  },
  {
    id: 7,
    question: "Given the following robot manipulator with the illustrated choice of the D-H reference frames, select the correct set of D-H parameters associated with reference frame 1.",
    type: "single-choice",
    image: "", // L'immagine principale è già nelle opzioni, o puoi mettere quella generica
    options: [
      { text: "None of the replies.", image: "" },
      { text: "", image: "./img/RC/20240101/7_b.png" }, // Tabella opzione B
      { text: "", image: "./img/RC/20240101/7_c.png" }, // Tabella opzione C (Alpha = 180)
      { text: "", image: "./img/RC/20240101/7_d.png" }, // Tabella opzione D (Alpha = 0 - CORRETTA)
      { text: "", image: "./img/RC/20240101/7_e.png" },  // Tabella opzione e
      { text: "", image: "./img/RC/20240101/7_f.png" }  // Tabella opzione f
    ],
    correctAnswer: [
      "./img/RC/20240101/7_c.png" // L'immagine che mostra alpha_1 = l_1 e d_1 = 0
    ],
    points: 6
  },
  {
    id: 8,
    question: "The following reference frames assignment is correct:",
    type: "true-false",
    image: "./img/RC/20240101/8.png", // Ritaglia l'immagine con Ot, a, s da pag. 8
    options: [
      { text: "Vero", image: "" },
      { text: "Falso", image: "" }
    ],
    correctAnswer: ["Falso"],
    points: 2
  }
];