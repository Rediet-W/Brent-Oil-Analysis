# Brent Oil Price Analysis

This project analyzes the impact of major geopolitical and economic events on Brent oil prices from 1987 to 2022.

## Project Objective

To quantify the relationship between global events and oil price fluctuations, providing actionable insights for investors and policymakers.

## Workflow

1. **Data Loading**: Ingesting daily Brent historical data.
2. **Preprocessing**: Handling time-series gaps via forward-fill methods.
3. **EDA**: Analyzing trends, stationarity (ADF test), and volatility.
4. **Change Point Detection**: Using `ruptures` to identify structural regime shifts.
5. **Correlation Analysis**: Mapping identified shifts against compiled historical events.
6. **Insight Generation**: Synthesizing causal relationships.
