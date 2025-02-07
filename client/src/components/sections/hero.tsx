import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Harnessing
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {" "}Cryptographic Power
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Empowering organizations with tamper-proof blockchain solutions for unbreakable security and trust.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Explore Solutions</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              alt="Cryptographic Security"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}