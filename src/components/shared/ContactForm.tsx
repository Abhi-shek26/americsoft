import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import BackgroundImage from "./BackgroundImage";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (replace with your service ID)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: import.meta.env.VITE_CONTACT_EMAIL || "contact@americsoft.com",
          // Ensure replies go back to the sender
          reply_to: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          organization: formData.organization,
          message: formData.message,
        }
      );

      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", organization: "", message: "" });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative rounded-3xl overflow-hidden border border-cyan/20 shadow-lg">
        <BackgroundImage
          imageUrl="/generated_images/contact_partnership_section_background.png"
          overlay="dark"
          overlayOpacity={50}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 bg-card/70 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-12 text-center m-6"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-cyan/40 to-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan/30">
            <CheckCircle className="h-8 w-8 text-cyan-glow" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
          <p className="text-white/80">
            Your message has been received. An architect will reach out within 24 hours.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl overflow-hidden border-2 border-cyan/30 shadow-2xl">
      <BackgroundImage
        imageUrl="/generated_images/contact_page_hero_background.png"
        overlay="dark"
        overlayOpacity={60}
      />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="relative z-10 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-cyan/20 p-8 sm:p-10 lg:p-12 space-y-6 sm:space-y-8 m-6"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get in Touch</h3>
          <p className="text-cyan-glow text-sm">Let's explore how we can help secure your infrastructure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2.5">
            <Label htmlFor="name" className="text-white font-semibold text-sm">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="h-11 bg-white/5 border border-white/15 text-white placeholder:text-white/40 rounded-lg focus:border-cyan/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
            />
          </div>
          <div className="space-y-2.5">
            <Label htmlFor="email" className="text-white font-semibold text-sm">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@organization.gov"
              className="h-11 bg-white/5 border border-white/15 text-white placeholder:text-white/40 rounded-lg focus:border-cyan/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="organization" className="text-white font-semibold text-sm">Organization / Agency</Label>
          <Input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Department of..."
            className="h-11 bg-white/5 border border-white/15 text-white placeholder:text-white/40 rounded-lg focus:border-cyan/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
          />
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="message" className="text-white font-semibold text-sm">Project Details</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your project, requirements, or timeline..."
            className="min-h-[140px] resize-none bg-white/5 border border-white/15 text-white placeholder:text-white/40 rounded-lg focus:border-cyan/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full h-12 bg-gradient-to-r from-cyan via-cyan-light to-cyan hover:from-cyan-light hover:via-cyan hover:to-cyan-light text-slate-900 font-bold text-base shadow-lg shadow-cyan/20 hover:shadow-xl hover:shadow-cyan/30 rounded-lg transition-all duration-300 disabled:opacity-70"
        >
          {isLoading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        <p className="text-xs text-white/50 text-center">
          We'll get back to you within 24 hours. Your information is secure and confidential.
        </p>
      </motion.form>
    </div>
  );
};

export default ContactForm;
