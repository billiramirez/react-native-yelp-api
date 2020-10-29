import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization: `Bearer f_OCfds8AaAf3tYN5MzGP2Nba65hpbMM4l4r-TTsi1DHjKz0YqEwHVDzXgmxAO6zZDfmrSGw8j7RXygiXX_2OuQUo4D_v7xRlgUkrhXZn38Fzfl7f7kJA6gajTyYX3Yx`,
  },
});
