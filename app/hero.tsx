function CheckAvailability() {
  return (
    <section className="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-td-beige h-16 w-96">
      <div className="flex flex-row gap-x-2">
        <p>book your stay</p>
        <div>
          <label>Check in / checkout</label>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative  h-screen max-h-[769px] mb-12 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/td-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <CheckAvailability />
    </div>
  );
}
