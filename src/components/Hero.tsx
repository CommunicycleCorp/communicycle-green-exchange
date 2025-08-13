
export function Hero() {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/58b3b588-6189-4318-996c-0d0e29ca20bc.png')`,
          backgroundSize: '1000px 600px',
          backgroundPosition: 'center center',
        }}
      ></div>
      {/* Empty content area with preserved sizing */}
      <div className="container mx-auto px-4 md:px-5 py-2 md:py-7 lg:py-10 relative z-10">
      </div>
    </section>
  );
}
