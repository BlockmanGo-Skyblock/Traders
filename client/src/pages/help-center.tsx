import { Link } from "wouter";
import { ArrowLeft, HelpCircle, Search, MessageCircle, Book, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-background to-gaming-dark">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gaming-green mb-2">Help Center</h1>
          <p className="text-muted-foreground">Find answers to common questions and get help with trading</p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search for help topics..." 
              className="pl-10 py-3"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:bg-card/80 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <Book className="h-12 w-12 text-gaming-green mx-auto mb-2" />
              <CardTitle className="text-lg">Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Learn the basics of trading on our platform
              </p>
            </CardContent>
          </Card>

          <Card className="hover:bg-card/80 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-electric-blue mx-auto mb-2" />
              <CardTitle className="text-lg">Trading Help</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Guides for successful and safe trading
              </p>
            </CardContent>
          </Card>

          <Card className="hover:bg-card/80 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <MessageCircle className="h-12 w-12 text-gaming-purple mx-auto mb-2" />
              <CardTitle className="text-lg">Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Get direct help from our team
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <HelpCircle className="mr-2 h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">How do I create my first trade?</h3>
                <p className="text-muted-foreground">
                  Click the "Create Trade" button on the homepage, fill in what you want and what you're offering, 
                  then publish your trade. Other users can then respond to your trade offer.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">How do I know if someone is interested in my trade?</h3>
                <p className="text-muted-foreground">
                  When someone responds to your trade, you'll see response notifications on your trade card. 
                  You can then accept or decline their offers directly from the platform.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">What should I do if I suspect a scammer?</h3>
                <p className="text-muted-foreground">
                  Immediately stop the trade and use our reporting system. Take screenshots of any suspicious 
                  behavior and contact our moderation team through Discord. Never trade outside the game's official systems.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Can I edit or delete my trades?</h3>
                <p className="text-muted-foreground">
                  Yes, you can delete your own trades if they're no longer relevant. Currently, editing requires 
                  deleting and recreating the trade. We're working on an edit feature for future updates.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">How do I complete a trade safely?</h3>
                <p className="text-muted-foreground">
                  Always use Blockman Go's in-game trading system. Verify all items before confirming, 
                  trade simultaneously, and never give items first or share personal information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Platform Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-electric-blue mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Trade Responses</h4>
                    <p className="text-sm text-muted-foreground">Users can respond to your trades with counter-offers or questions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-electric-blue mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Search & Filter</h4>
                    <p className="text-sm text-muted-foreground">Find specific trades using our search and filtering system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-electric-blue mt-0.5" />
                  <div>
                    <h4 className="font-semibold">User Profiles</h4>
                    <p className="text-sm text-muted-foreground">View trader history and build trust within the community</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Need More Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you can't find the answer you're looking for, our community and moderation team are here to help:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://discord.gg/YZnrRNhrsa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-electric-blue hover:bg-electric-blue/90">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join Discord Community
                  </Button>
                </a>
                <Link href="/report-user" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Report an Issue
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Direct support available from <span className="text-gaming-green font-medium">@xSoniteALT</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}