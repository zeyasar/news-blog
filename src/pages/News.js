import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import { getNews } from "../redux/thunk/newsThunk";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from "react-share";
// import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

const News = () => {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const { loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getNews);
  }, [dispatch]);

  // const shareUrl = "https://news-blog-react-app.netlify.app";

  return (
    <>
      {loading && (
        <Container maxWidth="sm">
          <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
        </Container>
      )}
      {!loading && (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={
                  item?.urlToImage ??
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
                }
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title ?? "Tesla disables gaming while driving feature"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content ??
                    "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
                </Typography>
              </CardContent>
              <CardActions style={{ display: "flex", justifyContent:'space-between'}}>
                <div>
                  {/* <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton> */}
                </div>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
