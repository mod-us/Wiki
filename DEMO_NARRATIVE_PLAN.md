# Demo Narrative Plan: Capacity Gap → Hiring Plan → Recovery

## Overview: The Story We're Telling

**Persona**: Sarah, VP of Sales for North America East
**Problem**: Q4 capacity gap due to attrition and leaves of absence
**Goal**: Understand the gap, plan recovery, track progress

---

## The Narrative Flow

### Act 1: Discovering the Problem (Overview Page)

**Location**: `/capacity2/overview`
**Territory**: North America East

#### What Sarah Sees:

```
┌─────────────────────────────────────────────────┐
│ Current Capacity: $8.5M                         │
│ Target Capacity: $12M                           │
│ Gap: -$3.5M (29% below target)                  │
└─────────────────────────────────────────────────┘
```

#### Key Insights Needed:

1. **What is the gap?** Difference between current capacity and target capacity
2. **Why does it exist?** Mix of:
   - Attrition (people left)
   - Leaves of absence (LOA)
   - Unfilled positions (TBH roles not yet hired)
3. **When does it hurt most?** Timeline showing monthly capacity vs. target

#### Suggested Overview Page Improvements:

```
┌─────────────────────────────────────────────────┐
│ CAPACITY HEALTH                                 │
│                                                 │
│ Current Capacity: $8.5M                         │
│ Target Capacity: $12M                           │
│ Gap: -$3.5M (29% below target)                  │
│                                                 │
│ Gap Breakdown:                                  │
│ • Lost to Attrition: -$2.8M (4 people)         │
│ • On Leave: -$700K (1 person)                   │
│ • Unfilled Roles: -$0K (0 positions)            │
│                                                 │
│ 📊 [View Hiring Plan] button                    │
└─────────────────────────────────────────────────┘
```

---

### Act 2: Understanding the Problem (Hiring Plan - Roster View)

**Location**: `/capacity2/hiring` → Roster tab
**Scenario**: "Q4 2024 Recovery Plan"

#### What Sarah Sees:

A hierarchical roster showing:

- ✅ Active employees (contributing to capacity)
- 🔴 Terminated employees (loss capacity)
- 🟡 LOA employees (temporary loss)
- 🔵 TBH/Backfill employees (planned recovery)

#### Example Mock Data for North America East:

**Sarah Mitchell** (VP Sales, US East)

- Quota: $5M
- Status: Active ✅

└── **Michael Chen** (Regional Manager, Northeast) - Quota: $1.5M - Status: Active ✅

    └── **John Smith** (AE)
        - Quota: $1.2M
        - Status: **Terminated** 🔴
        - Termination Date: Oct 15, 2024
        - **Loss Impact**: -$1.2M

    └── **John Smith (Backfill)** (AE)
        - Quota: $1.2M
        - Status: **TBH** 🔵
        - Start Date: Dec 15, 2024 (2 months time-to-fill)
        - Ramp: 0%, 25%, 50%, 75%, 100%
        - **Recovery**: Starting Dec (but only 0% in month 1)

    └── **Emily Davis** (AE)
        - Quota: $1.2M
        - Status: **LOA** 🟡
        - Leave Date: Nov 1, 2024
        - Return Date: Jan 1, 2025
        - **Loss Impact**: -$1.2M for Nov-Dec

    └── **Tom Johnson** (AE)
        - Quota: $1.4M
        - Status: **Terminated** 🔴
        - Termination Date: Sept 30, 2024
        - **Loss Impact**: -$1.4M since Oct 1

    └── **Tom Johnson (Backfill)** (AE)
        - Quota: $1.4M
        - Status: **TBH** 🔵
        - Start Date: Nov 30, 2024
        - Ramp: 0%, 25%, 50%, 75%, 100%
        - **Recovery**: Starting Nov 30

└── **Amanda Williams** (Regional Manager, Southeast) - Quota: $1.5M - Status: Active ✅

    └── **Sarah Brown** (AE)
        - Quota: $1.2M
        - Status: Active ✅

#### Key Metrics Calculation (for demo):

**Loss Capacity**: $2.8M

- John Smith terminated: $1.2M
- Tom Johnson terminated: $1.4M
- Emily Davis on LOA: $1.2M (temporary)
- **Total**: $3.8M actual, but only $2.8M permanent

**Recovered Capacity**: $2.1M

- Tom Johnson (Backfill) ramping: Will recover $1.4M over time
- John Smith (Backfill) ramping: Will recover $1.2M over time
- **Total**: $2.6M planned, but only $2.1M recovered by end of Q1 2025 due to ramp

**Unrecovered Gap**: $700K

- Emily Davis LOA: $1.2M temporary loss (no backfill planned)
- Minus partial recovery from ramp schedules
- **Result**: $700K still short

**Recovery Lag**: 4.5 months

- Average time from termination → backfill start → full productivity
- Tom: Terminated Sept 30 → Backfill starts Nov 30 → 100% by Apr = 6 months
- John: Terminated Oct 15 → Backfill starts Dec 15 → 100% by May = 7 months
- Average: (6+7)/2 = 6.5 months, but first meaningful capacity at 3 months

---

### Act 3: Taking Action (Hiring Plan - Roster Actions)

**User Journey**: Sarah logs attrition and plans backfills

#### Action 1: Log Attrition

1. Sarah clicks "Terminate" on John Smith
2. Modal appears:

   ```
   Terminate Employee: John Smith

   Termination Date: [Oct 15, 2024]
   Annual Quota: $1.2M

   Impact: -$1.2M loss capacity starting Oct 15

   [ ] Create backfill position

   [Cancel] [Confirm]
   ```

3. Sarah checks "Create backfill position"
4. System creates "John Smith (Backfill)" with:
   - Start Date: Dec 15, 2024 (2 months after termination)
   - Default ramp: 0%, 25%, 50%, 75%, 100%
   - Status: TBH

#### Action 2: Log LOA

1. Sarah clicks "Leave of Absence" on Emily Davis
2. Modal appears:

   ```
   Leave of Absence: Emily Davis

   Leave Start: [Nov 1, 2024]
   Expected Return: [Jan 1, 2025]
   Annual Quota: $1.2M

   Impact: -$1.2M temporary capacity loss
   Note: LOA is temporary - no backfill recommended

   [Cancel] [Confirm]
   ```

#### Action 3: Edit Backfill Details

1. Sarah clicks on "Tom Johnson (Backfill)"
2. Edit modal appears:

   ```
   Edit Backfill: Tom Johnson (Backfill)

   Start Date: [Nov 30, 2024]
   Annual Quota: [$1.4M]

   Ramp Schedule:
   Month 1: [0%]
   Month 2: [25%]
   Month 3: [50%]
   Month 4: [75%]
   Month 5+: [100%]

   [Cancel] [Save]
   ```

---

### Act 4: Visualizing the Timeline (Hiring Plan - Timeline View)

**Location**: `/capacity2/hiring` → Timeline tab

#### What Sarah Sees:

```
┌────────────────────────────────────────────────────────────────┐
│ Hiring Timeline                                                │
│                                                                │
│ Item Detail          │ Time to Hire │ Oct │ Nov │ Dec │ Jan ...│
├──────────────────────┼──────────────┼─────┼─────┼─────┼────────┤
│ John Smith (Backfill)│ 2 mo.        │ 🔄  │ 🔄  │ 0%  │ 25% ...│
│ AE - Northeast       │              │     │     │     │        │
├──────────────────────┼──────────────┼─────┼─────┼─────┼────────┤
│ Tom Johnson (Backfill│ 1 mo.        │ 🔄  │ 0%  │ 25% │ 50% ...│
│ AE - Northeast       │              │     │     │     │        │
├──────────────────────┼──────────────┼─────┼─────┼─────┼────────┤
│ TOTAL CAPACITY ADDED │              │ $0  │+$0  │+$44K│+$317K..│
└────────────────────────────────────────────────────────────────┘

Legend:
🔄 Hiring phase (before start date)
0%-75% Ramping up
100% Fully productive
```

#### Key Insights:

1. **When does capacity return?**
   - Tom starts Nov 30 (but 0% in first month)
   - John starts Dec 15 (but 0% in first month)
   - First meaningful capacity: Jan 2025 (+$317K)

2. **When are we back to full strength?**
   - Tom: 100% by April 2025
   - John: 100% by May 2025

3. **What about Emily's LOA?**
   - Nov-Dec: -$200K/month capacity loss
   - Jan: +$100K when she returns (back to 100%)

---

### Act 5: Visualizing the Org (Hiring Plan - Org Chart View)

**Location**: `/capacity2/hiring` → Org Chart tab

#### What Sarah Sees:

A visual org chart with boxes and lines showing:

```
                    ┌──────────────────────┐
                    │ Sarah Mitchell       │
                    │ VP Sales, US East    │
                    │ Capacity: $8.5M      │
                    │ Headcount: 8         │
                    │ [Active]             │
                    └──────────┬───────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
        ┌───────┴─────────┐          ┌───────┴─────────┐
        │ Michael Chen    │          │ Amanda Williams │
        │ Regional Mgr    │          │ Regional Mgr    │
        │ Capacity: $5.8M │          │ Capacity: $2.7M │
        │ Headcount: 5    │          │ Headcount: 3    │
        │ [Active]        │          │ [Active]        │
        └────────┬────────┘          └────────┬────────┘
                 │                            │
        ┌────────┴─────┬─────┬──────┬────┐   │
        │              │     │      │    │   │
    ┌───┴───┐      ┌──┴──┐ ┌┴───┐ ┌┴──┐│  ┌┴────┐
    │ John  │      │Tom  │ │Emily│ │etc││  │Sarah│
    │ Smith │      │John.│ │Davis│ │   ││  │Brown│
    │ $1.2M │      │$1.4M│ │$1.2M│ │   ││  │$1.2M│
    │[Term.]│      │[Term│ │[LOA]│ │   ││  │[Act]│
    └───────┘      └─────┘ └─────┘ └───┘┘  └─────┘
        │              │
    ┌───┴───┐      ┌──┴──┐
    │ John  │      │Tom  │
    │(Backf)│      │(Bkf)│
    │ $1.2M │      │$1.4M│
    │ [TBH] │      │[TBH]│
    └───────┘      └─────┘
```

#### Key Insights:

1. **Visual impact**: See at a glance who's missing and who's being hired
2. **Capacity rollup**: Each manager shows total team capacity
3. **Status at a glance**: Color-coded badges show Active/TBH/Terminated/LOA

---

## Suggested Improvements for Information Clarity

### 1. Overview Page Enhancements

#### Add "Gap Breakdown" Widget:

```
┌─────────────────────────────────────────────────┐
│ GAP BREAKDOWN                                   │
│                                                 │
│ Loss Capacity: $2.8M                            │
│ └─ Terminated: 2 people ($2.6M)                │
│ └─ On Leave: 1 person ($1.2M)                  │
│                                                 │
│ Planned Recovery: $2.1M                         │
│ └─ Backfills: 2 positions                      │
│ └─ Expected by: Q1 2025                        │
│                                                 │
│ Unrecovered Gap: $700K                          │
│ └─ Action needed: Add 1 more backfill          │
│                                                 │
│ 📊 [View Hiring Plan]                           │
└─────────────────────────────────────────────────┘
```

#### Add Monthly Capacity Timeline:

```
┌─────────────────────────────────────────────────┐
│ CAPACITY TIMELINE                               │
│                                                 │
│ $12M ┌─────────────────────────────────────────┤
│      │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Target              │
│ $10M ├─────────────────────────────────────────┤
│      │ ████████                                 │
│  $8M ├─────────────────────────────────────────┤
│      │ ████████░░░░░░░░░░    Current + Planned │
│  $6M ├─────────────────────────────────────────┤
│      Oct Nov Dec Jan Feb Mar Apr May Jun       │
│                                                 │
│ Legend: █ Current  ░ Planned Recovery           │
└─────────────────────────────────────────────────┘
```

### 2. Hiring Plan Page Enhancements

#### Update Top Metrics to be More Actionable:

```
┌─────────────────────────────────────────────────────────────────┐
│ Loss Capacity          Recovered Capacity    Unrecovered Gap    │
│ $2.8M                  $2.1M                 $700K              │
│ 3 people affected      2 backfills planned   1 position short   │
│ Since Sept 30          By Q1 2025            [Add Backfill]     │
└─────────────────────────────────────────────────────────────────┘
```

#### Add "Recovery Tracking" Section to Roster:

At the top of the roster table, add:

```
┌─────────────────────────────────────────────────┐
│ RECOVERY TRACKING                               │
│                                                 │
│ Current Month: November 2024                    │
│                                                 │
│ This Month:                                     │
│ • Loss: -$2.8M (2 terminated, 1 LOA)           │
│ • Recovery: +$0 (1 backfill starting, 0% ramp) │
│ • Net Impact: -$2.8M                            │
│                                                 │
│ Next Month (December):                          │
│ • Loss: -$1.6M (1 LOA, 1 not yet filled)       │
│ • Recovery: +$44K (2 backfills ramping)         │
│ • Net Impact: -$1.56M                           │
│                                                 │
│ When Back to Target: May 2025                   │
└─────────────────────────────────────────────────┘
```

### 3. Timeline Page Enhancements

#### Add Summary Cards Above Timeline:

```
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ Hiring Pipeline  │ │ This Quarter     │ │ Next Quarter     │
│ 2 positions      │ │ +$44K capacity   │ │ +$635K capacity  │
│ 1 starting Nov   │ │ 25% avg ramp     │ │ 62% avg ramp     │
│ 1 starting Dec   │ │                  │ │                  │
└──────────────────┘ └──────────────────┘ └──────────────────┘
```

### 4. Add "Monthly Snapshot" Feature

#### New View: Monthly Capacity Snapshot

A table showing month-by-month capacity tracking:

```
┌────────────────────────────────────────────────────────────┐
│ MONTHLY CAPACITY SNAPSHOT                                  │
│                                                            │
│ Month     │ Target │ Losses │ Recovery │ Net    │ Gap     │
├───────────┼────────┼────────┼──────────┼────────┼─────────┤
│ Oct 2024  │ $12M   │ -$1.4M │ $0       │ $10.6M │ -$1.4M  │
│ Nov 2024  │ $12M   │ -$2.8M │ $0       │ $9.2M  │ -$2.8M  │
│ Dec 2024  │ $12M   │ -$2.8M │ $0       │ $9.2M  │ -$2.8M  │
│ Jan 2025  │ $12M   │ -$1.2M │ +$317K   │ $11.1M │ -$900K  │
│ Feb 2025  │ $12M   │ $0     │ +$635K   │ $11.8M │ -$200K  │
│ Mar 2025  │ $12M   │ $0     │ +$952K   │ $12.1M │ +$100K  │
│ Apr 2025  │ $12M   │ $0     │ +$1.27M  │ $12.4M │ +$400K  │
│ May 2025  │ $12M   │ $0     │ +$2.6M   │ $13.7M │ +$1.7M  │
└────────────────────────────────────────────────────────────┘
```

This answers the key questions:

- **How much loss capacity do I have in November?** -$2.8M
- **When am I back to target?** March 2025 (first positive month)
- **How have I recovered it?** Through backfills ramping up

---

## Mock Data Seeding Script

### Scenario: North America East Q4 2024 Recovery

#### Step 1: Seed Base Employees (Already in DB)

- Sarah Mitchell (VP) - Active
- Michael Chen (RM) - Active
- Amanda Williams (RM) - Active
- John Smith (AE) - **Mark as Active initially**
- Tom Johnson (AE) - **Mark as Active initially**
- Emily Davis (AE) - Active
- Sarah Brown (AE) - Active
- - 3 more AEs - Active

#### Step 2: Create Scenario "Q4 2024 Recovery"

```sql
INSERT INTO org_scenarios (name, description, created_at)
VALUES ('Q4 2024 Recovery', 'Recovery plan for North America East attrition', NOW());
```

#### Step 3: Log Terminations in Scenario

```sql
-- Tom Johnson terminated Sept 30
INSERT INTO org_scenario_employees (
  scenario_id,
  employee_id,
  termination_date
)
VALUES (
  [scenario_id],
  [tom_johnson_id],
  '2024-09-30'
);

-- John Smith terminated Oct 15
INSERT INTO org_scenario_employees (
  scenario_id,
  employee_id,
  termination_date
)
VALUES (
  [scenario_id],
  [john_smith_id],
  '2024-10-15'
);
```

#### Step 4: Create Backfills in Scenario

```sql
-- Tom Johnson Backfill
INSERT INTO org_scenario_employees (
  scenario_id,
  first_name,
  last_name,
  position,
  manager_name,
  start_date
)
VALUES (
  [scenario_id],
  'Tom',
  'Johnson (Backfill)',
  'Account Executive',
  'Michael Chen',
  '2024-11-30'
);

-- Add quota assignment
INSERT INTO quota_assignments (
  employee_id,
  annual_quota,
  territory_name
)
VALUES (
  [backfill_id],
  1400000,
  'North America East'
);

-- Add ramp schedule
INSERT INTO ramp_assignments (
  employee_id,
  start_date,
  month_1_percentage,
  month_2_percentage,
  month_3_percentage,
  month_4_percentage
)
VALUES (
  [backfill_id],
  '2024-11-30',
  0,
  25,
  50,
  75
);

-- Repeat for John Smith Backfill with start_date = '2024-12-15'
```

#### Step 5: Log LOA in Scenario

```sql
-- Emily Davis LOA
UPDATE org_scenario_employees
SET
  employment_status = 'On Leave',
  leave_start_date = '2024-11-01',
  leave_end_date = '2025-01-01'
WHERE employee_id = [emily_davis_id];
```

---

## Demo Script: Walking Through the Narrative

### Demo Flow (5-7 minutes)

#### Part 1: Discovering the Problem (1 min)

1. Start on Overview page, North America East selected
2. Point out: "We're $3.5M below target capacity"
3. Point to Gap Breakdown: "We've lost $2.8M to attrition and LOA"
4. Click [View Hiring Plan]

#### Part 2: Understanding the Losses (1-2 min)

5. On Hiring Plan Roster view
6. Expand Michael Chen's team
7. Point out:
   - ❌ Tom Johnson - Terminated Sept 30 (-$1.4M)
   - ❌ John Smith - Terminated Oct 15 (-$1.2M)
   - 🟡 Emily Davis - LOA Nov 1 (-$1.2M temporary)
8. Point to top metrics: "Loss Capacity: $2.8M, 3 people affected"

#### Part 3: Planning the Recovery (1-2 min)

9. Point out backfill rows:
   - 🔵 Tom Johnson (Backfill) - Starting Nov 30
   - 🔵 John Smith (Backfill) - Starting Dec 15
10. Show monthly capacity columns
11. Point to Recovered Capacity: "$2.1M by Q1 2025"
12. Point to Unrecovered Gap: "$700K - we're still short"

#### Part 4: Visualizing the Timeline (1 min)

13. Click Timeline tab
14. Point out:
    - Hiring phases (gray bars)
    - Ramp schedules (blue gradient)
    - Summary row: "Total Capacity Added by month"
15. "First meaningful capacity returns in January: +$317K"

#### Part 5: Seeing the Organization (1 min)

16. Click Org Chart tab
17. Pan/zoom to Michael Chen's team
18. Show visual impact:
    - Terminated employees with red badges
    - TBH backfills with blue badges
    - Capacity rollup at manager level

#### Part 6: Taking Action (1 min)

19. Return to Roster tab
20. Click "Terminate" on a different employee to demonstrate
21. Show "Create backfill" checkbox
22. Show how it immediately updates Loss Capacity metric
23. "Sarah can now see the full impact and plan accordingly"

---

## Key Narrative Points to Emphasize

### 1. The Problem is Clear

- **Overview shows the gap**: "You're $3.5M short"
- **Hiring Plan shows why**: "2 terminations + 1 LOA = $2.8M loss"

### 2. The Solution is Visible

- **Backfills are tracked**: "2 positions planned"
- **Timeline shows when**: "Recovery starts in November, full strength by May"

### 3. The Gap is Explained

- **Loss Capacity**: Total capacity lost to attrition/LOA
- **Recovered Capacity**: Total capacity being recovered through backfills
- **Unrecovered Gap**: The difference (what's still missing)
- **Recovery Lag**: How long it takes from termination → full productivity

### 4. The Three Views Work Together

- **Roster**: Detailed data, take actions, see status
- **Timeline**: When things happen, ramp schedules, monthly capacity
- **Org Chart**: Visual impact, reporting structure, capacity rollup

### 5. Metrics are Actionable

- **Loss Capacity**: Tells you the problem size
- **Recovered Capacity**: Tells you how much you're fixing
- **Unrecovered Gap**: Tells you what's left to fix
- **Recovery Lag**: Tells you when you'll be back to full strength

---

## Questions the Demo Should Answer

### ✅ Questions We Can Now Answer:

1. **What do I do about my gap?**
   → Create backfill positions for terminated employees

2. **How am I closing it out?**
   → 2 backfills planned, starting Nov/Dec, ramping over 5 months

3. **How much loss capacity do I have in November?**
   → $2.8M (2 terminated + 1 LOA)

4. **How have I recovered it?**
   → +$317K by January, +$635K by February, full recovery by May

5. **When am I back to target?**
   → March 2025 (first positive month), full strength May 2025

6. **What's the difference between loss capacity and unrecovered gap?**
   → Loss is what you lost, unrecovered is what you haven't fixed yet

7. **Why is there still a gap if I added backfills?**
   → Ramp schedules - they start at 0% and take 5 months to reach 100%

8. **What's the impact of LOA vs. termination?**
   → LOA is temporary (no backfill needed), termination is permanent (needs backfill)

---

## Next Steps for Implementation

### Phase 1: Data Improvements

1. ✅ Seed mock data following the script above
2. ✅ Ensure terminated employees show in roster with termination date
3. ✅ Ensure backfills calculate start date (termination + 2 months)
4. ✅ Ensure LOA employees show with leave dates

### Phase 2: Metric Calculations (Needs Implementation)

1. **Calculate Loss Capacity dynamically**:

   ```typescript
   losCapacity = sum(terminated.quota) + sum(loa.quota);
   ```

2. **Calculate Recovered Capacity dynamically**:

   ```typescript
   recoveredCapacity = sum(backfills.quota * rampPercentage);
   ```

3. **Calculate Unrecovered Gap dynamically**:

   ```typescript
   unrecoveredGap = lossCapacity - recoveredCapacity;
   ```

4. **Calculate Recovery Lag dynamically**:
   ```typescript
   avgLag = average(terminationDate → backfillFullRampDate)
   ```

### Phase 3: UI Improvements

1. Add "Gap Breakdown" widget to Overview
2. Add "Recovery Tracking" section to Hiring Plan
3. Add "Monthly Snapshot" table to Timeline
4. Update metrics to be actionable (add buttons, next steps)
5. Add month picker to see "Capacity in [Month]"

### Phase 4: Narrative Polish

1. Add tooltips explaining each metric
2. Add "What does this mean?" helper text
3. Add suggested actions: "Add 1 more backfill to close gap"
4. Add alerts: "⚠️ Emily Davis returns from LOA in 45 days"

---

## Success Criteria

A successful demo should allow Sarah to:

1. ✅ See the $3.5M gap on Overview
2. ✅ Understand it's from 2 terminations + 1 LOA
3. ✅ See she's planned 2 backfills to recover $2.1M
4. ✅ Understand there's still a $700K gap
5. ✅ Know capacity will return gradually starting January
6. ✅ See full recovery by May 2025
7. ✅ Take action: log new attrition, create backfills, edit ramp schedules
8. ✅ Switch between Roster/Timeline/Org Chart views to see different perspectives

All within 5-7 minutes, with a clear narrative from problem → solution → impact.
