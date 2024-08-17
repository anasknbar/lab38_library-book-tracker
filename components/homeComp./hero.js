'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
export default function Hero() {
  const scrollToSection = () => {
    const targetElement = document.getElementById('target-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <p class="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          Welcome to
          {/* <span class="border-b border-dotted border-slate-300">XYZ</span> */}
        </p>

        <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          <span class="inline-block">
            Your
            <span class="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span class="relative">Personal</span>
            </span>
          </span>
          <span class="inline-block">Book Store</span>
        </h1>

        <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          <span class="inline-block">Search the world's most comprehensive index of full-text books.</span>
         
        </p>

        <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
          <a
            class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left cursor-pointer"
            
            onClick={scrollToSection}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-3 w-3 flex-none"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8Z"></path>
              <path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235"></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M7 16V2.5"
                stroke="#1C274D"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span class="ml-3">Add New Book</span>
          </a>
          <div
            class="relative flex flex-1 flex-col items-stretch sm:flex-none"
            data-headlessui-state=""
          >
            <Link href='/books'>
            <button
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
              id="headlessui-menu-button-:r4:"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
              type="button"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="h-3 w-3 flex-none fill-current text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >




<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M917.251764 802.39026L786.571232 671.643176c-2.964148-2.993841-10.321788 0.260067-18.916281 6.447406l-10.6781-10.6781c54.596637-70.942966 51.407234-171.245844-8.531013-239.190875v-36.821988l0.130034 0.456653c0-70.649111-67.455613-136.867871-103.689891-172.419217l-8.270946-8.204393C529.76441 104.382037 485.22847 95.460924 448.830371 95.460924l-12.371606-0.063481H150.778377c-16.995473 0-47.336266 12.89174-47.336267 38.675221v756.025661c0 21.3562 17.31902 38.741773 38.675221 38.741773h567.587758c21.3562 0 38.741773-17.385573 38.741773-38.741773V753.360488c37.278641 37.308333 108.900443 108.934231 108.900443 108.934231 12.958293 12.89174 72.926232-46.882685 59.904459-59.904459z" fill="#27323A"></path><path d="M707.231382 652.173997c-54.856704 54.890492-144.259299 54.957045-199.149791 0-54.887421-54.953973-54.887421-144.352473 0-199.242965 26.566753-26.566753 61.924584-41.151999 99.559537-41.151999 37.698434 0 73.022477 14.585246 99.58923 41.151999 54.891516 54.953973 54.891516 144.288992 0.001024 199.242965z" fill="#FFFFFF"></path><path d="M603.214872 244.570368l8.657974 8.527941c15.171933 14.848385 36.464652 35.944518 54.53418 59.447806-35.521654-13.28184-75.11018-15.8221-110.333882-17.252468-1.10682-23.442878-5.600653-71.299278-21.486234-112.841378 18.683859 14.651799 41.14688 34.57456 68.627962 62.118099z" fill="#79CCBF"></path><path d="M150.648343 881.633865V142.800262c0.130033-0.066553 0.650167-0.263139 0.650168-0.263138h285.03022l12.371607 0.066552c6.25082 0 14.518694 0.130033 26.436719 4.100661l5.990753 6.25082c32.36092 31.970819 44.015806 111.604524 44.015806 157.377318 0 8.400979 6.64092 15.368519 15.10538 15.692066l6.510887 0.263139c48.899739 1.887021 109.844465 4.230694 146.863039 37.764986l3.383941 3.383941c2.377462 7.487673 3.940935 14.911866 4.201002 22.269506-72.045691-41.412066-165.287856-32.100853-226.853057 29.497112-73.642952 73.642952-73.642952 193.058697 0 266.70165 61.597965 61.594893 154.84013 70.972659 226.886845 29.49404v166.23495H150.648343z" fill="#F4CE73"></path></g></svg>


              </svg>
              <span class="ml-3">Start Browsing</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


