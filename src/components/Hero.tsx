export function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[55vh] lg:min-h-[65vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/8130a10c-e650-4270-aca5-693745127214.png')`,
        }}
      >
      </div>
    </section>
  );
}