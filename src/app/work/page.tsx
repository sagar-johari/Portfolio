"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import ScrollMarquee from "../components/ScrollMarquee";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

// Sanity config
const projectId = "tooz4wfv";
const dataset = "production";
const builder = imageUrlBuilder({ projectId, dataset });

function urlFor(source: any) {
  return builder.image(source);
}

interface WorkItem {
  _id: string;
  image: string;
  title: string;
  categories: string[];
  description?: string;
}

export default function Work() {
  const router = useRouter();
  const pathname = usePathname();
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch works from Sanity
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const query = encodeURIComponent('*[_type == "work"]{_id, title, categories, description, thumbnail}');
        const res = await fetch(
          `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`,
          { cache: "no-store" }
        );
        const data = await res.json();

        const items: WorkItem[] = (data.result || []).map((item: any) => ({
          _id: item._id,
          image: item.thumbnail?.asset
            ? urlFor(item.thumbnail).url()
            : "/images/placeholder.jpg",
          title: item.title,
          categories: item.categories || [],
          description: item.description || "",
        }));

        setWorkItems(items);
      } catch (error) {
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  // Restore scroll position after returning from a project page
  useEffect(() => {
    if (pathname === "/work") {
      const itemId = sessionStorage.getItem("work-item-id");
      if (itemId) {
        const el = document.getElementById(`work-item-${itemId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        sessionStorage.removeItem("work-item-id");
      }
    }
  }, [pathname]);

  const handleWorkItemClick = (workItem: WorkItem) => {
    sessionStorage.setItem("work-item-id", workItem._id);
    router.push(`/work/${workItem._id}`);
  };

  function ShimmerCard() {
    return (
      <div className="mb-4 break-inside-avoid overflow-hidden rounded-lg animate-pulse">
        {/* Image placeholder */}
        <div className="w-full aspect-square bg-gray-700 rounded-lg" />
        {/* Text placeholders */}
        <div className="mt-2">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-700 rounded w-1/2" />
        </div>
      </div>
    );
  }
  
  if (loading) {
    return (
      <>
        <ScrollMarquee text="&nbsp;Work ✦ Work ✦ Work ✦ Work ✦ Work ✦" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ShimmerCard key={i} />
          ))}
        </div>
      </>
    );
  }
  

  return (
    <>
      <ScrollMarquee text="&nbsp;Work ✦ Work ✦ Work ✦ Work ✦ Work ✦" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {workItems.map((item, i) => (
          <div
            key={item._id}
            id={`work-item-${item._id}`}
            className="mb-4 break-inside-avoid overflow-hidden cursor-pointer group"
            data-delay={i * 0.1}
            onClick={() => handleWorkItemClick(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1000}
              height={1000}
              loading="lazy"
              className="w-full object-contain aspect-square grayscale group-hover:grayscale-0 rounded-lg transition duration-300 bg-white p-3"
            />
            <div className="mt-2">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">
                {item.categories.join(" ✦ ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
