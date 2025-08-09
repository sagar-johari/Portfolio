"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "tooz4wfv";
const dataset = "production";
const builder = imageUrlBuilder({ projectId, dataset });

function urlFor(source: any) {
  return builder.image(source);
}

interface ProjectData {
  _id: string;
  image: string;
  images: string[];
  title: string;
  categories: string[];
  description?: string;
  technologies?: string[];
  duration?: string;
  role?: string;
  teamSize?: string;
  video?: string;
}

// 🔹 Reusable shimmer box
function ShimmerBox({ className }: { className?: string }) {
  return <div className={`bg-gray-700 rounded-lg animate-pulse ${className}`} />;
}

// 🔹 Full-page skeleton loader
function ProjectPageSkeleton() {
  return (
    <div className="p-6 grid grid-cols-12 gap-4">
      {/* Left: Main thumbnail */}
      <div className="col-span-6">
        <ShimmerBox className="w-full h-[70vh]" />
      </div>

      {/* Right: Text content */}
      <div className="col-span-6 space-y-4">
        <ShimmerBox className="h-20 w-3/4" />
        <ShimmerBox className="h-6 w-1/2" />
        <ShimmerBox className="h-4 w-full" />
        <ShimmerBox className="h-4 w-5/6" />
        <ShimmerBox className="h-4 w-2/3" />
      </div>

      {/* Bottom grid shimmer (matches image layout) */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`${i < 3 ? "col-span-6" : "col-span-2"}`}>
          <ShimmerBox className="w-full h-[500px]" />
        </div>
      ))}
    </div>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const query = encodeURIComponent(
          `*[_type == "work" && _id == "${id}"][0]`
        );
        const res = await fetch(
          `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        const item = data.result;

        if (item) {
          setProjectData({
            _id: item._id,
            image: item.thumbnail?.asset
              ? urlFor(item.thumbnail).width(1200).url()
              : "/images/placeholder.jpg",
            images:
              item.images?.map((img: any) =>
                img.asset ? urlFor(img).width(1200).url() : null
              ) || [],
            title: item.title,
            categories: item.categories || [],
            description: item.description || "",
            technologies: item.technologies || [],
            duration: item.duration || "",
            role: item.role || "",
            teamSize: item.teamSize || "",
            video: item.video || "",
          });
        }
      } catch (err) {
        console.error("Error fetching project:", err);
      }
    };

    fetchProject();
  }, [id]);

  // 🔹 Show shimmer until data is fetched
  if (!projectData) return <ProjectPageSkeleton />;

  return (
    <div className="p-6 grid grid-cols-12 gap-6">
      {/* Left column: Main thumbnail */}
      <div className="col-span-6 bg-white rounded-lg p-6">
        <Image
          src={projectData.image}
          alt={projectData.title}
          width={1200}
          height={800}
          loading="lazy"
          className="max-h-[70vh] object-contain"
        />
      </div>

      {/* Right column: Title, categories, description */}
      <div className="col-span-6">
        <h1 className="text-[5rem] font-bold leading-[1]">
          {projectData.title}
        </h1>
        <p className="text-gray-400 text-[1.2rem]">
          {projectData.categories.join(" ✦ ")}
        </p>
        {projectData.description && (
          <p className="mt-4 text-gray-300 text-[20px]">
            {projectData.description}
          </p>
        )}
      </div>

      {/* Full-width: Additional images */}
      {projectData.images.length > 0 && (
        <div className="col-span-12 grid grid-cols-12 gap-4">
          {/* First 3 images */}
          {projectData.images.slice(0, 3).map((img, index) =>
            img ? (
              <div key={index} className="col-span-6">
                <Image
                  src={img}
                  alt={`${projectData.title} image ${index + 1}`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            ) : null
          )}

          {/* Last 2 images as mobile view */}
          {projectData.images.slice(3).map((img, index) =>
            img ? (
              <div key={index + 3} className="col-span-2">
                <Image
                  src={img}
                  alt={`${projectData.title} mobile image ${index + 4}`}
                  width={600}
                  height={1200}
                  loading="lazy"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            ) : null
          )}
        </div>
      )}

      {/* Full-width: Vimeo video */}
      {projectData.video && (
        <div className="col-span-12 mt-8">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`${projectData.video.replace(
                "vimeo.com",
                "player.vimeo.com/video"
              )}?autoplay=1&muted=1&controls=0&loop=1&background=1`}
              className="absolute top-0 left-0 w-full h-full rounded-lg z-0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full z-1"></div>
          </div>
        </div>
      )}
    </div>
  );
}
