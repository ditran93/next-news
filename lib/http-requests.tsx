import { NewsArticle } from "../models/news-article";
export const fetchNews = async (): Promise<NewsArticle[]> => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=956552ece53f43fca2d69be633c613b8&pageSize=5"
  );
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the news data.");
    throw error;
  }
  const data = await response.json();
  return data.articles;
};
