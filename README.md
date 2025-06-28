# 📝 **SkipTheScreen – Project Overview**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🚀 **Project Summary**

Build a **Resume Builder website** that allows users to enter their details and generate **ATS-friendly resumes** in **PDF format**. Uses **HTML, CSS, JavaScript, and Node.js (Express)**. Future upgrades include **AI integration with Gemini** for smart summaries and keyword suggestions.

---

## 💡 **Problem**

Most resumes fail ATS scans due to poor formatting, use of tables, or missing keywords. This tool helps users create **clean, parseable resumes**, improving their job application success rate.

---

## 🎯 **Core Features**

✅ User input form for personal details, summary, skills, education, and experience
✅ Live preview of the generated resume
✅ Download resume as PDF (using html2pdf.js)
✅ Node.js + Express backend to serve frontend files
✅ No data storage; user data is cleared upon leaving the website
✅ Future: Gemini AI integration for summarization and keyword suggestions

---

## 🌐 **Tech Stack**

| Layer                   | Technology                      |
| ----------------------- | ------------------------------- |
| Frontend                | HTML, CSS, JavaScript           |
| PDF Export              | html2pdf.js                     |
| Backend                 | Node.js + Express               |
| AI Integration (Future) | Gemini API via Google AI Studio |

---

## 🛠️ **Folder Structure**

```
resume-builder/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── index.html
├── server.js
├── package.json
└── README.md
```

---

## 🗂️ **Project Phases**

### ✅ **Phase 0: Planning & Setup**

* Finalize scope and tech stack
* Initialize Node.js project and install Express
* Set up project folder structure

---

### ✅ **Phase 1: Frontend Form & Preview**

* Design HTML form with inputs for:
  * Personal Info (Name, Email, Phone, LinkedIn)
  * Summary
  * Skills (comma separated)
  * Education
  * Experience
* Create a preview div that updates dynamically with user inputs

---

### ✅ **Phase 2: PDF Download Feature**

* Integrate html2pdf.js to export preview div as PDF
* Add "Download Resume" button to trigger PDF generation

---

### ✅ **Phase 3: Node.js Express Integration**

* Write server.js to:
  * Serve static files from **public/** folder
  * Listen on port 3000
* Test end-to-end functionality

---

### ✅ **Phase 4: Deployment**

* Deploy to platforms like Render, Vercel, or Netlify for public access

---

### ✅ **Phase 5: AI Integration (Future)**

* Use Gemini API to:
  * Generate professional summaries
  * Suggest job-relevant keywords
* Create secure Express route for API calls

---

### ✅ **Phase 6: Advanced Enhancements**

* Multiple ATS-friendly templates
* User authentication to save resumes
* Admin dashboard for usage analytics
* Download as `.docx` using docx Node.js library

---

## 📌 **Key ATS Best Practices Implemented**

✔️ Simple, single-column layouts
✔️ Standard fonts (Arial, Calibri, Times New Roman)
✔️ No tables, images, or complex formatting
✔️ Clear section headings and left-aligned content
✔️ Standard file naming conventions
✔️ Keyword optimization support

---

## 🤖 **Future Impact**

Integrating **Gemini AI** will empower users to write impactful, keyword-rich summaries tailored to specific job roles, significantly improving resume effectiveness and ATS compatibility.

---

## 🔗 **Use Cases**

This project is ideal for:

* **Web development practice** (Node.js + frontend integration)
* **Resume building startups** / SaaS ideas
* **AI application demonstrations**
* **ATS learning workshops**
* **Career services platforms**

---

## 💻 **Contributors**

Built by **[Your Name]**, open to feature requests and pull requests. Contact for collaboration on AI-powered resume enhancement tools.

---

## 🚀 **Getting Started**

1. Clone the repository
2. Run `npm install` to install dependencies
3. Start the server with `npm start` or `node server.js`
4. Open `http://localhost:3000` in your browser
5. Build and download your ATS-friendly resume!

---

*Ready to format as a **GitHub README.md file with badges** for direct publishing in your repository.*
