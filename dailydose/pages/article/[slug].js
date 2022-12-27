import Recomdations from "../../components/Recomdations";
import Content from "../../components/Content";
import Head from "next/head";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
const Post = ({ article }) => {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Dailydose — News || {article.title}</title>
        <meta name="title" content={`Dailydose — News || ${article.title}`} />
        <meta name="description" content={article.body} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content={`Dailydose — News || ${article.title}`}
        />
        <meta property="og:description" content={article.body} />
        <meta property="og:image" content={article.bannerImage} />
      </Head>

      <div className="relative max-w-screen-xl mx-auto">
        <div className="items-start sm:flex">
          {article && <Content article={article} />}
          <div className="sticky top-0 p-8 md:w-4/12 sm:w-6/12 sm:border-l">
            <Recomdations />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data;
  const ref = doc(db, `newsArticles/${slug}`);
  const res = await getDoc(ref);
  if (res.exists()) {
    data = res.data();
  } else {
    data = "Empty";
  }

  return {
    props: {
      article: data,
    }, // will be passed to the page component as props
  };
}
