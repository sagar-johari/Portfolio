"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { use } from "react";

interface ProjectData {
  id: number;
  image: string;
  title: string;
  category: string;
  description?: string;
  technologies?: string[];
  duration?: string;
  role?: string;
  teamSize?: string;
}

export default function ModalProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Mock project data - in real app, fetch from API
  const projectData: ProjectData = {
    id: parseInt(id),
    image: `./images/${id === "1" ? "jindal-logo.jpg" : 
                    id === "2" ? "3eco.png" : 
                    id === "3" ? "react.png" : 
                    id === "4" ? "express-js.png" : "sjicon.png"}`,
    title: id === "1" ? "Jindal Steel Project" :
           id === "2" ? "3Eco Sustainability Platform" :
           id === "3" ? "React Component Library" :
           id === "4" ? "Express.js API Gateway" : "SJ Interactive Dashboard",
    category: id === "1" ? "Web Development ✦ Corporate" :
              id === "2" ? "Mobile App ✦ Sustainability" :
              id === "3" ? "UI/UX ✦ Development" :
              id === "4" ? "Backend ✦ API Development" : "Data Visualization ✦ Analytics",
    description: id === "1" ? "A comprehensive web application for Jindal Steel, featuring real-time data visualization, inventory management, and customer portal. Built with modern technologies to handle large-scale industrial operations." :
                id === "2" ? "An innovative mobile application focused on environmental sustainability. Features include carbon footprint tracking, eco-friendly product recommendations, and community-driven environmental initiatives." :
                id === "3" ? "A comprehensive React component library designed for rapid prototyping and consistent design systems. Includes 50+ reusable components with full TypeScript support and accessibility features." :
                id === "4" ? "A robust API gateway built with Express.js, featuring authentication, rate limiting, request validation, and microservices integration. Handles millions of requests with high performance." :
                "An interactive dashboard for data visualization and analytics. Features real-time charts, customizable widgets, and advanced filtering capabilities for business intelligence.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    duration: "3 months",
    role: "Full-stack Developer",
    teamSize: "4 people"
  };

  useEffect(() => {
    if (modalRef.current && overlayRef.current) {
      // Set initial state
      gsap.set(modalRef.current, { y: "100%" });
      gsap.set(overlayRef.current, { opacity: 0 });

      // Animate in
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(modalRef.current, {
        y: "0",
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2");
    }
  }, []);

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: () => router.back()
      });
      
      tl.to(modalRef.current, {
        y: "100%",
        duration: 0.4,
        ease: "power2.in"
      })
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.2");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-[90vw] max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide rounded-t-3xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            {/* <h2 className="text-[60px] font-bold text-gray-900">{projectData.title}</h2> */}
            <p className="text-gray-600">{projectData.category}</p>
          </div>
          <button
            onClick={handleClose}
            className="w-20 h-20 rounded-full bg-black flex items-center justify-center transition-colors hover:bg-gray-800"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <img 
              src={projectData.image} 
              alt={projectData.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          {projectData.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {projectData.description}
              </p>
            </div>
          )}

          {/* Additional content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.technologies?.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Duration:</strong> {projectData.duration}</p>
                <p><strong>Role:</strong> {projectData.role}</p>
                <p><strong>Team Size:</strong> {projectData.teamSize}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}