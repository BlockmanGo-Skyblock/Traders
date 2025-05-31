import { Search, Plus, Bell, User, Box, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth, useLogout } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  onCreateTrade: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

const getAvatarColor = (name: string) => {
  const colors = [
    "bg-gaming-green",
    "bg-gaming-purple", 
    "bg-gaming-gold",
    "bg-red-500",
    "bg-blue-500",
    "bg-orange-500"
  ];
  const index = name.length % colors.length;
  return colors[index];
};

export default function Navigation({ onCreateTrade, searchQuery, onSearchChange }: NavigationProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const logoutMutation = useLogout();
  const { toast } = useToast();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        toast({
          title: "Logged out",
          description: "You have been successfully logged out.",
        });
      },
    });
  };

  const displayName = user?.displayName || user?.username || "User";

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-gaming-purple rounded-lg flex items-center justify-center">
                <Box className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-electric-blue">BlockTrade</span>
            </Link>
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
            {isAuthenticated && (
              <Button 
                onClick={onCreateTrade}
                className="bg-gradient-to-r from-electric-blue to-gaming-purple font-medium hover:opacity-90 transition-all duration-200"
              >
                <Plus className="mr-2 h-4 w-4" />
                New Trade
              </Button>
            )}
            
            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <>
                    <Button variant="ghost" size="icon" className="hover:bg-muted">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                          <div className={`w-8 h-8 ${getAvatarColor(displayName)} rounded-full flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">
                              {getInitials(displayName)}
                            </span>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{displayName}</p>
                            <p className="text-xs leading-none text-muted-foreground">
                              @{user?.username}
                            </p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} disabled={logoutMutation.isPending}>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>{logoutMutation.isPending ? "Logging out..." : "Log out"}</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link href="/login">
                      <Button variant="ghost">
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="bg-gradient-to-r from-electric-blue to-gaming-purple hover:opacity-90">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
