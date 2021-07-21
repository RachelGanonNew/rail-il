import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ReactGoogleMap from '../ReactGoogleMap';
import {DELIVERED, ON_THE_WAY, TRANSPORTATION_NUMBER, CUSTOMER_NUMBER, NAME, FROM, TO, STATUS} from '../../Common/consts';
import './index.scss';

function TransportationTable(props) {

  const [selectedRow, setSelectedRow] = useState('');

  function statusFormatter(row) {
    return row ? DELIVERED : ON_THE_WAY;
  };

  function getUpdatedList() {
    const updatedList = [];
    if (props.list) {
      props.list.forEach(item => {
        const newItem = {
          id: item.id,
          customerId: item.customerId,
          name: item.name,
          from: `${item.fromLatitude} / ${item.fromLongitude}` ,
          to: `${item.toLatitude} / ${item.toLongitude}`,
          isArrived: item.isArrived
        }
        updatedList.push(newItem);
      })
    }
    return updatedList;
  };

  const handleOnSelect= (row, isSelect) => {
    if (isSelect) {
      const {list} = props;
      setSelectedRow(list[row.id]);
    }
  };

  const columns = [
    { dataField: "id", text: TRANSPORTATION_NUMBER, align: 'center' },
    { dataField: "customerId", text: CUSTOMER_NUMBER, align: 'center' },
    { dataField: "name", text: NAME },
    { dataField: "from", text: FROM },
    { dataField: "to", text: TO },
    { dataField: "isArrived", text: STATUS, formatter: statusFormatter },
  ];

  const options = {
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    sizePerPageList: [
      { text: '7', value: 7 },
      { text: '10', value: 10 },
      { text: '15', value: 15 }
    ]
  };

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: handleOnSelect,
    style: { backgroundColor: '#c8e6c9' }
  };

  return (
    <div>
      <div className="containTable" >
        <BootstrapTable
          keyField="id"
          data={getUpdatedList()}
          columns={columns}
          pagination={paginationFactory(options)}
          selectRow={ selectRow }
        />
      </div>
      { selectedRow && <ReactGoogleMap row={selectedRow}/> }

    </div>
  );
}

TransportationTable.propTypes = {
  list: PropTypes.array,
  text: PropTypes.object,
};

export default (TransportationTable);