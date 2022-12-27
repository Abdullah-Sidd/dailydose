import React, { useEffect, useState } from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import dynamic from "next/dynamic";
import { runFireworks } from "../utils/runFireworks";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
function Admin() {
  const [title, settitle] = useState("");
  const [bannerImage, setbannerImage] = useState("");
  const [body, setbody] = useState("");
  const [category, setcategory] = useState("");
  const [slug, setSlug] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  const sendDataToFirebase = async () => {
    try {
      const ref = doc(db, `newsArticles`, slug);
      await setDoc(ref, {
        title,
        bannerImage,
        body,
        category,
        slug,
       
      });
    } catch (error) {
      alert(error.message);
    }
    setsubmitted(true);
   runFireworks();
  };

  
  return (
    <div>
      {!submitted ? (
        <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div class="w-10/12 p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-6xl">
            <h1 class="text-3xl font-semibold text-center text-pink-500 underline uppercase decoration-wavy">
              Admin Pannel
            </h1>
            <div class="mb-2">
              <label
                for="text"
                class="block text-sm font-semibold text-gray-800"
              >
                Title
              </label>
              <input
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                  setSlug(e.target.value.replaceAll(" ", "-"));
                }}
                type="text"
                class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class="mb-2">
              <label class="block text-sm font-semibold text-gray-800">
                Banner Image
              </label>
              <input
                value={bannerImage}
                onChange={(e) => setbannerImage(e.target.value)}
                type="img"
                class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class="mb-2">
              <label
                for="text"
                class="block text-sm font-semibold text-gray-800"
              >
                Body
              </label>
              <div className="form-group">
          <ReactQuill
            value={body}
            modules={modules}
            onChange={setbody}
            // onChange={(e) => setbody(e.target.value)}
          />
        </div>

            </div>
            <div class="mb-2">
              <label
                for="text"
                class="block text-sm font-semibold text-gray-800"
              >
                Category
              </label>
              <input
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                type="text"
                class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class="mb-2">
              <label class="block text-sm font-semibold text-gray-800">
                Slug
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                type="text"
                class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class="mt-6">
              <button
                onClick={() => sendDataToFirebase()}
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Submit
              </button>
            </div>

            <p class="mt-8 text-lg font-bold text-center text-gray-700">
              {" "}
              Back to home page?{" "}
              <a href="/" class="font-medium text-indigo-600 hover:underline">
                Homepage
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl p-10 mx-auto my-10 text-white bg-yellow-500">
          <h3 className="text-3xl font-bold">
            Your data is added successfully.
          </h3>
        </div>
      )}
    </div>
  );
}

export default Admin;
