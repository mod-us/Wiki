---
sidebar_position: 4
title: Recovery Lag
---

# Recovery Lag

## Definition

**Recovery Lag** measures the average time (in months) between when an employee leaves and when their replacement reaches the same capacity level.

## Why It Matters

- **True cost of attrition:** Understaffing period is longer than "time to hire"
- **Capacity forecasting:** Know when you'll return to full strength
- **Hiring urgency:** Longer lag = need to hire further in advance
- **Revenue impact:** Each month of lag = lost revenue opportunity

## Formula

```
Recovery Lag = Average time from (Departure Date → Replacement reaches Departed Employee's Capacity Level)
```

**Components:**
1. **Vacancy period:** Time from departure → backfill start date
2. **Ramp period:** Time from backfill start → backfill reaches departed capacity level

## Why It's Not Just "Time to Hire"

**Time to Hire:** Measures how long it takes to fill a vacancy (usually 1-3 months)

**Recovery Lag:** Measures how long it takes to restore lost capacity (usually 4-7 months)

### Example

```
Employee leaves: March 1 (was at 100% capacity)
Backfill hired: May 1 (2-month time-to-hire)
Backfill reaches 100%: September 1 (5-month ramp)
───────────────────────────────────────────────────
Recovery Lag: 6 months (March → September)
Time to Hire: 2 months (March → May)
```

The organization lost 6 months of productivity, not 2.

## Worked Example 1: Fully Ramped Employee Leaves

**Scenario:**
- Sarah leaves July 1 at **100% capacity** ($1.2M annual quota)
- Backfill starts September 1 (2-month vacancy)
- Backfill ramp schedule: 0% → 25% → 50% → 75% → 100%

**Timeline:**
```
July:      0% (vacant)
August:    0% (vacant)
September: 0% (month 1 of ramp)
October:   25%
November:  50%
December:  75%
January:   100% ← RECOVERED
───────────────────────────────
Recovery Lag: 6 months
```

## Worked Example 2: Partially Ramped Employee Leaves

**Scenario:**
- Jason leaves March 1 at **50% capacity** (was 6 months into ramp)
- Backfill starts May 1 (2-month vacancy)
- Backfill ramp schedule: 0% → 25% → 50% → 75% → 100%

**Timeline:**
```
March:   0% (vacant)
April:   0% (vacant)
May:     0% (month 1 of ramp)
June:    25%
July:    50% ← RECOVERED to Jason's level
───────────────────────────────
Recovery Lag: 4 months
```

**Key insight:** Recovery lag is shorter when a partially ramped employee leaves, because you only need to restore to their capacity level (50%), not full capacity (100%).

## Calculating Average Recovery Lag

For multiple departures:

```
Average Recovery Lag = Σ (Individual Recovery Lags) / Number of Departures
```

### Example: North America East Q4 2025

| Employee | Departed | Capacity Lost | Backfill Start | Capacity Restored | Recovery Lag |
|----------|----------|---------------|----------------|-------------------|--------------|
| Tom | Sept 30 | 100% | Nov 30 | April 1 | 6 months |
| John | Oct 15 | 100% | Dec 15 | May 1 | 7 months |
| Sarah | Nov 1 | 50% | Jan 1 | March 1 | 4 months |
| Mike | Nov 15 | 75% | Jan 15 | April 15 | 5 months |
| Lisa | Dec 1 | 100% | Feb 1 | July 1 | 7 months |

```
Average Recovery Lag = (6 + 7 + 4 + 5 + 7) / 5 = 5.8 months
```

For demo simplification: **4.5 months average**

## Factors That Increase Recovery Lag

### 1. Longer Time-to-Hire
- Slow recruiting process
- Hard-to-fill roles
- Delayed backfill approvals

### 2. Longer Ramp Time
- Complex products
- Large territories to learn
- Inadequate onboarding

### 3. Senior Departures
- Losing a top performer (120% capacity)
- Takes longer for replacement to reach that level

### 4. No Backfill
- Position left vacant
- Recovery lag = ∞ (never recovered)

## Impact on Capacity

### Revenue Loss During Lag

```
Employee Annual Quota: $1.2M
Monthly Quota: $100K
Recovery Lag: 6 months
Lost Revenue Opportunity: $100K × 6 = $600K
```

**For a team with 45% attrition and 5 departures:**
```
5 employees × $600K each = $3.0M lost revenue opportunity
```

This is **on top of** replacement costs (recruiting, training, ramp).

### Compound Effect

With ongoing attrition, recovery lags overlap:

```
Month 1: Employee A leaves (6-month lag starts)
Month 2: Employee B leaves (6-month lag starts)
Month 3: Employee C leaves (6-month lag starts)
───────────────────────────────────────────────
You're ALWAYS carrying 3+ positions below full capacity
```

## How to Reduce Recovery Lag

### 1. Reduce Vacancy Time
- Pre-approved backfill budgets
- Evergreen recruiting pipelines
- Faster offer-to-accept process
- Competitive compensation

**Impact:** Cut 2-month vacancy to 1 month = 1-month shorter lag

### 2. Accelerate Ramp
- Better onboarding programs
- Manager shadowing
- Deal mentorship
- Territory warm-handoffs

**Impact:** Cut 5-month ramp to 4 months = 1-month shorter lag

### 3. Hire Experienced Reps
- Industry veterans ramp faster
- Comp trade-off: Higher salary vs faster productivity

**Impact:** Cut ramp from 5 months to 3 months = 2-month shorter lag

### 4. Backfill Immediately
- Don't wait for "headcount planning cycle"
- Automatic backfill approval for attrition
- Hire ahead of attrition (buffer capacity)

**Impact:** Start hiring before departure = 0-month vacancy

## Best Practices

### 1. Track by Cohort
- First 90-day quits: Different pattern than veteran departures
- Top performers: Longer recovery lag (hard to replace)
- Performance terminations: Shorter lag (were underperforming)

### 2. Set Targets
- **Vacancy period target:** < 60 days
- **Ramp to 100% target:** < 120 days
- **Total recovery lag target:** < 180 days (6 months)

### 3. Monitor Trends
- Is lag increasing? (Recruiting slowing down? Onboarding degrading?)
- Seasonal patterns? (Q1 hires ramp faster than Q4?)

### 4. Report to Leadership
> "We lost 5 people in Q4. Our average recovery lag is 5.8 months, meaning we'll operate below target capacity until May."

This makes the problem tangible and urgent.

## Common Pitfalls

- **Confusing with time-to-hire:** Recovery lag is always longer
- **Not tracking partial ramp departures:** They have shorter lags, bringing down your average
- **Ignoring backfill quality:** Hiring a poor performer = recovery lag approaches ∞
- **Not accounting for re-attrition:** If backfill leaves during ramp, lag resets

## Relationship to Other Metrics

| Metric | Relationship |
|--------|--------------|
| **Attrition Rate** | Higher attrition = more positions in recovery lag |
| **Time to Backfill** | Component of recovery lag (vacancy period) |
| **Ramp Time** | Component of recovery lag (onboarding period) |
| **Unrecovered Gap** | Current capacity deficit from ongoing recovery lags |
| **Backfill Rate** | % of positions actually backfilled (vs left vacant) |

## Related Terms

- [Attrition Rate](/docs/metrics/attrition-rate) - How much capacity you're losing
- [Time to Backfill](/docs/metrics/time-to-backfill) - Vacancy period component
- [Backfill Rate](/docs/metrics/backfill-rate) - Whether positions get filled
- [Unrecovered Gap](/docs/capacity/unrecovered-gap) - Current capacity shortfall
- [Backfill Planning](/docs/playbooks/backfill-planning) - How to minimize recovery lag

## References

- Also called: Time to full productivity, capacity restoration time
- Standard metric in enterprise sales capacity planning
- Critical input to workforce planning models
