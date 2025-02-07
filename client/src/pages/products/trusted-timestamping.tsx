import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";

export default function TrustedTimestamping() {
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
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Trusted Timestamping</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>What is Trusted Timestamping?</h2>
            <p>
              Trusted Timestamping is a cryptographic technique that proves a digital document existed at a specific point in time. 
              It creates an immutable record of when a document was created, modified, or signed, providing strong evidence for 
              legal and business purposes.
            </p>

            <h2>Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    Protect your intellectual property by proving when creative works, patents, or designs were first created.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Legal Documentation</h3>
                  <p className="text-muted-foreground">
                    Establish when legal documents were signed, contracts were executed, or important decisions were made.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>How It Works</h2>
            <ol>
              <li>Upload your document to our secure platform</li>
              <li>Our system generates a unique cryptographic hash of your document</li>
              <li>The hash is recorded on the blockchain with a timestamp</li>
              <li>Receive a certificate of timestamp verification</li>
            </ol>

            <h2>Getting Started</h2>
            <p>
              Implementing Trusted Timestamping in your organization is straightforward:
            </p>
            <div className="not-prose">
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">1. Contact Our Team</h3>
                    <p className="text-muted-foreground">Schedule a consultation to discuss your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">2. Integration Planning</h3>
                    <p className="text-muted-foreground">Our experts will help plan the integration into your existing workflows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">3. Implementation</h3>
                    <p className="text-muted-foreground">Quick deployment with our easy-to-use API and documentation</p>
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