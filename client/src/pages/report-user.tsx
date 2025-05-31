import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, Shield, MessageCircle, Camera, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Footer from "@/components/footer";

export default function ReportUser() {
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
          <h1 className="text-3xl font-bold text-gaming-green mb-2">Report User</h1>
          <p className="text-muted-foreground">Help keep our community safe by reporting problematic behavior</p>
        </div>

        <Alert className="mb-6 border-gaming-green/20 bg-gaming-green/5">
          <Shield className="h-4 w-4 text-gaming-green" />
          <AlertDescription className="text-gaming-green">
            All reports are reviewed by our moderation team. False reports may result in penalties for the reporter.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <AlertTriangle className="mr-2 h-5 w-5" />
                When to Report a User
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Report users for any of the following violations:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Scamming:</strong> Attempting to deceive other players or steal items</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Harassment:</strong> Bullying, threatening, or inappropriate behavior toward other users</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Spam:</strong> Posting duplicate trades or flooding the platform with irrelevant content</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Inappropriate content:</strong> Offensive language, inappropriate usernames, or harmful content</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Rule violations:</strong> Any behavior that violates our trading rules or community guidelines</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <FileText className="mr-2 h-5 w-5" />
                How to Report
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="bg-gaming-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                    In-App Reporting
                  </h3>
                  <p className="text-muted-foreground ml-8">
                    Use the report button on user profiles or trade posts to quickly report violations. 
                    This creates an automatic record with relevant context.
                  </p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="bg-gaming-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                    Discord Support
                  </h3>
                  <p className="text-muted-foreground ml-8">
                    Contact our moderation team directly through Discord for urgent issues or detailed reports.
                  </p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="bg-gaming-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                    Provide Evidence
                  </h3>
                  <p className="text-muted-foreground ml-8">
                    Include screenshots, chat logs, or other evidence when possible to help our team investigate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Camera className="mr-2 h-5 w-5" />
                Evidence Collection Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Screenshots:</strong> Capture the problematic behavior, including usernames and timestamps</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Chat logs:</strong> Save conversations that show scam attempts or harassment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Trade details:</strong> Document any failed or suspicious trade attempts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Context:</strong> Explain what happened and how it violated our community rules</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Moderation Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gaming-green/5 border border-gaming-green/20 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gaming-green/20 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-gaming-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gaming-green">@xSoniteALT</h3>
                    <p className="text-sm text-muted-foreground">Lead Moderator & Platform Administrator</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our lead moderator has exclusive access to review and act on user reports. 
                  All reports are handled professionally and confidentially.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">What Happens After Reporting?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Investigation:</strong> Our moderation team reviews all evidence and investigates the report</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Action taken:</strong> Appropriate penalties are applied based on the severity of the violation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Follow-up:</strong> You may receive updates on serious cases where action was taken</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Privacy:</strong> All reports are handled confidentially to protect both parties</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-electric-blue/5 border-electric-blue/20">
            <CardHeader>
              <CardTitle className="text-electric-blue">Need Immediate Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                For urgent issues or if you need immediate assistance, contact our moderation team directly:
              </p>
              <a 
                href="https://discord.gg/YZnrRNhrsa" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-electric-blue hover:bg-electric-blue/90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact @xSoniteALT on Discord
                </Button>
              </a>
              <p className="text-sm text-muted-foreground text-center">
                Response time: Usually within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}