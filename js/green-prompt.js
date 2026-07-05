const API_URL = "https://amux-green-prompt.vercel.app/api/v1/global-score";

async function loadGlobalWaterSaved() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch");
        }

        const data = await response.json();

        const liters = Number(data.total || 0);

        document.getElementById("waterCounter").textContent =
            liters.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + " L";

    } catch (error) {

        document.getElementById("waterCounter").textContent =
            "Unavailable";

        console.error(error);

    }

}

loadGlobalWaterSaved();

// Refresh every 10 seconds
setInterval(loadGlobalWaterSaved, 10000);