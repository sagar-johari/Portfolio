"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  workItem: {
    image: string;
    title: string;
    category: string;
    description?: string;
  } | null;
}

const WorkModal: React.FC<WorkModalProps> = ({ isOpen, onClose, workItem }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      // Set initial state
      gsap.set(modalRef.current, { y: "100%" });
      // gsap.set(overlayRef.current, { opacity: 0 });

      // Animate in
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        duration: 0.3,
        ease: "power2.out"
      })
      .to(modalRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2");
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: onClose
      });
      
      tl.to(modalRef.current, {
        y: "100%",
        duration: 0.4,
        ease: "power2.in"
      })
      .to(overlayRef.current, {
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

  if (!isOpen || !workItem) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-[90vw] max-h-[90vh] overflow-y-auto scrollbar-hiderounded-t-3xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{workItem.title}</h2>
            <p className="text-gray-600">{workItem.category}</p>
          </div>
          <button
            onClick={handleClose}
            className="w-20 h-20 rounded-full bg-black flex items-center justify-center transition-colors"
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
              src={workItem.image} 
              alt={workItem.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          {workItem.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {workItem.description}
              </p>
            </div>
          )}

          {/* Additional content can be added here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Duration:</strong> 3 months</p>
                <p><strong>Role:</strong> Full-stack Developer</p>
                <p><strong>Team Size:</strong> 4 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal; 