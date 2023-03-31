import HomeAward from "../../components/HomeComponents/HomeAward";
import HomeMenu from "../../components/HomeComponents/HomeMenu";
import HomeRestaurant from "../../components/HomeComponents/HomeRestaurant";
import HomeTeam from "../../components/HomeComponents/HomeTeam";
import "./styles.css"

function Home() {
  
  return (
      <div className="sectionWrapper">
        <HomeRestaurant/>
        <HomeMenu/>
        <HomeTeam/>
        <HomeAward/>
      </div>
  );
}

export default Home;
