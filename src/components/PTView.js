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
            ss_1: data.PT1_ss,
            ss_2: data.PT2_ss,
            ss_3: data.PT3_ss,
            ss_4: data.PT4_ss,
            ss_5: data.PT5_ss,
            ss_6: data.PT6_ss,
            ss_7: data.PT7_ss,
            ss_8: data.PT8_ss,
            r1: data.PT1_readout,
            r2: data.PT2_readout,
            r3: data.PT3_readout,
            r4: data.PT4_readout,
            r5: data.PT5_readout,
            r6: data.PT6_readout,
            r7: data.PT7_readout,
            r8: data.PT8_readout
		}

        this.rows = [
          this.createData("PT1", this.state.ss_1, this.state.r1),
          this.createData("PT2", this.state.ss_2, this.state.r2),
          this.createData("PT3", this.state.ss_3, this.state.r3),
          this.createData("PT4", this.state.ss_4, this.state.r4),
          this.createData("PT5", this.state.ss_5, this.state.r5),
          this.createData("PT6", this.state.ss_6, this.state.r6),
          this.createData("PT7", this.state.ss_7, this.state.r7),
          this.createData("PT8", this.state.ss_8, this.state.r8)
        ];
	}

    useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    divStyle = {
        marginLeft: "15px"
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

    createData = function (sensor, ss, readout) {
      if (ss == 1) {
          ss = 'High'
      } else {
          ss = 'Low'
      }
      return { sensor, ss, readout };
    }

    render () {
        return (
          <TableContainer component={Paper} style={this.divStyle}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Switch Status</TableCell>
                  <TableCell align="center">Readout</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" align="center">
                      {row.sensor}
""                    </TableCell>
                    <TableCell align="center">{row.ss}</TableCell>
                    <TableCell align="center">{row.readout}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
    }
}
