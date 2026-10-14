
const formLogin = document.getElementById("formLogin");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const pesan = document.getElementById("pesan");

formLogin.addEventListener("submit", function(event) {
    // Mencegah form langsung dikirim.
    event.preventDefault();

    const email = inputEmail.value.trim();
    const password = inputPassword.value;

    // Menghapus pesan dan status validasi sebelumnya.
    pesan.className = "alert d-none";
    pesan.textContent = "";

    inputEmail.classList.remove("is-invalid", "is-valid");
    inputPassword.classList.remove("is-invalid", "is-valid");

    let valid = true;

    // Memeriksa format email.
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !polaEmail.test(email)) {
        inputEmail.classList.add("is-invalid");
        valid = false;
    } else {
        inputEmail.classList.add("is-valid");
    }

    // Memeriksa password minimal 8 karakter.
    if (password.trim() === "" || password.length < 8) {
        inputPassword.classList.add("is-invalid");
        valid = false;
    } else {
        inputPassword.classList.add("is-valid");
    }

    // Menampilkan hasil pemeriksaan.
    if (!valid) {
        pesan.className = "alert alert-danger";
        pesan.textContent =
            "Email atau password belum memenuhi ketentuan. Periksa kembali input Anda.";
    } else {
        pesan.className = "alert alert-success";
        pesan.textContent =
            "Validasi berhasil! Input memenuhi ketentuan form. Ini bukan login sungguhan.";
    }
});
