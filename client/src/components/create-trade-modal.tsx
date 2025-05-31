import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertTradeSchema, type InsertTrade } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Plus } from "lucide-react";

interface CreateTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const extendedTradeSchema = insertTradeSchema.extend({
  title: insertTradeSchema.shape.title.min(3, "Title must be at least 3 characters"),
  wants: insertTradeSchema.shape.wants.min(10, "Please provide more details about what you want"),
  offers: insertTradeSchema.shape.offers.min(10, "Please provide more details about what you're offering"),
});

export default function CreateTradeModal({ isOpen, onClose, onSuccess }: CreateTradeModalProps) {
  const { toast } = useToast();
  
  const form = useForm<InsertTrade>({
    resolver: zodResolver(extendedTradeSchema),
    defaultValues: {
      title: "",
      category: "",
      wants: "",
      offers: "",
      notes: "",
      contactMethod: "discord",
      authorName: "Player", // In a real app, this would come from auth
    },
  });

  const createTradeMutation = useMutation({
    mutationFn: (data: InsertTrade) => apiRequest("POST", "/api/trades", data),
    onSuccess: () => {
      toast({
        title: "Trade created!",
        description: "Your trade has been posted successfully.",
      });
      form.reset();
      onSuccess();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create trade. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertTrade) => {
    createTradeMutation.mutate(data);
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-card max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-electric-blue">
            Create New Trade
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trade Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Brief title for your trade..." 
                      className="bg-background border-border"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weapons">Weapons</SelectItem>
                      <SelectItem value="armor">Armor</SelectItem>
                      <SelectItem value="tools">Tools</SelectItem>
                      <SelectItem value="materials">Materials</SelectItem>
                      <SelectItem value="rare">Rare Items</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="authorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Username</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your in-game username" 
                      className="bg-background border-border"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="wants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gaming-green flex items-center">
                      <ArrowDown className="mr-2 h-4 w-4" />
                      What I'm Looking For
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe what items you want..." 
                        rows={4} 
                        className="bg-background border-border resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="offers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-electric-blue flex items-center">
                      <ArrowUp className="mr-2 h-4 w-4" />
                      What I'm Offering
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe what items you're offering..." 
                        rows={4} 
                        className="bg-background border-border resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any additional information about your trade..." 
                      rows={3} 
                      className="bg-background border-border resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="discord">Discord</SelectItem>
                      <SelectItem value="ingame">In-Game Message</SelectItem>
                      <SelectItem value="forum">Forum PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex gap-4 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={createTradeMutation.isPending}
                className="flex-1 bg-gradient-to-r from-electric-blue to-gaming-purple hover:opacity-90"
              >
                <Plus className="mr-2 h-4 w-4" />
                {createTradeMutation.isPending ? "Creating..." : "Create Trade"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
