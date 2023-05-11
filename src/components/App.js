import "../App.css";
import { Share2 } from "react-feather";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import { useEffect, useState } from "react";
import MetaDecorator from './MetaDecorator';
import { MetaTags } from "react-meta-tags";
import { Helmet } from "react-helmet";
import image from "./airbus_a330_300_516434.jpg"

function App() {
  const [time, setTime] = useState({
    hrs: 0,
    min: 0,
    sec: 0,
  });
  const [reseted, setReseted] = useState(true);
  const [int, setInt] = useState();
  const [started, setStarted] = useState(false);


  const [expandedIndex, setExpandedIndex] = useState(-1);

  let sec = time.sec,
    min = time.min,
    hrs = time.hrs;
  const start = () => {
    setInt(setInterval(stopwatch, 1000));
    setStarted(true);
    setReseted(false);
  };

  // useEffect(() => {
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // }, [])

  const handleShare = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const stop = () => {
    clearInterval(int);
    setStarted(false);
  };

  const reset = () => {
    setTime({
      hrs: 0,
      min: 0,
      sec: 0,
    });
    stop();
    setReseted(true);
  };

  const stopwatch = () => {
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hrs++;
      min = 0;
    }
    sec++;
    if (sec.toString().length < 2) sec = "0" + sec;

    if (min.toString().length < 2) min = "0" + min;

    if (hrs.toString().length < 2) hrs = "0" + hrs;
    setTime({ sec: sec, min: min, hrs: hrs });
  };
  return (
    <>
      {/* <MetaDecorator title={"example title"}
        description={"example Description"}
        imageUrl={"https://picsum.photos/720/480"}
        imageAlt={"image of size 700 x 500"} /> */}

      <Helmet>
        <title>Metatags testing Title</title>
        <meta property="og:title" content="Metatags test Title Metatags test Title" />
        <meta property="og:image" content={"https://picsum.photos/1200/630"} />
        <meta property="og:description" content="Metatags testing Description Metatags testing Description Metatags testing Description Metatags testing Description" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://stopwatch-react-nine.vercel.app/" 
          // + window.location.pathname + window.location.search
        }
        />
      </Helmet>
      <MetaTags>
        
      </MetaTags>
      <h1>Stopwatch</h1>
      <p id="stopwatch">
        {time.hrs === 0 ? "00" : time.hrs} : {time.min === 0 ? "00" : time.min}{" "}
        : {time.sec === 0 ? "00" : time.sec}
      </p>
      <button onClick={start} disabled={started}>
        Start
      </button>
      <button onClick={reset} disabled={reseted}>
        Reset
      </button>
      <button onClick={stop} disabled={!started}>
        Stop
      </button>

      <Share2
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShare(1)
                        }}
                        className="share-icon"
                        color="#ED1B24"
                        fill="#ED1B24"
                      />

{expandedIndex === 1 && (
                      <span className="social-icons-div">
                        <EmailShareButton
                          url={"https://stopwatch-react-nine.vercel.app/"}
                          body={"body text"}
                        >
                          <span className="social-icon br" alt="">E</span>
                        </EmailShareButton>

                        <WhatsappShareButton url={"https://stopwatch-react-nine.vercel.app/"} quote={"Quote text"}>
                        <span className="social-icon br" alt="">W</span>
                        </WhatsappShareButton>

                        <TwitterShareButton url={"https://stopwatch-react-nine.vercel.app/"} title={"News"}>
                        <span className="social-icon br" alt="">T</span>
                        </TwitterShareButton>

                        <FacebookShareButton url={"https://stopwatch-react-nine.vercel.app/"} quote={"Quote text"}>
                        <span className="social-icon br" alt="">F</span>
                        </FacebookShareButton>
                        <a href="https://web.whatsapp.com/send?text= Please Visit https://stopwatch-react-nine.vercel.app/"  
rel="nofollow noopener" target="_blank"
className="share-icon">Share via Whatsapp</a>
                      </span>
                    )}

      {/* <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3224499592102052"
     data-ad-slot="2987459441"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins> */}
    </>
  );
}

export default App;
