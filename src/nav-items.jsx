import { Home, Layers, Zap, BarChart2, GitCompare } from "lucide-react";
import Index from "./pages/Index.jsx";
import CategoryAnalysis from "./pages/CategoryAnalysis.jsx";
import PerkAnalysis from "./pages/PerkAnalysis.jsx";
import StatInsights from "./pages/StatInsights.jsx";
import Comparison from "./pages/Comparison.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Category Analysis",
    to: "/category-analysis",
    icon: <Layers className="h-4 w-4" />,
    page: <CategoryAnalysis />,
  },
  {
    title: "Perk Analysis",
    to: "/perk-analysis",
    icon: <Zap className="h-4 w-4" />,
    page: <PerkAnalysis />,
  },
  {
    title: "Stat Insights",
    to: "/stat-insights",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <StatInsights />,
  },
  {
    title: "Weapon Comparison",
    to: "/comparison",
    icon: <GitCompare className="h-4 w-4" />,
    page: <Comparison />,
  },
];
