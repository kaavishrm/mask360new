// Shared income tax engine. Inlined into the page by build.mjs via `lib: [taxEngine]`
// and called in the browser as `const T = taxEngine();`. Keep it free of imports.
export default function taxEngine() {
  // Slabs announced in Budget 2025. They apply to FY 2025-26 (AY 2026-27) and continue unchanged for FY 2026-27 (tax year 2026-27).
  const YEARS = {
    '2025-26': { label: 'FY 2025-26 (AY 2026-27)', newSlabs: [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30]], newRebateLimit: 1200000, oldRebateLimit: 500000, oldRebateMax: 12500, stdNew: 75000, stdOld: 50000 },
    '2026-27': { label: 'FY 2026-27 (AY 2027-28)', newSlabs: [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30]], newRebateLimit: 1200000, oldRebateLimit: 500000, oldRebateMax: 12500, stdNew: 75000, stdOld: 50000 },
  };
  function rules(fy) { return YEARS[fy] || YEARS['2026-27']; }
  function oldSlabs(age) { const ex = age === 2 ? 500000 : age === 1 ? 300000 : 250000; return [[ex, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]]; }
  function slabTax(inc, slabs) { let t = 0, prev = 0; for (const [upto, r] of slabs) { if (inc > prev) t += (Math.min(inc, upto) - prev) * r; prev = upto; if (inc <= upto) break; } return t; }
  function surchargeRate(inc, isNew) { if (inc > 5e7) return isNew ? 0.25 : 0.37; if (inc > 2e7) return 0.25; if (inc > 1e7) return 0.15; if (inc > 5e6) return 0.10; return 0; }
  function thresholdBelow(inc) { let t = 0; for (const x of [5e6, 1e7, 2e7, 5e7]) if (inc > x) t = x; return t; }
  // Returns tax after rebate, surcharge after marginal relief, cess and total for a taxable income.
  function compute(taxable, isNew, age, fy) {
    const R = rules(fy);
    const slabs = isNew ? R.newSlabs : oldSlabs(age);
    let tax = slabTax(taxable, slabs), rebate = 0;
    if (isNew) { if (taxable <= R.newRebateLimit) rebate = tax; else { const cap = taxable - R.newRebateLimit; if (tax > cap) rebate = tax - cap; } }
    else if (taxable <= R.oldRebateLimit) rebate = Math.min(tax, R.oldRebateMax);
    tax -= rebate;
    let sur = tax * surchargeRate(taxable, isNew);
    const th = thresholdBelow(taxable);
    if (sur > 0 && th > 0) {
      const maxAllowed = slabTax(th, slabs) * (1 + surchargeRate(th, isNew)) + (taxable - th);
      if (tax + sur > maxAllowed) sur = Math.max(0, maxAllowed - tax);
    }
    const cess = (tax + sur) * 0.04;
    return { tax, rebate, sur, cess, total: tax + sur + cess };
  }
  return { rules, oldSlabs, slabTax, surchargeRate, compute };
}
