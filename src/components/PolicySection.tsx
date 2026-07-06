import type { ReactNode } from 'react';

type PolicySectionProps = {
  title: string;
  children: ReactNode;
};

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-3">{title}</h2>
      {children}
    </section>
  );
}

export default PolicySection;
