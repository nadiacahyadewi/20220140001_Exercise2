function kirimData(event) {
    event.preventDefault();  // Prevent the default form submission

    var name = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var pembayaran = document.getElementById("pembayaran").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    Swal.fire({
        title: "Data Pendaftaran",
        html: "<b>Nama:</b> " + name +  
              "<br><b>Tanggal Lahir:</b> " + tanggal +
              "<br><b>Kursi:</b> " + peminatan +  
              "<br><b>Pembayaran:</b> " + pembayaran +
              "<br><b>Email:</b> " + email +
              "<br><b>Alamat:</b> " + alamat,
        icon: "info"
    });
}
