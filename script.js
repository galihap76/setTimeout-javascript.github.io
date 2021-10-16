//buat variabel
let btn = document.getElementsByTagName('button')[0];

//ketika tombol di klik
btn.addEventListener('click', function(){
   //buat sebuah waktu (SetTimeout)
    setTimeout(function(){
        //buat sebuah peringatan
        alert('Hai saya javascript!');
        //buat kemunculan peringatan ketika sudah 3 detik
    },3000)
});
  