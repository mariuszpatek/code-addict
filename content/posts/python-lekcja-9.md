+++
title = 'Python Podstawowy - Lekcja 9: Klasy i Obiekty - Twój Własny Świat! 🦸‍♂️🐉'
date = 2025-12-13T10:00:00+01:00
draft = false
url = '/python-course/lekcja-9/'
description = 'Dziewiąta lekcja z serii Python Podstawowy. Poznajemy klasy i obiekty - tworzenie własnych typów danych!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'klasy', 'obiekty', 'oop', 'programowanie', 'podstawy', 'rpg']
series = ['Python Podstawowy']
+++

# 🦸‍♂️ Lekcja 9: Klasy i Obiekty - Twój Własny Świat! 🐉

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Cześć Mistrzu Kodu! 👋 W poprzedniej lekcji nauczyliśmy się używać słowników do przechowywania danych o bohaterach. To było super! Ale... co jeśli chcemy, żeby nasz bohater umiał też **robić różne rzeczy**? Na przykład atakować, leczyć się albo zbierać złoto?

Dzisiaj poznamy **Klasy i Obiekty** - sposób, w jaki profesjonalni programiści tworzą gry takie jak Minecraft czy Fortnite! 🎮

<!--more-->

---

## 🔄 Szybka Powtórka - Słowniki

Zanim ruszymy dalej, przypomnijmy sobie słowniki. To bardzo ważne, bo klasy są ich "starszym bratem"!

### Przypomnienie: Bohater jako słownik

```python
# Tak tworzyliśmy bohatera w poprzedniej lekcji
bohater = {
    "imie": "Wojtek",
    "hp": 100,
    "sila": 15,
    "zloto": 50
}

# Odczytywanie danych
print(f"Bohater: {bohater['imie']}")
print(f"Życie: {bohater['hp']}")

# Zmiana danych
bohater["hp"] = 80  # Bohater stracił życie!
bohater["zloto"] = bohater["zloto"] + 10  # Zdobył złoto!
```

**To działa świetnie!** Ale jest jeden problem... 🤔

---

## 🤔 Problem: Słownik nie umie nic robić!

Słownik przechowuje **dane** (imię, HP, złoto), ale nie umie wykonywać **akcji**.

Wyobraź sobie, że chcesz, żeby bohater:

- ⚔️ Atakował potwora
- 💚 Leczył się miksturą
- 💰 Zbierał złoto
- 📢 Przedstawiał się

Musiałbyś pisać osobne funkcje dla każdej akcji:

```python
# To działa, ale jest nieporządne...
def atakuj(bohater, potwor):
    potwor["hp"] = potwor["hp"] - bohater["sila"]

def lecz_sie(bohater, ile):
    bohater["hp"] = bohater["hp"] + ile

def przedstaw_sie(bohater):
    print(f"Jestem {bohater['imie']}!")
```

**Problem:** Funkcje są "na zewnątrz" bohatera. To tak, jakby pilot do telewizora leżał w innym pokoju niż telewizor! 📺🎮

**Rozwiązanie:** Klasy! Połączmy dane i funkcje w jedną całość! 🎉

---

## 🎯 Czego się dzisiaj nauczymy?

- 🏗️ Czym jest **Klasa** - przepis na tworzenie rzeczy
- 🧸 Czym jest **Obiekt** - konkretna rzecz stworzona z przepisu
- 🔧 Jak używać **`__init__`** - automatyczne ustawianie danych
- 🎯 Co to jest **`self`** - wskazanie na "siebie"
- ⚔️ Jak tworzyć **metody** - akcje, które obiekt umie wykonać
- 🎮 Stworzymy **grę Arena Walki**!

---

## 🏗️ Część 1: Czym jest Klasa?

### Klasa = Przepis / Szablon / Foremka 🍪

Wyobraź sobie, że masz **foremkę do ciastek** w kształcie gwiazdki.

- **Foremka** = to jest **Klasa** (przepis)
- **Ciastka** = to są **Obiekty** (konkretne rzeczy stworzone z przepisu)

Z jednej foremki możesz zrobić wiele ciastek. Każde ciastko jest trochę inne (inne kolory lukru), ale wszystkie mają ten sam kształt gwiazdki!

### Pierwszy przykład: Klasa Pies 🐕

```python
# KLASA = przepis na tworzenie psów
class Pies:
    pass  # Na razie pusty przepis
```

**Co tu się dzieje?**

- `class` - słowo kluczowe, które mówi "tworzę nową klasę"
- `Pies` - nazwa klasy (zawsze z **wielkiej litery**!)
- `pass` - oznacza "na razie nic tu nie ma" (pusty przepis)

### Tworzenie obiektów (ciastek!) z klasy

```python
class Pies:
    pass

# Tworzymy DWA psy z tej samej klasy!
moj_pies = Pies()
pies_sasiada = Pies()

print(moj_pies)       # <__main__.Pies object at 0x...>
print(pies_sasiada)   # <__main__.Pies object at 0x...>
```

**Wow!** Stworzyliśmy dwa obiekty typu `Pies`! Ale... są puste. Nie mają imion ani innych cech. Naprawmy to!

---

## 🔧 Część 2: Metoda `__init__` - Automatyczne Ustawianie!

`__init__` (czytamy "init" lub "inicjalizacja") to specjalna metoda, która **uruchamia się automatycznie** gdy tworzysz nowy obiekt.

To jak wypełnianie formularza przy tworzeniu postaci w grze! 📝

### Przykład: Pies z imieniem

```python
class Pies:
    def __init__(self, imie):
        self.imie = imie

# Teraz MUSIMY podać imię przy tworzeniu psa!
moj_pies = Pies("Burek")
pies_sasiada = Pies("Azor")

print(moj_pies.imie)      # Wypisze: Burek
print(pies_sasiada.imie)  # Wypisze: Azor
```

### 🤯 Co to jest `self`?

`self` to **wskazanie na "siebie samego"**.

Wyobraź sobie, że masz dwóch psów: Burka i Azora. Gdy Burek mówi o swoim imieniu, mówi "moje imię" (self.imie). Gdy Azor mówi o swoim imieniu, też mówi "moje imię" - ale to jest JEGO imię, nie Burka!

```python
self.imie = imie
# ↑         ↑
# |         └── To co dostaliśmy jako argument ("Burek")
# └── To zapisujemy wewnątrz obiektu (MOJE imię)
```

### Pies z wieloma cechami

```python
class Pies:
    def __init__(self, imie, wiek, rasa):
        self.imie = imie
        self.wiek = wiek
        self.rasa = rasa

# Tworzymy psy z różnymi cechami
burek = Pies("Burek", 5, "Kundelek")
azor = Pies("Azor", 3, "Owczarek")

print(f"{burek.imie} ma {burek.wiek} lat i jest {burek.rasa}.")
print(f"{azor.imie} ma {azor.wiek} lat i jest {azor.rasa}.")
```

**Wynik:**

```
Burek ma 5 lat i jest Kundelek.
Azor ma 3 lat i jest Owczarek.
```

---

## ⚔️ Część 3: Metody - Akcje Obiektu!

**Metoda** to funkcja, która należy do klasy. To rzeczy, które obiekt **umie robić**!

### Pies, który szczeka! 🐕

```python
class Pies:
    def __init__(self, imie):
        self.imie = imie

    # METODA - akcja którą pies umie robić
    def szczekaj(self):
        print(f"{self.imie} mówi: HAU HAU! 🐕")

# Testujemy
burek = Pies("Burek")
burek.szczekaj()  # Burek mówi: HAU HAU! 🐕

azor = Pies("Azor")
azor.szczekaj()   # Azor mówi: HAU HAU! 🐕
```

**Zauważ:** Każdy pies szczeka i mówi SWOJE imię! To dzięki `self`.

### Pies z wieloma akcjami

```python
class Pies:
    def __init__(self, imie, energia):
        self.imie = imie
        self.energia = energia

    def szczekaj(self):
        print(f"{self.imie}: HAU HAU! 🐕")

    def biegnij(self):
        if self.energia > 0:
            self.energia = self.energia - 10
            print(f"{self.imie} biegnie! Energia: {self.energia}")
        else:
            print(f"{self.imie} jest zmęczony... 😴")

    def jedz(self):
        self.energia = self.energia + 20
        print(f"{self.imie} je! Energia: {self.energia} 🍖")

    def status(self):
        print(f"🐕 {self.imie} - Energia: {self.energia}")

# Testujemy!
burek = Pies("Burek", 50)
burek.status()     # 🐕 Burek - Energia: 50
burek.biegnij()    # Burek biegnie! Energia: 40
burek.biegnij()    # Burek biegnie! Energia: 30
burek.jedz()       # Burek je! Energia: 50 🍖
burek.szczekaj()   # Burek: HAU HAU! 🐕
```

---

## 🎮 Część 4: Klasa Bohater - Łączymy Wszystko!

Teraz stworzymy klasę `Bohater` do naszej gry RPG!

### Prosty Bohater

```python
class Bohater:
    def __init__(self, imie, hp, sila):
        self.imie = imie
        self.hp = hp          # Punkty życia
        self.sila = sila      # Siła ataku
        self.zloto = 0        # Każdy zaczyna bez złota

    def przedstaw_sie(self):
        print(f"⚔️ Jestem {self.imie}!")
        print(f"   ❤️ HP: {self.hp}")
        print(f"   💪 Siła: {self.sila}")
        print(f"   💰 Złoto: {self.zloto}")

    def zbierz_zloto(self, ile):
        self.zloto = self.zloto + ile
        print(f"💰 {self.imie} znalazł {ile} złota! Razem: {self.zloto}")

    def lecz_sie(self, ile):
        self.hp = self.hp + ile
        print(f"💚 {self.imie} wyleczył się o {ile} HP! Teraz ma {self.hp} HP.")

# Tworzymy bohatera
wojtek = Bohater("Wojtek", 100, 15)
wojtek.przedstaw_sie()
```

**Wynik:**

```
⚔️ Jestem Wojtek!
   ❤️ HP: 100
   💪 Siła: 15
   💰 Złoto: 0
```

### Testujemy akcje

```python
wojtek = Bohater("Wojtek", 100, 15)

wojtek.zbierz_zloto(25)   # 💰 Wojtek znalazł 25 złota! Razem: 25
wojtek.zbierz_zloto(10)   # 💰 Wojtek znalazł 10 złota! Razem: 35
wojtek.lecz_sie(20)       # 💚 Wojtek wyleczył się o 20 HP! Teraz ma 120 HP.
wojtek.przedstaw_sie()
```

---

## 🐉 Część 5: Klasa Potwor!

Żeby nasz bohater miał z kim walczyć, stwórzmy potwory!

```python
class Potwor:
    def __init__(self, nazwa, hp, atak):
        self.nazwa = nazwa
        self.hp = hp
        self.atak = atak

    def przedstaw_sie(self):
        print(f"🐉 {self.nazwa} - HP: {self.hp}, Atak: {self.atak}")

    def czy_zyje(self):
        return self.hp > 0

# Tworzymy potwory
goblin = Potwor("Goblin", 30, 5)
ork = Potwor("Ork", 80, 12)
smok = Potwor("Smok", 200, 25)

goblin.przedstaw_sie()  # 🐉 Goblin - HP: 30, Atak: 5
ork.przedstaw_sie()     # 🐉 Ork - HP: 80, Atak: 12
smok.przedstaw_sie()    # 🐉 Smok - HP: 200, Atak: 25
```

---

## ⚔️ Część 6: Walka! Metoda z argumentem

Teraz dodamy możliwość atakowania!

```python
class Bohater:
    def __init__(self, imie, hp, sila):
        self.imie = imie
        self.hp = hp
        self.sila = sila

    def atakuj(self, cel):
        # 'cel' to potwór, którego atakujemy
        print(f"⚔️ {self.imie} atakuje {cel.nazwa}!")
        cel.hp = cel.hp - self.sila
        print(f"   {cel.nazwa} traci {self.sila} HP! Zostało: {cel.hp} HP")

        if cel.hp <= 0:
            print(f"   💀 {cel.nazwa} został pokonany!")

    def otrzymaj_obrazenia(self, ile):
        self.hp = self.hp - ile
        print(f"💔 {self.imie} otrzymał {ile} obrażeń! HP: {self.hp}")


class Potwor:
    def __init__(self, nazwa, hp, atak):
        self.nazwa = nazwa
        self.hp = hp
        self.atak = atak

    def atakuj(self, cel):
        print(f"🐉 {self.nazwa} atakuje {cel.imie}!")
        cel.hp = cel.hp - self.atak
        print(f"   {cel.imie} traci {self.atak} HP! Zostało: {cel.hp} HP")


# WALKA!
print("=" * 40)
print("   ⚔️ ARENA WALKI ⚔️")
print("=" * 40)

wojownik = Bohater("Ragnar", 100, 20)
goblin = Potwor("Zły Goblin", 50, 8)

print(f"\n🦸 Bohater: {wojownik.imie} (HP: {wojownik.hp})")
print(f"🐉 Przeciwnik: {goblin.nazwa} (HP: {goblin.hp})")
print()

# Runda 1
wojownik.atakuj(goblin)
print()

# Runda 2
goblin.atakuj(wojownik)
print()

# Runda 3
wojownik.atakuj(goblin)
print()

# Runda 4
wojownik.atakuj(goblin)
```

**Wynik:**

```
========================================
   ⚔️ ARENA WALKI ⚔️
========================================

🦸 Bohater: Ragnar (HP: 100)
🐉 Przeciwnik: Zły Goblin (HP: 50)

⚔️ Ragnar atakuje Zły Goblin!
   Zły Goblin traci 20 HP! Zostało: 30 HP

🐉 Zły Goblin atakuje Ragnar!
   Ragnar traci 8 HP! Zostało: 92 HP

⚔️ Ragnar atakuje Zły Goblin!
   Zły Goblin traci 20 HP! Zostało: 10 HP

⚔️ Ragnar atakuje Zły Goblin!
   Zły Goblin traci 20 HP! Zostało: -10 HP
   💀 Zły Goblin został pokonany!
```

---

## 🎮 PROJEKT: Gra Arena Walki!

Teraz połączymy wszystko w prawdziwą grę! Stwórz plik `arena_walki.py`:

```python
# 🎮 ARENA WALKI
# Autor: [Twoje Imię]
# Gra turowa - walcz z potworami!

class Bohater:
    def __init__(self, imie, hp, sila):
        self.imie = imie
        self.hp = hp
        self.max_hp = hp  # Zapamiętujemy maksymalne HP
        self.sila = sila
        self.poziom = 1
        self.doswiadczenie = 0

    def status(self):
        print(f"\n🦸 {self.imie} | HP: {self.hp}/{self.max_hp} | Siła: {self.sila} | Poziom: {self.poziom}")

    def atakuj(self, potwor):
        print(f"\n⚔️ {self.imie} atakuje {potwor.nazwa}!")
        potwor.hp = potwor.hp - self.sila
        print(f"   Zadajesz {self.sila} obrażeń!")

        if potwor.hp <= 0:
            potwor.hp = 0
            print(f"   💀 {potwor.nazwa} został pokonany!")
            self.zdobadz_doswiadczenie(potwor.xp)
            return True  # Potwór pokonany
        else:
            print(f"   {potwor.nazwa} ma jeszcze {potwor.hp} HP")
            return False  # Potwór żyje

    def zdobadz_doswiadczenie(self, ile):
        self.doswiadczenie = self.doswiadczenie + ile
        print(f"   ⭐ Zdobyłeś {ile} doświadczenia! (Razem: {self.doswiadczenie})")

        # Awans na wyższy poziom co 50 XP
        if self.doswiadczenie >= self.poziom * 50:
            self.poziom = self.poziom + 1
            self.sila = self.sila + 5
            self.max_hp = self.max_hp + 20
            self.hp = self.max_hp  # Pełne leczenie przy awansie!
            print(f"   🎉 AWANS! Jesteś teraz na poziomie {self.poziom}!")

    def lecz_sie(self):
        leczenie = 30
        self.hp = self.hp + leczenie
        if self.hp > self.max_hp:
            self.hp = self.max_hp
        print(f"💚 Leczysz się! HP: {self.hp}/{self.max_hp}")

    def czy_zyje(self):
        return self.hp > 0


class Potwor:
    def __init__(self, nazwa, hp, atak, xp):
        self.nazwa = nazwa
        self.hp = hp
        self.atak = atak
        self.xp = xp  # Doświadczenie za pokonanie

    def status(self):
        print(f"🐉 {self.nazwa} | HP: {self.hp} | Atak: {self.atak}")

    def atakuj(self, bohater):
        print(f"\n🐉 {self.nazwa} atakuje!")
        bohater.hp = bohater.hp - self.atak
        print(f"   Otrzymujesz {self.atak} obrażeń! Twoje HP: {bohater.hp}")

        if bohater.hp <= 0:
            bohater.hp = 0
            return True  # Bohater pokonany
        return False


# ========== GRA ==========

print("=" * 50)
print("        ⚔️ WITAJ W ARENIE WALKI! ⚔️")
print("=" * 50)

# Tworzenie bohatera
imie = input("\n🦸 Jak nazywa się Twój bohater? ")
gracz = Bohater(imie, 100, 15)

print(f"\n✅ Stworzono bohatera: {gracz.imie}!")
gracz.status()

# Lista potworów do pokonania
potwory = [
    Potwor("Goblin", 40, 8, 20),
    Potwor("Ork", 70, 12, 35),
    Potwor("Troll", 100, 15, 50),
]

input("\n⏎ Naciśnij ENTER, aby rozpocząć walkę...")

# Główna pętla gry
for potwor in potwory:
    print("\n" + "=" * 50)
    print(f"   🆚 Nowy przeciwnik: {potwor.nazwa}!")
    print("=" * 50)
    potwor.status()

    # Walka z jednym potworem
    while potwor.hp > 0 and gracz.hp > 0:
        gracz.status()

        print("\n📋 Co robisz?")
        print("   1. ⚔️ Atakuj")
        print("   2. 💚 Lecz się")

        wybor = input("Wybierz (1 lub 2): ")

        if wybor == "1":
            pokonany = gracz.atakuj(potwor)
            if pokonany:
                break  # Potwór pokonany, następny przeciwnik
        elif wybor == "2":
            gracz.lecz_sie()
        else:
            print("❌ Nieznana komenda! Tracisz turę...")

        # Potwór kontratakuje (jeśli żyje)
        if potwor.hp > 0:
            przegrana = potwor.atakuj(gracz)
            if przegrana:
                print("\n💀 Zostałeś pokonany...")
                print("🎮 KONIEC GRY")
                break

    # Sprawdzamy czy gracz przegrał
    if not gracz.czy_zyje():
        break

# Zwycięstwo!
if gracz.czy_zyje():
    print("\n" + "=" * 50)
    print("   🏆 GRATULACJE! WYGRAŁEŚ! 🏆")
    print("=" * 50)
    gracz.status()
    print("\n🎉 Pokonałeś wszystkie potwory w arenie!")
```

### 🎮 Uruchom grę i zagraj!

1. Zapisz kod jako `arena_walki.py`
2. Uruchom w Thonny (F5)
3. Podaj imię bohatera i walcz!

---

## 🧠 Podsumowanie

| Koncept        | Opis                                   | Przykład                    |
| -------------- | -------------------------------------- | --------------------------- |
| **Klasa**      | Przepis/szablon na tworzenie obiektów  | `class Pies:`               |
| **Obiekt**     | Konkretna rzecz stworzona z klasy      | `burek = Pies("Burek")`     |
| **`__init__`** | Automatyczne ustawianie przy tworzeniu | `def __init__(self, imie):` |
| **`self`**     | Wskazanie na "siebie"                  | `self.imie = imie`          |
| **Metoda**     | Funkcja należąca do klasy              | `def szczekaj(self):`       |
| **Atrybut**    | Dane przechowywane w obiekcie          | `self.hp`, `self.imie`      |

### 📊 Klasa vs Słownik

| Słownik                     | Klasa                    |
| --------------------------- | ------------------------ |
| Przechowuje tylko dane      | Przechowuje dane I akcje |
| `bohater["hp"]`             | `bohater.hp`             |
| Funkcje są "na zewnątrz"    | Metody są "wewnątrz"     |
| Prostsze, dobre na początek | Bardziej uporządkowane   |

---

## 🎓 Częste Błędy i Jak Ich Unikać

### ❌ Błąd 1: Zapomnienie o `self`

```python
# ❌ Źle - brak self
class Pies:
    def __init__(imie):
        imie = imie

# ✅ Dobrze - self na pierwszym miejscu
class Pies:
    def __init__(self, imie):
        self.imie = imie
```

### ❌ Błąd 2: Zapomnienie o `self.` przy zapisywaniu

```python
# ❌ Źle - imie zniknie po zakończeniu __init__
class Pies:
    def __init__(self, imie):
        imie = imie  # To nic nie zapisuje!

# ✅ Dobrze - zapisujemy do self
class Pies:
    def __init__(self, imie):
        self.imie = imie  # Teraz obiekt "pamięta" imię
```

### ❌ Błąd 3: Zapomnienie o nawiasach przy tworzeniu obiektu

```python
# ❌ Źle - bez nawiasów to tylko klasa, nie obiekt!
burek = Pies

# ✅ Dobrze - nawiasy tworzą obiekt
burek = Pies("Burek")
```

### ❌ Błąd 4: Nazwa klasy z małej litery

```python
# ❌ Źle - klasy piszemy z WIELKIEJ litery
class pies:
    pass

# ✅ Dobrze - wielka litera
class Pies:
    pass
```

---

## 📝 Zadanie domowe

Wybierz jedno lub więcej wyzwań:

### 🟢 Łatwe: Klasa Kot 🐱

Stwórz klasę `Kot` z:

- Atrybutami: `imie`, `wiek`, `kolor`
- Metodą `miaucz()` - wypisuje "[imie]: Miau!"
- Metodą `przedstaw_sie()` - wypisuje wszystkie dane kota

```python
# Podpowiedź:
class Kot:
    def __init__(self, imie, wiek, kolor):
        # Tu zapisz atrybuty
        pass

    def miaucz(self):
        # Tu wypisz miauk
        pass
```

### 🟡 Średnie: Klasa Samochod 🚗

Stwórz klasę `Samochod` z:

- Atrybutami: `marka`, `predkosc` (zaczyna od 0)
- Metodą `przyspiesz(ile)` - zwiększa prędkość
- Metodą `hamuj(ile)` - zmniejsza prędkość (nie może być ujemna!)
- Metodą `status()` - wypisuje markę i prędkość

### 🔴 Trudne: Rozbuduj Arenę Walki!

Dodaj do gry:

- Sklep, gdzie można kupić mikstury za złoto
- Złoto za pokonanie potworów
- Więcej typów potworów (np. Boss na końcu!)

### 🟣 Super Wyzwanie: Klasa Różdżka Magiczna 🪄

Stwórz klasę `Rozdzka` z:

- Atrybutem `mana` (energia magiczna)
- Metodą `rzuc_zaklecie(nazwa_zaklecia)` - zużywa manę i wypisuje efekt
- Metodą `naladuj()` - zwiększa manę
- Różne zaklęcia kosztują różną ilość many!

---

## 🚀 Co dalej?

W tej lekcji nauczyłeś się:

- ✅ Tworzyć klasy - szablony na obiekty
- ✅ Tworzyć obiekty z klas
- ✅ Używać `__init__` i `self`
- ✅ Pisać metody - akcje obiektów
- ✅ Łączyć obiekty w grze (bohater atakuje potwora)

To fundamenty **Programowania Obiektowego (OOP)** - stylu programowania używanego w profesjonalnych grach i aplikacjach!

**Gratulacje! 🎉 Ukończyłeś Lekcję 9!**

---

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**
