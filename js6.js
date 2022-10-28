function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://www.hogarmania.com/archivos/202106/flores-de-gerbera-en-el-jardin-XxXx80.jpg";
            break;
        case 2:
            imagen.src = "https://la100.cienradios.com/resizer/AE7zi42x9ZrOL-UBltRez3KIA7g=/arc-photo-radiomitre/arc2-prod/public/APJUL75LLREIHE4PZJZZIQ5TJQ.gif";
            break;
        case 3:
            imagen.src = "https://img.freepik.com/vector-premium/vector-icono-dibujos-animados-concepto-objeto-reloj-despertador-rojo_484148-122.jpg";
            break;
        case 4:
            imagen.src = "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg";
            break;
        default:
            imagen.src = "https://cdn-icons-png.flaticon.com/512/992/992660.png";
            break;
    }
}