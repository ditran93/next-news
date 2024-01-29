"use client";
import Typography from "@mui/material/Typography";
import { fetchNews } from "@/lib/http-requests";
import { useQuery } from "@tanstack/react-query";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const NewsDetails = ({ params }: { params: { newsSlug: string } }) => {
  const newsSlugNumber = Number(params.newsSlug);

  const { data } = useQuery({
    queryKey: ["newsData"],
    queryFn: fetchNews,
  });

  const newsArticle = data && data[newsSlugNumber];

  if (!newsArticle) return <div>Loading...</div>;

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem" }}>
      <Typography variant="h3" sx={{ color: "#1976d2" }}>
        {newsArticle.title}
      </Typography>
      <Typography variant="subtitle1">{`Publish at ${newsArticle.publishedAt} by ${newsArticle.author}`}</Typography>
      <Typography variant="h6">{newsArticle.description}</Typography>

      <Box
        component="img"
        sx={{
          height: 600,
          width: 800,
        }}
        alt="The house from the offer."
        src={newsArticle.urlToImage}
      />
      <Typography variant="body1">{newsArticle.content}</Typography>
    </Container>
  );
};

export default NewsDetails;
