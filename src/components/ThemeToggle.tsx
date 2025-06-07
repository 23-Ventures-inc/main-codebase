// components/ThemeToggle.tsx
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="text-2xl mb-1">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
