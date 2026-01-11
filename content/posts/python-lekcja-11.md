+++
title = 'Python Podstawowy - Lekcja 11: Bug Hunt - Szukamy Błędów! 🔍🐛'
date = 2026-01-18T10:00:00+01:00
draft = false
url = '/python-course/lekcja-11/'
description = 'Jedenasta lekcja z serii Python Podstawowy. Wcielamy się w detektywów i szukamy błędów w kodzie!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'debugging', 'błędy', 'bug-hunt', 'programowanie', 'podstawy']
series = ['Python Podstawowy']
+++

# 🔍 Lekcja 11: Bug Hunt - Szukamy Błędów! 🐛

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Witaj, młody detektywie kodu! 🕵️ Dzisiaj czeka Cię wyjątkowa misja - będziesz szukać **bugów** (błędów) ukrytych w programach!

Każdy programista - nawet najlepszy na świecie - popełnia błędy. Umiejętność **znajdowania i naprawiania błędów** (nazywamy to **debugowaniem**) to jedna z najważniejszych umiejętności programisty!

<!--more-->

---

## 🐛 Co to jest "Bug"?

Słowo **bug** (czyt. "bag") to po angielsku "robak" lub "pluskwa". W programowaniu oznacza **błąd w kodzie**.

Skąd ta nazwa? Legenda mówi, że w 1947 roku prawdziwa ćma (moth) wleciała do komputera i spowodowała awarię! Od tamtej pory błędy w programach nazywamy "bugami" 🐛

### Rodzaje błędów:

| Typ błędu         | Opis                             | Przykład               |
| ----------------- | -------------------------------- | ---------------------- |
| 🔴 **Składniowy** | Python nie rozumie kodu          | Brak dwukropka po `if` |
| 🟡 **Wykonania**  | Kod się wywala podczas działania | Dzielenie przez zero   |
| 🟠 **Logiczny**   | Kod działa, ale daje ZŁY wynik   | `+` zamiast `-`        |

---

## 📋 Co dziś powtórzymy?

Szukając błędów, powtórzysz:

| Koncept             | Co sprawdzamy?                        |
| ------------------- | ------------------------------------- |
| `print()`           | Czy nawiasy i cudzysłowy są poprawne? |
| Zmienne             | Czy nazwa jest taka sama wszędzie?    |
| `if/elif/else`      | Czy są dwukropki? Wcięcia?            |
| Pętle `for/while`   | Czy `range()` ma dobre wartości?      |
| Funkcje `def`       | Czy są nawiasy i dwukropek?           |
| Listy               | Czy indeksy są poprawne? (od 0!)      |
| `input()` i `int()` | Czy konwertujemy tekst na liczbę?     |

---

## 🎯 Zasady Bug Hunt

1. 📖 Przeczytaj uważnie kod
2. 🔍 Znajdź WSZYSTKIE błędy (może być więcej niż jeden!)
3. ✍️ Zapisz, co jest źle i jak to naprawić
4. 💻 Przepisz poprawiony kod i uruchom
5. 🏆 Zdobywaj punkty za znalezione bugi!

**System punktów:**

- 🔴 Błąd składniowy: **1 punkt**
- 🟡 Błąd wykonania: **2 punkty**
- 🟠 Błąd logiczny: **3 punkty** (najtrudniejsze!)

---

## 👥 Praca w parach

Bug Hunt jest świetny do pracy w parach!

**Sposób 1: Razem szukacie**

- Czytacie kod razem
- Dyskutujecie, co jest źle
- Wspólnie naprawiacie

**Sposób 2: Rywalizacja**

- Każdy szuka osobno
- Porównujecie, kto znalazł więcej
- Razem weryfikujecie odpowiedzi

---

## 🐛 Bug #1: Powitanie (Łatwy)

**Opis:** Program ma powitać użytkownika po imieniu.

```python
# Bug #1 - Powitanie
imie = input("Jak masz na imię? )
print("Cześć, " + imie + "!")
print("Miło Cię poznać!)
```

**Ile błędów widzisz?** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 2 błędy składniowe:**

1. ❌ Linia 2: Brak zamykającego cudzysłowu przed `)`

   - Było: `input("Jak masz na imię? )`
   - Powinno być: `input("Jak masz na imię? ")`

2. ❌ Linia 4: Brak zamykającego cudzysłowu przed `)`
   - Było: `print("Miło Cię poznać!)`
   - Powinno być: `print("Miło Cię poznać!")`

**Poprawiony kod:**

```python
imie = input("Jak masz na imię? ")
print("Cześć, " + imie + "!")
print("Miło Cię poznać!")
```

**Punkty: 2** (2 błędy × 1 punkt)

</details>

---

## 🐛 Bug #2: Kalkulator wieku (Łatwy)

**Opis:** Program oblicza, ile lat będziesz mieć za 10 lat.

```python
# Bug #2 - Kalkulator wieku
wiek = input("Ile masz lat? ")
za_10_lat = wiek + 10
print("Za 10 lat będziesz mieć" za_10_lat, "lat!")
```

**Ile błędów widzisz?** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 2 błędy:**

1. 🟡 Linia 3: Brak `int()` - próbujemy dodać liczbę do tekstu!

   - `input()` zwraca tekst, nie liczbę
   - Było: `wiek + 10`
   - Powinno być: `int(wiek) + 10`

2. 🔴 Linia 4: Brak przecinka po pierwszym napisie
   - Było: `print("Za 10 lat będziesz mieć" za_10_lat`
   - Powinno być: `print("Za 10 lat będziesz mieć", za_10_lat`

**Poprawiony kod:**

```python
wiek = input("Ile masz lat? ")
za_10_lat = int(wiek) + 10
print("Za 10 lat będziesz mieć", za_10_lat, "lat!")
```

**Punkty: 3** (1 błąd skł. + 1 błąd wyk.)

</details>

---

## 🐛 Bug #3: Sprawdzanie hasła (Średni)

**Opis:** Program sprawdza, czy użytkownik wpisał poprawne hasło.

```python
# Bug #3 - Sprawdzanie hasła
tajne_haslo = "python123"

haslo = input("Podaj hasło: ")

if haslo = tajne_haslo:
    print("Dostęp przyznany!")
else
    print("Błędne hasło!")
```

**Ile błędów widzisz?** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 2 błędy składniowe:**

1. 🔴 Linia 6: Użyto `=` (przypisanie) zamiast `==` (porównanie)

   - Było: `if haslo = tajne_haslo:`
   - Powinno być: `if haslo == tajne_haslo:`

2. 🔴 Linia 8: Brak dwukropka po `else`
   - Było: `else`
   - Powinno być: `else:`

**Poprawiony kod:**

```python
tajne_haslo = "python123"

haslo = input("Podaj hasło: ")

if haslo == tajne_haslo:
    print("Dostęp przyznany!")
else:
    print("Błędne hasło!")
```

**Punkty: 2** (2 błędy × 1 punkt)

</details>

---

## 🐛 Bug #4: Pętla odliczania (Średni)

**Opis:** Program ma odliczać od 10 do 1 i powiedzieć "Start!".

```python
# Bug #4 - Odliczanie
print("Odliczanie do startu rakiety!")

for i in range(10, 0)
    print(i)

print("START! 🚀")
```

**Co jest źle?** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 2 błędy:**

1. 🔴 Linia 4: Brak dwukropka po `range(10, 0)`

   - Było: `for i in range(10, 0)`
   - Powinno być: `for i in range(10, 0, -1):`

2. 🟠 Linia 4: Brak trzeciego argumentu `-1` w `range()`
   - `range(10, 0)` nie zadziała, bo domyślnie idzie w górę!
   - Potrzebujemy `range(10, 0, -1)` żeby iść w dół

**Poprawiony kod:**

```python
print("Odliczanie do startu rakiety!")

for i in range(10, 0, -1):
    print(i)

print("START! 🚀")
```

**Punkty: 4** (1 skł. + 1 logiczny)

</details>

---

## 🐛 Bug #5: Lista zakupów (Średni)

**Opis:** Program wyświetla listę zakupów z numerami.

```python
# Bug #5 - Lista zakupów
zakupy = ["mleko", "chleb", "masło", "jajka"]

print("Moja lista zakupów:")
for i in range(1, 4):
    print(f"{i}. {zakupy[i]}")
```

**Uruchom w głowie - co się stanie?** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 2 błędy logiczne:**

1. 🟠 `range(1, 4)` pomija pierwszy element!

   - `range(1, 4)` daje: 1, 2, 3
   - Ale lista ma 4 elementy (indeksy 0, 1, 2, 3)
   - Pomijamy `zakupy[0]` czyli "mleko"!

2. 🟠 `zakupy[i]` z `i = 1, 2, 3` pomija pierwszy element
   - Lista zaczyna się od indeksu 0!
   - `zakupy[1]` to "chleb", nie "mleko"

**Poprawiony kod:**

```python
zakupy = ["mleko", "chleb", "masło", "jajka"]

print("Moja lista zakupów:")
for i in range(4):  # 0, 1, 2, 3
    print(f"{i + 1}. {zakupy[i]}")
```

**Lub jeszcze lepiej z `enumerate`:**

```python
zakupy = ["mleko", "chleb", "masło", "jajka"]

print("Moja lista zakupów:")
for i, produkt in enumerate(zakupy, 1):
    print(f"{i}. {produkt}")
```

**Punkty: 6** (2 błędy logiczne × 3 punkty)

</details>

---

## 🐛 Bug #6: Funkcja powitania (Średni)

**Opis:** Funkcja ma powitać osobę i powiedzieć, ile ma lat.

```python
# Bug #6 - Funkcja powitania
def powitaj(imie, wiek)
    print(f"Cześć, {imie}!")
    print(f"Masz {Wiek} lat.")

powitaj("Ania", 12)
powitaj("Tomek" 14)
```

**Ile błędów znajdziesz?** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 3 błędy:**

1. 🔴 Linia 2: Brak dwukropka po nawiasie

   - Było: `def powitaj(imie, wiek)`
   - Powinno być: `def powitaj(imie, wiek):`

2. 🔴 Linia 4: Błąd w nazwie zmiennej (wielka litera)

   - Było: `{Wiek}` (z wielkiej)
   - Powinno być: `{wiek}` (z małej)
   - Python rozróżnia wielkie i małe litery!

3. 🔴 Linia 7: Brak przecinka między argumentami
   - Było: `powitaj("Tomek" 14)`
   - Powinno być: `powitaj("Tomek", 14)`

**Poprawiony kod:**

```python
def powitaj(imie, wiek):
    print(f"Cześć, {imie}!")
    print(f"Masz {wiek} lat.")

powitaj("Ania", 12)
powitaj("Tomek", 14)
```

**Punkty: 3** (3 błędy składniowe × 1 punkt)

</details>

---

## 🐛 Bug #7: Gra zgadywanka (Trudny)

**Opis:** Prosta gra - zgadnij liczbę od 1 do 10.

```python
# Bug #7 - Zgadywanka
import Random

sekret = random.randint(1, 10)
proby = 3

print("Zgadnij liczbę od 1 do 10!")
print(f"Masz {proby} próby.")

while proby > 0
    strzal = input("Twój strzał: ")

    if strzal == sekret:
        print("BRAWO! Zgadłeś!")
        break
    elif strzal < sekret:
        print("Za mało!")
    else:
        print("Za dużo!")

    proby = proby - 1

if proby == 0:
    print(f"Przegrałeś! Liczba to {sekret}")
```

**To najtrudniejszy bug! Ile błędów znajdziesz?** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 4 błędy:**

1. 🔴 Linia 2: Błędna wielkość liter w `import`

   - Było: `import Random`
   - Powinno być: `import random` (małe litery!)

2. 🔴 Linia 10: Brak dwukropka po `while`

   - Było: `while proby > 0`
   - Powinno być: `while proby > 0:`

3. 🟡 Linia 13: Porównujemy tekst z liczbą!

   - `input()` zwraca tekst
   - `sekret` to liczba
   - `"5" == 5` jest zawsze `False`!
   - Potrzebujemy: `int(strzal) == sekret`

4. 🟡 Linia 15-17: Porównujemy tekst z liczbą
   - `strzal < sekret` nie zadziała poprawnie
   - Trzeba: `int(strzal) < sekret`

**Poprawiony kod:**

```python
import random

sekret = random.randint(1, 10)
proby = 3

print("Zgadnij liczbę od 1 do 10!")
print(f"Masz {proby} próby.")

while proby > 0:
    strzal = input("Twój strzał: ")
    strzal = int(strzal)  # Konwertujemy na liczbę!

    if strzal == sekret:
        print("BRAWO! Zgadłeś!")
        break
    elif strzal < sekret:
        print("Za mało!")
    else:
        print("Za dużo!")

    proby = proby - 1

if proby == 0:
    print(f"Przegrałeś! Liczba to {sekret}")
```

**Punkty: 6** (2 skł. × 1 + 2 wyk. × 2)

</details>

---

## 🐛 Bug #8: Kalkulator BMI (Trudny)

**Opis:** Program oblicza wskaźnik BMI (waga / wzrost²).

```python
# Bug #8 - Kalkulator BMI
print("=== KALKULATOR BMI ===')

waga = input("Podaj wagę w kg: ")
wzrost = input("Podaj wzrost w metrach (np. 1.65): ")

bmi = waga / (wzrost * wzrost)
bmi = round(bmi 2)

print(f"Twoje BMI: {bmi}")

if bmi < 18.5
    print("Niedowaga")
elif bmi < 25:
    print("Waga prawidłowa")
elif bmi < 30:
    print("Nadwaga")
else:
    Print("Otyłość")
```

**Najtrudniejszy poziom! Znajdź wszystkie błędy!** 🔍

<details>
<summary>🔎 Kliknij, aby zobaczyć odpowiedź</summary>

**Znaleziono 6 błędów:**

1. 🔴 Linia 2: Różne cudzysłowy (zaczyna `"`, kończy `'`)

   - Było: `print("=== KALKULATOR BMI ===')`
   - Powinno być: `print("=== KALKULATOR BMI ===")`

2. 🟡 Linia 7: `waga` i `wzrost` to tekst, nie liczby!

   - Trzeba użyć `float()` do konwersji
   - `float(waga)` i `float(wzrost)`

3. 🔴 Linia 8: Brak przecinka w `round()`

   - Było: `round(bmi 2)`
   - Powinno być: `round(bmi, 2)`

4. 🔴 Linia 12: Brak dwukropka po `if`

   - Było: `if bmi < 18.5`
   - Powinno być: `if bmi < 18.5:`

5. 🔴 Linia 19: `Print` z wielkiej litery
   - Było: `Print("Otyłość")`
   - Powinno być: `print("Otyłość")`

**Poprawiony kod:**

```python
print("=== KALKULATOR BMI ===")

waga = input("Podaj wagę w kg: ")
wzrost = input("Podaj wzrost w metrach (np. 1.65): ")

waga = float(waga)
wzrost = float(wzrost)

bmi = waga / (wzrost * wzrost)
bmi = round(bmi, 2)

print(f"Twoje BMI: {bmi}")

if bmi < 18.5:
    print("Niedowaga")
elif bmi < 25:
    print("Waga prawidłowa")
elif bmi < 30:
    print("Nadwaga")
else:
    print("Otyłość")
```

**Punkty: 7** (4 skł. × 1 + 1 wyk. × 2 + bonus za trudność)

</details>

---

## 🏆 Podsumowanie punktów

Policz swoje punkty ze wszystkich bugów!

| Bugi znalezione | Twoja ocena                                    |
| --------------- | ---------------------------------------------- |
| 25+ punktów     | 🏆 **MISTRZ DEBUGOWANIA!**                     |
| 20-24 punkty    | 🌟 **Świetny detektyw!**                       |
| 15-19 punktów   | 👍 **Dobra robota!**                           |
| 10-14 punktów   | 💪 **Całkiem nieźle!**                         |
| Poniżej 10      | 📚 **Powtórz podstawy i spróbuj jeszcze raz!** |

---

## 🧠 Wskazówki debugowania

Oto najczęstsze błędy, na które warto uważać:

### 🔴 Błędy składniowe (łatwe do znalezienia)

- Brak `:` po `if`, `else`, `elif`, `for`, `while`, `def`
- Brak nawiasów zamykających `()` lub cudzysłowów `""`
- Złe wcięcia (spacje vs tabulatory)
- Literówki w słowach kluczowych (`pritn` zamiast `print`)

### 🟡 Błędy wykonania (średnie)

- `input()` zwraca tekst - pamiętaj o `int()` lub `float()`!
- Dzielenie przez zero
- Odwołanie do nieistniejącego indeksu listy
- Użycie niezdefiniowanej zmiennej

### 🟠 Błędy logiczne (najtrudniejsze)

- `=` (przypisanie) zamiast `==` (porównanie)
- Zły zakres w `range()`
- Indeksy listy od 0, nie od 1!
- Warunki odwrócone (`<` zamiast `>`)

---

## ✅ Co powtórzyliśmy?

| Koncept   | Typowe błędy                     |
| --------- | -------------------------------- |
| `print()` | Brak nawiasów, cudzysłowów       |
| Zmienne   | Literówki, wielkie/małe litery   |
| `input()` | Brak konwersji `int()`/`float()` |
| `if/else` | Brak `:`, `=` zamiast `==`       |
| Pętle     | Brak `:`, zły `range()`          |
| Funkcje   | Brak `:`, błędne parametry       |
| Listy     | Indeksy od 0, zły zakres         |

---

## 📝 Zadanie domowe

1. **Stwórz własnego buga!** Napisz krótki program z 2-3 ukrytymi błędami i daj koledze do rozwiązania! 🐛

2. **Napraw swój stary kod** - wróć do programów z poprzednich lekcji i sprawdź, czy nie ma w nich błędów.

---

## 🔮 Co dalej?

W następnej lekcji zaczniemy budować **Cyfrową Książkę Kontaktów** - prawdziwy projekt używający słowników i plików JSON! 📒

**[→ Przejdź do Lekcji 12: Książka Kontaktów cz.1](/python-course/lekcja-12/)**

---

_Znalazłeś dodatkowego buga w tej lekcji? Napisz w komentarzu!_ 🐛💬
