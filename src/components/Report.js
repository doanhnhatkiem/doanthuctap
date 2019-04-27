import React, { Component } from 'react';
import Week1 from './Week1'
import Week2 from './Week2'
import Week3 from './Week3'
import Week4 from './Week4'
import Week5 from './Week5'
import Week6 from './Week6'
import Week7 from './Week7'
import Week8 from './Week8'
import Week9 from './Week9'
import Week10 from './Week10'

class Report extends Component {
    constructor(props) {
        super(props)
        this.state = {
            week1: false,
            week2: false,
            week3: false,
            week4: false,
            week5: false,
            week6: false,
            week7: false,
            week8: false,
            week9: false,
            week10: false
        }
    }
    MoBaoCao1 = () => {
        this.setState({
            week1: true
        })
    }
    TatBaoCao1 = () => {
        this.setState({
            week1: false
        })
    }

    MoBaoCao2 = () => {
        this.setState({
            week2: true
        })
    }
    TatBaoCao2 = () => {
        this.setState({
            week2: false
        })
    }

    MoBaoCao3 = () => {
        this.setState({
            week3: true
        })
    }
    TatBaoCao3 = () => {
        this.setState({
            week3: false
        })
    }

    MoBaoCao4 = () => {
        this.setState({
            week4: true
        })
    }
    TatBaoCao4 = () => {
        this.setState({
            week4: false
        })
    }

    MoBaoCao5 = () => {
        this.setState({
            week5: true
        })
    }
    TatBaoCao5 = () => {
        this.setState({
            week5: false
        })
    }

    MoBaoCao6 = () => {
        this.setState({
            week6: true
        })
    }
    TatBaoCao6 = () => {
        this.setState({
            week6: false
        })
    }

    MoBaoCao7 = () => {
        this.setState({
            week7: true
        })
    }
    TatBaoCao7 = () => {
        this.setState({
            week7: false
        })
    }

    MoBaoCao8 = () => {
        this.setState({
            week8: true
        })
    }
    TatBaoCao8 = () => {
        this.setState({
            week8: false
        })
    }

    MoBaoCao9 = () => {
        this.setState({
            week9: true
        })
    }
    TatBaoCao9 = () => {
        this.setState({
            week9: false
        })
    }

    MoBaoCao10 = () => {
        this.setState({
            week10: true
        })
    }
    TatBaoCao10 = () => {
        this.setState({
            week10: false
        })
    }
    TatBangBaoCao=()=>{
        this.props.pTatBangBaoCao()
    }
    render() {
        var week1 = this.state.week1 ? <Week1 pBaoCao1={this.props.pCapNhatBaoCao1} pMaSinhVien={this.props.pMaSinhVien} pTat1={this.TatBaoCao1} /> : ""
        var week2 = this.state.week2 ? <Week2 pBaoCao2={this.props.pCapNhatBaoCao2} pMaSinhVien={this.props.pMaSinhVien} pTat2={this.TatBaoCao2} /> : ""
        var week3 = this.state.week3 ? <Week3 pBaoCao3={this.props.pCapNhatBaoCao3} pMaSinhVien={this.props.pMaSinhVien} pTat3={this.TatBaoCao3} /> : ""
        var week4 = this.state.week4 ? <Week4 pBaoCao4={this.props.pCapNhatBaoCao4} pMaSinhVien={this.props.pMaSinhVien} pTat4={this.TatBaoCao4} /> : ""
        var week5 = this.state.week5 ? <Week5 pBaoCao5={this.props.pCapNhatBaoCao5} pMaSinhVien={this.props.pMaSinhVien} pTat5={this.TatBaoCao5} /> : ""
        var week6 = this.state.week6 ? <Week6 pBaoCao6={this.props.pCapNhatBaoCao6} pMaSinhVien={this.props.pMaSinhVien} pTat6={this.TatBaoCao6} /> : ""
        var week7 = this.state.week7 ? <Week7 pBaoCao7={this.props.pCapNhatBaoCao7} pMaSinhVien={this.props.pMaSinhVien} pTat7={this.TatBaoCao7} /> : ""
        var week8 = this.state.week8 ? <Week8 pBaoCao8={this.props.pCapNhatBaoCao8} pMaSinhVien={this.props.pMaSinhVien} pTat8={this.TatBaoCao8} /> : ""
        var week9 = this.state.week9 ? <Week9 pBaoCao9={this.props.pCapNhatBaoCao9} pMaSinhVien={this.props.pMaSinhVien} pTat9={this.TatBaoCao9} /> : ""
        var week10 = this.state.week10 ? <Week10 pBaoCao10={this.props.pCapNhatBaoCao10} pMaSinhVien={this.props.pMaSinhVien} pTat10={this.TatBaoCao10} /> : ""

        return (
            <div className="reportwrap">
                <button className="closereport" type="button" onClick={this.TatBangBaoCao}>x</button>
                <label className="weektext-2 marginbottom">Bao cao tuan</label><br/>
                <button className="week" onClick={this.MoBaoCao1}>1</button>
                {week1}
                <button className="week" onClick={this.MoBaoCao2}>2</button>
                {week2}
                <button className="week" onClick={this.MoBaoCao3}>3</button>
                {week3}
                <button className="week" onClick={this.MoBaoCao4}>4</button>
                {week4}
                <button className="week" onClick={this.MoBaoCao5}>5</button>
                {week5}
                <button className="week" onClick={this.MoBaoCao6}>6</button>
                {week6}
                <button className="week" onClick={this.MoBaoCao7}>7</button>
                {week7}
                <button className="week" onClick={this.MoBaoCao8}>8</button>
                {week8}
                <button className="week" onClick={this.MoBaoCao9}>9</button>
                {week9}
                <button className="week" onClick={this.MoBaoCao10}>10</button>
                {week10}
            </div>
        );
    }
}

export default Report;
