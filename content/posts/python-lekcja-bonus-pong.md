+++
title = 'Python Podstawowy - BONUS: Gra Pong dla 2 Graczy! 🏓🎮'
date = 2026-02-22T10:00:00+01:00
draft = false
url = '/python-course/bonus-pong/'
description = 'Projekt bonusowy z serii Python Podstawowy. Tworzymy klasyczną grę Pong dla dwóch graczy w Pygame Zero!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'pygame-zero', 'pong', 'gra', 'multiplayer', 'projekt', 'bonus']
series = ['Python Podstawowy']
+++

# 🏓 BONUS: Gra Pong dla 2 Graczy! 🎮

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Gratulacje, młody programisto! 🎉 Ukończyłeś wszystkie główne lekcje kursu! Na nagrodę mamy dla Ciebie **projekt bonusowy** - stworzymy klasyczną grę **Pong** dla dwóch graczy!

To świetna okazja, żeby powtórzyć Pygame Zero z Lekcji 5-6 i stworzyć grę, w którą możesz zagrać z kolegą lub rodzeństwem! 👫

<!--more-->

---

## 🏓 Co to jest Pong?

**Pong** to jedna z pierwszych gier komputerowych w historii (1972 rok!). Zasady są proste:

- Dwóch graczy kontroluje **paletki** (po jednej stronie ekranu każdy)
- **Piłka** odbija się między paletkami
- Gdy piłka przeleci za paletkę przeciwnika, zdobywasz **punkt**
- Wygrywa ten, kto pierwszy zdobędzie **5 punktów**!

---

## 📋 Co powtórzymy?

| Koncept          | Lekcja     | Jak użyjemy?         |
| ---------------- | ---------- | -------------------- |
| Pygame Zero      | Lekcja 5-6 | Cała gra!            |
| `Actor`          | Lekcja 6   | Paletki i piłka      |
| `keyboard`       | Lekcja 5   | Sterowanie paletkami |
| Kolizje          | Lekcja 6   | Odbijanie piłki      |
| `draw()`         | Lekcja 5   | Rysowanie gry        |
| `update()`       | Lekcja 5   | Logika gry           |
| Zmienne globalne | Lekcja 6   | Wynik, stan gry      |

---

## 🎮 Sterowanie w grze

| Gracz 1 (Lewa strona) | Gracz 2 (Prawa strona)  |
| --------------------- | ----------------------- |
| **W** - góra          | **↑** (strzałka) - góra |
| **S** - dół           | **↓** (strzałka) - dół  |

---

## 🛠️ Przygotowanie

### Potrzebujesz:

1. **Pygame Zero** zainstalowane (z Lekcji 5-6)
2. Folder `images` z grafikami paletki i piłki

### Grafiki do gry

Możesz:

- **Użyć prostych kształtów** (pokażemy jak) - bez obrazków!
- **Narysować własne** w Paint (paletka: 20×100px, piłka: 20×20px)
- **Pobrać gotowe** (podobne do Arkanoida)

**My zrobimy wersję BEZ obrazków** - używając prostych prostokątów i kółek! 🎨

---

## 🚀 Zaczynamy kodować!

### Krok 1: Podstawowa struktura

Stwórz nowy plik `pong.py`:

```python
# 🏓 GRA PONG - 2 Graczy!
# Autor: [Twoje Imię]
# Projekt bonusowy - Kurs Python Podstawowy

import pgzrun
import random

# === USTAWIENIA OKNA ===
WIDTH = 800
HEIGHT = 500
TITLE = "🏓 PONG - 2 Graczy!"

# === KOLORY ===
BIALY = (255, 255, 255)
CZARNY = (0, 0, 0)
ZOLTY = (255, 255, 0)
NIEBIESKI = (100, 150, 255)
CZERWONY = (255, 100, 100)

def draw():
    """Rysuje grę"""
    screen.fill(CZARNY)  # Czarne tło

    # Linia środkowa (przerywana)
    for i in range(0, HEIGHT, 30):
        screen.draw.filled_rect(
            Rect(WIDTH // 2 - 2, i, 4, 15),
            (50, 50, 50)
        )

    # Napisy
    screen.draw.text("PONG", center=(WIDTH // 2, 30),
                     fontsize=40, color=BIALY)
    screen.draw.text("Gracz 1: W/S", (20, HEIGHT - 30),
                     fontsize=20, color=NIEBIESKI)
    screen.draw.text("Gracz 2: ↑/↓", (WIDTH - 150, HEIGHT - 30),
                     fontsize=20, color=CZERWONY)

def update():
    """Aktualizuje grę"""
    pass

pgzrun.go()
```

**Uruchom!** Zobaczysz podstawowy ekran gry z linią środkową. ⚫

---

### Krok 2: Dodajemy paletki

Rozbuduj kod:

```python
# 🏓 GRA PONG - 2 Graczy!

import pgzrun
import random

# === USTAWIENIA ===
WIDTH = 800
HEIGHT = 500
TITLE = "🏓 PONG - 2 Graczy!"

# Ustawienia gry
PREDKOSC_PALETKI = 8
PREDKOSC_PILKI = 6
PUNKTY_DO_WYGRANEJ = 5

# === KOLORY ===
BIALY = (255, 255, 255)
CZARNY = (0, 0, 0)
ZOLTY = (255, 255, 0)
NIEBIESKI = (100, 150, 255)
CZERWONY = (255, 100, 100)

# === PALETKI ===
# Paletka gracza 1 (lewa strona)
paletka1 = Rect(30, HEIGHT // 2 - 50, 20, 100)

# Paletka gracza 2 (prawa strona)
paletka2 = Rect(WIDTH - 50, HEIGHT // 2 - 50, 20, 100)

def draw():
    """Rysuje grę"""
    screen.fill(CZARNY)

    # Linia środkowa
    for i in range(0, HEIGHT, 30):
        screen.draw.filled_rect(
            Rect(WIDTH // 2 - 2, i, 4, 15),
            (50, 50, 50)
        )

    # Paletki
    screen.draw.filled_rect(paletka1, NIEBIESKI)
    screen.draw.filled_rect(paletka2, CZERWONY)

    # Napisy
    screen.draw.text("PONG", center=(WIDTH // 2, 30),
                     fontsize=40, color=BIALY)
    screen.draw.text("W/S", (20, HEIGHT - 30),
                     fontsize=20, color=NIEBIESKI)
    screen.draw.text("↑/↓", (WIDTH - 60, HEIGHT - 30),
                     fontsize=20, color=CZERWONY)

def update():
    """Aktualizuje grę"""

    # Sterowanie paletką 1 (W/S)
    if keyboard.w and paletka1.top > 0:
        paletka1.y -= PREDKOSC_PALETKI
    if keyboard.s and paletka1.bottom < HEIGHT:
        paletka1.y += PREDKOSC_PALETKI

    # Sterowanie paletką 2 (strzałki)
    if keyboard.up and paletka2.top > 0:
        paletka2.y -= PREDKOSC_PALETKI
    if keyboard.down and paletka2.bottom < HEIGHT:
        paletka2.y += PREDKOSC_PALETKI

pgzrun.go()
```

**Uruchom!** Teraz możesz sterować paletkami! 🏓

---

### Krok 3: Dodajemy piłkę

```python
# === PIŁKA ===
pilka_x = WIDTH // 2
pilka_y = HEIGHT // 2
pilka_predkosc_x = PREDKOSC_PILKI
pilka_predkosc_y = PREDKOSC_PILKI
PILKA_ROZMIAR = 15

def draw():
    """Rysuje grę"""
    screen.fill(CZARNY)

    # Linia środkowa
    for i in range(0, HEIGHT, 30):
        screen.draw.filled_rect(
            Rect(WIDTH // 2 - 2, i, 4, 15),
            (50, 50, 50)
        )

    # Paletki
    screen.draw.filled_rect(paletka1, NIEBIESKI)
    screen.draw.filled_rect(paletka2, CZERWONY)

    # Piłka
    screen.draw.filled_circle((pilka_x, pilka_y), PILKA_ROZMIAR, ZOLTY)

    # Napisy
    screen.draw.text("PONG", center=(WIDTH // 2, 30),
                     fontsize=40, color=BIALY)

def update():
    """Aktualizuje grę"""
    global pilka_x, pilka_y, pilka_predkosc_x, pilka_predkosc_y

    # Sterowanie paletkami
    if keyboard.w and paletka1.top > 0:
        paletka1.y -= PREDKOSC_PALETKI
    if keyboard.s and paletka1.bottom < HEIGHT:
        paletka1.y += PREDKOSC_PALETKI

    if keyboard.up and paletka2.top > 0:
        paletka2.y -= PREDKOSC_PALETKI
    if keyboard.down and paletka2.bottom < HEIGHT:
        paletka2.y += PREDKOSC_PALETKI

    # Ruch piłki
    pilka_x += pilka_predkosc_x
    pilka_y += pilka_predkosc_y

    # Odbicie od góry i dołu
    if pilka_y <= PILKA_ROZMIAR or pilka_y >= HEIGHT - PILKA_ROZMIAR:
        pilka_predkosc_y *= -1
```

**Uruchom!** Piłka lata i odbija się od górnej i dolnej krawędzi! ⚽

---

### Krok 4: Kolizje z paletkami

Dodaj w funkcji `update()`:

```python
    # Odbicie od paletki 1 (lewa)
    pilka_rect = Rect(pilka_x - PILKA_ROZMIAR, pilka_y - PILKA_ROZMIAR,
                      PILKA_ROZMIAR * 2, PILKA_ROZMIAR * 2)

    if pilka_rect.colliderect(paletka1) and pilka_predkosc_x < 0:
        pilka_predkosc_x *= -1
        # Dodajemy efekt kąta w zależności od miejsca uderzenia
        roznica = pilka_y - (paletka1.centery)
        pilka_predkosc_y = roznica * 0.1

    # Odbicie od paletki 2 (prawa)
    if pilka_rect.colliderect(paletka2) and pilka_predkosc_x > 0:
        pilka_predkosc_x *= -1
        roznica = pilka_y - (paletka2.centery)
        pilka_predkosc_y = roznica * 0.1
```

**Uruchom!** Teraz piłka odbija się od paletek! 🏓

---

### Krok 5: System punktów

Dodaj zmienne na górze (po innych zmiennych):

```python
# === WYNIK ===
wynik1 = 0
wynik2 = 0
```

Dodaj funkcję resetowania piłki:

```python
def reset_pilki(kierunek):
    """Resetuje piłkę na środek"""
    global pilka_x, pilka_y, pilka_predkosc_x, pilka_predkosc_y

    pilka_x = WIDTH // 2
    pilka_y = HEIGHT // 2

    # Piłka leci w stronę gracza, który stracił punkt
    pilka_predkosc_x = PREDKOSC_PILKI * kierunek
    pilka_predkosc_y = random.choice([-1, 1]) * PREDKOSC_PILKI * 0.5
```

Dodaj w `update()` sprawdzanie punktów:

```python
    # Punkt dla gracza 2 (piłka wyleciała w lewo)
    if pilka_x < 0:
        wynik2 += 1
        reset_pilki(-1)  # Piłka leci w lewo (do gracza 1)

    # Punkt dla gracza 1 (piłka wyleciała w prawo)
    if pilka_x > WIDTH:
        wynik1 += 1
        reset_pilki(1)  # Piłka leci w prawo (do gracza 2)
```

Dodaj wyświetlanie wyniku w `draw()`:

```python
    # Wynik
    screen.draw.text(str(wynik1), (WIDTH // 4, 50),
                     fontsize=80, color=NIEBIESKI)
    screen.draw.text(str(wynik2), (3 * WIDTH // 4 - 30, 50),
                     fontsize=80, color=CZERWONY)
```

---

### Krok 6: Warunek wygranej

Dodaj zmienną stanu gry:

```python
# === STAN GRY ===
stan_gry = "gra"  # "gra", "wygrana1", "wygrana2"
```

Dodaj sprawdzanie wygranej w `update()`:

```python
    global wynik1, wynik2, stan_gry

    # Sprawdzamy wygraną
    if stan_gry != "gra":
        return  # Nie aktualizujemy jeśli gra skończona

    # ... reszta kodu update ...

    # Sprawdzanie wygranej (na końcu update)
    if wynik1 >= PUNKTY_DO_WYGRANEJ:
        stan_gry = "wygrana1"
    elif wynik2 >= PUNKTY_DO_WYGRANEJ:
        stan_gry = "wygrana2"
```

Dodaj ekran wygranej w `draw()`:

```python
    # Ekran wygranej
    if stan_gry == "wygrana1":
        screen.draw.filled_rect(Rect(0, 0, WIDTH, HEIGHT), (0, 0, 100))
        screen.draw.text("GRACZ 1 WYGRYWA!", center=(WIDTH // 2, HEIGHT // 2 - 30),
                         fontsize=60, color=NIEBIESKI)
        screen.draw.text(f"Wynik: {wynik1} - {wynik2}", center=(WIDTH // 2, HEIGHT // 2 + 30),
                         fontsize=40, color=BIALY)
        screen.draw.text("Naciśnij SPACJĘ, aby zagrać ponownie",
                         center=(WIDTH // 2, HEIGHT // 2 + 80),
                         fontsize=25, color=BIALY)
    elif stan_gry == "wygrana2":
        screen.draw.filled_rect(Rect(0, 0, WIDTH, HEIGHT), (100, 0, 0))
        screen.draw.text("GRACZ 2 WYGRYWA!", center=(WIDTH // 2, HEIGHT // 2 - 30),
                         fontsize=60, color=CZERWONY)
        screen.draw.text(f"Wynik: {wynik1} - {wynik2}", center=(WIDTH // 2, HEIGHT // 2 + 30),
                         fontsize=40, color=BIALY)
        screen.draw.text("Naciśnij SPACJĘ, aby zagrać ponownie",
                         center=(WIDTH // 2, HEIGHT // 2 + 80),
                         fontsize=25, color=BIALY)
```

Dodaj restart gry:

```python
def on_key_down(key):
    """Obsługa naciśnięcia klawisza"""
    global stan_gry, wynik1, wynik2

    if key == keys.SPACE and stan_gry != "gra":
        # Reset gry
        stan_gry = "gra"
        wynik1 = 0
        wynik2 = 0
        paletka1.centery = HEIGHT // 2
        paletka2.centery = HEIGHT // 2
        reset_pilki(random.choice([-1, 1]))
```

---

### Krok 7: Kompletny kod!

Oto pełna, działająca gra:

```python
# 🏓 GRA PONG - 2 Graczy!
# Autor: [Twoje Imię]
# Projekt bonusowy - Kurs Python Podstawowy

import pgzrun
import random

# === USTAWIENIA OKNA ===
WIDTH = 800
HEIGHT = 500
TITLE = "🏓 PONG - 2 Graczy!"

# === USTAWIENIA GRY ===
PREDKOSC_PALETKI = 8
PREDKOSC_PILKI = 6
PUNKTY_DO_WYGRANEJ = 5
PILKA_ROZMIAR = 15

# === KOLORY ===
BIALY = (255, 255, 255)
CZARNY = (0, 0, 0)
ZOLTY = (255, 255, 0)
NIEBIESKI = (100, 150, 255)
CZERWONY = (255, 100, 100)

# === PALETKI ===
paletka1 = Rect(30, HEIGHT // 2 - 50, 20, 100)
paletka2 = Rect(WIDTH - 50, HEIGHT // 2 - 50, 20, 100)

# === PIŁKA ===
pilka_x = WIDTH // 2
pilka_y = HEIGHT // 2
pilka_predkosc_x = PREDKOSC_PILKI
pilka_predkosc_y = PREDKOSC_PILKI * 0.5

# === WYNIK ===
wynik1 = 0
wynik2 = 0

# === STAN GRY ===
stan_gry = "start"  # "start", "gra", "wygrana1", "wygrana2"

def reset_pilki(kierunek):
    """Resetuje piłkę na środek"""
    global pilka_x, pilka_y, pilka_predkosc_x, pilka_predkosc_y

    pilka_x = WIDTH // 2
    pilka_y = HEIGHT // 2
    pilka_predkosc_x = PREDKOSC_PILKI * kierunek
    pilka_predkosc_y = random.choice([-1, 1]) * PREDKOSC_PILKI * 0.5

def draw():
    """Rysuje grę"""
    screen.fill(CZARNY)

    # Ekran startowy
    if stan_gry == "start":
        screen.draw.text("🏓 PONG 🏓", center=(WIDTH // 2, HEIGHT // 3),
                         fontsize=80, color=ZOLTY)
        screen.draw.text("Gracz 1: W / S", center=(WIDTH // 4, HEIGHT // 2),
                         fontsize=30, color=NIEBIESKI)
        screen.draw.text("Gracz 2: ↑ / ↓", center=(3 * WIDTH // 4, HEIGHT // 2),
                         fontsize=30, color=CZERWONY)
        screen.draw.text(f"Wygrywa kto pierwszy zdobędzie {PUNKTY_DO_WYGRANEJ} punktów!",
                         center=(WIDTH // 2, HEIGHT // 2 + 60),
                         fontsize=25, color=BIALY)
        screen.draw.text("Naciśnij SPACJĘ, aby rozpocząć!",
                         center=(WIDTH // 2, HEIGHT - 80),
                         fontsize=30, color=BIALY)
        return

    # Ekran wygranej
    if stan_gry == "wygrana1":
        screen.draw.filled_rect(Rect(0, 0, WIDTH, HEIGHT), (0, 0, 80))
        screen.draw.text("🏆 GRACZ 1 WYGRYWA! 🏆", center=(WIDTH // 2, HEIGHT // 2 - 30),
                         fontsize=50, color=NIEBIESKI)
        screen.draw.text(f"Wynik: {wynik1} - {wynik2}", center=(WIDTH // 2, HEIGHT // 2 + 30),
                         fontsize=40, color=BIALY)
        screen.draw.text("Naciśnij SPACJĘ, aby zagrać ponownie",
                         center=(WIDTH // 2, HEIGHT // 2 + 80),
                         fontsize=25, color=BIALY)
        return

    if stan_gry == "wygrana2":
        screen.draw.filled_rect(Rect(0, 0, WIDTH, HEIGHT), (80, 0, 0))
        screen.draw.text("🏆 GRACZ 2 WYGRYWA! 🏆", center=(WIDTH // 2, HEIGHT // 2 - 30),
                         fontsize=50, color=CZERWONY)
        screen.draw.text(f"Wynik: {wynik1} - {wynik2}", center=(WIDTH // 2, HEIGHT // 2 + 30),
                         fontsize=40, color=BIALY)
        screen.draw.text("Naciśnij SPACJĘ, aby zagrać ponownie",
                         center=(WIDTH // 2, HEIGHT // 2 + 80),
                         fontsize=25, color=BIALY)
        return

    # === RYSOWANIE GRY ===

    # Linia środkowa
    for i in range(0, HEIGHT, 30):
        screen.draw.filled_rect(
            Rect(WIDTH // 2 - 2, i, 4, 15),
            (50, 50, 50)
        )

    # Wynik
    screen.draw.text(str(wynik1), (WIDTH // 4 - 20, 30),
                     fontsize=80, color=NIEBIESKI)
    screen.draw.text(str(wynik2), (3 * WIDTH // 4 - 20, 30),
                     fontsize=80, color=CZERWONY)

    # Paletki
    screen.draw.filled_rect(paletka1, NIEBIESKI)
    screen.draw.filled_rect(paletka2, CZERWONY)

    # Piłka
    screen.draw.filled_circle((int(pilka_x), int(pilka_y)), PILKA_ROZMIAR, ZOLTY)

    # Instrukcje na dole
    screen.draw.text("W/S", (20, HEIGHT - 30), fontsize=20, color=NIEBIESKI)
    screen.draw.text("↑/↓", (WIDTH - 50, HEIGHT - 30), fontsize=20, color=CZERWONY)

def update():
    """Aktualizuje grę"""
    global pilka_x, pilka_y, pilka_predkosc_x, pilka_predkosc_y
    global wynik1, wynik2, stan_gry

    # Nie aktualizujemy jeśli nie gramy
    if stan_gry != "gra":
        return

    # === STEROWANIE PALETKAMI ===

    # Gracz 1 (W/S)
    if keyboard.w and paletka1.top > 0:
        paletka1.y -= PREDKOSC_PALETKI
    if keyboard.s and paletka1.bottom < HEIGHT:
        paletka1.y += PREDKOSC_PALETKI

    # Gracz 2 (strzałki)
    if keyboard.up and paletka2.top > 0:
        paletka2.y -= PREDKOSC_PALETKI
    if keyboard.down and paletka2.bottom < HEIGHT:
        paletka2.y += PREDKOSC_PALETKI

    # === RUCH PIŁKI ===
    pilka_x += pilka_predkosc_x
    pilka_y += pilka_predkosc_y

    # Odbicie od góry i dołu
    if pilka_y <= PILKA_ROZMIAR:
        pilka_y = PILKA_ROZMIAR
        pilka_predkosc_y *= -1
    if pilka_y >= HEIGHT - PILKA_ROZMIAR:
        pilka_y = HEIGHT - PILKA_ROZMIAR
        pilka_predkosc_y *= -1

    # === KOLIZJE Z PALETKAMI ===
    pilka_rect = Rect(pilka_x - PILKA_ROZMIAR, pilka_y - PILKA_ROZMIAR,
                      PILKA_ROZMIAR * 2, PILKA_ROZMIAR * 2)

    # Odbicie od paletki 1
    if pilka_rect.colliderect(paletka1) and pilka_predkosc_x < 0:
        pilka_predkosc_x *= -1.05  # Lekkie przyspieszenie!
        pilka_x = paletka1.right + PILKA_ROZMIAR
        # Efekt kąta
        roznica = pilka_y - paletka1.centery
        pilka_predkosc_y = roznica * 0.08

    # Odbicie od paletki 2
    if pilka_rect.colliderect(paletka2) and pilka_predkosc_x > 0:
        pilka_predkosc_x *= -1.05
        pilka_x = paletka2.left - PILKA_ROZMIAR
        roznica = pilka_y - paletka2.centery
        pilka_predkosc_y = roznica * 0.08

    # === PUNKTY ===

    # Punkt dla gracza 2
    if pilka_x < -PILKA_ROZMIAR:
        wynik2 += 1
        reset_pilki(-1)

    # Punkt dla gracza 1
    if pilka_x > WIDTH + PILKA_ROZMIAR:
        wynik1 += 1
        reset_pilki(1)

    # === SPRAWDZANIE WYGRANEJ ===
    if wynik1 >= PUNKTY_DO_WYGRANEJ:
        stan_gry = "wygrana1"
    elif wynik2 >= PUNKTY_DO_WYGRANEJ:
        stan_gry = "wygrana2"

def on_key_down(key):
    """Obsługa naciśnięcia klawisza"""
    global stan_gry, wynik1, wynik2

    if key == keys.SPACE:
        if stan_gry == "start":
            stan_gry = "gra"
            reset_pilki(random.choice([-1, 1]))
        elif stan_gry in ["wygrana1", "wygrana2"]:
            # Reset całej gry
            stan_gry = "gra"
            wynik1 = 0
            wynik2 = 0
            paletka1.centery = HEIGHT // 2
            paletka2.centery = HEIGHT // 2
            reset_pilki(random.choice([-1, 1]))

    # Pauza (opcjonalnie)
    if key == keys.ESCAPE and stan_gry == "gra":
        stan_gry = "start"

pgzrun.go()
```

---

## 🎮 Zagraj!

1. **Uruchom grę** (F5 w Thonny)
2. **Naciśnij SPACJĘ** żeby zacząć
3. **Gracz 1:** W (góra), S (dół)
4. **Gracz 2:** ↑ (góra), ↓ (dół)
5. **Pierwszy do 5 punktów wygrywa!**

---

## ⭐ Wyzwania dla chętnych!

### 🌟 Wyzwanie 1: Dźwięki

Dodaj dźwięki przy:

- Odbiciu od paletki
- Zdobyciu punktu
- Wygranej

```python
# W folderze 'sounds' umieść pliki .wav
sounds.hit.play()  # Odbicie
sounds.score.play()  # Punkt
```

### 🌟 Wyzwanie 2: Power-upy

Losowo pojawiające się bonusy:

- 🔵 Większa paletka
- 🔴 Szybsza piłka
- 🟢 Wolniejszy przeciwnik

### 🌟 Wyzwanie 3: AI (komputer)

Dodaj tryb 1-graczowy gdzie komputer steruje paletką 2:

```python
# Prosta AI - paletka podąża za piłką
if pilka_y > paletka2.centery:
    paletka2.y += PREDKOSC_PALETKI * 0.7  # Trochę wolniejszy
elif pilka_y < paletka2.centery:
    paletka2.y -= PREDKOSC_PALETKI * 0.7
```

### 🌟 Wyzwanie 4: Efekty wizualne

- Ślad za piłką
- Animacja przy zdobyciu punktu
- Migające kolory przy wygranej

---

## ✅ Podsumowanie

W tym projekcie bonusowym powtórzyłeś:

| Koncept                       | Gdzie w kodzie?           |
| ----------------------------- | ------------------------- |
| Pygame Zero                   | Cała gra!                 |
| `Rect`                        | Paletki (prostokąty)      |
| `screen.draw.filled_rect()`   | Rysowanie paletek         |
| `screen.draw.filled_circle()` | Rysowanie piłki           |
| `keyboard`                    | Sterowanie                |
| `.colliderect()`              | Kolizje piłka-paletka     |
| Zmienne globalne              | Wynik, pozycja piłki      |
| Stan gry                      | "start", "gra", "wygrana" |
| `on_key_down()`               | Obsługa klawiszy          |
| `random`                      | Losowy kierunek piłki     |

---

## 🎉 Gratulacje - Ukończyłeś Kurs!

Dotarłeś do końca kursu **Python Podstawowy**! 🏆

Przez te 15+ lekcji nauczyłeś się:

- ✅ Podstaw Pythona (zmienne, funkcje, pętle)
- ✅ Logiki programowania (warunki, operatory)
- ✅ Struktur danych (listy, słowniki)
- ✅ Programowania obiektowego (klasy)
- ✅ Pracy z plikami (JSON, tekstowe)
- ✅ Tworzenia gier (Pygame Zero)
- ✅ Debugowania kodu
- ✅ Tworzenia prawdziwych projektów!

**Jesteś teraz prawdziwym programistą!** 🐍💪

---

## 🔮 Co dalej?

Twoja przygoda z programowaniem dopiero się zaczyna! Możesz:

1. **Rozbudowywać projekty** z tego kursu
2. **Tworzyć własne gry** w Pygame Zero
3. **Uczyć się nowych bibliotek** (np. Pygame, Tkinter)
4. **Eksplorować inne języki** (JavaScript, C#)
5. **Dołączyć do społeczności** programistów!

**Powodzenia w dalszej nauce!** 🚀🌟

---

_Pokaż swoją grę Pong znajomym! Kto wygrał? 🏓💬_
