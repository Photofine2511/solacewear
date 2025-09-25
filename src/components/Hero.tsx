import heroModel from "@/assets/hero-model.png";

export const Hero = () => {
  const slideshowTexts = [
    "STYLE MEETS COMFORT",
  ];
  return (
    <section className="h-screen flex flex-row relative">
      {/* Left Section */}
      <div className="w-1/2 h-full" style={{ backgroundColor: '#f7e5b0' }}>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 h-full" style={{ backgroundColor: '#d9e2f3' }}>
      </div>
      
      {/* Heading - Spanning both sections */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 sm:pt-16 md:pt-24 z-10 overflow-hidden">
        <div className="w-full">
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl text-black text-center font-manrope whitespace-nowrap animate-slide px-4">
            {slideshowTexts[0]} * {slideshowTexts[0]} * {slideshowTexts[0]} * {slideshowTexts[0]} * {slideshowTexts[0]}
          </h1>
        </div>
      </div>
      
      {/* Model Image - Centered */}
      <div className="absolute inset-0 flex items-end justify-center z-20 px-4">
        <img
          src="https://i.ibb.co/x8FygRKJ/model.webp"
          alt="Model"
          className="h-full w-auto object-cover object-bottom"
        />
      </div>
    </section>
  );
};