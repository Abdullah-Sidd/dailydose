import { useState, useEffect, createContext, useContext } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const DailydoseContext = createContext({});
const DailydoseProvider = ({ children }) => {
  const [newsArticles, setnewsArticles] = useState([]);
  const [Error, setError] = useState("");
  const [searchKeyword, setkeyword] = useState("");
  const [filteredNewsArticle, setfilterdata] = useState([]);

  const searchInputchange = (e) => {
    e.preventDefault();
    setkeyword(e.target.value.toLowerCase());
    const filtered = newsArticles.filter(
      (data) =>
        data.title.toLowerCase().includes(searchKeyword) ||
        data.body.toLowerCase().includes(searchKeyword) ||
        data.category.toLowerCase().includes(searchKeyword)
    );
    setfilterdata(filtered);
  };

  const getNewsArticles = async () => {
    // This part helps us to fetch data from firebase and without refreshing the page we can easily see the updated results.
    try {
      const ref = collection(db, "newsArticles");
      const unsubscribe = onSnapshot(ref, (snap) => {
        var newsArticlesList = [];
        snap.docs.map((e) => {
          newsArticlesList.push(e.data());
        });
        setnewsArticles(newsArticlesList);
      });
      return () => unsubscribe();
    } catch (error) {
      setError(error.message);
    }
  };
  //   This useEffect will automatically gives the data exact at the same time  when the page loads.
  useEffect(() => {
    getNewsArticles();
  }, []);

  const propss = {
    newsArticles,
    filteredNewsArticle,
    searchKeyword,
    searchInputchange,
  };
  return (
    <DailydoseContext.Provider value={propss}>
      {children}
    </DailydoseContext.Provider>
  );
};
// const useDailyDoses = useContext(DailydoseContext);
export { DailydoseContext, DailydoseProvider };
