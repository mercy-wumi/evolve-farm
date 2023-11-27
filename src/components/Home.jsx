import { useState } from "react";

import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import user from "../assets/user.svg";

const datas = [
  {
    id: 1,
    computation: "Planting",
    date: "27-11-23",
    result: "Summer",
  },
  {
    id: 2,
    computation: "Harvest",
    date: "27-11-23",
    result: "Summer",
  },
  {
    id: 3,
    computation: "Planting",
    date: "27-11-23",
    result: "Summer",
  },
  {
    id: 4,
    computation: "Harvest",
    date: "27-11-23",
    result: "Summer",
  },
  {
    id: 5,
    computation: "Planting",
    date: "27-11-23",
    result: "Summer",
  },
  {
    id: 6,
    computation: "Harvest",
    date: "27-11-23",
    result: "Summer",
  },
];

const Home = () => {
  const style = {
    row: `py-3 pl-6 md:pl-8 text-left font-medium`,
    activeTab: "bg-primary text-white py-4 px-8 rounded-xl",
    inactiveTab:
      "border-primary border-[1px] text-primary py-4 px-8 rounded-xl",
    input: "block p-2 border-[1px] w-full rounded-lg mt-2 mb-1",
  };

  const [active, setActive] = useState("planting");

  const handleComputation = (tab) => {
    setActive(tab);
  };

  const [plantSeason, setPlantSeason] = useState({
    season: "",
    temperature: "",
    humidity: "",
    ph_level: "",
    water: "",
  });

  const [harvestSeason, setHarvestSeason] = useState({
    temperature: "",
    humidity: "",
    ph_level: "",
    water: "",
  });

  const handlePlantSeason = (e) => {
    e.preventDefault();
    console.log(plantSeason);
    setPlantSeason({
      season: "",
      temperature: "",
      humidity: "",
      ph_level: "",
      water: "",
    });
  };

  const handlePlant = (e) => {
    const { name, value } = e.target;
    setPlantSeason({
      ...plantSeason,
      [name]: value,
    });
  };

  const handleHarvestSeason = (e) => {
    e.preventDefault();
    console.log(harvestSeason);
    setHarvestSeason({
      temperature: "",
      humidity: "",
      ph_level: "",
      water: "",
    });
  };

  const handleHarvest = (e) => {
    const { name, value } = e.target;
    setHarvestSeason({
      ...harvestSeason,
      [name]: value,
    });
  };
  return (
    <div className="w-full">
      <nav className="flex justify-between items-center w-full">
        <span className="text-3xl text-primary">Welcome Shakira!</span>
        <div className="p-[6px] rounded-lg border-primary border-[1px] flex items-center w-[300px] gap-2">
          <img src={search} alt="search" />
          <input
            type="text"
            placeholder="Search.."
            className="w-full bg-[transparent] outline-none"
          />
        </div>
        <div className="flex gap-4 items-center justify-center">
          <img src={bell} alt="search" />
          <span>Shakira</span>
          <img src={user} alt="user profile" />
        </div>
      </nav>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-4 my-8 font-semibold">
        <div className="rounded-lg p-8 border-2 border-primary bg-[#0d5267] text-white">
          <p className="text-4xl">212</p>
          <span className="text-sm">Total Computaions</span>
        </div>
        <div className="rounded-lg p-8 border-2 border-primary">
          <p className="text-4xl">189</p>
          <span className="text-sm">Planting Computaions</span>
        </div>
        <div className="rounded-lg p-8 border-2 border-primary">
          <p className="text-4xl">19</p>
          <span className="text-sm">Harvest Computaions</span>
        </div>
        <div className="rounded-lg p-8 border-2 border-primary">
          <p className="text-4xl">5</p>
          <span className="text-sm">Incorrect Computaions</span>
        </div>
      </div>
      <div className="xl:flex gap-16">
        <div className="xl:w-1/2">
          <h3 className="text-3xl font-semibold">My Computations</h3>
          <div className="rounded-xl">
            <table className="w-full">
              <thead className="text-lightGray border-b-[1px] border-gray font-bold">
                <tr>
                  <th className={style.row}>#</th>
                  <th className={style.row}>Computations</th>
                  <th className={style.row}>Date</th>
                  <th className={style.row}>Results</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data) => (
                  <tr key={data.id} className="hover:bg-[#c6dcd767]">
                    <td className={style.row}>{data.id}</td>
                    <td className={`${style.row} text-[15px]`}>
                      {data.computation}
                    </td>
                    <td className={style.row}>{data.date}</td>
                    <td className={style.row}>{data.result}</td>
                    <td className={`${style.row} pr-0`}>
                      <button className="bg-gradient-to-r from-[#0a4f74] to-[#3f740a] text-white px-3 py-2 rounded-full mr-4">
                        view details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="xl:w-1/2">
          <p className="font-semibold">
            Check the best time to plant and harvest your crops below
          </p>
          <div className="flex gap-8 mt-4">
            <button
              className={
                active === "planting" ? style.activeTab : style.inactiveTab
              }
              onClick={() => handleComputation("planting")}
            >
              Time to Plant
            </button>
            <button
              className={
                active === "harvest" ? style.activeTab : style.inactiveTab
              }
              onClick={() => handleComputation("harvest")}
            >
              Time to Harvest
            </button>
          </div>
          {active === "planting" && (
            <form className="bg-white p-8 rounded-3xl shadow-lg mt-8 w-5/6">
              <div>
                <label>Season</label>
                <select
                  name="season"
                  value={plantSeason.season}
                  onChange={handlePlant}
                  className={style.input}
                >
                  <option value="">Select Season</option>
                  <option value="rainy">Rainy</option>
                  <option value="summer">Summer</option>
                  <option value="winter">Winter</option>
                  <option value="spring">Spring</option>
                </select>
              </div>
              <div>
                <label>Temperature</label>
                <input
                  type="text"
                  placeholder=""
                  name="temperature"
                  value={plantSeason.temperature}
                  onChange={handlePlant}
                  className={style.input}
                />
              </div>
              <div>
                <label>Humidity</label>
                <input
                  type="text"
                  placeholder=""
                  name="humidity"
                  value={plantSeason.humidity}
                  onChange={handlePlant}
                  className={style.input}
                />
              </div>
              <div>
                <label>PH Level</label>
                <select
                  name="ph_level"
                  value={plantSeason.ph_level}
                  onChange={handlePlant}
                  className={style.input}
                >
                  <option value="">Select PH level</option>
                  <option value="acidic">Acidic</option>
                  <option value="alkaline">Alkaline</option>
                  <option value="neutral">Neutral</option>
                </select>
              </div>
              <div>
                <label>Water Availability</label>
                <select
                  name="water"
                  value={plantSeason.water}
                  onChange={handlePlant}
                  className={style.input}
                >
                  <option value="">Select Water Availability</option>
                  <option value="low">Low</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button
                className="rounded-2xl bg-primary text-white px-10 py-2 mx-auto flex justify-center items-center mt-12 shadow-2xl"
                type="submit"
                onClick={handlePlantSeason}
              >
                Submit
              </button>
            </form>
          )}
          {active === "harvest" && (
            <form className="bg-white p-8 rounded-3xl shadow-lg mt-8 w-5/6">
              <div>
                <label>Temperature</label>
                <input
                  type="text"
                  placeholder=""
                  name="temperature"
                  value={harvestSeason.temperature}
                  onChange={handleHarvest}
                  className={style.input}
                />
              </div>
              <div>
                <label>Humidity</label>
                <input
                  type="text"
                  placeholder=""
                  name="humidity"
                  value={harvestSeason.humidity}
                  onChange={handleHarvest}
                  className={style.input}
                />
              </div>
              <div>
                <label>PH Level</label>
                <select
                  name="ph_level"
                  value={harvestSeason.ph_level}
                  onChange={handleHarvest}
                  className={style.input}
                >
                  <option value="">Select PH level</option>
                  <option value="acidic">Acidic</option>
                  <option value="alkaline">Alkaline</option>
                  <option value="neutral">Neutral</option>
                </select>
              </div>
              <div>
                <label>Water Availability</label>
                <select
                  name="water"
                  value={harvestSeason.water}
                  onChange={handleHarvest}
                  className={style.input}
                >
                  <option value="">Select Water Availability</option>
                  <option value="low">Low</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button
                className="rounded-2xl bg-primary text-white px-10 py-2 mx-auto flex justify-center items-center mt-12 shadow-2xl"
                type="submit"
                onClick={handleHarvestSeason}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
