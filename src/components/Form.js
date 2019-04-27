import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            masosinhvien: '',
            tensinhvien: '',
            lopsinhvien: '',
            sodienthoai: '',
            email: '',
            congty: '',
            nguoigiamsat: ''
        }
    }
    componentWillMount() {
        if (this.props.pSinhVien) {
            this.setState({
                masosinhvien: this.props.pSinhVien.masosinhvien,
                tensinhvien: this.props.pSinhVien.tensinhvien,
                lopsinhvien: this.props.pSinhVien.lopsinhvien,
                sodienthoai: this.props.pSinhVien.sodienthoai,
                email: this.props.pSinhVien.email,
                congty: this.props.pSinhVien.congty,
                nguoigiamsat: this.props.pSinhVien.nguoigiamsat
            })
        }

    }
    componentWillReceiveProps(nextprop) {
        if (nextprop && nextprop.pSinhVien) {
            this.setState({
                masosinhvien: nextprop.pSinhVien.masosinhvien,
                tensinhvien: nextprop.pSinhVien.tensinhvien,
                lopsinhvien: nextprop.pSinhVien.lopsinhvien,
                sodienthoai: nextprop.pSinhVien.sodienthoai,
                email: nextprop.pSinhVien.email,
                congty: nextprop.pSinhVien.congty,
                nguoigiamsat: nextprop.pSinhVien.nguoigiamsat
            })
        }

    }
    LayDuLieu = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }
    XoaDuLieu = () => {
        this.setState({
            masosinhvien: '',
            tensinhvien: '',
            lopsinhvien: '',
            sodienthoai: '',
            email: '',
            congty: '',
            nguoigiamsat: ''
        })
    }
    Tat = () => {
        this.XoaDuLieu()
        this.props.pTat()
    }
    GuiDuLieu = (event) => {
        event.preventDefault()
        this.props.pCapNhat(this.state)
        this.Tat()
    }
    render() {
        return (
            <div className="popup-update">
                <form onSubmit={this.GuiDuLieu}>
                    <p className="ptitle">Dang nhap</p>
                    <div className="marginbottom">
                        <label className="text">Ten sinh vien:</label>
                        <input className="input" value={this.state.tensinhvien} onChange={this.LayDuLieu} name="tensinhvien" type="text" />
                    </div>
                    <div className="marginbottom">
                        <label className="text">Lop hoc:</label>
                        <input className="input" value={this.state.lopsinhvien} onChange={this.LayDuLieu} name="lopsinhvien" type="text" />
                    </div>
                    <div className="marginbottom">
                        <label className="text">So dien thoai:</label>
                        <input className="input" value={this.state.sodienthoai} onChange={this.LayDuLieu} name="sodienthoai" type="text" />
                    </div>
                    <div className="marginbottom">
                        <label className="text">Thu dien tu:</label>
                        <input className="input" value={this.state.email} onChange={this.LayDuLieu} name="email" type="text" />
                    </div>
                    <div className="marginbottom">
                        <label className="text">Cong ty:</label>
                        <input className="input" value={this.state.congty} onChange={this.LayDuLieu} name="congty" type="text" />
                    </div>
                    <div className="marginbottom">
                        <label className="text">Nguoi giam sat:</label>
                        <input className="input" value={this.state.nguoigiamsat} onChange={this.LayDuLieu} name="nguoigiamsat" type="text" />
                    </div>
                    <div className="buttonwrap">
                        <button className="buttonedit" type="submit">Cap nhat thong tin</button>
                        <button className="buttonreport" type="button" onClick={this.Tat}>Huy bo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
