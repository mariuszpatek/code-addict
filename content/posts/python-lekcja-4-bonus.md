+++
title = 'Python Podstawowy - Lekcja 4 Bonus: Rysujemy z Pętlami - Magiczna Grafika Żółwia! 🐢🎨'
description = "Naucz się rysować w Pythonie! Utrwal wiedzę o pętlach i instrukcjach warunkowych, tworząc piękne grafiki za pomocą biblioteki turtle."
date = "2025-10-23T12:00:00+02:00"
draft = false
url = "/python-course/lekcja-4-bonus/"
author = 'Code Addict'
categories = ['python-course']
tags = ["python", "podstawy", "programowanie", "turtle", "pętle", "for", "while", "if-else", "grafika"]
series = ['Python Podstawowy']
+++

**[← Powrót do kursu Python Podstawowy](/python-course/)**

## Wstęp - Czas Rysować! 🎨

Witaj w bonusowej lekcji! Do tej pory pisaliśmy programy z samym tekstem. Teraz będziemy rysować!

Poznasz **żółwia** (turtle) - wirtualnego robota, który rysuje na ekranie. Możesz mu kazać:

- "Idź do przodu"
- "Skręć w lewo"
- "Zmień kolor"

I od razu widzisz, co narysował! Fajne, prawda?

## Czym jest Turtle? 🐢

**Turtle** to narzędzie do rysowania w Pythonie. Wyobraź sobie żółwia z pisakiem:

- Żółw chodzi po ekranie
- Zostawia za sobą linię
- Ty mu mówisz, gdzie ma iść

Dzięki temu szybko zobaczysz, jak działają pętle i warunki!

## Krok 1: Twój Pierwszy Rysunek

Stwórz nowy plik Python (np. `zolw.py`) i wpisz:

```python
import turtle

# Tworzymy żółwia
zolw = turtle.Turtle()

# Rysujemy kwadrat
zolw.forward(100)    # Idź do przodu
zolw.right(90)       # Skręć w prawo
zolw.forward(100)
zolw.right(90)
zolw.forward(100)
zolw.right(90)
zolw.forward(100)

# Koniec - okno zostaje otwarte
turtle.done()
```

**Uruchom program!** Żółw narysuje kwadrat! 🟦

**Komendy:**

- `import turtle` - włącz narzędzie do rysowania
- `turtle.Turtle()` - stwórz żółwia
- `forward(100)` - idź do przodu 100 kroków
- `right(90)` - skręć w prawo o 90 stopni
- `turtle.done()` - nie zamykaj okna

## Krok 2: Pętla - Krótszy Kod! 🔄

Zauważyłeś? Powtarzamy ten sam kod 4 razy! Użyjmy pętli:

```python
import turtle

zolw = turtle.Turtle()

# Kwadrat z pętlą - krócej i łatwiej!
for i in range(4):
    zolw.forward(100)
    zolw.right(90)

turtle.done()
```

**To jest MOC pętli!**

- `for i in range(4)` - powtórz 4 razy
- Zamiast 8 linijek mamy tylko 3!
- Ten sam efekt, mniej pisania!

## Krok 3: Dodajmy Kolory! 🌈

Każdy bok kwadratu może mieć inny kolor:

```python
import turtle

zolw = turtle.Turtle()
zolw.speed(3)  # Szybkość (1=wolno, 10=szybko)

# Każdy bok innym kolorem!
for i in range(4):
    if i == 0:
        zolw.color("red")
    elif i == 1:
        zolw.color("blue")
    elif i == 2:
        zolw.color("green")
    else:
        zolw.color("orange")

    zolw.forward(100)
    zolw.right(90)

turtle.done()
```

**Zobacz:**

- `if i == 0` - pierwszy bok jest czerwony
- `elif i == 1` - drugi bok jest niebieski
- itd. - każdy bok inny kolor! 🎨

## Krok 4: Spirala! 🌀

Teraz coś fajnego - spirala! Każda linia będzie dłuższa:

```python
import turtle

zolw = turtle.Turtle()
zolw.speed(10)  # Rysuj szybko!

dlugosc = 5  # Zacznij od 5 kroków

# Spirala - 50 razy
for i in range(50):
    zolw.forward(dlugosc)
    zolw.right(90)
    dlugosc = dlugosc + 5  # Zwiększ o 5

turtle.done()
```

**Jak to działa?**

- Pierwsza linia: 5 kroków
- Druga linia: 10 kroków
- Trzecia linia: 15 kroków
- Efekt: SPIRALA! 🌀

## Krok 5: Gwiazdka! 🌟

Narysujmy złotą gwiazdę:

```python
import turtle

zolw = turtle.Turtle()
zolw.color("gold")
zolw.speed(5)

# Gwiazda - 5 ramion
for i in range(5):
    zolw.forward(100)
    zolw.right(144)  # Magiczny kąt!

turtle.done()
```

**144 stopnie?** To specjalny kąt dla gwiazdy. Zobacz, co się stanie! ⭐

## Krok 6: Sekretny Okrąg 🔵

Narysujmy okrąg... z małych linijek!

```python
import turtle

zolw = turtle.Turtle()
zolw.color("blue")
zolw.speed(10)

# 36 małych kroków = okrąg!
for i in range(36):
    zolw.forward(10)
    zolw.right(10)

turtle.done()
```

**Sekret:** Wiele małych linii wygląda jak okrąg! 🔵

## Krok 7: Kwiat! 🌸

Narysujmy kwiat - to pętla w pętli!

```python
import turtle

zolw = turtle.Turtle()
zolw.speed(10)

# 6 płatków
for platki in range(6):
    zolw.color("pink")

    # Jeden płatek (okrąg)
    for i in range(36):
        zolw.forward(5)
        zolw.right(10)

    # Obróć się dla następnego płatka
    zolw.right(60)

turtle.done()
```

**Pętla w pętli!**

- Zewnętrzna: 6 płatków
- Wewnętrzna: rysuje jeden płatek
- Razem = kwiat! 🌸

## Krok 8: Kolorowa Tęczowa Spirala 🎨

Prosta wersja z trzema kolorami:

```python
import turtle

zolw = turtle.Turtle()
zolw.speed(10)

kolory = ["red", "blue", "green"]
dlugosc = 5

# Spirala z kolorami
for i in range(60):
    # Wybierz kolor (0, 1, 2, 0, 1, 2...)
    zolw.color(kolory[i % 3])

    zolw.forward(dlugosc)
    zolw.right(90)
    dlugosc += 3

turtle.done()
```

**Jak to działa?**

- `kolory[i % 3]` - wybiera kolor po kolei
- `i % 3` daje 0, 1, 2, 0, 1, 2...
- Spirala zmienia kolory! 🌈

## Krok 9: TY Decydujesz! 🖌️

Teraz TY wybierzesz kolor i kształt:

```python
import turtle

zolw = turtle.Turtle()
zolw.speed(5)

# Zapytaj użytkownika
kolor = input("Jaki kolor? (red, blue, green, pink): ")
boki = int(input("Ile boków? (3-10): "))

zolw.color(kolor)

# Oblicz kąt
kat = 360 / boki

# Rysuj!
for i in range(boki):
    zolw.forward(100)
    zolw.right(kat)

turtle.done()
```

**Wypróbuj:**

- 3 boki = trójkąt
- 5 boków = pięciokąt
- 8 boków = ośmiokąt
- TY decydujesz!

## Krok 10: Szalony Żółw! 🎲

Losowe kolory i kierunki - zobacz, co się stanie!

```python
import turtle
import random

zolw = turtle.Turtle()
zolw.speed(10)

kolory = ["red", "blue", "green", "yellow", "purple", "orange", "pink"]

# 50 losowych kroków!
for i in range(50):
    # Losuj kolor
    zolw.color(random.choice(kolory))

    # Losuj długość (20-80 kroków)
    zolw.forward(random.randint(20, 80))

    # Losuj kierunek
    zolw.right(random.randint(0, 360))

turtle.done()
```

**Za każdym razem inny rysunek!**
Uruchom kilka razy i zobacz różne wzory! 🎨

## Ściągawka - Najważniejsze Komendy 📝

### Ruch

```python
zolw.forward(100)    # Do przodu
zolw.backward(50)    # Do tyłu
zolw.right(90)       # Skręć w prawo
zolw.left(45)        # Skręć w lewo
```

### Kolor i wygląd

```python
zolw.color("red")    # Zmień kolor
zolw.speed(5)        # Szybkość (1-10)
zolw.pensize(5)      # Grubość linii
```

### Pisak

```python
zolw.penup()         # Podnieś pisak (nie rysuj)
zolw.pendown()       # Opuść pisak (rysuj)
```

### Wypełnianie

```python
zolw.begin_fill()    # Start wypełniania
# ... narysuj kształt
zolw.end_fill()      # Koniec wypełniania
```

## Zadania do Zrobienia 💪

Spróbuj sam!

### Zadanie 1: Domek

Narysuj prosty domek:

- Kwadrat = ściana
- Trójkąt = dach
- Użyj 2 kolorów

### Zadanie 2: Tęczowa Spirala

Zrób spiralę z 5 kolorami:

```python
kolory = ["red", "orange", "yellow", "green", "blue"]
# Użyj kolory[i % 5] w pętli!
```

### Zadanie 3: 3 Okręgi

Narysuj 3 okręgi obok siebie, każdy innym kolorem.

**Podpowiedź:** Użyj `penup()` i `goto(x, y)` żeby przejść bez rysowania!

## Praca Domowa 📚

**Narysuj Swoją Flagę!**

Stwórz własną flagę z:

1. **3 kolorami** (np. czerwony, biały, niebieski)
2. **Kształtami:** prostokąty, gwiazdy, koła
3. **Pętlą** - np. 5 gwiazd w pętli

**Pomysły:**

- Flaga w paski (3 prostokąty)
- Flaga z gwiazdami (pętla rysująca gwiazdki)
- Twój wymyślony wzór!

**Pokaż rodzicom lub nauczycielowi co narysowałeś!** 🎨

## Podsumowanie 🎓

**Gratulacje! Umiesz już:**

- ✅ Rysować z `turtle`
- ✅ Używać pętli `for` do powtarzania
- ✅ Zmieniać kolory z `if/else`
- ✅ Rysować kwadraty, gwiazdy, okręgi, spirale
- ✅ Łączyć pętle (pętla w pętli!)
- ✅ Używać `random` do losowych rysunków

**Co zapamiętać:**

- 🐢 `turtle` = narzędzie do rysowania
- 🔄 Pętla `for` = powtarzaj X razy
- 🎨 `if/else` = wybieraj kolory i kształty
- 🎲 `random` = losowość = zabawa!

**Najważniejsze:** Eksperymentuj! Zmieniaj liczby, kolory, próbuj nowych rzeczy. Każdy błąd to lekcja!

Teraz jesteś gotowy na prawdziwą grę w następnej lekcji! 🎮

**[← Powrót do kursu Python Podstawowy](/python-course/)**
