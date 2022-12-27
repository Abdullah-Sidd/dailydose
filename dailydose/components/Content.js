import React from "react";
import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";

function Content({ article }) {
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div className="relative max-w-screen-xl p-5 mx-auto sm:p-10 md:p-16">
      <div className="max-w-2xl mx-auto mb-5">
        <h1 href="#" className="mb-2 text-3xl font-bold text-gray-900">
          {article.title}
        </h1>
        <p className="text-gray-700">Here there will be author details.</p>
        <div className="flex justify-between my-6 text-xs text-gray-700">
          <div className="flex items-center">
            <a href="#">
              <img
                className="w-12 h-12 mr-2 rounded-full"
                src={
                  article?.authorImage
                    ? ""
                    : "https://blog.logrocket.com/wp-content/uploads/2022/09/guide-using-convex-state-management-nocdn.png"
                }
                alt="Avatar of Jonathan Reinink"
              />
            </a>
            <div className="flex space-x-3 text-sm lg:space-x-10">
              <a
                href="#"
                className="mt-3 lg:mr-40 font-medium leading-none text-gray-900 transition duration-500 ease-in-out mr-9 hover:text-indigo-600"
              >
                {article.author ? "" : "Abdullah Sidd"}
              </a>

              <FacebookShareButton
                url={`${process.env.NEXT_PUBLIC_HOST}/${article.slug}`}
              >
                <FacebookIcon size={36} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`${process.env.NEXT_PUBLIC_HOST}/${article.slug}`}
              >
                <WhatsappIcon size={36} round={true} />
              </WhatsappShareButton>
              <TwitterShareButton
                url={`${process.env.NEXT_PUBLIC_HOST}/${article.slug}`}
              >
                <TwitterIcon size={36} round={true} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full h-64 overflow-hidden text-center bg-cover"
        src={article.bannerImage}
      ></img>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col justify-between mt-3 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
          <div className="">
            <div
              className="my-5 text-base leading-8"
              dangerouslySetInnerHTML={createMarkup(article.body)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
