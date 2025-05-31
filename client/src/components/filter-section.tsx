import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterSectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOption: string;
  onSortChange: (sort: string) => void;
}

const categories = [
  { value: "all", label: "All Items" },
  { value: "weapons", label: "Weapons" },
  { value: "armor", label: "Armor" },
  { value: "tools", label: "Tools" },
  { value: "materials", label: "Materials" },
  { value: "rare", label: "Rare Items" },
];

export default function FilterSection({ 
  selectedCategory, 
  onCategoryChange, 
  sortOption, 
  onSortChange 
}: FilterSectionProps) {
  return (
    <div className="bg-card rounded-xl p-6 mb-8 border border-border">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="text-muted-foreground font-medium mr-2">Categories:</span>
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              variant={selectedCategory === category.value ? "default" : "secondary"}
              size="sm"
              className={
                selectedCategory === category.value
                  ? "bg-electric-blue hover:bg-electric-blue/80"
                  : "bg-muted hover:bg-muted/80"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground font-medium">Sort by:</span>
          <Select value={sortOption} onValueChange={onSortChange}>
            <SelectTrigger className="w-40 bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
