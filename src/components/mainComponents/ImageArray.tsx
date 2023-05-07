
type props = {
    props : string
}
type imgArr = {
    [key:string] : number[]
}
const ImageArray = ({props}:props) => {
  const imgArr : imgArr = {
    "a": [0, 1, 2, 0],
    "b": [3, 4, 4, 4],
    "c": [5, 6, 6, 6],
    "d": [6, 6, 6, 6],
    "e": [7, 8, 8, 8],
    "f": [8, 9, 9, 9],
    "g": [10, 11, 11, 11],
  };
  return (
    <div>
      {imgArr[props].map((v, idx) => {
        return (
          <img
            src={`${process.env.PUBLIC_URL}/assets/main/main_food_${v}.jpeg`}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default ImageArray;