---
sidebar_position: 1
title: Recovered Gap
---

# Recovered Gap

## Definition

**Recovered Gap** is the portion of lost sales capacity that has been regained within a measurement window through backfills, transfers, or the ramping of existing hires.

## Why It Matters

- Measures effectiveness of backfill speed and hiring pipeline
- Quantifies capacity restoration after attrition
- Helps forecast when team returns to target capacity
- Informs hiring lead time planning

## Formula

```
Recovered Gap = Lost Capacity - Unrecovered Gap
```

Or measured directly:
```
Recovered Gap = Capacity Restored through Backfills + Incremental Ramp Gains
```

## Example Calculation

### Scenario
- **Q1 Start Capacity**: 20 RRE
- **Q1 Attrition**: 3 fully ramped reps leave (3 RRE lost)
- **Q1 Backfills Hired**: 3 reps hired
  - By end of Q1, new hires are at 30% ramp each
  - Recovered capacity: 3 × 0.30 = 0.9 RRE
- **Q1 End Capacity**: 20 - 3 + 0.9 = 17.9 RRE

**Recovered Gap in Q1**: 0.9 RRE (30% of the 3 RRE lost)
**Unrecovered Gap in Q1**: 2.1 RRE (70% of the 3 RRE lost)

### Over Multiple Quarters

If those same 3 backfills continue ramping:

| Quarter | Ramp % | Capacity Added | Cumulative Recovered |
|---------|--------|----------------|---------------------|
| Q1 | 30% | 0.9 RRE | 0.9 RRE |
| Q2 | 70% | 1.2 RRE | 2.1 RRE |
| Q3 | 100% | 0.9 RRE | 3.0 RRE |

By Q3, the full 3 RRE gap is recovered.

## Measurement Windows

### Short-Term (Same Quarter)
How much capacity restored before quarter-end?

### Long-Term (Multi-Quarter)
How long until full capacity restoration?

## Key Drivers

1. **Time-to-Hire**: Faster hiring = faster recovery
2. **Ramp Speed**: Better onboarding = faster capacity gain
3. **Backfill Priority**: Which roles get replaced first
4. **Internal Transfers**: Can accelerate recovery if already ramped

## Best Practices

1. **Track by Role**: Different roles have different ramp curves
2. **Set Recovery Targets**: Goal for % recovered within quarter
3. **Monitor Lead Indicators**: Offers extended, start dates scheduled
4. **Plan for Lag**: Budget for unrecovered gap in capacity planning

## Common Pitfalls

- Assuming backfills restore capacity immediately
- Not accounting for ramp time in capacity forecasts
- Treating all backfills as equal regardless of role complexity
- Ignoring the compounding effect of attrition on capacity

## Related Terms

- [Unrecovered Gap](/docs/capacity/unrecovered-gap)
- [RRE (Ramped Rep Equivalent)](/docs/metrics/rre)
- [Capacity Planning](/docs/playbooks/capacity-planning)

## References

- Commonly used in SaaS capacity planning models
- Key input to sales forecasting and quota setting
