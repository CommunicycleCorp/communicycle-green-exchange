
export function Hero() {

  return (
    <section className="relative min-h-[90vh] sm:min-h-[55vh] lg:min-h-[65vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/6a67484f-4bd4-4a4f-bb49-40fde7f0fc36.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
}
