import React from 'react';
import MaterialTable from 'material-table';

export default class PTView extends React.Component {
    render () {
        return (
            <MaterialTable
                columns={[
                    { title: 'Sensor', field: 'sensor' },
                    { title: 'Switch Status', field: 'ss' , lookup: {0: 'Low', 1: 'High'}},
                    { title: 'Readout', field: 'readout', type: 'numeric' },
                ]}
                data={[
                    { sensor: 'PT1', ss: this.props.PT1_ss, readout: this.props.PT1_readout },
                    { sensor: 'PT2', ss: this.props.PT2_ss, readout: this.props.PT2_readout },
                    { sensor: 'PT3', ss: this.props.PT3_ss, readout: this.props.PT3_readout },
                    { sensor: 'PT4', ss: this.props.PT4_ss, readout: this.props.PT4_readout },
                    { sensor: 'PT5', ss: this.props.PT5_ss, readout: this.props.PT5_readout },
                    { sensor: 'PT6', ss: this.props.PT6_ss, readout: this.props.PT6_readout },
                    { sensor: 'PT7', ss: this.props.PT7_ss, readout: this.props.PT7_readout },
                    { sensor: 'PT8', ss: this.props.PT8_ss, readout: this.props.PT8_readout },
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
