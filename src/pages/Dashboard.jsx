import { Outlet, Link } from "react-router-dom";

import home from "../assets/home.svg";
import help from "../assets/help.svg";
import community from "../assets/community.svg";
import setting from "../assets/setting.svg";
import logout from "../assets/logout.svg";

const Dashboard = () => {
  const style = {
    active_menu: "bg-white text-primary",
    menu_list: "py-2 px-8 flex items-center text-white mb-4",
  };
  return (
    <div className="flex w-screen h-screen">
      <div className="w-[300px] p-8 h-screen bg-primary">
        <Link to="/">
          <p className="text-2xl font-bold text-center text-white mb-8">
            Evolve Farm
          </p>
        </Link>
        <ul>
          <li
            className={style.menu_list}
            style={{
              background: "white",
              color: "#0d5c63",
              borderRadius: "4px",
            }}
          >
            <img src={home} alt="home" className="mr-3" />
            Home
          </li>
          <li className={style.menu_list}>
            <img src={help} alt="home" className="mr-3" />
            Help
          </li>
          <li className={style.menu_list}>
            <img src={community} alt="home" className="mr-3" />
            Community
          </li>
          <li className={style.menu_list}>
            <img src={setting} alt="home" className="mr-3" />
            Setting
          </li>
          <li className={style.menu_list}>
            <img src={logout} alt="home" className="mr-3" />
            Logout
          </li>
        </ul>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
