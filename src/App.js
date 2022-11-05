import { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import { Header } from "./components/Header";
import ItemsList from "./components/ItemList";
import { NavBar } from "./components/NavBar";
import { items } from "./data";

function App() {
  const [ItemData, setItemData] = useState(items);
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]
  //console.log(allCategory);
  const filterCategory = (cat) => {
    if (cat === "الكل") {
      setItemData(items);
    } else {
      const newList = items.filter((item) => item.category == cat);
      setItemData(newList);
    }
  };

    const filterSearch = (word) => {
    if (word !== "") {
      const newList = items.filter((item) => item.title == word);
      setItemData(newList);
    }
  };
  return (
    <div className="color-body font">
      <NavBar filterSearch={filterSearch}/>
      <Container>
        <Header />
        <Category filterbyCategory={filterCategory} allCategory={allCategory}/>
        <ItemsList ItemData={ItemData} />
      </Container>
    </div>
  );
}

export default App;
