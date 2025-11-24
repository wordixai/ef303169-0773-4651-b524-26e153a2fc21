import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-foreground bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-black comic-text">
              POP!
            </h1>
            
            <nav className="hidden md:flex gap-6">
              {['新品', '服装', '配饰', '特价'].map((item) => (
                <button 
                  key={item}
                  className="font-black text-lg hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="hidden sm:flex"
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <Button
              size="icon"
              style={{
                background: 'hsl(var(--primary))',
                color: 'white',
                border: '3px solid hsl(var(--foreground))',
                boxShadow: '4px 4px 0 hsl(var(--foreground))',
                borderRadius: '0'
              }}
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};