+++
title = 'Python Podstawowy - Lekcja 12: Cyfrowa Książka Kontaktów cz.1 📒'
date = 2026-01-25T10:00:00+01:00
draft = false
url = '/python-course/lekcja-12/'
description = 'Dwunasta lekcja z serii Python Podstawowy. Zaczynamy budować Cyfrową Książkę Kontaktów - część 1!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'projekt', 'słowniki', 'listy', 'menu', 'programowanie', 'podstawy']
series = ['Python Podstawowy']
+++

# 📒 Lekcja 12: Cyfrowa Książka Kontaktów - Część 1

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Witaj ponownie, młody programisto! 🚀 Dzisiaj zaczynamy budować większy projekt - **Cyfrową Książkę Kontaktów**! To będzie prawdziwa aplikacja, której możesz używać do przechowywania numerów telefonów i e-maili swoich znajomych!

Projekt rozłożymy na **2 lekcje**:

- **Część 1 (dzisiaj):** Menu, dodawanie i wyświetlanie kontaktów
- **Część 2 (następna lekcja):** Zapis do JSON, wyszukiwanie, usuwanie

<!--more-->

---

## 📋 Co dziś powtórzymy?

| Koncept        | Lekcja     | Jak użyjemy?                     |
| -------------- | ---------- | -------------------------------- |
| Słowniki `{}`  | Lekcja 8   | Przechowywanie danych kontaktu   |
| Listy `[]`     | Lekcja 5   | Lista wszystkich kontaktów       |
| Pętla `while`  | Lekcja 4   | Główna pętla menu                |
| `if/elif/else` | Lekcja 3-4 | Obsługa opcji menu               |
| Funkcje `def`  | Lekcja 5   | Organizacja kodu                 |
| `input()`      | Lekcja 2   | Pobieranie danych od użytkownika |
| f-stringi      | Lekcja 2   | Formatowanie wyświetlania        |

---

## 🎯 Cel projektu (Część 1)

W tej lekcji stworzymy program, który:

1. 📋 Wyświetla **menu** z opcjami
2. ➕ Pozwala **dodać** nowy kontakt (imię, telefon, email)
3. 📖 Pozwala **wyświetlić** wszystkie kontakty
4. 🔁 Działa w pętli, aż użytkownik wybierze "Wyjście"

---

## 👥 Praca w parach

Jeśli pracujesz z kolegą/koleżanką:

| Osoba A                       | Osoba B                          |
| ----------------------------- | -------------------------------- |
| Pisze funkcję `pokaz_menu()`  | Pisze funkcję `dodaj_kontakt()`  |
| Pisze główną pętlę `while`    | Pisze funkcję `pokaz_kontakty()` |
| Razem: łączycie i testujecie! | Razem: szukacie błędów!          |

---

## 🧠 Przypomnienie: Słowniki

**Słownik** to struktura danych, która przechowuje pary **klucz: wartość**:

```python
# Przykład słownika - dane jednej osoby
osoba = {
    "imie": "Ania",
    "telefon": "123-456-789",
    "email": "ania@example.com"
}

# Dostęp do danych
print(osoba["imie"])      # Ania
print(osoba["telefon"])   # 123-456-789
```

**Lista słowników** to sposób na przechowywanie wielu osób:

```python
kontakty = [
    {"imie": "Ania", "telefon": "123-456-789"},
    {"imie": "Tomek", "telefon": "987-654-321"},
    {"imie": "Kasia", "telefon": "555-123-456"}
]

# Dostęp do pierwszego kontaktu
print(kontakty[0]["imie"])  # Ania

# Pętla przez wszystkie kontakty
for kontakt in kontakty:
    print(kontakt["imie"])
```

---

## 🚀 Zaczynamy kodować!

### Krok 1: Struktura projektu

Stwórz nowy plik `ksiazka_kontaktow.py`:

```python
# 📒 CYFROWA KSIĄŻKA KONTAKTÓW
# Autor: [Twoje Imię]
# Projekt powtórkowy - Lekcja 12-13

import os

# === DANE ===
# Lista do przechowywania kontaktów (na razie pusta)
kontakty = []

# === FUNKCJE ===

def wyczysc_ekran():
    """Czyści ekran konsoli"""
    os.system('cls')  # Windows
    # os.system('clear')  # Mac/Linux

def pokaz_naglowek():
    """Wyświetla nagłówek programu"""
    print("=" * 45)
    print("📒  CYFROWA KSIĄŻKA KONTAKTÓW  📒")
    print("=" * 45)
    print()

# === GŁÓWNY PROGRAM ===
wyczysc_ekran()
pokaz_naglowek()
print("Program w budowie... 🚧")
input("Naciśnij ENTER...")
```

**Uruchom!** Zobaczysz ładny nagłówek. To nasz punkt startowy! 🎉

---

### Krok 2: Menu główne

Dodajmy funkcję wyświetlającą menu i obsługę wyboru:

```python
# 📒 CYFROWA KSIĄŻKA KONTAKTÓW
# Autor: [Twoje Imię]

import os

# === DANE ===
kontakty = []

# === FUNKCJE ===

def wyczysc_ekran():
    """Czyści ekran konsoli"""
    os.system('cls')  # Windows

def pokaz_naglowek():
    """Wyświetla nagłówek programu"""
    print("=" * 45)
    print("📒  CYFROWA KSIĄŻKA KONTAKTÓW  📒")
    print("=" * 45)
    print()

def pokaz_menu():
    """Wyświetla menu i zwraca wybór użytkownika"""
    print("📋 MENU:")
    print("-" * 30)
    print("  1. ➕ Dodaj kontakt")
    print("  2. 📖 Pokaż wszystkie kontakty")
    print("  3. 🔍 Szukaj kontaktu")
    print("  4. ❌ Usuń kontakt")
    print("-" * 30)
    print("  0. 🚪 Wyjście")
    print()

    wybor = input("Wybierz opcję (0-4): ")
    return wybor

# === GŁÓWNY PROGRAM ===

while True:
    wyczysc_ekran()
    pokaz_naglowek()

    # Pokazujemy ile mamy kontaktów
    print(f"📊 Kontaktów w bazie: {len(kontakty)}")
    print()

    wybor = pokaz_menu()

    if wybor == "0":
        wyczysc_ekran()
        print("👋 Do widzenia!")
        print("Dziękujemy za korzystanie z Książki Kontaktów!")
        break
    elif wybor == "1":
        print("\n🚧 Funkcja 'Dodaj kontakt' - wkrótce!")
        input("Naciśnij ENTER...")
    elif wybor == "2":
        print("\n🚧 Funkcja 'Pokaż kontakty' - wkrótce!")
        input("Naciśnij ENTER...")
    elif wybor == "3":
        print("\n🚧 Funkcja 'Szukaj' - wkrótce!")
        input("Naciśnij ENTER...")
    elif wybor == "4":
        print("\n🚧 Funkcja 'Usuń' - wkrótce!")
        input("Naciśnij ENTER...")
    else:
        print("\n❓ Nieznana opcja! Wybierz 0, 1, 2, 3 lub 4.")
        input("Naciśnij ENTER...")
```

**Uruchom!** Teraz masz działające menu, które można wybierać! 🎮

---

### Krok 3: Dodawanie kontaktu

Teraz napiszemy funkcję dodającą nowy kontakt:

```python
def dodaj_kontakt():
    """Dodaje nowy kontakt do listy"""
    print()
    print("➕ DODAWANIE NOWEGO KONTAKTU")
    print("-" * 30)
    print()

    # Pobieramy dane od użytkownika
    imie = input("👤 Imię: ")

    # Sprawdzamy, czy imię nie jest puste
    if imie.strip() == "":
        print("\n❌ Imię nie może być puste!")
        return  # Wychodzimy z funkcji

    telefon = input("📞 Telefon: ")
    email = input("📧 Email (opcjonalnie): ")

    # Tworzymy słownik z danymi kontaktu
    nowy_kontakt = {
        "imie": imie.strip(),
        "telefon": telefon.strip(),
        "email": email.strip()
    }

    # Dodajemy do listy kontaktów
    kontakty.append(nowy_kontakt)

    print()
    print("✅ Kontakt został dodany!")
    print(f"   👤 {nowy_kontakt['imie']}")
    if nowy_kontakt['telefon']:
        print(f"   📞 {nowy_kontakt['telefon']}")
    if nowy_kontakt['email']:
        print(f"   📧 {nowy_kontakt['email']}")
```

**Zamień placeholder w głównej pętli:**

```python
    elif wybor == "1":
        dodaj_kontakt()
        input("\nNaciśnij ENTER...")
```

**Uruchom i dodaj kilka kontaktów!** Zauważ, że licznik kontaktów się zmienia! 📈

---

### Krok 4: Wyświetlanie kontaktów

Teraz funkcja pokazująca wszystkie kontakty:

```python
def pokaz_kontakty():
    """Wyświetla wszystkie kontakty"""
    print()
    print("📖 LISTA KONTAKTÓW")
    print("-" * 30)

    # Sprawdzamy, czy są jakieś kontakty
    if len(kontakty) == 0:
        print()
        print("📭 Brak kontaktów w bazie.")
        print("   Użyj opcji 1, aby dodać pierwszy kontakt!")
        return

    print()

    # Wyświetlamy każdy kontakt z numerem
    for i, kontakt in enumerate(kontakty, 1):
        print(f"📌 Kontakt #{i}")
        print(f"   👤 Imię:    {kontakt['imie']}")

        if kontakt['telefon']:
            print(f"   📞 Telefon: {kontakt['telefon']}")
        else:
            print(f"   📞 Telefon: (brak)")

        if kontakt['email']:
            print(f"   📧 Email:   {kontakt['email']}")
        else:
            print(f"   📧 Email:   (brak)")

        print()  # Pusta linia między kontaktami

    print(f"📊 Łącznie: {len(kontakty)} kontakt(ów)")
```

**Zamień placeholder w głównej pętli:**

```python
    elif wybor == "2":
        pokaz_kontakty()
        input("\nNaciśnij ENTER...")
```

**Uruchom!** Teraz możesz dodawać i przeglądać kontakty! 🎉

---

### Krok 5: Kompletny kod części 1

Oto cały kod z tej lekcji:

```python
# 📒 CYFROWA KSIĄŻKA KONTAKTÓW - Część 1
# Autor: [Twoje Imię]
# Projekt powtórkowy - Lekcja 12

import os

# === DANE ===
kontakty = []

# === FUNKCJE POMOCNICZE ===

def wyczysc_ekran():
    """Czyści ekran konsoli"""
    os.system('cls')  # Windows
    # os.system('clear')  # Mac/Linux

def pokaz_naglowek():
    """Wyświetla nagłówek programu"""
    print("=" * 45)
    print("📒  CYFROWA KSIĄŻKA KONTAKTÓW  📒")
    print("=" * 45)
    print()

# === FUNKCJE MENU ===

def pokaz_menu():
    """Wyświetla menu i zwraca wybór użytkownika"""
    print("📋 MENU:")
    print("-" * 30)
    print("  1. ➕ Dodaj kontakt")
    print("  2. 📖 Pokaż wszystkie kontakty")
    print("  3. 🔍 Szukaj kontaktu")
    print("  4. ❌ Usuń kontakt")
    print("-" * 30)
    print("  0. 🚪 Wyjście")
    print()

    wybor = input("Wybierz opcję (0-4): ")
    return wybor

# === FUNKCJE KONTAKTÓW ===

def dodaj_kontakt():
    """Dodaje nowy kontakt do listy"""
    print()
    print("➕ DODAWANIE NOWEGO KONTAKTU")
    print("-" * 30)
    print()

    # Pobieramy dane od użytkownika
    imie = input("👤 Imię: ")

    # Sprawdzamy, czy imię nie jest puste
    if imie.strip() == "":
        print("\n❌ Imię nie może być puste!")
        return

    telefon = input("📞 Telefon: ")
    email = input("📧 Email (opcjonalnie): ")

    # Tworzymy słownik z danymi kontaktu
    nowy_kontakt = {
        "imie": imie.strip(),
        "telefon": telefon.strip(),
        "email": email.strip()
    }

    # Dodajemy do listy kontaktów
    kontakty.append(nowy_kontakt)

    print()
    print("✅ Kontakt został dodany!")
    print(f"   👤 {nowy_kontakt['imie']}")
    if nowy_kontakt['telefon']:
        print(f"   📞 {nowy_kontakt['telefon']}")
    if nowy_kontakt['email']:
        print(f"   📧 {nowy_kontakt['email']}")

def pokaz_kontakty():
    """Wyświetla wszystkie kontakty"""
    print()
    print("📖 LISTA KONTAKTÓW")
    print("-" * 30)

    if len(kontakty) == 0:
        print()
        print("📭 Brak kontaktów w bazie.")
        print("   Użyj opcji 1, aby dodać pierwszy kontakt!")
        return

    print()

    for i, kontakt in enumerate(kontakty, 1):
        print(f"📌 Kontakt #{i}")
        print(f"   👤 Imię:    {kontakt['imie']}")

        if kontakt['telefon']:
            print(f"   📞 Telefon: {kontakt['telefon']}")
        else:
            print(f"   📞 Telefon: (brak)")

        if kontakt['email']:
            print(f"   📧 Email:   {kontakt['email']}")
        else:
            print(f"   📧 Email:   (brak)")

        print()

    print(f"📊 Łącznie: {len(kontakty)} kontakt(ów)")

# === GŁÓWNY PROGRAM ===

while True:
    wyczysc_ekran()
    pokaz_naglowek()

    print(f"📊 Kontaktów w bazie: {len(kontakty)}")
    print()

    wybor = pokaz_menu()

    if wybor == "0":
        wyczysc_ekran()
        print("👋 Do widzenia!")
        print("Dziękujemy za korzystanie z Książki Kontaktów!")
        break
    elif wybor == "1":
        dodaj_kontakt()
        input("\nNaciśnij ENTER...")
    elif wybor == "2":
        pokaz_kontakty()
        input("\nNaciśnij ENTER...")
    elif wybor == "3":
        print("\n🚧 Funkcja 'Szukaj' - będzie w części 2!")
        input("Naciśnij ENTER...")
    elif wybor == "4":
        print("\n🚧 Funkcja 'Usuń' - będzie w części 2!")
        input("Naciśnij ENTER...")
    else:
        print("\n❓ Nieznana opcja! Wybierz 0, 1, 2, 3 lub 4.")
        input("Naciśnij ENTER...")
```

---

## ⚠️ Problem: Kontakty znikają!

Zauważyłeś, że po zamknięciu programu wszystkie kontakty znikają? 😱

To dlatego, że trzymamy je tylko w **pamięci RAM** (w zmiennej `kontakty`). Gdy program się kończy, pamięć jest czyszczona!

**Rozwiązanie:** W **Części 2** nauczymy się zapisywać kontakty do pliku JSON - wtedy będą bezpieczne! 💾

---

## ⭐ Wyzwania dla chętnych!

### 🌟 Wyzwanie 1: Walidacja telefonu

Sprawdź, czy telefon zawiera tylko cyfry i myślniki:

```python
def czy_poprawny_telefon(telefon):
    for znak in telefon:
        if znak not in "0123456789-+ ":
            return False
    return True
```

### 🌟 Wyzwanie 2: Dodatkowe pole

Dodaj pole "notatka" do kontaktu - np. "kolega ze szkoły".

### 🌟 Wyzwanie 3: Sortowanie

Wyświetl kontakty posortowane alfabetycznie po imieniu.

---

## ✅ Podsumowanie - Co powtórzyliśmy?

| Koncept        | Gdzie w kodzie?                      |
| -------------- | ------------------------------------ |
| Słowniki `{}`  | `nowy_kontakt = {"imie": ...}`       |
| Listy `[]`     | `kontakty = []`, `kontakty.append()` |
| `while True`   | Główna pętla programu                |
| `break`        | Wyjście z pętli                      |
| `if/elif/else` | Obsługa menu                         |
| Funkcje `def`  | Cały kod podzielony na funkcje       |
| `return`       | Wyjście z funkcji                    |
| `enumerate()`  | Numerowanie kontaktów                |
| `len()`        | Liczenie kontaktów                   |
| `.strip()`     | Usuwanie spacji                      |
| f-stringi      | Wyświetlanie danych                  |

---

## 📝 Zadanie domowe

1. **Dodaj 5 kontaktów** do swojej książki i przetestuj wyświetlanie.
2. **Spróbuj zrobić Wyzwanie 1** - walidację telefonu.
3. **Zastanów się:** Co jeszcze przydałoby się w książce kontaktów?

---

## 🔮 Co dalej?

W **Części 2** dodamy:

- 💾 Zapis i odczyt z pliku JSON
- 🔍 Wyszukiwanie kontaktów
- ❌ Usuwanie kontaktów
- ✏️ Edycja kontaktów (bonus!)

**[→ Przejdź do Lekcji 13: Książka Kontaktów cz.2](/python-course/lekcja-13/)**

---

_Masz pytania? Coś nie działa? Napisz w komentarzu!_ 💬
