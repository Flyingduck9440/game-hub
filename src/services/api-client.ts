import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4270c4128fe544c9995465f38324b62e",
  },
});
