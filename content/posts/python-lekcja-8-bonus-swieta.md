+++
title = 'Python Podstawowy - Lekcja 8+: Świąteczne Programowanie! 🎄🎅'
date = 2025-12-13T10:00:00+01:00
draft = false
url = '/python-course/lekcja-8-swieta/'
description = 'Świąteczna lekcja bonusowa! Tworzymy choinkę ASCII, animację śniegu i generator życzeń!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'święta', 'boże narodzenie', 'ascii-art', 'animacja', 'programowanie', 'podstawy', 'zabawa']
series = ['Python Podstawowy']
+++

# 🎄 Lekcja 8+: Świąteczne Programowanie! 🎅

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Ho ho ho, Młody Programisto! 🎅

Zbliżają się Święta Bożego Narodzenia, więc dzisiaj mamy **specjalną lekcję bonusową**! Zamiast trudnych nowych tematów, będziemy się bawić kodem i tworzyć świąteczne projekty!

To idealna okazja, żeby powtórzyć to, czego się nauczyliśmy, i stworzyć coś fajnego do pokazania rodzinie! 🎁

<!--more-->

---

## 🎯 Co dzisiaj stworzymy?

- 🎄 **Choinkę ASCII** - narysujemy choinkę ze znaków!
- ❄️ **Animację padającego śniegu** - magia w terminalu!
- ⭐ **Świąteczne wzory** - gwiazdki i ozdoby
- 💌 **Generator życzeń świątecznych** - losowe kartki dla bliskich!
- 📝 **Zapis kartek do pliku** - prezent do wydrukowania!

**Poziom trudności:** 🟢 Łatwy (powtórka materiału)

---

## 🎄 Część 1: Choinka ASCII Art!

**ASCII Art** to rysowanie obrazków za pomocą znaków z klawiatury. To stara, ale super zabawna technika!

### Najprostsza choinka

Zacznijmy od czegoś prostego:

```python
# 🎄 Najprostsza choinka
print("    *")
print("   ***")
print("  *****")
print(" *******")
print("*********")
print("   |||")
print("   |||")
```

**Wynik:**

```
    *
   ***
  *****
 *******
*********
   |||
   |||
```

### 🎄 Choinka z pętlą `for`!

Ale chwila... widzisz wzór? Każda linia ma więcej gwiazdek i mniej spacji! Użyjmy pętli!

```python
# 🎄 Choinka z pętlą - MAGIA!
wysokosc = 5

for i in range(1, wysokosc + 1):
    spacje = " " * (wysokosc - i)
    gwiazdki = "*" * (2 * i - 1)
    print(spacje + gwiazdki)

# Pień choinki
for i in range(2):
    print(" " * (wysokosc - 2) + "|||")
```

**Wynik:**

```
    *
   ***
  *****
 *******
*********
   |||
   |||
```

### 💡 Jak to działa?

| Linia (i) | Spacje | Gwiazdki | Wzór        |
| --------- | ------ | -------- | ----------- |
| 1         | 4      | 1        | `    *`     |
| 2         | 3      | 3        | `   ***`    |
| 3         | 2      | 5        | `  *****`   |
| 4         | 1      | 7        | ` *******`  |
| 5         | 0      | 9        | `*********` |

**Formuła:**

- Spacje = `wysokość - numer_linii`
- Gwiazdki = `2 * numer_linii - 1`

### 🌟 Choinka z dekoracjami!

Dodajmy losowe ozdoby! 🎀

```python
import random

# 🎄 Choinka z losowymi ozdobami!
wysokosc = 7
ozdoby = ["*", "o", "@", "⭐", "🎀", "🔴", "🟡"]

print("      ⭐")  # Gwiazda na czubku

for i in range(2, wysokosc + 1):
    spacje = " " * (wysokosc - i)
    linia = ""

    for j in range(2 * i - 1):
        # Losowo wybieramy ozdobę lub zwykłą gwiazdkę
        if random.random() < 0.3:  # 30% szans na ozdobę
            linia += random.choice(["o", "@", "O"])
        else:
            linia += "*"

    print(spacje + linia)

# Pień
for i in range(2):
    print(" " * (wysokosc - 2) + "|||")

print("\n🎄 Wesołych Świąt! 🎄")
```

**Przykładowy wynik:**

```
      ⭐
     *o*
    **@**
   *o*o*o*
  **@***O**
 *o***@*o***
**O*@***o*@**
     |||
     |||

🎄 Wesołych Świąt! 🎄
```

### ✏️ Ćwiczenie 1: Twoja choinka

Zmodyfikuj kod:

1. Zmień wysokość choinki na 10
2. Dodaj więcej ozdobnych znaków (np. `+`, `#`, `%`)
3. Zmień szansę na ozdobę z 30% na 50%

---

## ❄️ Część 2: Animacja Padającego Śniegu!

Teraz zrobimy coś MEGA! Animacja w terminalu! ❄️

### Potrzebujemy nowych narzędzi:

```python
import time    # Do robienia pauzy
import random  # Do losowych pozycji śniegu
import os      # Do czyszczenia ekranu
```

### Prosty padający śnieg

```python
# ❄️ Padający śnieg - wersja prosta
import time
import random
import os

szerokosc = 40
wysokosc = 10

# Funkcja do czyszczenia ekranu
def wyczysc_ekran():
    os.system('cls')  # Windows

print("❄️ Padający śnieg! (Naciśnij Ctrl+C żeby zatrzymać)")
time.sleep(2)

while True:
    wyczysc_ekran()

    # Rysujemy "ekran" ze śniegiem
    for wiersz in range(wysokosc):
        linia = ""
        for kolumna in range(szerokosc):
            # 5% szans na płatek śniegu w każdym miejscu
            if random.random() < 0.05:
                linia += random.choice(["❄", "*", "·", "°"])
            else:
                linia += " "
        print(linia)

    print("\n" + "=" * szerokosc)
    print("   ❄️ Wesołych Świąt! ❄️")

    time.sleep(0.3)  # Pauza 0.3 sekundy
```

**Uwaga:** Ten program działa w nieskończoność! Naciśnij `Ctrl+C` żeby go zatrzymać.

### 🏠 Śnieg z krajobrazem!

```python
# ❄️ Zimowy krajobraz z padającym śniegiem
import time
import random
import os

def wyczysc_ekran():
    os.system('cls')

szerokosc = 50

# Nasz zimowy krajobraz (ASCII art)
krajobraz = [
    "                                                  ",
    "                    ⭐                            ",
    "                   /|\\                           ",
    "                  /*|*\\                          ",
    "                 /o*|*o\\                         ",
    "                /**o|o**\\                        ",
    "               /*o**|**o*\\                       ",
    "                  |||                             ",
    "    ___       ___|||___       ___                 ",
    "   /   \\     |  HOME  |     /   \\               ",
    "  |     |    |   🚪   |    |     |               ",
    "__|_____|____|________|____|_____|________________",
]

print("❄️ Zimowy krajobraz! (Ctrl+C aby zatrzymać)")
time.sleep(2)

for klatka in range(50):  # 50 klatek animacji
    wyczysc_ekran()

    # Rysujemy śnieg nad krajobrazem
    for i in range(5):
        linia = ""
        for j in range(szerokosc):
            if random.random() < 0.03:
                linia += random.choice(["❄", "*", "·"])
            else:
                linia += " "
        print(linia)

    # Rysujemy krajobraz
    for linia in krajobraz:
        print(linia)

    # Warstwa śniegu na ziemi rośnie!
    snieg_na_ziemi = "❄" * szerokosc
    print(snieg_na_ziemi[:klatka % szerokosc])

    time.sleep(0.2)

print("\n🎄 Wesołych Świąt i Szczęśliwego Nowego Roku! 🎄")
```

---

## ⭐ Część 3: Świąteczne Wzory ASCII

### Gwiazdka

```python
# ⭐ Gwiazdka
print("    *    ")
print("   ***   ")
print("*********")
print("  *****  ")
print(" *** *** ")
print("**     **")
```

### Bałwan ☃️

```python
# ☃️ Bałwan
print("    ___    ")
print("   /   \\   ")
print("  | o o |  ")
print("  |  >  |  ")
print("  | \\_/ |  ")
print("   \\___/   ")
print("  /|||||\\  ")
print(" / ||||| \\ ")
print("   |||||   ")
print("  /     \\  ")
print(" /_______\\ ")
```

### Prezent 🎁

```python
# 🎁 Prezent
print("     |     ")
print("   \\   /   ")
print("    \\ /    ")
print(" +--***--+ ")
print(" |*******| ")
print(" |***🎀***| ")
print(" |*******| ")
print(" +-------+ ")
```

### 🎨 Galeria Świąteczna - Wszystko Razem!

```python
# 🎄 Świąteczna Galeria ASCII Art

def rysuj_choinke(wysokosc):
    print("      ⭐")
    for i in range(2, wysokosc + 1):
        spacje = " " * (wysokosc - i)
        gwiazdki = "*" * (2 * i - 1)
        print(spacje + gwiazdki)
    for i in range(2):
        print(" " * (wysokosc - 2) + "|||")

def rysuj_balwana():
    balwan = [
        "   ___   ",
        "  /   \\  ",
        " | o o | ",
        " |  >  | ",
        "  \\___/  ",
        " /|||||\\",
        "  |||||  ",
        " /     \\ ",
    ]
    for linia in balwan:
        print(linia)

def rysuj_prezent():
    prezent = [
        "  \\   /  ",
        "   \\ /   ",
        " +--*--+ ",
        " |*****| ",
        " |**🎀**| ",
        " +-----+ ",
    ]
    for linia in prezent:
        print(linia)

# Wyświetlamy galerię
print("=" * 50)
print("      🎄 ŚWIĄTECZNA GALERIA ASCII ART 🎄")
print("=" * 50)

print("\n🎄 CHOINKA:")
rysuj_choinke(6)

print("\n☃️ BAŁWAN:")
rysuj_balwana()

print("\n🎁 PREZENT:")
rysuj_prezent()

print("\n" + "=" * 50)
print("      ❄️ Wesołych Świąt! ❄️")
print("=" * 50)
```

---

## 💌 Część 4: Generator Życzeń Świątecznych!

Teraz stworzymy program, który generuje losowe, spersonalizowane życzenia świąteczne!

### Prosty generator

```python
# 💌 Generator Życzeń Świątecznych
import random

# Listy z częściami życzeń
poczatki = [
    "Niech te Święta przyniosą Ci",
    "Życzę Ci na Święta",
    "W te magiczne dni życzę Ci",
    "Niech Gwiazdka przyniesie Ci",
    "Z okazji Świąt życzę Ci",
]

zyczenia = [
    "dużo radości i uśmiechu! 😊",
    "spokoju i ciepła rodzinnego! 🏠",
    "spełnienia marzeń! ⭐",
    "zdrowia i szczęścia! ❤️",
    "magicznych chwil z bliskimi! ✨",
    "góry prezentów pod choinką! 🎁",
    "pysznych pierniczków! 🍪",
    "białych Świąt pełnych śniegu! ❄️",
]

zakonczenia = [
    "Wesołych Świąt! 🎄",
    "Ho ho ho! 🎅",
    "Niech magia trwa! ✨",
    "Wszystkiego najlepszego! 🌟",
]

# Generujemy życzenie
print("=" * 45)
print("   💌 GENERATOR ŻYCZEŃ ŚWIĄTECZNYCH 💌")
print("=" * 45)

imie = input("\n🎄 Dla kogo są życzenia? ")

print(f"\n✨ Życzenia dla: {imie} ✨\n")
print("-" * 40)

poczatek = random.choice(poczatki)
zyczenie = random.choice(zyczenia)
zakonczenie = random.choice(zakonczenia)

print(f"Drogi/Droga {imie}!\n")
print(f"{poczatek}")
print(f"{zyczenie}\n")
print(f"{zakonczenie}")

print("-" * 40)
print("\n❄️ Wygenerowano z ❤️ przez Python! ❄️")
```

**Przykładowy wynik:**

```
=============================================
   💌 GENERATOR ŻYCZEŃ ŚWIĄTECZNYCH 💌
=============================================

🎄 Dla kogo są życzenia? Mama

✨ Życzenia dla: Mama ✨

----------------------------------------
Drogi/Droga Mama!

Niech te Święta przyniosą Ci
dużo radości i uśmiechu! 😊

Wesołych Świąt! 🎄
----------------------------------------

❄️ Wygenerowano z ❤️ przez Python! ❄️
```

---

## 📝 Część 5: Zapis Kartki do Pliku!

Teraz połączymy generator z zapisem do pliku - możesz wydrukować kartkę!

```python
# 💌 Generator Życzeń z zapisem do pliku!
import random
from datetime import datetime

# Listy z częściami życzeń
poczatki = [
    "Niech te Święta przyniosą Ci",
    "Życzę Ci na Święta",
    "W te magiczne dni życzę Ci",
    "Niech Gwiazdka przyniesie Ci",
    "Z okazji Świąt życzę Ci",
]

zyczenia = [
    "dużo radości i uśmiechu!",
    "spokoju i ciepła rodzinnego!",
    "spełnienia marzeń!",
    "zdrowia i szczęścia!",
    "magicznych chwil z bliskimi!",
    "góry prezentów pod choinką!",
    "pysznych pierniczków i ciepłej herbaty!",
    "białych Świąt pełnych śniegu!",
]

zakonczenia = [
    "Wesołych Świąt!",
    "Ho ho ho!",
    "Niech magia trwa cały rok!",
    "Wszystkiego najlepszego!",
    "Z całego serca!",
]

# ASCII choinka do kartki
choinka = """
        *
       /|\\
      /*|*\\
     /o*|*o\\
    /**o|o**\\
   /*o**|**o*\\
       |||
"""

def generuj_zyczenia():
    poczatek = random.choice(poczatki)
    zyczenie = random.choice(zyczenia)
    zakonczenie = random.choice(zakonczenia)
    return poczatek, zyczenie, zakonczenie

def utworz_kartke(imie, od_kogo):
    poczatek, zyczenie, zakonczenie = generuj_zyczenia()

    kartka = f"""
╔══════════════════════════════════════════════╗
║                                              ║
║          🎄 KARTKA ŚWIĄTECZNA 🎄             ║
║                                              ║
╠══════════════════════════════════════════════╣
{choinka}
         ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️

   Drogi/Droga {imie}!

   {poczatek}
   {zyczenie}

   {zakonczenie}

         ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️

   Z pozdrowieniami,
   {od_kogo}

╚══════════════════════════════════════════════╝
"""
    return kartka


# ========== PROGRAM GŁÓWNY ==========

print("=" * 50)
print("   🎄 KREATOR KARTEK ŚWIĄTECZNYCH 🎄")
print("=" * 50)

print("\n📝 Odpowiedz na kilka pytań:\n")

imie = input("1. Dla kogo jest kartka? ")
od_kogo = input("2. Od kogo? (Twoje imię) ")

print("\n⏳ Generuję kartkę...")

# Tworzymy kartkę
kartka = utworz_kartke(imie, od_kogo)

# Wyświetlamy na ekranie
print(kartka)

# Pytamy czy zapisać
print("\n💾 Czy chcesz zapisać kartkę do pliku?")
zapisac = input("Wpisz 'tak' lub 'nie': ").lower()

if zapisac == "tak":
    # Nazwa pliku z datą
    data = datetime.now().strftime("%Y-%m-%d")
    nazwa_pliku = f"kartka_dla_{imie}_{data}.txt"

    # Zapis do pliku
    with open(nazwa_pliku, "w", encoding="utf-8") as plik:
        plik.write(kartka)

    print(f"\n✅ Kartka zapisana do pliku: {nazwa_pliku}")
    print("📄 Możesz ją otworzyć w notatniku i wydrukować!")
else:
    print("\n👍 OK! Kartka nie została zapisana.")

print("\n🎄 Wesołych Świąt! 🎄")
```

**Przykładowa kartka zapisana do pliku:**

```
╔══════════════════════════════════════════════╗
║                                              ║
║          🎄 KARTKA ŚWIĄTECZNA 🎄             ║
║                                              ║
╠══════════════════════════════════════════════╣

        *
       /|\
      /*|*\
     /o*|*o\
    /**o|o**\
   /*o**|**o*\
       |||

         ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️

   Drogi/Droga Mama!

   Niech te Święta przyniosą Ci
   spokoju i ciepła rodzinnego!

   Z całego serca!

         ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️

   Z pozdrowieniami,
   Kuba

╚══════════════════════════════════════════════╝
```

---

## 🎮 MEGA PROJEKT: Świąteczny Program All-in-One!

Połączmy wszystko w jeden świąteczny program z menu!

```python
# 🎄 ŚWIĄTECZNY PROGRAM ALL-IN-ONE! 🎄
import random
import time
import os
from datetime import datetime

# ===== FUNKCJE =====

def wyczysc_ekran():
    os.system('cls')  # Windows
    # os.system('clear')  # Mac/Linux

def rysuj_choinke(wysokosc):
    """Rysuje choinkę ASCII o podanej wysokości"""
    print("      ⭐")
    for i in range(2, wysokosc + 1):
        spacje = " " * (wysokosc - i)
        gwiazdki = "*" * (2 * i - 1)
        print(spacje + gwiazdki)
    for _ in range(2):
        print(" " * (wysokosc - 2) + "|||")

def rysuj_choinke_z_ozdobami(wysokosc):
    """Rysuje choinkę z losowymi ozdobami"""
    print("      ⭐")
    for i in range(2, wysokosc + 1):
        spacje = " " * (wysokosc - i)
        linia = ""
        for j in range(2 * i - 1):
            if random.random() < 0.3:
                linia += random.choice(["o", "@", "O", "+"])
            else:
                linia += "*"
        print(spacje + linia)
    for _ in range(2):
        print(" " * (wysokosc - 2) + "|||")

def animacja_sniegu():
    """Pokazuje animację padającego śniegu"""
    szerokosc = 40

    print("❄️ Padający śnieg! (Ctrl+C aby zatrzymać)")
    time.sleep(1)

    try:
        for _ in range(30):  # 30 klatek
            wyczysc_ekran()

            for wiersz in range(8):
                linia = ""
                for kolumna in range(szerokosc):
                    if random.random() < 0.05:
                        linia += random.choice(["❄", "*", "·", "°"])
                    else:
                        linia += " "
                print(linia)

            print("\n" + "=" * szerokosc)
            print("      ❄️ Wesołych Świąt! ❄️")
            time.sleep(0.2)
    except KeyboardInterrupt:
        pass

    print("\n✅ Animacja zakończona!")

def generuj_zyczenia(imie, od_kogo):
    """Generuje losowe życzenia świąteczne"""
    poczatki = [
        "Niech te Święta przyniosą Ci",
        "Życzę Ci na Święta",
        "W te magiczne dni życzę Ci",
        "Niech Gwiazdka przyniesie Ci",
    ]
    zyczenia = [
        "dużo radości i uśmiechu!",
        "spokoju i ciepła rodzinnego!",
        "spełnienia marzeń!",
        "zdrowia i szczęścia!",
        "magicznych chwil z bliskimi!",
    ]
    zakonczenia = [
        "Wesołych Świąt!",
        "Ho ho ho!",
        "Z całego serca!",
    ]

    kartka = f"""
╔════════════════════════════════════╗
║     🎄 KARTKA ŚWIĄTECZNA 🎄        ║
╠════════════════════════════════════╣

   Drogi/Droga {imie}!

   {random.choice(poczatki)}
   {random.choice(zyczenia)}

   {random.choice(zakonczenia)}

   Z pozdrowieniami,
   {od_kogo}

╚════════════════════════════════════╝
"""
    return kartka

def quiz_swiateczny():
    """Prosty quiz o Świętach"""
    pytania = [
        ("Jak ma na imię pomocnik Świętego Mikołaja?", ["Elf", "Krasnal", "Skrzat"], "Elf"),
        ("Co zostawia Mikołaj grzecznym dzieciom?", ["Prezenty", "Węgiel", "Nic"], "Prezenty"),
        ("Ile reniferów ciągnie sanie Mikołaja?", ["6", "9", "12"], "9"),
        ("Jak nazywa się słynny renifer z czerwonym nosem?", ["Rudolf", "Reksio", "Robert"], "Rudolf"),
        ("Co tradycyjnie jemy w Wigilię w Polsce?", ["Karp", "Kurczak", "Pizza"], "Karp"),
    ]

    punkty = 0

    print("\n🎄 QUIZ ŚWIĄTECZNY! 🎄\n")

    for i, (pytanie, odpowiedzi, poprawna) in enumerate(pytania, 1):
        print(f"Pytanie {i}: {pytanie}")
        for j, odp in enumerate(odpowiedzi, 1):
            print(f"  {j}. {odp}")

        wybor = input("Twoja odpowiedź (1, 2 lub 3): ")

        try:
            indeks = int(wybor) - 1
            if odpowiedzi[indeks] == poprawna:
                print("✅ Dobrze!\n")
                punkty += 1
            else:
                print(f"❌ Źle! Poprawna odpowiedź: {poprawna}\n")
        except:
            print(f"❌ Nieprawidłowy wybór! Poprawna odpowiedź: {poprawna}\n")

    print(f"🏆 Twój wynik: {punkty}/{len(pytania)}")

    if punkty == len(pytania):
        print("🌟 PERFEKCYJNIE! Jesteś ekspertem od Świąt!")
    elif punkty >= 3:
        print("👍 Świetnie! Znasz się na Świętach!")
    else:
        print("📚 Może w przyszłym roku będzie lepiej!")


# ===== MENU GŁÓWNE =====

def menu_glowne():
    while True:
        wyczysc_ekran()

        print("=" * 50)
        print("   🎄🎅 ŚWIĄTECZNY PROGRAM ALL-IN-ONE! 🎅🎄")
        print("=" * 50)

        rysuj_choinke(5)

        print("\n📋 MENU:")
        print("  1. 🎄 Narysuj choinkę")
        print("  2. 🎄 Choinka z ozdobami")
        print("  3. ❄️ Animacja śniegu")
        print("  4. 💌 Wygeneruj życzenia")
        print("  5. 📝 Quiz świąteczny")
        print("  6. 🚪 Wyjście")

        print()
        wybor = input("Co wybierasz? (1-6): ")

        if wybor == "1":
            wyczysc_ekran()
            print("🎄 CHOINKA ASCII:\n")
            wysokosc = input("Podaj wysokość choinki (3-15): ")
            try:
                wys = int(wysokosc)
                if 3 <= wys <= 15:
                    rysuj_choinke(wys)
                else:
                    rysuj_choinke(7)
            except:
                rysuj_choinke(7)
            input("\n⏎ Naciśnij ENTER aby kontynuować...")

        elif wybor == "2":
            wyczysc_ekran()
            print("🎄 CHOINKA Z OZDOBAMI:\n")
            rysuj_choinke_z_ozdobami(8)
            input("\n⏎ Naciśnij ENTER aby kontynuować...")

        elif wybor == "3":
            animacja_sniegu()
            input("\n⏎ Naciśnij ENTER aby kontynuować...")

        elif wybor == "4":
            wyczysc_ekran()
            print("💌 GENERATOR ŻYCZEŃ:\n")
            imie = input("Dla kogo kartka? ")
            od = input("Od kogo? ")
            kartka = generuj_zyczenia(imie, od)
            print(kartka)

            zapisac = input("Zapisać do pliku? (tak/nie): ").lower()
            if zapisac == "tak":
                nazwa = f"kartka_{imie}.txt"
                with open(nazwa, "w", encoding="utf-8") as f:
                    f.write(kartka)
                print(f"✅ Zapisano: {nazwa}")

            input("\n⏎ Naciśnij ENTER aby kontynuować...")

        elif wybor == "5":
            wyczysc_ekran()
            quiz_swiateczny()
            input("\n⏎ Naciśnij ENTER aby kontynuować...")

        elif wybor == "6":
            wyczysc_ekran()
            print("\n🎄 Wesołych Świąt i Szczęśliwego Nowego Roku! 🎄")
            print("      🎅 Do zobaczenia! 🎅\n")
            break

        else:
            print("❌ Nieznana opcja!")
            time.sleep(1)


# Uruchomienie programu
if __name__ == "__main__":
    menu_glowne()
```

---

## 🧠 Podsumowanie - Czego się nauczyliśmy (powtórka!)

| Temat             | Gdzie użyliśmy                          | Lekcja   |
| ----------------- | --------------------------------------- | -------- |
| Pętla `for`       | Rysowanie choinki                       | Lekcja 4 |
| Listy             | Życzennia, odpowiedzi quizu             | Lekcja 5 |
| Funkcje           | `rysuj_choinke()`, `generuj_zyczenia()` | Lekcja 5 |
| `random.choice()` | Losowe ozdoby i życzenia                | Lekcja 5 |
| Praca z plikami   | Zapis kartki do `.txt`                  | Lekcja 7 |
| Pętla `while`     | Menu główne, animacja                   | Lekcja 4 |
| f-stringi         | Formatowanie tekstu                     | Lekcja 4 |

---

## 📝 Zadania Świąteczne (dla chętnych!)

### 🟢 Łatwe: Więcej ozdób

Dodaj do choinki więcej rodzajów ozdób (np. emoji: 🔴, 🟡, 🔵)

### 🟡 Średnie: Animowany bałwan

Stwórz bałwana, który "macha" ręką (zmienia się między klatkami)

### 🔴 Trudne: Kolęda w terminalu

Napisz program, który wyświetla tekst kolędy linijka po linijce z pauzami (jak karaoke!)

### 🟣 Super wyzwanie: Kalendarz Adwentowy

Stwórz słownik z 24 niespodziankami i program, który pokazuje niespodziankę tylko w odpowiedni dzień!

---

## 🎁 Na Zakończenie

Ta lekcja była prezentem świątecznym od Code Addict! 🎁

Mam nadzieję, że dobrze się bawiłeś/bawiłaś tworząc świąteczne programy. Możesz teraz:

- 📧 Wysłać wygenerowane życzenia do rodziny
- 🖨️ Wydrukować kartki zapisane do plików
- 🎄 Pokazać rodzicom, że umiesz "programować Święta"!

**🎄 Wesołych Świąt i Szczęśliwego Nowego Roku! 🎄**

**🎅 Do zobaczenia w następnych lekcjach! 🎅**

---

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**
