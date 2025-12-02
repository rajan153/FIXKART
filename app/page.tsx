"use client";

import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react'; 
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { INVENTORY_DATA, SIDEBAR_LINKS } from './data/inventory'; 
import { ProductItem } from './data/types';

// --- CONFIGURATION ---
const BRAND_BLUE = "#00529b";
const HEADER_HEIGHT_OFFSET = 150; 

// --- ICONS (Inline SVGs for speed/no-deps) ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 18 18" />
  </svg>
);

// --- SUB-COMPONENT: HANDLES LOGIC ---
function InventoryContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q')?.toLowerCase() || "";
  
  // 1. STATE
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New State for Sidebar

  // 2. PERFORMANCE: Memoize filtered data
  const filteredData = useMemo(() => {
    if (!searchQuery) return INVENTORY_DATA;
    return INVENTORY_DATA.map(category => {
      const matchingItems = category.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery)
      );
      return { ...category, items: matchingItems };
    }).filter(category => category.items.length > 0);
  }, [searchQuery]);

  // 3. EFFECT: Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [filteredData]);

  // 4. HANDLER: Smooth Scroll
  const handleScroll = useCallback((e: React.MouseEvent, id: string, closeMenu?: boolean) => {
    e.preventDefault();
    setActiveCategory(id);
    
    // If on mobile, close the menu when a link is clicked
    if (closeMenu) setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT_OFFSET;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);

  // Block body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full flex flex-col md:flex-row relative min-h-screen">
      
      {/* ========================================= */}
      {/* 1. MOBILE TRIGGER BUTTON (Floating)       */}
      {/* ========================================= */}
      {/* This button appears on the left side, below the header */}
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-[120px] left-2 z-30 p-2.5 bg-[#00529b] text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform active:scale-95 flex items-center justify-center gap-2"
        aria-label="Open Categories"
      >
        <MenuIcon />
        <span className="text-xs font-bold pr-1">Categories</span>
      </button>

      {/* ========================================= */}
      {/* 2. MOBILE SIDEBAR DRAWER (Slide-Over)     */}
      {/* ========================================= */}
      {/* Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div 
        className={`md:hidden fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <h2 className="text-lg font-bold text-[#00529b]">Categories</h2>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <XIcon />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
           <ul className="space-y-2">
            {SIDEBAR_LINKS.map((linkName, index) => {
                const catSlug = INVENTORY_DATA.find(c => c.title === linkName)?.slug || "";
                const existsInView = filteredData.some(c => c.slug === catSlug);
                const isActive = activeCategory === catSlug;

                if (!existsInView && searchQuery) return null;

                return (
                <li key={index}>
                    <a 
                    href={`#${catSlug}`}
                    onClick={(e) => handleScroll(e, catSlug, true)} // Pass true to close menu
                    className={`
                        block px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                        ${isActive 
                            ? "bg-[#e6f0fa] text-[#00529b] font-bold border-l-4 border-[#00529b]" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#00529b]"
                        }
                    `}
                    >
                    {linkName}
                    </a>
                </li>
                );
            })}
           </ul>
        </div>
      </div>

      {/* ========================================= */}
      {/* 3. DESKTOP SIDEBAR (Unchanged)            */}
      {/* ========================================= */}
      <aside className="hidden md:block w-64 flex-shrink-0 py-4 pl-4 pr-6 border-r border-gray-200 sticky top-[70px] h-[calc(100vh-70px)] overflow-y-auto custom-scrollbar">
        <h2 className="text-sm font-bold text-gray-800 border-b-2 border-[#ffc20e] pb-1 mb-3">
          Choose a Category
        </h2>
        <ul className="space-y-1 text-[13px] leading-tight text-gray-700">
          {SIDEBAR_LINKS.map((linkName, index) => {
            const catSlug = INVENTORY_DATA.find(c => c.title === linkName)?.slug || "";
            const existsInView = filteredData.some(c => c.slug === catSlug);
            const isActive = activeCategory === catSlug;

            if (!existsInView && searchQuery) return null;

            return (
              <li key={index}>
                <a 
                  href={`#${catSlug}`}
                  onClick={(e) => handleScroll(e, catSlug)}
                  className={`
                    block px-2 py-1 rounded transition-all duration-200 cursor-pointer select-none
                    ${isActive 
                        ? "bg-[#e6f0fa] text-[#00529b] font-bold border-l-4 border-[#00529b] pl-3" 
                        : "hover:bg-gray-100 hover:text-[#00529b] border-l-4 border-transparent"
                    }
                  `}
                >
                  {linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 p-4 md:p-6 min-h-screen">
        
        {searchQuery && (
           <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-gray-700 animate-fade-in">
              Showing results for: <strong>"{searchQuery}"</strong>
              <a href="/" className="ml-4 text-blue-600 font-semibold hover:underline">Clear Search</a>
           </div>
        )}

        {filteredData.map((category) => (
            <section 
                key={category.slug} 
                id={category.slug} 
                className="mb-12 scroll-mt-48 md:scroll-mt-24 transition-opacity duration-500"
            >
              <div className="border-b border-gray-300 pb-2 mb-6">
                <h1 className="text-xl md:text-2xl font-bold" style={{ color: BRAND_BLUE }}>
                  {category.title}
                </h1>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-3 gap-y-6 md:gap-x-4 md:gap-y-8">
                {category.items.map((item, idx) => (
                  <ProductCard key={`${category.slug}-${idx}`} item={item} />
                ))}
              </div>
            </section>
        ))}
        
        {searchQuery && filteredData.length === 0 && (
           <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <span className="text-4xl mb-2">🔍</span>
              <h2 className="text-xl font-semibold text-gray-600">No products found</h2>
              <p className="text-sm">Try checking your spelling or use a different keyword.</p>
           </div>
        )}
      </main>
    </div>
  );
}

// ... (Rest of exports remain the same: HomePage, ProductCard)
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="w-full h-auto"></div> 
      <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh] text-[#00529b] font-medium animate-pulse">Loading Inventory...</div>}>
        <InventoryContent />
      </Suspense>
    </div>
  );
}

const ProductCard = React.memo(function ProductCard({ item }: { item: ProductItem }) {
  const encodedName = encodeURIComponent(item.name);
  const fallbackUrl = `https://placehold.co/400x400/f3f4f6/00529b.png?text=${encodedName}&font=roboto`;
  const imageSource = item.imagePath ? item.imagePath : fallbackUrl;

  return (
    <div className="flex flex-col items-center group cursor-pointer w-full h-full">
      <div className="aspect-square w-full max-w-[120px] bg-white border border-gray-200 rounded-lg mb-2 flex items-center justify-center overflow-hidden relative shadow-sm group-hover:shadow-md transition-all duration-300 ease-out">
        <Image 
            src={imageSource}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-2 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            unoptimized={true}
            loading="lazy"
        />
      </div>
      <span className="text-[12px] text-center leading-tight text-gray-700 font-medium group-hover:text-[#00529b] px-1 break-words w-full transition-colors duration-200">
        {item.name}
      </span>
    </div>
  );
});