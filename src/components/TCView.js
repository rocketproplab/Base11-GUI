import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const URL = 'ws://localhost:8000';

export default class PTView extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            t1: 0,
            t2: 0,
            t3: 0,
            t4: 0,
            t5: 0,
            t6: 0,
            t7: 0,
            t8: 0
		}

        this.rows = [
          this.createData("TC1", this.state.t1),
          this.createData("TC2", this.state.t2),
          this.createData("TC3", this.state.t3),
          this.createData("TC4", this.state.t4),
          this.createData("TC5", this.state.t5),
          this.createData("TC6", this.state.t6),
          this.createData("TC7", this.state.t7),
          this.createData("TC8", this.state.t8)
        ];
	}

    useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    divStyle = {
        marginRight: "15px"
    };
    
    ws = new WebSocket(URL)

    componentDidMount() {
		this.ws.onopen = () => {
      		console.log('temperature module connected')
    	}
		
		this.ws.onmessage = evt => {
			var newData = JSON.parse(evt.data)
			console.log(newData)
      		this.setState({
                t1: newData.TC1,
                t2: newData.TC2,
                t3: newData.TC3,
                t4: newData.TC4,
                t5: newData.TC5,
                t6: newData.TC6,
                t7: newData.TC7,
                t8: newData.TC8
			});
    	};
	}

    createData = function (sensor, readout) {
      return { sensor, readout };
    }

    render () {
        return (
          <TableContainer component={Paper} style={this.divStyle}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Readout</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" align="center">
                      {row.sensor}
                    </TableCell>
                    <TableCell align="center">{row.readout}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
    }
}
