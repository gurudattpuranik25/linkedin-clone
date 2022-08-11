import React from "react";

function News({ title, desc }) {
  // const url =
  //   "https://newsapi.org/v2/everything?q=keyword&apiKey=14e5383c9e3641d0a4ca1af37685903d";

  // function randomNews() {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.articles));
  // }

  // useEffect(() => {
  //   randomNews();
  // }, []);

  return (
    <div className=" hover:bg-gray-100 py-1 px-2 cursor-pointer">
      <li className=" text-sm font-semibold">{title}</li>
      <p className=" text-xs text-gray-400 pl-5">{desc}</p>
    </div>
  );
}

export default News;
