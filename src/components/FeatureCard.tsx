import type { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="group bg-dark-900/50 hover:bg-dark-800/50 border border-white/5 hover:border-electric-500/25 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]">
      <div className="w-14 h-14 bg-gradient-to-br from-electric-500/20 to-electric-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-dark-400">{children}</p>
    </div>
  );
}

export default FeatureCard;
