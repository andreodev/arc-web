import Layout from "../../components/Layout";
import BottomBar from "./components/Bottom";
import Divider from "./components/Divider";
import Header from "./components/Header";
import InfoManagementSection from "./components/InfoManagementCard";
import AboutSolution from "./components/SecondCard";

export default function HomeView() {
 return(
   <Layout>
    <div>
     <Header />  
    </div>
    <div>
      <AboutSolution />   
    </div>
    <div>
      <InfoManagementSection />
    </div>
    <div>
      <Divider />
    </div>
    <div>
      <BottomBar />
    </div>
   </Layout>
 )
}