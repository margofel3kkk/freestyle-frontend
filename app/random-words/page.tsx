"use client"

import { TaskTimer } from 'tasktimer';
import {useEffect, useRef, useState} from "react";
import {Switch} from "@mui/material";

const WORDS: string[] = [
    "Spółka", "Siłownia", "Sport", "Miasto", "Ulica", "Neon", "Samochód",
    "Pieniądze", "Marzenia", "Sukces", "Porażka", "Przyjaźń", "Rodzina", "Miłość", "Wolność", "Czas", "Noc", "Dzień", "Deszcz", "Słońce", "Księżyc",
    "Gwiazdy", "Ogień", "Lód", "Morze", "Góry", "Podróż", "Przygoda", "Tajemnica", "Prawda", "Kłamstwo", "Odwaga", "Strach", "Nadzieja", "Energia",
    "Muzyka", "Bit", "Mikrofon", "Scena", "Tłum", "Artysta", "Pieniądz", "Zwycięstwo", "Ryzyko", "Plan", "Cel", "Droga", "Przyszłość", "Transformacja",
];

export default function RandomWords() {
    const [currentWord, setCurrentWord] = useState<string>("");
    const timerRef = useRef<TaskTimer | null>(null);

    function randomWord() {
        const index = Math.floor(Math.random() * WORDS.length);
        setCurrentWord(WORDS[index]);
    }

    useEffect(() => {
        const timer = new TaskTimer(10000);
        timer.add(() => randomWord());
        timerRef.current = timer;

        return () => {
            timer.stop();
            timerRef.current = null;
        };
    }, []);

    function toggleAutoWord(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;
        const timer = timerRef.current;
        if (!timer) return;

        if (checked) {
            randomWord();
            timer.start();
        } else {
            timer.pause();
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="mx-auto mt-60 w-150 h-80 rounded border-2 border-current p-8 text-center shadow-xl/30 flex-col justify-center items-center gap-7">
                <div className="">
                    <p className="text-[20px]">Wylosowane słowo:</p>
                    <p id="current-word" className="font-bold pb-5">{currentWord != "" ? currentWord : "Brak"}</p>
                    <input type="button" className="cursor-pointer transition duration-300 ease-in-out hover:scale-105" onClick={randomWord} value="Wylosuj słowo"/>
                </div>
                <div>
                    <p>Auto word</p>
                    <Switch onChange={toggleAutoWord}/>
                </div>
            </div>
        </div>
    )
}