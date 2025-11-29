+++
title = 'Python Podstawowy - Lekcja 5 PLUS: Wielka Przygoda Powtórkowa! 🎮🚀'
date = 2025-11-29T10:00:00+01:00
draft = false
url = '/python-course/lekcja-5-plus/'
description = 'Lekcja powtórzeniowa z całego kursu - gry, wyzwania i projekty! Utrwal wiedzę z poprzednich lekcji w super zabawny sposób!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'podstawy', 'programowanie', 'nauka', 'powtórka', 'gra', 'projekt', 'fun']
series = ['Python Podstawowy']
+++

# 🎮 Lekcja 5 PLUS: Wielka Przygoda Powtórkowa! 🚀

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Witajcie młodzi programiści! 👋 Dziś będziemy mieć wyjątkową lekcję - **WIELKĄ PRZYGODĘ POWTÓRKOWĄ**! Zamiast nudnej teorii stworzymy razem **3 ekscytujące projekty**, które wykorzystają WSZYSTKO, czego nauczyliście się do tej pory! 🎉

<!--more-->

## 🎯 Plan na dzisiejszą przygodę (90 minut)

Dzisiejsza lekcja to nie teoria, a **100% PRAKTYKA**! Będziemy kodować 3 super projekty:

1. **🎲 MEGA QUIZ PRZYGODOWY** (25 min) - Interaktywny quiz z systemem punktów
2. **🏪 SKLEP WIRTUALNY** (30 min) - Prawdziwy sklep online z koszem zakupów
3. **🎯 GRA: ŁOWCA SKARBÓW** (30 min) - Pełna gra w stylu RPG z Pygame Zero
4. **🌟 BONUS: Twój własny projekt!** (5 min) - Pomysły na dalsze rozwijanie

---

## 🔥 ROZGRZEWKA: Super Szybki Quiz! (5 minut)

Zanim zaczniemy kodować, sprawdźmy, co pamiętasz! **NIE OTWIERAJ** jeszcze Thonny - to quiz ustny!

### Pytania Błyskawiczne:

1. **Co robi `print()`?**
   <details><summary>Odpowiedź</summary>Wyświetla tekst na ekranie</details>

2. **Co zwraca `input()`?**
   <details><summary>Odpowiedź</summary>Zawsze tekst (string), nawet jeśli wpiszesz liczbę!</details>

3. **Jak zamienić tekst na liczbę?**
   <details><summary>Odpowiedź</summary>Używamy `int()` lub `float()`</details>

4. **Od czego zaczyna się numeracja w liście?**
   <details><summary>Odpowiedź</summary>Od 0! (pierwszy element to indeks 0)</details>

5. **Co to jest pętla `for`?**
   <details><summary>Odpowiedź</summary>Powtarza kod określoną liczbę razy</details>

6. **Jak dodać element do listy?**
   <details><summary>Odpowiedź</summary>Używamy `.append(element)`</details>

**Gotowi? To zaczynamy kodować!** 💪

---

## 🎲 PROJEKT 1: MEGA QUIZ PRZYGODOWY (25 minut)

Stworzymy super quiz, który:

- ✅ Ma ciekawe pytania o programowaniu
- ✅ Liczy punkty
- ✅ Daje feedback po każdej odpowiedzi
- ✅ Pokazuje wynik końcowy z komentarzem

### 📝 Krok 1: Podstawowa struktura (5 min)

Otwórz Thonny i stwórz nowy plik `mega_quiz.py`:

```python
# MEGA QUIZ PRZYGODOWY
# Autor: [Twoje Imię]

print("🎮" * 30)
print("✨  MEGA QUIZ PRZYGODOWY  ✨")
print("🎮" * 30)
print()

# Przedstawienie
print("Witaj w quizie wiedzy o Pythonie!")
print("Odpowiedz na pytania i zdobądź punkty! 🏆")
print()

imie = input("👤 Jak masz na imię, przygodo? ")
print(f"\nCześć {imie}! Zaczynamy przygodę! 🚀\n")

# Zmienna do liczenia punktów
punkty = 0

print("=" * 50)
```

**💡 Co tu się dzieje?**

- Tworzymy ładne intro z ramkami
- Pytamy o imię (personalizacja!)
- Ustawiamy `punkty = 0` (będziemy je zwiększać)

### 📝 Krok 2: Dodajemy pytania (10 min)

Teraz dodajemy pytania z różnymi poziomami trudności:

```python
# === PYTANIE 1: Łatwe ===
print("🟢 PYTANIE 1 (Łatwe)")
print("Co wypisze: print('Python' + 'Rocks')?")
print("A) Python Rocks")
print("B) PythonRocks")
print("C) Błąd")

odpowiedz1 = input("\nTwoja odpowiedź (A/B/C): ").upper()

if odpowiedz1 == "B":
    print("✅ BRAWO! Python łączy teksty bez spacji!")
    punkty = punkty + 1
else:
    print("❌ Niestety! Poprawna odpowiedź to B")
    print("   Gdy dodajesz teksty +, łączą się bez spacji!")

print(f"💰 Masz teraz {punkty} punktów!\n")
print("=" * 50)

# === PYTANIE 2: Średnie ===
print("🟡 PYTANIE 2 (Średnie)")
print("Co zwróci: len([1, 2, 3, 4, 5])?")
print("A) 1")
print("B) 5")
print("C) 15")

odpowiedz2 = input("\nTwoja odpowiedź (A/B/C): ").upper()

if odpowiedz2 == "B":
    print("✅ SUPER! len() liczy elementy w liście!")
    punkty = punkty + 1
else:
    print("❌ Nie tym razem! To B")
    print("   len() zwraca liczbę elementów - tu jest ich 5")

print(f"💰 Masz teraz {punkty} punktów!\n")
print("=" * 50)

# === PYTANIE 3: Trudne ===
print("🔴 PYTANIE 3 (Trudne)")
print("Jaki będzie wynik: 10 % 3?")
print("A) 3")
print("B) 1")
print("C) 0")

odpowiedz3 = input("\nTwoja odpowiedź (A/B/C): ").upper()

if odpowiedz3 == "B":
    print("✅ NIESAMOWITE! Operator % zwraca resztę z dzielenia!")
    punkty = punkty + 2  # Trudne pytanie = więcej punktów!
else:
    print("❌ Pudło! Poprawna to B")
    print("   10 ÷ 3 = 3 reszty 1, więc 10 % 3 = 1")

print(f"💰 Masz teraz {punkty} punktów!\n")
print("=" * 50)
```

### 📝 Krok 3: Podsumowanie i ocena (5 min)

Na końcu dodajemy podsumowanie z komentarzem:

```python
# === PODSUMOWANIE ===
print("\n" + "🌟" * 30)
print("✨  KONIEC QUIZU!  ✨")
print("🌟" * 30)

print(f"\n🎯 {imie}, zdobyłeś/aś {punkty} punktów na 4 możliwe!\n")

# Ocena w zależności od wyniku
if punkty == 4:
    print("🏆 PERFEKCJA! Jesteś mistrzem Pythona!")
    print("   Zasługujesz na złoty medal! 🥇")
elif punkty >= 2:
    print("😊 ŚWIETNIE! Masz dobrą wiedzę!")
    print("   Jeszcze chwila i będziesz ekspertem! 🚀")
elif punkty >= 1:
    print("👍 NIEŹLE! Jest postęp!")
    print("   Przećwicz jeszcze trochę i będzie super! 💪")
else:
    print("😅 POTRZEBUJESZ WIĘCEJ PRAKTYKI!")
    print("   Nie poddawaj się - każdy kiedyś zaczynał! 🌱")

print("\n" + "🌟" * 30)
print("Dziękuję za grę! Do zobaczenia! 👋")
```

### 🎯 ZADANIE: Dodaj swoje pytanie!

Teraz **TY** dodaj jeszcze jedno pytanie do quizu! Może być o:

- Pętlach `for` lub `while`
- Funkcji `input()`
- Listach
- Instrukcjach `if/else`

**💡 Wzór pytania:**

```python
# === PYTANIE 4: Twoje pytanie! ===
print("🔵 PYTANIE 4 (Twoje!)")
print("[Twoje pytanie]?")
print("A) [Odpowiedź A]")
print("B) [Odpowiedź B]")
print("C) [Odpowiedź C]")

odpowiedz4 = input("\nTwoja odpowiedź (A/B/C): ").upper()

if odpowiedz4 == "[POPRAWNA LITERA]":
    print("✅ BRAWO!")
    punkty = punkty + 1
else:
    print("❌ [Wyjaśnienie poprawnej odpowiedzi]")

print(f"💰 Masz teraz {punkty} punktów!\n")
```

---

## 🏪 PROJEKT 2: SKLEP WIRTUALNY (30 minut)

Teraz stworzymy prawdziwy sklep online z:

- 📦 Listą produktów i cenami
- 🛒 Koszykiem zakupów
- 💰 Systemem płatności
- 🧾 Paragonem

### 📝 Krok 1: Baza produktów (10 min)

Stwórz nowy plik `sklep_wirtualny.py`:

```python
# 🏪 SKLEP WIRTUALNY
# Autor: [Twoje Imię]

print("🏪" * 30)
print("✨  SKLEP WIRTUALNY GameShop  ✨")
print("🏪" * 30)
print()

# Nasza baza produktów (listy!)
produkty = ["Minecraft", "Roblox", "Among Us", "Fortnite", "FIFA"]
ceny = [89.99, 0.00, 19.99, 0.00, 199.99]

# Koszyk zakupów (pusta lista)
koszyk = []
koszyk_ceny = []

# Przywitanie
imie = input("👤 Witaj w GameShop! Jak masz na imię? ")
budzet = input("💰 Ile pieniędzy masz do wydania (zł)? ")
budzet = float(budzet)

print(f"\nCześć {imie}! Twój budżet: {budzet} zł")
print("Miłych zakupów! 🛍️\n")
```

**💡 Co nowego?**

- Używamy **dwóch list** dla produktów i cen
- `float()` bo ceny mają grosze!
- Tworzymy **pusty koszyk** (lista)

### 📝 Krok 2: Pokazujemy ofertę (10 min)

Teraz pokażemy produkty w ładny sposób:

```python
# Funkcja pokazująca ofertę
def pokaz_oferte():
    print("\n" + "🎮" * 30)
    print("📦  DOSTĘPNE PRODUKTY:")
    print("🎮" * 30)

    for i in range(len(produkty)):
        numer = i + 1  # Dla użytkownika liczymy od 1
        produkt = produkty[i]
        cena = ceny[i]

        if cena == 0:
            print(f"{numer}. {produkt} - DARMOWY! 🎁")
        else:
            print(f"{numer}. {produkt} - {cena} zł")

    print("🎮" * 30 + "\n")

# Pokazujemy ofertę
pokaz_oferte()
```

**💡 Jak to działa?**

- `range(len(produkty))` - iterujemy po wszystkich produktach
- `i + 1` - dla użytkownika pokazujemy 1, 2, 3... (nie 0, 1, 2...)
- Sprawdzamy `if cena == 0` dla darmowych gier

### 📝 Krok 3: System zakupów (10 min)

Dodajemy główną pętlę zakupową:

```python
# Główna pętla zakupów
while True:
    print("Co chcesz zrobić?")
    print("1 - Dodaj produkt do koszyka")
    print("2 - Zobacz koszyk")
    print("3 - Zapłać i zakończ")

    wybor = input("\nTwój wybór (1/2/3): ")

    if wybor == "1":
        # Dodawanie do koszyka
        pokaz_oferte()
        numer = input("Podaj numer produktu (1-5): ")
        numer = int(numer)

        if 1 <= numer <= 5:
            indeks = numer - 1  # Zamieniamy na indeks listy
            produkt = produkty[indeks]
            cena = ceny[indeks]

            if cena <= budzet:
                koszyk.append(produkt)
                koszyk_ceny.append(cena)
                budzet = budzet - cena
                print(f"✅ Dodano {produkt} do koszyka!")
                print(f"💰 Pozostały budżet: {budzet:.2f} zł\n")
            else:
                print(f"❌ Za mało pieniędzy! Potrzebujesz {cena} zł, a masz {budzet:.2f} zł\n")
        else:
            print("❌ Nieprawidłowy numer produktu!\n")

    elif wybor == "2":
        # Pokazywanie koszyka
        print("\n" + "🛒" * 30)
        print("📦  TWÓJ KOSZYK:")
        print("🛒" * 30)

        if len(koszyk) == 0:
            print("Koszyk jest pusty! 😢")
        else:
            for i in range(len(koszyk)):
                print(f"{i+1}. {koszyk[i]} - {koszyk_ceny[i]} zł")

            suma = sum(koszyk_ceny)
            print(f"\n💰 Łączna wartość: {suma:.2f} zł")
            print(f"💰 Pozostały budżet: {budzet:.2f} zł")

        print("🛒" * 30 + "\n")

    elif wybor == "3":
        # Płatność i koniec
        break
    else:
        print("❌ Nieprawidłowy wybór! Wybierz 1, 2 lub 3\n")

# Paragon końcowy
print("\n" + "🧾" * 30)
print("✨  PARAGON FISKALNY  ✨")
print("🧾" * 30)
print(f"Klient: {imie}")
print("-" * 50)

if len(koszyk) == 0:
    print("Nie dokonano zakupów")
else:
    for i in range(len(koszyk)):
        print(f"{koszyk[i]:.<30} {koszyk_ceny[i]:>6.2f} zł")

    suma = sum(koszyk_ceny)
    print("-" * 50)
    print(f"{'RAZEM':.<30} {suma:>6.2f} zł")
    print(f"{'Pozostało':.<30} {budzet:>6.2f} zł")

print("🧾" * 30)
print("\nDziękujemy za zakupy! Do zobaczenia! 👋")
```

**💡 Super sztuczki w kodzie:**

- `:.2f` - formatowanie do 2 miejsc po przecinku
- `sum(lista)` - sumuje wszystkie liczby w liście!
- `:.<30` i `:>6.2f` - wyrównywanie tekstu (jak w prawdziwym paragonie!)
- `break` - kończy pętlę `while`

### 🎯 WYZWANIA DO SKLEP:

1. **Łatwe**: Dodaj jeszcze 2 produkty do oferty
2. **Średnie**: Dodaj opcję usuwania produktu z koszyka
3. **Trudne**: Dodaj system kodów rabatowych (np. "SUPER10" = 10% zniżki)

---

## 🎯 PROJEKT 3: ŁOWCA SKARBÓW - Gra RPG! (30 minut)

Najlepsze na koniec! Stworzymy **prawdziwą grę** z Pygame Zero!

### 📝 Krok 1: Podstawy gry (10 min)

Stwórz nowy plik `lowca_skarbów.py`:

```python
import pgzrun
import random

# Ustawienia okna
WIDTH = 800
HEIGHT = 600

# Gracz
gracz_x = 400
gracz_y = 300
punkty = 0
zycia = 3

# Skarby (lista pozycji!)
skarby_x = []
skarby_y = []

# Wrogowie
wrogowie_x = []
wrogowie_y = []

# Tworzenie 5 skarbów w losowych miejscach
for i in range(5):
    x = random.randint(50, WIDTH - 50)
    y = random.randint(50, HEIGHT - 50)
    skarby_x.append(x)
    skarby_y.append(y)

# Tworzenie 3 wrogów
for i in range(3):
    x = random.randint(50, WIDTH - 50)
    y = random.randint(50, HEIGHT - 50)
    wrogowie_x.append(x)
    wrogowie_y.append(y)

def draw():
    screen.fill('darkgreen')

    # Tytuł
    screen.draw.text("ŁOWCA SKARBÓW", (250, 20),
                     color='yellow', fontsize=50)

    # Statystyki
    screen.draw.text(f"Punkty: {punkty}", (20, 20),
                     color='white', fontsize=30)
    screen.draw.text(f"❤️ x {zycia}", (650, 20),
                     color='red', fontsize=30)

    # Gracz (żółty okrąg)
    screen.draw.filled_circle((gracz_x, gracz_y), 20, 'yellow')

    # Skarby (zielone gwiazdki - kółka)
    for i in range(len(skarby_x)):
        screen.draw.filled_circle((skarby_x[i], skarby_y[i]),
                                  15, 'gold')

    # Wrogowie (czerwone kwadraty)
    for i in range(len(wrogowie_x)):
        screen.draw.filled_rect(
            Rect(wrogowie_x[i]-15, wrogowie_y[i]-15, 30, 30),
            'red'
        )

    # Komunikaty
    if zycia <= 0:
        screen.draw.text("KONIEC GRY!", (250, 250),
                        color='red', fontsize=80)
        screen.draw.text(f"Zdobyłeś {punkty} punktów",
                        (250, 350), color='white', fontsize=40)

    if len(skarby_x) == 0 and zycia > 0:
        screen.draw.text("WYGRANA!", (280, 250),
                        color='gold', fontsize=80)
        screen.draw.text(f"Zebrałeś wszystkie skarby!",
                        (220, 350), color='white', fontsize=40)

def update():
    global gracz_x, gracz_y, punkty, zycia

    # Koniec gry
    if zycia <= 0 or len(skarby_x) == 0:
        return

    # Sterowanie
    if keyboard.left and gracz_x > 20:
        gracz_x = gracz_x - 5
    if keyboard.right and gracz_x < WIDTH - 20:
        gracz_x = gracz_x + 5
    if keyboard.up and gracz_y > 20:
        gracz_y = gracz_y - 5
    if keyboard.down and gracz_y < HEIGHT - 20:
        gracz_y = gracz_y + 5

    # Sprawdzanie kolizji ze skarbami
    for i in range(len(skarby_x) - 1, -1, -1):
        # Odległość między graczem a skarbem
        dx = gracz_x - skarby_x[i]
        dy = gracz_y - skarby_y[i]
        odleglosc = (dx**2 + dy**2) ** 0.5

        if odleglosc < 35:  # 20 + 15 = promienie
            # Zebraliśmy skarb!
            punkty = punkty + 10
            skarby_x.pop(i)
            skarby_y.pop(i)

    # Poruszanie wrogami (automatycznie)
    for i in range(len(wrogowie_x)):
        # Prosta AI - idź w stronę gracza
        if wrogowie_x[i] < gracz_x:
            wrogowie_x[i] = wrogowie_x[i] + 2
        elif wrogowie_x[i] > gracz_x:
            wrogowie_x[i] = wrogowie_x[i] - 2

        if wrogowie_y[i] < gracz_y:
            wrogowie_y[i] = wrogowie_y[i] + 2
        elif wrogowie_y[i] > gracz_y:
            wrogowie_y[i] = wrogowie_y[i] - 2

    # Sprawdzanie kolizji z wrogami
    for i in range(len(wrogowie_x)):
        dx = gracz_x - wrogowie_x[i]
        dy = gracz_y - wrogowie_y[i]
        odleglosc = (dx**2 + dy**2) ** 0.5

        if odleglosc < 35:
            # Trafił nas wróg!
            zycia = zycia - 1
            # Przenieś wroga w losowe miejsce
            wrogowie_x[i] = random.randint(50, WIDTH - 50)
            wrogowie_y[i] = random.randint(50, HEIGHT - 50)

pgzrun.go()
```

**💡 Co się tu dzieje?**

- Gracz to żółte kółko - poruszamy strzałkami!
- Skarby to złote kółka - zbieraj je!
- Wrogowie to czerwone kwadraty - uciekaj przed nimi!

### 🎯 WYZWANIA DO GRY (z podpowiedziami!):

#### 🟢 WYZWANIE 1: Zmień kolory (Super łatwe!)

Znajdź linijki z kolorami i zmień je na swoje ulubione!

<details>
<summary>💡 Pokaż podpowiedź</summary>

```python
# Zmień kolor gracza (teraz jest 'yellow')
screen.draw.filled_circle((gracz_x, gracz_y), 20, 'blue')  # Niebieski gracz!

# Zmień kolor skarbów (teraz jest 'gold')
screen.draw.filled_circle((skarby_x[i], skarby_y[i]), 15, 'green')  # Zielone skarby!

# Zmień kolor tła (teraz jest 'darkgreen')
screen.fill('purple')  # Fioletowe tło!
```

**Dostępne kolory:** `'red'`, `'blue'`, `'green'`, `'yellow'`, `'orange'`, `'pink'`, `'purple'`, `'white'`, `'black'`

</details>

---

#### 🟢 WYZWANIE 2: Zmień wielkości (Łatwe!)

Spraw, żeby gracz i skarby były większe lub mniejsze!

<details>
<summary>💡 Pokaż podpowiedź</summary>

```python
# Większy gracz (teraz jest 20)
screen.draw.filled_circle((gracz_x, gracz_y), 35, 'yellow')  # Duży gracz!

# Większe skarby (teraz jest 15)
screen.draw.filled_circle((skarby_x[i], skarby_y[i]), 25, 'gold')  # Wielkie skarby!
```

</details>

---

#### 🟡 WYZWANIE 3: Więcej skarbów (Średnie)

Dodaj więcej skarbów do zebrania - szukaj `range(5)` na górze programu!

<details>
<summary>💡 Pokaż podpowiedź</summary>

```python
# Było:
for i in range(5):  # 5 skarbów

# Zmień na:
for i in range(10):  # 10 skarbów!
```

</details>

---

#### 🟡 WYZWANIE 4: Szybszy gracz (Średnie)

Zmień prędkość gracza - szukaj liczby `5` przy sterowaniu strzałkami!

<details>
<summary>💡 Pokaż podpowiedź</summary>

```python
# Było:
gracz_x = gracz_x - 5  # Prędkość 5

# Zmień na:
gracz_x = gracz_x - 10  # Szybciej! Prędkość 10
```

Zrób to samo dla wszystkich 4 kierunków (left, right, up, down)!

</details>

---

#### 🟡 WYZWANIE 5: Wolniejsi wrogowie (Średnie - łatwiejsza gra!)

Spowolnij wrogów - szukaj liczby `2` przy poruszaniu wrogami!

<details>
<summary>💡 Pokaż podpowiedź</summary>

```python
# Było:
wrogowie_x[i] = wrogowie_x[i] + 2  # Prędkość wroga 2

# Zmień na:
wrogowie_x[i] = wrogowie_x[i] + 1  # Wolniejszy wróg! Prędkość 1
```

</details>

---

#### 🔴 WYZWANIE 6: Więcej żyć (Średnie-Trudne)

Daj sobie więcej żyć - szukaj `zycia = 3` na górze programu!

<details>
<summary>💡 Pokaż podpowiedź</summary>

```python
# Było:
zycia = 3

# Zmień na:
zycia = 10  # Teraz masz 10 żyć!
```

</details>

---

#### 🔴 WYZWANIE 7: Dodaj napis z instrukcją (Trudne)

Dodaj tekst na dole ekranu, który mówi jak grać!

<details>
<summary>💡 Pokaż podpowiedź</summary>

W funkcji `draw()`, po tytule dodaj:

```python
# Instrukcja na dole ekranu
screen.draw.text("Strzałki = ruch, Zbieraj złoto, Uciekaj od czerwonych!",
                 (50, 570), color='white', fontsize=20)
```

</details>

---

## 🌟 BONUS: Co dalej?

Gratulacje! Właśnie powtórzyłeś/aś:

- ✅ `print()` i `input()`
- ✅ Zmienne i `int()`, `float()`
- ✅ Listy i `.append()`, `.pop()`
- ✅ Pętle `for` i `while`
- ✅ Instrukcje warunkowe `if/elif/else`
- ✅ Funkcje `def`
- ✅ Pygame Zero - tworzenie gier!

### 💡 Pomysły na własne projekty:

1. **Kalkulator Super**: Dodaj więcej operacji (potęgowanie, pierwiastek)
2. **Tamagotchi**: Wirtualny zwierzak, którego musisz karmić i bawić się z nim
3. **Lista zadań**: Program do zarządzania obowiązkami
4. **Symulator farmy**: Sadź rośliny, zbieraj plony, sprzedawaj na rynku
5. **Zgadnij melodię**: Quiz muzyczny (tylko tytuły, bez dźwięku na początek)

### 🎮 Pomysły na gry w Pygame Zero:

1. **Snake**: Klasyczny wąż zjadający jabłka
2. **Pong**: Odbijaj piłkę paletkami
3. **Flappy Bird**: Ptak unikający przeszkód
4. **Space Invaders**: Strzelaj do inwazji kosmitów
5. **Arkanoid**: Odbijaj piłkę i rozbijaj klocki

### 📚 Co dalej w kursie?

W kolejnych lekcjach nauczymy się:

- 📖 Słowniki - jeszcze potężniejsza struktura danych
- 🎨 Grafiki i obrazki w Pygame Zero
- 🎵 Dźwięki i muzyka w grach
- 📁 Praca z plikami - zapisywanie wyników
- 🌐 Podstawy tworzenia stron WWW z Pythonem

---

## 🏆 Podsumowanie

Dzisiejsza lekcja była wyjątkowa! Stworzyliście:

- 🎲 Quiz z systemem punktacji
- 🏪 Sklep z koszykiem i paragonem
- 🎯 Grę akcji z wrogami i skarbami

**Pamiętajcie**: Najlepszym sposobem nauki jest **eksperymentowanie**!

- Zmieniajcie kod
- Dodawajcie nowe funkcje
- Twórzcie własne projekty
- Dzielcie się z innymi!

**Nie bójcie się błędów** - każdy błąd to lekcja! 💪

---

## 📝 Zadanie domowe (opcjonalne, ale super fajne!)

Wybierz JEDEN z projektów i dodaj do niego coś swojego:

**QUIZ:**

- Dodaj 5 własnych pytań
- Zrób system poziomów trudności
- Dodaj czasomierz na odpowiedzi

**SKLEP:**

- Dodaj więcej kategorii produktów
- Zrób system lojalnościowy (punkty za zakupy)
- Dodaj możliwość zwrotu towaru

**GRA:**

- Zmień kolory na swoje ulubione
- Dodaj więcej skarbów (zmień 5 na 15!)
- Spowolnij wrogów, żeby gra była łatwiejsza
- Dodaj napis z instrukcją na dole ekranu

---

**Pamiętaj:** Programowanie to zabawa! Im więcej eksperymentujesz, tym więcej się uczysz! 🚀

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

---

_Stworzyłeś coś super? Pokaż rodzicom, nauczycielowi lub znajomym! Dzielenie się projektem jest częścią przygody programisty! 😊_
