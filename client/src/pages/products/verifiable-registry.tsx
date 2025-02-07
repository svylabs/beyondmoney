import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";

export default function VerifiableRegistry() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="container px-4 mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Verifiable Key Registry</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>What is a Verifiable Key Registry?</h2>
            <p>
              A Verifiable Key Registry is a blockchain-based system that provides secure identity verification 
              for both on-chain smart contracts and off-chain applications. It maintains a cryptographically 
              secure registry of public keys and their associated identities, enabling reliable authentication 
              and authorization across different platforms.
            </p>

            <h2>Primary Use Case</h2>
            <div className="not-prose mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Identity Verification</h3>
                  <p className="text-muted-foreground mb-4">
                    Enable secure identity verification for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Smart contract interactions on blockchain platforms</li>
                    <li>Off-chain application authentication</li>
                    <li>Cross-platform identity verification</li>
                    <li>Decentralized identity management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Key Features</h2>
            <ul>
              <li>Cryptographic key pair management</li>
              <li>On-chain identity verification</li>
              <li>Off-chain authentication support</li>
              <li>Immutable audit trail of key operations</li>
              <li>Integration with major blockchain platforms</li>
            </ul>

            <h2>Getting Started</h2>
            <p>
              Implementing the Verifiable Key Registry in your organization involves these steps:
            </p>
            <div className="not-prose">
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">1. Key Generation</h3>
                    <p className="text-muted-foreground">Set up secure cryptographic key pairs for your organization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">2. Registry Integration</h3>
                    <p className="text-muted-foreground">Connect your systems with our blockchain-based registry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">3. Implementation</h3>
                    <p className="text-muted-foreground">Deploy identity verification in your applications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 not-prose">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}