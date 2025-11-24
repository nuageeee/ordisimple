import FloatingBubbles from "@/components/FloatingBubbles";

export default function Home() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content text-center">
        <FloatingBubbles count={10}/>
          <div className="max-w-md">
            
          </div>
      </div>
    </div>
  );
}
