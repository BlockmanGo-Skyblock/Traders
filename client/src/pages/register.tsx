import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, type InsertUser } from "@shared/schema";
import { useRegister } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Link, useLocation } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box, UserPlus } from "lucide-react";

const extendedRegisterSchema = insertUserSchema.extend({
  username: insertUserSchema.shape.username.min(3, "Username must be at least 3 characters"),
  password: insertUserSchema.shape.password.min(6, "Password must be at least 6 characters"),
});

export default function Register() {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const registerMutation = useRegister();

  const form = useForm<InsertUser>({
    resolver: zodResolver(extendedRegisterSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      displayName: "",
    },
  });

  const onSubmit = (data: InsertUser) => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Account created!",
          description: "Welcome to BlockTrade! You can now start trading.",
        });
        navigate("/");
      },
      onError: (error) => {
        toast({
          title: "Registration failed",
          description: error.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-gaming-purple rounded-lg flex items-center justify-center">
              <Box className="text-white h-5 w-5" />
            </div>
            <span className="text-2xl font-bold text-electric-blue">BlockTrade</span>
          </div>
          <h2 className="text-3xl font-bold">Join the community</h2>
          <p className="text-muted-foreground mt-2">
            Create your account to start trading Skyblock items
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Fill in your details to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Choose a unique username"
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
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display Name (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How others will see you"
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Create a secure password"
                          className="bg-background border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={registerMutation.isPending}
                  className="w-full bg-gradient-to-r from-electric-blue to-gaming-purple hover:opacity-90"
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  {registerMutation.isPending ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-electric-blue hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <a className="text-muted-foreground hover:text-electric-blue transition-colors">
              ← Back to homepage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}