import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Cpu, HardDrive, Zap, DollarSign } from "lucide-react";
import { useState } from "react";

const ConfiguratorPreview = () => {
  const [cpu, setCpu] = useState([4]);
  const [ram, setRam] = useState([8]);
  const [storage, setStorage] = useState([100]);

  const calculatePrice = () => {
    return (cpu[0] * 5 + ram[0] * 2 + storage[0] * 0.1).toFixed(2);
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/3" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Configure Your <span className="gradient-text">Perfect Server</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Customize resources to match your exact needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            {/* Gradient header */}
            <div className="h-2 bg-gradient-primary" />
            
            <CardHeader>
              <CardTitle className="text-2xl">VPS Configurator</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorPreview;