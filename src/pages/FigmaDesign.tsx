
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FigmaDesign = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white">
      <StarBackground />
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8 space-glow">3D Interactive Planet Animation</h1>
        <p className="text-lg text-center text-gray-300 mb-10 max-w-3xl mx-auto">
          Explore our interactive planetary design system created in Figma. This prototype showcases advanced 3D visualization techniques and interactive elements.
        </p>
        
        <div className="cosmic-card p-6 mb-10">
          <div className="aspect-video w-full mx-auto overflow-hidden rounded-lg">
            <iframe 
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
              width="100%" 
              height="100%" 
              src="https://embed.figma.com/design/VyrjVSTJEdJZdbUcb1XvoE/3D-Interactive-Planet-Animation?node-id=0-1&embed-host=share" 
              allowFullScreen
              title="Figma Planet Animation"
            ></iframe>
          </div>
        </div>
        
        {/* Interactive Prototype */}
        <div className="cosmic-card p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Interactive Planet Prototype</h2>
          <div className="aspect-video w-full mx-auto overflow-hidden rounded-lg">
            <iframe 
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
              width="100%" 
              height="100%" 
              src="https://embed.figma.com/proto/VyrjVSTJEdJZdbUcb1XvoE/3D-Interactive-Planet-Animation?node-id=1-18&p=f&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A9&embed-host=share" 
              allowFullScreen
              title="Interactive Planet Prototype"
            ></iframe>
          </div>
          <p className="text-center text-gray-300 mt-4">
            Click and interact with the prototype above to explore all features and transitions.
          </p>
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-space-accent hover:bg-space-accent/80 text-white px-8 py-6 text-lg">
            <a 
              href="https://www.figma.com/proto/VyrjVSTJEdJZdbUcb1XvoE/3D-Interactive-Planet-Animation?node-id=1-473&p=f&t=j8nP2057bHeAdqBI-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open Full Figma Prototype
            </a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FigmaDesign;
