import { setNewsList } from "../actions/newsActions";
import axios from "axios";
import { setLoading, clearLoading } from "../actions/appActions";

const apiKey = process.env.REACT_APP_NEWSAPIKEY;

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  `apiKey=${apiKey}`;

export const getNews = async (dispatch) => {
    try {
      dispatch(setLoading())
      const {data} = await axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
      dispatch(setNewsList(data.articles))
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading())
    }
  }