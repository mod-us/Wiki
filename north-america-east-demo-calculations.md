# North America East - Demo Data Calculations

This document contains all hardcoded calculations and logic for the North America East territory demo.

---

## Note: Next on Roadmap

The following features are being prototyped next:

1. **Notifications** - Alerts for managers when key events occur:
   - Terminations
   - Backfills added
   - Leaves of absence
   - Other capacity-impacting changes
   - **Important**: Will require logging events during calculation flows to surface as notifications

2. **Adding TBHs without termination/LOA** - Ability to add new hires independently:
   - How new TBHs impact capacity when not tied to attrition
   - Net capacity growth scenarios

3. **Auditability throughout** - Click-through context and details:
   - Cell-level drill-down to show who was impacted and other details
   - Historical context for any metric
   - Trace capacity changes to source events

4. **Org Chart** - Visual organizational structure view

**Note**: Keep notifications especially in mind during implementation, as event logging will need to be integrated into calculations to enable notification surfacing.

---

## 1. Overview Page - Top-Level Widgets

These 4 hero widgets appear at the top of the Capacity Overview page.

### Initial State (Hardcoded)

#### Widget 1: Current Capacity

```
Dollars:    $7.0M
Headcount:  5 active reps
Label:      "5 active reps"
Status:     Neutral

Calculation - Dollars:
- End of Quarter (EoQ) capacity from Q4 2025
- Represents current effective capacity of the team
- Includes fully ramped FTEs + partially ramped TBHs

Calculation - Headcount:
- Count of "butts in seat" - employees who have started and are currently active
- Rules:
  * Must have start date in the past (already started)
  * Employment status = "Active"
  * Termination date is null OR termination date > today (future terminations still count as active)
  * Exclude: TBH (To-Be-Hired) employees who haven't started yet
  * Exclude: Employees with termination date <= today
- For North America East: 5 people
- This is actual headcount, not capacity-weighted

Example:
- Employee A: Start date = 1/1/2024, Status = Active, Termination = null → COUNT ✓
- Employee B: Start date = 1/1/2024, Status = Active, Termination = 12/20/2025 (2 days from now) → COUNT ✓
- Employee C: Start date = 1/1/2024, Status = Active, Termination = 12/15/2025 (3 days ago) → DO NOT COUNT ✗
- Employee D: Start date = 1/1/2026 (future), Status = TBH → DO NOT COUNT ✗
```

#### Widget 2: Gap to Target

```
Dollars:    $3.0M (positive = shortfall)
Headcount:  10 people short
Status:     Critical (orange/red)

Calculation - Dollars:
Gap to Target = Target - Current Capacity
Gap = $10.0M - $7.0M = $3.0M (positive, we're short)

Calculation - Headcount:
Number of people needed to close gap = Gap / Standard Quarterly Quota
Standard quota: $1.2M annual = $300K quarterly. Note Standard Quota differs by company and must be calculated as the average of all annual quotas for active reps.
People short: $3.0M / $300K = 10 people

For North America East: 10 people short

Note: This represents how many fully-ramped Account Executives at standard quota
would be needed to close the capacity gap

Display Convention:
- Positive gap (Target > Current) → ORANGE (#FA560C) → Capacity shortfall, need to fill
- Negative gap (Target < Current) → GREEN (#22C55E) → Overcapacity, ahead of plan

```

#### Widget 3: Attrition Rate

```
Value:      45.5%
Headcount:  5 people
Status:     Critical (red)
Vs Avg:     "32.4% above avg"

Calculation - Percentage:
Attrition Rate = Total curent quarter Attrition / Beginning of Quarter Capacity
Attrition Rate = $5.0M / $11.0M = 45.5%

Vs Avg = Attrition Rate - Industry Average (13.1%)
Vs Avg = 45.5% - 13.1% = 32.4% above avg

Calculation - Headcount:
Simple count of employees who left during the current quarter/period
For North America East: 5 people left
This is the actual number of terminations, not capacity-weighted

Status Rules:
- Critical (#FA560C Orange):  > 20% attrition
- Warning (#FA560C Orange): 15-20% attrition
- Good (#22C55E Green):    < 15% attrition
```

#### Widget 4: Capacity at Risk

```
Dollars:    $945K (baseline)
Headcount:  3 people
Status:     Warning (yellow)

Baseline (Trailing 4Qs):        $945K  (13.5% rate)
Prior Quarter (Q4):             $728K  (10.4% rate) [Low bound]
Same Quarter Last Year (Q1):    $1.148M (16.4% rate) [High bound]

Three prediction methods provide a range estimate:

METHOD 1: Trailing 4Qs (Baseline) ⭐
Note: trailing 4Qs means if you are in Q1 of 2026, you would take Q1 2026 + Q4 2025 + Q3 2025 + Q2 2025. Below is an example of we are currently in Q4.

Step 1: Sum total capacity at start of each quarter
  Q1 2025 BoQ: $11.0M
  Q2 2025 BoQ: $9.5M
  Q3 2025 BoQ: $8.7M
  Q4 2025 BoQ: $7.7M (this quarter)
  Total: $37.0M

Step 2: Sum total attrition over 4 quarters
  Q1 loss: $1.8M
  Q2 loss: $1.2M
  Q3 loss: $1.2M
  Q4 loss: $0.8M (this quarter - note this will update as the quarter continues)
  Total: $5.0M

Step 3: Calculate effective quarterly attrition rate
  Rate = Total Attrition / Total Starting Capacity
  Rate = $5.0M / $37.0M = 13.5%

Step 4: Apply to next quarter's starting capacity
  Q1 2026 starting capacity = $7.0M
  Predicted Q1 2026 attrition = $7.0M × 13.5% = $945K

METHOD 2: Prior Quarter (Q4) - Most Recent Trend
Step 1: Get prior quarter attrition rate
  Q4 loss: $0.8M
  Q4 BoQ: $7.7M
  Rate = $0.8M / $7.7M = 10.4%

Step 2: Apply to next quarter
  Q1 2026 starting capacity = $7.0M
  Predicted Q1 2026 attrition = $7.0M × 10.4% = $728K

METHOD 3: Same Quarter Last Year (Q1 2025) - Seasonality
Step 1: Get Q1 2025 attrition rate
  Q1 loss: $1.8M
  Q1 BoQ: $11.0M
  Rate = $1.8M / $11.0M = 16.4%

Step 2: Apply to next quarter
  Q1 2026 starting capacity = $7.0M
  Predicted Q1 2026 attrition = $7.0M × 16.4% = $1.148M

Calculation - Headcount:
Number of people at risk = Baseline Predicted Attrition / Standard Quarterly Quota
Standard quota: $1.2M annual = $300K quarterly
People at risk: $945K / $300K = 3.15 ≈ 3 people

Note: This represents equivalent headcount at risk of leaving next quarter,
calculated using the baseline Trailing 4Qs prediction method

Range Summary:
  Low (Prior Q):      $728K  (optimistic, most recent trend)
  Mid (Trailing 4Q):  $945K  (balanced baseline)
  High (Same Q LY):   $1.148M (conservative, accounts for Q1 seasonality)

Display in (i) icon the UI. The (i) icon on the top right pulsates slightly.
| Method | Rate | Predicted Q1'26 attrition |
|--------|------|---------------------------|
| Trailing 4Qs (baseline) | 13.5% | $945K |
| Prior quarter (Q4) | 10.4% | $728K |
| Same quarter last year (Q1) | 16.4% | $1.148M |

Status Rules (based on baseline):
- Critical (#FA560C Orange):  At Risk > 15% of starting capacity
- Warning (#FA560C Orange): At Risk > 10% of starting capacity
- Good (#22C55E Green):    At Risk < 10% of starting capacity

Current: $945K / $7.0M = 13.5% → Warning (orange)
```

## 2. Quarterly Capacity Flow (Overview Tab)

Shows progressive capacity decline with proper quarter-to-quarter carry-over.

### Q1 2025

```
Beginning of Quarter (BoQ) Capacity:  $17.0M  (15 people)
Less: Attrition impact:               -$2.0M  (-2 people)
Plus: Backfills/TBHs added:           +$0.3M  (+1 people, started in Q1)
= Net Attrition Impact:               -$1.7M  (-2 people net)
End of Quarter (EoQ) Capacity:        $15.3M   (13 people)
Gap to target ($10M):                 -$5.3M (green)
```

### Q2 2025

```
Beginning of Quarter (BoQ) Capacity:  $15.3M   (13 people) ← Carries from Q1 EoQ
Less: Attrition impact:               -$2.3M  (-3 person)
Plus: Backfills/TBHs added:           +$0.3M  (+1 people, started in Q2)
= Net Attrition Impact:               -$2.0M  (-2 person net)
End of Quarter (EoQ) Capacity:        $13.3M   (11 people)
Gap to target ($10M):                 -$3.3M  (green)
```

### Q3 2025

```
Beginning of Quarter (BoQ) Capacity:  $13.3M   (11 people) ← Carries from Q2 EoQ
Less: Attrition impact:               -$2.5M  (-3 person)
Plus: Backfills/TBHs added:           +$0.3M  (+1 people, started in Q3)
= Net Attrition Impact:               -$2.2M  (-2 person net)
End of Quarter (EoQ) Capacity:        $11.1M   (9 people)
Gap to target ($10M):                 +$1.1M   (orange)
```

### Q4 2025

```
Beginning of Quarter (BoQ) Capacity:  $11.1M   (9 people) ← Carries from Q3 EoQ
Less: Attrition impact:               -$5.0M  (-5 person)
Plus: Backfills/TBHs added:           +$0.9M  (+1 person hired in Q4)
= Net Attrition Impact:               -$4.1M  (+4 people net)
End of Quarter (EoQ) Capacity:        $7.0M   (5 people)
Gap to target ($10M):                 +$3.0M  (orange)
```

**Key Principle:** Each quarter's Beginning of Quarter (BoQ) = Previous quarter's End of Quarter (EoQ)

---

## 1b. Capacity Breakdown Table (Overview Tab)

This table appears above the quarterly capacity flow and provides a summary view of quarterly performance.

**IMPORTANT - Territory Filtering & Permissions:**

- This table MUST respect the universal territory filter at the top of the page
- Only display data for territories the user has permission to access
- All calculations (Target, Current Capacity, FTE, TBHs, Gap to Target) should aggregate ONLY the filtered/accessible territories
- If a user selects "North America East" in the filter, show only North America East data
- If a user has access to multiple territories, they can view aggregated data across those territories

### Table Structure

The capacity breakdown table should **always display exactly 5 columns**:

- **3 historical quarters**: Past quarters (grayed out)
- **1 current quarter**: Current quarter (normal styling)
- **1 next quarter projection**: Future quarter forecast (italicized/lighter)

Example for December 2025 (Q4 is current):

```
| Item                           | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 | Q1 2026 (Projected) |
|--------------------------------|---------|---------|---------|---------|---------------------|
| Target                         | $10M    | $10M    | $10M    | $10M    | $10M                |
| Current Capacity               | $9.5M   | $8.7M   | $7.7M   | $7.0M   | $6.1M               |
|   Full-time employees (FTE)    | $9.2M   | $8.3M   | $7.5M   | $6.1M   | $6.1M               |
|   Backfills/To-be-Hires (TBHs) | $0.3M   | $0.4M   | $0.2M   | $0.9M   | $0                  |
| Gap to target                  | $0.5M   | $1.3M   | $2.3M   | $3.0M   | $3.9M               |
```

**Note on Gap to Target values:** These are positive when below target (shortfall) and should be color-coded orange/red.

### Headcount Breakdown

```
| Item                           | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 | Q1 2026 (Projected) |
|--------------------------------|---------|---------|---------|---------|---------------------|
| Current Capacity               | 14      | 12      | 9       | 5       | 2                   |
|   Full-time employees (FTE)    | 13      | 11      | 8       | 4       | 2                   |
|   Backfills/To-be-Hires (TBHs) | 1       | 1       | 1       | 1       | 0                   |
```

### Key Relationships

**Current Capacity = EoQ from Quarterly Flow**

- Each quarter's "Current Capacity" row matches the "End of Quarter (EoQ) Capacity" from the detailed quarterly flow below
- Q1: $9.5M (7 people) - EoQ after Q1 flow
- Q2: $8.7M (6 people) - EoQ after Q2 flow
- Q3: $7.7M (5 people) - EoQ after Q3 flow
- Q4: $7.0M (5 people) - EoQ after Q4 flow

**Current Capacity = FTE + TBHs**

- FTE: Fully ramped employees at their current capacity
- TBHs: Backfills/new hires at their ramped capacity (not full quota)
- Example Q4: $6.1M (4 FTE) + $0.9M (1 TBH) = $7.0M (5 people total)

**Gap to Target Calculation**

- Gap = Target - Current Capacity (negative when above target/outperforming)
- Q1: $10M - $15.3M = -$5.0M (no gap - green)
- Q2: $10M - $13.3M = -$3.3M (no gap - green)
- Q3: $10M - -$11.1M = -$1.1M (gap impending - green)
- Q4: $10M - $7.0M = +$3.0M (largest gap - orange)

### Headcount Logic

**FTE Headcount:**

- Count of fully ramped, active full-time employees
- Excludes TBHs
- Decreases each quarter as people leave: 7 → 6 → 5 → 4

**TBH Headcount:**

- Count of backfills/new hires who are still ramping but started this quarter
- These are employees who have started but haven't reached 100% ramp
- Only 1 backfill added in Q4, so: 0 → 0 → 0 → 1

**Current Capacity Headcount:**

- Total "butts in seat" = FTE + TBH
- Q1-Q3: Only FTE (7 → 6 → 5)
- Q4: FTE + TBH (4 + 1 = 5)

### Next Quarter Projection (Q1 2026)

The table should include a 5th column showing the projection for the next quarter (Q1 2026).

**Calculation Logic:**

```
Beginning of Quarter (BoQ) Capacity:
- Carries from Q4 2025 EoQ: $7.0M (5 people)

Less: Attrition impact:
- Uses "Capacity at Risk" baseline (Trailing 4Qs method): -$945K (-3 people).
- Dollar amount: Next Q BoQ × Trailing 4Q attrition rate (13.5%)
  $7.0M × 13.5% = $945K
- Headcount: $945K / $300K quarterly quota = 3.15 ≈ 3 people
  (Capacity-weighted equivalents - must match Capacity at Risk widget calculation)
  **IMPORTANT**: This is capacity-weighted headcount, not actual people leaving

Plus: Backfills/TBHs added:
- Include any backfills/TBHs already in the Hiring Plan Timeline that have start dates in Q1 2026
- Calculate their expected ramped capacity for Q1 2026 based on their start date and ramp schedule
- Example: If a backfill starts in month 1 of Q1 2026 with $1.2M annual quota:
  * Month 1: $100K × 0% = $0
  * Month 2: $100K × 25% = $25K
  * Month 3: $100K × 50% = $50K
  * Total Q1 contribution: $75K
  * Headcount: 1 person
- For North America East demo (if no backfills planned): $0 (0 people)

= Net Attrition Impact:
- Attrition + Backfills = -$945K + [backfills capacity]
- Example with no backfills: -$945K (-3 people net)
  **Key**: -3 people from attrition + 0 people from backfills = -3 people net

End of Quarter (EoQ) Capacity:
- BoQ + Net Impact = $7.0M - $945K = $6.055M (≈$6.1M)
- Headcount: 5 - 3 = 2 people (assuming no backfills)
  **Calculation**: 5 people at BoQ - 3 people net attrition = 2 people at EoQ

Gap to target (at EoQ):
- Target - EoQ Capacity = $10M - $6.1M = $3.9M (positive = shortfall, display in orange)
```

**Key Principle:** The "Plus: Backfills/TBHs added" line should include ANY employees already in the system (Actuals or scenarios) with start dates falling in Q1 2026. This ensures the projection reflects committed hires, not just speculative forecasts.

**Q1 2026 Projection Summary:**

```
                                          Dollars      Headcount
Beginning of Quarter (BoQ) Capacity:      $7.0M       5 people
Less: Attrition impact:                   -$945K      -3 people (capacity-weighted)
Plus: Backfills/TBHs added:               $0          +0 people
= Net Attrition Impact:                   -$945K      -3 people
End of Quarter (EoQ) Capacity:            $6.1M       2 people
Gap to target (at EoQ):                   $3.9M       (shortfall)
```

**Display in Table:**

- Column header: "Q1 2026 (Projected)"
- All values should be styled distinctly (perhaps italic or lighter color) to indicate they are projections, not actuals
- Target remains: $10M

### UI Styling Notes

**Historical vs Current vs Projected Quarters:**

- **Historical quarters (Q1, Q2, Q3)**: Should be styled with gray/muted colors to indicate they are in the past
- **Current quarter (Q4)**: Normal text color, represents "as of today"
- **Next quarter projection (Q1 2026)**: Italicized or lighter color to indicate it's a forecast/projection

**Color Convention for Gap to Target: Target - Capacity**

- Positive gap (below target): Display in red/orange to indicate shortfall
- Zero gap (at target): Neutral color
- Negative gap (above target): Display in green to indicate overcapacity

---

## 3. Current Quarter (CQ) Capacity Waterfall

The Capacity Waterfall visualizes the **current quarter (Q4 2025)** capacity flow from beginning to end.

### Waterfall Flow (Q4 2025 - Current Quarter)

```
Beginning of Quarter (BoQ) Capacity:   $11M    (9 people)
Less: Total Attrition (Q4):            -$5M    (-5 people)
Plus: Backfills Added (Q4):            +$0.9M  (+1 person)
= End of Quarter (EoQ) Capacity:       $7M     (5 people)

Unrecovered Gap: -$4.1M (-4 people net)
```

**Calculation:**
$11M - $5M + $0.9M = $6.9M ≈ $7M

**Waterfall Metrics Panel:**

All metrics are calculated for **THIS QUARTER ONLY (Q4 2025)**. All percentages are based on **Total Attrition Impact for Q4** ($5.0M):

1. **Total Attrition Impact (Q4)**: -$5M (-5 people) - 45.5% attrition rate
   - Percentage: Q4 Total Attrition / Q4 Beginning of Quarter Capacity
   - $5.0M / $11.0M = 45.5%

2. **Backfill Recovery (Q4)**: +$0.9M (+1 person) - 18%
   - Percentage: **Q4 Backfill Capacity Recovered / Q4 Total Attrition Impact**
   - $0.9M / $5.0M = 18%
   - Shows what % of Q4 lost capacity was recovered through Q4 backfills

3. **Unrecovered Capacity (Q4)**: -$4.1M (-4 people) - 82%
   - Percentage: **Q4 Unrecovered Capacity / Q4 Total Attrition Impact**
   - $4.1M / $5.0M = 82%
   - Shows what % of Q4 lost capacity remains unrecovered in Q4

**Key Principle:** Backfill Recovery % + Unrecovered % = 100% (18% + 82% = 100%)

### Annual Quota Lost

Displayed as sub-text directly below the waterfall title.

**Definition:**
Sum of annual quotas for all employees who left during current year. In this case 2025.

**For North America East:**

```
5 people left in 2025
Each held $1.2M annual quota
Annual Quota Lost = 5 × $1.2M = $6.0M
```

**Key Distinction:**

| Metric                 | Value | Meaning                                              |
| ---------------------- | ----- | ---------------------------------------------------- |
| Annual Quota Lost      | $6.0M | Sum of full annual quotas (5 × $1.2M)                |
| Total Attrition Impact | $5.0M | Actual capacity lost (accounts for departure timing) |

### Recovery Lag Impact

Displayed in the waterfall metrics panel.

**Definition:**
Recovery Lag Impact (months) = **The average number of months between the attrition date and the date when the replacement's ramped capacity equals the capacity level of the person who left.**

This captures how long it takes the organization to "get back to even" on productive capacity.

**For North America East:**

```
Recovery Lag: 4.5 months (Avg to full productivity)
```

**Example Calculation:**

```
Jason leaves Mar 1 at 50% ramp.

New hire starts May 1 at 0% and reaches 50% by July.
→ Recovery Lag = 4 months (March → July).

If Jason were at 100% when he left, the lag would extend until the new hire reaches 100%.
```

**What This Metric Shows:**

- How long it takes to restore lost capacity to the same level
- Includes both vacancy time AND ramp-up time
- A key driver of unrecovered capacity gap
- Accounts for the departing employee's capacity level at time of exit

**Impact on Capacity:**
The 4.5 month average recovery lag explains a significant portion of the Unrecovered Gap. Even when backfills are hired immediately, the organization experiences months of reduced capacity while the replacement ramps up to match the departed employee's productivity level.

---

## 4. Attrition Deep Dive (Overview Tab)

The Attrition Deep Dive section provides detailed analysis of capacity changes over time with multiple views and metrics.

**IMPORTANT - Territory Filtering & Permissions:**

- This section MUST respect the universal territory filter at the top of the page
- Only display data for territories the user has permission to access
- All metrics (Capacity Lost, Backfill Rate, Time to Backfill, Recovery Lag) should aggregate ONLY the filtered/accessible territories
- The Manager View table should show ONLY managers and their data from the filtered territories
- If a user selects "North America East" in the filter, show only North America East attrition data and managers
- If a user has access to multiple territories, they can view aggregated attrition metrics across those territories

### Top Metrics

Four key metrics displayed at the top of the Attrition Deep Dive section:

#### Recovery Lag

```
Value: 4.5 months
Label: Avg to full productivity
```

**Definition:** Recovery Lag Impact (months) = The average number of months between the attrition date and the date when the replacement's ramped capacity equals the capacity level of the person who left.

This captures how long it takes the organization to "get back to even" on productive capacity.

**Example:**

```
Jason leaves Mar 1 at 50% ramp.
New hire starts May 1 at 0% and reaches 50% by July.
→ Recovery Lag = 4 months (March → July).
```

**For North America East:** 4.5 months average to restore capacity to pre-attrition levels.

#### Time to Backfill

```
Value: 2 months
Label: Avg hire time
```

**Definition:** Average time from termination date to backfill's hire date (start date).

**For North America East:** 2 months average time to fill vacancies.

#### Backfill Rate

```
Value: 81%
Label: Of attrition recovered
```

**Definition:** Percentage of quarterly lost capacity that has been recovered through backfill hires in that quarter.

**Formula:**

```
Backfill Rate = (Quarterly capacity recovered from backfills) ÷ (Quarterly capacity lost from attrition)
```

**Example for Q4:**

```
Q4 Attrition = $0.8M capacity lost
Q4 Capacity recovered from backfills = $0.65M
→ Backfill Rate = $0.65M / $0.8M = 81%
```

**Why This Matters:**

- Reflects true economic recovery of productive capacity for the period
- Aligns with Finance/RevOps lens — connects to quota coverage, revenue per AE, etc.
- Naturally accounts for seniority mix (losing 1 top rep isn't offset by 1 entry-level hire)
- Shows quarter-over-quarter effectiveness of backfill hiring

### Manager View Columns

The Manager View table shows attrition metrics broken down by manager hierarchy with the following columns (in order):

#### 1. Current Capacity ($)

Current capacity under this manager's organization.

#### 2. Attrition Rate (%)

Percentage of capacity lost to attrition.

**Calculation:**

```
Attrition Rate = Quarterly Attrition / Quarterly Starting Capacity
```

#### 3. Capacity Lost ($)

Total capacity lost from attrition in the quarter.

#### 4. Backfill Rate (%)

Percentage of lost capacity recovered through backfills.

**Formula:**

```
Backfill Rate = (Quarterly capacity recovered from backfills) ÷ (Quarterly capacity lost from attrition)
```

#### 5. Recovery Lag (mo)

Average time to restore capacity to pre-attrition levels (includes vacancy + ramp time) for this organization.

#### 6. Unrecovered Capacity ($)

Capacity that has not yet been recovered in the quarter.

**Calculation:**

```
Unrecovered Capacity = Quarterly Capacity Lost - Quarterly Capacity Recovered from Backfills
```

**Example:**

```
Quarterly Capacity Lost: $3.9M
Quarterly Capacity Recovered from Backfills: $3.2M
Unrecovered Capacity: $0.7M
```

**Note:** "Capacity Recovered" refers to the ramped capacity that backfills have contributed in the quarter, not just headcount added.

---

### What Happens When Attrition Occurs

**IMPORTANT:** Overview widgets show **CURRENT QUARTER** capacity, not annual. All calculations below are based on quarterly impact.

---

**Example: Deontae Termination (No Backfill) - Mid Q4**

Deontae's annual quota: $2.7M
Deontae's quarterly quota: $2.7M ÷ 4 = $675K
Assume he leaves halfway through Q4, so remaining capacity lost: ~$337K

#### Widget 1: Current Capacity

```
Before:  $7.0M    (5 people, Q4 capacity)
Change:  -$337K   (Deontae's remaining Q4 capacity)
After:   $6.66M   (4 people)

Calculation:
New Current Capacity = Old Capacity - Employee's Remaining Quarterly Capacity
New Current Capacity = $7.0M - $337K = $6.66M

Note: We subtract only the capacity he's taking with him THIS QUARTER,
not his full annual quota.
```

#### Widget 2: Gap to Target

```
Before:  -$3.0M   (4 people short, Q4)
Change:  -$337K   (gap widens)
After:   -$3.34M  (5 people short)

Calculation:
New Gap = New Current Capacity - Quarterly Target
New Gap = $6.66M - $10.0M = -$3.34M

Note: Gap gets worse by the quarterly capacity lost
```

#### Widget 3: Attrition Rate

```
Before:  45.5%   (32.4% above avg)
Change:  +6.1%   (attrition increases)
After:   51.6%   (38.5% above avg)

Calculation:
New Total Attrition = Old Attrition + Employee Quarterly Impact
New Total Attrition = $5.0M + $675K = $5.675M (annual equivalent)

New Attrition Rate = New Total Attrition / Beginning Capacity
New Attrition Rate = $5.675M / $11.0M = 51.6%

Note: Attrition rate uses annualized values, so we add the full quarterly quota
```

#### Widget 4: Capacity at Risk

```
Before:  $5.0M  (4 people)
Change:  +$675K (+1 person)
After:   $5.68M (5 people)

Calculation:
New Capacity at Risk = Old At Risk + Employee Quarterly Quota
New Capacity at Risk = $5.0M + $675K = $5.68M

Note: Capacity at Risk tracks total capacity lost this period
```

---

**Example: Deontae Termination WITH Backfill - Mid Q4**

Deontae's quarterly quota: $675K
Deontae's remaining Q4 capacity: ~$337K (leaves mid-quarter)
Backfill starts immediately, but only 0% ramp for remainder of Q4: ~$0 Q4 contribution

#### Widget 1: Current Capacity

```
Before:  $7.0M   (5 people)
Change:  -$337K  (Deontae's remaining Q4 capacity)
         +$0     (Backfill at 0% ramp, no Q4 contribution)
After:   $6.66M  (4 fully ramped + 1 at 0% ramp)

Calculation:
New Capacity = Old Capacity - Deontae Q4 Loss + Backfill Q4 Contribution
New Capacity = $7.0M - $337K + $0 = $6.66M

Note: Backfill doesn't help THIS QUARTER because they're at 0% ramp.
They'll contribute in future quarters as they ramp up.
```

#### Widget 2: Gap to Target

```
Before:  -$3.0M   (4 people short)
Change:  -$337K   (gap widens)
After:   -$3.34M  (5 people short)

Calculation:
New Gap = New Current Capacity - Quarterly Target
New Gap = $6.66M - $10.0M = -$3.34M

Note: Gap worsens the same as without backfill, because backfill
hasn't ramped yet to contribute capacity THIS QUARTER
```

#### Widget 3: Attrition Rate

```
Before:  45.5%   (32.4% above avg)
After:   51.6%   (38.5% above avg)

Note: Attrition rate increases regardless of backfill, because it measures
capacity LOST, not capacity RECOVERED
```

#### Widget 4: Capacity at Risk

```
Before:  $5.0M   (4 people)
After:   $5.68M  (5 people)

Note: Capacity at Risk increases with each termination, regardless of backfill
```

### Summary of Widget Behavior (Current Quarter Impact)

| Widget           | Without Backfill                          | With Backfill (0% ramp)                  |
| ---------------- | ----------------------------------------- | ---------------------------------------- |
| Current Capacity | Decreases by remaining quarterly capacity | Decreases same (backfill not ramped yet) |
| Gap to Target    | Worsens by quarterly loss                 | Worsens same (no recovery yet)           |
| Attrition Rate   | Increases                                 | Increases (same)                         |
| Capacity at Risk | Increases                                 | Increases (same)                         |

**Key Insight for Current Quarter:**

- Widgets reflect **THIS QUARTER'S** capacity, not annual
- Terminated employee: We lose their **remaining quarterly capacity** (what they would have contributed the rest of this quarter)
- Backfill: They only contribute **what they produce THIS QUARTER** (usually minimal due to 0% ramp in month 1)
- Future quarters will show backfill recovery as they ramp to 25%, 50%, 75%, 100%

**Example: What if backfill starts early and has 1 month at 25% ramp?**

```
Backfill quarterly quota: $675K
Backfill Q4 contribution: $675K × (1/3 months) × 25% = $56K

Widget 1: Current Capacity
After:   $6.72M  (instead of $6.66M)
Difference: +$56K from partial backfill ramp
```

---

## 5. Top-Level Metrics (Hiring Plan Tab)

These metrics appear at the top of the Hiring Plan tab and update dynamically when attrition events occur.

Note that Hiring Plan tab months should show current Month + 12 at all times so you can see the full year impact going forwards.

### Initial State (Hardcoded)

```
Loss Capacity:        $5.0M    (5 people left or on leave)
Recovered Capacity:   $0.9M    (1 backfill added)
Unrecovered Gap:      $4.1M    (4 people short)
Recovery Lag:         4.5 months (Avg to full productivity)
```

**Unrecovered Gap - Headcount Calculation:**

```
Unrecovered Gap (people) = Loss Capacity (people) - Recovered Capacity (people)
```

**For North America East:**

- Loss Capacity: 5 people left or on leave
- Recovered Capacity: 1 backfill added
- Unrecovered Gap: 5 - 1 = 4 people short

### Dynamic Updates (When Attrition Occurs)

**Example: Deontae Termination with Backfill**

1. **Loss Capacity** increases by terminated employee's full annual quota:

   ```
   Current Loss:     $5.0M
   Deontae's Quota:  +$2.7M  (full annual quota)
   New Loss:         $7.7M   (6 people)
   ```

2. **Recovered Capacity** increases by backfill's ramped total:

   ```
   Current Recovered:        $0.9M
   Backfill Ramped Total:    +$2.25M  (sum of 12 monthly ramped values)
   New Recovered:            $3.15M   (2 backfills)
   ```

3. **Unrecovered Gap** is recalculated:
   ```
   Gap = Total Loss - Total Recovered
   Gap = $7.7M - $3.15M = $4.55M  (4 people short)
   ```

---

## 6. TBH Effective Capacity Calculation

TBH (To-Be-Hired) employees show their **effective ramped capacity** (not full annual quota) in the Total column.

### Ramp Schedule

```
Month 1:  0%
Month 2:  25%
Month 3:  50%
Month 4:  75%
Month 5+: 100%
```

### Example: Deontae's Backfill

**Annual Quota:** $2,700,000
**Monthly Quota:** $2,700,000 ÷ 12 = $225,000

**Monthly Capacity (12 months):**

```
Month 1:  $225,000 × 0%   = $0
Month 2:  $225,000 × 25%  = $56,250
Month 3:  $225,000 × 50%  = $112,500
Month 4:  $225,000 × 75%  = $168,750
Month 5:  $225,000 × 100% = $225,000
Month 6:  $225,000 × 100% = $225,000
Month 7:  $225,000 × 100% = $225,000
Month 8:  $225,000 × 100% = $225,000
Month 9:  $225,000 × 100% = $225,000
Month 10: $225,000 × 100% = $225,000
Month 11: $225,000 × 100% = $225,000
Month 12: $225,000 × 100% = $225,000
-------------------------------------------
Total:                      $2,250,000
```

**Total Column Shows:** $2.25M (not $2.7M)

---

## 7. Hiring Timeline - Recovery Hires

For North America East in Actuals mode, we show 4 recommended recovery hires.

**Key Principle:** Recovery hires (backfills) should inherit the **territory** and **ramp profile** of the role that was terminated. When a backfill is created for a terminated employee, the system should:

1. Assign the backfill to the same territory as the departed employee
2. Use the ramp profile associated with that role (e.g., 0% → 25% → 50% → 75% → 100% over 5 months)
3. Apply that ramp profile to calculate the backfill's monthly capacity contributions

### Recovery Hire #1

```
Name:          Recovery Hire #1
Role:          Account Executive
Territory:     North America East
Start Date:    Next month (Month 1)
Annual Quota:  $1,200,000
Ramp:          0% → 25% → 50% → 75% → 100%
```

### Recovery Hire #2

```
Name:          Recovery Hire #2
Role:          Account Executive
Territory:     North America East
Start Date:    Next month (Month 1)
Annual Quota:  $1,200,000
Ramp:          0% → 25% → 50% → 75% → 100%
```

### Recovery Hire #3

```
Name:          Recovery Hire #3
Role:          Account Executive
Territory:     North America East
Start Date:    2 months out (Month 3)
Annual Quota:  $1,200,000
Ramp:          0% → 25% → 50% → 75% → 100%
```

### Recovery Hire #4

```
Name:          Recovery Hire #4
Role:          Account Executive
Territory:     North America East
Start Date:    2 months out (Month 3)
Annual Quota:  $1,200,000
Ramp:          0% → 25% → 50% → 75% → 100%
```

---

## 8. Timeline Tracking Rows

Three tracking rows show cumulative capacity recovery over time.

### Running Total - Capacity Lost

```
Every month: -$5.0M (constant, represents total annual loss)
```

### Running Total - Capacity Recovered

```
Cumulative sum of all recovery hires' monthly ramped capacity

Example progression:
Month 1:  $0
Month 2:  $0 + (2 hires × $100K × 25%) = $50K
Month 3:  $50K + (2 hires × $100K × 50%) + (2 new hires × $100K × 0%) = $150K
Month 4:  $150K + (2 hires × $100K × 75%) + (2 hires × $100K × 25%) = $350K
...and so on
```

### Net Capacity Gap

```
Gap = Running Capacity Recovered - $5.0M

Visual:
- Dark red when gap is large (e.g., -$5.0M)
- Lighter red as gap closes (e.g., -$1.4M)
- Green "Recovered ✓" when gap reaches $0 or positive

Color calculation:
gapPercentage = |netGap| / $5.0M
Red intensity fades from rgb(255, 20, 20) to rgb(220, 50, 50) as gap closes
```

---

## 9. Timeline Visual Gradients

The hiring timeline shows visual ramp progression with color gradients.

### Hiring Phase (Before Start Date)

```
Color: Gray (bg-gray-200)
Text:  "Hiring"
```

### Month 1 (0% Ramp)

```
Color: Very light blue (bg-blue-200 at 15% opacity)
Text:  "0%"
```

### Months 2-4 (Ramping)

```
Color: Blue with increasing opacity
  25%: bg-blue-200 at 25% opacity
  50%: bg-blue-200 at 50% opacity
  75%: bg-blue-200 at 75% opacity
Text:  "25%", "50%", "75%"
```

### Month 5+ (100% Ramped)

```
Color: Solid green (bg-green-500)
Text:  "100%" in white
```

---

## 10. File Locations

### Overview Tab

- File: `/src/lib/salescap-capacity-unified.svelte`
- Hardcoded data: Lines 673-834 (capacityTableData for North America East)

### Hiring Plan - Top Metrics

- File: `/src/lib/HiringPlan.svelte`
- Initial metrics: Lines 19-25
- Update handler: Lines 30-79 (handleAttrition function)

### Hiring Plan - Roster

- File: `/src/lib/HiringPlanRoster.svelte`
- Effective capacity calculation: Lines 980-994 (getEffectiveAnnualCapacity)
- Attrition dispatch: Lines 1312-1334

### Hiring Plan - Timeline

- File: `/src/lib/HiringPlanTimeline.svelte`
- Recovery hires: Lines 143-221 (hardcoded 4 recovery hires)
- Tracking rows: Lines 486-550
- Visual gradients: Lines 429-456

---
