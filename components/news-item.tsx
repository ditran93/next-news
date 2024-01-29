import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { NewsArticle } from "../models/news-article";
interface NewsItemProps {
  news: NewsArticle;
  newsId: number;
}

const NewsItem: React.FC<NewsItemProps> = ({ news, newsId }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "1rem",
        margin: "1rem 0",
        borderRadius: "0.25rem",
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #ddd",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
      key={newsId}
    >
      <Link href={`/news/${newsId}`} passHref>
        <Typography variant="h6" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="body2">{news.description}</Typography>
      </Link>
    </Box>
  );
};

export default NewsItem;
