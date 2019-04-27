import React, { Component } from 'react';
import List from './components/List'
import List_1 from './components/List_1'
import Form from './components/Form'
import Report from './components/Report';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      danhsach_sv: [],
      taikhoan: '',
      matkhau: '',
      sinhviencancapnhat: null,
      batmo: false,
      masinhvientam: '',
      baocao: false,
      doitrang: true,
      dangnhap: true,
      trang: 0,
    }
  }
  componentWillMount() {
    this.DanhSachSinhVien()
  }
  SinhSoNgauNhien = () => {
    return Math.floor(10 * Math.random()).toString(16)
  }
  MaSoSinhVien = () => {
    return '1411' + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien()
  }
  DanhSachSinhVien = () => {
    var danhsachsinhvien = [
      {
        masosinhvien: this.MaSoSinhVien(),
        tensinhvien: 'Nguyen Van A',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: this.MaSoSinhVien(),
        tensinhvien: 'Tran Thi B',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: this.MaSoSinhVien(),
        tensinhvien: 'Luong Van C',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: this.MaSoSinhVien(),
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      }
    ]
    this.setState({
      danhsach_sv: danhsachsinhvien
    })
  }
  GuiMaSoSinhVien = (sinhvien) => {
    var triso = this.TimTriSoCanCapNhat(sinhvien.masosinhvien)
    var danhsach = this.state.danhsach_sv
    this.state.sinhviencancapnhat = danhsach[triso]
    this.MoForm()
  }
  TimTriSoCanCapNhat = (masosinhvien) => {
    var danhsachsinhvien = this.state.danhsach_sv
    var Triso = ''
    danhsachsinhvien.forEach((sinhvien, triso) => {
      if (sinhvien.masosinhvien === masosinhvien) {
        Triso = triso
      }
    })
    return Triso
  }
  KichHoat = () => {
    var trangthai = this.state.batmo
    this.setState({
      batmo: !trangthai
    })
  }
  MoForm = () => {
    this.setState({
      batmo: true
    })
  }
  MoBaoCao = () => {
    this.setState({
      baocao: true
    })
  }
  Tat = () => {
    this.setState({
      batmo: false
    })
  }
  CapNhatSinhVien = (sinhvien) => {
    var triso = this.TimTriSoCanCapNhat(sinhvien.masosinhvien)
    var danhsach = this.state.danhsach_sv
    var capnhatsinhvien = danhsach[triso]
    capnhatsinhvien.tensinhvien = sinhvien.tensinhvien
    capnhatsinhvien.lopsinhvien = sinhvien.lopsinhvien
    capnhatsinhvien.sodienthoai = sinhvien.sodienthoai
    capnhatsinhvien.email = sinhvien.email
    capnhatsinhvien.congty = sinhvien.congty
    capnhatsinhvien.nguoigiamsat = sinhvien.nguoigiamsat
    this.setState({
      danhsach_sv: danhsach
    })
  }

  MaSinhVienBaoCao = (masinhvien) => {
    this.setState({
      masinhvientam: masinhvien
    })
    this.MoBaoCao()
  }
  CapNhatBaoCao1 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan1 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao2 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan2 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao3 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan3 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao4 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan4 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao5 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan5 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao6 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan6 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao7 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan7 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao8 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan8 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao9 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan9 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao10 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan10 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  DangNhap = (e) => {
    e.preventDefault()
    var tk = this.state.taikhoan
    var mk = this.state.matkhau
    console.log(tk + ' ' + mk)

    if (tk === "giaovien" && mk === "giaovien") {
      this.setState({
        dangnhap: false,
        trang: 1
      })
    }
    else if (tk === "sinhvien" && mk === "sinhvien") {
      this.setState({
        dangnhap: false,
        trang: 2
      })
    }
    else {
      this.setState({
        trang: 0
      })
    }
  }
  LayDuLieu = (e) => {
    var target = e.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]: value
    })
  }
  TroVe = () => {
    this.setState({
      taikhoan: '',
      matkhau: '',
      baocao: false,
      dangnhap: true,
      trang: 0
    })
  }
  TatBangBaoCao = () => {
    this.setState({
      baocao: false
    })
  }
  render() {
    var hienthiform = this.state.batmo ? <Form pCapNhat={this.CapNhatSinhVien} pTat={this.Tat} pSinhVien={this.state.sinhviencancapnhat} /> : ""
    var baocao = this.state.baocao ? <Report pTatBangBaoCao={this.TatBangBaoCao}
      pCapNhatBaoCao1={this.CapNhatBaoCao1}
      pCapNhatBaoCao2={this.CapNhatBaoCao2}
      pCapNhatBaoCao3={this.CapNhatBaoCao3}
      pCapNhatBaoCao4={this.CapNhatBaoCao4}
      pCapNhatBaoCao5={this.CapNhatBaoCao5}
      pCapNhatBaoCao6={this.CapNhatBaoCao6}
      pCapNhatBaoCao7={this.CapNhatBaoCao7}
      pCapNhatBaoCao8={this.CapNhatBaoCao8}
      pCapNhatBaoCao9={this.CapNhatBaoCao9}
      pCapNhatBaoCao10={this.CapNhatBaoCao10}
      pMaSinhVien={this.state.masinhvientam} /> : ''

    var dangnhap = this.state.dangnhap ?
      <div className="popup-update">
        <form onSubmit={this.DangNhap}>
          <p className="ptitle">Dang nhap</p>
          <div className="marginbottom">
            <label className="text">Tai khoan:</label>
            <input className="input" name="taikhoan" value={this.state.taikhoan} onChange={this.LayDuLieu} type="text" />
          </div>
          <div>
            <label className="text">Mat khau:</label>
            <input className="input" name="matkhau" value={this.state.matkhau} onChange={this.LayDuLieu} type="password" />
          </div>
          <div className="buttonwrap">
            <button className="buttonedit" type="submit">Dang nhap</button>
          </div>
        </form>
      </div>
      : ""
    var hienthidanhsach = this.state.trang === 1 ? <List pTroVe={this.TroVe} pMaSinhVienBaoCao={this.MaSinhVienBaoCao} pBaoCao={this.BaoCao} pdanhsachsinhvien={this.state.danhsach_sv} pGuiMaSoSinhVien={this.GuiMaSoSinhVien} /> :
      this.state.trang === 2 ? <List_1 pTroVe={this.TroVe} pMaSinhVienBaoCao={this.MaSinhVienBaoCao} pBaoCao={this.BaoCao} pdanhsachsinhvien={this.state.danhsach_sv} pGuiMaSoSinhVien={this.GuiMaSoSinhVien} /> : ""
    return (
      <div>
        {hienthidanhsach}
        {dangnhap}
        {hienthiform}
        {baocao}
      </div >
    );
  }
}

export default App;
