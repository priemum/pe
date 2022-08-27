import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import bg from './images/motif.jpg'
import { Badge, Container } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import Company from './pages/Company';
import Zones from './pages/Zones';
import {AddingArea, AddingCourier, AddingZone, AddingCustomer, AddingDeliverySheet, AddingBranchReturn, AddFlyerData, AddShipment, AddingComplaint, AddingInvoice} from './components/AddingCard';
import Areas from './pages/Areas';
import Couriers from './pages/Couriers';
import { CustomersSearch, Tracking, Compltypes, Complgeha, Complaint, ComplaintArchive} from './pages/CustomerServices';
import Customers from './pages/Customers';
import Status from './pages/Status';
import Branches, { BranchReturn, Transfer, TransferFrom } from './pages/Branches';
import { CustomerPrices, DefaultPrices } from './pages/Prices';
import { AddPickup, CustomersFlyers, CustomersRequest, FlyersBalances, PickupList } from './pages/Pickup';
import { Shipments, ShipmentsImport, ShipmentsMulti, ShipmentsStatus } from './pages/Shipments';
import { CustomerContext } from './contexts/CustomersContext';
import { ClientsBills, ClientsReserved, CourierSheet, FeesDuringPeriod, RptCustomers, ShipmentsDuringPeriod, SagelsRpt, StatementsRpt, GeneralLedeger, AccountsBalances, Myzan } from './pages/Reports';
import { BranchsStat, Entryrpt, RequestStat, ShipmentsStat, Statistics, ZonesStat } from './pages/Statistics';
import { AddingGroup, CreateUser, URoles, Users } from './pages/Admin';
import ClientNavBar from './pages/clients/components/ClientNavBar';
import Home from './pages/clients/Home';
import ShippingPrice from './pages/clients/ShippingPrice';
import Sign from './pages/clients/Sign';
import { NewPickupRequst, CustomerPickupList } from './pages/clients/PickupRequst';
import NewShipReqeust from './pages/clients/NewShipReqeust';
import ImportExel from './pages/clients/ImportExel';
import { ClientShipmentsSearch } from './pages/clients/ClientShipments';
import { UsersContext } from './contexts/UsersContext';
function App() {
  const [activeNav, setActiveNav] = useState('مرحبا')
  const [userCustomer, setUserCustomer] = useState()
  const [customer, setCustomer] = useState()
  const [customers] = useContext(CustomerContext)
  const [users] = useContext(UsersContext)
  const ProtectedRoute = ({ children , customer, setCustomer, users, nav}) => {
    const navigate = useNavigate()
    useEffect(() => {
      !customer && navigate(`${nav}login`)
    },[])
      if (!customer) {
      return <Routes><Route path={`${nav}login`} element={<Sign setCustomer={setCustomer} users={users} nav={nav}/>}/></Routes>
     
    }
    
    return children;
  };

  return (
                 
    <div className="App">
      <header>
      {/*condition to make NavBar disappear if we in login route*/}
        {window.location.href.indexOf('api') > -1 ?
        userCustomer ? <ClientNavBar setActiveNav={setActiveNav} /> : <></>
      :
      customer ? <NavBar setActiveNav={setActiveNav} /> : <></>
      }
      </header>
      <main style={{width: '100%'}}>
        <Container className='d-flex ' fluid>
          <Container className='m-auto border border-dark rounded  position-relative h-100 p-4'>
            <Badge className = 'active-nav position-absolute'>{activeNav}</Badge>
            
            {window.location.href.indexOf('api') <= -1 ?  
            <ProtectedRoute customer={customer} setCustomer={setCustomer}
            users={users || []} nav='/'>
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
                  <Route path='/shippments' element={<Shipments/>}/>
                  <Route path='/shippments/add' element={<AddShipment/>}/>
                  <Route path='/shippments/add/:id' element={<AddShipment/>}/>
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
                  <Route path='/Admin/CreateUser/:id' element={<CreateUser/>}/>
                  <Route path='/Admin/Users' element={<Users/>}/>
                  <Route path='/Admin/RoleData' element={<AddingGroup/>}/>
                  <Route path='/accounting/add' element={<AddingInvoice/>}/>
                  
                  <Route path='*' element={<h1>SOON!!!!!!!!!!!!!!!!</h1>}/>
                </Routes>
                </ProtectedRoute>
            : 
            <ProtectedRoute customer={userCustomer} setCustomer={setUserCustomer}
            users={customers || []} nav='/api/'>
            <Routes>
              <Route path='/api' element={userCustomer ? <Home /> : <Navigate to="/api/login" replace />} />
              <Route path='/api/pricelist' element={<ShippingPrice user={userCustomer}/>} />
              <Route path='/api/pickupdata' element={<NewPickupRequst user={userCustomer}/>} />
              <Route path='/api/pickuplist' element={<CustomerPickupList user={userCustomer}/>} />
              <Route path='/api/newshipment' element={<NewShipReqeust user={userCustomer}/>} />
              <Route path='/api/importexel' element={<ImportExel user={userCustomer}/>} />
              <Route path='/api/shippmentsearch' element={<ClientShipmentsSearch user={userCustomer}/>} />
            </Routes> 
            </ProtectedRoute>
             
            }
          </Container>
          
        </Container>
      </main>
      <footer >
       <Footer />
      </footer>
    </div>
    
  );
}



export default App;
