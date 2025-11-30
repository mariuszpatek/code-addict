+++
title = 'Python Podstawowy - Lekcja 7: Praca z Plikami - Zapisywanie Danych! 💾📁'
date = 2025-11-29T14:00:00+01:00
draft = true
url = '/python-course/lekcja-7/'
description = 'Siódma lekcja z serii Python Podstawowy. Nauczymy się zapisywać i odczytywać dane z plików - highscore, notatki i więcej!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'pliki', 'zapis', 'odczyt', 'highscore', 'notatnik', 'programowanie', 'podstawy']
series = ['Python Podstawowy']
+++

# 💾 Lekcja 7: Praca z Plikami - Zapisywanie Danych! 📁

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Witaj ponownie, młody programisto! 🚀 Czy zastanawiałeś się kiedyś, dlaczego gdy zamkniesz swoją grę, wszystkie punkty znikają? Albo dlaczego Twoje notatki w programie przepadają po wyłączeniu komputera? 🤔

Dzisiaj nauczymy się **magicznej umiejętności** - zapisywania danych do plików! Dzięki temu Twoje programy będą **pamiętać** rzeczy nawet po ich zamknięciu! ✨

<!--more-->

## 🎯 Czego się dzisiaj nauczymy?

W tej super lekcji:

- 📂 Zrozumiemy, czym są pliki i jak Python z nimi rozmawia
- 📝 Nauczymy się **zapisywać** tekst do plików
- 📖 Nauczymy się **odczytywać** tekst z plików
- ➕ Poznamy **dopisywanie** do istniejących plików
- 🏆 Stworzymy **System Highscore** do naszych gier!
- 📓 Zbudujemy prawdziwy **Dziennik/Notatnik**!

**To jedna z najważniejszych lekcji w programowaniu!** Prawie każdy prawdziwy program zapisuje dane! 💪

---

## 🤔 Dlaczego pliki są ważne?

Wyobraź sobie te sytuacje:

| Bez plików 😢                                                     | Z plikami 😊                                              |
| ----------------------------------------------------------------- | --------------------------------------------------------- |
| Grasz w grę, zdobywasz 1000 punktów, wyłączasz - WYNIK ZNIKA!     | Wynik zapisuje się - następnym razem widzisz swój rekord! |
| Piszesz opowiadanie w programie - po zamknięciu wszystko przepada | Opowiadanie zapisuje się - możesz kontynuować jutro!      |
| Tworzysz listę zakupów - musisz ją spisać na kartce               | Lista jest w pliku - możesz ją wydrukować lub wysłać!     |

**Pliki to pamięć długotrwała Twojego programu!** 🧠💾

---

## 📚 Jak Python rozmawia z plikami?

Python używa specjalnej funkcji `open()` do pracy z plikami. To jak otwieranie książki! 📖

### Tryby otwierania plików:

| Tryb  | Znaczenie           | Emoji | Co robi?                                 |
| ----- | ------------------- | ----- | ---------------------------------------- |
| `"r"` | **Read** (czytaj)   | 📖    | Tylko odczytuje plik                     |
| `"w"` | **Write** (pisz)    | ✏️    | Zapisuje do pliku (UWAGA: kasuje stary!) |
| `"a"` | **Append** (dopisz) | ➕    | Dopisuje na końcu pliku                  |

**Zapamiętaj:**

- `"r"` = **R**ead = **C**zytaj 📖
- `"w"` = **W**rite = **P**isz ✏️ (ale kasuje wszystko!)
- `"a"` = **A**ppend = **D**opisz ➕

---

## ✏️ Część 1: Zapisywanie do pliku

Zaczynamy od najprostszej rzeczy - zapiszemy tekst do pliku!

### Przykład 1: Pierwszy zapis

Stwórz nowy plik `zapis_podstawy.py`:

```python
# Mój pierwszy zapis do pliku!
# Autor: [Twoje Imię]

# Otwieramy plik do zapisu ("w" = write)
plik = open("moj_plik.txt", "w")

# Zapisujemy tekst
plik.write("Cześć! To mój pierwszy plik!")
plik.write("\n")  # \n = nowa linia (Enter)
plik.write("Jestem super programistą!")

# WAŻNE: Zamykamy plik!
plik.close()

print("✅ Plik został zapisany!")
print("📁 Sprawdź folder - pojawił się plik 'moj_plik.txt'!")
```

**Uruchom program!** (F5 w Thonny)

**Co się stało?**

1. Python stworzył nowy plik `moj_plik.txt` w tym samym folderze co Twój program
2. Zapisał do niego tekst
3. Zamknął plik

**🔍 Sprawdź!** Otwórz folder z programem i znajdź plik `moj_plik.txt`. Otwórz go notatnikiem - zobaczysz swój tekst! 🎉

### 💡 Co to jest `\n`?

`\n` to specjalny znak oznaczający **nową linię** (jak naciśnięcie Enter).

```python
plik.write("Linia 1\nLinia 2\nLinia 3")
```

Zapisze:

```
Linia 1
Linia 2
Linia 3
```

### ⚠️ UWAGA: Tryb "w" kasuje stary plik!

```python
# PIERWSZY ZAPIS
plik = open("test.txt", "w")
plik.write("Pierwsza wiadomość")
plik.close()

# DRUGI ZAPIS - UWAGA!
plik = open("test.txt", "w")  # "w" kasuje stary plik!
plik.write("Druga wiadomość")
plik.close()

# W pliku będzie TYLKO "Druga wiadomość"!
# "Pierwsza wiadomość" została skasowana! 😱
```

**Jak tego uniknąć?** Użyj trybu `"a"` (append) - o tym za chwilę! 👇

---

## 📖 Część 2: Odczytywanie z pliku

Teraz nauczymy się czytać zapisane dane!

### Przykład 2: Odczyt całego pliku

Stwórz plik `odczyt_podstawy.py`:

```python
# Odczytywanie pliku
# Autor: [Twoje Imię]

# Najpierw stwórzmy plik do odczytu
plik = open("wiadomosc.txt", "w")
plik.write("Witaj, świecie!\n")
plik.write("To jest druga linia.\n")
plik.write("A to trzecia linia.")
plik.close()

print("📝 Zapisaliśmy plik. Teraz go odczytamy!\n")

# Otwieramy plik do odczytu ("r" = read)
plik = open("wiadomosc.txt", "r")

# Odczytujemy CAŁĄ zawartość
zawartosc = plik.read()

# Zamykamy plik
plik.close()

# Wyświetlamy
print("📖 Zawartość pliku:")
print("-" * 30)
print(zawartosc)
print("-" * 30)
```

**Uruchom!** Zobaczysz zawartość pliku na ekranie! 📖

### Przykład 3: Odczyt linia po linii

Czasem chcemy czytać plik **linia po linii** (np. listę rzeczy):

```python
# Odczyt linia po linii
# Autor: [Twoje Imię]

# Tworzymy listę zakupów
plik = open("zakupy.txt", "w")
plik.write("Mleko\n")
plik.write("Chleb\n")
plik.write("Masło\n")
plik.write("Jabłka\n")
plik.write("Czekolada\n")
plik.close()

print("🛒 LISTA ZAKUPÓW:")
print("=" * 20)

# Odczytujemy linia po linii
plik = open("zakupy.txt", "r")

numer = 1
for linia in plik:
    # .strip() usuwa znak nowej linii na końcu
    produkt = linia.strip()
    print(f"{numer}. {produkt}")
    numer = numer + 1

plik.close()

print("=" * 20)
print(f"Razem: {numer - 1} produktów")
```

**Wynik:**

```
🛒 LISTA ZAKUPÓW:
====================
1. Mleko
2. Chleb
3. Masło
4. Jabłka
5. Czekolada
====================
Razem: 5 produktów
```

### 💡 Co robi `.strip()`?

Gdy czytamy linię z pliku, na końcu jest ukryty znak `\n` (nowa linia).
`.strip()` usuwa te niewidoczne znaki!

```python
linia = "Jabłka\n"
print(linia.strip())  # "Jabłka" (bez \n)
```

---

## ➕ Część 3: Dopisywanie do pliku

Tryb `"a"` (append) pozwala **dopisywać** do pliku bez kasowania starej zawartości!

### Przykład 4: Dopisywanie wpisów

```python
# Dopisywanie do pliku
# Autor: [Twoje Imię]

print("📓 DZIENNIK KAPITANA")
print("=" * 30)

# Funkcja do dodawania wpisu
def dodaj_wpis(tekst):
    # "a" = append (dopisz)
    plik = open("dziennik.txt", "a")
    plik.write(tekst + "\n")
    plik.close()
    print(f"✅ Dodano: {tekst}")

# Dodajemy kilka wpisów
dodaj_wpis("Dzień 1: Odkryłem nową wyspę!")
dodaj_wpis("Dzień 2: Znalazłem skarb!")
dodaj_wpis("Dzień 3: Spotkałem papugę!")

print("\n📖 Cały dziennik:")
print("-" * 30)

# Odczytujemy cały dziennik
plik = open("dziennik.txt", "r")
print(plik.read())
plik.close()
```

**Uruchom program kilka razy!** Za każdym razem wpisy będą się **dodawać** na końcu pliku! 📝

**Różnica między "w" a "a":**

| Tryb `"w"` (write)       | Tryb `"a"` (append)   |
| ------------------------ | --------------------- |
| Kasuje stary plik        | Zachowuje stary plik  |
| Zapisuje od początku     | Dopisuje na końcu     |
| Użyj gdy chcesz zastąpić | Użyj gdy chcesz dodać |

---

## 🎯 Lepszy sposób: Konstrukcja `with`

Profesjonalni programiści używają specjalnej konstrukcji `with`, która **automatycznie zamyka plik**!

### Przykład 5: Użycie `with`

```python
# Profesjonalny sposób pracy z plikami
# Autor: [Twoje Imię]

# ZAPIS z 'with' - plik zamknie się automatycznie!
with open("super_plik.txt", "w") as plik:
    plik.write("To jest napisane profesjonalnie!\n")
    plik.write("Plik zamknie się sam!\n")
# Tu plik jest już zamknięty - nie trzeba pisać close()!

print("✅ Zapisano!")

# ODCZYT z 'with'
with open("super_plik.txt", "r") as plik:
    zawartosc = plik.read()
    print("\n📖 Zawartość:")
    print(zawartosc)
# Plik automatycznie zamknięty!
```

**Dlaczego `with` jest lepsze?**

1. ✅ Nie musisz pamiętać o `close()`
2. ✅ Plik zamknie się nawet jeśli wystąpi błąd
3. ✅ Kod jest czytelniejszy

**Od teraz używaj `with`!** 👍

---

## 🏆 PROJEKT 1: Prosty System Highscore! (20 minut)

Teraz stworzymy **system najlepszych wyników** do gier! Będzie to prosta wersja, którą łatwo zrozumiesz.

### 📝 Krok 1: Kod programu

Stwórz nowy plik `highscore.py`:

```python
# 🏆 PROSTY SYSTEM HIGHSCORE
# Autor: [Twoje Imię]

import os  # Do sprawdzania czy plik istnieje

PLIK_WYNIKOW = "highscore.txt"

def dodaj_wynik():
    """Dodaje nowy wynik do pliku"""
    print("\n➕ DODAWANIE WYNIKU")
    imie = input("👤 Podaj imię: ")
    punkty = input("🎯 Podaj punkty: ")

    # Zapisujemy w trybie "a" (dopisywanie)
    with open(PLIK_WYNIKOW, "a", encoding="utf-8") as plik:
        # Zapisujemy w formacie: Imię:Punkty
        plik.write(f"{imie}:{punkty}\n")

    print("✅ Wynik zapisany!")

def pokaz_wyniki():
    """Pokazuje wszystkie wyniki"""
    print("\n🏆 LISTA WYNIKÓW:")

    if not os.path.exists(PLIK_WYNIKOW):
        print("📭 Brak wyników! Zagraj najpierw!")
        return

    with open(PLIK_WYNIKOW, "r", encoding="utf-8") as plik:
        for linia in plik:
            # Linia wygląda tak: "Mario:5000\n"
            # .strip() usuwa \n
            # .split(":") dzieli na ["Mario", "5000"]
            dane = linia.strip().split(":")

            if len(dane) == 2:
                imie = dane[0]
                punkty = dane[1]
                print(f"⭐ {imie} zdobył {punkty} pkt")

# === GŁÓWNY PROGRAM ===
while True:
    print("\n📋 MENU:")
    print("1 - Dodaj wynik")
    print("2 - Zobacz wyniki")
    print("3 - Wyjdź")

    wybor = input("Twój wybór: ")

    if wybor == "1":
        dodaj_wynik()
    elif wybor == "2":
        pokaz_wyniki()
    elif wybor == "3":
        print("👋 Pa pa!")
        break
    else:
        print("❌ Nie ma takiej opcji!")
```

**Uruchom i przetestuj!** 🎮

### 💡 Jak to działa?

1. **`open(..., "a")`** - otwiera plik w trybie dopisywania, więc nie kasujemy starych wyników.
2. **`split(":")`** - to nasza magiczna sztuczka!
   - Jeśli w pliku mamy `Mario:5000`
   - To `split(":")` zamienia to na listę `["Mario", "5000"]`
   - Dzięki temu możemy oddzielić imię od punktów!

### 🎯 Wyzwanie dla chętnych:

Spróbuj przerobić program tak, aby wyświetlał wyniki od największego do najmniejszego! (Podpowiedź: będziesz potrzebować listy i funkcji `sort`).

---

## 📓 PROJEKT 2: Prosty Notatnik (20 minut)

Teraz stworzymy program do zapisywania Twoich pomysłów!

### 📝 Kod notatnika:

Stwórz plik `notatnik.py`:

```python
# 📓 MÓJ NOTATNIK
# Autor: [Twoje Imię]

import os

PLIK_NOTATEK = "moje_notatki.txt"

def dodaj_notatke():
    """Dodaje nową notatkę"""
    print("\n📝 NOWA NOTATKA")
    tytul = input("📌 Tytuł: ")
    tresc = input("✏️ Treść: ")

    # Zapisujemy w trybie "a" (dopisywanie)
    with open(PLIK_NOTATEK, "a", encoding="utf-8") as plik:
        plik.write("-" * 30 + "\n")
        plik.write(f"📌 {tytul}\n")
        plik.write(f"{tresc}\n")
        plik.write("-" * 30 + "\n")

    print("✅ Zapisano!")

def pokaz_notatki():
    """Pokazuje wszystkie notatki"""
    print("\n📖 TWOJE NOTATKI:")

    if not os.path.exists(PLIK_NOTATEK):
        print("📭 Pusto! Dodaj coś najpierw.")
        return

    with open(PLIK_NOTATEK, "r", encoding="utf-8") as plik:
        print(plik.read())

def wyczysc_notatki():
    """Usuwa wszystkie notatki"""
    decyzja = input("⚠️ Czy na pewno usunąć WSZYSTKO? (tak/nie): ")
    if decyzja == "tak":
        # Otwarcie w trybie "w" kasuje zawartość!
        with open(PLIK_NOTATEK, "w", encoding="utf-8") as plik:
            pass
        print("�️ Wyczyszczono!")

# === GŁÓWNY PROGRAM ===
while True:
    print("\n📋 MENU:")
    print("1 - Dodaj notatkę")
    print("2 - Czytaj notatki")
    print("3 - Wyczyść notatki")
    print("4 - Wyjdź")

    wybor = input("Twój wybór: ")

    if wybor == "1":
        dodaj_notatke()
    elif wybor == "2":
        pokaz_notatki()
    elif wybor == "3":
        wyczysc_notatki()
    elif wybor == "4":
        print("� Pa pa!")
        break
    else:
        print("❌ Nie ma takiej opcji!")
```

**Uruchom i przetestuj!** 📓

### 💡 Nowe rzeczy:

#### 1. `encoding="utf-8"` - polskie znaki

```python
# Bez tego mogą być "krzaczki" zamiast ą, ę, ś!
plik = open("plik.txt", "w", encoding="utf-8")
```

**Zawsze używaj `encoding="utf-8"` gdy piszesz po polsku!** 🇵🇱

### 🎯 Wyzwania do notatnika:

1. **Łatwe**: Dodaj datę do notatki (użyj `import datetime`)
2. **Średnie**: Zrób tak, aby każda notatka miała numer
3. **Trudne**: Dodaj hasło przy uruchamianiu programu!

---

## 🎮 BONUS: Integracja z grą Arkanoid!

Połącz system highscore z grą z Lekcji 6! Dodaj ten kod do swojego Arkanoida:

```python
# Na górze pliku dodaj:
import os

PLIK_WYNIKOW = "arkanoid_highscore.txt"

def wczytaj_najlepszy():
    """Wczytuje najlepszy wynik"""
    if os.path.exists(PLIK_WYNIKOW):
        with open(PLIK_WYNIKOW, "r") as plik:
            tekst = plik.read().strip()
            # Sprawdzamy czy w pliku jest liczba
            if tekst.isdigit():
                return int(tekst)
    return 0

def zapisz_najlepszy(wynik):
    """Zapisuje nowy najlepszy wynik"""
    with open(PLIK_WYNIKOW, "w") as plik:
        plik.write(str(wynik))

# W grze (na początku):
najlepszy_wynik = wczytaj_najlepszy()

# W funkcji draw() dodaj:
screen.draw.text(f"Rekord: {najlepszy_wynik}", (10, 40),
                 color="gold", fontsize=25)

# Gdy gracz przegrywa lub wygrywa:
if wynik > najlepszy_wynik:
    najlepszy_wynik = wynik
    zapisz_najlepszy(wynik)
    print("🏆 NOWY REKORD!")
```

Teraz Twój Arkanoid pamięta najlepsze wyniki! 🎮🏆

---

## 🧠 Podsumowanie - Czego się nauczyłeś?

### 📚 Nowe koncepty:

| Koncept            | Opis               | Przykład                     |
| ------------------ | ------------------ | ---------------------------- |
| `open()`           | Otwiera plik       | `open("plik.txt", "r")`      |
| Tryb `"r"`         | Czytanie           | Read                         |
| Tryb `"w"`         | Pisanie (kasuje!)  | Write                        |
| Tryb `"a"`         | Dopisywanie        | Append                       |
| `.read()`          | Czyta cały plik    | `plik.read()`                |
| `.write()`         | Zapisuje tekst     | `plik.write("tekst")`        |
| `.close()`         | Zamyka plik        | `plik.close()`               |
| `with`             | Auto-zamykanie     | `with open(...) as plik:`    |
| `.strip()`         | Usuwa białe znaki  | `linia.strip()`              |
| `.split()`         | Dzieli tekst       | `"a:b".split(":")`           |
| `os.path.exists()` | Czy plik istnieje? | `os.path.exists("plik.txt")` |
| `encoding`         | Kodowanie znaków   | `encoding="utf-8"`           |

### 🎯 Ważne zasady:

1. **Zawsze zamykaj pliki!** (lub używaj `with`)
2. **Tryb "w" kasuje plik!** - uważaj!
3. **Tryb "a" dopisuje** - bezpieczniejszy
4. **Używaj `encoding="utf-8"`** dla polskich znaków
5. **Sprawdzaj czy plik istnieje** przed odczytem

### 💡 Najczęstsze błędy:

```python
# ❌ ŹLE: Zapomniałeś zamknąć plik
plik = open("plik.txt", "w")
plik.write("tekst")
# Brak close()!

# ✅ DOBRZE: Używaj 'with'
with open("plik.txt", "w") as plik:
    plik.write("tekst")
# Automatycznie zamknięty!

# ❌ ŹLE: Czytanie nieistniejącego pliku
plik = open("nie_istnieje.txt", "r")  # BŁĄD!

# ✅ DOBRZE: Sprawdź najpierw
if os.path.exists("plik.txt"):
    with open("plik.txt", "r") as plik:
        print(plik.read())
```

---

## 📝 Zadanie domowe

Wybierz JEDNO z poniższych zadań:

### 🟢 Łatwe: Lista zadań (To-Do)

Stwórz program, który:

- Dodaje zadania do pliku `zadania.txt`
- Wyświetla listę zadań
- Oznacza zadania jako wykonane

### 🟡 Średnie: Baza kontaktów

Stwórz program, który:

- Zapisuje kontakty (imię, telefon, email) do pliku
- Wyszukuje kontakty po imieniu
- Wyświetla wszystkie kontakty

### 🔴 Trudne: Pamiętnik z hasłem

Stwórz program, który:

- Wymaga hasła do odblokowania
- Zapisuje wpisy z datą
- Szyfruje wpisy (np. zamienia litery)

---

## 🚀 Co dalej?

W następnej lekcji nauczymy się:

- 📖 **Słowniki** - jeszcze lepsza organizacja danych
- 🎨 **JSON** - uniwersalny format zapisu danych
- 🌐 **Konfiguracje gier** - zapisywanie ustawień

**Pamiętaj:** Umiejętność pracy z plikami to **podstawa prawdziwego programowania**! Każda aplikacja, gra czy strona internetowa zapisuje dane do plików lub baz danych! 💾

---

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

---

_Zapisałeś swój pierwszy plik? Stworzyłeś własny notatnik? Pochwal się w komentarzach! 📓✨_
