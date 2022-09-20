import React, { useEffect, useMemo, useState } from "react";
import "../App.css";

function Pagination2() {
  const [num, setNum] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [items, setItem] = useState({});

  //item contianing the new items to displayed
  const newsItems = useMemo(
    () => [
      {
        id: 1,
        title: "BBC News",
        url: "http://bbc.com/news",
        description: "This is the first Item",
        image: "https://upload.wikimedia.org/wikipedia/en/f/ff/BBC_News.svg",
      },
      {
        id: 2,
        title: "Google News",
        url: "http://www.google.com/news",
        description: "This is the second Item",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/Google_News.png",
      },
      {
        id: 3,
        title: "Fox News",
        url: "http://www.fox.com/news",
        description: "This is the third Item",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg",
      },
      {
        id: 4,
        title: "CNN News",
        url: "http://www.cnblogs.com/news",
        description: "This is the fourth Item",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg",
      },
      {
        id: 5,
        title: "Channels News",
        url: "http://www.channels.com/news",
        description: "This is the fifth Item",
        image: "https://upload.wikimedia.org/wikipedia/en/7/76/Channels_TV.jpg",
      },
      {
        id: 6,
        title: "The Verge",
        url: "http://www.verge.com/news",
        description: "This is the sixth Item",
        image:
          "https://upload.wikimedia.org/wikipedia/en/2/2c/SiriusXM_The_Verge.jpg",
      },
    ],

    []
  );

  // side effect for first rendering
  useEffect(() => {
    const item = newsItems[num];
    setItem(item);
  }, [num, newsItems]);

  //move the current page to the next page
  const handleNext = (e) => {
    e.preventDefault();
    const length = newsItems.length;
    const count = length - 1;
    if (num < count) {
      setNum((prev) => prev + 1);
      setLastPage(false);
    } else {
      setNum((prev) => num);
      setLastPage(true);
    }
  };


  //Move the current page to the prev page
  const handlePrev = (e) => {
    e.preventDefault();
    if (num > 0) {
      setNum((prev) => prev - 1);
      setLastPage(false);
    } else {
      setNum(0);
      setLastPage(true);
    }
  };

  return (
    <>
      <section className="news-container">
        {
          <div className="news-item">
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            <p>
              <img alt={items.title} src={items.image}></img>
            </p>
            <a href={items.url} className="news-link">
              {items.url}
            </a>
          </div>
        }
        {lastPage ? (
          <small className="message">Can not move any further...</small>
        ) : (
          <small  className="message"></small>
        )}
         <div className="pagination">
        <button type="submit" onClick={(e) => handlePrev(e)}>
          Prev
        </button>
        <button type="submit" onClick={(e) => handleNext(e)}>
          Next
        </button>
      </div>
      </section>
    </>
  );
}

export default Pagination2;
