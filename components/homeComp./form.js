"use client";

import { useState } from "react";
import Toast from "./Toast";
export default function Form() {
  const [bookInfo, setBookInfo] = useState([]);
  const [showFlag, setShowFlag] = useState(false);
  const [title,setTitle] = useState('')


  const handleShowToast = (e) => {
    setShowFlag(true);
    // console.log(showFlag)
  };

  const handleClosingToast = (e) => {
    setShowFlag(false);
    // console.log(showFlag)
  };

  const handleBookInfo = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const genre = e.target.elements.genre.value;
    const publishedDate = e.target.elements.publishedDate.value;
    const bookDescription = e.target.elements.description.value;

    console.log(title, author, genre, publishedDate, bookDescription);

    setBookInfo([title, author, bookDescription]);
    handleShowToast();
  
    
  };

  return (
    <>
      <div
        id="target-section"
        class=" p-8 rounded border border-gray-200 mt-48"
      >
        <h1 class="font-medium text-3xl">Add Book</h1>
        <p class="text-gray-600 mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          dolorem vel cupiditate laudantium dicta.
        </p>
        <form onSubmit={handleBookInfo}>
          <div class="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                for="title"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
             
                id="title"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Book Title"
                required
              />
            </div>
            <div>
              <label
                for="author"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Book Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="William Shakespeare"
                required
              />
            </div>
            <div>
              <label
                for="genre"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Genre
              </label>
              <input
                type="text"
                name="genre"
                id="genre"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(ex. novel,romance,fiction)"
                required
              />
            </div>
            <div>
              <label
                for="publishedDate"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Published Date
              </label>
              <input
                type="text"
                name="publishedDate"
                id="publishedDate"
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(01/01/1993)"
                required
              />
            </div>
            <div>
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Description
              </label>
              <textarea
                // value={inputValue}
                id="description"
                name="description"
                rows="4"
                class="block p-2.5 w-full rounded text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write book description here..."
                required
              ></textarea>
            </div>
          </div>
          <div class="space-x-4 mt-8">
            <button

              type="submit"
              class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>
            {/* <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
   
            
            type="button"
            >
              Clear
            </button> */}
          </div>
        </form>
      </div>

      <div className="h-28 ml-6 mt-6">
        {showFlag && (
          <Toast book={bookInfo} closingFunction={handleClosingToast} />
        )}
      </div>
    </>
  );
}
