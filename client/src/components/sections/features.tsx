import { motion } from "framer-motion";
import { Shield, Lock, FileKey, Blocks } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Advanced cryptographic algorithms ensuring unbreakable security"
  },
  {
    icon: Lock,
    title: "Tamper-Proof Records",
    description: "Cryptographically sealed records that cannot be altered"
  },
  {
    icon: Blocks,
    title: "Network Integrations",
    description: "Seamless integration with Bitcoin and Ethereum networks"
  },
  {
    icon: FileKey,
    title: "Developer SDKs",
    description: "Easy-to-use SDKs for quick integration into your applications"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-accent/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Security First</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade cryptographic solutions for uncompromising security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-card"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}