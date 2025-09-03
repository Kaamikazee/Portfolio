"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [active, setActive] = useState("hero");
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    // calculate nav height so we can offset the root (so the fixed header doesn't block visibility)
    const headerHeight = navRef.current?.getBoundingClientRect().height ?? 64;
    // rootMargin: push the root's top boundary down by headerHeight
    const rootMargin = `-${headerHeight}px 0px -40% 0px`;

    // use many thresholds so we get a fine-grained intersectionRatio
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        // consider only intersecting entries
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        // pick the entry with the largest intersectionRatio (most visible)
        const mostVisible = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );
        setActive(mostVisible.target.id);
      },
      { threshold: thresholds, rootMargin }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav
        // @ts-expect-error ignore callback return type
        ref={(el) => (navRef.current = el)}
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)} // update active immediately on click
            className={`nav-item ${
              active === item.id
                ? "bg-white text-gray-900"
                : "hover:bg-white/20"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
