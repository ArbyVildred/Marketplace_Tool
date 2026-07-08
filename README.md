# MSU Market Intelligence Platform

## Overview

The MSU Market Intelligence Platform is a tool designed to collect, analyze, and visualize data from the MapleStory Universe Marketplace.

The goal is to identify market opportunities by collecting marketplace listings, storing historical data, and computing useful market metrics.

This project **does not automatically buy or sell characters**.

It is a market analysis platform.

---

# Features (Planned)

- Marketplace Collector
- Historical Database
- Statistics Engine
- Arbitrage Detection
- Dashboard
- Alerts
- Future Offer Bot Integration

---

# Requirements

Before starting, install the following software.

## 1. Node.js

Download and install the LTS version.

https://nodejs.org/

Verify installation:

```bash
node -v
npm -v
```

---

## 2. Google Chrome

Install Google Chrome.

Do NOT use Chromium.

---

## 3. Git

Download:

https://git-scm.com/downloads

Verify:

```bash
git --version
```

---

## 4. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY
```

Example

```bash
git clone https://github.com/YOURNAME/MSU-Market-Analyzer.git
```

---

## 5. Open the project

```bash
cd MSU-Market-Analyzer
```

---

## 6. Install Collector dependencies

```bash
cd collector

npm install
```

---

## 7. Run Collector

```bash
node main.js
```

---

# Project Structure

collector/

Node.js

Responsible for collecting marketplace data.

analytics/

Python

Responsible for statistics, history, dashboards, and strategies.

config/

Project configuration files.

data/

Historical scans and databases.

---

# Current Status

Phase 0

Project Initialization