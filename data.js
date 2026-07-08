const Data = {
    matches: [],
    async load() {
        try {
            // Upewnij się, że plik nazywa się dokładnie tak jak w repozytorium
            const res = await fetch('season-2526.csv');
            if (!res.ok) throw new Error("Nie znaleziono pliku CSV");
            const text = await res.text();
            
            this.matches = text.split('\n').slice(1).filter(l => l.length > 5).map(line => {
                const [d, h, a, hg, ag, ftr] = line.split(',');
                return { h, a, ftr };
            });
            
            this.processData();
        } catch (err) {
            console.error(err);
            document.getElementById('table-body').innerHTML = "<tr><td colspan='2'>BŁĄD WRAZYWANIA DANYCH</td></tr>";
        }
    },

    processData() {
        const stats = {};
        this.matches.forEach(m => {
            if (!stats[m.h]) stats[m.h] = { p: 0 };
            if (!stats[m.a]) stats[m.a] = { p: 0 };
            if (m.ftr === 'H') stats[m.h].p += 3;
            else if (m.ftr === 'A') stats[m.a].p += 3;
            else { stats[m.h].p += 1; stats[m.a].p += 1; }
        });

        const sorted = Object.entries(stats).sort((a, b) => b[1].p - a[1].p);
        const body = document.getElementById('table-body');
        body.innerHTML = sorted.map(s => `<tr><td>${s[0]}</td><td>${s[1].p}</td></tr>`).join('');
    }
};

Data.load();
