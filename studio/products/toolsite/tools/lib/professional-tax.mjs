// Professional tax by state, as deducted from salary. `g` is gross salary per month; each entry returns
// [typical monthly deduction, annual total]. Verified against official texts and current notifications on
// 16 Nov 2026 (see studio/reports/2026-11-16.md and the in-hand salary explainer). Inlined via `lib: [professionalTax]`.
export default function professionalTax() {
  return {
    MH: (g, woman) => { if (woman && g <= 25000) return [0, 0]; const m = g <= 7500 ? 0 : g <= 10000 ? 175 : 200; return [m, m === 200 ? 2500 : m * 12]; },
    KA: (g) => { const m = g >= 25000 ? 200 : 0; return [m, m === 200 ? 2500 : 0]; },
    WB: (g) => { const m = g <= 20000 ? 0 : g <= 30000 ? 100 : g <= 50000 ? 140 : g <= 100000 ? 170 : 208; return [m, m * 12]; },
    TG: (g) => { const m = g <= 15000 ? 0 : g <= 20000 ? 150 : 200; return [m, m * 12]; },
    AP: (g) => { const m = g <= 15000 ? 0 : g <= 20000 ? 150 : 200; return [m, m * 12]; },
    GJ: (g) => { const m = g <= 12000 ? 0 : 200; return [m, m * 12]; },
    MP: (g) => { const y = g * 12; const a = y <= 225000 ? 0 : y <= 300000 ? 1500 : y <= 400000 ? 2000 : 2500; return [Math.round(a / 12), a]; },
    TN: (g) => { const h = g * 6; const s = h <= 21000 ? 0 : h <= 30000 ? 180 : h <= 45000 ? 425 : h <= 60000 ? 930 : h <= 75000 ? 1025 : 1250; return [Math.round(s / 6), s * 2]; },
    KL: (g) => { const h = g * 6; const s = h < 12000 ? 0 : h < 18000 ? 320 : h < 30000 ? 450 : h < 45000 ? 600 : h < 100000 ? 750 : h < 125000 ? 1000 : 1250; return [Math.round(s / 6), s * 2]; },
    NONE: () => [0, 0],
  };
}
