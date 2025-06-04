
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
    email: '',
    whatsapp: '',
    motivation: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Please confirm your understanding",
        description: "You need to check the agreement box before submitting.",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    
    toast({
      title: "Application Submitted! ✨",
      description: "Thank you! We'll be in touch within 24 hours to confirm your spot.",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
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
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Apply Now
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-linguaglee-pink/5 to-linguaglee-lavender/5 p-8 rounded-2xl shadow-lg">
            <div>
              <Label htmlFor="fullName" className="font-montserrat font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-2 border-linguaglee-pink/30 focus:border-linguaglee-pink"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="font-montserrat font-medium text-gray-700">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 border-linguaglee-pink/30 focus:border-linguaglee-pink"
              />
            </div>
            
            <div>
              <Label htmlFor="whatsapp" className="font-montserrat font-medium text-gray-700">
                WhatsApp Number *
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="mt-2 border-linguaglee-pink/30 focus:border-linguaglee-pink"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div>
              <Label htmlFor="motivation" className="font-montserrat font-medium text-gray-700">
                Why are you interested in this course? *
              </Label>
              <Textarea
                id="motivation"
                name="motivation"
                required
                value={formData.motivation}
                onChange={handleInputChange}
                className="mt-2 border-linguaglee-pink/30 focus:border-linguaglee-pink min-h-[100px]"
                placeholder="Share what draws you to this experience..."
              />
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreement"
                checked={formData.agreement}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, agreement: checked as boolean }))
                }
                className="mt-1 border-linguaglee-pink/50 data-[state=checked]:bg-linguaglee-pink"
              />
              <Label htmlFor="agreement" className="font-montserrat text-sm text-gray-700 leading-relaxed">
                I understand this is a $400 experience and spots are limited. I'm ready to commit to the full 8-session journey.
              </Label>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-linguaglee-pink hover:bg-linguaglee-pink/90 text-white font-montserrat font-semibold py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
