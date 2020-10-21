import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer jatIwIdLH79BdohJai-Nw1b9GpV4tWnBuDPe_L5g_KYG0cn5iQwC-eknOMOOlFDIv3Fs2AJOghKxwE0gYfh1LkU8-iWOdU4sImbwtmNXstmZqGUugQi0p3kNjlSNX3Yx",
  },
});
