window.onload = function () {
    document.getElementById('btnGet')
        .addEventListener('click', function () {
            var xhr = new XMLHttpRequest();
            xhr.open('get','');
            document.getElementById('getDiv')
                .innerHTML = 'OK';
        });
}