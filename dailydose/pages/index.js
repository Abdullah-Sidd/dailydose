import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import Footer from "../components/Footer ";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Newsblogs from "../components/Newsblogs";
import { db } from "../firebase";

export default function Home({ newsArticles }) {
  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Dailydose — News</title>
        <meta name="title" content="Dailydose — News" />
        <meta name="description" content="Get your latest hindi news here." />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />
      </Head>

      <Navbar />
      <Nav />
      <Newsblogs newsArticles={newsArticles} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const ref = collection(db, "newsArticles");
  const docs = await getDocs(ref);
  const articles = [];
  docs.forEach((doc) => articles.push(doc.data()));
  return {
    props: { newsArticles: articles },
  };
}
