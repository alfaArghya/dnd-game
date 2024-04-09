import Card from "../ui/Card";
import Fan from "../../assets/TableFan.png";
import Wire from "../../assets/Wire.png";
import Refrigerator from "../../assets/Refrigerator.png";
import Switch from "../../assets/WallSwitch.png";
import ElectricSocket from "../../assets/WallOutlet.png";
import AC from "../../assets/AC.png";
import Nail from "../../assets/nail.png";
import Battery from "../../assets/9vBattery.png";
import HomeBattery from "../../assets/HomeBattery.png";

const CardZone = () => {
  return (
    <div className="w-11/12 h-5/6 shadow-md shadow-cyan-500/50  rounded-lg grid grid-cols-3 grid-rows-3 gap-4 px-8 py-5">
      <Card imgSrc={Fan} cardName="Fan" />
      <Card imgSrc={Wire} cardName="Wire" />
      <Card imgSrc={Refrigerator} cardName="Refrigerator" />
      <Card imgSrc={Switch} cardName="Switch" />
      <Card imgSrc={ElectricSocket} cardName="Electric Socket" />
      <Card imgSrc={AC} cardName="AC" />
      <Card imgSrc={Nail} cardName="Nail" />
      <Card imgSrc={Battery} cardName="Battery" battery={true} />
      <Card imgSrc={HomeBattery} cardName="Home Battery" />
    </div>
  );
};

export default CardZone;
