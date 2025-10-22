import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2 p-1 rounded-lg border border-border bg-card">
      <Sun className={`h-4 w-4 transition-colors ${!isDark ? 'text-primary' : 'text-muted-foreground'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        data-testid="button-theme-toggle"
      />
      <Moon className={`h-4 w-4 transition-colors ${isDark ? 'text-primary' : 'text-muted-foreground'}`} />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
