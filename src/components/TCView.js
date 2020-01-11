import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const heartbeat = 1000;
var data = require("../data");

export default class PTView extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            t1: data.TC1,
            t2: data.TC2,
            t3: data.TC3,
            t4: data.TC4,
            t5: data.TC5,
            t6: data.TC6,
            t7: data.TC7,
            t8: data.TC8
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

    componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			heartbeat
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
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
