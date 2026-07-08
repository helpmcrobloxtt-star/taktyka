const UI = {
    updateTable(matches) {
        const body = document.getElementById('table-body');
        // Tutaj logika renderowania tabeli
        body.innerHTML = "<tr><td>Dane załadowane</td><td>X</td></tr>";
    }
};
Data.load();

