+++
title = 'Python Podstawowy - Lekcja 10: Mini-Projekt - Trener Tabliczki Mnożenia! 🧮✨'
date = 2026-01-11T10:00:00+01:00
draft = false
url = '/python-course/lekcja-10/'
description = 'Dziesiąta lekcja z serii Python Podstawowy. Tworzymy Trenera Tabliczki Mnożenia - pierwszy projekt powtórkowy!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'projekt', 'tabliczka-mnożenia', 'random', 'pętle', 'pliki', 'programowanie', 'podstawy']
series = ['Python Podstawowy']
+++

# 🧮 Lekcja 10: Mini-Projekt - Trener Tabliczki Mnożenia! ✨

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Witaj ponownie, młody programisto! 🚀 Przez ostatnie lekcje nauczyłeś się MNÓSTWO rzeczy - zmiennych, pętli, funkcji, plików i wiele więcej! Teraz czas wykorzystać tę wiedzę w praktyce!

Dzisiaj stworzymy **Trenera Tabliczki Mnożenia** - program, który pomoże Ci (i Twoim kolegom!) ćwiczyć mnożenie w zabawny sposób! 🎯

<!--more-->

---

## 📋 Co dziś powtórzymy?

W tym projekcie wykorzystamy:

| Koncept             | Lekcja     | Jak użyjemy?                   |
| ------------------- | ---------- | ------------------------------ |
| `random.randint()`  | Lekcja 3   | Losowanie liczb do mnożenia    |
| Pętla `while`       | Lekcja 4   | Główna pętla gry               |
| `if/elif/else`      | Lekcja 3-4 | Sprawdzanie odpowiedzi         |
| `int()` i `input()` | Lekcja 2-3 | Pobieranie odpowiedzi gracza   |
| Zmienne (liczniki)  | Lekcja 2   | Zliczanie punktów              |
| Zapis do pliku      | Lekcja 7   | Zapisywanie najlepszego wyniku |
| Funkcje             | Lekcja 5   | Organizacja kodu               |

**To świetna okazja, żeby zobaczyć, jak wszystko działa razem!** 💪

---

## 🎯 Cel projektu

Stworzymy program, który:

1. ❓ Zadaje pytania z tabliczki mnożenia (np. "Ile to 7 × 8?")
2. ✅ Sprawdza, czy odpowiedź jest poprawna
3. 📊 Zlicza punkty (poprawne odpowiedzi)
4. ⏱️ Ma określoną liczbę pytań (np. 10 rund)
5. 🏆 Zapisuje najlepszy wynik do pliku!
6. 📈 Ma 3 poziomy trudności

---

## 👥 Praca w parach (opcjonalnie)

Jeśli pracujesz z kolegą/koleżanką, możecie podzielić się zadaniami:

| Osoba A                             | Osoba B                          |
| ----------------------------------- | -------------------------------- |
| Pisze funkcję `zadaj_pytanie()`     | Pisze funkcję `pokaz_menu()`     |
| Pisze logikę sprawdzania odpowiedzi | Pisze system poziomów trudności  |
| Razem: łączycie kod i testujecie!   | Razem: dodajecie zapis highscore |

---

## 🚀 Zaczynamy kodować!

### Krok 1: Podstawowa struktura

Stwórz nowy plik `trener_tabliczki.py`:

```python
# 🧮 TRENER TABLICZKI MNOŻENIA
# Autor: [Twoje Imię]
# Projekt powtórkowy - Lekcja 10

import random
import os

print("=" * 40)
print("🧮 TRENER TABLICZKI MNOŻENIA 🧮")
print("=" * 40)
print()
print("Witaj! Ten program pomoże Ci")
print("ćwiczyć tabliczkę mnożenia!")
print()
```

**Uruchom!** (F5 w Thonny) - zobaczysz ładny ekran powitalny! 🎉

---

### Krok 2: Jedno pytanie

Dodajmy logikę jednego pytania:

```python
# 🧮 TRENER TABLICZKI MNOŻENIA
# Autor: [Twoje Imię]

import random
import os

print("=" * 40)
print("🧮 TRENER TABLICZKI MNOŻENIA 🧮")
print("=" * 40)
print()

# Losujemy dwie liczby od 1 do 10
liczba1 = random.randint(1, 10)
liczba2 = random.randint(1, 10)

# Obliczamy poprawną odpowiedź
poprawna = liczba1 * liczba2

# Pytamy gracza
print(f"Ile to {liczba1} × {liczba2}?")
odpowiedz = input("Twoja odpowiedź: ")
odpowiedz = int(odpowiedz)  # Zamieniamy tekst na liczbę

# Sprawdzamy odpowiedź
if odpowiedz == poprawna:
    print("✅ BRAWO! To poprawna odpowiedź!")
else:
    print(f"❌ Niestety nie... Poprawna odpowiedź to {poprawna}")
```

**Uruchom kilka razy!** Za każdym razem dostaniesz inne pytanie! 🎲

---

### Krok 3: Pętla z wieloma pytaniami

Teraz zróbmy 10 pytań i zliczajmy punkty:

```python
# 🧮 TRENER TABLICZKI MNOŻENIA
# Autor: [Twoje Imię]

import random
import os

# === USTAWIENIA ===
LICZBA_PYTAN = 10

print("=" * 40)
print("🧮 TRENER TABLICZKI MNOŻENIA 🧮")
print("=" * 40)
print()
print(f"Odpowiedz na {LICZBA_PYTAN} pytań!")
print("Powodzenia! 🍀")
print()

# Licznik punktów
punkty = 0

# Główna pętla - 10 pytań
for numer in range(1, LICZBA_PYTAN + 1):
    print(f"--- Pytanie {numer}/{LICZBA_PYTAN} ---")

    # Losujemy liczby
    liczba1 = random.randint(1, 10)
    liczba2 = random.randint(1, 10)
    poprawna = liczba1 * liczba2

    # Pytamy
    print(f"Ile to {liczba1} × {liczba2}?")
    odpowiedz = input("Twoja odpowiedź: ")
    odpowiedz = int(odpowiedz)

    # Sprawdzamy
    if odpowiedz == poprawna:
        print("✅ BRAWO!")
        punkty = punkty + 1  # Dodajemy punkt!
    else:
        print(f"❌ Poprawna odpowiedź to {poprawna}")

    print()  # Pusta linia dla czytelności

# Podsumowanie
print("=" * 40)
print("🏁 KONIEC GRY!")
print(f"Twój wynik: {punkty}/{LICZBA_PYTAN} punktów")

# Ocena wyniku
if punkty == LICZBA_PYTAN:
    print("🏆 PERFEKCYJNIE! Jesteś mistrzem!")
elif punkty >= 8:
    print("🌟 Świetnie! Prawie perfekcyjnie!")
elif punkty >= 5:
    print("👍 Nieźle! Ale można lepiej!")
else:
    print("💪 Ćwicz dalej! Dasz radę!")
```

**Uruchom i zagraj!** Ile punktów zdobędziesz? 🎮

---

### Krok 4: Dodajemy poziomy trudności

Teraz uczynimy grę ciekawszą - dodamy menu z poziomami:

```python
# 🧮 TRENER TABLICZKI MNOŻENIA
# Autor: [Twoje Imię]

import random
import os

# === USTAWIENIA ===
LICZBA_PYTAN = 10

def pokaz_menu():
    """Wyświetla menu i zwraca wybór gracza"""
    print("=" * 40)
    print("🧮 TRENER TABLICZKI MNOŻENIA 🧮")
    print("=" * 40)
    print()
    print("Wybierz poziom trudności:")
    print()
    print("  1. 🟢 ŁATWY   (liczby 1-5)")
    print("  2. 🟡 ŚREDNI  (liczby 1-10)")
    print("  3. 🔴 TRUDNY  (liczby 1-15)")
    print()
    print("  0. 🚪 WYJŚCIE")
    print()

    wybor = input("Twój wybór (0-3): ")
    return wybor

def pobierz_zakres(poziom):
    """Zwraca maksymalną liczbę dla danego poziomu"""
    if poziom == "1":
        return 5   # Łatwy: 1-5
    elif poziom == "2":
        return 10  # Średni: 1-10
    elif poziom == "3":
        return 15  # Trudny: 1-15
    else:
        return 10  # Domyślnie średni

def graj(max_liczba):
    """Główna funkcja gry"""
    print()
    print(f"Odpowiedz na {LICZBA_PYTAN} pytań!")
    print(f"Zakres liczb: 1-{max_liczba}")
    print("Powodzenia! 🍀")
    print()

    punkty = 0

    for numer in range(1, LICZBA_PYTAN + 1):
        print(f"--- Pytanie {numer}/{LICZBA_PYTAN} ---")

        liczba1 = random.randint(1, max_liczba)
        liczba2 = random.randint(1, max_liczba)
        poprawna = liczba1 * liczba2

        print(f"Ile to {liczba1} × {liczba2}?")
        odpowiedz = input("Twoja odpowiedź: ")

        # Sprawdzamy, czy to liczba
        if odpowiedz.isdigit():
            odpowiedz = int(odpowiedz)

            if odpowiedz == poprawna:
                print("✅ BRAWO!")
                punkty += 1
            else:
                print(f"❌ Poprawna odpowiedź to {poprawna}")
        else:
            print(f"❌ To nie jest liczba! Odpowiedź to {poprawna}")

        print()

    # Podsumowanie
    print("=" * 40)
    print("🏁 KONIEC GRY!")
    print(f"Twój wynik: {punkty}/{LICZBA_PYTAN} punktów")

    if punkty == LICZBA_PYTAN:
        print("🏆 PERFEKCYJNIE! Jesteś mistrzem!")
    elif punkty >= 8:
        print("🌟 Świetnie! Prawie perfekcyjnie!")
    elif punkty >= 5:
        print("👍 Nieźle! Ale można lepiej!")
    else:
        print("💪 Ćwicz dalej! Dasz radę!")

    print()
    input("Naciśnij ENTER, aby kontynuować...")

    return punkty

# === GŁÓWNY PROGRAM ===
while True:
    # Czyścimy ekran (opcjonalnie)
    os.system('cls')  # Na Windows
    # os.system('clear')  # Na Mac/Linux

    wybor = pokaz_menu()

    if wybor == "0":
        print()
        print("👋 Do zobaczenia! Ćwicz tabliczkę!")
        break
    elif wybor in ["1", "2", "3"]:
        max_liczba = pobierz_zakres(wybor)
        wynik = graj(max_liczba)
    else:
        print("❓ Nieznana opcja! Wybierz 0, 1, 2 lub 3.")
        input("Naciśnij ENTER...")
```

**Uruchom!** Teraz masz prawdziwe menu z poziomami trudności! 🎮

---

### Krok 5: Zapis najlepszego wyniku (Highscore!)

Na koniec dodajmy zapis najlepszego wyniku do pliku:

```python
# 🧮 TRENER TABLICZKI MNOŻENIA
# Autor: [Twoje Imię]

import random
import os

# === USTAWIENIA ===
LICZBA_PYTAN = 10
PLIK_HIGHSCORE = "tabliczka_highscore.txt"

def wczytaj_highscore():
    """Wczytuje najlepszy wynik z pliku"""
    if os.path.exists(PLIK_HIGHSCORE):
        with open(PLIK_HIGHSCORE, "r") as plik:
            zawartosc = plik.read().strip()
            if zawartosc.isdigit():
                return int(zawartosc)
    return 0  # Jeśli plik nie istnieje, zwróć 0

def zapisz_highscore(wynik):
    """Zapisuje nowy najlepszy wynik"""
    with open(PLIK_HIGHSCORE, "w") as plik:
        plik.write(str(wynik))

def pokaz_menu(highscore):
    """Wyświetla menu i zwraca wybór gracza"""
    print("=" * 40)
    print("🧮 TRENER TABLICZKI MNOŻENIA 🧮")
    print("=" * 40)
    print()
    print(f"🏆 Najlepszy wynik: {highscore}/{LICZBA_PYTAN}")
    print()
    print("Wybierz poziom trudności:")
    print()
    print("  1. 🟢 ŁATWY   (liczby 1-5)")
    print("  2. 🟡 ŚREDNI  (liczby 1-10)")
    print("  3. 🔴 TRUDNY  (liczby 1-15)")
    print()
    print("  0. 🚪 WYJŚCIE")
    print()

    wybor = input("Twój wybór (0-3): ")
    return wybor

def pobierz_zakres(poziom):
    """Zwraca maksymalną liczbę dla danego poziomu"""
    if poziom == "1":
        return 5
    elif poziom == "2":
        return 10
    elif poziom == "3":
        return 15
    else:
        return 10

def pobierz_nazwe_poziomu(poziom):
    """Zwraca nazwę poziomu"""
    if poziom == "1":
        return "ŁATWY"
    elif poziom == "2":
        return "ŚREDNI"
    elif poziom == "3":
        return "TRUDNY"
    return "NIEZNANY"

def graj(max_liczba, poziom, highscore):
    """Główna funkcja gry"""
    nazwa_poziomu = pobierz_nazwe_poziomu(poziom)

    print()
    print(f"📊 Poziom: {nazwa_poziomu}")
    print(f"❓ Pytań: {LICZBA_PYTAN}")
    print(f"🔢 Zakres: 1-{max_liczba}")
    print()
    print("Powodzenia! 🍀")
    print()

    punkty = 0

    for numer in range(1, LICZBA_PYTAN + 1):
        print(f"--- Pytanie {numer}/{LICZBA_PYTAN} ---")

        liczba1 = random.randint(1, max_liczba)
        liczba2 = random.randint(1, max_liczba)
        poprawna = liczba1 * liczba2

        print(f"Ile to {liczba1} × {liczba2}?")
        odpowiedz = input("Twoja odpowiedź: ")

        if odpowiedz.lstrip('-').isdigit():  # Obsługa liczb ujemnych
            odpowiedz = int(odpowiedz)

            if odpowiedz == poprawna:
                print("✅ BRAWO!")
                punkty += 1
            else:
                print(f"❌ Poprawna odpowiedź to {poprawna}")
        else:
            print(f"❌ To nie jest liczba! Odpowiedź to {poprawna}")

        print()

    # Podsumowanie
    print("=" * 40)
    print("🏁 KONIEC GRY!")
    print(f"Twój wynik: {punkty}/{LICZBA_PYTAN} punktów")
    print()

    # Sprawdzamy, czy to nowy rekord
    if punkty > highscore:
        print("🎉🎉🎉 NOWY REKORD! 🎉🎉🎉")
        zapisz_highscore(punkty)
    elif punkty == highscore and highscore > 0:
        print("🏆 Wyrównałeś swój najlepszy wynik!")

    # Ocena wyniku
    print()
    if punkty == LICZBA_PYTAN:
        print("🏆 PERFEKCYJNIE! Jesteś mistrzem tabliczki!")
    elif punkty >= 8:
        print("🌟 Świetnie! Prawie perfekcyjnie!")
    elif punkty >= 5:
        print("👍 Nieźle! Ale można lepiej!")
    else:
        print("💪 Ćwicz dalej! Dasz radę!")

    print()
    input("Naciśnij ENTER, aby kontynuować...")

    return punkty

# === GŁÓWNY PROGRAM ===

# Wczytujemy najlepszy wynik
najlepszy_wynik = wczytaj_highscore()

while True:
    # Czyścimy ekran
    os.system('cls')  # Windows
    # os.system('clear')  # Mac/Linux

    wybor = pokaz_menu(najlepszy_wynik)

    if wybor == "0":
        print()
        print("👋 Do zobaczenia! Ćwicz tabliczkę mnożenia!")
        break
    elif wybor in ["1", "2", "3"]:
        max_liczba = pobierz_zakres(wybor)
        wynik = graj(max_liczba, wybor, najlepszy_wynik)

        # Aktualizujemy highscore jeśli pobity
        if wynik > najlepszy_wynik:
            najlepszy_wynik = wynik
    else:
        print()
        print("❓ Nieznana opcja! Wybierz 0, 1, 2 lub 3.")
        input("Naciśnij ENTER...")
```

**🎉 GOTOWE!** Masz pełny Trener Tabliczki Mnożenia z:

- ✅ Menu z poziomami trudności
- ✅ Losowymi pytaniami
- ✅ Zliczaniem punktów
- ✅ Zapisem najlepszego wyniku!

---

## ⭐ Wyzwania dla chętnych!

Chcesz rozbudować swój program? Spróbuj dodać:

### 🌟 Wyzwanie 1: Timer

Dodaj mierzenie czasu - ile sekund zajęło odpowiedzenie na wszystkie pytania?

```python
import time

start = time.time()
# ... tu gra ...
koniec = time.time()
czas = round(koniec - start, 1)
print(f"⏱️ Twój czas: {czas} sekund")
```

### 🌟 Wyzwanie 2: Imię gracza

Zapytaj o imię i zapisz je razem z wynikiem:

```python
imie = input("Jak masz na imię? ")
# W pliku zapisz: "Ania:8"
```

### 🌟 Wyzwanie 3: Tryb dzielenia

Dodaj opcję ćwiczenia dzielenia zamiast mnożenia!

### 🌟 Wyzwanie 4: Historia wyników

Zapisuj wszystkie wyniki (nie tylko najlepszy) do pliku JSON.

---

## ✅ Podsumowanie - Co powtórzyliśmy?

W tym projekcie użyłeś:

| Koncept                  | Gdzie w kodzie?               |
| ------------------------ | ----------------------------- |
| `import random`          | Losowanie liczb               |
| `random.randint(a, b)`   | Losowe pytania                |
| Pętla `for`              | Powtórzenie 10 pytań          |
| Pętla `while True`       | Główna pętla programu         |
| `if/elif/else`           | Sprawdzanie odpowiedzi, menu  |
| `input()` i `int()`      | Pobieranie odpowiedzi         |
| Funkcje `def`            | Organizacja kodu              |
| Parametry funkcji        | `graj(max_liczba, ...)`       |
| `return`                 | Zwracanie wyniku z funkcji    |
| `open()` z `with`        | Zapis/odczyt pliku            |
| `os.path.exists()`       | Sprawdzanie czy plik istnieje |
| f-stringi                | Wyświetlanie tekstu           |
| `.strip()`, `.isdigit()` | Przetwarzanie tekstu          |

**Brawo! Stworzyłeś prawdziwy, użyteczny program!** 🏆

---

## 📝 Zadanie domowe

1. **Zagraj** w swoją grę kilka razy i pobij swój rekord!
2. **Pokaż** grę rodzicom lub rodzeństwu - niech też spróbują!
3. **Wybierz jedno wyzwanie** z sekcji "Wyzwania dla chętnych" i spróbuj je zrobić!

---

## 🔮 Co dalej?

W następnej lekcji czeka Cię **Bug Hunt** - będziesz szukać błędów w kodzie jak prawdziwy programista-detektyw! 🔍🐛

**[→ Przejdź do Lekcji 11: Bug Hunt!](/python-course/lekcja-11/)**

---

_Masz pytania? Coś nie działa? Napisz w komentarzu poniżej!_ 💬
