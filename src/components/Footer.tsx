export const Footer = () => {
  return (
    <footer className="border-t-4 border-foreground bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-4 comic-text">POP!</h3>
            <p className="text-sm">
              最酷的波普艺术潮流商品
            </p>
          </div>
          
          <div>
            <h4 className="font-black mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">品牌故事</a></li>
              <li><a href="#" className="hover:text-primary">联系我们</a></li>
              <li><a href="#" className="hover:text-primary">招聘信息</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-4">客户服务</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">配送信息</a></li>
              <li><a href="#" className="hover:text-primary">退换货政策</a></li>
              <li><a href="#" className="hover:text-primary">常见问题</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-4">关注我们</h4>
            <div className="flex gap-4">
              {['微博', '微信', 'ins'].map((social) => (
                <div
                  key={social}
                  className="w-12 h-12 flex items-center justify-center font-black text-xs"
                  style={{
                    background: 'hsl(var(--accent))',
                    border: '3px solid hsl(var(--foreground))',
                    boxShadow: '3px 3px 0 hsl(var(--foreground))'
                  }}
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-foreground text-center text-sm">
          <p className="font-bold">© 2024 POP SHOP. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};