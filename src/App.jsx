import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  //   API Call
  const getQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      let randNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randNum]);
    } catch (error) {
      consloe.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center bg-gray-500">
      <div className="m-auto flex h-[300px] w-[400px] flex-col items-center justify-around rounded-lg bg-gray-400">
        <div className="flex h-[200px] w-[300px] flex-col justify-around py-4">
          <h2 className="text-lg italic">"{quotes.text}"</h2>
          <p className="text-base font-bold">{quotes.author}</p>
        </div>
        <div className="flex w-full justify-around">
          <button
            className="mx-1 w-[120px] cursor-pointer rounded-lg border border-transparent bg-[#1a1a1a] p-2 text-base font-medium text-neutral-200 transition-colors hover:border-[#646cff]"
            onClick={getQuote}
          >
            New Quote
          </button>
          <button className="mx-1 w-[120px] cursor-pointer rounded-lg border border-transparent bg-[#1a1a1a] p-2 text-base font-medium text-white transition-colors hover:border-[#646cff]">
            <a
              href={`https://twitter.com/intent/tweet?text='_${encodeURIComponent(
                quotes.text
              )}_'%0A%0A_${encodeURIComponent(quotes.author)}_`}
              target="blank"
              rel="noopener noreferrer"
              className="text-[#646cff] hover:text-[#535bf2]"
            >
              Tweet
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
