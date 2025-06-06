
import { Button } from "@/components/ui/button";

export type Category = "all" | "photos" | "videos" | "graphics";

interface PortfolioFilterProps {
  onCategoryChange: (category: Category) => void;
  activeCategory: Category;
}

const PortfolioFilter = ({ onCategoryChange, activeCategory }: PortfolioFilterProps) => {
  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Work" },
    { value: "photos", label: "Photo Editing" },
    { value: "videos", label: "Video Editing" },
    { value: "graphics", label: "Graphic Design" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={activeCategory === category.value ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
