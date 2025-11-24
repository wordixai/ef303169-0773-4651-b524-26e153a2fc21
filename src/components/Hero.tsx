import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent pop-dots">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <Sparkles className="w-16 h-16 text-foreground mx-auto mb-4 glow-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black comic-text">
            POP SHOP!
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto" style={{
            textShadow: '2px 2px 0 white, 4px 4px 0 black'
          }}>
            超炫潮流商品 · 艺术与时尚的碰撞
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              className="pop-button text-xl px-8 py-6 font-black transform hover:scale-110 transition-transform"
              style={{
                background: 'hsl(var(--secondary))',
                color: 'hsl(var(--foreground))',
                border: '4px solid hsl(var(--foreground))',
                boxShadow: '6px 6px 0 hsl(var(--foreground))',
                borderRadius: '0'
              }}
            >
              <Zap className="mr-2" />
              立即购物
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-xl px-8 py-6 font-black transform hover:scale-110 transition-transform"
              style={{
                background: 'transparent',
                color: 'hsl(var(--foreground))',
                border: '4px solid hsl(var(--foreground))',
                boxShadow: '6px 6px 0 hsl(var(--accent))',
                borderRadius: '0'
              }}
            >
              <Star className="mr-2" />
              新品上架
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};