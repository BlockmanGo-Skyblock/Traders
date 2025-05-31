import { Link } from "wouter";
import { ArrowLeft, Cookie, Settings, Eye, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function CookiePolicy() {
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
          <h1 className="text-3xl font-bold text-gaming-green mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Cookie className="mr-2 h-5 w-5" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better user experience by remembering your preferences 
                and keeping you logged in.
              </p>
              <p className="text-muted-foreground">
                We use cookies responsibly and only collect the information necessary to improve your 
                trading experience on our Blockman Go Skyblock platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Settings className="mr-2 h-5 w-5" />
                How We Use Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                This site uses cookies to:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Store your theme preference (dark/light)</strong> so the site appears the way you prefer</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Keep you logged in</strong> so you don't have to enter your credentials every time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Improve your trading experience</strong> by remembering your preferences and settings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Analyze site usage</strong> to help us improve platform functionality and performance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Eye className="mr-2 h-5 w-5" />
                Types of Cookies We Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gaming-green">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable core functionality 
                    like security, authentication, and basic navigation. These cannot be disabled.
                  </p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-electric-blue">Preference Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies remember your choices and preferences, such as your theme selection (dark/light mode) 
                    and language settings, to provide a personalized experience.
                  </p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gaming-purple">Session Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies keep you logged in during your session and are automatically deleted when you 
                    close your browser. They ensure secure access to your trading account.
                  </p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-muted-foreground">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies help us understand how users interact with our platform, allowing us to improve 
                    the user experience and fix any issues that arise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-gaming-green">
                <Shield className="mr-2 h-5 w-5" />
                Your Cookie Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                You have control over cookies and can manage them in several ways:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings menu</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Selective Blocking:</strong> You can choose to block certain types of cookies while allowing others</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Clear Cookies:</strong> You can delete existing cookies at any time through your browser</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-purple rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Incognito Mode:</strong> Browse in private/incognito mode to prevent cookie storage</p>
                </div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg mt-4">
                <p className="text-amber-600 dark:text-amber-400 text-sm">
                  <strong>Note:</strong> Disabling essential cookies may affect the functionality of our platform, 
                  including your ability to log in and access trading features.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Our platform may include third-party services that set their own cookies:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Analytics Services:</strong> To help us understand how our platform is used</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Security Services:</strong> To protect against fraud and abuse</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Content Delivery:</strong> To ensure fast loading of platform resources</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                These third parties have their own privacy policies and cookie practices, 
                which are independent of our platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Consent and Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                By continuing to use our site, you agree to our cookie usage as described in this policy.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Implied Consent:</strong> Continued use of the platform indicates acceptance of our cookie policy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Policy Updates:</strong> We may update this policy and will notify users of significant changes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Withdrawal:</strong> You can withdraw consent by adjusting your browser settings or contacting us</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-green">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have questions about our cookie policy or want to manage your preferences:
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
                Cookie-related inquiries can be directed to <span className="text-gaming-green font-medium">@xSoniteALT</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}