import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, MessageCircle, ArrowDown, ArrowUp } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Trade } from "@shared/schema";

interface TradeCardProps {
  trade: Trade;
  onRefetch: () => void;
}



const getInitials = (name: string) => {
  if (!name) return "??";
  return name.split(' ').map(n => n?.[0] || '').join('').toUpperCase().slice(0, 2) || "??";
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

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else {
    const days = Math.floor(diffInMinutes / 1440);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }
};

export default function TradeCard({ trade, onRefetch }: TradeCardProps) {
  const { toast } = useToast();

  const respondMutation = useMutation({
    mutationFn: () => apiRequest("POST", `/api/trades/${trade.id}/respond`),
    onSuccess: () => {
      toast({
        title: "Response recorded",
        description: "The trader has been notified of your interest.",
      });
      onRefetch();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to record response. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContact = () => {
    // In a real app, this would open a contact modal or redirect to a messaging system
    toast({
      title: "Contact Information",
      description: `Contact ${trade.authorName} via ${trade.contactMethod}`,
    });
    respondMutation.mutate();
  };

  return (
    <Card className="bg-card border-border hover:border-electric-blue transition-all duration-300 transform hover:scale-105 cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${getAvatarColor(trade.authorName)} rounded-full flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">
                {getInitials(trade.authorName)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold">{trade.authorName}</h3>
              <p className="text-sm text-muted-foreground">
                {formatTimeAgo(new Date(trade.createdAt))}
              </p>
            </div>
          </div>
          <Badge className="bg-gaming-purple text-xs font-medium">
            {trade.region || "Global"}
          </Badge>
        </div>
        
        {/* What they want */}
        <div className="mb-4">
          <h4 className="text-gaming-green font-semibold mb-2 flex items-center">
            <ArrowDown className="mr-2 h-4 w-4" />
            Looking For:
          </h4>
          <div className="bg-background rounded-lg p-3">
            <p className="text-muted-foreground text-sm">{trade.wants}</p>
          </div>
        </div>
        
        {/* What they offer */}
        <div className="mb-4">
          <h4 className="text-electric-blue font-semibold mb-2 flex items-center">
            <ArrowUp className="mr-2 h-4 w-4" />
            Offering:
          </h4>
          <div className="bg-background rounded-lg p-3">
            <p className="text-muted-foreground text-sm">{trade.offers}</p>
          </div>
        </div>
        
        {/* Additional notes if any */}
        {trade.notes && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-sm">Notes:</h4>
            <div className="bg-background rounded-lg p-3">
              <p className="text-muted-foreground text-sm">{trade.notes}</p>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Eye className="mr-1 h-3 w-3" />
              {trade.views}
            </span>
            <span className="flex items-center">
              <MessageCircle className="mr-1 h-3 w-3" />
              {trade.responses}
            </span>
          </div>
          <Button 
            onClick={handleContact}
            disabled={respondMutation.isPending}
            className="bg-electric-blue hover:bg-electric-blue/80 text-sm font-medium"
          >
            {respondMutation.isPending ? "Contacting..." : "Contact"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
