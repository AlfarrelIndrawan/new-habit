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

    if (hasil < 18.5) {
        document.getElementById("lingkaran-underweight").style.display = "block";
        document.getElementById("konten-underweight").style.display = "block";
        document.getElementById("lingkaran-normal").style.display = "none";
        document.getElementById("konten-normal").style.display = "none";
        document.getElementById("lingkaran-overweight").style.display = "none";
        document.getElementById("konten-overweight").style.display = "none";
        document.getElementById("lingkaran-obese").style.display = "none";
        document.getElementById("konten-obese").style.display = "none";
    }
    else if (hasil >= 18.5 && hasil <= 25) {
        document.getElementById("lingkaran-underweight").style.display = "none";
        document.getElementById("konten-underweight").style.display = "none";
        document.getElementById("lingkaran-normal").style.display = "block";
        document.getElementById("konten-normal").style.display = "block";
        document.getElementById("lingkaran-overweight").style.display = "none";
        document.getElementById("konten-overweight").style.display = "none";
        document.getElementById("lingkaran-obese").style.display = "none";
        document.getElementById("konten-obese").style.display = "none";
    }
    else if (hasil >= 25 && hasil <= 30) {
        document.getElementById("lingkaran-underweight").style.display = "none";
        document.getElementById("konten-underweight").style.display = "none";
        document.getElementById("lingkaran-normal").style.display = "none";
        document.getElementById("konten-normal").style.display = "none";
        document.getElementById("lingkaran-overweight").style.display = "block";
        document.getElementById("konten-overweight").style.display = "block";
        document.getElementById("lingkaran-obese").style.display = "none";
        document.getElementById("konten-obese").style.display = "none";
    }
    else if (hasil > 30) {
        document.getElementById("lingkaran-underweight").style.display = "none";
        document.getElementById("konten-underweight").style.display = "none";
        document.getElementById("lingkaran-normal").style.display = "none";
        document.getElementById("konten-normal").style.display = "none";
        document.getElementById("lingkaran-overweight").style.display = "none";
        document.getElementById("konten-overweight").style.display = "none";
        document.getElementById("lingkaran-obese").style.display = "block";
        document.getElementById("konten-obese").style.display = "block";
    }
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
    container.style.display = "grid";
  }