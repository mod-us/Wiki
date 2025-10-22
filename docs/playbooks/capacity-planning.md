---
sidebar_position: 2
title: Capacity Planning
---

# Capacity Planning

## Definition

**Capacity Planning** is the process of forecasting sales capacity needs, tracking current capacity, and managing the gap between current and target capacity through hiring, backfills, and resource allocation.

## Why It Matters

- **Revenue predictability:** Align capacity with revenue targets
- **Budget efficiency:** Right-size hiring and comp spend
- **Proactive hiring:** Stay ahead of attrition and growth needs
- **Quota fairness:** Set realistic targets based on actual capacity
- **Executive confidence:** Give leadership visibility into capacity health

## The Quarterly Capacity Planning Cycle

### Phase 1: Assess Current State (Week 1)

#### 1.1 Calculate Current Capacity

```
Current Capacity = Σ (Active Employees × Ramp %)
```

**Example:**
- 15 fully ramped reps × 100% = 15.0 RRE
- 3 ramping reps × 60% = 1.8 RRE
- **Total: 16.8 RRE or $6.72M capacity**

#### 1.2 Identify the Gap

```
Gap to Target = Target Capacity - Current Capacity
```

**Example:**
- Target: $10.0M
- Current: $6.72M
- **Gap: $3.28M** (shortfall)

#### 1.3 Analyze Root Causes

| Root Cause | Impact | Example |
|------------|--------|---------|
| **Attrition** | Lost capacity | 5 people left in Q4 = -$5.0M |
| **Ramp drag** | Partial capacity | 3 new hires at 25% ramp |
| **Leaves** | Temporary loss | 1 person on LOA = -$1.2M |
| **Unfilled roles** | Missed hires | 2 TBH positions not filled |

---

### Phase 2: Forecast Future Capacity (Week 2)

#### 2.1 Predict Attrition

Use [Capacity at Risk](/docs/metrics/capacity-at-risk) metric:

```
Predicted Attrition (Next Q) = Current Capacity × Historical Attrition Rate
```

**Example:**
- Q1 2026 Beginning Capacity: $7.0M
- Trailing 4Q Attrition Rate: 13.5%
- **Predicted Q1 Attrition: $945K**

#### 2.2 Account for Ramp Progression

Existing ramping reps will increase capacity:

**Example:**
```
3 reps currently at 60% → will be 85% next quarter
Capacity gain: 3 × (85% - 60%) × $1.2M = $0.9M
```

#### 2.3 Model Backfills and New Hires

For each planned hire, calculate quarterly capacity contribution:

**Example: Hire starting Month 1 of Q1**
```
Month 1: $100K × 0% = $0
Month 2: $100K × 25% = $25K
Month 3: $100K × 50% = $50K
─────────────────────────────
Q1 Contribution: $75K
```

#### 2.4 Calculate End-of-Quarter Capacity

```
EoQ Capacity = BoQ Capacity
               - Predicted Attrition
               + Ramp Progression
               + New Hire Contributions
```

**Example:**
```
BoQ: $7.0M
Attrition: -$945K
Ramp progression: +$0.9M
New hires (4 planned): +$300K (partial quarter ramp)
────────────────────────────────
EoQ: $7.255M
Gap to Target: $10.0M - $7.255M = $2.745M (still short)
```

---

### Phase 3: Build Hiring Plan (Week 3)

#### 3.1 Calculate Hiring Need

```
Total Hiring Need = Gap to Close + Expected Attrition
```

**Example:**
```
Gap to close: $2.745M
Q2 expected attrition: $945K (assuming 13.5% continues)
────────────────────────────────
Total need: $3.69M capacity

At $1.2M annual quota per rep:
$3.69M / $1.2M = 3.1 FTE
→ Need to hire 3-4 people in Q1
```

#### 3.2 Build Hiring Timeline

For each hire, determine:
- **Start date:** When can they realistically start?
- **Role/quota:** What will they carry?
- **Ramp schedule:** How will they progress?

**Example Timeline:**

| Hire | Role | Start Date | Annual Quota | Q1 Contribution | Q2 Contribution |
|------|------|------------|--------------|-----------------|-----------------|
| Recovery Hire #1 | AE | Month 1 | $1.2M | $75K | $300K |
| Recovery Hire #2 | AE | Month 1 | $1.2M | $75K | $300K |
| Recovery Hire #3 | AE | Month 3 | $1.2M | $25K | $300K |
| Growth Hire #1 | AE | Month 3 | $1.2M | $25K | $300K |
| **Total** | | | | **$200K** | **$1.2M** |

#### 3.3 Model Recovery Scenario

Project when you'll close the gap:

```
Q1 2026: $7.0M → $7.255M (gap: $2.745M)
Q2 2026: $7.255M + $1.2M - $945K = $7.51M (gap: $2.49M)
Q3 2026: $7.51M + $1.8M - $945K = $8.365M (gap: $1.635M)
Q4 2026: $8.365M + $2.4M - $945K = $9.82M (gap: $180K)
Q1 2027: $9.82M + $2.7M - $945K = $11.575M ← RECOVERED ✓
```

**Result:** Will return to target capacity by Q1 2027 (5 quarters out)

---

### Phase 4: Communicate Plan (Week 4)

#### 4.1 Executive Summary

**For leadership:**

> **Capacity Health: Below Target**
>
> **Current Situation:**
> - Current Capacity: $7.0M (5 active reps)
> - Target Capacity: $10.0M
> - Gap: $3.0M (30% below target)
>
> **Root Cause:**
> - Q4 attrition: 5 people departed ($5.0M lost)
> - Only 1 backfill hired ($0.9M partial recovery)
> - Unrecovered Gap: $4.1M
>
> **Action Plan:**
> - Hire 4 AEs in Q1 2026 (2 backfills + 2 growth)
> - Expected recovery timeline: Q1 2027 (5 quarters)
> - Investment required: 4 × $120K OTE = $480K salary
>
> **Risk:** If attrition continues at 13.5% quarterly, will need additional hires to maintain recovery trajectory.

#### 4.2 Sales Team Communication

**For managers:**

> **Q1 Hiring Plan**
>
> We're currently at $7.0M capacity ($3.0M below target) due to Q4 attrition. To close the gap:
>
> **Q1 Hires (Starting Soon):**
> - 2 AEs starting Month 1 (backfilling Tom and John)
> - 2 AEs starting Month 3 (growth hires)
>
> **What This Means:**
> - Team will grow from 5 → 9 people by end of Q1
> - Capacity will increase to ~$7.3M (still ramping)
> - Full recovery expected by Q1 2027
>
> **Manager Action Items:**
> - Prepare onboarding plans for new hires
> - Assign territory handoffs
> - Schedule mentorship pairings

---

## Capacity Planning Tools

### 1. Capacity Breakdown Table

Track quarterly capacity progression:

| Quarter | Target | Current | Gap | FTE | TBH | Attrition |
|---------|--------|---------|-----|-----|-----|-----------|
| Q4 2025 | $10M | $7.0M | $3.0M | 4 | 1 | $5.0M |
| Q1 2026 | $10M | $7.3M | $2.7M | 5 | 4 | $945K (est) |
| Q2 2026 | $10M | $7.5M | $2.5M | 7 | 2 | $945K (est) |
| Q3 2026 | $10M | $8.4M | $1.6M | 9 | 0 | $945K (est) |

### 2. Capacity Waterfall

Visualize quarterly capacity flow:

```
BoQ Capacity:     $7.0M
  - Attrition:    -$945K
  + Backfills:    +$0.3M
  + Ramp gains:   +$0.9M
────────────────────────
EoQ Capacity:     $7.255M
```

### 3. Hiring Timeline

12-month forward view of all hires with ramp schedules.

### 4. Scenario Models

| Scenario | Attrition Assumption | Hiring Plan | Q4 2026 Capacity |
|----------|---------------------|-------------|------------------|
| **Optimistic** | 10% quarterly | 3 hires/quarter | $10.5M ✓ |
| **Baseline** | 13.5% quarterly | 4 hires/quarter | $9.8M |
| **Conservative** | 16% quarterly | 5 hires/quarter | $9.2M |

---

## Best Practices

### 1. Plan Quarterly, Review Monthly

- **Quarterly:** Full capacity plan for next 4 quarters
- **Monthly:** Update actuals, adjust forecast

### 2. Use Capacity, Not Headcount

```
❌ "We have 25 people"
✓ "We have 19.5 RRE of capacity"
```

### 3. Account for Ramp

```
❌ "If we hire 5 people this quarter, we'll hit target"
✓ "5 hires this quarter will contribute 1.25 RRE by quarter-end"
```

### 4. Plan for Attrition

```
❌ "Zero attrition assumed"
✓ "13.5% quarterly attrition based on trailing 4Q average"
```

### 5. Communicate Uncertainty

```
❌ "We'll hit $10M capacity in Q3"
✓ "We'll hit $10M capacity in Q3 assuming 13.5% attrition (range: Q2-Q4 depending on actual attrition)"
```

---

## Common Pitfalls

### 1. Set-and-Forget Planning

**Problem:** Build annual plan in January, don't touch it until December

**Solution:** Monthly capacity reviews, quarterly plan updates

### 2. Optimistic Attrition Assumptions

**Problem:** "Attrition will improve" without basis

**Solution:** Use historical data, not wishful thinking

### 3. Ignoring Recovery Lag

**Problem:** "We backfilled 5 positions, gap is closed"

**Solution:** Account for 4-6 month recovery lag

### 4. Not Tracking Actuals vs Plan

**Problem:** Plan diverges from reality, no one notices

**Solution:** Monthly variance reporting (actual vs plan)

---

## Related Terms

- [Current Capacity](/docs/capacity/current-capacity) - How to measure what you have
- [Gap to Target](/docs/capacity/gap-to-target) - Calculating the shortfall
- [Capacity at Risk](/docs/metrics/capacity-at-risk) - Predicting future attrition
- [RRE](/docs/metrics/rre) - The unit of capacity measurement
- [Backfill Planning](/docs/playbooks/backfill-planning) - Responding to attrition
- [Territory Planning](/docs/playbooks/territory-planning) - Allocating capacity to coverage

## References

- Standard practice in enterprise sales operations
- Also called: Workforce planning, headcount planning, capacity forecasting
