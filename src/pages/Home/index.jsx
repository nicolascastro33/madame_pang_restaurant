import HomeAward from "../../components/HomeComponents/HomeAward";
import HomeMenu from "../../components/HomeComponents/HomeMenu";
import HomeRestaurant from "../../components/HomeComponents/HomeRestaurant";
import HomeTeam from "../../components/HomeComponents/HomeTeam";
import { SectionsWrapper } from "./style";

function Home() {
  
  return (
    <SectionsWrapper>
      <HomeRestaurant/>
      <HomeMenu/>
      <HomeTeam/>
      <HomeAward/>
    </SectionsWrapper>
  );
}

export default Home;
