function computeBMI() {
    // user inputs
    var tinggi = Number(document.getElementById("tinggi").value);
    var berat = Number(document.getElementById("berat").value);

    //Perform calculation

    var BMI = Math.round(berat / Math.pow(tinggi, 2) * 10000);
    var hasil = Math.round(BMI * 100) / 100;
    btnPerempuan = document.getElementById("perempuan");
    if(btnPerempuan.classList.contains("gender-active")) {
        hasil -= 0.5;
    }
    //Display result of calculation
    document.getElementById("hasil").innerText = hasil;

    if (hasil < 18.5)
        document.getElementById("kategori").innerText = "Underweight";
    else if (hasil >= 18.5 && hasil <= 25)
        document.getElementById("kategori").innerText = "Normal";
    else if (hasil >= 25 && hasil <= 30)
        document.getElementById("kategori").innerText = "Obese";
    else if (hasil > 30)
        document.getElementById("kategori").innerText = "Overweight";
}

function lakiActive() {
    // class yang ingin diaktifkan adalah gender-active
    var btnLaki, className, arr;
    btnLaki = document.getElementById("laki");
    className = "gender-active";
    arr = btnLaki.className.split(" ");
    if (arr.indexOf(className) == -1) {
        btnLaki.className += " " + className;
    }
    // Hapus class gender-active pada button perempuan
    var btnPerempuan = document.getElementById("perempuan");
    btnPerempuan.className = btnPerempuan.className.replace(/\bgender-active\b/g, "");
}

function perempuanActive() {
    // class yang ingin diaktifkan adalah gender-active
    var btnPerempuan, className, arr;
    btnPerempuan = document.getElementById("perempuan");
    className = "gender-active";
    arr = btnPerempuan.className.split(" ");
    if (arr.indexOf(className) == -1) {
        btnPerempuan.className += " " + className;
    }
    // Hapus class gender-active pada button perempuan
    var btnLaki = document.getElementById("laki");
    btnLaki.className = btnLaki.className.replace(/\bgender-active\b/g, "");
}

function hide() {
    var container = document.getElementById("container-hasil");
    if (container.style.display === "none") {
      container.style.display = "grid";
    } else {
      container.style.display = "none";
    }
  }