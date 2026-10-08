"use client"

export default function RandomWords() {
    const words: string[] = [
        "Spółka", "Siłownia", "Sport", "Miasto", "Ulica", "Neon", "Samochód",
        "Pieniądze", "Marzenia", "Sukces", "Porażka", "Przyjaźń", "Rodzina", "Miłość", "Wolność", "Czas", "Noc", "Dzień", "Deszcz", "Słońce", "Księżyc",
        "Gwiazdy", "Ogień", "Lód", "Morze", "Góry", "Podróż", "Przygoda", "Tajemnica", "Prawda", "Kłamstwo", "Odwaga", "Strach", "Nadzieja", "Energia",
        "Muzyka", "Bit", "Mikrofon", "Scena", "Tłum", "Artysta", "Pieniądz", "Zwycięstwo", "Ryzyko", "Plan", "Cel", "Droga", "Przyszłość", "Transformacja",
    ];
    const intervalSec = 15;
    let currentWord: string | undefined = "";

    function randomWord() {
        let index = Math.floor(Math.random() * words.length);
        currentWord = words.at(index);
        const word = document.getElementById("current-word")
        if (word) {
            // @ts-ignore
            word.textContent = currentWord;
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="mx-auto mt-60 w-fit rounded border-2 border-white p-8 text-center">
                <p id="current-word">{currentWord != "" ? currentWord : "Kliknij poniżej"}</p>
                <input type="button" onClick={randomWord} value="Wylosuj słowo" />
            </div>
        </div>
    )
}