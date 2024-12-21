// Festival verileri
const events = [
    {
        date: "10 - 20 Ocak",
        country: "Avustralya",
        name: "Sydney Festivali",
        description: "Tiyatro, müzik, dans ve açık hava etkinlikleriyle dolu bir kültür festivali."
    },
    {
        date: "17 - 20 Ocak",
        country: "İskoçya",
        name: "Up Helly Aa Viking Festivali",
        description: "İskoçya'nın Viking tarihini onurlandıran festival, meşaleli yürüyüş ve Viking gemi yakma töreniyle ünlüdür."
    },
    {
        date: "1 - 14 Şubat",
        country: "Japonya",
        name: "Sapporo Kar Festivali",
        description: "Dünyaca ünlü buz ve kar heykel etkinliği, kış sezonunun en görkemli kutlamalarından biridir."
    },
    {
        date: "15 - 28 Şubat",
        country: "Brezilya",
        name: "Rio Karnavalı",
        description: "Dünyanın en büyük karnavalı, renkli kostümler ve samba gösterileriyle Brezilya'da hayat buluyor."
    },
    {
        date: "25 Şubat",
        country: "İtalya",
        name: "Venedik Karnavalı",
        description: "Geleneksel maskeler ve kostümlerle ünlü olan bu festival, Venedik’in kültürel mirasını yaşatıyor."
    },
    {
        date: "17 Mart",
        country: "İrlanda",
        name: "St. Patrick Günü",
        description: "İrlanda’nın ulusal bayramı olan bu günde, geçit törenleri ve yeşil temalı kutlamalar yapılır."
    },
    {
        date: "20 Mart",
        country: "Meksika",
        name: "Equinox Festivali",
        description: "Chichen Itza’da, bahar ekinoksu ile güneşin piramitte oluşturduğu özel bir ışık oyunu kutlanır."
    },
    {
        date: "1 - 30 Nisan",
        country: "Türkiye",
        name: "İstanbul Lale Festivali",
        description: "İstanbul'un çeşitli parklarında ve bahçelerinde lale çiçekleriyle yapılan, şehrin geleneksel çiçeklerinin kutlandığı bir festivaldir."
    },
    {
        date: "1 - 30 Nisan",
        country: "Japonya",
        name: "Sakura Çiçek Açma Festivali",
        description: "Japonya'da kiraz çiçeklerinin açmasıyla baharın gelişi renkli kutlamalarla karşılanır."
    },
    {
        date: "15 - 17 Nisan",
        country: "Tayland",
        name: "Songkran (Tayland Yeni Yılı)",
        description: "Su festivali olarak bilinen Songkran, Tayland’da yeni yılın gelişini simgeler."
    },
    {
        date: "1 Mayıs",
        country: "Almanya",
        name: "Walpurgisnacht (Cadılar Bayramı)",
        description: "Almanya’da geleneksel olarak kutlanan ve doğanın uyanışını simgeleyen Walpurgis Gecesi, kostümler ve eğlencelerle kutlanır."
    },
    {
        date: "15 Mayıs - 4 Haziran",
        country: "Fransa",
        name: "Cannes Film Festivali",
        description: "Dünyanın dört bir yanından gelen ünlü sinemacılar ve oyuncular, prestijli Cannes Film Festivali'nde bir araya gelir."
    },
    {
        date: "21 Haziran",
        country: "İngiltere",
        name: "Stonehenge Yaz Gündönümü Festivali",
        description: "Stonehenge’de toplanan insanlar, yaz gündönümünü karşılamak için sabah güneşinin doğuşunu izler."
    },
    {
        date: "16 - 25 Haziran",
        country: "İspanya",
        name: "San Juan Festivali",
        description: "Ateş ve suyun buluştuğu bu festivalde, İspanya sahillerinde gece boyunca ateşler yakılarak dans edilir."
    },
    {
        date: "27 - 29 Haziran",
        country: "Finlandiya",
        name: "Juhannus (Orta Yaz Festivali)",
        description: "Finlandiya’da yazın gelişini kutlamak için yapılan bu festivalde ateşler yakılır ve doğada kamplar kurulur."
    },
    {
        date: "4 Temmuz",
        country: "ABD",
        name: "Bağımsızlık Günü",
        description: "ABD'nin bağımsızlığını kutladığı bu günde, havai fişek gösterileri, geçit törenleri ve barbeküler yapılır."
    },
    {
        date: "6 - 14 Temmuz",
        country: "İspanya",
        name: "San Fermin Festivali",
        description: "Pamplona şehrinde düzenlenen boğa koşusu ile ünlü festival, geleneksel İspanyol kültürünü yansıtır."
    },
    {
        date: "1 - 31 Ağustos",
        country: "İskoçya",
        name: "Edinburgh Fringe Festivali",
        description: "Dünyanın en büyük sanat festivali, tiyatro, dans, komedi ve müzik performanslarıyla dolu bir ay sunar."
    },
    {
        date: "28 Ağustos",
        country: "İngiltere",
        name: "Notting Hill Karnavalı",
        description: "Londra’da Karayip kültürünü kutlayan bu karnaval, renkli kostümler ve dans gösterileriyle ünlüdür."
    },
    {
        date: "5 - 15 Eylül",
        country: "Kanada",
        name: "Toronto Uluslararası Film Festivali",
        description: "Dünyanın dört bir yanından gelen filmlerle sinemaseverlerin buluştuğu prestijli bir film festivalidir."
    },
    {
        date: "21 Eylül",
        country: "Almanya",
        name: "Oktoberfest",
        description: "Münih'te düzenlenen dünyanın en büyük bira festivali, geleneksel Alman müziği ve yemekleriyle kutlanır."
    },
    {
        date: "3 - 9 Ekim",
        country: "Almanya",
        name: "Berlin Işık Festivali",
        description: "Berlin'in ünlü yapılarının ışık ve projeksiyonlarla aydınlatıldığı, göz alıcı bir görsel şölen sunan festival."
    },
    {
        date: "31 Ekim",
        country: "ABD",
        name: "Cadılar Bayramı",
        description: "ABD ve diğer Batı ülkelerinde kutlanan bu festivalde insanlar kostümler giyer ve şeker toplar."
    },
    {
        date: "5 Kasım",
        country: "İngiltere",
        name: "Guy Fawkes Gecesi",
        description: "İngiltere genelinde havai fişeklerle kutlanan bu gün, 1605 yılındaki barut komplosunun başarısızlığını anmak için yapılır."
    },
    {
        date: "27 Kasım",
        country: "ABD",
        name: "Şükran Günü",
        description: "ABD'de ailelerin bir araya gelip şükranlarını sunduğu ve geleneksel yemeklerle kutlanan bir bayram."
    },
    {
        date: "25 Aralık",
        country: "Dünya Çapında",
        name: "Noel",
        description: "Hristiyanların İsa’nın doğumunu kutladığı, hediyeleşmeler ve özel yemeklerle dolu bir bayramdır."
    },
    {
        date: "31 Aralık",
        country: "Dünya Çapında",
        name: "Yılbaşı",
        description: "Yeni yılın gelişini kutlamak için dünyanın dört bir yanında havai fişek gösterileri ve partiler düzenlenir."
    },
];

// Festival listelerini dinamik olarak ekleme
const eventListContainer = document.getElementById('event-list');

// Her bir etkinlik için HTML içeriği oluşturma
events.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');

    eventItem.innerHTML = `
        <span class="event-date">${event.date}</span>
        <span class="event-country">${event.country}</span>
        <span class="event-name">${event.name}</span>
        <p class="event-description">${event.description}</p>
    `;

    eventListContainer.appendChild(eventItem);
});
