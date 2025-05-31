import { Link } from "wouter";
import { ArrowLeft, Lock, Database, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-gaming-green mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Lock className="mr-2 h-5 w-5" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and protect your data when you use our 
                Blockman Go Skyblock trading platform.
              </p>
              <p className="text-muted-foreground">
                We collect minimal user data and never sell your information to third parties. 
                Your privacy and security are our top priorities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Database className="mr-2 h-5 w-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                We collect minimal user data for account and trading purposes:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Username:</strong> Your chosen display name for the platform</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Email address:</strong> Used for account verification and important notifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Region:</strong> Your trading region for location-based trade matching</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Trade information:</strong> Details of trades you post and participate in</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Usage data:</strong> Basic analytics to improve platform functionality</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Eye className="mr-2 h-5 w-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Account Management:</strong> To create and maintain your user account</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Trading Services:</strong> To facilitate trades and match you with other traders</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Communication:</strong> To send important platform updates and trade notifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Security:</strong> To protect against fraud, abuse, and unauthorized access</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Platform Improvement:</strong> To analyze usage patterns and enhance user experience</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Lock className="mr-2 h-5 w-5" />
                Data Security & Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Secure Storage:</strong> Your data is stored securely in PostgreSQL databases with encryption</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Access Control:</strong> Only authorized personnel have access to user data</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>No Data Sales:</strong> We never sell, rent, or share your personal information with third parties</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Regular Backups:</strong> Data is backed up regularly to prevent loss</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Security Monitoring:</strong> Continuous monitoring for suspicious activity and security threats</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Trash2 className="mr-2 h-5 w-5" />
                Your Rights & Data Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                You have full control over your personal data:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Access:</strong> You can request a copy of all data we have about you</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Correction:</strong> You can update or correct your personal information at any time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Deletion:</strong> You can request deletion of your account and all associated data at any time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Portability:</strong> You can request your data in a machine-readable format</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Opt-out:</strong> You can unsubscribe from non-essential communications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Data Sharing & Third Parties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share limited data only in these circumstances:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Legal Requirements:</strong> When required by law enforcement or legal proceedings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Safety:</strong> To protect users from fraud, abuse, or illegal activities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Service Providers:</strong> With trusted partners who help operate our platform (under strict agreements)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Business Transfer:</strong> In the event of a merger or sale (users will be notified)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                When we make significant changes:
              </p>
              <div className="space-y-2">
                <p className="text-sm">• We will notify users via email or platform announcement</p>
                <p className="text-sm">• The updated policy will be posted with a new "Last updated" date</p>
                <p className="text-sm">• Continued use of the platform constitutes acceptance of changes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or want to exercise your data rights:
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
              <p className="text-sm text-muted-foreground mt-4">
                Data protection inquiries are handled by <span className="text-gaming-green font-medium">@xSoniteALT</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}