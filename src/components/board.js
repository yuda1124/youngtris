import React from 'react';

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.initializeBoard()
        }
    }

    initializeBoard() {
        let board = [];
        for (var i = 0; i < 20; i++) {
            board.push(new Array(10).fill(0));
        }
        return board;
    }


    renderBoard() {
        return (
            <table style={{width: 250, height: 400, border: '1px solid green'}}>
                {
                    this.state.status.map((line, i) => {
                        return (
                            <tr key={"line"+i}>
                                {
                                    line.map((block, j) => {
                                        return (
                                            <td key={"block"+i+j} style={{width: 25, height: 20, backgroundColor: 'white'}}/>
                                        )
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </table>
        )
    }

    render(){
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                {this.renderBoard()}
            </div>
        );
    }
}