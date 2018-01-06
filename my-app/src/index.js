import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Square コンポーネント */
class Square extends React.Component {
    // コンストラクタ
    constructor() {
        super();
        this.state = {
            value: null,
        };
    }

    // <button>をレンダリングする
    render() {
        return (
            <button className="square" onClick={() => this.setState({ value: 'X' })}>
                {this.state.value}
            </button>
        );
    }
}

/* Board コンポーネント */
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    // 9個の Square コンポーネントをレンダリングする
    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

/* Game コンポーネント */
class Game extends React.Component {
    // Board を一つレンダリングする
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
