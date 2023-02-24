import "./Library.css";
import back_img from "../LibBackground.png";
import { useState } from "react";
import card_img from "../card.jpg";

function Library() {
  const [search, setSearch] = useState("");

  const myStyle = {
    backgroundImage: `url(${back_img})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: 40,
    alignItems: "center",
  };

  const transStyle = {
    backgroundColor: "#595B60",
    opacity: 0.94,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    borderRadius: 10,
    height: 700,
  };

  const inputFieldStyle = {
    width: "90%",
    paddingLeft: "15%",
    paddingRight: "10%",
  };

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: 20 }}
          class="w-full"
        >
          کتابخانه
        </p>

        <div class="col s2 z-depth-6 card-panel">
          <div style={inputFieldStyle}>
            <div class="grid gap-6 mb-6 md:grid-cols-3">
              <span class="column">
                <button
                  class="bg-emerald-300 hover:bg-emerald-400 text-white px-8 py-1 rounded-full"
                  style={{
                    width: 200,
                  }}
                >
                  اعمال
                </button>
              </span>

              <span class="column">
                <button
                  class="bg-emerald-300 hover:bg-emerald-400 text-white px-8 py-1 rounded-full"
                  style={{
                    width: 200,
                  }}
                >
                  فیلتر
                </button>
              </span>

              <span class="column">
                <form>
                  <input
                    type="text"
                    id="search"
                    class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                    placeholder="جستجو"
                    value={search}
                    required
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                    style={{
                      width: 350,
                    }}
                  ></input>
                </form>
              </span>
            </div>

            <div class="grid gap-3 mb-6 md:grid-cols-4">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={card_img}
                  alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                  <div class="font-bold text-xl mb-2">Lib Name</div>
                </div>
                <div class="px-6 bg-zinc-300">
                  <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Type
                  </span>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={card_img}
                  alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                  <div class="font-bold text-xl mb-2">Lib Name</div>
                </div>
                <div class="px-6 bg-zinc-300">
                  <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Type
                  </span>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={card_img}
                  alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                  <div class="font-bold text-xl mb-2">Lib Name</div>
                </div>
                <div class="px-6 bg-zinc-300">
                  <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Type
                  </span>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={card_img}
                  alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                  <div class="font-bold text-xl mb-2">Lib Name</div>
                </div>
                <div class="px-6 bg-zinc-300">
                  <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Type
                  </span>
                </div>
              </div>

              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={card_img}
                  alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                  <div class="font-bold text-xl mb-2">Lib Name</div>
                </div>
                <div class="px-6 bg-zinc-300">
                  <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Type
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
