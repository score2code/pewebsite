"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbProps = {
  className?: string;
};

const LABEL_MAP: Record<string, string> = {
  "futebol": "Futebol",
  "futebol-americano": "Futebol Americano",
  "campeonatos": "Campeonatos",
  "guias": "Guias",
  "conteudos": "Conteúdos",
  "entretenimento": "Entretenimento",
  "estatisticas": "Estatísticas",
  "odds": "Odds",
  "cursos": "Cursos",
};

function formatSegmentLabel(seg: string) {
  // Date: YYYY-MM-DD -> DD/MM/YYYY
  if (/^\d{4}-\d{2}-\d{2}$/.test(seg)) {
    const [y, m, d] = seg.split("-");
    return `${d}/${m}/${y}`;
  }
  if (LABEL_MAP[seg]) return LABEL_MAP[seg];
  // Fallback: slug -> Capitalize words
  return seg
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Breadcrumb({ className = "" }: BreadcrumbProps) {
  const pathname = usePathname();
  const segments = (pathname || "/")
    .split("/")
    .filter(Boolean);

  if (segments.length === 0) return null; // Don't render on homepage

  // Build hrefs progressively
  const items = segments.map((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    return { href, label: formatSegmentLabel(seg), isLast: idx === segments.length - 1 };
  });

  return (
    <nav aria-label="Breadcrumb" className={`w-full overflow-x-auto ${className}`}>
      <div className="flex items-center gap-2 sm:text-sm text-xs whitespace-nowrap px-1">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-dark-900/70 dark:text-light-100/70 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Início</span>
        </Link>
        {items.map((item, i) => (
          <React.Fragment key={item.href}>
            <ChevronRight className="w-4 h-4 text-dark-900/30 dark:text-light-100/30" />
            {item.isLast ? (
              <span className="font-semibold text-dark-900 dark:text-light-100">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-dark-900/70 dark:text-light-100/70 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
