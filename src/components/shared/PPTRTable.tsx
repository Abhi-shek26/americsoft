import { motion } from "framer-motion";
import { Users, Settings, Wrench, Award } from "lucide-react";
import { PPTR_TABLE } from "@/content/site";

const icons = {
  People: Users,
  Process: Settings,
  Tools: Wrench,
  "Relevant Experience": Award,
};

interface PPTRTableProps {
  variant?: "default" | "dark";
}

const PPTRTable = ({ variant = "default" }: PPTRTableProps) => {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      {/* Mobile Cards View */}
      <div className="block md:hidden space-y-4">
        {PPTR_TABLE.map((row) => {
          const Icon = icons[row.category as keyof typeof icons];
          return (
            <div
              key={row.category}
              className={`rounded-xl border p-4 ${
                isDark 
                  ? "border-primary-foreground/10 bg-primary-foreground/5" 
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {Icon && (
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? "bg-accent/20" : "bg-accent/10"}`}>
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                )}
                <span className={`font-semibold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                  {row.category}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {row.summary}
              </p>
            </div>
          );
        })}
      </div>

      {/* Desktop Table View */}
      <div className={`hidden md:block rounded-2xl border ${isDark ? "border-primary-foreground/10" : "border-border"} overflow-hidden`}>
        <table className="w-full">
          <thead>
            <tr className={isDark ? "bg-primary-foreground/5" : "bg-muted/50"}>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                Category
              </th>
              <th className={`px-6 py-4 text-left text-sm font-semibold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                Summary
              </th>
            </tr>
          </thead>
          <tbody>
            {PPTR_TABLE.map((row, index) => {
              const Icon = icons[row.category as keyof typeof icons];
              return (
                <tr
                  key={row.category}
                  className={`border-t ${isDark ? "border-primary-foreground/10" : "border-border"} ${
                    index % 2 === 0
                      ? isDark ? "bg-primary-foreground/[0.02]" : "bg-background"
                      : isDark ? "bg-primary-foreground/5" : "bg-muted/30"
                  }`}
                >
                  <td className={`px-6 py-5 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? "bg-accent/20" : "bg-accent/10"}`}>
                          <Icon className="h-4 w-4 text-accent" />
                        </div>
                      )}
                      <span className="font-medium">{row.category}</span>
                    </div>
                  </td>
                  <td className={`px-6 py-5 ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {row.summary}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PPTRTable;
