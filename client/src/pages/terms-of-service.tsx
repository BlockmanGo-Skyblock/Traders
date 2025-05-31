import { Link } from "wouter";
import { ArrowLeft, Scale, Users, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-gaming-green mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Scale className="mr-2 h-5 w-5" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                By using our Blockman Go Skyblock trading platform, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our platform.
              </p>
              <p className="text-muted-foreground">
                These terms constitute a legally binding agreement between you and our platform. 
                We reserve the right to modify these terms at any time, and continued use of the platform 
                constitutes acceptance of any changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Users className="mr-2 h-5 w-5" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">By using our platform, you agree to:</p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Not abuse, spam, or exploit any features</strong> of the platform or attempt to circumvent security measures</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Respect other users and regions</strong> by following community guidelines and trading rules</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Accept that we may limit access</strong> if rules are broken or terms are violated</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Use trades responsibly</strong> and understand that we are not liable for personal scams between users</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Acknowledge that admins have the final say in disputes</strong> and moderation decisions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Shield className="mr-2 h-5 w-5" />
                Platform Rules & Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Trading Content:</strong> Only post trades related to Blockman Go Skyblock items</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Honesty:</strong> No fake offers or misleading item names are permitted</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Region Compliance:</strong> Stick to your assigned region—cross-region trades are not supported</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Spam Prevention:</strong> Don't spam or repost within the 10-minute cooldown period</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Fair Trading:</strong> Use the Accept/Decline system honestly—scams are reported and result in bans</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <AlertCircle className="mr-2 h-5 w-5" />
                Prohibited Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Scamming or fraud:</strong> Any attempt to deceive other users or obtain items through false pretenses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Harassment:</strong> Bullying, threatening, or inappropriate behavior toward other users</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>System exploitation:</strong> Attempting to exploit bugs, vulnerabilities, or security weaknesses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Unauthorized access:</strong> Attempting to access other users' accounts or private information</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Commercial use:</strong> Using the platform for unauthorized commercial purposes or real money trading</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Liability and Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Platform Availability:</strong> We provide the platform "as is" and cannot guarantee uninterrupted service</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>User Interactions:</strong> We are not responsible for disputes, scams, or issues between users</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Game Compliance:</strong> Users must comply with Blockman Go's own terms of service</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Data Loss:</strong> We are not liable for any loss of data, virtual items, or account information</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Enforcement and Moderation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                We reserve the right to:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p>Suspend or terminate accounts that violate these terms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p>Remove content that violates our guidelines</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p>Investigate reports and take appropriate action</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p>Modify or discontinue features at our discretion</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                All moderation decisions are final and reviewed by <span className="text-gaming-green font-medium">@xSoniteALT</span>.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <a 
                href="https://discord.gg/YZnrRNhrsa" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-electric-blue hover:bg-electric-blue/90">
                  Contact Us on Discord
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}