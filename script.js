// =========================
// 🎧 VOICE FILTER SYSTEM
// =========================

const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    // active style
    buttons.forEach(b => {
      b.classList.remove("active");
    });

    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {

      if (
        filter === "all" ||
        card.dataset.category === filter
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});


// =========================
// 🚀 DOM LOADED
// =========================

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🎯 FILTER SYSTEM
  ========================= */

  const filterBtns =
  document.querySelectorAll(".filters button");

  const voiceCards =
  document.querySelectorAll(".voice .card");

  filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      // active button
      filterBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      const filter =
      btn.getAttribute("data-filter");

      voiceCards.forEach(card => {

        const category =
        card.getAttribute("data-category");

        if (
          filter === "all" ||
          filter === category
        ) {

          card.style.display = "block";

        } else {

          card.style.display = "none";

        }

      });

    });

  });


  /* =========================
     🎠 VOICE SLIDER PRO
  ========================= */

  const container =
  document.getElementById("cardsContainer");

  if(container){

    const leftBtn =
    document.querySelector(".voice .left");

    const rightBtn =
    document.querySelector(".voice .right");

    const voiceCardsSlider =
    document.querySelectorAll(".voice .card");

    let voiceIndex = 2;

    // تحديث السلايدر
    function updateVoiceSlider(){

      const activeCard =
      voiceCardsSlider[voiceIndex];

      // إزالة active
      voiceCardsSlider.forEach(card => {
        card.classList.remove("active-voice");
      });

      // إضافة active
      activeCard.classList.add("active-voice");

      // حساب المنتصف
      const scrollPosition =
        activeCard.offsetLeft
        - (container.offsetWidth / 2)
        + (activeCard.offsetWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });

    }

    // next
    rightBtn.addEventListener("click", () => {

      if(
        voiceIndex <
        voiceCardsSlider.length - 1
      ){

        voiceIndex++;
        updateVoiceSlider();

      }

    });

    // prev
    leftBtn.addEventListener("click", () => {

      if(voiceIndex > 0){

        voiceIndex--;
        updateVoiceSlider();

      }

    });

    // أول تحميل
    updateVoiceSlider();

  }


  /* =========================
     🎵 VOICE PLAYER
  ========================= */

  document
  .querySelectorAll(".voice .card")
  .forEach(card => {

    const playBtn =
    card.querySelector(".play-btn");

    const audio =
    card.querySelector("audio");

    const timeEl =
    card.querySelector(".time");

    const progress =
    card.querySelector(".progress");

    if(
      !playBtn ||
      !audio ||
      !timeEl ||
      !progress
    ) return;

    // تحميل مدة الصوت
    audio.addEventListener(
      "loadedmetadata",
      () => {

        const min =
        Math.floor(audio.duration / 60);

        const sec =
        Math.floor(audio.duration % 60);

        timeEl.textContent =
          `${min}:${sec < 10 ? "0" : ""}${sec}`;

      }
    );

    // تشغيل / إيقاف
    playBtn.addEventListener("click", () => {

      // وقف كل الأصوات
      document
      .querySelectorAll(".voice audio")
      .forEach(a => {

        if(a !== audio){

          a.pause();
          a.currentTime = 0;

          const parent =
          a.closest(".card");

          parent.querySelector(
            ".play-btn"
          ).innerHTML =
          '<i class="fa-solid fa-play"></i>';

          parent.querySelector(
            ".progress"
          ).style.width = "0%";

        }

      });

      // تشغيل الحالي
      if(audio.paused){

        audio.play();

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

      } else {

        audio.pause();

        playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

      }

    });

    // تحديث الوقت والخط
    audio.addEventListener("timeupdate", () => {

      const current =
      audio.currentTime;

      const duration =
      audio.duration;

      if(duration){

        // progress
        const percent =
        (current / duration) * 100;

        progress.style.width =
        `${percent}%`;

        // الوقت
        const min =
        Math.floor(current / 60);

        const sec =
        Math.floor(current % 60);

        timeEl.textContent =
        `${min}:${sec < 10 ? "0" : ""}${sec}`;

      }

    });

    // نهاية الصوت
    audio.addEventListener("ended", () => {

      playBtn.innerHTML =
      '<i class="fa-solid fa-play"></i>';

      progress.style.width = "0%";

      const min =
      Math.floor(audio.duration / 60);

      const sec =
      Math.floor(audio.duration % 60);

      timeEl.textContent =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

    });

  });


  /* =========================
     🎠 WORK SLIDER
  ========================= */

  const track =
  document.querySelector(
    ".Ourwork .slider-track"
  );

  if(track){

    const nextBtn =
    document.querySelector(
      ".Ourwork .next"
    );

    const prevBtn =
    document.querySelector(
      ".Ourwork .prev"
    );

    const cardsWork =
    document.querySelectorAll(
      ".Ourwork .card-content"
    );

    let currentIndex = 2;

    // تحديث السلايدر
    function updateSlider(){

      const activeCard =
      cardsWork[currentIndex];

      // إزالة active
      cardsWork.forEach(card => {
        card.classList.remove("active-card");
      });

      // إضافة active
      activeCard.classList.add("active-card");

      // حساب المنتصف
      const scrollPosition =
        activeCard.offsetLeft
        - (track.offsetWidth / 2)
        + (activeCard.offsetWidth / 2);

      track.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });

    }

    // next
    nextBtn.addEventListener("click", () => {

      if(
        currentIndex <
        cardsWork.length - 1
      ){

        currentIndex++;
        updateSlider();

      }

    });

    // prev
    prevBtn.addEventListener("click", () => {

      if(currentIndex > 0){

        currentIndex--;
        updateSlider();

      }

    });

    // أول تحميل
    updateSlider();

  }


  /* =========================
     🎧 WORK AUDIO
  ========================= */

  document
  .querySelectorAll(".Ourwork .card-content")
  .forEach(card => {

    const playBtn =
    card.querySelector(".play-btn");

    const audio =
    card.querySelector("audio");

    const timeEl =
    card.querySelector(".time");

    const progress =
    card.querySelector(".progress");

    if(
      !playBtn ||
      !audio ||
      !timeEl ||
      !progress
    ) return;

    // تحميل مدة الصوت
    audio.addEventListener(
      "loadedmetadata",
      () => {

        const min =
        Math.floor(audio.duration / 60);

        const sec =
        Math.floor(audio.duration % 60);

        timeEl.textContent =
        `${min}:${sec < 10 ? "0" : ""}${sec}`;

      }
    );

    // تشغيل / إيقاف
    playBtn.addEventListener("click", () => {

      // وقف كل الأصوات الثانية
      document
      .querySelectorAll(".Ourwork audio")
      .forEach(a => {

        if(a !== audio){

          a.pause();
          a.currentTime = 0;

          const parent =
          a.closest(".card-content");

          parent.querySelector(".play-btn")
          .innerHTML =
          '<i class="fa-solid fa-play"></i>';

          parent.querySelector(".progress")
          .style.width = "0%";

        }

      });

      // الحالي
      if(audio.paused){

        audio.play();

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

      } else {

        audio.pause();

        playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

      }

    });

    // تحديث الوقت والخط
    audio.addEventListener("timeupdate", () => {

      const current =
      audio.currentTime;

      const duration =
      audio.duration;

      if(duration){

        // progress
        const percent =
        (current / duration) * 100;

        progress.style.width =
        `${percent}%`;

        // الوقت
        const min =
        Math.floor(current / 60);

        const sec =
        Math.floor(current % 60);

        timeEl.textContent =
        `${min}:${sec < 10 ? "0" : ""}${sec}`;

      }

    });

    // نهاية الصوت
    audio.addEventListener("ended", () => {

      playBtn.innerHTML =
      '<i class="fa-solid fa-play"></i>';

      progress.style.width = "0%";

      const min =
      Math.floor(audio.duration / 60);

      const sec =
      Math.floor(audio.duration % 60);

      timeEl.textContent =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

    });

  });

});



// customer
document.addEventListener("DOMContentLoaded", () => {

  const customer = document.querySelector(".customer");

  if (!customer) return;

  const track = customer.querySelector("#slider");
  const nextBtn = customer.querySelector(".next");
  const prevBtn = customer.querySelector(".prev");
  const cards = customer.querySelectorAll(".card");

  // 👇 نبدأ من النص (مش أول كارد)
  let currentIndex = Math.floor(cards.length / 2);

  function updateSlider() {

    const activeCard = cards[currentIndex];

    // إزالة active من الكل
    cards.forEach(card => {
      card.classList.remove("active");
    });

    // إضافة active
    activeCard.classList.add("active");

    // 🔥 توسيط الكارد مثل WORK SLIDER
    const scrollPosition =
      activeCard.offsetLeft
      - (track.offsetWidth / 2)
      + (activeCard.offsetWidth / 2);

    track.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });

  }

  // next
  nextBtn.addEventListener("click", () => {

    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    }

  });

  // prev
  prevBtn.addEventListener("click", () => {

    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }

  });

  // أول تشغيل (يبدأ من النص)
  updateSlider();

});






// =========================
// Scroll Animation (Intersection Observer)
// =========================

const elements = document.querySelectorAll(
  ".about, .services, .voice, .contantAi, .Ourwork, .choose, .customer, .footer, .card1, .card, .card-content, .icon-txt"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

elements.forEach((el) => {
  el.classList.add("animate");
  observer.observe(el);
});
