import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

// React Routerを使用したメインコンポーネントの定義
class HelloApp extends Component {
    render() {
        return (
            <Router>
                <div style={{ margin: 20 }}>
                    <Header />
                    <div>
                        <Route exact path='/' component={Japanese} />
                        <Route path='/ja' component={Japanese} />
                        <Route path='/en' component={English} />
                        <Route path='/cn' component={Chinese} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

// Header
class Header extends Component {
    render() {
        return (
            <div>
                <h3 style={styleHeader}>言語選択</h3>
                <p>
                    [<a href='/ja'>日本語</a>]
                    [<a href='/en'>英語</a>]
                    [<a href='/cn'>中国語</a>]
                </p>
            </div>
        );
    }
}

// Footer
class Footer extends Component {
    render() {
        return (
            <div style={styleHeader}>
                挨拶をいろんな言語で表示します。
            </div>
        );
    }
}

class Japanese extends Component {
    render() {
        return (
            <div><h1>こんにちは</h1></div>
        );
    }
}

class English extends Component {
    render() {
        return (
            <div><h1>Hello</h1></div>
        );
    }
}

class Chinese extends Component {
    render() {
        return (
            <div><h1>你好</h1></div>
        );
    }
}

// styleHeader
const styleHeader = {
    backgroundColor: 'Blue',
    color: 'white',
    padding: 4
}

export default HelloApp
