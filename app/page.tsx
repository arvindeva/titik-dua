export default function Home() {
  return (
    <div className="relative  h-screen max-h-[769px] mb-12 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://titikdua.id/wp-content/uploads/2023/12/TD-Homepage-Video_3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
