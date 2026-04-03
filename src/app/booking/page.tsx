import FloatingBubbles from "@/components/FloatingBubbles";

export default function BookingPage() {
  return (
       <div className="relative">
         <div className="fixed inset-0 pointer-events-none -z-10">
           <FloatingBubbles count={20} />
         </div>
        </div>
  );
}