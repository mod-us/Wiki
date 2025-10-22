---
sidebar_position: 1
title: Current Capacity
---

# Current Capacity

## Definition

**Current Capacity** is the total selling capacity your sales team can deliver right now, measured in dollars or RRE (Ramped Rep Equivalent). It accounts for employees who are active, partially ramped, and contributing to revenue generation.

## Why It Matters

- **Revenue forecasting:** Know what your team can realistically deliver
- **Gap analysis:** Compare against targets to identify shortfalls
- **Resource allocation:** Understand where capacity exists
- **Hiring decisions:** Quantify the need for additional sellers

## Formula

```
Current Capacity = Σ (Active Employees × Ramp % × Annual Quota)
```

**Components:**
- **Active Employees:** Currently employed and working (excludes LOA, terminated)
- **Ramp %:** Productivity level (0% to 100%) based on tenure
- **Annual Quota:** Revenue target for fully ramped rep in that role

---

## Calculating Current Capacity

### Step 1: Identify Active Employees

**Include:**
- ✅ Active full-time employees
- ✅ Ramping new hires (started but not fully productive)
- ✅ Employees with future termination dates (still active today)

**Exclude:**
- ❌ Terminated employees (termination date ≤ today)
- ❌ On leave of absence (LOA)
- ❌ To-be-hired (TBH) employees who haven't started yet

**Example Roster:**

| Employee | Status | Start Date | Termination Date | Include? |
|----------|--------|------------|------------------|----------|
| Alice | Active | 1/1/2023 | null | ✅ Yes |
| Bob | Active | 10/1/2025 | null | ✅ Yes (ramping) |
| Carol | Active | 1/1/2024 | 12/31/2025 | ✅ Yes (future term) |
| Dave | Terminated | 1/1/2023 | 11/15/2025 | ❌ No (already left) |
| Eve | LOA | 1/1/2024 | null | ❌ No (on leave) |
| Frank | TBH | 1/1/2026 | null | ❌ No (not started) |

**Result:** Alice, Bob, Carol are counted (3 active employees)

---

### Step 2: Apply Ramp Percentages

**Ramp % by tenure:**

| Employee | Start Date | Tenure | Ramp % |
|----------|------------|--------|--------|
| Alice | 1/1/2023 | 24 months | 100% (fully ramped) |
| Bob | 10/1/2025 | 2 months | 25% (ramping) |
| Carol | 1/1/2024 | 12 months | 100% (fully ramped) |

---

### Step 3: Calculate Individual Capacity

```
Individual Capacity = Annual Quota × Ramp %
```

| Employee | Annual Quota | Ramp % | Individual Capacity |
|----------|--------------|--------|-------------------|
| Alice | $1.2M | 100% | $1.2M |
| Bob | $1.2M | 25% | $0.3M |
| Carol | $1.4M | 100% | $1.4M |

---

### Step 4: Sum to Get Current Capacity

```
Current Capacity = $1.2M + $0.3M + $1.4M = $2.9M
```

**In RRE:**
```
Alice: 1.0 RRE
Bob: 0.25 RRE
Carol: 1.17 RRE (higher quota = more capacity)
─────────────────
Total: 2.42 RRE
```

---

## Worked Example: North America East

**Current date:** December 18, 2025 (Q4 2025)

**Roster:**

| Employee | Role | Quota | Start Date | Term Date | Tenure | Ramp % |
|----------|------|-------|------------|-----------|--------|--------|
| Sarah (VP) | Manager | $5.0M | 1/1/2020 | null | 5+ years | 100% |
| Michael | Manager | $1.5M | 1/1/2021 | null | 4 years | 100% |
| Amanda | Manager | $1.5M | 1/1/2022 | null | 3 years | 100% |
| Emily | AE | $1.2M | 1/1/2023 | null (LOA) | 2 years | 0% (on leave) |
| Sarah B | AE | $1.2M | 1/1/2024 | null | 1 year | 100% |
| Tom (Backfill) | AE | $1.4M | 11/30/2025 | null | 0.5 months | 0% (just started) |

**Calculation:**

```
Sarah (VP): $5.0M × 100% = $5.0M
Michael: $1.5M × 100% = $1.5M
Amanda: $1.5M × 100% = $1.5M
Emily: $1.2M × 0% = $0 (on LOA)
Sarah B: $1.2M × 100% = $1.2M
Tom (Backfill): $1.4M × 0% = $0 (Month 1 of ramp)
──────────────────────────────────
Current Capacity: $9.2M
```

**Headcount:** 5 active (Emily on LOA, so 5 working)

**Key Insight:** 6 total people, but only $9.2M of effective capacity due to:
- Emily on LOA (-$1.2M)
- Tom just started (-$1.4M until he ramps)

---

## Current Capacity vs Other Metrics

### Current Capacity vs Headcount

```
Headcount = Number of people (5 active + 1 TBH = 6)
Current Capacity = Productivity-weighted capacity ($9.2M)
```

**Why different?**
- Headcount treats everyone equally
- Capacity accounts for ramp and LOA

### Current Capacity vs Target Capacity

```
Current Capacity = What you have now ($9.2M)
Target Capacity = What you need to hit goals ($12.0M)
Gap = Target - Current = $2.8M shortfall
```

### Current Capacity vs Beginning of Quarter (BoQ) Capacity

```
BoQ Capacity (Oct 1) = $11.0M
Attrition during Q4 = -$2.5M
Backfills added = +$0.7M (partial ramp)
Current Capacity (Dec 18) = $9.2M
```

**BoQ is a snapshot at quarter start, Current is real-time.**

---

## When Current Capacity Changes

### Attrition Event

**Scenario:** Employee terminates mid-quarter

**Before termination:**
```
Current Capacity: $9.2M (5 people)
```

**After termination (Dec 1):**
```
Lost employee quota: $1.4M × 100% = $1.4M
New Current Capacity: $9.2M - $1.4M = $7.8M (4 people)
```

### New Hire Starts

**Scenario:** Backfill starts Month 1 of Q1

**Before start:**
```
Current Capacity: $7.8M (4 people)
```

**After start (Jan 1, Month 1 of ramp):**
```
New hire quota: $1.4M × 0% (Month 1 ramp) = $0
Current Capacity: $7.8M + $0 = $7.8M (5 people, but no capacity gain yet)
```

### Ramp Progression

**Scenario:** New hire moves from Month 1 → Month 2

**Before (Month 1):**
```
New hire: $1.4M × 0% = $0
Current Capacity: $7.8M
```

**After (Month 2):**
```
New hire: $1.4M × 25% = $0.35M
Current Capacity: $7.8M + $0.35M = $8.15M
```

### Return from LOA

**Scenario:** Employee returns from leave

**Before return:**
```
Emily: $1.2M × 0% (on LOA) = $0
Current Capacity: $8.15M
```

**After return (Jan 1):**
```
Emily: $1.2M × 100% (fully ramped, returning at 100%) = $1.2M
Current Capacity: $8.15M + $1.2M = $9.35M
```

---

## Tracking Current Capacity

### Daily Updates

**Current Capacity changes when:**
- ✅ Employee terminates (immediate decrease)
- ✅ New hire starts (usually no immediate increase due to 0% Month 1)
- ✅ Employee goes on LOA (immediate decrease)
- ✅ Employee returns from LOA (immediate increase)

### Monthly Updates

**Ramp progression triggers capacity increases:**
- All ramping reps advance one ramp stage (0% → 25% → 50% → 75% → 100%)

**Example monthly progression:**

| Month | Ramping Reps | Avg Ramp | Capacity Contribution |
|-------|--------------|----------|---------------------|
| Jan | 3 reps at Month 1 | 0% | $0 |
| Feb | 3 reps at Month 2 | 25% | $0.9M |
| Mar | 3 reps at Month 3 | 50% | $1.8M |
| Apr | 3 reps at Month 4 | 75% | $2.7M |
| May | 3 reps at Month 5+ | 100% | $3.6M |

**Total capacity gain over 5 months: $3.6M**

---

## Best Practices

### 1. Update in Real-Time

Don't wait for monthly close. Update Current Capacity immediately when:
- Attrition occurs
- New hire starts
- LOA begins/ends

### 2. Report Both Dollars and Headcount

```
Current Capacity: $9.2M (5 active reps)
```

**Why both?**
- Dollars: For revenue forecasting
- Headcount: For context ("wait, we have 6 people but only $9.2M?")

### 3. Show Composition

Break down Current Capacity by ramp status:

```
Current Capacity: $9.2M
  ├─ Fully ramped (FTE): $8.2M (4 reps at 100%)
  └─ Ramping (TBH): $1.0M (2 reps at 25% avg)
```

### 4. Track Trend Over Time

**Quarterly progression:**

| Quarter | BoQ Capacity | EoQ Capacity | Change |
|---------|--------------|--------------|--------|
| Q1 2025 | $17.0M | $15.3M | -$1.7M |
| Q2 2025 | $15.3M | $13.3M | -$2.0M |
| Q3 2025 | $13.3M | $11.1M | -$2.2M |
| Q4 2025 | $11.1M | $9.2M | -$1.9M |

**Insight:** Capacity declining each quarter (attrition > backfills)

---

## Common Pitfalls

### 1. Including TBH Employees

**Mistake:** "We have 3 TBH positions approved, so Current Capacity is $9.2M + $3.6M = $12.8M"

**Reality:** TBH means "to-be-hired" — they haven't started yet. Current Capacity = what you have TODAY.

### 2. Not Accounting for LOA

**Mistake:** "Emily is still employed, so she counts."

**Reality:** If she's on leave, she's not producing. Current Capacity excludes LOA.

### 3. Using Full Quota for Ramping Reps

**Mistake:** "Bob started 2 months ago, so he's contributing $1.2M."

**Reality:** Bob is at 25% ramp, contributing $0.3M.

### 4. Forgetting Manager/Leader Quotas

**Mistake:** Only counting individual contributors.

**Reality:** Managers often carry team quotas. Include them in Current Capacity.

---

## Related Terms

- [Gap to Target](/docs/capacity/gap-to-target) - Difference between Current and Target
- [Beginning of Quarter Capacity](/docs/capacity/current-capacity) - Snapshot at quarter start
- [RRE](/docs/metrics/rre) - Unit for measuring capacity
- [Capacity Planning](/docs/playbooks/capacity-planning) - Using Current Capacity in planning
- [Headcount vs Capacity](/docs/foundations/headcount-vs-capacity) - Why they differ

## References

- Standard metric in sales capacity planning
- Also called: Effective capacity, productive capacity, current selling capacity
- Always accounts for ramp, excludes LOA and future hires
