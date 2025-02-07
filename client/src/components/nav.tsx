import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav 
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/">
          <div className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="BeyondMoney Logo" 
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              beyond<span className="text-foreground">money</span>
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </a>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <Button>Get Started</Button>
        </div>

        <Button variant="ghost" className="md:hidden">
          Menu
        </Button>
      </div>
    </motion.nav>
  );
}