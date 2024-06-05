import React from "react";
import CardInfo from "./CardInfo";

interface PropsData {
  textCard: string;
  textCard2: string;
  image: string;
  row: boolean;
}

interface CardData {
  data: PropsData[];
}

function CardSection({ data }: CardData) {
  return (
    <div className="flex justify-center flex-col gap-20 md:gap-20 md:px-40 mt-20 bg-[#161b22] pt-10 pb-10 mb-20">
        <h2 className="text-white text-center text-4xl md:text-4xl lg:text-5xl font-bold lg:text-start">Elementos Clave</h2>
      <div className="flex flex-col justify-center gap-40">
        {data.map((item) => (
          <CardInfo
            firstText={item.textCard}
            secondText={item.textCard2}
            row={item.row}
            imagesExample={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
