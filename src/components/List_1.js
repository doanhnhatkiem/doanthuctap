import React, { Component } from 'react';
import Item_1 from './Item_1';

class List extends Component {
    TroVe = () => {
        this.props.pTroVe()
    }
    render() {
        var danhsach = this.props.pdanhsachsinhvien
        var hienthi = danhsach.map((sinhvien, triso) => {
            return (
                <Item_1 pMaSinhVienBaoCao={this.props.pMaSinhVienBaoCao} pBaoCao={this.props.pBaoCao} pGuiMaSoSinhVien={this.props.pGuiMaSoSinhVien} key={triso} psinhvien={sinhvien} pstt={triso} />
            )
        })
        return (
            <div>
                <button className="buttonreport margin-chung" type="button" onClick={this.TroVe}>Back</button>
                <div className="table-warp">
                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>STT 1</th>
                                <th>MSSV</th>
                                <th>Ten sinh vien</th>
                                <th>Lop hoc</th>
                                <th>So dien thoai</th>
                                <th>Thu dien tu</th>
                                <th>Cong ty</th>
                                <th>Nguoi giam sat</th>
                                <th>Chuc nang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hienthi}
                        </tbody>
                    </table>
                </div >
            </div>

        );
    }
}

export default List;
