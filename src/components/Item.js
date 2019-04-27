import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            xembaocao: false,
            bangbaocao: false
        }
    }
    GuiMaSoSinhVien = () => {
        this.props.pGuiMaSoSinhVien(this.props.psinhvien)
    }
    BaoCao = () => {
        this.props.pMaSinhVienBaoCao(this.props.psinhvien.masosinhvien)
    }
    XemBaoCao = () => {
        this.setState({
            xembaocao: true
        })
    }
    TatBaoCao = () => {
        this.setState({
            xembaocao: false
        })
    }
    MoBangBaoCao = () => {
        this.setState({
            bangbaocao:!this.state.bangbaocao
        })
    }
    render() {
        var stt = this.props.pstt + 1
        var sinhvien = this.props.psinhvien
        var bangbaocao = this.state.bangbaocao ? <div>
            <table className="table" cellSpacing="0">
                <thead className="thead">
                    <tr className="tr">
                        <th className="th">Tuan 1</th>
                        <th className="th">Tuan 2</th>
                        <th className="th">Tuan 3</th>
                        <th className="th">Tuan 4</th>
                        <th className="th">Tuan 5</th>
                        <th className="th">Tuan 6</th>
                        <th className="th">Tuan 7</th>
                        <th className="th">Tuan 8</th>
                        <th className="th">Tuan 9</th>
                        <th className="th">Tuan 10</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr className="tr">
                        <td className="td">{sinhvien.tuan1}</td>
                        <td className="td">{sinhvien.tuan2}</td>
                        <td className="td">{sinhvien.tuan3}</td>
                        <td className="td">{sinhvien.tuan4}</td>
                        <td className="td">{sinhvien.tuan5}</td>
                        <td className="td">{sinhvien.tuan6}</td>
                        <td className="td">{sinhvien.tuan7}</td>
                        <td className="td">{sinhvien.tuan8}</td>
                        <td className="td">{sinhvien.tuan9}</td>
                        <td className="td">{sinhvien.tuan10}</td>
                    </tr>
                </tbody>
            </table>
        </div> : ""
        return (
            <div className="margin-top-20px contentwrap">
                <p className="p">
                    <span className="text margin-y">Ma so sinh vien: </span>{sinhvien.masosinhvien}<br />
                    <span className="text margin-y">Ho va ten: </span>{sinhvien.tensinhvien}<br />
                    <span className="text margin-y">Lop: </span>{sinhvien.lopsinhvien}<br />
                    <span className="text margin-y">So dien thoai: </span>{sinhvien.sodienthoai}<br />
                    <span className="text margin-y">Thu dien tu: </span>{sinhvien.email}<br />
                    <span className="text margin-y">Cong ty: </span>{sinhvien.congty}<br />
                    <span className="text">Nguoi giam sat: </span>{sinhvien.nguoigiamsat}<br />
                </p>
                <button onClick={this.MoBangBaoCao} className="buttonreport margin-top-8px">Xem bao cao</button>
                {bangbaocao}
            </div>
        );
    }
}

export default Item;
