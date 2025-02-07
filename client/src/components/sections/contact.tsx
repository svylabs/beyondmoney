import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:info@beyondmoney.xyz?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input 
                  {...form.register("name")}
                  placeholder="Your name" 
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  {...form.register("email")}
                  type="email" 
                  placeholder="you@company.com" 
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea 
                {...form.register("message")}
                placeholder="Your message" 
                className="min-h-[120px]" 
              />
              {form.formState.errors.message && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}