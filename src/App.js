import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import bg from './images/motif.jpg'
import { Badge, Container } from 'react-bootstrap';
import { useState } from 'react';
import Company from './pages/Company';
import Zones from './pages/Zones';
import {AddingArea, AddingCourier, AddingZone, AddingCustomer, AddingSheet,AddingDeliverySheet, AddingBranchReturn, AddFlyerData, AddShipment, AddingInvoice} from './components/AddingCard';
import Areas from './pages/Areas';
import Couriers from './pages/Couriers';
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
import { CouriersProvider } from './contexts/CouriersContext';
import { CourierStatusUpdate, PendingSheets, ReturnStatusUpdate, Sheets, SheetsCollections } from './pages/Sheets';
import { Invoices } from './pages/Accounting';

function App() {
  const [activeNav, setActiveNav] = useState('مرحبا')
  return (
                  <ZonesProvider>
                    <AreasProvider>
                    <StatusProvider>
                    <BranchesProvider>
                    <CouriersProvider>
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
                  <Route path='/zones/add' element={<AddingZone />}/>
                  <Route path='/areas' element={<Areas />}/>
                  <Route path='/areas/add' element={<AddingArea />}/>
                  <Route path='/couriers' element={<Couriers />}/>
                  <Route path='/couriers/add' element={<AddingCourier />}/>
                  <Route path='/customers' element={<Customers />}/>
                  <Route path='/customers/add' element={<AddingCustomer />}/>
                  <Route path='/status' element={ <Status /> }/>
                  <Route path='/status/add' element={<AddingZone />}/>
                  <Route path='/branchs' element={<Branches />}/>
                  <Route path='/transfer' element={<Transfer />}/>
                  <Route path='/sheets/add/' element={<AddingSheet/>}/>
                  <Route path='/sheets/delivery/' element={<Sheets/>}/>
                  <Route path='/sheets/return/' element={<Sheets/>}/>
                  <Route path='/sheets/delivery/add' element={<AddingDeliverySheet/>}/>
                  <Route path='/sheets/return/add' element={<AddingDeliverySheet/>}/>
                  <Route path='/transferfrom' element={<TransferFrom/>}/>
                  <Route path='/branchreturn' element={<BranchReturn/>}/>
                  <Route path='/branchreturn/add' element={<AddingBranchReturn/>}/>
                  <Route path='/returnstatusupdate' element={<ReturnStatusUpdate/>}/>
                  <Route path='/pendingsheets' element={<PendingSheets/>}/>
                  <Route path='/courierstatusupdate' element={<CourierStatusUpdate/>}/>
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
                  <Route path='/accounting/multi' element={<ShipmentsMulti/>}/>
                  <Route path='/shipmentstatus' element={<ShipmentsStatus/>}/>
                  <Route path='/sheets/collections' element={<SheetsCollections/>}/>
                  <Route path='/accounting/add' element={<AddingInvoice/>}/>
                  <Route path='/accounting/invoices' element={<Invoices/>}/>
                </Routes>
          </Container>
          
        </Container>
      </main>
      <footer >
       <Footer />
      </footer>
    </div>
    </CouriersProvider>
    </BranchesProvider>
    </StatusProvider>
    </AreasProvider>
                  </ZonesProvider>
  );
}

export default App;
