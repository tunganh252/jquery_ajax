$(document).ready(function () {
    let nguoiDungService = new NguoiDungService();
    layDanhSachNguoiDung();

    $('#btnThemNguoiDung').click(function () {
        $('.modal-title').html('Thêm người dùng')

        let footer = `
        <button id='btnThem' class='btn btn-primary'>Thêm</button>
        <button id='btnDong' class='btn btn-danger' data-dismiss='modal'>Đóng</button>
        `
        $('.modal-footer').html(footer);
    })


    $('body').delegate('#btnThem', 'click', function () {
        let taiKhoan = $('#TaiKhoan').val();
        let matKhau = $('#MatKhau').val();
        let hoTen = $('#HoTen').val();
        let email = $('#Email').val();
        let soDT = $('#SoDienThoai').val();
        let loaiNguoiDung = $('#loaiNguoiDung').val();

        let nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, loaiNguoiDung)

        nguoiDungService.themNguoiDung(nguoiDung);


    })
    $('body').delegate('#btnXoa', 'click', function () {
        let taiKhoan = $(this).data('taikhoan');

        nguoiDungService.xoaNguoiDung(taiKhoan);


    })
    $('body').delegate('#btnSua', 'click', function () {
        let taiKhoan = $(this).data('taikhoan');

        let thongTinNguoiDung = nguoiDungService.layThongTinNguoiDung(taiKhoan);

        thongTinNguoiDung.map(function (item) {
            $('#TaiKhoan').val(item.TaiKhoan);
            $('#MatKhau').val(item.MatKhau);
            $('#HoTen').val(item.HoTen);
            $('#Email').val(item.Email);
            $('#SoDienThoai').val(item.SoDT);
            $('#loaiNguoiDung').val(item.MaLoaiNguoiDung);
        })

        let footer = `
        <button id='btnCapNhat' class='btn btn-primary'>Cập nhật</button>
        <button id='btnDong' class='btn btn-danger' data-dismiss='modal'>Đóng</button>
        `
        $('.modal-footer').html(footer);

        // ///////////////
        $('body').delegate('#btnCapNhat', 'click', function () {

            let taiKhoan = $('#TaiKhoan').val();
            let matKhau = $('#MatKhau').val();
            let hoTen = $('#HoTen').val();
            let email = $('#Email').val();
            let soDT = $('#SoDienThoai').val();
            let loaiNguoiDung = $('#loaiNguoiDung').val();

            let nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, loaiNguoiDung)

            console.log(nguoiDung);

            nguoiDungService.capNhatNguoiDung(nguoiDung);



        })
    })


    function layDanhSachNguoiDung() {
        nguoiDungService.layDanhSachNguoiDung();
    }

});


// Viết function