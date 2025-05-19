
import { Link } from "react-router-dom";
import { Category } from "./PortfolioFilter";

export interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  image: string;
  description: string;
  date: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  category: Category;
}

const PortfolioGrid = ({ items, category }: PortfolioGridProps) => {
  const filteredItems = category === "all"
    ? items
    : items.filter(item => item.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <Link
          to={`/portfolio/${item.id}`}
          key={item.id}
          className="group relative overflow-hidden rounded-lg portfolio-item"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-white/70 text-sm capitalize">{item.category}</span>
            <h3 className="text-white text-xl font-bold">{item.title}</h3>
          </div>
        </Link>
      ))}

      {filteredItems.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <p className="text-gray-500 text-lg">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
