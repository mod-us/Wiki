---
sidebar_position: 2
title: Unrecovered Gap
---

# Unrecovered Gap

## Definition

**Unrecovered Gap** is the portion of lost sales capacity that has NOT been regained within a measurement window. It represents the ongoing capacity deficit from attrition, restructuring, or other losses.

## Why It Matters

- Quantifies actual capacity shortfall vs. target
- Drives hiring urgency and backfill prioritization
- Impacts quota setting and revenue forecasting
- Reveals true cost of attrition beyond replacement cost

## Formula

```
Unrecovered Gap = Lost Capacity - Recovered Gap
```

Or:
```
Unrecovered Gap = Target Capacity - Actual Capacity
```

Where capacity is measured in RRE or dollar quotas.

## Example Calculation

### Single Quarter View

**Starting State:**
- Target capacity: 25 RRE
- Actual capacity: 25 RRE
- No gap

**Mid-Quarter Events:**
- 4 reps leave (4 RRE lost)
- 2 backfills hired, both at 40% ramp by quarter-end
- Recovered: 2 × 0.40 = 0.8 RRE

**Quarter-End State:**
- Target capacity: 25 RRE (unchanged)
- Actual capacity: 25 - 4 + 0.8 = 21.8 RRE
- **Unrecovered Gap: 3.2 RRE**

### Impact on Quota Attainment

If each RRE should produce $100K/quarter:
- Lost potential: 3.2 RRE × $100K = $320K
- This $320K shortfall affects team attainment even if remaining reps hit 100%

## Time Horizons

### Same-Quarter Gap
What capacity deficit exists by quarter-end?

### Rolling Gap
What's the ongoing deficit as new attrition occurs?

### Planning Gap
What gap will exist in future quarters given current hiring pipeline?

## Calculation by Dollar Quota

```
Unrecovered Gap ($) = (Lost Headcount × Avg Quota) - (Backfill Capacity × Avg Quota)
```

**Example:**
- 3 AEs leave, each with $400K quota = $1.2M lost
- 3 backfills hired, at 50% ramp = $600K restored
- **Unrecovered Gap: $600K**

## Key Drivers

1. **Attrition Rate**: Higher churn = larger gap
2. **Time-to-Hire**: Slower hiring = longer gap
3. **Ramp Time**: Longer onboarding = prolonged gap
4. **Backfill Approval Lag**: Delays between exit and job req approval

## Business Implications

### For Sales Leaders
- Justifies over-hiring to buffer against attrition
- Explains revenue misses despite "hitting headcount"

### For Finance
- Quantifies true cost of turnover
- Informs headcount planning buffers

### For RevOps
- Drives proactive hiring models
- Supports capacity-based quota setting

## Best Practices

1. **Report Monthly**: Track gap trend, not just point-in-time
2. **Break Down by Role**: Different roles have different impacts
3. **Forecast Forward**: Project gap 2-3 quarters out
4. **Set Acceptable Thresholds**: Define "too much" gap (e.g., >5% of target capacity)

## Common Pitfalls

- Only measuring headcount gap, not capacity gap
- Not adjusting quotas for unrecovered capacity
- Assuming the gap will "work itself out"
- Ignoring compounding effects of continuous attrition

## Related Terms

- [Recovered Gap](/docs/capacity/recovered-gap)
- [RRE (Ramped Rep Equivalent)](/docs/metrics/rre)
- [Sales Capacity Planning](/docs/playbooks/capacity-planning)

## References

- Standard metric in sales capacity planning
- Also known as "capacity deficit" or "open capacity"
