---
sidebar_position: 6
title: Capacity Waterfall
---

# Capacity Waterfall

## Definition

A **Capacity Waterfall** is a visual representation that shows how sales capacity flows from Beginning of Quarter (BoQ) through attrition and backfills to End of Quarter (EoQ). It makes capacity changes tangible and easy to understand at a glance.

## Why It Matters

- **Visual clarity:** See exactly where capacity went
- **Storytelling:** Explain capacity gaps to non-technical stakeholders
- **Root cause analysis:** Identify biggest drivers of capacity change
- **Trend tracking:** Compare waterfalls quarter-over-quarter

---

## Basic Waterfall Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  $11M ┃█████████████████████████┃ BoQ Capacity         │
│       ┃                          ┃                      │
│       ┃         -$6.2M           ┃                      │
│  $5M  ┃          ▼▼▼             ┃ Loss Capacity        │
│       ┃                          ┃                      │
│       ┃         +$0.9M           ┃                      │
│  $6M  ┃            ▲             ┃ Backfills Added      │
│       ┃                          ┃                      │
│  $5.7M┃██████████████            ┃ EoQ Capacity         │
│       ┃                          ┃                      │
└─────────────────────────────────────────────────────────┘
```

---

## Worked Example: North America East Q4 2025

### The Story in Numbers

```
Beginning of Quarter (Oct 1):    $11.0M  (9 people)
Less: Total Attrition:           -$6.2M  (5 people left)
Less: Leaves of Absence:         -$0     (included in attrition)
Plus: Backfills Added:           +$0.9M  (1 person, partial ramp)
Plus: Ramp Progression:          +$0     (no one advanced ramp stages)
─────────────────────────────────────────────────────────
End of Quarter (Dec 31):         $5.7M   (5 people)

Net Change:                      -$5.3M  (-4 people net)
```

### Waterfall Visualization

```
$12M ┐
     │ ┏━━━━━━━━━━━┓
     │ ┃   $11.0M  ┃ ← BoQ
$10M │ ┃           ┃
     │ ┃           ┃
 $8M │ ┃           ┃
     │ ┃           ┃        ┏━━━━━┓
 $6M │ ┃           ┃        ┃$5.7M┃ ← EoQ
     │ ┗━━━━━━━━━━━┛        ┗━━━━━┛
 $4M │      │
     │      │   ↓ -$6.2M (Loss)
 $2M │      │   ↑ +$0.9M (Backfills)
     │      └─────┘
 $0M └────────────────────────────
     BoQ   Loss  Backfills  EoQ
```

---

## Components of a Capacity Waterfall

### 1. Beginning of Quarter (BoQ) Capacity

**What it is:** Starting capacity on Day 1 of the quarter

**Example:**
```
BoQ (Oct 1): $11.0M
  ├─ 7 fully ramped reps × 100% = $9.5M
  ├─ 2 ramping reps × 75% = $1.5M
  └─ Total: 9 people, $11.0M capacity
```

**Bar color:** 🟦 Blue (starting point)

---

### 2. Loss Capacity (Attrition)

**What it is:** Capacity lost to departures and leaves

**Example:**
```
Q4 Attrition: -$6.2M
  ├─ Tom (Sept 30): -$1.4M
  ├─ John (Oct 15): -$1.2M
  ├─ Mike (Nov 1): -$1.0M
  ├─ Lisa (Nov 15): -$1.4M
  └─ Sarah (LOA Dec 1): -$1.2M
  └─ Total: 5 people, -$6.2M
```

**Bar direction:** ⬇️ Downward (loss)
**Bar color:** 🟥 Red (negative impact)

---

### 3. Backfills Added

**What it is:** Capacity recovered through new hires

**Example:**
```
Q4 Backfills: +$0.9M
  ├─ Tom's Backfill (Nov 30):
  │   Annual quota: $1.4M
  │   Ramp in Q4: Month 1 = 0%, partial month
  │   Q4 contribution: ~$0
  ├─ John's Backfill (planned for Q1)
  └─ Total: 1 person started, +$0.9M partial capacity
```

**Bar direction:** ⬆️ Upward (gain)
**Bar color:** 🟩 Green (positive impact)

---

### 4. Ramp Progression

**What it is:** Existing reps advancing to next ramp stage

**Example:**
```
Q4 Ramp Progression: +$0.5M
  ├─ 2 reps moved from 50% → 75%
  │   Gain: 2 × $1.2M × 25% = $0.6M
  └─ But 1 rep left before advancing, net: +$0.5M
```

**Bar direction:** ⬆️ Upward (gain)
**Bar color:** 🟦 Light Blue (internal improvement)

**Note:** In Q4 North America East example, no ramp progression occurred.

---

### 5. End of Quarter (EoQ) Capacity

**What it is:** Final capacity on last day of quarter

**Example:**
```
EoQ (Dec 31): $5.7M
  ├─ 4 fully ramped reps × 100% = $5.0M
  ├─ 1 ramping backfill × 70% = $0.7M
  └─ Total: 5 people, $5.7M capacity
```

**Bar color:** 🟦 Blue (ending point)

---

## Reading a Waterfall

### Key Metrics Panel

Displayed alongside the waterfall:

```
┌──────────────────────────────────────────┐
│ WATERFALL METRICS                        │
├──────────────────────────────────────────┤
│ Total Attrition Impact:  -$6.2M  (56%)  │
│ Backfill Recovery:       +$0.9M  (15%)  │
│ Unrecovered Capacity:    -$5.3M  (85%)  │
│ Recovery Lag:            4.5 months avg  │
├──────────────────────────────────────────┤
│ Annual Quota Lost:       $6.2M          │
│   (Full annual quotas of departed employees)
└──────────────────────────────────────────┘
```

### Percentage Calculations

**Attrition Rate:**
```
Attrition Rate = Loss Capacity / BoQ Capacity
= $6.2M / $11.0M = 56.4%
```

**Backfill Recovery Rate:**
```
Backfill Rate = Recovered Capacity / Loss Capacity
= $0.9M / $6.2M = 14.5%
```

**Unrecovered Rate:**
```
Unrecovered = (Loss - Recovered) / Loss
= ($6.2M - $0.9M) / $6.2M = 85.5%
```

---

## Quarter-by-Quarter Waterfall Comparison

### Q1 2025

```
BoQ: $17.0M → Loss: -$2.0M → Backfills: +$0.3M → EoQ: $15.3M
Net: -$1.7M (10% decline)
Status: 🟢 Manageable
```

### Q2 2025

```
BoQ: $15.3M → Loss: -$2.3M → Backfills: +$0.3M → EoQ: $13.3M
Net: -$2.0M (13% decline)
Status: 🟡 Concern growing
```

### Q3 2025

```
BoQ: $13.3M → Loss: -$2.5M → Backfills: +$0.3M → EoQ: $11.1M
Net: -$2.2M (17% decline)
Status: 🟠 Accelerating
```

### Q4 2025

```
BoQ: $11.1M → Loss: -$6.2M → Backfills: +$0.9M → EoQ: $5.7M
Net: -$5.3M (48% decline)
Status: 🔴 Crisis
```

**Trend:** Each quarter's decline accelerated, culminating in Q4 crisis.

---

## Advanced Waterfall: Detailed Breakdown

### Segment Loss by Type

```
BoQ: $11.0M

Loss Breakdown:
  ├─ Voluntary Resignation:  -$4.0M
  ├─ Performance Termination: -$1.0M
  └─ LOA (Temporary):        -$1.2M
  └─ Total Loss:             -$6.2M

Recovery Breakdown:
  ├─ Backfill 1 (ramping):   +$0.7M
  ├─ Backfill 2 (ramping):   +$0.2M
  └─ Total Recovery:         +$0.9M

EoQ: $5.7M
```

### Multi-Tier Waterfall (by Role)

```
                    Enterprise AE      Mid-Market AE       SDR
BoQ:                $6.0M              $4.0M              $1.0M
Loss:               -$3.8M (63%)       -$1.8M (45%)       -$0.6M (60%)
Backfills:          +$0.5M             +$0.3M             +$0.1M
EoQ:                $2.7M              $2.5M              $0.5M
```

**Insight:** Enterprise AE attrition is disproportionately high (63% loss rate).

---

## Using Waterfalls in Presentations

### Executive Summary Format

**Slide title:** "Q4 Capacity Waterfall: $11M → $5.7M"

**Visual:** Large waterfall chart

**Key Takeaways:**
1. Started Q4 with $11M capacity
2. Lost $6.2M to attrition (56% loss rate, 3× historical avg)
3. Recovered only $0.9M through 1 backfill (15% recovery rate)
4. Ended Q4 with $5.7M capacity (48% below BoQ)
5. **Action needed:** Hire 5-6 AEs in Q1 to restore capacity

---

### Quarterly Business Review (QBR) Format

**Slide 1: Waterfall**
- Visual showing BoQ → Loss → Recovery → EoQ

**Slide 2: Root Cause**
- Why was attrition so high? (compensation, manager turnover, market)

**Slide 3: Recovery Plan**
- Hiring plan for next 2 quarters
- Expected timeline to return to target
- Retention initiatives

---

## Best Practices

### 1. Use Consistent Colors

- **BoQ/EoQ bars:** Blue
- **Loss bars:** Red (downward)
- **Gain bars:** Green (upward)

### 2. Label Everything

```
❌ -$6.2M
✅ -$6.2M (Loss: 5 people, 56% attrition)
```

### 3. Show Both Dollars and Headcount

```
Loss Capacity: -$6.2M (5 people)
Backfills: +$0.9M (1 person, partial ramp)
```

### 4. Include Percentages

```
Backfill Recovery: +$0.9M (15% of loss recovered)
Unrecovered Gap: -$5.3M (85% still unrecovered)
```

### 5. Compare to Target

```
EoQ Capacity: $5.7M
Target Capacity: $10.0M
Gap to Target: -$4.3M (43% below)
```

---

## Common Pitfalls

### 1. Not Showing Net Change

**Mistake:** Waterfall shows BoQ and EoQ, but doesn't call out net change

**Better:** Highlight net change prominently

```
BoQ: $11.0M → EoQ: $5.7M
NET: -$5.3M (-48%)
```

### 2. Ignoring Ramp Progression

**Mistake:** Only showing Loss and Backfills, forgetting existing reps advancing ramp

**Better:** Include "Ramp Progression" bar (even if small)

### 3. Using Headcount Instead of Capacity

**Mistake:** "9 people → 5 people" (doesn't show capacity impact)

**Better:** "$11M → $5.7M (9 people → 5 people)"

### 4. No Context

**Mistake:** Waterfall with no commentary

**Better:** Include:
- Historical comparison (is this normal?)
- Root cause analysis (why so high?)
- Action plan (what are we doing about it?)

---

## Tools for Creating Waterfalls

### Excel/Google Sheets
- Use stacked column chart
- Manually calculate bar heights
- Color-code by type

### Tableau/Power BI
- Waterfall chart type (built-in)
- Auto-calculates running totals
- Interactive filters

### Modus (Demo App)
- Automated waterfall generation
- Real-time updates
- Drill-down to individual employees

---

## Related Terms

- [Current Capacity](/docs/capacity/current-capacity) - BoQ and EoQ snapshots
- [Loss Capacity](/docs/capacity/loss-capacity) - The downward bars
- [Recovered Gap](/docs/capacity/recovered-gap) - The upward bars
- [Unrecovered Gap](/docs/capacity/unrecovered-gap) - Net negative impact
- [Capacity Planning](/docs/playbooks/capacity-planning) - Using waterfalls in planning

## References

- Waterfall charts are standard in finance and operations
- Also called: Bridge chart, cascade chart, capacity flow chart
- Common in sales capacity planning, workforce analytics, revenue waterfalls
