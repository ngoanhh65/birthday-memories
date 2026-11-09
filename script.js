const photoFiles = [
  "1749693868667_2286097651012399160_2926194390534382874_788f5e6beea90b3a7ad8fe5323b5d8a3.jpg",
  "1749693869116_2286097651012399160_2926194390534382874_3a89131beee697ecebe5fdee396f1b62.jpg",
  "1749693922287_2286097651012399160_2926194390534382874_3ecc1310b1827b4880aa5c7c370685a4.jpg",
  "1749693922552_2286097651012399160_2926194390534382874_cdc495f38ffffa34b67d3c92e3c78c84.jpg",
  "1749693957686_2286097651012399160_2926194390534382874_3ccd7ddbede2a7b1a9874c409b2ade49.jpg",
  "1749694037644_2286097651012399160_2926194390534382874_fae7076440c3b8ee78195aa244be45f7.jpg",
  "1794197863419_2286097651012399160_2926194390534382874_8a88609886284a86f6c087dac6d24093.jpg",
  "1794197863520_2286097651012399160_2926194390534382874_a9e450281f71cf79c3697922d9d91397.jpg",
  "1794197863562_2286097651012399160_2926194390534382874_0301cf8175134ddd246da62f75c0d8a3.jpg",
  "1794197863607_2286097651012399160_2926194390534382874_4f13b263d0fd4d1e884ad6883af84be2.jpg",
  "1794197863650_2286097651012399160_2926194390534382874_605ff9fe58c4f8de8c007e1b6c9be2a4.jpg",
  "1794197863687_2286097651012399160_2926194390534382874_4da32800f7e1c81b896bdd1565bc72e6.jpg",
  "1794197863726_2286097651012399160_2926194390534382874_852cdd6806f0161dec7a09fe8907ae2e.jpg",
  "1794197863764_2286097651012399160_2926194390534382874_30b72e00722525451d105db64f10d95b.jpg",
  "1794197863805_2286097651012399160_2926194390534382874_1181b916f0278a4050f2761f82e6acac.jpg",
  "1794197863840_2286097651012399160_2926194390534382874_92a57cab6f764fe871886094ea81f229.jpg",
  "1794197863877_2286097651012399160_2926194390534382874_3ae3e9976ce85034d01c294fd2dca280.jpg",
  "1794197863913_2286097651012399160_2926194390534382874_536f302a0d1cfb06924ab356e6b6821e.jpg",
  "1794198163003_2286097651012399160_2926194390534382874_b6437c78dfb49c77024612ee0a5c0d7c.jpg",
  "1794198163345_2286097651012399160_2926194390534382874_4cd438adc8cc28c51317c5b431c30c09.jpg",
  "1794198163426_2286097651012399160_2926194390534382874_f136989ac52ae85451233206ca53ac81.jpg",
  "1794198163544_2286097651012399160_2926194390534382874_e010584df8e767e5f3ee04f011135979.jpg",
  "1794198163691_2286097651012399160_2926194390534382874_22ccf3c34809552a6904c313a7bf69a6.jpg",
  "1794198163763_2286097651012399160_2926194390534382874_c12c8165185c1c8784a7aecb7e0072a4.jpg",
  "1794198163800_2286097651012399160_2926194390534382874_d5d5219611d46754a0489626b4116110.jpg",
  "1794198163841_2286097651012399160_2926194390534382874_7fc894e3bd32dfe43d747e944228a98d.jpg",
  "1794198163999_2286097651012399160_2926194390534382874_97cc7d94eb18b31c9671d78e9a6ac7a7.jpg",
  "1794198164072_2286097651012399160_2926194390534382874_99b5b09d98e1d5eeb48be043b5db9aff.jpg",
  "1794198164107_2286097651012399160_2926194390534382874_4c88af772b498beacb978a70d3cdf47a.jpg",
  "1794198164140_2286097651012399160_2926194390534382874_c97b9a094e4d227ecd5679950b2030bd.jpg"
];
const gallery = document.getElementById('gallery');
const filmTrack = document.getElementById('filmTrack');
photoFiles.forEach((file, i) => {
  const src = encodeURI(file);
  const figure = document.createElement('figure');
  figure.style.setProperty('--tilt', (i % 2 ? '1.5deg' : '-1.5deg'));
  figure.innerHTML = '<img loading="lazy" src="' + src + '" alt="Kỷ niệm ' + (i+1) + '"><figcaption>memory no. ' + String(i+1).padStart(2,'0') + '</figcaption>';
  figure.querySelector('img').addEventListener('click', () => openLightbox(src));
  figure.querySelector('img').addEventListener('error', () => figure.remove());
  gallery.appendChild(figure);
  const strip = document.createElement('img');
  strip.loading = 'lazy'; strip.src = src; strip.alt = 'Kỷ niệm';
  strip.onerror = () => strip.remove();
  filmTrack.appendChild(strip);
});
photoFiles.forEach(file => { const img = document.createElement('img'); img.src = encodeURI(file); img.alt=''; img.loading='lazy'; img.onerror=()=>img.remove(); filmTrack.appendChild(img); });
function openLightbox(src){document.getElementById('lightboxImage').src=src;document.getElementById('lightbox').classList.remove('hidden')}
document.getElementById('closeLightbox').addEventListener('click',()=>document.getElementById('lightbox').classList.add('hidden'));
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')e.currentTarget.classList.add('hidden')});
document.querySelectorAll('.song').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.song').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.getElementById('songTitle').textContent=btn.dataset.title;
  document.getElementById('musicPlayer').src='https://www.youtube-nocookie.com/embed/'+btn.dataset.id+'?autoplay=1&rel=0';
}));
const wishes=[
'Chúc Banh tuổi mới luôn có thật nhiều lý do để mỉm cười, kể cả trong những ngày bình thường nhất. ♡',
'Mong cậu luôn gặp được những người tử tế, những cơ hội tốt và những điều xứng đáng với sự cố gắng của mình.',
'Chúc mọi dự định cậu đang ấp ủ sẽ dần thành hiện thực. Cứ đi từng bước, rồi cậu sẽ đến nơi mình muốn.',
'Mong tuổi mới sẽ dịu dàng với cậu, đem đến nhiều niềm vui, trải nghiệm mới và những kỷ niệm thật đẹp.',
'Chúc Banh luôn tự tin là chính mình, không cần phải giống bất kỳ ai để trở nên đặc biệt.',
'Khi mệt thì nhớ nghỉ ngơi, khi vui thì cứ tận hưởng thật nhiều. Mong cậu luôn đối xử dịu dàng với bản thân.',
'Mong chúng mình sẽ còn có thật nhiều dịp gặp nhau, kể nhau nghe những câu chuyện mới và cùng cười như ngày trước.',
'Chúc cậu đủ can đảm để thử điều mới, đủ kiên nhẫn để theo đuổi điều mình thích và đủ bình yên để tận hưởng hành trình.',
'Tuổi mới, mong Banh sẽ có thêm nhiều chuyến đi, nhiều bức ảnh đẹp và thật nhiều khoảnh khắc muốn lưu giữ.',
'Chúc cậu luôn rạng rỡ theo cách riêng của mình. Những điều tốt đẹp nhất vẫn còn đang ở phía trước đó!'
];
let lastWish=-1;
document.getElementById('wishButton').addEventListener('click',()=>{
 let n;do{n=Math.floor(Math.random()*wishes.length)}while(n===lastWish&&wishes.length>1);lastWish=n;
 const el=document.getElementById('wishText');el.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:450});
 el.textContent=wishes[n]; showerPetals(24);
});
function showerPetals(amount=18){const holder=document.getElementById('petals');const glyphs=['✿','❀','♡','✧'];for(let i=0;i<amount;i++){const p=document.createElement('span');p.className='petal';p.textContent=glyphs[Math.floor(Math.random()*glyphs.length)];p.style.left=Math.random()*100+'%';p.style.animationDuration=(3+Math.random()*3)+'s';p.style.animationDelay=(Math.random()*.7)+'s';p.style.color=['#d98e9b','#e5bd6e','#a6b697'][i%3];holder.appendChild(p);setTimeout(()=>p.remove(),7000)}}
let remaining=10, timer=null, completed=false;
const answers=document.querySelectorAll('.answer');
function finishGame(){if(completed)return;completed=true;clearInterval(timer);document.getElementById('cakeArea').classList.remove('hidden');document.getElementById('gameMessage').textContent='Yay! Chiếc bánh sinh nhật đã xuất hiện rồi!';showerPetals(35)}
answers.forEach((btn,i)=>btn.addEventListener('click',()=>{
 if(completed||timer)return;
 if(i===1){btn.classList.add('correct');document.getElementById('gameMessage').textContent='Chính xác! Tình bạn đẹp được tạo nên từ những điều giản dị như thế.'}
 else{btn.classList.add('wrong');document.getElementById('gameMessage').textContent='Thử nghĩ thêm nhé — điều quan trọng nhất là sự chân thành!'}
 remaining=10;document.getElementById('timerLabel').textContent='10 giây';
 timer=setInterval(()=>{remaining--;document.getElementById('timerLabel').textContent=remaining+' giây';document.getElementById('timerBar').style.width=(remaining*10)+'%';if(remaining<=0)finishGame()},1000);
 if(i===1){setTimeout(finishGame,700)}
}));
document.getElementById('blowButton').addEventListener('click',()=>{document.querySelector('.cake').textContent='🎉';document.querySelector('#cakeArea p').textContent='Điều ước đã được gửi đến vũ trụ! Chúc Banh một tuổi mới thật rực rỡ.';document.getElementById('blowButton').textContent='Yêu cầu vũ trụ thực hiện điều ước ✨';document.getElementById('blowButton').disabled=true;showerPetals(60)});
