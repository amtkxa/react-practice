import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

// React Routerを使用したメインコンポーネントの定義
class HelloSimpleApp extends Component {
    render() {
        return (
            <Router>
                <div style={{ margin: 20 }}>
                    <Route exact path='/' component={Home} />
                    <Route path='/ja' component={HelloJapanese} />
                    <Route path='/en' component={English} />
                    <Route path='/cn' component={Chinese} />
                </div>
            </Router>
        );
    }
}

// Home画面
class Home extends Component {
    render() {
        return (
            <div>
                <h1>言語選択</h1>
                <p>言語を選択してください</p>
                <ul>
                    <li><a href='/ja'>日本語</a></li>
                    <li><a href='/en'>英語</a></li>
                    <li><a href='/cn'>中国語</a></li>
                </ul>
            </div>
        );
    }
}

class HelloJapanese extends Component {
    render() {
        return (
            <div>
                <h1>こんにちは</h1>
                <p><a href='/'>戻る</a></p>
            </div>
        );
    }
}

class English extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p><a href='/'>Back</a></p>
            </div>
        );
    }
}

class Chinese extends Component {
    render() {
        return (
            <div>
                <h1>你好</h1>
                <p><a href='/'>返回</a></p>
            </div>
        );
    }
}

export default HelloSimpleApp
