import { setNewsList } from "../actions/newsActions";
import axios from "axios";
import { setLoading, clearLoading } from "../actions/appActions";

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  `apiKey=41d6a5347a1f449490560ba2fbea6d1b`;

export const getNews = async (dispatch) => {
    try {
      dispatch(setLoading())
      const {data} = await axios.get(url)
      dispatch(setNewsList(data.articles))
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading())
    }
  }