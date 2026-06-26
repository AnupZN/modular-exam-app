<div align="center">

<img width="1200" height="475" alt="EXAM.PRO Banner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />

# 📚 EXAM.PRO

### A Modern, Beautiful & Fully Dynamic Examination Platform

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Powered%20by-Gemini-orange?style=for-the-badge)

Create, manage, and practice unlimited mock tests with a fully dynamic JSON-based question system.

</div>

---

# 📑 Table of Contents

- Features
- Run Locally
- Project Structure
- Adding New Subjects
- Manifest File
- Chapter JSON Format
- Question Format
- Tips
- Notes

---

# ✨ Features

- 📚 Unlimited Subjects
- 📖 Unlimited Chapters
- 📝 JSON-Based Question Bank
- ⚡ Dynamic Loading via `manifest.json`
- 📊 Performance Analytics
- 📈 Progress Tracking
- 🎯 Negative Marking Support
- ⏱️ Automatic Timer Calculation
- 🌙 Modern Responsive UI
- 📱 Mobile Friendly
- 🤖 Gemini AI Powered

---

# 🚀 Run Locally

## Prerequisites

- Node.js (Latest LTS Recommended)

---

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Key

Create a `.env.local` file and add:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

### 3. Start Development Server

```bash
npm run dev
```

---

### 4. Open the App

Visit:

```
http://localhost:3000
```

---

## View in Google AI Studio

https://ai.studio/apps/f746e649-82e3-4851-a109-1dc2650dda39

---

# 📂 Project Structure

```
public/
└── data/
    ├── manifest.json
    ├── Polity/
    │   └── chapter01.json
    ├── History/
    │   ├── chapter01.json
    │   └── chapter02.json
    └── Science/
        └── chapter01.json
```

The application dynamically loads every subject and chapter from this directory.

---

# ➕ Adding New Subjects & Chapters

Adding new exam content **does not require modifying any application code**.

Simply:

1. Create a folder inside `public/data`
2. Add chapter JSON files
3. Register the subject inside `manifest.json`

The app automatically discovers and loads all registered subjects.

---

# 📋 Step 1 — Update `manifest.json`

Location:

```
public/data/manifest.json
```

Example:

```json
{
  "subjects": [
    {
      "id": "history",
      "name": "History",
      "icon": "🏛️",
      "folder": "History",
      "chapters": [
        {
          "id": "chapter01",
          "title": "Indus Valley Civilization",
          "file": "chapter01.json"
        },
        {
          "id": "chapter02",
          "title": "The Maurya Empire",
          "file": "chapter02.json"
        }
      ]
    },
    {
      "id": "science",
      "name": "Science & Tech",
      "icon": "🧪",
      "folder": "Science",
      "chapters": [
        {
          "id": "chapter01",
          "title": "Space & Universe",
          "file": "chapter01.json"
        }
      ]
    }
  ]
}
```

---

## Manifest Fields

| Field | Description |
|--------|-------------|
| id | Unique lowercase identifier |
| name | Subject display name |
| icon | Emoji shown on UI |
| folder | Folder inside `/public/data` |
| chapters | List of available chapters |

---

## Chapter Fields

| Field | Description |
|--------|-------------|
| id | Unique chapter identifier |
| title | Display name |
| file | JSON filename |

---

# 📖 Step 2 — Create Chapter JSON

Location:

```
public/data/<SubjectFolder>/chapter01.json
```

Example:

```json
{
  "subject": "Science & Tech",
  "chapter": "Space & Universe",
  "timePerQuestion": 30,
  "positiveMarks": 2,
  "negativeMarks": 0.5,
  "questions": [
    {
      "id": 1,
      "question": "Which planet is known as the Red Planet?",
      "options": [
        "Venus",
        "Mars",
        "Jupiter",
        "Mercury"
      ],
      "correct": 1,
      "explanation": "Mars appears red because of iron oxide on its surface.",
      "difficulty": "Easy",
      "tags": [
        "Solar System",
        "Planets"
      ]
    }
  ]
}
```

---

# 📌 Chapter Properties

| Property | Description |
|----------|-------------|
| subject | Subject name |
| chapter | Chapter title |
| timePerQuestion | Seconds allowed per question |
| positiveMarks | Marks for a correct answer |
| negativeMarks | Marks deducted for an incorrect answer |
| questions | List of MCQs |

---

# ❓ Question Object

Each question must follow this format.

| Field | Description |
|--------|-------------|
| id | Numeric ID |
| question | Question text |
| options | Exactly **4** answer choices |
| correct | **0-based index** of the correct option |
| explanation | Explanation shown after exam |
| difficulty | Easy, Medium or Hard |
| tags | List of topics |

Example:

```json
{
  "id": 1,
  "question": "Which planet is known as the Red Planet?",
  "options": [
    "Venus",
    "Mars",
    "Jupiter",
    "Mercury"
  ],
  "correct": 1,
  "explanation": "Mars appears red because of iron oxide on its surface.",
  "difficulty": "Easy",
  "tags": [
    "Solar System",
    "Planets"
  ]
}
```

---

# ⚠️ Important Rules

✅ Every subject **must** be registered in `manifest.json`

✅ Folder names must exactly match the `folder` field.

✅ Chapter filenames must exactly match the `file` property.

✅ Every question must contain exactly **4 options**.

✅ `correct` uses **0-based indexing**.

```
0 = First Option
1 = Second Option
2 = Third Option
3 = Fourth Option
```

✅ Difficulty values must be one of:

- Easy
- Medium
- Hard

---

# 💡 Tips

- Keep IDs unique within each subject.
- Use descriptive chapter titles.
- Organize questions by topic using `tags`.
- Write clear explanations to improve learning.
- Keep JSON properly formatted (valid commas, quotes, and brackets).

---

# 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- Node.js
- Gemini AI API

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

Made with ❤️ using Gemini AI & modern web technologies.

**Happy Learning! 🚀**

</div>