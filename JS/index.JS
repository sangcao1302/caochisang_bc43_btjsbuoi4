//  Bài 1: Bài 1: Quản lý tuyển sinh

document.getElementById('btnKetQua').onclick = function () {
    // input: diemChuan, khuVuc, doiTuong, diemMon1, diemMon2, diemMon3
    var diemChuan = document.getElementById('diemChuan').value;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;
    var diemMon1 = document.getElementById('diemMon1').value;
    var diemMon2 = document.getElementById('diemMon2').value;
    var diemMon3 = document.getElementById('diemMon3').value;
    // kiểm tra intput
    // console.log(diemChuan, khuVuc, doiTuong, diemMon1, diemMon2, diemMon3);

    // output
    var ketQua = '';
    var tongDiem = 0;

    // process: xử lý
    // Bước 1: tính tổng điểm
    tongDiem = Number(khuVuc) + Number(doiTuong) + Number(diemMon1) + Number(diemMon2) + Number(diemMon3);
    // Bước 2: kết quả đậu hay rớt
    if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0){
        ketQua = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
        
    }else if (tongDiem >=diemChuan){
        ketQua = 'Bạn đã đậu. '
    }else{
        ketQua = 'Bạn đã rớt. '
    }

    if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0){

        document.getElementById('ketQuaBai1').innerHTML = ketQua ;
        }
       
     else{

            document.getElementById('ketQuaBai1').innerHTML = ketQua + 'Tổng điểm: ' + tongDiem;
        }

    
} 

// Bài 2: Tính giá trị trung bình
document.getElementById('btnTinhTienDien').onclick = function () {
    // input: hoTenBai2: string, soKw: number
    var hoTen = document.getElementById('hoTenBai2').value;
    var soKw = document.getElementById('soKw').value;

    // kiểm tra input
    // console.log(hoTen, soKw);


    // output: tienDien: number
    var tienDien = 0;

    // process: xử lý
    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650
    } else if (soKw <= 200) {
        tienDien = 50 * 500 + (50 * 650) + (soKw - 100) * 850
    } else if (soKw <= 350) {
        tienDien = 50 * 500 + (50 * 650) + (100 * 850) + (soKw - 200) * 1100
    } else if (soKw > 350) {
        tienDien = 50 * 500 + (50 * 650) + (100 * 850) + (150 * 1100) + (soKw - 350) * 1130
    }

    document.getElementById('ketQuaBai2').innerHTML = 'Họ tên: ' + hoTen + '; ' + 'Tiền điện: ' + tienDien.toLocaleString();

}

// Bài 3: Tính thuế thu nhập cá nhân
document.getElementById('btnTinhTienThue').onclick = function () {
    // input: hoTenBai3: string, tongThuNhapNam: number, soNguoiPhuThuoc: number
    var hoTenBai3 = document.getElementById('hoTenBai3').value;
    var tongThuNhapNam = document.getElementById('tongThuNhapNam').value;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value;
    // kiểm tra input
    // console.log(hoTenBai3, tongThuNhapNam, soNguoiPhuThuoc)

    // output: soTienVND: number
    var thuNhapChiuThue = 0;
    var thueThuNhapCaNhan = 0;

    // process: xử lý
    //  Bước 1: tính thu nhập chịu thuế
    thuNhapChiuThue = tongThuNhapNam - 4000000 - (soNguoiPhuThuoc * 1600000)
    // Bước 2: tính thuế TNCN
    if (thuNhapChiuThue <= 60000000) {
        thueThuNhapCaNhan = thuNhapChiuThue * 5 / 100
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        thueThuNhapCaNhan = thuNhapChiuThue * 10 / 100
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        thueThuNhapCaNhan = thuNhapChiuThue * 15 / 100
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        thueThuNhapCaNhan = thuNhapChiuThue * 20 / 100
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        thueThuNhapCaNhan = thuNhapChiuThue * 25 / 100
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        thueThuNhapCaNhan = thuNhapChiuThue * 30 / 100
    }
    else if (thuNhapChiuThue > 960000000) {
        thueThuNhapCaNhan = thuNhapChiuThue * 35 / 100
    }

    document.getElementById('ketQuaBai3').innerHTML = 'Họ tên: ' + hoTenBai3 + '; ' + 'Tiền thuế thu nhập cá nhân: ' + thueThuNhapCaNhan.toLocaleString() + ' VND';
}

// Bài 4: Tính tiền cáp
// document.getElementById('soKetnoi').disabled = true;
var select=document.getElementById("loaiKhachHang")
var ketNoi=document.getElementById("soKetnoi")
select.onchange=function(){
    if(select.value==="nhadan")
    {
        ketNoi.disabled=true
    }
    if (select.value==="doanhnghiep")
    {
        ketNoi.disabled=false
    }
}

document.getElementById('btnTinhTienCap').onclick = function () {
    // input: loaiKhachHang: string, maKhachHang: string, soKenhCaoCap: number, soKetnoi: number
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;
    var maKhachHang = document.getElementById('maKhachHang').value;
    var soKenhCaoCap = document.getElementById('soKenhCaoCap').value;
    var soKetnoi = document.getElementById('soKetnoi').value;
    // kiểm tra input
    // console.log(loaiKhachHang, maKhachHang, soKenhCaoCap, soKetnoi);


    // output:
    var tienCap = 0;

    // process: xử lý
    if (loaiKhachHang = 'Nhà dân') {
        tienCap = 4.5 + 20.5 + (7.5 * soKenhCaoCap)
        
    }
    if (loaiKhachHang = 'Doanh Nghiệp' && soKetnoi <= 10) {
        tienCap = 15 + 75 + (50 * soKenhCaoCap)

    }
   if (loaiKhachHang = 'Doanh Nghiệp' && soKetnoi > 10) {
        tienCap = 15 + (75 + (soKetnoi - 10) * 5) + (50 * soKenhCaoCap)
    }

    document.getElementById('ketQuaBai4').innerHTML = 'Mã khách hàng: ' + maKhachHang + '; ' + 'Tiền cáp: ' + '$' + tienCap.toFixed(2);
}




