const symptomData = {
    "fever": {
        conditions: ["common cold", "flu", "COVID-19", "malaria", "Typhoid"],
        remedies: ["Drink plenty of fluids", "Rest", "Stay cool"],
        medicines: {
            list: ["Paracetamol", "Ibuprofen"],
            images: [
                "https://tse2.mm.bing.net/th?id=OIP.FUAuKqRMVW7BC5M4wN69zgHaFj",
                "https://tse2.mm.bing.net/th?id=OIP.3lkJ6mZvaNZ1OIdjkc_pRgHaHa"
            ]
        }
    },
    "cough": {
        conditions: ["common cold", "flu", "COVID-19", "bronchitis", "asthma"],
        remedies: ["Honey and warm water", "Gargle with salt water", "Use a humidifier"],
        medicines: {
            list: ["Cough syrup", "Antihistamines"],
            images: [
                "https://tse1.mm.bing.net/th?id=OIP.8OAHaLdC9povg-ullv9oZgHaHa",
                "https://tse1.mm.bing.net/th?id=OIP.y8jS3gE98borJiHyIHhQnAHaHa"
            ]
        }
    },
    "headache": {
        conditions: ["migraine", "tension headache", "stress or anxiety", "dehydration", "high BP"],
        remedies: ["Apply a cold compress", "Rest in a dark room", "Massage temples"],
        medicines: {
            list: ["Aspirin", "Ibuprofen", "Paracetamol"],
            images: [
                "https://tse3.mm.bing.net/th?id=OIP.h-JHyMc-0Ak_XaRuXnsqAwHaHa",
                "https://tse2.mm.bing.net/th?id=OIP.3lkJ6mZvaNZ1OIdjkc_pRgHaHa",
                "https://tse2.mm.bing.net/th?id=OIP.FUAuKqRMVW7BC5M4wN69zgHaFj"
            ]
        }
    },
    // add more symptoms here as needed (same format)
};

// Populate dropdown
const symptomSelect = document.getElementById("symptomSelect");
const detailsDiv = document.getElementById("details");
const symptomTitle = document.getElementById("symptomTitle");
const conditionsList = document.getElementById("conditions");
const remediesList = document.getElementById("remedies");
const medicinesList = document.getElementById("medicines");
const medicineImagesDiv = document.getElementById("medicineImages");

Object.keys(symptomData).forEach(symptom => {
    const option = document.createElement("option");
    option.value = symptom;
    option.textContent = symptom.charAt(0).toUpperCase() + symptom.slice(1);
    symptomSelect.appendChild(option);
});

symptomSelect.addEventListener("change", () => {
    const selected = symptomSelect.value;
    const data = symptomData[selected];

    symptomTitle.textContent = selected.charAt(0).toUpperCase() + selected.slice(1);

    conditionsList.innerHTML = "";
    remediesList.innerHTML = "";
    medicinesList.innerHTML = "";
    medicineImagesDiv.innerHTML = "";

    data.conditions.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        conditionsList.appendChild(li);
    });

    data.remedies.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        remediesList.appendChild(li);
    });

    data.medicines.list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        medicinesList.appendChild(li);
    });

    data.medicines.images.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "medicine";
        medicineImagesDiv.appendChild(img);
    });

    detailsDiv.classList.remove("hidden");
});
