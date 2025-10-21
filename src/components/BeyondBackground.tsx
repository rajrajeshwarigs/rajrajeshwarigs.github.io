import { Video, Coffee, Dumbbell, UtensilsCrossed, Plane, Heart } from "lucide-react";

const BeyondBackground = () => {
  const iconPositions = [
    { Icon: Video, x: '10%', y: '15%', color: 'text-purple-400', size: 40, delay: 0 },
    { Icon: UtensilsCrossed, x: '85%', y: '20%', color: 'text-pink-400', size: 35, delay: 0.5 },
    { Icon: Dumbbell, x: '15%', y: '75%', color: 'text-blue-400', size: 45, delay: 1 },
    { Icon: Plane, x: '80%', y: '70%', color: 'text-cyan-400', size: 38, delay: 1.5 },
    { Icon: Coffee, x: '50%', y: '10%', color: 'text-amber-400', size: 32, delay: 2 },
    { Icon: Heart, x: '90%', y: '50%', color: 'text-rose-400', size: 36, delay: 2.5 },
    { Icon: Video, x: '20%', y: '45%', color: 'text-purple-300', size: 28, delay: 3 },
    { Icon: Dumbbell, x: '70%', y: '35%', color: 'text-blue-300', size: 30, delay: 3.5 },
    { Icon: Plane, x: '40%', y: '80%', color: 'text-cyan-300', size: 42, delay: 4 },
    { Icon: UtensilsCrossed, x: '60%', y: '60%', color: 'text-pink-300', size: 34, delay: 4.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {iconPositions.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.color} opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-500`}
          style={{
            left: item.x,
            top: item.y,
            animation: `float 8s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          <item.Icon size={item.size} strokeWidth={1.5} />
        </div>
      ))}
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -15px) rotate(5deg);
          }
          50% {
            transform: translate(-5px, -25px) rotate(-3deg);
          }
          75% {
            transform: translate(-15px, -10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BeyondBackground;
