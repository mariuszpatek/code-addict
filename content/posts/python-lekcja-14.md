+++
title = 'Python Podstawowy - Lekcja 14: Wirtualny Zwierzak cz.1 🐱🐶'
date = 2026-02-08T10:00:00+01:00
draft = false
url = '/python-course/lekcja-14/'
description = 'Czternasta lekcja z serii Python Podstawowy. Zaczynamy tworzyć Wirtualnego Zwierzaka używając klas i obiektów!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'projekt', 'klasy', 'obiekty', 'oop', 'tamagotchi', 'programowanie']
series = ['Python Podstawowy']
+++

# 🐱 Lekcja 14: Wirtualny Zwierzak - Część 1 🐶

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Witaj, opiekunie wirtualnych stworzeń! 🚀 Pamiętasz Tamagotchi? Te małe elektroniczne zwierzątka, o które trzeba było dbać? Dzisiaj stworzymy własną wersję w Pythonie!

Ten projekt pomoże Ci powtórzyć **klasy i obiekty** - jedne z najważniejszych koncepcji w programowaniu! 🧠

<!--more-->

---

## 📋 Co dziś powtórzymy?

| Koncept        | Lekcja     | Jak użyjemy?                      |
| -------------- | ---------- | --------------------------------- |
| Klasy `class`  | Lekcja 9   | Stworzenie klasy Zwierzak         |
| `__init__()`   | Lekcja 9   | Konstruktor - tworzenie zwierzaka |
| `self`         | Lekcja 9   | Odwoływanie się do atrybutów      |
| Metody         | Lekcja 9   | Akcje: karm, baw się, śpij        |
| Atrybuty       | Lekcja 9   | Stan: głód, energia, szczęście    |
| Pętla `while`  | Lekcja 4   | Główna pętla gry                  |
| `if/elif/else` | Lekcja 3-4 | Logika stanów zwierzaka           |

---

## 🎯 Cel projektu (Część 1)

W tej lekcji stworzymy:

1. 🐾 Klasę `Zwierzak` z atrybutami (głód, energia, szczęście)
2. 🍖 Metodę `nakarm()` - zmniejsza głód
3. 🎾 Metodę `baw_sie()` - zwiększa szczęście
4. 😴 Metodę `spij()` - regeneruje energię
5. 📊 Metodę `pokaz_status()` - wyświetla stan zwierzaka
6. 🎮 Prostą pętlę gry z menu

---

## 👥 Praca w parach

| Osoba A                                  | Osoba B                                  |
| ---------------------------------------- | ---------------------------------------- |
| Pisze klasę `Zwierzak` z `__init__`      | Pisze metody `nakarm()` i `baw_sie()`    |
| Pisze metody `spij()` i `pokaz_status()` | Pisze główną pętlę gry z menu            |
| Razem: łączycie i testujecie!            | Razem: dodajecie emotikony i ulepszenia! |

---

## 🧠 Przypomnienie: Klasy i Obiekty

**Klasa** to "przepis" lub "szablon" na tworzenie obiektów.  
**Obiekt** to konkretny egzemplarz stworzony według przepisu.

```python
# Klasa = przepis na psa
class Pies:
    def __init__(self, imie):
        self.imie = imie
        self.wiek = 0

    def szczekaj(self):
        print(f"{self.imie}: Hau hau! 🐕")

# Obiekty = konkretne psy
burek = Pies("Burek")
reksio = Pies("Reksio")

burek.szczekaj()   # Burek: Hau hau! 🐕
reksio.szczekaj()  # Reksio: Hau hau! 🐕
```

**`self`** to "ja sam" - sposób, w jaki obiekt mówi o sobie.

---

## 🚀 Zaczynamy kodować!

### Krok 1: Podstawowa klasa Zwierzak

Stwórz nowy plik `wirtualny_zwierzak.py`:

```python
# 🐱 WIRTUALNY ZWIERZAK
# Autor: [Twoje Imię]
# Projekt powtórkowy - Lekcja 14-15

class Zwierzak:
    """Klasa reprezentująca wirtualnego zwierzaka"""

    def __init__(self, imie, gatunek="kot"):
        """Tworzy nowego zwierzaka"""
        self.imie = imie
        self.gatunek = gatunek

        # Statystyki zwierzaka (0-100)
        self.glod = 50       # 0 = najedzony, 100 = bardzo głodny
        self.energia = 50    # 0 = wyczerpany, 100 = pełen energii
        self.szczescie = 50  # 0 = smutny, 100 = bardzo szczęśliwy

        # Czy zwierzak żyje?
        self.zyje = True

    def __str__(self):
        """Jak wyświetlić zwierzaka jako tekst"""
        return f"{self.imie} ({self.gatunek})"

# === TEST ===
moj_zwierzak = Zwierzak("Mruczek", "kot")
print(f"Stworzono zwierzaka: {moj_zwierzak}")
print(f"Głód: {moj_zwierzak.glod}")
print(f"Energia: {moj_zwierzak.energia}")
print(f"Szczęście: {moj_zwierzak.szczescie}")
```

**Uruchom!** Zobaczysz podstawowe informacje o zwierzaku! 🐱

---

### Krok 2: Metoda wyświetlania statusu

Dodaj tę metodę do klasy `Zwierzak` (przed testem):

```python
    def pokaz_status(self):
        """Wyświetla aktualny stan zwierzaka"""
        # Wybieramy emotikon w zależności od gatunku
        if self.gatunek == "kot":
            emoji = "🐱"
        elif self.gatunek == "pies":
            emoji = "🐶"
        elif self.gatunek == "chomik":
            emoji = "🐹"
        elif self.gatunek == "królik":
            emoji = "🐰"
        else:
            emoji = "🐾"

        print()
        print(f"{'=' * 40}")
        print(f"{emoji} {self.imie.upper()} ({self.gatunek}) {emoji}")
        print(f"{'=' * 40}")

        # Pasek głodu
        glod_pasek = self._rysuj_pasek(100 - self.glod)  # Odwracamy, bo 0 = najedzony
        glod_emoji = "😋" if self.glod < 30 else "😐" if self.glod < 70 else "😫"
        print(f"🍖 Najedzenie: {glod_pasek} {glod_emoji}")

        # Pasek energii
        energia_pasek = self._rysuj_pasek(self.energia)
        energia_emoji = "⚡" if self.energia > 70 else "😊" if self.energia > 30 else "😴"
        print(f"💤 Energia:    {energia_pasek} {energia_emoji}")

        # Pasek szczęścia
        szczescie_pasek = self._rysuj_pasek(self.szczescie)
        szczescie_emoji = "😄" if self.szczescie > 70 else "🙂" if self.szczescie > 30 else "😢"
        print(f"💖 Szczęście:  {szczescie_pasek} {szczescie_emoji}")

        print(f"{'=' * 40}")

        # Komentarz o stanie zwierzaka
        self._komentarz_stanu()

    def _rysuj_pasek(self, wartosc):
        """Rysuje pasek postępu"""
        dlugosc = 20
        wypelnione = int(wartosc / 100 * dlugosc)
        puste = dlugosc - wypelnione
        return f"[{'█' * wypelnione}{'░' * puste}] {wartosc}%"

    def _komentarz_stanu(self):
        """Wyświetla komentarz o stanie zwierzaka"""
        if self.glod > 80:
            print(f"💭 {self.imie}: Jestem BARDZO głodny! Nakarm mnie!")
        elif self.energia < 20:
            print(f"💭 {self.imie}: Padam ze zmęczenia...")
        elif self.szczescie < 20:
            print(f"💭 {self.imie}: Jest mi smutno... Pobaw się ze mną!")
        elif self.szczescie > 80 and self.glod < 30:
            print(f"💭 {self.imie}: Jestem szczęśliwy! 💕")
        else:
            print(f"💭 {self.imie}: Wszystko w porządku!")
```

**Zaktualizuj test:**

```python
# === TEST ===
moj_zwierzak = Zwierzak("Mruczek", "kot")
moj_zwierzak.pokaz_status()
```

**Uruchom!** Zobaczysz ładny, kolorowy status zwierzaka! 🎨

---

### Krok 3: Metody akcji

Dodaj metody pozwalające opiekować się zwierzakiem:

```python
    def nakarm(self):
        """Karmi zwierzaka"""
        if self.glod <= 0:
            print(f"\n🍖 {self.imie} nie jest głodny!")
            return False

        # Zmniejszamy głód
        self.glod -= 30
        if self.glod < 0:
            self.glod = 0

        # Jedzenie daje trochę szczęścia
        self.szczescie += 5
        if self.szczescie > 100:
            self.szczescie = 100

        # Ale zużywa trochę energii (trawienie!)
        self.energia -= 5
        if self.energia < 0:
            self.energia = 0

        print(f"\n🍖 Nakarmiono {self.imie}! Mniam mniam!")
        return True

    def baw_sie(self):
        """Bawi się ze zwierzakiem"""
        if self.energia < 20:
            print(f"\n🎾 {self.imie} jest zbyt zmęczony, żeby się bawić!")
            return False

        # Zwiększamy szczęście
        self.szczescie += 25
        if self.szczescie > 100:
            self.szczescie = 100

        # Ale zużywa energię
        self.energia -= 20
        if self.energia < 0:
            self.energia = 0

        # I powoduje głód
        self.glod += 10
        if self.glod > 100:
            self.glod = 100

        print(f"\n🎾 Bawisz się z {self.imie}! Jakie to fajne!")
        return True

    def spij(self):
        """Kładzie zwierzaka spać"""
        if self.energia >= 100:
            print(f"\n😴 {self.imie} nie jest zmęczony!")
            return False

        # Regenerujemy energię
        self.energia += 40
        if self.energia > 100:
            self.energia = 100

        # Sen zwiększa głód
        self.glod += 15
        if self.glod > 100:
            self.glod = 100

        # I trochę zmniejsza szczęście (nuda!)
        self.szczescie -= 5
        if self.szczescie < 0:
            self.szczescie = 0

        print(f"\n😴 {self.imie} śpi... Zzz...")
        return True
```

**Zaktualizuj test:**

```python
# === TEST ===
moj_zwierzak = Zwierzak("Mruczek", "kot")
moj_zwierzak.pokaz_status()

print("\n--- Testujemy akcje ---")
moj_zwierzak.nakarm()
moj_zwierzak.pokaz_status()

moj_zwierzak.baw_sie()
moj_zwierzak.pokaz_status()
```

---

### Krok 4: Upływ czasu

Dodaj metodę symulującą upływ czasu:

```python
    def aktualizuj(self):
        """Symuluje upływ czasu - zwierzak robi się głodny i zmęczony"""
        if not self.zyje:
            return

        # Z czasem zwierzak robi się głodny
        self.glod += 5

        # I traci energię
        self.energia -= 3

        # I szczęście spada
        self.szczescie -= 3

        # Pilnujemy, żeby wartości były w zakresie 0-100
        self.glod = min(100, max(0, self.glod))
        self.energia = min(100, max(0, self.energia))
        self.szczescie = min(100, max(0, self.szczescie))

        # Sprawdzamy, czy zwierzak przeżył
        self._sprawdz_stan()

    def _sprawdz_stan(self):
        """Sprawdza, czy zwierzak jest zdrowy"""
        if self.glod >= 100:
            print(f"\n💀 Oh nie! {self.imie} umarł z głodu! 😢")
            self.zyje = False
        elif self.energia <= 0 and self.glod >= 80:
            print(f"\n💀 {self.imie} jest zbyt wyczerpany i głodny... 😢")
            self.zyje = False
```

---

### Krok 5: Główna pętla gry

Teraz połączymy wszystko w grę! Dodaj na końcu pliku (zamiast testów):

```python
# === FUNKCJE GRY ===

import os
import time

def wyczysc_ekran():
    """Czyści ekran"""
    os.system('cls')  # Windows
    # os.system('clear')  # Mac/Linux

def pokaz_menu():
    """Wyświetla menu akcji"""
    print("\n📋 CO CHCESZ ZROBIĆ?")
    print("-" * 30)
    print("  1. 🍖 Nakarm zwierzaka")
    print("  2. 🎾 Pobaw się")
    print("  3. 😴 Połóż spać")
    print("  4. 📊 Sprawdź status")
    print("-" * 30)
    print("  0. 🚪 Wyjdź z gry")
    print()

    return input("Wybierz (0-4): ")

def stworz_zwierzaka():
    """Tworzy nowego zwierzaka"""
    wyczysc_ekran()
    print("=" * 40)
    print("🐾 WITAJ W GRZE WIRTUALNY ZWIERZAK! 🐾")
    print("=" * 40)
    print()
    print("Najpierw stwórzmy Twojego zwierzaka!")
    print()

    # Wybór gatunku
    print("Wybierz gatunek:")
    print("  1. 🐱 Kot")
    print("  2. 🐶 Pies")
    print("  3. 🐹 Chomik")
    print("  4. 🐰 Królik")
    print()

    wybor = input("Twój wybór (1-4): ")

    gatunki = {
        "1": "kot",
        "2": "pies",
        "3": "chomik",
        "4": "królik"
    }

    gatunek = gatunki.get(wybor, "kot")

    print()
    imie = input(f"Jak nazwiesz swojego {gatunek}a? ")

    if imie.strip() == "":
        imie = "Puszek"

    zwierzak = Zwierzak(imie.strip(), gatunek)

    print()
    print(f"🎉 Świetnie! Oto Twój nowy przyjaciel: {zwierzak}!")
    input("\nNaciśnij ENTER, aby rozpocząć grę...")

    return zwierzak

# === GŁÓWNA GRA ===

def graj():
    """Główna funkcja gry"""
    zwierzak = stworz_zwierzaka()
    tura = 0

    while zwierzak.zyje:
        wyczysc_ekran()

        print(f"🕐 Tura: {tura}")
        zwierzak.pokaz_status()

        wybor = pokaz_menu()

        if wybor == "0":
            print(f"\n👋 Do widzenia! {zwierzak.imie} będzie za Tobą tęsknić!")
            break
        elif wybor == "1":
            zwierzak.nakarm()
            tura += 1
            zwierzak.aktualizuj()
        elif wybor == "2":
            zwierzak.baw_sie()
            tura += 1
            zwierzak.aktualizuj()
        elif wybor == "3":
            zwierzak.spij()
            tura += 1
            zwierzak.aktualizuj()
        elif wybor == "4":
            # Status już jest wyświetlony, nic nie robimy
            pass
        else:
            print("\n❓ Nieznana opcja!")

        if zwierzak.zyje:
            input("\nNaciśnij ENTER...")

    # Koniec gry
    if not zwierzak.zyje:
        print()
        print("=" * 40)
        print("💔 KONIEC GRY 💔")
        print(f"Przetrwałeś {tura} tur.")
        print("=" * 40)
        input("\nNaciśnij ENTER...")

# Start gry!
if __name__ == "__main__":
    graj()
```

**Uruchom!** 🎮 Masz działającą grę Wirtualny Zwierzak!

---

## ⭐ Wyzwania dla chętnych!

### 🌟 Wyzwanie 1: Więcej akcji

Dodaj nowe metody, np.:

- `przytul()` - zwiększa szczęście
- `spacer()` - dla psa, zużywa dużo energii ale daje dużo szczęścia
- `poczestuj_przysmak()` - bardzo zmniejsza głód

### 🌟 Wyzwanie 2: Losowe wydarzenia

Dodaj losowe zdarzenia, np.:

```python
import random
if random.random() < 0.2:  # 20% szans
    print("🦋 Twój zwierzak złapał motyla! +10 szczęścia!")
```

### 🌟 Wyzwanie 3: Wiek zwierzaka

Dodaj atrybut `wiek`, który rośnie co kilka tur.

---

## ✅ Podsumowanie - Co powtórzyliśmy?

| Koncept             | Gdzie w kodzie?                     |
| ------------------- | ----------------------------------- |
| `class`             | `class Zwierzak:`                   |
| `__init__()`        | Konstruktor tworzący zwierzaka      |
| `self`              | Dostęp do atrybutów obiektu         |
| Atrybuty            | `self.glod`, `self.energia`, itd.   |
| Metody              | `nakarm()`, `baw_sie()`, `spij()`   |
| `__str__()`         | Reprezentacja tekstowa obiektu      |
| Metody prywatne `_` | `_rysuj_pasek()`, `_sprawdz_stan()` |
| `min()` / `max()`   | Ograniczanie wartości do zakresu    |
| Słowniki            | Mapowanie wyboru na gatunek         |
| `.get()`            | Bezpieczny dostęp do słownika       |

---

## 📝 Zadanie domowe

1. **Zagraj** przez kilka tur - ile tur przeżyjesz? 🎮
2. **Przetestuj** różne strategie - co jest najważniejsze?
3. **Dodaj jedną nową metodę** (np. `przytul()`)
4. **Stwórz drugiego zwierzaka** o innym gatunku i imieniu

---

## 🔮 Co dalej?

W **Części 2** dodamy:

- 💾 Zapis i wczytywanie zwierzaka z pliku JSON
- ⏰ Czas rzeczywisty - zwierzak "żyje" gdy program jest wyłączony!
- 🏆 System poziomów i doświadczenia

**[→ Przejdź do Lekcji 15: Wirtualny Zwierzak cz.2](/python-course/lekcja-15/)**

---

_Pokaż swojego wirtualnego zwierzaka w komentarzu! Jak go nazwałeś?_ 💬🐾
