import React from "react";
import { ZonesProvider } from './ZonesContext';
import { AreasProvider } from './AreasContext';
import { StatusProvider } from './StatusContext';
import { PickupProvider } from './PickupContext';
import { ComplexProvider } from './ComplexContexts';
import { CouriersProvider } from './CouriersContext';
import { BranchesProvider } from './BranchesContext';
import { CustomerProvider } from './CustomersContext';
import { ShippmentsProvider } from './ShippmentsContexts';
import { UsersProvider } from "./UsersContext";
import { DynamicIdProvider } from "./DynamicIdContext";

const Contexts = ({ children }) => {
  return (
    <UsersProvider>
    <ZonesProvider>
      <AreasProvider>
        <StatusProvider>
          <BranchesProvider>
            <CustomerProvider>
              <CouriersProvider>
                <ComplexProvider>
                  <ShippmentsProvider>
                    <DynamicIdProvider>
                        <PickupProvider>
                            {children}
                        </PickupProvider>
                    </DynamicIdProvider>    
                  </ShippmentsProvider>
                </ComplexProvider>
              </CouriersProvider>
            </CustomerProvider>
          </BranchesProvider>
        </StatusProvider>
      </AreasProvider>
    </ZonesProvider>
    </UsersProvider>
  );
};

export default Contexts;
