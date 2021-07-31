import Boxes from "./day16";

function Day16() {
  return (
    <div className="day16">
      {/* <Boxes /> */}
      {[...Array(81)].map((i) => (
        <Boxes />
      ))}
    </div>
  );
}

export default Day16;
