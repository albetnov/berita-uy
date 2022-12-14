import Topbar from "./Components/Topbar/Topbar";
import { Routes, Route } from "@solidjs/router";
import { Toaster } from "solid-toast";
import News from "./Pages/News";
import { techNews, techRecon, techReview, techSetup, techTips } from "./Utils/Tech";
import { consoleGames, gamesNews, gamesReview, lazyTalk, pcGames } from "./Utils/Games";
import Detail from "./Pages/Detail";

export default function App() {
  return (
    <>
      <Toaster />
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={<News firstMethod={techRecon} secondMethod={pcGames} title="Hot News" />}
        />
        <Route path="/detail/*key" component={Detail} />
        <Route
          path="/tech/news"
          element={<News firstMethod={techNews} secondMethod={null} title="Tech News" />}
        />
        <Route
          path="/tech/setup"
          element={<News firstMethod={techSetup} secondMethod={null} title="Tech Setup" />}
        />
        <Route
          path="/tech/review"
          element={<News firstMethod={techReview} title="Tech Review" secondMethod={null} />}
        />
        <Route
          path="/tech/tips"
          element={<News title="Tech Tips" firstMethod={techTips} secondMethod={null} />}
        />
        <Route
          path="/games/news"
          element={<News title="Games News" firstMethod={gamesNews} secondMethod={null} />}
        />
        <Route
          path="/games/review"
          element={<News firstMethod={gamesReview} title="Games Review" secondMethod={null} />}
        />
        <Route
          path="/games/console"
          element={<News firstMethod={consoleGames} title="Console Games" secondMethod={null} />}
        />
        <Route
          path="/games/pc"
          element={<News title="PC Games" firstMethod={pcGames} secondMethod={null} />}
        />
        <Route
          path="/games/lazy"
          element={<News firstMethod={lazyTalk} title="Lazy Talk" secondMethod={null} />}
        />
      </Routes>
    </>
  );
}
