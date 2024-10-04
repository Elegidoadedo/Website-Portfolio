
export const mediumGet = () => {
  
    const postsURL =   "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@elegidoadedo";

    const headers = {
        headers: {
          Accept: "application/json",
        },
      }
    const response = fetch(postsURL, headers).then((response) => response.json()).then((data => data));
    return response;
}