import { Link } from "wouter";
import { ArrowLeft, Shield, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function TradingRules() {
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
          <h1 className="text-3xl font-bold text-gaming-green mb-2">Trading Rules</h1>
          <p className="text-muted-foreground">Follow these guidelines to ensure safe and fair trading for everyone</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <CheckCircle className="mr-2 h-5 w-5" />
                General Trading Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Be honest and accurate:</strong> Always describe your items truthfully and provide accurate information about what you're offering and seeking.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>No scamming:</strong> Any attempt to deceive other players or take items without fair exchange will result in immediate account suspension.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Respect other traders:</strong> Be polite and professional in all communications. No harassment, spam, or inappropriate language.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>One trade per post:</strong> Each trade post should represent one specific trade. Don't bundle multiple unrelated trades in a single post.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Users className="mr-2 h-5 w-5" />
                Communication Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Use the platform:</strong> Keep all trade discussions on our platform for transparency and safety.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Respond promptly:</strong> If you're interested in a trade, respond within 24 hours to maintain active trading.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Be clear about availability:</strong> Update your trade status and remove completed trades promptly.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Shield className="mr-2 h-5 w-5" />
                Security Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Verify before trading:</strong> Always confirm the exact items and quantities before proceeding with any trade.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Use in-game trade systems:</strong> Complete all trades using Blockman Go's official trading mechanisms.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Screenshot important trades:</strong> Keep records of valuable trades for your own protection.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Prohibited Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Real money trading:</strong> Trading in-game items for real money or external currencies is strictly prohibited.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Account sharing:</strong> Do not share or trade account credentials under any circumstances.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Duplicate trading:</strong> Posting the same trade multiple times to spam the feed is not allowed.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Exploiting bugs:</strong> Using platform bugs or glitches for unfair advantage will result in permanent ban.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Enforcement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Violations of these rules will be reviewed by our moderation team. Consequences may include:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Warning for first-time minor violations</li>
                <li>• Temporary suspension for repeated violations</li>
                <li>• Permanent ban for serious violations like scamming</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                All reports are reviewed by <span className="text-gaming-green font-medium">@xSoniteALT</span>, our lead moderator.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}