import { useEffect, useState } from "react";
import CardNews from "../components/CardNews";
import AnimationWrapper from "../components/AnimationWrapper";
import newsData from "../components/News.json"; // Import data dari News.json

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Ambil data dari News.json
    const fetchNews = async () => {
      try {
        // Simulasi fetch data dari News.json
        setArticles(newsData.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <AnimationWrapper>
      <div className="container mx-auto py-16 px-4 mt-10">
        {/* Judul Halaman */}
        <h1 className="text-4xl font-bold text-sky-600 text-center mb-12">
          Latest News
        </h1>

        {/* Grid News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <CardNews
              key={index}
              image={article.urlToImage || "https://via.placeholder.com/600x400"}
              title={article.title}
              description={article.description || "No description available."}
              url={article.url}
            />
          ))}
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Blog;
