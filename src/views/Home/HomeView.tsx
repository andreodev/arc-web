import Layout from "../../components/Layout";
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
   </Layout>
 )
}