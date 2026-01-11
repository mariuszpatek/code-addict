+++
title = 'Python Podstawowy - Lekcja 13: Cyfrowa Książka Kontaktów cz.2 📒💾'
date = 2026-02-01T10:00:00+01:00
draft = false
url = '/python-course/lekcja-13/'
description = 'Trzynasta lekcja z serii Python Podstawowy. Kończymy Książkę Kontaktów - zapis JSON, wyszukiwanie i usuwanie!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'projekt', 'json', 'pliki', 'słowniki', 'programowanie', 'podstawy']
series = ['Python Podstawowy']
+++

# 📒 Lekcja 13: Cyfrowa Książka Kontaktów - Część 2 💾

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Witaj ponownie! 🚀 W poprzedniej lekcji stworzyliśmy podstawy Książki Kontaktów - menu, dodawanie i wyświetlanie kontaktów. Ale był jeden problem... **kontakty znikały po zamknięciu programu!** 😱

Dzisiaj to naprawimy! Nauczymy się zapisywać kontakty do pliku JSON, a także dodamy wyszukiwanie i usuwanie kontaktów.

<!--more-->

---

## 📋 Co dziś powtórzymy?

| Koncept          | Lekcja     | Jak użyjemy?                                  |
| ---------------- | ---------- | --------------------------------------------- |
| JSON             | Lekcja 8   | Zapis/odczyt kontaktów                        |
| `json.dump()`    | Lekcja 8   | Zapisywanie do pliku                          |
| `json.load()`    | Lekcja 8   | Wczytywanie z pliku                           |
| Pętle `for`      | Lekcja 4-5 | Przeszukiwanie kontaktów                      |
| `.lower()`       | Nowe!      | Wyszukiwanie bez rozróżniania wielkości liter |
| `.pop()` / `del` | Lekcja 5   | Usuwanie z listy                              |

---

## 🎯 Cel projektu (Część 2)

W tej lekcji dodamy:

1. 💾 **Zapis** kontaktów do pliku JSON
2. 📂 **Odczyt** kontaktów przy starcie programu
3. 🔍 **Wyszukiwanie** kontaktów po imieniu
4. ❌ **Usuwanie** kontaktów

---

## 👥 Praca w parach

| Osoba A                     | Osoba B                   |
| --------------------------- | ------------------------- |
| Pisze `zapisz_do_pliku()`   | Pisze `wczytaj_z_pliku()` |
| Pisze `szukaj_kontaktu()`   | Pisze `usun_kontakt()`    |
| Razem: testujecie wszystko! | Razem: szukacie błędów!   |

---

## 🧠 Przypomnienie: JSON

**JSON** (JavaScript Object Notation) to format zapisu danych, który wygląda prawie jak słowniki w Pythonie:

```json
[
  {
    "imie": "Ania",
    "telefon": "123-456-789",
    "email": "ania@example.com"
  },
  {
    "imie": "Tomek",
    "telefon": "987-654-321",
    "email": ""
  }
]
```

**Dlaczego JSON?**

- ✅ Łatwy do odczytania przez człowieka
- ✅ Obsługiwany przez prawie wszystkie języki programowania
- ✅ Idealny do zapisywania list i słowników

---

## 🚀 Kontynuujemy kodowanie!

Otwórz plik `ksiazka_kontaktow.py` z poprzedniej lekcji.

### Krok 1: Dodajemy import JSON i stałe

Na górze pliku dodaj:

```python
# 📒 CYFROWA KSIĄŻKA KONTAKTÓW - Część 2
# Autor: [Twoje Imię]
# Projekt powtórkowy - Lekcja 12-13

import os
import json  # NOWE! Do zapisu/odczytu JSON

# === STAŁE ===
PLIK_KONTAKTOW = "kontakty.json"  # Nazwa pliku z kontaktami

# === DANE ===
kontakty = []
```

---

### Krok 2: Funkcja zapisu do pliku

Dodaj tę funkcję po innych funkcjach:

```python
def zapisz_do_pliku():
    """Zapisuje kontakty do pliku JSON"""
    try:
        with open(PLIK_KONTAKTOW, "w", encoding="utf-8") as plik:
            json.dump(kontakty, plik, indent=4, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"❌ Błąd zapisu: {e}")
        return False
```

**Wyjaśnienie:**

- `"w"` - tryb zapisu (nadpisuje plik)
- `encoding="utf-8"` - obsługa polskich znaków
- `indent=4` - ładne formatowanie (4 spacje wcięcia)
- `ensure_ascii=False` - pozwala na polskie znaki
- `try/except` - obsługa błędów (gdyby coś poszło nie tak)

---

### Krok 3: Funkcja odczytu z pliku

```python
def wczytaj_z_pliku():
    """Wczytuje kontakty z pliku JSON"""
    global kontakty  # Będziemy modyfikować globalną listę

    # Sprawdzamy, czy plik istnieje
    if not os.path.exists(PLIK_KONTAKTOW):
        kontakty = []  # Jeśli nie, zaczynamy z pustą listą
        return

    try:
        with open(PLIK_KONTAKTOW, "r", encoding="utf-8") as plik:
            kontakty = json.load(plik)
        print(f"✅ Wczytano {len(kontakty)} kontakt(ów)")
    except Exception as e:
        print(f"⚠️ Błąd odczytu pliku: {e}")
        kontakty = []
```

---

### Krok 4: Auto-zapis po dodaniu kontaktu

Zmodyfikuj funkcję `dodaj_kontakt()` - na końcu dodaj zapis:

```python
def dodaj_kontakt():
    """Dodaje nowy kontakt do listy"""
    print()
    print("➕ DODAWANIE NOWEGO KONTAKTU")
    print("-" * 30)
    print()

    imie = input("👤 Imię: ")

    if imie.strip() == "":
        print("\n❌ Imię nie może być puste!")
        return

    telefon = input("📞 Telefon: ")
    email = input("📧 Email (opcjonalnie): ")

    nowy_kontakt = {
        "imie": imie.strip(),
        "telefon": telefon.strip(),
        "email": email.strip()
    }

    kontakty.append(nowy_kontakt)

    # NOWE! Zapisujemy do pliku
    if zapisz_do_pliku():
        print()
        print("✅ Kontakt został dodany i zapisany!")
    else:
        print()
        print("✅ Kontakt dodany, ale nie udało się zapisać do pliku.")

    print(f"   👤 {nowy_kontakt['imie']}")
    if nowy_kontakt['telefon']:
        print(f"   📞 {nowy_kontakt['telefon']}")
    if nowy_kontakt['email']:
        print(f"   📧 {nowy_kontakt['email']}")
```

---

### Krok 5: Wczytywanie przy starcie

Na samym dole pliku, **przed** pętlą `while True`, dodaj:

```python
# === GŁÓWNY PROGRAM ===

# Wczytujemy kontakty z pliku przy starcie!
print("📂 Wczytuję kontakty...")
wczytaj_z_pliku()
input("Naciśnij ENTER, aby kontynuować...")

while True:
    # ... reszta kodu ...
```

**Uruchom program!** Teraz:

1. Dodaj kilka kontaktów
2. Zamknij program (opcja 0)
3. Uruchom program ponownie
4. Kontakty są na miejscu! 🎉

---

### Krok 6: Wyszukiwanie kontaktów

Dodaj funkcję wyszukiwania:

```python
def szukaj_kontaktu():
    """Wyszukuje kontakty po imieniu"""
    print()
    print("🔍 WYSZUKIWANIE KONTAKTU")
    print("-" * 30)

    if len(kontakty) == 0:
        print("\n📭 Brak kontaktów do przeszukania.")
        return

    szukana_fraza = input("\n🔎 Wpisz imię (lub część imienia): ")
    szukana_fraza = szukana_fraza.strip().lower()

    if szukana_fraza == "":
        print("\n❌ Nie wpisano frazy do wyszukania!")
        return

    # Szukamy pasujących kontaktów
    znalezione = []
    for kontakt in kontakty:
        # Porównujemy małymi literami (bez rozróżniania wielkości)
        if szukana_fraza in kontakt["imie"].lower():
            znalezione.append(kontakt)

    # Wyświetlamy wyniki
    print()
    if len(znalezione) == 0:
        print(f"😕 Nie znaleziono kontaktów zawierających '{szukana_fraza}'")
    else:
        print(f"✅ Znaleziono {len(znalezione)} kontakt(ów):")
        print()

        for i, kontakt in enumerate(znalezione, 1):
            print(f"📌 Wynik #{i}")
            print(f"   👤 Imię:    {kontakt['imie']}")
            if kontakt['telefon']:
                print(f"   📞 Telefon: {kontakt['telefon']}")
            if kontakt['email']:
                print(f"   📧 Email:   {kontakt['email']}")
            print()
```

**Zamień placeholder w menu:**

```python
    elif wybor == "3":
        szukaj_kontaktu()
        input("\nNaciśnij ENTER...")
```

**Przetestuj!** Szukaj po części imienia - np. wpisz "an" żeby znaleźć "Ania", "Anna", "Antek"! 🔍

---

### Krok 7: Usuwanie kontaktów

Dodaj funkcję usuwania:

```python
def usun_kontakt():
    """Usuwa kontakt z listy"""
    print()
    print("❌ USUWANIE KONTAKTU")
    print("-" * 30)

    if len(kontakty) == 0:
        print("\n📭 Brak kontaktów do usunięcia.")
        return

    # Najpierw pokazujemy listę kontaktów z numerami
    print("\n📖 Wybierz kontakt do usunięcia:\n")

    for i, kontakt in enumerate(kontakty, 1):
        print(f"  {i}. {kontakt['imie']}", end="")
        if kontakt['telefon']:
            print(f" ({kontakt['telefon']})", end="")
        print()

    print(f"\n  0. ↩️  Anuluj")

    # Pobieramy wybór użytkownika
    print()
    wybor = input("Podaj numer kontaktu do usunięcia (0 = anuluj): ")

    # Sprawdzamy, czy to liczba
    if not wybor.isdigit():
        print("\n❌ Nieprawidłowy numer!")
        return

    numer = int(wybor)

    # Sprawdzamy, czy użytkownik anulował
    if numer == 0:
        print("\n↩️  Anulowano usuwanie.")
        return

    # Sprawdzamy, czy numer jest w zakresie
    if numer < 1 or numer > len(kontakty):
        print(f"\n❌ Nie ma kontaktu o numerze {numer}!")
        return

    # Pobieramy kontakt do usunięcia (indeks = numer - 1)
    kontakt_do_usuniecia = kontakty[numer - 1]

    # Potwierdzenie
    print(f"\n⚠️  Czy na pewno chcesz usunąć kontakt:")
    print(f"   👤 {kontakt_do_usuniecia['imie']}?")

    potwierdzenie = input("\nWpisz 'TAK' aby potwierdzić: ")

    if potwierdzenie.upper() == "TAK":
        # Usuwamy kontakt
        kontakty.pop(numer - 1)

        # Zapisujemy zmiany do pliku
        if zapisz_do_pliku():
            print("\n✅ Kontakt został usunięty!")
        else:
            print("\n✅ Kontakt usunięty, ale błąd zapisu do pliku.")
    else:
        print("\n↩️  Anulowano usuwanie.")
```

**Zamień placeholder w menu:**

```python
    elif wybor == "4":
        usun_kontakt()
        input("\nNaciśnij ENTER...")
```

---

### Krok 8: Kompletny kod

Oto pełny, działający kod Książki Kontaktów:

```python
# 📒 CYFROWA KSIĄŻKA KONTAKTÓW - Wersja Kompletna
# Autor: [Twoje Imię]
# Projekt powtórkowy - Lekcja 12-13

import os
import json

# === STAŁE ===
PLIK_KONTAKTOW = "kontakty.json"

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

# === FUNKCJE PLIKÓW ===

def zapisz_do_pliku():
    """Zapisuje kontakty do pliku JSON"""
    try:
        with open(PLIK_KONTAKTOW, "w", encoding="utf-8") as plik:
            json.dump(kontakty, plik, indent=4, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"❌ Błąd zapisu: {e}")
        return False

def wczytaj_z_pliku():
    """Wczytuje kontakty z pliku JSON"""
    global kontakty

    if not os.path.exists(PLIK_KONTAKTOW):
        kontakty = []
        return

    try:
        with open(PLIK_KONTAKTOW, "r", encoding="utf-8") as plik:
            kontakty = json.load(plik)
        print(f"✅ Wczytano {len(kontakty)} kontakt(ów)")
    except Exception as e:
        print(f"⚠️ Błąd odczytu: {e}")
        kontakty = []

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

    imie = input("👤 Imię: ")

    if imie.strip() == "":
        print("\n❌ Imię nie może być puste!")
        return

    telefon = input("📞 Telefon: ")
    email = input("📧 Email (opcjonalnie): ")

    nowy_kontakt = {
        "imie": imie.strip(),
        "telefon": telefon.strip(),
        "email": email.strip()
    }

    kontakty.append(nowy_kontakt)

    if zapisz_do_pliku():
        print()
        print("✅ Kontakt został dodany i zapisany!")
    else:
        print()
        print("✅ Kontakt dodany (błąd zapisu do pliku)")

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

def szukaj_kontaktu():
    """Wyszukuje kontakty po imieniu"""
    print()
    print("🔍 WYSZUKIWANIE KONTAKTU")
    print("-" * 30)

    if len(kontakty) == 0:
        print("\n📭 Brak kontaktów do przeszukania.")
        return

    szukana_fraza = input("\n🔎 Wpisz imię (lub część imienia): ")
    szukana_fraza = szukana_fraza.strip().lower()

    if szukana_fraza == "":
        print("\n❌ Nie wpisano frazy do wyszukania!")
        return

    znalezione = []
    for kontakt in kontakty:
        if szukana_fraza in kontakt["imie"].lower():
            znalezione.append(kontakt)

    print()
    if len(znalezione) == 0:
        print(f"😕 Nie znaleziono kontaktów zawierających '{szukana_fraza}'")
    else:
        print(f"✅ Znaleziono {len(znalezione)} kontakt(ów):")
        print()

        for i, kontakt in enumerate(znalezione, 1):
            print(f"📌 Wynik #{i}")
            print(f"   👤 Imię:    {kontakt['imie']}")
            if kontakt['telefon']:
                print(f"   📞 Telefon: {kontakt['telefon']}")
            if kontakt['email']:
                print(f"   📧 Email:   {kontakt['email']}")
            print()

def usun_kontakt():
    """Usuwa kontakt z listy"""
    print()
    print("❌ USUWANIE KONTAKTU")
    print("-" * 30)

    if len(kontakty) == 0:
        print("\n📭 Brak kontaktów do usunięcia.")
        return

    print("\n📖 Wybierz kontakt do usunięcia:\n")

    for i, kontakt in enumerate(kontakty, 1):
        print(f"  {i}. {kontakt['imie']}", end="")
        if kontakt['telefon']:
            print(f" ({kontakt['telefon']})", end="")
        print()

    print(f"\n  0. ↩️  Anuluj")

    print()
    wybor = input("Podaj numer (0 = anuluj): ")

    if not wybor.isdigit():
        print("\n❌ Nieprawidłowy numer!")
        return

    numer = int(wybor)

    if numer == 0:
        print("\n↩️  Anulowano.")
        return

    if numer < 1 or numer > len(kontakty):
        print(f"\n❌ Nie ma kontaktu o numerze {numer}!")
        return

    kontakt_do_usuniecia = kontakty[numer - 1]

    print(f"\n⚠️  Usunąć kontakt: {kontakt_do_usuniecia['imie']}?")
    potwierdzenie = input("Wpisz 'TAK' aby potwierdzić: ")

    if potwierdzenie.upper() == "TAK":
        kontakty.pop(numer - 1)

        if zapisz_do_pliku():
            print("\n✅ Kontakt usunięty!")
        else:
            print("\n✅ Kontakt usunięty (błąd zapisu)")
    else:
        print("\n↩️  Anulowano.")

# === GŁÓWNY PROGRAM ===

print("📂 Wczytuję kontakty...")
wczytaj_z_pliku()
input("Naciśnij ENTER, aby kontynuować...")

while True:
    wyczysc_ekran()
    pokaz_naglowek()

    print(f"📊 Kontaktów w bazie: {len(kontakty)}")
    print()

    wybor = pokaz_menu()

    if wybor == "0":
        wyczysc_ekran()
        print("👋 Do widzenia!")
        print("Twoje kontakty są zapisane w pliku 'kontakty.json'")
        break
    elif wybor == "1":
        dodaj_kontakt()
        input("\nNaciśnij ENTER...")
    elif wybor == "2":
        pokaz_kontakty()
        input("\nNaciśnij ENTER...")
    elif wybor == "3":
        szukaj_kontaktu()
        input("\nNaciśnij ENTER...")
    elif wybor == "4":
        usun_kontakt()
        input("\nNaciśnij ENTER...")
    else:
        print("\n❓ Nieznana opcja!")
        input("Naciśnij ENTER...")
```

---

## ⭐ Wyzwania dla chętnych!

### 🌟 Wyzwanie 1: Edycja kontaktu

Dodaj opcję 5 w menu - edycja istniejącego kontaktu.

### 🌟 Wyzwanie 2: Eksport do TXT

Dodaj opcję eksportu kontaktów do czytelnego pliku tekstowego:

```
MOJE KONTAKTY
=============
1. Ania - 123-456-789
2. Tomek - 987-654-321
```

### 🌟 Wyzwanie 3: Wyszukiwanie po telefonie

Rozszerz wyszukiwanie, żeby szukało też po numerze telefonu.

### 🌟 Wyzwanie 4: Kategorie

Dodaj pole "kategoria" (np. "rodzina", "szkoła", "znajomi") i możliwość filtrowania.

---

## ✅ Podsumowanie - Co powtórzyliśmy?

| Koncept            | Gdzie w kodzie?                         |
| ------------------ | --------------------------------------- |
| `import json`      | Import modułu JSON                      |
| `json.dump()`      | Zapis do pliku                          |
| `json.load()`      | Odczyt z pliku                          |
| `with open()`      | Bezpieczne otwieranie plików            |
| `encoding="utf-8"` | Polskie znaki                           |
| `os.path.exists()` | Sprawdzanie czy plik istnieje           |
| `global`           | Dostęp do globalnej zmiennej            |
| `.lower()`         | Wyszukiwanie bez rozróżniania wielkości |
| `.pop()`           | Usuwanie z listy                        |
| `try/except`       | Obsługa błędów                          |
| `.upper()`         | Zamiana na wielkie litery               |
| `enumerate()`      | Numerowanie w pętli                     |

---

## 🎉 Gratulacje!

Ukończyłeś swój **pierwszy duży projekt** w Pythonie! 🏆

Twoja Książka Kontaktów:

- ✅ Dodaje kontakty
- ✅ Wyświetla kontakty
- ✅ Zapisuje do pliku JSON
- ✅ Wczytuje przy starcie
- ✅ Wyszukuje kontakty
- ✅ Usuwa kontakty

**To prawdziwa, użyteczna aplikacja!** Możesz jej używać na co dzień! 📱

---

## 📝 Zadanie domowe

1. **Dodaj min. 10 kontaktów** - prawdziwych lub wymyślonych
2. **Zamknij i otwórz program** - sprawdź, czy kontakty się zachowały
3. **Wybierz jedno wyzwanie** i spróbuj je zrobić!
4. **Pokaż program rodzicom** - niech zobaczą, co potrafisz! 👨‍👩‍👧

---

## 🔮 Co dalej?

W następnych lekcjach stworzymy **Wirtualnego Zwierzaka** - program używający klas i obiektów! 🐱🐶

**[→ Przejdź do Lekcji 14: Wirtualny Zwierzak cz.1](/python-course/lekcja-14/)**

---

_Masz pytania? Pochwal się swoją książką kontaktów w komentarzu!_ 💬
