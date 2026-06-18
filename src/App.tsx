import { useState } from 'react';
import { Header } from './components/Header';
import type { ViewType } from './types';
import { NavigationDock } from './components/NavigationDock';
import { CartProvider, useCart } from './context/CartContext';
import { Showcase } from './components/Showcase';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { SystemDashboard } from './components/SystemDashboard';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

// Cast to any to bypass strict type declarations of the third-party WebGL component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShaderGradientAny = ShaderGradient as any;

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('showcase');
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const { cartCount } = useCart();

  const handleSelectProduct = (productId: number) => {
    setActiveProductId(productId);
    setCurrentView('detail');
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center text-slate-800 transition-colors duration-300 relative">
      
      {/* 3D WebGL Shader Gradient Background */}
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none bg-black">
        <ShaderGradientCanvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ShaderGradientAny
            animate="on"
            axesHelper="on"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={2.4}
            cPolarAngle={95}
            cameraZoom={1}
            color1="#ff6a1a"
            color2="#c73c00"
            color3="#FD4912"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={-2.1}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={225}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.8}
            uFrequency={5.5}
            uSpeed={0.2}
            uStrength={3}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
      
      {/* Skeuomorphic Header Section */}
      <Header />

      {/* Main Console Viewport */}
      <main className="w-full max-w-5xl flex-grow flex flex-col justify-start items-center my-6">
        
        {currentView === 'showcase' && (
          <Showcase onSelectProduct={handleSelectProduct} />
        )}

        {currentView === 'detail' && activeProductId !== null && (
          <ProductDetail 
            productId={activeProductId} 
            onBack={() => {
              setActiveProductId(null);
              setCurrentView('showcase');
            }} 
          />
        )}

        {currentView === 'cart' && (
          <Cart onReturnToShop={() => setCurrentView('showcase')} />
        )}

        {currentView === 'system' && (
          <SystemDashboard />
        )}

      </main>

      {/* Floating Skeuomorphic Navigation Dock */}
      <NavigationDock 
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartCount}
      />

      <footer className="mt-8 mb-24 font-mono text-[9px] text-slate-400 tracking-[0.2em] uppercase">
        MONOLITH // PREMIUM TACTILE HARDWARE
      </footer>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
