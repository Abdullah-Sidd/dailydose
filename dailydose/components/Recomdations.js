import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { DailydoseContext } from "../context/DailydoseContext";

function Recomdations() {
  const { newsArticles } = useContext(DailydoseContext);

  const router = useRouter();
  const { slug } = router.query;
  const filteredRecomndations = newsArticles.filter(function (value) {
    return value.slug != slug;
  });
  return (
    <div>
      {filteredRecomndations.map((e) => {
        return (
          <Link href={`/article/${e.slug}`}>
            <div className="flex items-start">
              <a href="#" className="inline-block mr-3">
                <img
                  className="w-20 h-20 py-1 bg-center bg-cover"
                  src={e.bannerImage}
                />
              </a>
              <div className="w-2/3 my-auto text-sm">
                <p className="text-xs text-gray-600">
                  {/* {e.postedOn.toDate().toDateString()} */}
                </p>
                <a
                  className="text-lg font-medium leading-none text-gray-900 hover:text-indigo-600"
                >
                  {e.title}
                </a>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Recomdations;
