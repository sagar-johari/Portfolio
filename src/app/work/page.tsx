"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ScrollMarquee from "../components/ScrollMarquee";

interface WorkItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description?: string;
}

const Work = () => {
    const router = useRouter();

    const workItems: WorkItem[] = [
        {
            id: 1,
            image: "./images/jindal-logo.jpg",
            title: "Jindal Steel Project",
            category: "Web Development ✦ Corporate",
            description: "A comprehensive web application for Jindal Steel, featuring real-time data visualization, inventory management, and customer portal. Built with modern technologies to handle large-scale industrial operations."
        },
        {
            id: 2,
            image: "./images/3eco.png",
            title: "3Eco Sustainability Platform",
            category: "Mobile App ✦ Sustainability",
            description: "An innovative mobile application focused on environmental sustainability. Features include carbon footprint tracking, eco-friendly product recommendations, and community-driven environmental initiatives."
        },
        {
            id: 3,
            image: "./images/react.png",
            title: "React Component Library",
            category: "UI/UX ✦ Development",
            description: "A comprehensive React component library designed for rapid prototyping and consistent design systems. Includes 50+ reusable components with full TypeScript support and accessibility features."
        },
        {
            id: 4,
            image: "./images/express-js.png",
            title: "Express.js API Gateway",
            category: "Backend ✦ API Development",
            description: "A robust API gateway built with Express.js, featuring authentication, rate limiting, request validation, and microservices integration. Handles millions of requests with high performance."
        },
        {
            id: 5,
            image: "./images/sjicon.png",
            title: "SJ Interactive Dashboard",
            category: "Data Visualization ✦ Analytics",
            description: "An interactive dashboard for data visualization and analytics. Features real-time charts, customizable widgets, and advanced filtering capabilities for business intelligence."
        }
    ];

    const handleWorkItemClick = (workItem: WorkItem) => {
        router.push(`/work/${workItem.id}`);
    };
      
 return(
    <>
      {/* <ScrollMarquee text="Work ✦ Work ✦ Work ✦ Work ✦ Work ✦" /> */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 fade-grid">
        {workItems.map((item, i) => (
            <div 
              key={item.id} 
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300" 
              data-delay={i * 0.1}
              onClick={() => handleWorkItemClick(item)}
            >
              <img src={item.image} alt={item.title} className="w-full grayscale hover:grayscale-0 transition duration-300" />
              <div className="mt-2">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.category}</p>
              </div>
            </div>
        ))}
      </div>
    </>
 );
}

export default Work