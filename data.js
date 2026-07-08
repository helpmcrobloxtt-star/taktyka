const Data = {
    matches: [],
    async load() {
        const res = await fetch('season-2526.csv');
        const text = await res.text();
        this.matches = text.split('\n').slice(1).filter(l => l.length > 5).map(line => {
            const [d, h, a, hg, ag, ftr] = line.split(',');
            return { h, a, ftr };
        });
        UI.updateTable(this.matches);
    }
};

