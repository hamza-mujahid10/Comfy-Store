import { Outlet,useNavigation } from "react-router-dom";
import { Header } from "../components";
import {Navbar} from "../components";
import Loading from "../components/Loading";
const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading';
  return (
    <div>
      <Header /> 
      <Navbar />
      {isPageLoading ? (
        <Loading/>
      ) : (
        
      <section className="align-element py-20">
        <Outlet />
      </section>
      )
      }
    </div>
  );
};

export default HomeLayout;
