import Divider from "./components/Divider";
import Header from "./components/Header";
import InfoManagementSection from "./components/InfoManagementCard";
import KronosApp from "./components/KronoApp";
import SecondaryHeader from "./components/SecodaryHeader";
import AboutSolution from "./components/Container";
import KronosFood from "./components/KronosFood"
import KronosVendas from "./components/KronosVendas";
import IntegrationPOS from "./components/IntegrationPOS";
export default function HomeView() {



 return(
   <section>
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

    <section>
        <div id="secondary-header">
            <SecondaryHeader />
        </div>
        <div>
            <KronosApp />
        </div>
        <div>
          <KronosFood />
        </div>
        <div>
          <KronosVendas />
        </div>
        <div>
          <IntegrationPOS />
        </div>
    </section>
   </section>
 )
}