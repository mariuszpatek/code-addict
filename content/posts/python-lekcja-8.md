+++
title = 'Python Podstawowy - Lekcja 8: Słowniki i JSON - Twoja Baza Danych! 📚💾'
date = 2025-12-06T10:00:00+01:00
draft = false
url = '/python-course/lekcja-8/'
description = 'Ósma lekcja z serii Python Podstawowy. Poznajemy słowniki i format JSON - profesjonalny sposób na przechowywanie danych!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'słowniki', 'json', 'baza danych', 'rpg', 'programowanie', 'podstawy']
series = ['Python Podstawowy']
+++

# 📚 Lekcja 8: Słowniki i JSON - Twoja Baza Danych! 💾

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Cześć Mistrzu Kodu! 👋 W poprzedniej lekcji nauczyliśmy się zapisywać proste teksty do plików. To było super, ale... co jeśli chcemy zapisać coś bardziej skomplikowanego? Na przykład statystyki bohatera w grze RPG, albo ustawienia Twojej aplikacji?

Zapisywanie tego linijka po linijce i pamiętanie, że "w trzeciej linii jest siła, a w czwartej zręczność" jest trudne i łatwo o błąd. 🤯

Dlatego dzisiaj poznamy **Słowniki** oraz format **JSON** - narzędzia, których używają profesjonaliści w Netflixie, YouTube czy Minecrafcie! 🚀

<!--more-->

## 🎯 Czego się dzisiaj nauczymy?

- 📖 Czym są **Słowniki** (Dictionaries) i czym różnią się od List
- 🔑 Jak działają pary **Klucz-Wartość**
- 📝 Jak tworzyć, zmieniać i usuwać dane w słownikach
- 📦 Co to jest **JSON** i dlaczego jest taki ważny
- 💾 Jak zapisywać i wczytywać skomplikowane dane w 3 linijkach kodu!
- 🛡️ Stworzymy **Kreator Postaci RPG** z zapisem stanu gry!

---

## 📦 Listy vs Słowniki - O co chodzi?

Wyobraź sobie, że masz plecak (Listę) i Szafkę z szufladami (Słownik).

### 🎒 Lista (List)

W liście rzeczy są ułożone po kolei. Żeby coś znaleźć, musisz wiedzieć, na którym jest miejscu (indeksie).

```python
# Lista - musisz pamiętać indeksy!
bohater_lista = ["Wojownik", 100, 50, "Miecz"]
# 0 = Klasa
# 1 = Życie
# 2 = Mana
# 3 = Broń

print(bohater_lista[1]) # Wypisze 100. Ale co to jest 100? Trudno zgadnąć!
```

### 🗄️ Słownik (Dictionary)

W słowniku każda rzecz ma swoją **nazwę** (klucz). Nie musisz liczyć pozycji, po prostu prosisz o konkretną rzecz po nazwie!

```python
# Słownik - wszystko ma swoją nazwę!
bohater_dict = {
    "klasa": "Wojownik",
    "zycie": 100,
    "mana": 50,
    "bron": "Miecz"
}

print(bohater_dict["zycie"]) # Wypisze 100. Od razu widać, że to życie!
```

**Wniosek:** Słowniki są idealne do opisywania obiektów, które mają różne cechy!

---

## 🔑 Jak używać Słowników?

Słownik tworzymy używając nawiasów klamrowych `{}`. W środku wpisujemy pary `Klucz: Wartość`.

### 1. Tworzenie słownika

```python
moj_pies = {
    "imie": "Burek",
    "wiek": 5,
    "rasa": "Kundelek",
    "lubi_spac": True
}
```

### 2. Odczytywanie danych

Podajemy klucz w nawiasie kwadratowym `[]` (tak jak indeks w liście, ale używamy nazwy!).

```python
print(moj_pies["imie"])  # Wypisze: Burek
print(f"Mój pies ma {moj_pies['wiek']} lat.")
```

### 3. Dodawanie i Zmiana danych

To jest super proste! Po prostu przypisujemy wartość do klucza.

```python
# Zmiana istniejącej wartości
moj_pies["wiek"] = 6  # Burek miał urodziny!

# Dodanie nowej pary (jeśli klucz nie istnieje, Python go stworzy!)
moj_pies["kolor"] = "Brązowy"
moj_pies["ulubiona_zabawka"] = "Piłka"

print(moj_pies)
```

### 4. Usuwanie danych

Używamy słowa `del`.

```python
del moj_pies["lubi_spac"] # Burek już nie lubi spać, teraz biega!
```

---

## 🌐 Co to jest JSON?

**JSON** (czytamy "dżejson") to skrót od _JavaScript Object Notation_. Brzmi strasznie, ale to po prostu **słownik zapisany jako tekst**.

To najpopularniejszy sposób przesyłania danych w Internecie. Kiedy Twoja gra pobiera listę serwerów, albo sprawdzasz pogodę w telefonie - to prawie na pewno jest JSON!

W Pythonie mamy wbudowaną bibliotekę `json`, która robi całą magię za nas.

### 🪄 Magiczne funkcje JSON:

1.  `json.dump(dane, plik)` - **Zapisuje** słownik do pliku (Dump = zrzut).
2.  `json.load(plik)` - **Wczytuje** dane z pliku do słownika (Load = ładuj).

---

## � Pętle i Słowniki - Eksploracja Danych!

Słowniki świetnie współpracują z pętlami. Możemy przeglądać klucze, wartości lub oba naraz!

### Przeglądanie kluczy

```python
ekwipunek = {
    "miecz": 1,
    "tarcza": 1,
    "mikstury": 5,
    "zloto": 100
}

# Pętla przez klucze
for przedmiot in ekwipunek:
    print(f"Masz: {przedmiot}")
```

### Przeglądanie kluczy i wartości razem

Używamy metody `.items()` - to jest **super przydatne**!

```python
# Pętla przez pary klucz-wartość
for przedmiot, ilosc in ekwipunek.items():
    print(f"{przedmiot}: {ilosc} szt.")
```

### Przeglądanie samych wartości

```python
# Tylko wartości
for ilosc in ekwipunek.values():
    print(ilosc)
```

---

## 🔍 Bezpieczne Pobieranie Danych - Metoda `.get()`

Co się stanie, jeśli spróbujesz pobrać klucz, który nie istnieje?

```python
bohater = {"imie": "Max", "hp": 100}

# To wywoła błąd KeyError!
# print(bohater["mana"])  # ❌ BŁĄD!

# Bezpieczny sposób - używamy .get()
print(bohater.get("mana"))  # Wypisze: None (nic)
print(bohater.get("mana", 0))  # Wypisze: 0 (wartość domyślna)
```

**Metoda `.get(klucz, wartość_domyślna)`** jest bezpieczna - jeśli klucz nie istnieje, zwraca podaną wartość domyślną zamiast wyrzucać błąd!

---

## 📚 Słowniki w Słownikach - Zagnieżdżanie!

Słowniki mogą zawierać inne słowniki! To pozwala tworzyć skomplikowane struktury danych.

```python
# Drużyna bohaterów
druzyna = {
    "wojownik": {
        "imie": "Ragnar",
        "hp": 150,
        "bron": "Topór"
    },
    "mag": {
        "imie": "Merlin",
        "hp": 80,
        "bron": "Różdżka"
    },
    "łucznik": {
        "imie": "Legolas",
        "hp": 100,
        "bron": "Łuk"
    }
}

# Dostęp do zagnieżdżonych danych
print(druzyna["mag"]["imie"])  # Wypisze: Merlin
print(druzyna["wojownik"]["hp"])  # Wypisze: 150
```

---

## 📋 Lista Słowników - Baza Danych!

Często przechowujemy wiele podobnych obiektów jako listę słowników. To jak kartoteka z kartami!

```python
# Lista potworów w grze
potwory = [
    {"nazwa": "Goblin", "hp": 30, "atak": 5},
    {"nazwa": "Ork", "hp": 80, "atak": 15},
    {"nazwa": "Smok", "hp": 500, "atak": 50}
]

# Przeglądanie listy
print("🐉 BESTIARIUSZ:")
for potwor in potwory:
    print(f"  {potwor['nazwa']} - HP: {potwor['hp']}, Atak: {potwor['atak']}")

# Dodawanie nowego potwora do listy
nowy_potwor = {"nazwa": "Troll", "hp": 200, "atak": 25}
potwory.append(nowy_potwor)

print(f"\n✅ Dodano: {nowy_potwor['nazwa']}")
print(f"📊 Teraz mamy {len(potwory)} potworów!")
```

---

## �🛡️ PROJEKT: Mój Super Bohater! 🦸‍♂️

Zrobimy program, który zapyta Cię o Twojego bohatera, zapisze go do pliku, a potem odczyta! Bez skomplikowanych pętli - prosto i skutecznie.

Stwórz plik `moj_bohater.py`:

```python
# 🦸‍♂️ MÓJ SUPER BOHATER
# Autor: [Twoje Imię]

import json

# 1. Pytamy o dane bohatera
print("--- KREATOR BOHATERA ---")
imie = input("Podaj imię bohatera: ")
moc = input("Jaka jest Twoja super moc? ")

# 2. Tworzymy słownik (paczkę z danymi)
bohater = {
    "imie": imie,
    "moc": moc,
    "poziom": 1,
    "zycia": 100
}

print("\n✅ Stworzono bohatera:")
print(bohater)

# 3. Zapisujemy do pliku JSON
print("\n💾 Zapisuję do pliku 'bohater.json'...")

with open("bohater.json", "w", encoding="utf-8") as plik:
    json.dump(bohater, plik)

print("Udało się zapisać!")

# 4. Odczytujemy z pliku (żeby sprawdzić czy działa)
print("\n📂 Teraz wczytuję dane z pliku...")

with open("bohater.json", "r", encoding="utf-8") as plik:
    wczytany_bohater = json.load(plik)

# Wyświetlamy ładnie dane
print("Oto Twój bohater z pliku:")
print(f"👤 Imię: {wczytany_bohater['imie']}")
print(f"⚡ Moc: {wczytany_bohater['moc']}")
print(f"❤️ Życia: {wczytany_bohater['zycia']}")
```

### Co tu się stało?

1.  Stworzyliśmy słownik `bohater`.
2.  Użyliśmy `json.dump`, żeby wrzucić go do pliku.
3.  Użyliśmy `json.load`, żeby wyciągnąć go z pliku.

To takie proste! 🎉

### 🕵️‍♀️ Zbadaj plik JSON!

Po uruchomieniu programu i zapisaniu postaci, wejdź do folderu i otwórz plik `bohater.json` w notatniku. Zobaczysz, że jest to czytelny tekst! Możesz go nawet edytować ręcznie (np. dodać sobie milion złota 😎) i program to wczyta!

---

## 🎮 PROJEKT BONUSOWY: Wybierz Swoją Klasę!

Rozbudujmy naszego bohatera o wybór klasy! Każda klasa ma inne statystyki.

Stwórz plik `wybierz_klase.py`:

```python
# 🎮 WYBIERZ SWOJĄ KLASĘ!
# Autor: [Twoje Imię]

import json

print("=" * 40)
print("   ⚔️ KREATOR BOHATERA RPG ⚔️")
print("=" * 40)

# 1. Pytamy o imię
imie = input("\n� Jak ma na imię Twój bohater? ")

# 2. Pokazujemy dostępne klasy
print("\n🎭 WYBIERZ KLASĘ:")
print("1. ⚔️ Wojownik - dużo HP, silny w walce")
print("2. 🧙 Mag - dużo many, potężne zaklęcia")
print("3. 🏹 Łucznik - szybki i zwinny")

# 3. Gracz wybiera klasę
wybor = input("\nWpisz numer klasy (1, 2 lub 3): ")

# 4. Ustawiamy statystyki zależnie od wyboru
if wybor == "1":
    klasa = "Wojownik"
    hp = 150
    mana = 30
    bron = "Miecz"
elif wybor == "2":
    klasa = "Mag"
    hp = 80
    mana = 150
    bron = "Różdżka"
elif wybor == "3":
    klasa = "Łucznik"
    hp = 100
    mana = 60
    bron = "Łuk"
else:
    print("❌ Nieznana klasa! Wybieram Wojownika.")
    klasa = "Wojownik"
    hp = 150
    mana = 30
    bron = "Miecz"

# 5. Tworzymy słownik z postacią
postac = {
    "imie": imie,
    "klasa": klasa,
    "hp": hp,
    "mana": mana,
    "bron": bron,
    "poziom": 1,
    "zloto": 50
}

# 6. Pokazujemy bohatera
print("\n" + "=" * 40)
print("   ✨ TWÓJ BOHATER ✨")
print("=" * 40)
print(f"👤 Imię: {postac['imie']}")
print(f"🎭 Klasa: {postac['klasa']}")
print(f"❤️ HP: {postac['hp']}")
print(f"� Mana: {postac['mana']}")
print(f"🗡️ Broń: {postac['bron']}")
print(f"⭐ Poziom: {postac['poziom']}")
print(f"💰 Złoto: {postac['zloto']}")

# 7. Zapisujemy do pliku
with open("moja_postac.json", "w", encoding="utf-8") as plik:
    json.dump(postac, plik, indent=4, ensure_ascii=False)

print("\n💾 Postać zapisana do pliku 'moja_postac.json'!")
print("🎉 Możesz teraz otworzyć plik i zobaczyć swoje dane!")
```

### 💡 Co tu się dzieje?

1. **Pytamy o imię** - używamy `input()`
2. **Pokazujemy klasy** - proste `print()` z emoji
3. **Gracz wybiera** - wpisuje 1, 2 lub 3
4. **if-elif-else** - ustawiamy różne statystyki dla każdej klasy
5. **Tworzymy słownik** - pakujemy wszystko razem
6. **Wyświetlamy** - ładnie pokazujemy postać
7. **Zapisujemy** - używamy `json.dump()` z `indent=4` żeby było czytelne

### 🔍 Otwórz plik JSON!

Po uruchomieniu programu znajdź plik `moja_postac.json` i otwórz go w notatniku. Zobaczysz coś takiego:

```json
{
  "imie": "Artur",
  "klasa": "Wojownik",
  "hp": 150,
  "mana": 30,
  "bron": "Miecz",
  "poziom": 1,
  "zloto": 50
}
```

**Pro tip:** Możesz edytować ten plik ręcznie! Zmień `"zloto": 50` na `"zloto": 9999` i masz fortunę! 😎

---

## 🧠 Podsumowanie

| Koncept          | Opis                             | Przykład                     |
| ---------------- | -------------------------------- | ---------------------------- |
| **Słownik `{}`** | Zbiór danych Klucz:Wartość       | `{"imie": "Max", "hp": 100}` |
| **Klucz**        | Nazwa, po której szukamy         | `"imie"`                     |
| **Wartość**      | Dane przypisane do klucza        | `"Max"`                      |
| **`.get()`**     | Bezpieczne pobieranie wartości   | `slownik.get("klucz", 0)`    |
| **`.items()`**   | Pary klucz-wartość do pętli      | `for k, v in d.items():`     |
| **JSON**         | Format zapisu słowników do pliku | `postac.json`                |
| `json.dump()`    | Zapisuje do pliku                | `dump(dane, plik)`           |
| `json.load()`    | Wczytuje z pliku                 | `dane = load(plik)`          |
| `indent=4`       | Ładne formatowanie JSON          | `dump(dane, plik, indent=4)` |

Słowniki i JSON to potężne narzędzia. Dzięki nim możesz zapisywać całe światy gier, konfiguracje, bazy użytkowników i wiele więcej!

---

## 🎓 Częste Błędy i Jak Ich Unikać

### ❌ Błąd 1: KeyError - klucz nie istnieje

```python
bohater = {"imie": "Max"}
print(bohater["hp"])  # ❌ KeyError!

# ✅ Rozwiązanie: użyj .get()
print(bohater.get("hp", 100))  # Zwróci 100
```

### ❌ Błąd 2: Zapomnienie o cudzysłowach przy kluczach

```python
# ❌ Źle - Python myśli że 'imie' to zmienna
bohater = {imie: "Max"}

# ✅ Dobrze - klucze muszą być w cudzysłowach
bohater = {"imie": "Max"}
```

### ❌ Błąd 3: Mieszanie ' i " przy f-stringach

```python
# ❌ Źle - konflikt cudzysłowów
print(f"Imię: {bohater["imie"]}")

# ✅ Dobrze - użyj innych cudzysłowów w środku
print(f"Imię: {bohater['imie']}")
```

### ❌ Błąd 4: Zapomnienie o import json

```python
# ❌ Źle - NameError: name 'json' is not defined
with open("plik.json", "w") as f:
    json.dump(dane, f)

# ✅ Dobrze - dodaj import na początku pliku
import json
```

---

## 📝 Zadanie domowe

Wybierz jedno lub więcej wyzwań:

### 🟢 Łatwe: Moja Wizytówka

Stwórz program, który:

- Pyta o Twoje imię, wiek i ulubiony kolor
- Zapisuje te dane do pliku `wizytowka.json`
- Wyświetla komunikat "Zapisano!"

```python
# Podpowiedź - tak może wyglądać słownik:
wizytowka = {
    "imie": "Ania",
    "wiek": 12,
    "kolor": "niebieski"
}
```

### 🟡 Średnie: Książka Telefoniczna

Stwórz słownik z numerami telefonów znajomych:

```python
telefony = {
    "Mama": "123-456-789",
    "Tata": "987-654-321",
    "Kumpel": "555-555-555"
}
```

- Program pyta: "Czyj numer chcesz znaleźć?"
- Jeśli osoba jest w słowniku - wypisuje numer
- Jeśli nie ma - pisze "Nie znam tej osoby"
- Zapisz słownik do pliku JSON

### 🔴 Trudne: Sklepik Szkolny

Stwórz słownik z cennikiem:

```python
cennik = {
    "bulka": 2.50,
    "sok": 3.00,
    "batonik": 2.00
}
```

- Program pyta "Co chcesz kupić?"
- Jeśli produkt jest w słowniku - dodaje cenę do sumy
- Na koniec wyświetla ile trzeba zapłacić
- **Bonus:** Zapisz paragon do pliku JSON!

### 🟣 Super Wyzwanie: Rozbuduj Bohatera!

Weź projekt "Wybierz Swoją Klasę" i dodaj:

- Ekwipunek (lista przedmiotów w słowniku)
- Możliwość wczytania postaci z pliku przy starcie
- Więcej klas do wyboru (np. Paladyn, Ninja)

---

## 🚀 Co dalej?

W tej lekcji nauczyłeś się:

- ✅ Tworzyć i używać słowników
- ✅ Przeglądać słowniki pętlami
- ✅ Zagnieżdżać słowniki i listy
- ✅ Zapisywać i wczytywać dane z JSON

To są umiejętności, których używają profesjonalni programiści każdego dnia! W następnych lekcjach będziemy budować coraz bardziej zaawansowane projekty.

**Gratulacje! 🎉 Ukończyłeś Lekcję 8!**

---

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**
