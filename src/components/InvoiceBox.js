import React from 'react';
import InvoicesTable from './InvoicesTable'

const InvoiceBox = (props) => {

  console.log('heeey', props)
  return ( 
      <InvoicesTable invoices={props.invoices} />
   );
}
 
export default InvoiceBox;