function afiseazaSolutie() {
    var problema = document.getElementById("problema").value;
    var solutieDiv = document.getElementById("solutie");
    var tutorialDiv = document.getElementById("tutorial");
    
    var solutii = {
        "lent": "Curăță fișierele temporare, dezinstalează programele inutile și verifică dacă ai malware.",
        "internet": "Repornește routerul, verifică conexiunile și asigură-te că nu ai setări proxy greșite.",
        "eroare": "Repornește PC-ul, rulează un scan de sistem și reinstalează driverele esențiale.",
        "pornire": "Verifică cablurile de alimentare și sursa de curent, apoi încearcă un hard reset.",
        "inchidere": "Verifică temperatura PC-ului și sursa de alimentare. Curăță ventilatoarele de praf.",
        "sunet": "Asigură-te că volumul nu este dezactivat și reinstalează driverul audio."
    };
    
    var tutoriale = {
        "lent": "1. Deschide Task Manager și vezi ce procese consumă resurse.\n2. Rulează CCleaner sau un alt program de curățare.\n3. Dezinstalează programele neutilizate.",
        "internet": "1. Deconectează și reconectează cablul de internet.\n2. Verifică setările de rețea.\n3. Rulează diagnosticul Windows pentru rețea.",
        "eroare": "1. Notează codul erorii și caută soluții online.\n2. Rulează un scan SFC (System File Checker).\n3. Dacă problema persistă, reinstalează Windows."
    };
    
    solutieDiv.innerText = solutii[problema] || "Te rugăm să selectezi o problemă!";
    tutorialDiv.innerText = tutoriale[problema] || "";
}

function reset() {
    document.getElementById("problema").value = "";
    document.getElementById("solutie").innerText = "";
    document.getElementById("tutorial").innerText = "";
}

function adaugaComentariu() {
    var comentariu = document.getElementById("comentariu").value;
    var lista = document.getElementById("lista-comentarii");
    
    if (comentariu.trim() === "") {
        alert("Te rugăm să scrii un comentariu!");
        return;
    }
    
    var nouComentariu = document.createElement("p");
    nouComentariu.innerText = comentariu;
    lista.appendChild(nouComentariu);
    document.getElementById("comentariu").value = "";
}
