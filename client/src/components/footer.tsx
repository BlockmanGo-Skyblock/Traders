import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Platform Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gaming-green">BGST</h3>
            <p className="text-sm text-muted-foreground mb-4">
              BlockmanGo Skyblock Traders - The ultimate trading platform for Blockman Go Skyblock items. Trade safely with verified players worldwide.
            </p>
            <a 
              href="https://discord.gg/YZnrRNhrsa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-electric-blue hover:text-electric-blue/80 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>Join Discord Server</span>
            </a>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trading-rules" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trading Rules
                </Link>
              </li>
              <li>
                <Link href="/safety-guidelines" className="text-muted-foreground hover:text-foreground transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/report-user" className="text-muted-foreground hover:text-foreground transition-colors">
                  Report User
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.gg/YZnrRNhrsa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trader Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.gg/YZnrRNhrsa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Blockman Go Trading Platform. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Moderated by <span className="text-gaming-green font-medium">@xSoniteALT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}