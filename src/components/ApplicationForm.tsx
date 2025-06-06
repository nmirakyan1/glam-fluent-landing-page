
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Please confirm your commitment",
        description: "Check the box to confirm you're ready to invest in yourself.",
        variant: "destructive"
      });
      return;
    }

    console.log('Application submitted:', formData);
    
    toast({
      title: "Application Submitted!",
      description: "We'll be in touch within 24 hours to confirm your spot. Get ready to shine!",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      agreement: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="application-form" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Join One Hour of Girl Power English Course
          </h2>
          
          <p className="font-playfair text-xl text-pink-200 text-center mb-12">
            Ready to speak English with confidence, charisma, and connection?<br />
            Apply below to claim your seat.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8 bg-black/60 backdrop-blur-sm border-2 border-pink-400/30 p-10 shadow-2xl">
            <div>
              <Label htmlFor="fullName" className="font-playfair font-semibold text-white text-lg mb-3 block">
                Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-black/40 border-2 border-pink-400/50 focus:border-pink-400 text-white py-4 text-lg backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="font-playfair font-semibold text-white text-lg mb-3 block">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-black/40 border-2 border-purple-400/50 focus:border-purple-400 text-white py-4 text-lg backdrop-blur-sm"
                placeholder="Your email"
              />
            </div>
            
            <div className="flex items-start space-x-4 bg-black/40 backdrop-blur-sm border border-purple-400/30 p-6">
              <Checkbox
                id="agreement"
                checked={formData.agreement}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, agreement: checked as boolean }))
                }
                className="mt-1 border-2 border-pink-400/70 data-[state=checked]:bg-pink-600 w-5 h-5"
              />
              <Label htmlFor="agreement" className="font-playfair text-lg text-white leading-relaxed">
                I'm ready to invest in myself, in English, and in the moment.
              </Label>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white font-playfair font-bold py-6 text-2xl rounded-none shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-105 border-2 border-pink-400/30"
            >
              Yes, I'm Ready to Shine
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
