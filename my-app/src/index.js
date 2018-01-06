import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* （子）Square コンポーネント */
class Square extends React.Component {
    // ボタンの描画
    render() {
        return (
            // 呼び出し元の（親）BoardのonClickイベントを起動する
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

/* （親）Board コンポーネント */
class Board extends React.Component {
    // コンストラクタ
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),   // 正方形9つ分（初期値：null）
        };
    }

    // 正方形の状態を更新
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares: squares });
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
