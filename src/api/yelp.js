import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer m4RKvUxw386e6t-OCHvH8r0uyOrf6ZuzC5Ruj7l13cpplw3MNGBVcvPEgSDnJ8Y0Oh6y1IUekftGfBPgFGLmzLiT0hQ-kQWWzooKMcpPAV9Eg7mp8S8UkFy1RLclX3Yx",
  },
});
