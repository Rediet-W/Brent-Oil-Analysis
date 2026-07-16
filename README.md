# Brent Oil Price Analysis & Dashboard

A comprehensive data analysis and visualization project designed to identify structural breaks in Brent oil prices and correlate them with key geopolitical and economic events [1.2.1, 1.2.5].

## Table of Contents

1. [Overview](https://www.google.com/search?q=%23overview)
2. [Tech Stack](https://www.google.com/search?q=%23tech-stack)
3. [Project Structure](https://www.google.com/search?q=%23project-structure)
4. [Tasks Performed](https://www.google.com/search?q=%23tasks-performed)
5. [Getting Started](https://www.google.com/search?q=%23getting-started)
6. [License & Acknowledgments](https://www.google.com/search?q=%23license--acknowledgments)

---

## Overview

This project provides actionable intelligence for stakeholders by analyzing the impact of geopolitical shocks on Brent oil prices. It combines statistical modeling (Kernel Change Point Detection) with an interactive web dashboard to visualize how events like sanctions, conflicts, and policy shifts have historically altered market regimes [1.2.4, 1.2.5].

## Tech Stack

- **Data Analysis:** Python, Pandas, NumPy, Ruptures [1.2.1]
- **Backend:** Flask, Flask-CORS [1.2.4]
- **Frontend:** React, Recharts, Axios [1.2.4]

## Project Structure

```text
Brent-Oil-Analysis/
├── backend/            # Flask API server
├── data/               # CSV datasets (prices & events)
├── frontend/           # React dashboard application
├── notebooks/          # Jupyter notebooks for analysis (EDA & Modeling)
└── README.md

```

## Tasks Performed

- **Task 1: Exploratory Data Analysis:** Conducted stationarity testing (ADF) and log-return analysis to understand price volatility clustering.
- **Task 2: Change Point Modeling:** Implemented Kernel Change Point Detection (KCPD) to identify and quantify structural breaks, mapping them to historical events [1.2.1].
- **Task 3: Interactive Dashboard:** Developed a full-stack application serving analyzed data via REST APIs, visualized through an interactive React interface [1.2.4].

## Getting Started

### 1. Prerequisites

Ensure you have Python and Node.js installed.

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py

```

_The API will start at `[http://127.0.0.1:5000](http://127.0.0.1:5000)`._

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start

```

_The dashboard will be available at `http://localhost:3000`._

## License & Acknowledgments

This project was developed as a case study for financial market analysis. Contributions and feedback are welcome via pull requests [1.1.5, 1.2.1].
