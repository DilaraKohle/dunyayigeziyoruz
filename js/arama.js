const ulkeler = {
    "İstanbul": "../ulke/istanbul.html",
    "Fransa": "../ulke/fransa.html",
    "İtalya": "../ulke/italya.html",
    "Balkanlar": "../ulke/balkanlar.html",
    "Kuzey Kıbrıs": "../ulke/kuzeykibris.html",
    "Japonya": "../ulke/japonya.html",
    "Mısır": "../ulke/misir.html",
    "Yunanistan": "../ulke/yunanistan.html",
};

// Öneri göstermek için fonksiyon
function oneriGoster(deger) {
    const oneriListesi = document.getElementById("oneriListesi");
    oneriListesi.innerHTML = ""; // Önce öneri listesini temizle
    let secilenIndex = -1; // Seçilen öğe için başlangıç indexi
    const aramaInput = document.getElementById("arama");

    if (deger) {
        const degerKucuk = deger.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        // Filtreleme işlemi
        const filtrelenmisUlkeler = Object.keys(ulkeler).filter(ulke =>
            ulke.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").startsWith(degerKucuk)
        );

        if (filtrelenmisUlkeler.length === 0) {
            const div = document.createElement("div");
            div.textContent = "Ülke bulunamadı";
            div.className = "oneri-item";
            oneriListesi.appendChild(div);
        } else {
            // Her ülkeyi öneri listesine ekle
            filtrelenmisUlkeler.forEach((ulke) => {
                const div = document.createElement("div");
                div.textContent = ulke;
                div.className = "oneri-item";
                div.onclick = () => {
                    aramaInput.value = ulke;
                    window.location.href = ulkeler[ulke]; // Yönlendirme yap
                    oneriListesi.innerHTML = ""; // Öneri listesini temizle
                };
                oneriListesi.appendChild(div);
            });
        }
    }

    // Klavye ile gezinti ve seçim işlemleri
    aramaInput.onkeydown = function (event) {
        const items = document.querySelectorAll(".oneri-item");
        if (items.length === 0) return; // Öneri yoksa işlem yapma

        if (event.key === "ArrowDown") {
            if (secilenIndex < items.length - 1) {
                secilenIndex++;
            }
            updateSelection(items);
           
        } else if (event.key === "ArrowUp") {
            if (secilenIndex > 0) {
                secilenIndex--;
            }
            updateSelection(items);
           
        } else if (event.key === "Enter") {
            if (secilenIndex > -1 && items[secilenIndex]) {
                items[secilenIndex].click(); // Seçili öğeyi tıkla
            }
            
        }
    };

    // Seçilen öğe vurgulama fonksiyonu
    function updateSelection(items) {
        items.forEach((item, index) => {
            item.classList.remove("selected");
            if (index === secilenIndex) {
                item.classList.add("selected");
                item.scrollIntoView({ behavior: "smooth", block: "nearest" }); // Seçilen öğeye kaydır
                aramaInput.value = item.textContent; // Seçilen öğeyi arama kutusuna yaz
            }
        });
    }
}


// Arama butonuna tıklama işlemi
function aramaYap() {
    const deger = document.getElementById("arama").value;
    if (deger && ulkeler[deger]) {
        window.location.href = ulkeler[deger];
    } else {
        alert("Lütfen geçerli bir ülke girin!");
    }
}

// Enter tuşuna basıldığında işlem yap
document.getElementById("arama").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const deger = this.value;
        if (deger && ulkeler[deger]) {
            window.location.href = ulkeler[deger];
        } else {
            alert("Lütfen geçerli bir ülke girin!");
        }
        event.preventDefault();
    }
});

// Sayfa yüklenirken daha önce yapılan arama varsa yeniden işlemi başlat
window.addEventListener("load", function() {
    const aramaDegeri = localStorage.getItem("aramaDegeri");
    if (aramaDegeri && ulkeler[aramaDegeri]) {
        window.location.href = ulkeler[aramaDegeri];
    }
});

// Arama butonuna event listener ekleyelim
document.querySelector(".search-bar button").addEventListener("click", aramaYap);