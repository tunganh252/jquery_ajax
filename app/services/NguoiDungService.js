function NguoiDungService() {
    this.layDanhSachNguoiDung = function () {
        $.ajax({
                url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
                type: "GET"
            })
            .done(function (result) {
                console.log(result);
                taoBang(result);

            })
            .fail(function (error) {
                console.log(error);

            })
    }
    this.themNguoiDung = function (nguoiDung) {
        $.ajax({
                url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
                type: "POST",
                data: nguoiDung
            })
            .done(function (result) {
                if (result === "tai khoan da ton tai !") {
                    alert("Tài khoản đã tồn tại")
                } else
                    location.href = "";

            })
            .fail(function (error) {
                console.log(error);

            })
    }
    this.xoaNguoiDung = function (taiKhoan) {
        $.ajax({
                url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
                type: "DELETE",
            })
            .done(function (result) {
                alert('Tài khoản đã được xóa')
                // Refresh page
                location.href="";

            })
            .fail(function (error) {
                console.log(error);
            })
    }
    this.layThongTinNguoiDung = function (taiKhoan) {
        $.ajax({
                url: `http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${taiKhoan}`,
                type: "GET",
                async:false
            })
            .done(function (result) {
                thongTinNguoiDung = result;
                console.log(result);
                
            })
            .fail(function (error) {
                console.log(error);
            })
            return thongTinNguoiDung;
            
    }
    this.capNhatNguoiDung = function (nguoiDung) {
        let ngd = JSON.stringify(nguoiDung);
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`,
            type: "PUT",
            contentType: 'application/json',
            dataType : "json",
            data: ngd
        })
        .done(function (result) {
            console.log(result);
            alert("Cập nhật thành công");
            location.href="";
        })
        .fail(function (error) {
            console.log(error);
        })
    }

}

function taoBang(danhSachNguoiDung) {

    let tblBody = "";
    danhSachNguoiDung.map(function (item, index) {
        console.log(item);
        tblBody += `
        <tr>
            <td>${index+1}</td>
            <td>${item.TaiKhoan}</td>
            <td>${item.MatKhau}</td>
            <td>${item.HoTen}</td>
            <td>${item.Email}</td>
            <td>${item.SoDT}</td>
            <td>${item.TenLoaiNguoiDung}</td>
            <td class='d-flex'>
                <button id='btnSua' data-toggle="modal" data-target="#myModal" class='btn btn-primary mr-2' data-taikhoan='${item.TaiKhoan}'>Sửa</button>
                <button id='btnXoa' class='btn btn-danger' data-dismiss='modal' data-taikhoan='${item.TaiKhoan}'>Xóa</button>
            </td>
        </tr>
        `
    })

    $('#tblDanhSachNguoiDung').html(tblBody);

}