import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, FileCheck, PlusCircle } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    title: "Trusted Timestamping",
    description: "Cryptographically secure timestamps for immutable proof of existence",
    icon: Clock,
    link: "/products/trusted-timestamping"
  },
  {
    title: "Verifiable Key Registry",
    description: "Secure identity verification system for blockchain and off-chain applications",
    icon: FileCheck,
    link: "/products/verifiable-registry"
  },
  {
    title: "Request a Solution",
    description: "Need a custom cryptographic solution? Let's discuss your requirements",
    icon: PlusCircle
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering organizations with cryptographically secure, tamper-proof blockchain solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {product.title === "Request a Solution" ? (
                      <a href="#contact" className="text-primary hover:underline">Contact us →</a>
                    ) : (
                      <Link href={product.link}>
                        <span className="text-primary hover:underline cursor-pointer">Learn more →</span>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}