function changeHeading() {
            let a = document.getElementById('heading');
            let b = document.getElementById('heading');
            a.style.color = 'blue';
            a.style.fontSize = '72px';
            a.innerHTML = 'this is another heading ';
        }
    function Back() {
        window.history.back();
    }
    function Next() {
        window.history.forward();
    }