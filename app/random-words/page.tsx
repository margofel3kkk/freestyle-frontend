"use client"

import { TaskTimer } from 'tasktimer';

export default function RandomWords() {
    const words: string[] = [
        "Spółka", "Siłownia", "Sport", "Miasto", "Ulica", "Neon", "Samochód",
        "Pieniądze", "Marzenia", "Sukces", "Porażka", "Przyjaźń", "Rodzina", "Miłość", "Wolność", "Czas", "Noc", "Dzień", "Deszcz", "Słońce", "Księżyc",
        "Gwiazdy", "Ogień", "Lód", "Morze", "Góry", "Podróż", "Przygoda", "Tajemnica", "Prawda", "Kłamstwo", "Odwaga", "Strach", "Nadzieja", "Energia",
        "Muzyka", "Bit", "Mikrofon", "Scena", "Tłum", "Artysta", "Pieniądz", "Zwycięstwo", "Ryzyko", "Plan", "Cel", "Droga", "Przyszłość", "Transformacja",
    ];
    let autoword = false;
    const intervalSec = 15;
    let timer: TaskTimer;
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

    function toggleAutoWord(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;


        if (checked) {
            autoword = true;
            timer = new TaskTimer(10000);
            randomWord();
            timer.add(task => {
                randomWord();
            })
            timer.start();
            return;
        }

        autoword = false;
        timer.pause();
    }

    return (
        <div className="flex justify-center items-center">
            <div className="mx-auto mt-60 w-fit rounded border-2 border-white p-8 text-center">
                <div className="pb-5">
                    <p className="text-[20px]">Wylosowane słowo:</p>
                    <p id="current-word" className="font-bold">{currentWord != "" ? currentWord : "Brak"}</p>
                </div>
                <input type="button" className="cursor-pointer transition duration-300 ease-in-out hover:scale-105" onClick={randomWord} value="Wylosuj słowo"/>
                <p>Automatyczna zmiana słowa co 10 sekund</p>
                <input type="checkbox" onChange={toggleAutoWord}/>
            </div>
        </div>
    )
}