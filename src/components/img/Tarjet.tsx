import tarjets from "../../assets/tarjets.svg";

const Tarjet = () => {
  return (
    <div className="flex justify-center w-full absolute bottom-0">
      <img src={tarjets} alt="tarjets" width={600} height={600} />
    </div>
  );
};

export default Tarjet;
