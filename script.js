const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const imagesToShow = 4; // Πόσες εικόνες φαίνονται
const imageCount = slider.children.length;

function updateSlider() {
  const imageWidth = slider.children[0].offsetWidth + 10; // Περιλαμβάνει margin/gap
  const maxIndex = Math.ceil(imageCount / imagesToShow) - 1;

  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  slider.style.transform = `translateX(-${index * imagesToShow * imageWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  updateSlider();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index++;
    updateSlider();
  } else if (e.key === "ArrowLeft") {
    index--;
    updateSlider();
  }
});

window.addEventListener("load", () => {
  updateSlider();
});

// Περιγραφές (εδώ τα ονόματα πρέπει να ταιριάζουν ακριβώς με τα αρχεία)
const imageDescriptions = {
  "captain-america.jpg": {
    duration: "2h 4min",
    summary: "Ο Steve Rogers γίνεται ο Captain America, πολεμώντας για την ελευθερία."
  },
  "iron-man.webp": {
    duration: "2h 6min",
    summary: "Ο Tony Stark μετατρέπεται σε Iron Man για να σώσει τον κόσμο."
  },
  "venom.jpg": {
    duration: "1h 52min",
    summary: "Ένας δημοσιογράφος αποκτά μια εξωγήινη οντότητα, τον Venom."
  },
  "ant-man.jpg": {
    duration: "1h 57min",
    summary: "Ο Scott Lang γίνεται ο Ant-Man και χρησιμοποιεί τις δυνάμεις του για να σώσει τον κόσμο."
  },
  "avengers.jpg": {
    duration: "2h 23min",
    summary: "Οι Avengers ενώνουν τις δυνάμεις τους για να σώσουν τη Γη."
  },
  "black widow.jpg": {
    duration: "2h 14min",
    summary: "Η Natasha Romanoff επιστρέφει ως Black Widow."
  },
  "black-panther.jpg": {
    duration: "2h 15min",
    summary: "Ο T’Challa επιστρέφει στην Wakanda ως βασιλιάς."
  },
  "blade.jpg": {
    duration: "2h",
    summary: "Ο Blade, μισός άνθρωπος - μισός βρικόλακας, κυνηγά τους βρικόλακες."
  },
  "x men.jpg": {
    duration: "1h 44min",
    summary: "Οι X-Men παλεύουν για την αποδοχή των μεταλλαγμένων."
  },
  "spiderman.jpg": {
    duration: "2h 1min",
    summary: "Ο Peter Parker γίνεται ο Spider-Man."
  },
  "loki.jpg": {
    duration: "Επεισόδια",
    summary: "Ο Loki ταξιδεύει στο χρόνο προσπαθώντας να αποκαταστήσει το χάος."
  },
  "wolverine.jpg": {
    duration: "2h 6min",
    summary: "Ο Wolverine ταξιδεύει στην Ιαπωνία και αντιμετωπίζει νέους εχθρούς."
  },
  "thor.jpg": {
    duration: "1h 55min",
    summary: "Ο Thor εξορίζεται στη Γη και μαθαίνει τι σημαίνει να είσαι άξιος."
  },
  "ghost rider.jpg": {
    duration: "1h 50min",
    summary: "Ο Johnny Blaze γίνεται ο Ghost Rider."
  },
  "she-hulk.jpg": {
    duration: "Επεισόδια",
    summary: "Η Jennifer Walters, ξαδέρφη του Hulk, αποκτά τις δυνάμεις του."
  },
  "fantastic 4.jpg": {
    duration: "1h 46min",
    summary: "Η τετράδα αποκτά υπερδυνάμεις από κοσμική ακτινοβολία."
  },
  "doctor-strange.jpg": {
    duration: "1h 55min",
    summary: "Ο Dr. Stephen Strange μαθαίνει τις μυστικές τέχνες της μαγείας."
  },
  "Deadpool.png": {
    duration: "1h 48min",
    summary: "Ο Wade Wilson γίνεται ο αντι-ήρωας Deadpool."
  },
  "Captain Marvel.jpg": {
    duration: "2h 3min",
    summary: "Η Carol Danvers γίνεται μία από τις ισχυρότερες ηρωίδες του σύμπαντος."
  }
};


// Preview DOM στοιχεία
const previewBox = document.getElementById("preview-box");
const previewImg = document.getElementById("preview-img");
const previewTitle = document.getElementById("preview-title");
const previewDuration = document.getElementById("preview-duration");
const previewSummary = document.getElementById("preview-summary");

Array.from(slider.querySelectorAll("img")).forEach(img => {
  img.style.cursor = "pointer";

  img.addEventListener("click", () => {
    const src = img.src;
    const filename = decodeURIComponent(src.substring(src.lastIndexOf("/") + 1));


    previewImg.src = src;
    previewImg.alt = img.alt;

    if (imageDescriptions[filename]) {
      previewTitle.textContent = img.alt;
      previewDuration.textContent = imageDescriptions[filename].duration;
      previewSummary.textContent = imageDescriptions[filename].summary;
    } else {
      previewTitle.textContent = img.alt;
      previewDuration.textContent = "-";
      previewSummary.textContent = "Περιγραφή δεν διαθέσιμη.";
    }

    previewBox.style.display = "block";
    previewBox.scrollIntoView({ behavior: "smooth" });
  });
});
