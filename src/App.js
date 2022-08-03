import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import bg from './images/motif.jpg'
import { Badge, Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Company from './pages/Company';
import Zones from './pages/Zones';
import {AddingArea, AddingCourier, AddingZone, AddingCustomer, AddingDeliverySheet, AddingBranchReturn, AddFlyerData, AddShipment, AddingComplaint} from './components/AddingCard';
import Areas from './pages/Areas';
import Couriers from './pages/Couriers';
import { CustomersSearch, Tracking, Compltypes, Complgeha, Complaint, ComplaintArchive} from './pages/CustomerServices';
import Customers from './pages/Customers';
import Status from './pages/Status';
import Branches, { BranchReturn, Transfer, TransferFrom } from './pages/Branches';
import { ZonesProvider } from './contexts/ZonesContext';
import { AreasProvider } from './contexts/AreasContext';
import { StatusProvider } from './contexts/StatusContext';
import { BranchesProvider } from './contexts/BranchesContext';
import { CustomerPrices, DefaultPrices } from './pages/Prices';
import { AddPickup, CustomersFlyers, CustomersRequest, FlyersBalances, PickupList } from './pages/Pickup';
import { Shipments, ShipmentsImport, ShipmentsMulti, ShipmentsStatus } from './pages/Shipments';
import { ComplexProvider } from './contexts/ComplexContexts';
import { CouriersContext, CouriersProvider } from './contexts/CouriersContext';
import { CustomerProvider } from './contexts/CustomersContext';
import { ClientsBills, ClientsReserved, CourierSheet, FeesDuringPeriod, RptCustomers, ShipmentsDuringPeriod, SagelsRpt, StatementsRpt, GeneralLedeger, AccountsBalances, Myzan } from './pages/Reports';
import { BranchsStat, Entryrpt, RequestStat, ShipmentsStat, Statistics, ZonesStat } from './pages/Statistics';
import { CreateUser, URoles } from './pages/Admin';

function App() {
  const [activeNav, setActiveNav] = useState('مرحبا')
  return (
                  <ZonesProvider>
                    <AreasProvider>
                    <StatusProvider>
                    <BranchesProvider>
                    <CustomerProvider>
                    <CouriersProvider>
                    <ComplexProvider>
    <div className="App">
      <header>
        <NavBar setActiveNav={setActiveNav} />
      </header>
      <main style={{width: '100%'}}>
        <Container className='d-flex ' fluid>
          <Container className='m-auto border border-dark rounded  position-relative h-100 p-4'>
            <Badge className = 'active-nav position-absolute'>{activeNav}</Badge>
                <Routes>
                  <Route path='/company' element={<Company/>}/>

                  <Route path='/zones' element={<Zones />}/>
                  <Route path='/zones/add' element={<AddingZone nav='zones' labelName='اسم النطاق' />}/>
                  <Route path='/areas' element={<Areas />}/>
                  {<Route path='/areas/add' element={<AddingArea />}/>}
                  <Route path='/couriers' element={<Couriers />}/>
                  <Route path='/couriers/add' element={<AddingCourier />}/>
                  <Route path='/couriers/update/:id' element={<AddingCourier />}/>
                  <Route path='/customers' element={<Customers />}/>
                  <Route path='/customers/add' element={<AddingCustomer />}/>
                  <Route path='/customers/update/:id' element={<AddingCustomer />}/>
                  <Route path='/status' element={ <Status /> }/>
                  <Route path='/status/add' element={<AddingZone nav='status' labelName='اسم الحالة' />}/>
                  <Route path='/branchs' element={<Branches />}/>
                  <Route path='/transfer' element={<Transfer />}/>
                  <Route path='/sheets/delivery/add' element={<AddingDeliverySheet/>}/>
                  <Route path='/transferfrom' element={<TransferFrom/>}/>
                  <Route path='/branchreturn' element={<BranchReturn/>}/>
                  <Route path='/branchreturn/add' element={<AddingBranchReturn/>}/>
                  <Route path='/customerprices' element={<CustomerPrices/>}/>
                  <Route path='/defaultprices' element={<DefaultPrices/>}/>
                  <Route path='/pickupdata' element={<AddPickup/>}/>
                  <Route path='/pickuplist' element={<PickupList/>}/>
                  <Route path='/customersrequests' element={<CustomersRequest/>}/>
                  <Route path='/customersflyers' element={<CustomersFlyers/>}/>
                  <Route path='/customersflyers/add' element={<AddFlyerData/>}/>
                  <Route path='/flyersbalances' element={<FlyersBalances/>}/>
                  <Route path='/shipments' element={<Shipments/>}/>
                  <Route path='/shipments/add' element={<AddShipment/>}/>
                  <Route path='/shipments/import' element={<ShipmentsImport/>}/>
                  <Route path='/shipments/multi' element={<ShipmentsMulti/>}/>
                  <Route path='/customerservices/search' element={<CustomersSearch/>}/>
                  <Route path='/tracking' element={<Tracking/>}/>
                  <Route path='/customerservices/compltypes' element={<Compltypes/>}/>
                  <Route path='/customerservices/complgeha' element={<Complgeha/>}/>
                  <Route path='/customerservices/complaint/' element={<Complaint/>}/>
                  <Route path='/customerservices/complaint/archive' element={<ComplaintArchive/>}/>
                  <Route path='/customerservices/complaint/add' element={<AddingComplaint/>}/>
                  <Route path='/frmreports/RptCustomers' element={<RptCustomers/>}/>
                  <Route path='/frmreports/shipmentsduringperiod' element={<ShipmentsDuringPeriod/>}/>
                  <Route path='/frmreports/courierssheets' element={<CourierSheet/>}/>
                  <Route path='/frmreports/clientsreserved' element={<ClientsReserved/>}/>
                  <Route path='/frmreports/clientsbills' element={<ClientsBills/>}/>
                  <Route path='/frmreports/feesduringperiod' element={<FeesDuringPeriod/>}/>
                  <Route path='/frmreports/sagelsrpt' element={<SagelsRpt/>}/>
                  <Route path='/frmreports/statementsrpt' element={<StatementsRpt/>}/>
                  <Route path='/frmreports/generalledeger' element={<GeneralLedeger/>}/>
                  <Route path='/frmreports/accountsbalances' element={<AccountsBalances/>}/>
                  <Route path='/frmreports/myzan' element={<Myzan/>}/>
                  <Route path='/frmreports/myzania' element={<Myzan/>}/>
                  <Route path='/frmreports/income' element={<Myzan/>}/>
                  {
                  ['/','statistics','operations'].map(route => <Route path={route} element={<Statistics/>}/>
                  )}
                  <Route path='pickup/requeststat' element={<RequestStat/>}/>
                  <Route path='shipments/shipmentsstat' element={<ShipmentsStat/>}/>
                  <Route path='frmreports/zonesstat' element={<ZonesStat/>}/>
                  <Route path='frmreports/entryrpt' element={<Entryrpt/>}/>
                  <Route path='frmreports/branchsstat' element={<BranchsStat/>}/>
                  <Route path='Admin/URoles' element={<URoles/>}/>
                  <Route path='/Admin/CreateUser' element={<CreateUser/>}/>
                  
                  <Route path='*' element={<h1>SOON!!!!!!!!!!!!!!!!</h1>}/>
                </Routes>
          </Container>
          
        </Container>
      </main>
      <footer >
       <Footer />
      </footer>
    </div>
    </ComplexProvider>
    </CouriersProvider>
    </CustomerProvider>
    </BranchesProvider>
    </StatusProvider>
    </AreasProvider>
                  </ZonesProvider>
  );
}

export default App;
