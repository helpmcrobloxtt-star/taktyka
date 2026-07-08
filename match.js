const MatchEngine = {
    start() {
        let m = 0;
        const log = document.getElementById('match-live');
        const timer = setInterval(() => {
            m++;
            log.innerText = "Minuta: " + m + " - Akcja meczowa...";
            if(m >= 90) { clearInterval(timer); log.innerText = "Mecz zakończony."; }
        }, 100); // 100ms żebyś nie czekał minuty
    }
};

