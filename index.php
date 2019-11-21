<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>UTS SISPAK</title>

    <link rel="stylesheet" href="style/styles.css">

</head>

<body align="center">
    <div class="container">

        <input type="text" id="x" value="4000" placeholder="Masukkan Nilai X">
        <input type="text" id="y" value="300" placeholder="Masukkan Nilai y">

        <button type="submit" id="hitungTotal" onClick="hitung();">Hitung</button>

        <div style="width:75%;">
            <canvas id="canvas"></canvas>
        </div>

    </div>

</body>

<script src="js/perhitungan.js"></script>
<script src="js/Chart.min.js"></script>
<script src="js/utils.js"></script>
<script src="js/resultGrafik.js"></script>


</html>