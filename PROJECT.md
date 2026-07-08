# MSU Market Intelligence Platform

## Overview

The goal of this project is to build a modular market intelligence platform for the MapleStory Universe (MSU) Marketplace.

This project is **not** an offer bot.

Its purpose is to collect marketplace data, store historical scans, analyze price behavior, detect arbitrage opportunities, and provide market intelligence that can later be consumed by other tools (such as an automated offer bot).

---

# Main Goals

- Scan the MSU Marketplace automatically.
- Store historical marketplace snapshots.
- Compute useful market metrics.
- Detect arbitrage opportunities.
- Support multiple flipping strategies.
- Generate reports and dashboards.
- Eventually become the backend for an Offer Bot.

---

# Project Philosophy

Instead of implementing strategies directly, the system will compute reusable market metrics.

Strategies are built on top of those metrics.

This allows new strategies to be added without changing the collector or analytics engine.

---

# Current Status

Current Phase:

✅ Phase 0 — Project Design

Current Step:

✅ Step 1 Complete

⬜ Step 2 - Navigator

---

# Architecture

Marketplace

↓

Collector

↓

Database

↓

Analytics Engine

↓

Strategy Engine

↓

Dashboard

↓

Alerts

↓

Future Offer Bot

---

# Planned Modules

app/

    collector/

    database/

    analytics/

    strategies/

    dashboard/

    config/

    utils/

---

# Collector Responsibilities

The collector is responsible ONLY for obtaining marketplace data.

It should NOT

- calculate statistics
- detect arbitrage
- generate reports
- make offers

Its only job is collecting raw market data.

---

# Analytics Responsibilities

The analytics engine computes

- Lowest Price
- Median Price
- Average Price
- Listing Count
- Historical Lowest
- Historical Highest
- Trend
- Spread
- ROI
- Liquidity Score

---

# Strategy Responsibilities

Strategies consume analytics.

Examples

- 140 → 200
- 180 → 200
- 120 → 140
- Event Strategies
- Future custom strategies

---

# Dashboard Responsibilities

The dashboard visualizes

- Current Market
- Historical Market
- Opportunities
- Price Charts
- Spread Charts
- Alerts

---

# Development Process

Each feature follows

Goal

↓

Design

↓

Implementation

↓

Validation

↓

Documentation

↓

Next Step

No feature advances until the current step is validated.

---

# Completed Steps

None

---

# Current Step

Step 1

Build a generic marketplace collector capable of navigating the marketplace, applying filters, collecting listings, and exporting raw data.