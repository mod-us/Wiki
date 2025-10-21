---
sidebar_position: 1
title: RRE (Ramped Rep Equivalent)
---

# RRE (Ramped Rep Equivalent)

## Definition

**Ramped Rep Equivalent (RRE)** is a capacity metric that converts partially ramped sales representatives into fully ramped equivalents based on their productivity levels. It provides a standardized way to measure total sales capacity that accounts for ramp time.

## Why It Matters

- Headcount alone doesn't reflect actual selling capacity
- New hires produce at lower levels during onboarding
- RRE enables accurate capacity planning and quota setting
- Allows apples-to-apples comparison across time periods

## Formula

### Basic Formula

```
RRE = Σ (Headcount × Ramp %)
```

Where:
- **Headcount**: Number of reps in each ramp cohort
- **Ramp %**: Productivity level relative to fully ramped (0% to 100%)

### Example Calculation

Given this team composition:

| Tenure | Headcount | Ramp % | Calculation |
|--------|-----------|--------|-------------|
| 0-3 months | 5 | 25% | 5 × 0.25 = 1.25 |
| 3-6 months | 3 | 60% | 3 × 0.60 = 1.80 |
| 6-9 months | 2 | 85% | 2 × 0.85 = 1.70 |
| 9+ months (fully ramped) | 15 | 100% | 15 × 1.00 = 15.00 |
| **Total** | **25** | - | **19.75 RRE** |

This team of 25 people has the equivalent capacity of 19.75 fully ramped reps.

## Common Variants

### Time-Based RRE
Uses calendar months or quarters as ramp cohorts (shown above).

### Attainment-Based RRE
Uses actual attainment % instead of assumed ramp curve:
```
RRE = Σ (Headcount × Actual Attainment %)
```

### Weighted RRE
Different ramp curves by role (SDR vs AE vs Enterprise AE).

## Best Practices

1. **Document Your Ramp Curve**: Your assumed ramp percentages by tenure
2. **Update Regularly**: Recalculate RRE monthly as team composition changes
3. **Benchmark Actuals**: Compare assumed vs actual productivity to validate your curve
4. **Be Consistent**: Use the same methodology across time periods for valid comparisons

## Common Pitfalls

- Using headcount when you mean RRE (overstates capacity)
- Applying a single ramp curve to all roles
- Not updating ramp assumptions as onboarding improves
- Ignoring seasonality in ramp performance

## Related Terms

- [Recovered Gap](/docs/capacity/recovered-gap)
- [Unrecovered Gap](/docs/capacity/unrecovered-gap)
- [Sales Capacity Planning](/docs/playbooks/capacity-planning)

## References

- Standard metric used across SaaS sales operations
- Related to "productive headcount" and "effective capacity"
