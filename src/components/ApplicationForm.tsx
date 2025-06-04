
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    motivation: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Please confirm you're ready! ✨",
        description: "Check the box to confirm you're ready for this fabulous journey.",
        variant: "destructive"
      });
      return;
    }

    console.log('Application submitted:', formData);
    
    toast({
      title: "Application Submitted! 🎉",
      description: "Gorgeous! We'll be in touch within 24 hours to confirm your spot. Get ready to glow up! ✨",
    });

    // Reset form
    setFormData({
      fullName: '',
      contact: '',
      motivation: '',
      agreement: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="application-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Ready to glow up your English? ✨
          </h2>
          
          <p className="font-montserrat text-xl text-gray-600 text-center mb-12">
            Let's make this happen, gorgeous!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-linguaglee-pink/10 to-linguaglee-lavender/10 p-10 rounded-3xl shadow-2xl border-4 border-white/50">
            <div>
              <Label htmlFor="fullName" className="font-montserrat font-semibold text-gray-800 text-lg">
                Name ✨
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-3 border-2 border-linguaglee-pink/50 focus:border-linguaglee-pink rounded-xl py-3 text-lg"
                placeholder="Your gorgeous name"
              />
            </div>
            
            <div>
              <Label htmlFor="contact" className="font-montserrat font-semibold text-gray-800 text-lg">
                WhatsApp or Email 💌
              </Label>
              <Input
                id="contact"
                name="contact"
                type="text"
                required
                value={formData.contact}
                onChange={handleInputChange}
                className="mt-3 border-2 border-linguaglee-pink/50 focus:border-linguaglee-pink rounded-xl py-3 text-lg"
                placeholder="How can we reach you?"
              />
            </div>
            
            <div>
              <Label htmlFor="motivation" className="font-montserrat font-semibold text-gray-800 text-lg">
                Why do you want to join? 💫
              </Label>
              <Textarea
                id="motivation"
                name="motivation"
                required
                value={formData.motivation}
                onChange={handleInputChange}
                className="mt-3 border-2 border-linguaglee-pink/50 focus:border-linguaglee-pink min-h-[120px] rounded-xl text-lg"
                placeholder="Tell us what's calling you to this experience..."
              />
            </div>
            
            <div className="flex items-start space-x-4 bg-white/70 p-6 rounded-2xl">
              <Checkbox
                id="agreement"
                checked={formData.agreement}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, agreement: checked as boolean }))
                }
                className="mt-1 border-2 border-linguaglee-pink/70 data-[state=checked]:bg-linguaglee-pink w-5 h-5"
              />
              <Label htmlFor="agreement" className="font-montserrat text-lg text-gray-700 leading-relaxed">
                I'm ready for the $400 journey 🛍️ <br />
                <span className="text-sm italic text-gray-600">
                  (And I understand spots are limited because this is exclusive!)
                </span>
              </Label>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-linguaglee-pink to-linguaglee-pink/80 hover:from-linguaglee-pink/90 hover:to-linguaglee-pink/70 text-white font-montserrat font-bold py-6 text-2xl rounded-full shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              Apply Now ✨
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
