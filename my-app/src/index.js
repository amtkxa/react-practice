import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Square ファンクショナルコンポーネント */
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

/* Board コンポーネント */
class Board extends React.Component {
    // コンストラクタ
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    // 正方形の状態を更新
    handleClick(i) {
        const squares = this.state.squares.slice();

        // 既に勝者が決まっていたり、もしくは既にクリックしたマス目であれば無視する
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        // 設定する記号の切り替え
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        // 状態の設定、次のプレイヤーの反転
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    // 正方形の描画
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    // 9個の Square コンポーネントを描画
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

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

// calculateWinner ファンクショナルコンポーネント
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
