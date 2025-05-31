import { Link } from "wouter";
import { ArrowLeft, Shield, Lock, Eye, AlertCircle, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Footer from "@/components/footer";

export default function SafetyGuidelines() {
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
          <h1 className="text-3xl font-bold text-gaming-green mb-2">Safety Guidelines</h1>
          <p className="text-muted-foreground">Protect yourself and trade safely in the Blockman Go community</p>
        </div>

        <Alert className="mb-6 border-gaming-green/20 bg-gaming-green/5">
          <Shield className="h-4 w-4 text-gaming-green" />
          <AlertDescription className="text-gaming-green">
            Your safety is our priority. Follow these guidelines to avoid scams and ensure secure trading.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <UserCheck className="mr-2 h-5 w-5" />
                Verifying Trading Partners
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Check user profiles:</strong> Review trader profiles, join dates, and trading history before engaging.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Look for verified badges:</strong> Trusted traders may have verification badges from successful past trades.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Start with small trades:</strong> Build trust gradually with new trading partners using lower-value items first.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Ask questions:</strong> Legitimate traders will be happy to answer questions about their items and trading experience.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Lock className="mr-2 h-5 w-5" />
                Secure Trading Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Use in-game trading systems:</strong> Always complete trades through Blockman Go's official trading interface.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Double-check items:</strong> Verify the exact items, quantities, and enchantments before confirming any trade.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Trade simultaneously:</strong> Both parties should place their items at the same time to ensure fairness.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Document valuable trades:</strong> Take screenshots of high-value trades for your records.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <AlertCircle className="mr-2 h-5 w-5" />
                Common Scam Warning Signs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Pressure tactics:</strong> Scammers often create false urgency like "limited time offer" or "trade now or never."</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Too good to be true:</strong> Offers that seem incredibly generous are often scams.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Requests for personal info:</strong> Never share passwords, email addresses, or personal information.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>External trading:</strong> Requests to trade outside the game or platform are major red flags.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Advance payment:</strong> Legitimate trades happen simultaneously - never pay or give items first.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Eye className="mr-2 h-5 w-5" />
                What to Do If Something Goes Wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Stop the trade immediately:</strong> If something feels wrong, don't proceed with the trade.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Take screenshots:</strong> Capture evidence of the suspicious behavior or scam attempt.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Report the user:</strong> Use our reporting system to alert moderators about problematic users.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Contact support:</strong> Reach out to our Discord community or moderation team for assistance.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Account Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Keep your account secure:</strong> Use a strong, unique password for your account.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Log out on shared devices:</strong> Always log out when using public or shared computers.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Monitor your account:</strong> Regularly check your trading history and report any suspicious activity.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gaming-green/5 border-gaming-green/20">
            <CardHeader>
              <CardTitle className="text-gaming-green">Remember: Trust Your Instincts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If something feels wrong or too good to be true, it probably is. Our community is built on trust and fair trading. 
                When in doubt, ask questions, take your time, and don't hesitate to reach out to our moderation team.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Need help? Contact <span className="text-gaming-green font-medium">@xSoniteALT</span> on our Discord server.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}