var waktuAwal = 10;
textArea = $("#areaKetik")
getTime = setInterval(waktu, 1000);
start = false

# munculin pertama kali
$("#Modal").modal('show');

function hitung(){
	var banyak_kata = document.getElementById('areaKetik').value
	banyak_kata = banyak_kata.split(" ")
	var hitungKata = banyak_kata.length;
	
	return hitungKata
}

# perhitungan waktu mundur
function waktu(){
	var element = document.getElementById("timer");
	element.innerHTML = waktuAwal;
	if(start == true) {
		waktuAwal--;
	}
	if (waktuAwal == -1) {
		clearInterval(getTime)
		$("#loserModal").modal()
		document.getElementById("totalKata").innerHTML = "jumlah kata yang telah diketik: " + hitung() + " kata dalam 1 menit.";
	}
	if (waktuAwal < 10) {
		element.style.color='red';
	}
	console.log(waktuAwal);
}

# teks buat soal
var teks1 = "Musikalisasi Puisi adalah sebuah komposisi seni garapan yang memuat pembacaan puisi, lagu dan musik yang di padukan dalam sebuah komposisi atau aransmen musik yang berimbang dalam penyajiannya sehingga mengangkat maksud yang terkandung dalam puisi melebihi bentuk aslinya ketika di baca, puisi adalah motor yang memicu munculnya karakter komposisi musikal, munculnya karakter pembacaan yang didasari oleh emosi yang di kandung puisi bukan dari unsur atau pengaruh dari luar puisi, intinya musikalisasi puisi adalah media ungkap lain untuk mengangkat kandungan puisi agar lebih menarik dan mudah dicerna dalam bentuk pengertian dan mudah diingat dalam bentuk pemaknaan kalimat-kalimat yang tersirat pada puisi tersebut. Apabila kreator/aranger membawakan tanpa ada tiga unsur di atas dapat disimpulkan seni ini bukan musikalisasi puisi, dan peserta yang membawakan diluar dari kontek ciri maka dianggap gagal atau diskualifikasi. Jadi, ketiga unsur diatas mutlak harus ada dalam sebuah penggarapan Musikalisasi Puisi. Ciri - ciri Musikalisasi Puisi adalah Komposisi Musik, Pembacaan Puisi, Lagu."
teks2 = "Sahabat bagaikan tempat Aku berteduh. Bila diriku terkena air mata dalam kesedihan. Di sanalah diriku dapat berbagi dalam hidup ku, yang tidak pernah Aku dapatkan di tempat lain. Hanya sahabat lah yang mampu mengerti dan memahami Apa yang sedang Aku alami saat ini. Masih ingat kah saat kita bersama dahulu. Mengikat tali persahabatan dengan begitu erat yang mungkin tidak seorang pun dapat melepasnya untuk memisahkan kita semua. Namun detik demi detik kian berlalu, semua telah hilang di telan zaman. Bagaikan dedaunan yang terurai tanah, yang tak bisa kembali seperti semula. Saat hati ini teringat pada kalian, saat itu pula air mata ini keluar menetes. Saat mata ini melihat semua kenangan, saat itu pula Aku ingin bersama kalian. Namun, apakah itu hanya sebatas angin yang kian berlalu begitu saja? Hanya waktu yang bisa menjawab itu semua. "
teks3 = "Bahasa pemrogaman di masa sekarang, sudah merupakan hal yang perlu untuk dipelajari. Dengan mempelajari bahasa pemrograman, kita bukan saja dapat membuat sebuah aplikasi maupun website, namun juga berguna untuk meningkatkan pola pikir kita secara logis. Namun, akan sangat sulit untuk menjelajahi bahasa pemrograman dengan menyenangkan. Area 120, sebuah inkubator milik Google, merilis sebuah game mobile yang bertujuan untuk menyelesaikan masalah tersebut. Game dengan nama Grasshopper merupkan sebuah game mempelajari bahasa pemrograman javascript secara lebih menyenangkan. Grasshopper merupakan game menyusun puzzle sambil belajar konsep pemrograman JavaScript. Game ini dapat dimainkan di Android maupun di iOS. Game ini dimainkan dengan cara menyusun puzzles berupa kumpulan code, dengan studi kasus tertentu tergantung dari tingkatan yang dilalui. Setiap tingkatan memiliki topik yang berbeda. Game ini juga memiliki tahap quiz untuk menguji pengetahuan kita berdasarkan topik dari tingkatan tersebut. selain itu, di setiap tingkatan atau topik memiliki sebuah penjelasan singkat mengenai topik yang diangkat tersebut."
teks4 = "Data centre berbentuk sebuah silinder putih besar yang di dalamnya berisi komputer-komputer server, akan berada di dasar laut selama kurang lebih 5 tahun. Data centre ini ditenggelamkan oleh Microsoft untuk mencari tahu apakah cara ini bisa membantu menghemat efisiensi energi yang dikonsumsi. Kabel bawah laut menghubungkan data centre yang ditenggelamkan dengan energi listrik dan data dari pantai sebelum menghubungkannya ke seluruh dunia. Menurut teori yang dipercaya, biaya untuk mendinginkan komputer akan jauh lebih hemat jika komputer-komputer tersebut disimpan di bawah air. Akan tetapi, jika silinder putih yang menyimpan komputer ini bocor dan air lautnya masuk, maka semua komputer akan rusak dan tidak akan bisa diperbaiki. Lokasi yang dipilih oleh Microsoft untuk eksperimen ini adalah kepulauan Orkney yang ada di Skotlandia. Tempat ini dipilih karena menjadi pusat penelitian energi terbarukan. Lembaga lain yang berpartisipasi adalah European Marine Energy Center (EMEC) yang memberikan kabel bawah laut untuk menghubungkan data centre ke daratan."
teks5 = "Beberapa jam yang lalu secara resmi diumumkan bahwa Microsoft telah mengakuisisi GitHub seharga $7.5 miliar. Pengumuman ini sontak membuat ramai jagat maya mengingat GitHub sangat dekat dengan komunitas open source dan Microsoft dianggap sebagai perusahaan yang bertolak belakang dengan semangat open source (meskipun dibeberapa tahun belakang ini sudah berubah). Mengapa Microsoft mengambil keputusan ini? Tidak akan ada yang menyangkal pernyataan bahwa GitHub adalah layanan hosting Git paling populer di dunia. Sudah lebih dari 28 juta developer yang berkolaborasi melalui platform ini. Total lebih dari 85 juta repositori telah dibuat di hampir seluruh negera yang ada di bumi. Dari project ecek-ecek sampai korporasi tingkat dunia menjadi pelanggannya dan Microsoft menjadi salah satu pelanggan paling aktif di GitHub. Produk editor teks besutan Microsoft, Visual Studio Code yang dicintai banyak orang dikembangkan menggunakan teknologi GitHub yaitu Electron. Tidak ada yang berubah dari GitHub dalam waktu dekat. Situs ini tetap menjadi terbuka semua orang."
teks6 = "There are two kinds of dreams. There are dreams that we have while asleep and dreams that we have while we are awake. What is the connection between the two types? Both kinds of dreams are about the yearnings that are held deep inside us. Some of these desires are so secret that we dare not share them even with our closest friends. Those of us that dare to put our dreams down on paper are showing the courage and faith that they will come true. Life is filled with Dreams, Dreams which give our life meaning and inspire us to change. We dream about change and improvement, we set goals, seemingly impossible goals, goals which challenge us, and we dream about the future, when we will reach our goals, when our lives will change for the better. Without our dreams, Life and humanity would be hopelessly dull and colorless."
teks7 = "I used to think that I could not go on. And life was nothing but an awful song. But now I know the meaning of true love. I'm leaning on the everlasting arms. If I can see it, then i can do it. If i just believe it, there's nothing to it. I believe i can fly, I believe i can touch the sky. I think about it every night and day (Night and day), spread my wings and fly away. I believe i can soar. I see me running through that open door. I believe i can fly, I believe i can fly, I believe i can fly. See I was on the verge of breaking down. Sometimes silence can seem so loud. There are miracles in life I must achieve. But first I know it starts inside of me. I can see it, then I can be it."
teks8 = "Spend all your time waitingfor that second chancefor a break that would make it okaythere's always one reasonto feel not good enoughand it's hard at the end of the dayI need some distractionoh beautiful releasememory seeps from my veinslet me be emptyand weightless and maybeI'll find some peace tonight in the arms of an angelfly away from herefrom this dark cold hotel roomand the endlessness that you fearyou are pulled from the wreckageof your silent reverieyou're in the arms of the angelmay you find some comfort there so tired of the straight lineand everywhere you turnthere's vultures and thieves at your backand the storm keeps on twistingyou keep on building the liethat you make up for all that you lackit don't make no differenceescaping one last timeit's easier to believe in this sweet madness ohthis glorious sadness that brings me to my knees"
teks9 = "Spend all your time waitingfor that second chancefor a break that would make it okaythere's always one reasonto feel not good enoughand it's hard at the end of the dayI need some distractionoh beautiful releasememory seeps from my veinslet me be emptyand weightless and maybeI'll find some peace tonight in the arms of an angelfly away from herefrom this dark cold hotel roomand the endlessness that you fearyou are pulled from the wreckageof your silent reverieyou're in the arms of the angelmay you find some comfort there so tired of the straight lineand everywhere you turnthere's vultures and thieves at your backand the storm keeps on twistingyou keep on building the liethat you make up for all that you lackit don't make no differenceescaping one last timeit's easier to believe in this sweet madness ohthis glorious sadness that brings me to my knees in the arms of an angel fly away "
teks10 = "O love is the crooked thing, There is nobody wise enough To find out all that is in it, For he would be thinking of love Till the stars had run away And the shadows eaten the moon. Ah, penny, brown penny, brown penny, One cannot begin it too soon. Grip it, rip it, stick it, Bombed it, flopped it, topped it too. Stay, sit, slice, scoot, Run, kick, roll, draw, Carry, fly, die, spin, Watch the little ball go in. I rolled up on the beat to hear some jazz and chill with my galaxy. The coffee was nice and strong and the cat  with the sax could really blow. The scene was nice and mellow it was a real groove. There's plenty of empty seats around man, fall out, I'm the lama of this circle. The richness of the language is in numbers, I don’t think for it. "

# teks Bahasa Indonesia
var kumpulanTeks = [teks1, teks2, teks3, teks4, teks5];
var soal = kumpulanTeks[Math.floor(Math.random() * 5)]


# Teks Bahasa Inggris
var kumpulanTeks2 = [teks6, teks7, teks8, teks9, teks10];
var soal2 = kumpulanTeks2[Math.floor(Math.random() * 5)]


# tampilin Teks Bahasa Indonesia
$('#indo').click(function() {
	document.getElementById("kolomSoal").innerHTML = soal;
})

# tampilin Teks Bahasa Inggris
$('#english').click(function() {
	document.getElementById("kolomSoal").innerHTML = soal2;
})

# fungsi waktu berjalan saat karakter pertama muncul
# fungsi selesai ketika semua kata berhasil diselesaikan
textArea.keyup(function(){
	start = true;

	console.log(start)
	console.log(textArea.val())
	if(textArea.val() == soal ||  textArea.val() == soal2) {
		$("#winnerModal").modal()
		clearInterval(getTime)
	}
})

# fungsi agar klik background tidak berfungsi saat modal keluar
$("#Modal").modal({
backdrop: 'static',
keyboard: false
})