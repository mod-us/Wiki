---
sidebar_position: 3
title: Capacity at Risk
---

# Capacity at Risk

## Definition

**Capacity at Risk** is a predictive metric that estimates how much sales capacity you're likely to lose to attrition in the next quarter, based on historical patterns.

## Why It Matters

- **Proactive planning:** Know hiring needs before capacity is lost
- **Budget forecasting:** Anticipate backfill costs
- **Risk management:** Identify when attrition risk is elevated
- **Scenario planning:** Model best-case, baseline, and worst-case futures

## Formula

### Three Prediction Methods

Capacity at Risk uses historical attrition rates applied to next quarter's beginning capacity:

```
Capacity at Risk = Next Quarter Beginning Capacity × Historical Attrition Rate
```

**Three methods provide a range estimate:**

1. **Trailing 4 Quarters (Baseline)** ⭐ - Most balanced
2. **Prior Quarter** - Most recent trend
3. **Same Quarter Last Year** - Accounts for seasonality

## Worked Example: North America East

### Starting Point

- **Current Quarter:** Q4 2025
- **Next Quarter (Q1 2026) Beginning Capacity:** $7.0M
- **Standard Quarterly Quota:** $300K per rep

---

### METHOD 1: Trailing 4 Quarters (Baseline) ⭐

**Step 1:** Sum total capacity at start of each quarter
```
Q1 2025 BoQ: $11.0M
Q2 2025 BoQ: $9.5M
Q3 2025 BoQ: $8.7M
Q4 2025 BoQ: $7.7M
-----------------------
Total: $37.0M
```

**Step 2:** Sum total attrition over 4 quarters
```
Q1 loss: $1.8M
Q2 loss: $1.2M
Q3 loss: $1.2M
Q4 loss: $0.8M
-----------------------
Total: $5.0M
```

**Step 3:** Calculate effective quarterly attrition rate
```
Rate = Total Attrition / Total Starting Capacity
Rate = $5.0M / $37.0M = 13.5%
```

**Step 4:** Apply to next quarter
```
Q1 2026 starting capacity = $7.0M
Predicted Q1 2026 attrition = $7.0M × 13.5% = $945K
```

**Result:** **$945K at risk** (3 people equivalent)

---

### METHOD 2: Prior Quarter (Recent Trend)

**Step 1:** Get prior quarter attrition rate
```
Q4 loss: $0.8M
Q4 BoQ: $7.7M
Rate = $0.8M / $7.7M = 10.4%
```

**Step 2:** Apply to next quarter
```
Q1 2026 starting capacity = $7.0M
Predicted Q1 2026 attrition = $7.0M × 10.4% = $728K
```

**Result:** **$728K at risk** (optimistic - assumes Q4 trend continues)

---

### METHOD 3: Same Quarter Last Year (Seasonality)

**Step 1:** Get Q1 2025 attrition rate
```
Q1 2025 loss: $1.8M
Q1 2025 BoQ: $11.0M
Rate = $1.8M / $11.0M = 16.4%
```

**Step 2:** Apply to next quarter
```
Q1 2026 starting capacity = $7.0M
Predicted Q1 2026 attrition = $7.0M × 16.4% = $1.148M
```

**Result:** **$1.148M at risk** (conservative - Q1 often has higher attrition)

---

## Range Summary

| Method | Rate | Predicted Q1'26 Attrition | People Equivalent |
|--------|------|---------------------------|-------------------|
| **Prior Quarter (Q4)** | 10.4% | $728K | 2.4 people |
| **Trailing 4Qs (baseline)** | 13.5% | $945K | 3.2 people |
| **Same Quarter Last Year (Q1)** | 16.4% | $1.148M | 3.8 people |

**Interpretation:**
- **Low bound:** $728K (if recent low attrition continues)
- **Baseline:** $945K (balanced historical average)
- **High bound:** $1.148M (if Q1 seasonality repeats)

## When to Use Each Method

### Trailing 4 Quarters ⭐ (Default)
- **Best for:** Baseline planning
- **Use when:** You want a balanced, stable estimate
- **Pros:** Smooths out quarterly volatility
- **Cons:** May lag recent trends

### Prior Quarter
- **Best for:** Short-term forecasts
- **Use when:** Recent quarter was "normal"
- **Pros:** Most responsive to recent changes
- **Cons:** Can overreact to one-time events

### Same Quarter Last Year
- **Best for:** Seasonal businesses
- **Use when:** You have strong seasonal patterns
- **Pros:** Accounts for Q1/Q4 spikes
- **Cons:** Assumes patterns repeat year-over-year

## Headcount Equivalent

Convert dollar capacity at risk to people:

```
People at Risk = Capacity at Risk / Standard Quarterly Quota
```

**Example:**
```
Baseline Capacity at Risk: $945K
Standard Quota: $1.2M annual = $300K quarterly
People at Risk: $945K / $300K = 3.15 ≈ 3 people
```

**⚠️ Important:** This is capacity-weighted headcount, not actual departures. Losing 2 top performers could equal 3 people of capacity.

## Status Thresholds

Set alert thresholds based on % of beginning capacity:

| Status | Threshold | Example ($7.0M BoQ) |
|--------|-----------|---------------------|
| 🟢 **Good** | < 10% | < $700K |
| 🟡 **Warning** | 10-15% | $700K - $1.05M |
| 🔴 **Critical** | > 15% | > $1.05M |

**Current Example:** $945K / $7.0M = 13.5% → 🟡 Warning

## How to Use This Metric

### 1. Set Hiring Targets

```
Capacity at Risk: $945K
→ Need to hire 3-4 people next quarter
→ Assuming 2-month time-to-fill
→ Start recruiting now
```

### 2. Scenario Planning

| Scenario | Assumption | Hiring Needed |
|----------|------------|---------------|
| **Optimistic** | Prior Q trend (10.4%) | 2-3 hires |
| **Baseline** | Trailing 4Q (13.5%) | 3-4 hires |
| **Conservative** | Same Q LY (16.4%) | 4-5 hires |

### 3. Update Monthly

As the quarter progresses, update with actual attrition:
- If Q4 attrition ends higher than $0.8M, all three methods increase
- Recalculate monthly to stay current

## Best Practices

1. **Display all three methods:** Show the range, not just baseline
2. **Track actuals vs predicted:** Validate which method is most accurate for your org
3. **Adjust for known events:** Upcoming reorg? Comp changes? Factor those in
4. **Communicate uncertainty:** This is a prediction, not a guarantee
5. **Plan for the mid-range:** Budget for baseline, prepare for high

## Common Pitfalls

- **Treating prediction as fact:** Actual attrition will vary
- **Ignoring outliers:** One-time mass departure skews trailing 4Q
- **Not updating quarterly:** Historical rates change over time
- **Forgetting leaves of absence:** LOA is temporary loss, not attrition

## Related Terms

- [Attrition Rate](/docs/metrics/attrition-rate) - Historical turnover measurement
- [Unrecovered Gap](/docs/capacity/unrecovered-gap) - Current capacity deficit
- [Backfill Planning](/docs/playbooks/backfill-planning) - How to respond to predicted risk
- [Hiring Planning](/docs/playbooks/hiring-planning) - Building proactive hiring timelines

## References

- Predictive capacity planning is standard in enterprise sales ops
- Similar to: Attrition forecast, turnover risk, capacity forecast
