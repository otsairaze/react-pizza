import React from "react";
import Card from "../scss/components/Card/Card";
import Sort from "../scss/components/Sort/Sort";
import Categories from "../scss/components/Categories/Categories";
import Skeleton from "../scss/components/Card/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://65c3afef39055e7482c16929.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}&order=desc`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((index) => <Skeleton key={index} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
