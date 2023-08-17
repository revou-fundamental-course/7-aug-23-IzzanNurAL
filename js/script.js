function luas_segitiga() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    if (isNaN(alas) && isNaN(tinggi)) {
      document.getElementById('hasil-luas-segitiga').style.display = 'none';
      alert("Masukkan angka");
      return;
    }
    if (isNaN(alas) || isNaN(tinggi)) {
      document.getElementById('hasil-luas-segitiga').style.display = 'none';
      alert("Isi semua (dengan angka yang valid)");
      return;
    }
    var x = 0.5 * alas;
    var luas = x * tinggi;
    document.getElementById('hasil-luas-segitiga').innerHTML = 'L = 1/2 x a x t<br><br>L = 1/2 x '+alas+' x '+tinggi+'<br><br>L = '+x+' x '+tinggi+'<br><br>L = '+luas;
    document.getElementById('hasil-luas-segitiga').style.display = 'block';
}
function keliling_segitiga() {
  var s1 = parseFloat(document.querySelector('input[name="s1-segitiga"]').value);
  var s2 = parseFloat(document.querySelector('input[name="s2-segitiga"]').value);
  var s3 = parseFloat(document.querySelector('input[name="s3-segitiga"]').value);
  if (isNaN(s1) && isNaN(s2) && isNaN(s3)) {
    document.getElementById('hasil-keliling-segitiga').style.display = 'none';
    alert("Masukkan angka");
    return;
  }
  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    document.getElementById('hasil-keliling-segitiga').style.display = 'none';
    alert("Isi semua (dengan angka yang valid)");
    return;
  }

  var keliling = s1 + s2 + s3;
  document.getElementById('hasil-keliling-segitiga').innerHTML = 'K = S1 + S2 + S3<br><br>K = '+s1+' + '+s2+' + '+s3+'<br><br>K = '+keliling;
  document.getElementById('hasil-keliling-segitiga').style.display = 'block';
}

function resetForm(hasil) {
    document.getElementById(hasil).style.display = 'none';
}
function tampilan(tampil, hilang) {
    document.getElementById(tampil).style.display = 'block';
    document.getElementById(hilang).style.display = 'none';
}