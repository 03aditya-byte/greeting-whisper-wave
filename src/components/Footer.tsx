import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">TechZephyr</h3>
              <p className="text-sm text-muted-foreground">
                Building exceptional digital experiences with cutting-edge technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-bold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-bold">Connect</h4>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="ripple-effect">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="ripple-effect">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="ripple-effect">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="ripple-effect">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 TechZephyr. Built with ❤️ using Lovable AI. All rights reserved.</p>
            <p className="mt-2 text-xs">AI Tools Used: Lovable AI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
