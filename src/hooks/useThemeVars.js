import { useMemo } from "react";
import { buildThemeFromColors } from "../utils/colorScale";

const FALLBACK_PRIMARY = "#0284c7";
const FALLBACK_ACCENT = "#0891b2";

// Tính CSS custom properties từ 2 màu (primary/accent) để gán vào style của thẻ bọc ngoài.
// Các class dùng var(--c-500) v.v. sẽ tự đổi màu theo lựa chọn của người dùng.
export function useThemeVars(primary, accent) {
  return useMemo(() => {
    const t = buildThemeFromColors(primary || FALLBACK_PRIMARY, accent || FALLBACK_ACCENT);
    return {
      "--c-50": t[50],
      "--c-100": t[100],
      "--c-200": t[200],
      "--c-300": t[300],
      "--c-400": t[400],
      "--c-500": t[500],
      "--c-600": t[600],
      "--c-700": t[700],
      "--c-grad-from": t.gradientFrom,
      "--c-grad-to": t.gradientTo,
    };
  }, [primary, accent]);
}
