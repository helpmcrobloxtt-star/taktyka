// scout.js - Moduł skautingu i bazy zawodników
const Scout = {
    players: [],
    
    async loadDatabase() {
        const res = await fetch('EAFC26-Men.csv');
        const text = await res.text();
        // Szybkie parsowanie CSV do obiektów
        const lines = text.split('\n');
        const headers = lines[0].split(',');
        this.players = lines.slice(1).map(line => {
            const values = line.split(',');
            let obj = {};
            headers.forEach((h, i) => obj[h.trim()] = values[i]);
            return obj;
        });
        console.log("Baza EA FC 26 załadowana: " + this.players.length + " zawodników.");
    },

    search(position, minOvr) {
        return this.players.filter(p => 
            p.Position === position && parseInt(p.OVR) >= minOvr
        ).slice(0, 20); // Zwraca 20 najlepszych
    }
};

// Automatyczny start bazy
Scout.loadDatabase();
