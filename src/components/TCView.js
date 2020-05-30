import React from 'react';
import MaterialTable from 'material-table';

export default class PTView extends React.Component {
    render () {
        return (
            <MaterialTable
                columns={[
                    { title: 'Sensor', field: 'sensor' },
                    { title: 'Readout', field: 'readout', type: 'numeric' },
                ]}
                data={[
                    { sensor: 'TC1', readout: this.props.TC1_readout },
                    { sensor: 'TC2', readout: this.props.TC2_readout },
                    { sensor: 'TC3', readout: this.props.TC3_readout },
                    { sensor: 'TC4', readout: this.props.TC4_readout },
                    { sensor: 'TC5', readout: this.props.TC5_readout },
                    { sensor: 'TC6', readout: this.props.TC6_readout },
                    { sensor: 'TC7', readout: this.props.TC7_readout },
                    { sensor: 'TC8', readout: this.props.TC8_readout },
                ]}
                components={{
                    Toolbar: props => (
                        <div>
                        </div>
                    ),
                }}
                options={{
                    search: false,
                    selection: false,
                    paging: false,
                    sorting: false,
                    headerStyle: {
                        fontSize: '20px',
                        textAlign: 'center',
                        backgroundColor: '#bdbdbd',
                        color: '#FFF'
                    },
                    cellStyle: {
                        textAlign: 'center',
                    }
                }} />
        )
    }
}
