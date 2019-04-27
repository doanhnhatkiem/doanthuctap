import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    TroVe = () => {
        this.props.pTroVe()
    }
    render() {
        var danhsach = this.props.pdanhsachsinhvien
        var hienthi = danhsach.map((sinhvien, triso) => {
            return (
                <Item pMaSinhVienBaoCao={this.props.pMaSinhVienBaoCao} pBaoCao={this.props.pBaoCao} pGuiMaSoSinhVien={this.props.pGuiMaSoSinhVien} key={triso} psinhvien={sinhvien} pstt={triso} />
            )
        })
        return (
            <div>
                <button className="buttonreport margin-chung" type="button" onClick={this.TroVe}>Back</button>
                 {hienthi}
            </div>
        );
    }
}

export default List;
