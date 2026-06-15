# 📊 Quiz Process & Robot Control

Una piattaforma interattiva di quiz per lo studio di **Process Control** e **Robot Control**. Questo progetto fornisce un'interfaccia web moderna per affrontare esami e esercitazioni con supporto a diverse tipologie di domande, incluse formule matematiche.

## 🎯 Descrizione

Questo repository contiene:
- **`index.html`**: Interfaccia web interattiva con supporto MathJax per formule matematiche
- **JavaScript (53.7%)**: Logica quiz, gestione domande, calcolo punteggi
- **HTML/CSS (46.3%)**: Layout responsive e design moderno

## ✨ Caratteristiche

- ✅ **Due categorie**: Process Control e Robot Control
- ✅ **Molteplici tipologie di domande**:
  - Vero/Falso
  - Scelta singola
  - Scelta multipla
  - Domande con immagini
- ✅ **Supporto MathJax**: Rendering di formule matematiche LaTeX
- ✅ **Feedback immediato**: Visualizzazione risposta corrette e sbagliate
- ✅ **Riepilogo dettagliato**: Revisione completa delle risposte con punteggi
- ✅ **Sistema di punteggio**: Calcolo automatico con conversione a voto (0-33)
- ✅ **Design responsive**: Funziona su desktop, tablet e mobile
- ✅ **Shuffle domande**: Ordine casuale per ogni sessione

## 📚 Contenuti Disponibili

### Process Control
- Esame 2023-01-24
- Esame 2024-01-23
- Esame 2024-02-20
- Esame 2024-06-20
- Esame 2025-09-24
- Homework 1, 2, 3 (2024-2025)

### Robot Control
- Esame 2024-06-20
- Esame 2024-07-17
- Esame 2025-01-24
- Esame 2025-07-25
- Esame 2025-09-24
- Esame 2026-01-22
- Homework 1, 2, 3, 4 (2024-2025)

## 🚀 Come Usare

1. Apri `index.html` nel browser
2. Seleziona la materia (Process Control o Robot Control)
3. Scegli un esame o esercitazione
4. Rispondi alle domande (max 20 per sessione)
5. Visualizza i risultati e il riepilogo completo

## 📋 Formato delle Domande

### Struttura di Base

Ogni domanda è un oggetto JavaScript con la seguente struttura:

```javascript
{
    id: 1,                                    // Identificativo univoco
    question: "Testo della domanda",          // Domanda (supporta HTML e LaTeX)
    type: "single-choice",                    // Tipo di domanda
    image: "./img/PC/20240123/1.jpg",         // [Opzionale] Percorso immagine
    options: [                                // Array di opzioni
        { text: "Opzione 1" },
        { text: "Opzione 2" }
    ],
    correctAnswer: ["Opzione 1"],             // Array di risposte corrette
    points: 1                                 // Punti assegnati
}
```

### Tipi di Domande

#### 1. **Single Choice (Scelta Singola)**
Una sola risposta corretta. Radio button styling.

```javascript
{
    id: 1,
    question: "Qual è la risposta corretta?",
    type: "single-choice",
    options: [
        { text: "Opzione A" },
        { text: "Opzione B" },
        { text: "Opzione C" }
    ],
    correctAnswer: ["Opzione A"],
    points: 1
}
```

#### 2. **True/False (Vero/Falso)**
Caso speciale di `single-choice` con due opzioni fisse.

```javascript
{
    id: 2,
    question: "L'affermazione è vera o falsa?",
    type: "true-false",
    options: [
        { text: "Vero" },
        { text: "Falso" }
    ],
    correctAnswer: ["Vero"],
    points: 1
}
```

#### 3. **Multiple Choice (Scelta Multipla)**
Una o più risposte corrette. Checkbox styling. Il punteggio viene calcolato come:
- Se la risposta è completamente corretta: punteggio pieno
- Se contiene errori: penalizzazione proporzionale
- Minimo garantito: 0 punti

```javascript
{
    id: 3,
    question: "Seleziona tutte le risposte corrette:",
    type: "multiple-choice",
    options: [
        { text: "Risposta 1" },
        { text: "Risposta 2" },
        { text: "Risposta 3" },
        { text: "Risposta 4" }
    ],
    correctAnswer: ["Risposta 1", "Risposta 3"],
    points: 3
}
```

### Elementi Speciali

#### Immagini nelle Domande
```javascript
{
    id: 5,
    question: "Analizza il seguente schema:",
    type: "single-choice",
    image: "./img/PC/20240123/5.jpg",    // Immagine principale
    options: [
        { text: "Opzione 1" },
        { text: "Opzione 2" }
    ],
    correctAnswer: ["Opzione 1"],
    points: 2
}
```

#### Immagini nelle Opzioni
```javascript
{
    id: 6,
    question: "Quale diagramma rappresenta il sistema?",
    type: "single-choice",
    options: [
        { 
            text: "Diagramma A",
            image: "./img/PC/20240123/opt_a.jpg" 
        },
        { 
            text: "Diagramma B",
            image: "./img/PC/20240123/opt_b.jpg" 
        }
    ],
    correctAnswer: ["Diagramma A"],
    points: 2
}
```

#### Formule Matematiche (LaTeX)
Le domande e opzioni supportano LaTeX tramite MathJax. Utilizza `$...$` per formule inline o `$$...$$` per display:

```javascript
{
    id: 7,
    question: "Dato il sistema $G(s) = \\frac{10}{s(s+20)}$, calcola il guadagno stazionario:",
    type: "single-choice",
    options: [
        { text: "$$K = \\frac{1}{2}$$" },
        { text: "$$K = \\frac{1}{200}$$" },
        { text: "$$K = \\infty$$" }
    ],
    correctAnswer: ["$$K = \\infty$$"],
    points: 2
}
```

**Nota**: Usa `\\` per escape nei backslash (es: `\\frac`, `\\sin`).

## 📝 Come Aggiungere Nuove Domande

### Passo 1: Creare il File Dati

Crea un nuovo file nella cartella `quiz-data/` seguendo la nomenclatura:
- `pc-YYYYMMDD-quiz-data.js` per Process Control
- `rc-YYYYMMDD-quiz-data.js` per Robot Control

**Esempio**: `quiz-data/pc-20250615-quiz-data.js`

### Passo 2: Struttura del File

```javascript
// ESAME 2025-06-15 (oppure HOMEWORK 1)

const quizData = [
    {
        id: 1,
        question: "Prima domanda",
        type: "single-choice",
        options: [
            { text: "Opzione 1" },
            { text: "Opzione 2" }
        ],
        correctAnswer: ["Opzione 1"],
        points: 1
    },
    {
        id: 2,
        question: "Seconda domanda",
        type: "multiple-choice",
        options: [
            { text: "Opzione A" },
            { text: "Opzione B" },
            { text: "Opzione C" }
        ],
        correctAnswer: ["Opzione A", "Opzione C"],
        points: 2
    }
    // ... altre domande
]
```

### Passo 3: Registrare nel Indice

Apri `index.html` e aggiungi la voce nell'array `availableQuizzes` (intorno alla linea 444):

```javascript
const availableQuizzes = [
    // ... quiz esistenti ...
    
    { 
        name: "Esame 2025-06-15 (Process)", 
        file: "pc-20250615-quiz-data.js", 
        category: "Process Control" 
    },
    
    // ... altri quiz ...
];
```

**Parametri**:
- `name`: Nome visualizzato nel menu (includi categoria in parentesi)
- `file`: Nome del file in `quiz-data/` 
- `category`: `"Process Control"` o `"Robot Control"`

### Passo 4: Aggiungere Immagini (Opzionale)

Se usi immagini:
1. Crea cartella: `img/PC/20250615/` o `img/RC/20250615/`
2. Salva immagini con nomi numerici: `1.jpg`, `2.jpg`, etc.
3. Referenzia nel JSON: `"image": "./img/PC/20250615/1.jpg"`

### Esempio Completo

```javascript
// quiz-data/pc-20250615-quiz-data.js

const quizData = [
    {
        id: 1,
        question: "Dato il sistema $G(s) = \\frac{K}{s(s+10)}$, quale valore di K rende il sistema critico?",
        type: "single-choice",
        image: "./img/PC/20250615/1.jpg",
        options: [
            { text: "$K = 100$" },
            { text: "$K = 50$" },
            { text: "$K = 200$" }
        ],
        correctAnswer: ["$K = 100$"],
        points: 2
    },
    {
        id: 2,
        question: "Quali sono le proprietà di un sistema stabile?",
        type: "multiple-choice",
        options: [
            { text: "Tutti i poli sono nel semipiano sinistro" },
            { text: "La risposta all'impulso converge a zero" },
            { text: "Ha almeno un polo sull'asse immaginario" },
            { text: "L'uscita rimane limitata per ingresso limitato" }
        ],
        correctAnswer: [
            "Tutti i poli sono nel semipiano sinistro",
            "La risposta all'impulso converge a zero",
            "L'uscita rimane limitata per ingresso limitato"
        ],
        points: 3
    }
]
```

## 🎨 Configurazione Avanzata

### Limite Domande
Nel file `index.html` (linea 441):
```javascript
const quizQuestionLimit = 20;  // Numero di domande per sessione
```

### Scala Voti
Nella funzione `showResults()` (linea 754):
```javascript
const maxExamVote = 33;  // Voto massimo (modificare se necessario)
```

## ⚠️ Disclaimer

Non mi assumo responsabilità se le risposte non dovessero essere corrette. Usate a vostra discrezione per lo studio personale.

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Markup strutturato
- **CSS3**: Design responsive e animazioni
- **JavaScript Vanilla**: Logica applicazione
- **MathJax 3**: Rendering formule LaTeX
- **Web APIs**: DOM manipulation, event handling

## 📱 Browser Supportati

- Chrome/Chromium (raccomandate)
- Firefox
- Safari
- Edge
- Mobile browsers moderni

## 📖 Note Importanti

1. **Ordine Domande**: Vengono automaticamente mescolate in ordine casuale
2. **Punteggio Multipla**: Errori nelle risposte multiple comportano penalizzazioni
3. **MathJax**: Richiede connessione internet (CDN)
4. **Locale vs Online**: Funziona localmente, niente server necessario
5. **Persistenza**: I dati NON vengono salvati automaticamente

## 📧 Contatti

Per correzioni o contributi, consulta il repository su GitHub.

---

**Ultimo aggiornamento**: 2025-06-15 | **Versione**: 1.0