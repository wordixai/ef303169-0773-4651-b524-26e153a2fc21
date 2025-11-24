import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  badge?: string;
}

export const ProductCard = ({ title, price, image, badge }: ProductCardProps) => {
  return (
    <div className="pop-frame bg-card p-4 hover:cursor-pointer">
      <Card className="border-0 shadow-none overflow-hidden">
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {badge && (
            <div 
              className="absolute top-4 right-4 px-4 py-2 font-black text-sm rotate-12"
              style={{
                background: 'hsl(var(--accent))',
                color: 'hsl(var(--foreground))',
                border: '3px solid hsl(var(--foreground))',
                boxShadow: '4px 4px 0 hsl(var(--foreground))'
              }}
            >
              {badge}
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <h3 className="text-xl font-black uppercase">{title}</h3>
          
          <div className="flex items-center justify-between">
            <span 
              className="text-3xl font-black"
              style={{
                textShadow: '2px 2px 0 hsl(var(--primary))'
              }}
            >
              {price}
            </span>
            
            <Button
              size="sm"
              className="font-black bounce-animation"
              style={{
                background: 'hsl(var(--primary))',
                color: 'white',
                border: '3px solid hsl(var(--foreground))',
                boxShadow: '4px 4px 0 hsl(var(--foreground))',
                borderRadius: '0'
              }}
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};