import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
  variant?: "sage" | "blue" | "default";
  className?: string;
}

export const ServiceCard = ({ title, items, icon, variant = "default", className }: ServiceCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "sage":
        return "bg-sage-light border-sage-medium";
      case "blue":
        return "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20";
      default:
        return "bg-card border-border";
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-[--shadow-soft] hover:-translate-y-1",
      getVariantClasses(),
      className
    )}>
      <CardContent className="p-8">
        {icon && (
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-white/50 backdrop-blur-sm">
              {icon}
            </div>
          </div>
        )}
        <h3 className="text-2xl font-bold mb-6 text-center text-primary">
          {title}
        </h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};