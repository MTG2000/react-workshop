import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  var name = "Ahmad";

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />

      {/* Page Container */}
      <div className="page-container">
        {/* Articles List */}
        <ArticlesList />
      </div>
    </div>
  );
}

export default App;
