import "./scss/app.scss";
import Card from "./scss/components/Card/Card";
import Categories from "./scss/components/Categories/Categories";
import Header from "./scss/components/Header/Header";
import Sort from "./scss/components/Sort/Sort";
import pizzas from "./pizzas.json";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj) => (
                <Card
                  title={obj.title}
                  price={obj.price}
                  image={obj.imageUrl}
                  sizes={obj.sizes}
                  types={obj.types}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
