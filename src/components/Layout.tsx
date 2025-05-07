import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col ">
      {/* Navbar fixa no topo */}

      {/* Conteúdo principal com scroll se necessário */}
      <main className="flex-1  overflow-auto">
        {children}
      </main>
    </div>
  );
}
