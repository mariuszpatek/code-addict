+++
title = 'Python Podstawowy - Lekcja 15: Wirtualny Zwierzak cz.2 - Zapis i Poziomy! 💾🏆'
date = 2026-02-15T10:00:00+01:00
draft = false
url = '/python-course/lekcja-15/'
description = 'Piętnasta lekcja z serii Python Podstawowy. Kończymy Wirtualnego Zwierzaka - zapis do JSON, czas rzeczywisty i poziomy!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'projekt', 'klasy', 'json', 'datetime', 'oop', 'programowanie']
series = ['Python Podstawowy']
+++

# 🐱 Lekcja 15: Wirtualny Zwierzak - Część 2 💾🏆

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Witaj ponownie, opiekunie! 🚀 W poprzedniej lekcji stworzyliśmy podstawową wersję gry Wirtualny Zwierzak. Ale był problem - po zamknięciu programu Twój zwierzak znikał! 😱

Dzisiaj to naprawimy! Dodamy:

- 💾 Zapis i wczytywanie zwierzaka z pliku JSON
- ⏰ Czas rzeczywisty - zwierzak "żyje" nawet gdy program jest wyłączony!
- 🏆 System doświadczenia i poziomów

<!--more-->

---

## 📋 Co dziś powtórzymy?

| Koncept      | Lekcja       | Jak użyjemy?                 |
| ------------ | ------------ | ---------------------------- |
| JSON         | Lekcja 8, 13 | Zapis/odczyt stanu zwierzaka |
| `datetime`   | Nowe!        | Obliczanie upływu czasu      |
| Słowniki     | Lekcja 8     | Konwersja obiektu na dane    |
| `try/except` | Lekcja 13    | Obsługa błędów               |
| Klasy        | Lekcja 9, 14 | Rozszerzenie klasy Zwierzak  |

---

## 🎯 Cel projektu (Część 2)

W tej lekcji dodamy:

1. 💾 Metodę `zapisz()` - zapisuje zwierzaka do pliku JSON
2. 📂 Metodę `wczytaj()` - wczytuje zwierzaka z pliku
3. ⏰ System czasu rzeczywistego - zwierzak głodnieje nawet gdy nie grasz!
4. 🏆 System doświadczenia (XP) i poziomów
5. ✨ Nowe akcje zależne od poziomu

---

## 👥 Praca w parach

| Osoba A                               | Osoba B                          |
| ------------------------------------- | -------------------------------- |
| Pisze metody `zapisz()` i `wczytaj()` | Pisze system czasu rzeczywistego |
| Pisze system XP i poziomów            | Rozszerza menu o nowe opcje      |
| Razem: testujecie pełny przepływ!     | Razem: szukacie błędów!          |

---

## 🚀 Kontynuujemy kodowanie!

Otwórz plik `wirtualny_zwierzak.py` z poprzedniej lekcji.

### Krok 1: Dodajemy nowe importy

Na górze pliku dodaj:

```python
# 🐱 WIRTUALNY ZWIERZAK - Wersja Kompletna
# Autor: [Twoje Imię]
# Projekt powtórkowy - Lekcja 14-15

import os
import json
import time
from datetime import datetime
```

### Krok 2: Stałe i plik zapisu

Dodaj po importach:

```python
# === STAŁE ===
PLIK_ZAPISU = "zwierzak_save.json"
MINUTY_NA_TURE = 10  # Co 10 minut "mija" jedna tura gdy program jest wyłączony
```

---

### Krok 3: Rozszerzamy klasę Zwierzak

Zaktualizuj metodę `__init__()` o nowe atrybuty:

```python
class Zwierzak:
    """Klasa reprezentująca wirtualnego zwierzaka"""

    def __init__(self, imie, gatunek="kot"):
        """Tworzy nowego zwierzaka"""
        self.imie = imie
        self.gatunek = gatunek

        # Statystyki zwierzaka (0-100)
        self.glod = 50
        self.energia = 50
        self.szczescie = 50

        # NOWE! System poziomów
        self.poziom = 1
        self.xp = 0
        self.xp_do_nastepnego = 100  # XP potrzebne do następnego poziomu

        # NOWE! Czas
        self.ostatnia_aktualizacja = datetime.now().isoformat()

        # Czy zwierzak żyje?
        self.zyje = True
```

---

### Krok 4: Metoda konwersji do słownika

Dodaj metodę, która zamienia obiekt na słownik (potrzebne do zapisu JSON):

```python
    def do_slownika(self):
        """Konwertuje zwierzaka na słownik (do zapisu JSON)"""
        return {
            "imie": self.imie,
            "gatunek": self.gatunek,
            "glod": self.glod,
            "energia": self.energia,
            "szczescie": self.szczescie,
            "poziom": self.poziom,
            "xp": self.xp,
            "xp_do_nastepnego": self.xp_do_nastepnego,
            "ostatnia_aktualizacja": datetime.now().isoformat(),
            "zyje": self.zyje
        }

    @classmethod
    def ze_slownika(cls, dane):
        """Tworzy zwierzaka ze słownika (odczyt z JSON)"""
        zwierzak = cls(dane["imie"], dane["gatunek"])
        zwierzak.glod = dane["glod"]
        zwierzak.energia = dane["energia"]
        zwierzak.szczescie = dane["szczescie"]
        zwierzak.poziom = dane.get("poziom", 1)
        zwierzak.xp = dane.get("xp", 0)
        zwierzak.xp_do_nastepnego = dane.get("xp_do_nastepnego", 100)
        zwierzak.ostatnia_aktualizacja = dane.get("ostatnia_aktualizacja",
                                                   datetime.now().isoformat())
        zwierzak.zyje = dane.get("zyje", True)
        return zwierzak
```

**Wyjaśnienie `@classmethod`:**

- To specjalna metoda, która działa na całej klasie, nie na konkretnym obiekcie
- Pozwala nam stworzyć zwierzaka z danych ze słownika
- `cls` to klasa `Zwierzak` (podobnie jak `self` to konkretny obiekt)

---

### Krok 5: Zapis i odczyt

Dodaj funkcje zapisu i odczytu (poza klasą, na dole pliku):

```python
# === FUNKCJE ZAPISU ===

def zapisz_zwierzaka(zwierzak):
    """Zapisuje zwierzaka do pliku JSON"""
    try:
        with open(PLIK_ZAPISU, "w", encoding="utf-8") as plik:
            json.dump(zwierzak.do_slownika(), plik, indent=4, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"❌ Błąd zapisu: {e}")
        return False

def wczytaj_zwierzaka():
    """Wczytuje zwierzaka z pliku JSON"""
    if not os.path.exists(PLIK_ZAPISU):
        return None

    try:
        with open(PLIK_ZAPISU, "r", encoding="utf-8") as plik:
            dane = json.load(plik)
        zwierzak = Zwierzak.ze_slownika(dane)
        return zwierzak
    except Exception as e:
        print(f"⚠️ Błąd odczytu: {e}")
        return None

def usun_zapis():
    """Usuwa plik zapisu (gdy zwierzak umiera)"""
    if os.path.exists(PLIK_ZAPISU):
        os.remove(PLIK_ZAPISU)
```

---

### Krok 6: System czasu rzeczywistego

Dodaj metodę do klasy `Zwierzak`, która oblicza, ile czasu minęło:

```python
    def aktualizuj_po_czasie(self):
        """Aktualizuje stan zwierzaka na podstawie upływu czasu rzeczywistego"""
        if not self.zyje:
            return

        # Parsujemy datę ostatniej aktualizacji
        try:
            ostatnio = datetime.fromisoformat(self.ostatnia_aktualizacja)
        except:
            ostatnio = datetime.now()

        teraz = datetime.now()

        # Obliczamy różnicę w minutach
        roznica = teraz - ostatnio
        minuty = roznica.total_seconds() / 60

        # Ile "tur" minęło?
        tury = int(minuty / MINUTY_NA_TURE)

        if tury > 0:
            print(f"\n⏰ Minęło {tury} tur od ostatniej wizyty!")

            # Ograniczamy do max 50 tur (żeby zwierzak nie umarł od razu)
            tury = min(tury, 50)

            # Aplikujemy efekty upływu czasu
            for _ in range(tury):
                if not self.zyje:
                    break

                # Zwierzak głodnieje wolniej gdy śpi
                self.glod += 3
                self.energia -= 2
                self.szczescie -= 2

                self._sprawdz_wartosci()
                self._sprawdz_stan()

            if self.zyje:
                print(f"🐾 {self.imie} tęsknił za Tobą!")

        # Aktualizujemy czas
        self.ostatnia_aktualizacja = datetime.now().isoformat()

    def _sprawdz_wartosci(self):
        """Pilnuje, żeby wartości były w zakresie 0-100"""
        self.glod = min(100, max(0, self.glod))
        self.energia = min(100, max(0, self.energia))
        self.szczescie = min(100, max(0, self.szczescie))
```

---

### Krok 7: System XP i poziomów

Dodaj metody do klasy `Zwierzak`:

```python
    def dodaj_xp(self, ile):
        """Dodaje punkty doświadczenia"""
        self.xp += ile
        print(f"✨ +{ile} XP!")

        # Sprawdzamy, czy awansowaliśmy
        while self.xp >= self.xp_do_nastepnego:
            self.xp -= self.xp_do_nastepnego
            self.poziom += 1
            self.xp_do_nastepnego = int(self.xp_do_nastepnego * 1.5)

            print(f"\n🎉🎉🎉 NOWY POZIOM! 🎉🎉🎉")
            print(f"🏆 {self.imie} jest teraz na poziomie {self.poziom}!")

            # Bonus za awans
            self.szczescie = 100
            self.energia = min(100, self.energia + 20)
```

Zmodyfikuj metody akcji, żeby dawały XP:

```python
    def nakarm(self):
        """Karmi zwierzaka"""
        if self.glod <= 0:
            print(f"\n🍖 {self.imie} nie jest głodny!")
            return False

        self.glod -= 30
        if self.glod < 0:
            self.glod = 0

        self.szczescie += 5
        if self.szczescie > 100:
            self.szczescie = 100

        self.energia -= 5
        if self.energia < 0:
            self.energia = 0

        print(f"\n🍖 Nakarmiono {self.imie}! Mniam mniam!")
        self.dodaj_xp(10)  # NOWE! XP za karmienie
        return True

    def baw_sie(self):
        """Bawi się ze zwierzakiem"""
        if self.energia < 20:
            print(f"\n🎾 {self.imie} jest zbyt zmęczony!")
            return False

        # Bonus za wysoki poziom!
        bonus_szczescia = 25 + (self.poziom * 2)

        self.szczescie += bonus_szczescia
        if self.szczescie > 100:
            self.szczescie = 100

        self.energia -= 20
        if self.energia < 0:
            self.energia = 0

        self.glod += 10
        if self.glod > 100:
            self.glod = 100

        print(f"\n🎾 Bawisz się z {self.imie}!")
        self.dodaj_xp(15)  # NOWE! XP za zabawę
        return True

    def spij(self):
        """Kładzie zwierzaka spać"""
        if self.energia >= 100:
            print(f"\n😴 {self.imie} nie jest zmęczony!")
            return False

        # Bonus regeneracji za wysoki poziom
        bonus_energii = 40 + (self.poziom * 3)

        self.energia += bonus_energii
        if self.energia > 100:
            self.energia = 100

        self.glod += 15
        if self.glod > 100:
            self.glod = 100

        self.szczescie -= 5
        if self.szczescie < 0:
            self.szczescie = 0

        print(f"\n😴 {self.imie} śpi... Zzz...")
        self.dodaj_xp(5)  # NOWE! XP za sen
        return True
```

---

### Krok 8: Zaktualizuj wyświetlanie statusu

Dodaj informację o poziomie i XP do metody `pokaz_status()`:

```python
    def pokaz_status(self):
        """Wyświetla aktualny stan zwierzaka"""
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
        print(f"{'=' * 45}")
        print(f"{emoji} {self.imie.upper()} ({self.gatunek}) {emoji}")
        print(f"🏆 Poziom: {self.poziom}  |  ✨ XP: {self.xp}/{self.xp_do_nastepnego}")
        print(f"{'=' * 45}")

        # Paski statusu
        glod_pasek = self._rysuj_pasek(100 - self.glod)
        glod_emoji = "😋" if self.glod < 30 else "😐" if self.glod < 70 else "😫"
        print(f"🍖 Najedzenie: {glod_pasek} {glod_emoji}")

        energia_pasek = self._rysuj_pasek(self.energia)
        energia_emoji = "⚡" if self.energia > 70 else "😊" if self.energia > 30 else "😴"
        print(f"💤 Energia:    {energia_pasek} {energia_emoji}")

        szczescie_pasek = self._rysuj_pasek(self.szczescie)
        szczescie_emoji = "😄" if self.szczescie > 70 else "🙂" if self.szczescie > 30 else "😢"
        print(f"💖 Szczęście:  {szczescie_pasek} {szczescie_emoji}")

        # Pasek XP
        xp_procent = int(self.xp / self.xp_do_nastepnego * 100)
        xp_pasek = self._rysuj_pasek(xp_procent)
        print(f"✨ XP:         {xp_pasek}")

        print(f"{'=' * 45}")
        self._komentarz_stanu()
```

---

### Krok 9: Zaktualizuj główną grę

Zmodyfikuj funkcję `graj()`:

```python
def graj():
    """Główna funkcja gry"""
    wyczysc_ekran()

    # Próbujemy wczytać zapisanego zwierzaka
    zwierzak = wczytaj_zwierzaka()

    if zwierzak and zwierzak.zyje:
        print(f"🎉 Witaj z powrotem! {zwierzak.imie} czeka na Ciebie!")
        zwierzak.aktualizuj_po_czasie()  # Obliczamy upływ czasu
        input("\nNaciśnij ENTER...")
    else:
        if zwierzak and not zwierzak.zyje:
            print("💔 Twój poprzedni zwierzak niestety nie przeżył...")
            usun_zapis()
            input("\nNaciśnij ENTER, aby stworzyć nowego...")
        zwierzak = stworz_zwierzaka()

    tura = 0

    while zwierzak.zyje:
        wyczysc_ekran()

        print(f"🕐 Tura: {tura}")
        zwierzak.pokaz_status()

        wybor = pokaz_menu()

        if wybor == "0":
            # Zapisujemy przed wyjściem!
            if zapisz_zwierzaka(zwierzak):
                print(f"\n💾 Zapisano! {zwierzak.imie} poczeka na Twój powrót!")
            else:
                print(f"\n⚠️ Nie udało się zapisać, ale {zwierzak.imie} pożegna Cię!")
            print(f"👋 Do zobaczenia!")
            break
        elif wybor == "1":
            zwierzak.nakarm()
            tura += 1
            zwierzak.aktualizuj()
            zapisz_zwierzaka(zwierzak)  # Auto-zapis
        elif wybor == "2":
            zwierzak.baw_sie()
            tura += 1
            zwierzak.aktualizuj()
            zapisz_zwierzaka(zwierzak)
        elif wybor == "3":
            zwierzak.spij()
            tura += 1
            zwierzak.aktualizuj()
            zapisz_zwierzaka(zwierzak)
        elif wybor == "4":
            pass  # Status już wyświetlony
        else:
            print("\n❓ Nieznana opcja!")

        if zwierzak.zyje:
            input("\nNaciśnij ENTER...")

    # Koniec gry
    if not zwierzak.zyje:
        usun_zapis()  # Usuwamy zapis martwego zwierzaka
        print()
        print("=" * 40)
        print("💔 KONIEC GRY 💔")
        print(f"📊 Przetrwałeś {tura} tur")
        print(f"🏆 Osiągnięty poziom: {zwierzak.poziom}")
        print(f"✨ Zdobyte XP: {zwierzak.xp}")
        print("=" * 40)
        input("\nNaciśnij ENTER...")
```

---

## 🎮 Kompletny kod (Wersja Finalna)

Ze względu na długość kodu, tutaj jest podsumowanie struktury:

```python
# 🐱 WIRTUALNY ZWIERZAK - Wersja Kompletna

import os
import json
import time
from datetime import datetime

# === STAŁE ===
PLIK_ZAPISU = "zwierzak_save.json"
MINUTY_NA_TURE = 10

# === KLASA ZWIERZAK ===
class Zwierzak:
    def __init__(self, imie, gatunek="kot"):
        # ... atrybuty ...

    def __str__(self):
        # ... reprezentacja tekstowa ...

    def do_slownika(self):
        # ... konwersja do słownika ...

    @classmethod
    def ze_slownika(cls, dane):
        # ... tworzenie z słownika ...

    def pokaz_status(self):
        # ... wyświetlanie statusu z poziomem ...

    def _rysuj_pasek(self, wartosc):
        # ... pasek postępu ...

    def _komentarz_stanu(self):
        # ... komentarz zwierzaka ...

    def nakarm(self):
        # ... karmienie + XP ...

    def baw_sie(self):
        # ... zabawa + XP + bonus za poziom ...

    def spij(self):
        # ... sen + XP + bonus za poziom ...

    def aktualizuj(self):
        # ... upływ jednej tury ...

    def aktualizuj_po_czasie(self):
        # ... czas rzeczywisty ...

    def dodaj_xp(self, ile):
        # ... system XP i awansów ...

    def _sprawdz_wartosci(self):
        # ... ograniczanie wartości ...

    def _sprawdz_stan(self):
        # ... sprawdzanie czy żyje ...

# === FUNKCJE ZAPISU ===
def zapisz_zwierzaka(zwierzak): ...
def wczytaj_zwierzaka(): ...
def usun_zapis(): ...

# === FUNKCJE GRY ===
def wyczysc_ekran(): ...
def pokaz_menu(): ...
def stworz_zwierzaka(): ...
def graj(): ...

# === START ===
if __name__ == "__main__":
    graj()
```

---

## ⭐ Wyzwania dla chętnych!

### 🌟 Wyzwanie 1: Osiągnięcia

Dodaj system osiągnięć, np.:

- "Opiekun" - nakarm 10 razy
- "Przyjaciel" - pobaw się 20 razy
- "Poziom 5!" - osiągnij poziom 5

### 🌟 Wyzwanie 2: Sklep

Dodaj sklep, gdzie za XP możesz kupić:

- 🧸 Zabawka (+10 do zabawy)
- 🍰 Przysmak (super zmniejsza głód)
- 🛏️ Lepsze łóżko (lepsza regeneracja)

### 🌟 Wyzwanie 3: Wiele zwierzaków

Pozwól graczowi mieć więcej niż jednego zwierzaka!

### 🌟 Wyzwanie 4: Ewolucja

Gdy zwierzak osiągnie poziom 10, może "ewoluować" w lepszą wersję!

---

## ✅ Podsumowanie - Co powtórzyliśmy?

| Koncept                    | Gdzie w kodzie?                             |
| -------------------------- | ------------------------------------------- |
| Klasy i obiekty            | Cała klasa `Zwierzak`                       |
| `@classmethod`             | `ze_slownika()` - fabryka obiektów          |
| JSON                       | `zapisz_zwierzaka()`, `wczytaj_zwierzaka()` |
| `datetime`                 | Czas rzeczywisty                            |
| `.isoformat()`             | Zapis daty jako tekst                       |
| `datetime.fromisoformat()` | Odczyt daty z tekstu                        |
| Różnica czasów             | `teraz - ostatnio`                          |
| Słowniki                   | `do_slownika()`                             |
| `.get()`                   | Bezpieczny odczyt ze słownika               |
| `try/except`               | Obsługa błędów zapisu/odczytu               |
| System XP                  | Proste mechaniki gry                        |

---

## 🎉 Gratulacje!

Ukończyłeś **Wirtualnego Zwierzaka** - zaawansowany projekt łączący:

- ✅ Programowanie obiektowe (klasy, metody, atrybuty)
- ✅ Zapis/odczyt JSON
- ✅ Czas rzeczywisty
- ✅ System progresji (XP, poziomy)
- ✅ Interaktywną pętlę gry

**To prawdziwa gra, która "żyje"!** 🎮🐾

---

## 📝 Zadanie domowe

1. **Zagraj przez kilka dni** - sprawdź, jak działa czas rzeczywisty!
2. **Osiągnij poziom 5** - ile tur to zajmie?
3. **Wybierz jedno wyzwanie** i zaimplementuj je!
4. **Pokaż grę znajomym** - niech stworzą własne zwierzaki!

---

## 🔮 Co dalej?

Mamy dla Ciebie **projekt bonusowy** - grę Pong dla 2 graczy w Pygame Zero! 🏓

**[→ Przejdź do Projektu Bonusowego: Gra Pong](/python-course/bonus-pong/)**

---

_Pochwal się poziomem swojego zwierzaka w komentarzu! 🏆💬_
