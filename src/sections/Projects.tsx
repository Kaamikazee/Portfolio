"use client";

import darkSaasLandingPage from "@/assets/images/LiveTimer-1-modified.png";
import lightSaasLandingPage from "@/assets/images/Dash-1-modified.png";
import aiStartupLandingPage from "@/assets/images/Analytics-1-modified.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Link from "next/link";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "Sync Sphere",
    year: "2025",
    title: "Dashboard Page",
    results: [
      { title: "Overview of key metrics at a glance" },
      { title: "Customizable widgets and filters" },
      { title: "Real-time updates across devices" },
    ],
    link: "https://sync-sphere-production.up.railway.app",
    image: lightSaasLandingPage,
  },
  {
    company: "Sync Sphere",
    year: "2025",
    title: "Live Timer Page",
    results: [
      { title: "Record time in real time" },
      { title: "See others' recordings live" },
      { title: "Take breaks with taggable notes" },
    ],
    link: "https://sync-sphere-production.up.railway.app/timer",
    image: darkSaasLandingPage,
  },
  {
    company: "Sync Sphere",
    year: "2025",
    title: "Analytics Page",
    results: [
      { title: "Detailed usage analytics and trends" },
      { title: "Performance optimization insights" },
      { title: "Exportable reports (CSV/PDF)" },
    ],
    link: "https://sync-sphere-production.up.railway.app",
    image: aiStartupLandingPage,
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky transition-all duration-500 hover:scale-[1.02]"
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left column */}
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text text-center">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year} </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 hover:bg-gray-200 transition">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>

                {/* Right column - project image */}
                <div className="relative rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
