
interface CardData {
    firstText:string
    secondText:string
    imagesExample:string
    row:boolean
  }
  
 
function CardInfo({firstText , secondText, row , imagesExample}:CardData) {
  return (
    <div
      className={`flex flex-col gap-10 items-center text-center lg:text-start  lg:flex lg:items-center ${
        row ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <img
        className="w-[300px] lg:max-w-[300px] rounded-lg shadow-2xl shadow-gray-950"
        src={imagesExample}
        alt=""
      />
      <div className="flex flex-col gap-10 max-w-[400px] lg:max-w-[800px]">
        <p className="text-white text-xl font-bold lg:text-lg">{firstText}</p>
        <p className="text-white text-xl font-bold lg:text-lg">{secondText}</p>
      </div>
    </div>
  );
}

export default CardInfo;
