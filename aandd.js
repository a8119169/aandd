function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentialNumbers(array, n) {
    var n = Math.floor(Math.random() * 100) + 1;
    for (var v = 1; v < n; v++) {
        array.push(v);
    }
}

unction createRandomNumbers(array, n) {
    for (var v = 1; v < n; v++) {
        for (var i = 0; i < n; i++) {
            ran = Math.floor(Math.random() * 100) + 1;
            array.push(ran);
        }
    }
}