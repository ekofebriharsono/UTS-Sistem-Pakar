var minPermintaan = 1000;
var maxPermintaan = 5000;

var minPersediaan = 100;
var maxPersediaan = 600;

var minProduksi = 2000;
var maxProduksi = 7000;

var x = 4000;
var y = 300;

var totalPerhitunganPermintaanBesar = 0;
var totalPerhitunganPermintaanKecil = 0;
var totalPerhitunganProduksi = 0;
var totalMaxProduksi = 0;
var totalMinProduksi = 0;

var getValueProduksi = maxProduksi - minProduksi;

var valueRulePertama = 0;
var valueRuleKedua = 0;
var valueRuleKetiga = 0;
var valueRuleKeempat = 0;

var hasil = 0;

function hitung(){
    
    if(cekRangeInputX(minPermintaan, maxPermintaan, x)&&cekRangeInputY(minPersediaan, maxPersediaan, y)){

        var hasilKecilPermintaan = hitungKecilPermintaan(x, minPermintaan, maxPermintaan);
        var hasilBesarPermintaan = hitungBesarPermintaan(x, minPermintaan, maxPermintaan);
        var hasilPersediaanTerbanyak = hitungPersediaanTerbanyak(y, minPersediaan, maxPersediaan);
        var hasilPersediaanTerkecil = hitungPersediaanTerkecil(y, minPersediaan, maxPersediaan);
        var hasilMinProduksi = hitungMinProduksi(x, minProduksi, maxProduksi, getValueProduksi);
        var hasilMaxProduksi = hitungMaxProduksi(x, minProduksi, maxProduksi, getValueProduksi);

        var totalRulePertamaBanget = rulePertama(hasilKecilPermintaan, hasilPersediaanTerbanyak, maxProduksi, hasilMaxProduksi);
        var totalRuleKeduaBanget = ruleKedua(hasilKecilPermintaan, hasilPersediaanTerkecil, maxProduksi, hasilMaxProduksi);
        var totalRuleKetigaBanget = ruleKetiga(hasilBesarPermintaan, hasilPersediaanTerbanyak, maxProduksi, hasilMaxProduksi);
        var totalRuleKeempatBanget = ruleKeempat(hasilBesarPermintaan, hasilPersediaanTerkecil, maxProduksi, hasilMaxProduksi);

        var hitungTotalPrediksiBanget = hitungPrediksi(valueRulePertama, valueRuleKedua, valueRuleKetiga, valueRuleKeempat, totalRulePertamaBanget, totalRuleKeduaBanget, totalRuleKetigaBanget, totalRuleKeempatBanget);

        alert(hitungTotalPrediksiBanget);
    } else {
        alert("Iam Sorry But.");
    }
    
}

function hitungBesarPermintaan(input, minPermintaan, maxPermintaan){

    totalPerhitunganPermintaanBesar = (input - minPermintaan) / (maxPermintaan - minPermintaan);

    return totalPerhitunganPermintaanBesar;
}

function hitungKecilPermintaan(input, minPermintaan, maxPermintaan){

    totalPerhitunganPermintaanKecil = (maxPermintaan - input) / (maxPermintaan - minPermintaan);

    return totalPerhitunganPermintaanKecil
}

function hitungPersediaanTerbanyak(input, minPersediaan, maxPersediaan){

    totalPerhitunganPersediaanterbanyak = (input - minPersediaan) / (maxPersediaan - minPersediaan);

    return totalPerhitunganPersediaanterbanyak;
}

function hitungPersediaanTerkecil(input, minPersediaan, maxPersediaan){

    totalPerhitunganPersediaanTerkecil = (maxPersediaan - input) / (maxPersediaan - minPersediaan);

    return totalPerhitunganPersediaanTerkecil;
}

function hitungMaxProduksi(input, minProduksi, maxProduksi, getValueProduksi){

    totalMaxProduksi = ((input - minProduksi) / (maxProduksi - minProduksi))*getValueProduksi;

    totalMaxProduksi = maxProduksi - totalMaxProduksi;

    return totalMaxProduksi;
}

function hitungMinProduksi(input, minProduksi, maxProduksi, getValueProduksi){

    totalMinProduksi = ((maxProduksi - input) / (maxProduksi - minProduksi))*getValueProduksi;

    totalMinProduksi = maxProduksi - totalMinProduksi;

    return totalMinProduksi;
}


function rulePertama(permintaanTurun, persediaanBanyak, maxProduksi, totalMaxProduksi){

    valueRulePertama = Math.max(permintaanTurun, persediaanBanyak);

    var totalRulePertama = maxProduksi - (valueRulePertama * totalMaxProduksi)

    return totalRulePertama;
}

function ruleKedua(permintaanTurun, persediaanSedikit, maxProduksi, totalMaxProduksi){

    valueRuleKedua = Math.max(permintaanTurun, persediaanSedikit);

    var totalRuleKedua = maxProduksi - (valueRuleKedua * totalMaxProduksi)

    return totalRuleKedua;
}

function ruleKetiga(permintaanNaik, persediaanBanyak, maxProduksi, totalMaxProduksi){

    valueRuleKetiga = Math.max(permintaanNaik, persediaanBanyak);

    var totalRuleKetiga = maxProduksi - (valueRuleKetiga * totalMaxProduksi)

    return totalRuleKetiga;
}

function ruleKeempat(permintaanNaik, persediaanSedikit, maxProduksi, totalMaxProduksi){

    valueRuleKeempat = Math.max(permintaanNaik, persediaanSedikit);

    var totalRuleKeempat = maxProduksi - (valueRuleKeempat * totalMaxProduksi)

    return totalRuleKeempat;
}

function hitungPrediksi(valueRulePertama, valueRuleKedua, valueRuleKetiga, valueRuleKeempat, totalRulePertama, totalRuleKedua, totalRuleKetiga, totalRuleKeempat){

    var hasilPertama = (valueRulePertama * totalRulePertama) + (valueRuleKedua * totalRuleKedua) + (valueRuleKetiga * totalRuleKetiga) +(valueRuleKeempat * totalRuleKeempat);
    var hasilKedua = valueRulePertama + valueRuleKedua + valueRuleKetiga + valueRuleKeempat;

    var totalHitungPrediksi = hasilPertama / hasilKedua;

    return totalHitungPrediksi;
}

function cekRangeInputX(minPermintaan, maxPermintaan, inputanX){

    if(inputanX >= minPermintaan &&  inputanX <=maxPermintaan){
        return true;
    } else {
        return false;
    }
}

function cekRangeInputY( minPersediaan, maxPersediaan, inputanY){

    if(inputanY >= minPersediaan &&  inputanY <= maxPersediaan){
        return true;
    } else {
        return false;
    }
}