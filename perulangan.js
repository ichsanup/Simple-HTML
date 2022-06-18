document.write('<h1>Tabe; perkalian</h1>');
for (var i = 1; i <= 15; i++) {
    document.write('<h2> perkalian' + i + '</h2>')
    for (var j = 1; j <= 12; j++) {
        var hasilkali = i * j;
        document.write(`${i} x ${j} =  ${hasilkali}<br>`);
    }
}
//script untuk membuat perulangan perkalian dari 1 - 15 dengan range 12