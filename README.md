# 🚀 C++ High-Performance Skill Matcher (Full-Stack Web Demo)

## ✨ Live Project Demo

[![Live Demo] (https://shrutir15.github.io/Cpp-Skill-Matcher-Web-Tool/)

---

#Overview

This project is a **Full-Stack web application** demonstrating proficiency in **C++ performance optimization** combined with modern web development (HTML, CSS, JavaScript). It solves the common problem of skill-to-job matching with **quantified, data-driven feedback**. 

| Skill Demonstrated | Technology/Concept |
| :--- | :--- |
| **Backend/Core Logic** | **C++** (High-performance algorithm for scalability and efficiency) |
| **Frontend Development** | **HTML5, CSS3, JavaScript** (Clean, responsive, interactive UI) |
| **Algorithm / Data Structure** | **Set Intersection** and **Tokenization** for efficient keyword matching |
| **Architecture** | **Full-Stack Design** and **DevOps** (GitHub Pages for immediate deployment) |

---

## ⚙️ Architecture and Performance Rationale

### The Hybrid Approach

The application employs a hybrid architecture to showcase adaptability:

1.  **Frontend (Web Demo):** The matching logic is currently **simulated using JavaScript** (`script.js`) for instant loading and cross-browser compatibility.
2.  **Backend (Production Ready):** The core algorithm is implemented in high-speed **C++** (`skill_matcher.cpp`). This demonstrates that the final production system is designed to be highly scalable and can process massive datasets (e.g., 10,000 resumes) in milliseconds.

**Key Feature:** The C++ code is designed to be compiled to **WebAssembly (Wasm)** for native execution speed within the browser or deployed as a high-performance backend microservice.

### Dynamic Features

* **Dynamic Input:** Accepts user-defined job requirements and personal skills for **any job profile** (not just AI/ML).
* **Conditional Feedback (The "AI"):** Provides unique, personalized analysis based on the user's selection of **Critical**, **Balanced**, or **Potential** role thresholds.

---

## 🖥️ How to Run and Verify the C++ Core

This section validates the performance coding skill required by many companies.

### 1. Compile the C++ File

```bash
g++ skill_matcher.cpp -o matcher -std=c++11# Cpp-Skill-Matcher-Web-Tool
