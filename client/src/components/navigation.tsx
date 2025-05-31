import { Search, Plus, Bell, User, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavigationProps {
  onCreateTrade: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Navigation({ onCreateTrade, searchQuery, onSearchChange }: NavigationProps) {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-gaming-purple rounded-lg flex items-center justify-center">
                <Box className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-electric-blue">BlockTrade</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-background border-border pl-10 focus:ring-2 focus:ring-electric-blue focus:border-transparent"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={onCreateTrade}
              className="bg-gradient-to-r from-electric-blue to-gaming-purple font-medium hover:opacity-90 transition-all duration-200"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Trade
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Bell className="h-4 w-4 text-muted-foreground" />
            </Button>
            <div className="w-8 h-8 bg-gaming-green rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
