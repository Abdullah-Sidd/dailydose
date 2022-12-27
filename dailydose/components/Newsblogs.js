import Link from "next/link";
import { useContext } from "react";
import { DailydoseContext } from "../context/DailydoseContext";
function Newsblogs({ newsArticles }) {
  const { searchKeyword, filteredNewsArticle } = useContext(DailydoseContext);
  return (
    <section class="py-10  sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
          <div class="flex-1 text-center lg:text-left">
            <h2 class="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl">
              Latest News from Dailydose
            </h2>
          </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-4 mx-auto mt-8 lg:mt-16 lg:grid-cols-2 lg:max-w-6xl">
          {!searchKeyword &&
            newsArticles &&
            newsArticles.map((news) => {
              return (
                <div class="overflow-hidden">
                  <div class="p-5">
                    <div class="relative">
                      <Link
                        href="#"
                        title=""
                        class="block aspect-w-4 aspect-h-3"
                      >
                        <img
                          class="object-cover object-left lg:object-center h-64 w-full"
                          src={news.bannerImage}
                          alt=""
                        />
                      </Link>

                      <div class="absolute top-4 left-4">
                        <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                      {/* {news.postedOn.toDate().toDateString()} */}
                    </span>
                    <p class="mt-5 text-2xl font-semibold">
                      <Link href="#" title="" class="text-black">
                        {news.title}
                      </Link>
                    </p>
                    <p class="mt-4 text-base text-gray-600 line-clamp-2">
                      {news.body}
                    </p>
                    <Link
                      href={`/article/${news.slug}`}
                      title=""
                      class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                    >
                      Continue Reading
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          {searchKeyword &&
            filteredNewsArticle &&
            filteredNewsArticle.map((news) => {
              return (
                <div class="overflow-hidden bg-white rounded shadow">
                  <div class="p-5">
                    <div class="relative">
                      <Link
                        href="#"
                        title=""
                        class="block aspect-w-4 aspect-h-3"
                      >
                        <img
                          class="object-cover w-full h-full"
                          src={news.bannerImage}
                          alt=""
                        />
                      </Link>

                      <div class="absolute top-4 left-4">
                        <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                      {/* {news.postedOn.toDate().toDateString()} */}
                    </span>
                    <p class="mt-5 text-2xl font-semibold">
                      <Link href="#" title="" class="text-black">
                        {news.title}
                      </Link>
                    </p>
                    <p class="mt-4 text-base text-gray-600 line-clamp-2">
                      {news.body}
                    </p>
                    <Link
                      href={`/article/${news.slug}`}
                      title=""
                      class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                    >
                      Continue Reading
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Newsblogs;
