import data from "./data.json";
import FoodList from "./food_div";
import "./day17.css";

function Day17() {
  return (
    <section className="day17ParentDiv">
      {data.map((food, id) => {
        console.log(food);
        return <FoodList key={id} props={food} />;
      })}
    </section>
  );
}

export default Day17;
