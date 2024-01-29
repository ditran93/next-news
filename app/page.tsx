"use client";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/lib/http-requests";
import { NewsArticle } from "@/models/news-article";
import NewsItem from "@/components/news-item";
export default function Home() {
  const { data } = useQuery({
    queryKey: ["newsData"],
    queryFn: fetchNews,
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "auto",
        paddingTop: "2rem",
        marginTop: "2rem",
        borderRadius: "1rem",
        border: "1px solid #000000",
      }}
    >
      <Box
        sx={{
          backgroundColor: "lightblue",
          width: "100%",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        <Typography variant="h4">Recent News</Typography>
      </Box>

      {data &&
        data.map((news: NewsArticle, index: number) => (
          <NewsItem key={index} news={news} newsId={index} />
        ))}
    </Container>
  );
}
