const object = {
    nama : 'Michael Jacob Ephariem Jehuda' ,
    umur : '26' ,
    "Pendidikan Terakhir" : "Sarjana Teknik Elektro" , 
    "Pemrograman yang pernah dipelajari" : "Python,r javascript"
}

console.log( "nama : "+ 'Michael Jacob Ephariem Jehuda' +'\n' +
             "umur : " + '26' + '\n' +
             "Pendidikan Terakhir :" + "Sarjana Teknik Elektro" +'\n' + 
             "Pemrograman yang pernah dipelajari :" +  "Python,r javascript"
)

// perbedaan var , let dan const adalah

/* deklarasi var adalah scope global atau scope function sementara let dan const adalah  scope blok */

/* variabel var dapat diperbaharui dan dideklarasikan ulang didalam scope nya;
 variabel let dapat diperbaharui namun tidak dapat dideklarasikan ulang; 
 variabel const juga tidak dapat diperbaharui maupun di deklarasikan ulang. */


 /*  const value = 123;
 value = 456 ; */

/* let foo ='hello1'
let foo ='hello2' 
console.log(foo) */

/* var fooo ='hello1'
var fooo ='hello2'
console.log(foo)  */


let angka = 10;

    if(angka %2 == 0){
        console.log("\n angka genap");
    }
    else{
        console.log("angka ganjil");
    }

let harga = 20000;
    if(harga >=25000){
        console.log("output mahal")
    }
    else if(harga >10000 && harga <25000){
        console.log("output sedang")
    }
    else if(harga > 0 && harga <10000){
        console.log("output murah")
    }

/* penggunaan do while untuk mencetak angka 10-15*/ 
   var angkaa_do = 10;

do{    
    console.log('doWhile = '+ angkaa_do);
    angkaa_do +=1;
}
while (angkaa_do <=15);

/* penggunaan for untuk mencetak angka 10-15 */

for (let angkaa_for=10;angkaa_for<angkaa_do;angkaa_for++)
{
    console.log("for = " +angkaa_for);
}

/* penggunaan while untuk mencetak angka 10-15*/ 
    let angka_while=10;
    while(angka_while<=15){
        console.log("while = "+ angka_while);
        angka_while++;
    }


/* buat fungsi penentuan angka kos kirim jika jarak <=2km maka ongkos kirim jadi 5000,
jika jarak >2km tiap km berikutnya akan dikenakan 3000 */
const hargaTotal = function totalOngkos(jarakTempuh)
{
    let ongkos;
    if (jarakTempuh<=2){
        ongkos=5000;
    }
    else{
        ongkos=5000;
        ongkos = 5000 + (3000 * (jarakTempuh-2));
    }
    return ongkos;
}
console.log(hargaTotal(4));


/* Buatlah fungsi yang menerima paramaeter, didalam fungsi sebuah perulangan dan kondisi dengan ketentuan
    - jika angka bisa dibagi 3 maka cetak fazz
    - jika angka bisa dibagi 5 maka cetak Track
    - jika angka bisa dibagi 3 dan 5 maka cetak fazz Track */

const fizzBuzz = function fizzBuzz(param){
    let angka = 1 
    while(angka<=param){
    
        if(angka%3===0 && angka%5===0)
            {
                console.log(angka + "- fazztrack")
           }
        else if(angka%5===0){
                console.log(angka + "- track")

        }
        else if(angka%3===0 )
        {
               console.log(angka + "- fazz")            
        }
        angka+=1;
    }
}

fizzBuzz(15);


/* Buatlah fungsi dengan mencetak segita terbalik dengan bintang dari fungsi yang dibuat
akan menerima parameter num (angka) yang digunakan untuk menentukan jumlah
baris */


const segitigaTerbalik = function masukkanBaris(baris){
    let segitiga = ''
    for (let i = 0; i<baris; i++){
        for(let j = baris ; j>i; j--){
        segitiga += '*'
         
        }
        segitiga += '\n'
    }
    return segitiga
}

console.log(segitigaTerbalik(5)+"\n");

const persegiBolong = function masukkanBaris(baris){
    let persegi = '' ;
    for (let i = 0;i<baris;i++){
            for(let j =0;j<baris;j++)
            {
                if(i==0 || i== (baris-1)){
                persegi += '*'
                } 
            else
            {
                if( j==0||j == (baris-1)){
                   persegi += '*'
                }
                else
                {
                    persegi +=' '
                }
            }
        }   
        persegi+='\n'
    }
    return persegi
}

console.log(persegiBolong(10))


var btn = document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div=document.getElementById("cardDiv");

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
            return res.json();
        })
    .then((post)=>{
        for(let index=0; index < 1 ; index++){
            div.innerHTML+=
           `
               <table class="table table-striped">    
                    <tbody>
                            <tr>
                                <th scope="row">${post[con].id}</th>
                                <td>${post[con].name}</td>
                                <td>${post[con].address.street}</td>
                                <td>${post[con].company.name}</td>
                                <td>${post[con].phone}</td>
                                </tr>
                        
                        </tr>
                    </tbody>
                </table>
            `
            con = con+1;
            
        }
    })
    .catch((error)=>{
        consolet.log(error);
    })
}
