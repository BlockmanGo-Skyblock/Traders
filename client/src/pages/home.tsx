import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import FilterSection from "@/components/filter-section";
import TradeCard from "@/components/trade-card";
import CreateTradeModal from "@/components/create-trade-modal";
import { Button } from "@/components/ui/button";
import { Box, Handshake, List } from "lucide-react";
import type { Trade } from "@shared/schema";

export default function Home() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  const { data: trades = [], isLoading, refetch } = useQuery<Trade[]>({
    queryKey: ["/api/trades", { category: selectedCategory, search: searchQuery, sort: sortOption }],
  });

  const scrollToTrades = () => {
    document.getElementById('trades-container')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        onCreateTrade={() => setIsCreateModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-blue via-gaming-purple to-gaming-green bg-clip-text text-transparent">
              Trade Skyblock Items
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The ultimate marketplace for Blockman Go Skyblock item trading. Connect with players, trade safely, and build your perfect island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-gradient-to-r from-electric-blue to-gaming-purple px-8 py-3 text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Start Trading
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToTrades}
              className="border-border px-8 py-3 text-lg font-semibold hover:bg-muted transition-all duration-200"
            >
              <List className="mr-2 h-5 w-5" />
              Browse Trades
            </Button>
          </div>
        </div>

        <FilterSection 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        {/* Trade Listings Grid */}
        <div id="trades-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 animate-pulse">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-24"></div>
                    <div className="h-3 bg-muted rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-20 bg-muted rounded"></div>
                  <div className="h-20 bg-muted rounded"></div>
                </div>
              </div>
            ))
          ) : trades.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <Box className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No trades found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery ? "Try adjusting your search terms" : "Be the first to create a trade!"}
              </p>
              <Button onClick={() => setIsCreateModalOpen(true)}>
                Create First Trade
              </Button>
            </div>
          ) : (
            trades.map((trade) => (
              <TradeCard key={trade.id} trade={trade} onRefetch={refetch} />
            ))
          )}
        </div>

        {/* Load More Button - if we had pagination */}
        {trades.length > 0 && (
          <div className="text-center">
            <Button 
              variant="outline" 
              className="px-8 py-3 font-medium"
            >
              Load More Trades
            </Button>
          </div>
        )}
      </main>

      <CreateTradeModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={() => {
          setIsCreateModalOpen(false);
          refetch();
        }}
      />

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-gaming-purple rounded-lg flex items-center justify-center">
                  <Box className="text-white h-4 w-4" />
                </div>
                <span className="text-lg font-bold text-electric-blue">BlockTrade</span>
              </div>
              <p className="text-muted-foreground text-sm">The ultimate marketplace for Blockman Go Skyblock item trading.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-electric-blue transition-colors">Discord Server</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Trading Rules</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Safety Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-electric-blue transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Report User</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-electric-blue transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BlockTrade. All rights reserved. Not affiliated with Blockman Go.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
