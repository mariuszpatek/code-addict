+++
title = 'Python Podstawowy - Lekcja 2: Rozmawiamy z Komputerem!'
date = 2025-09-20T10:00:00+02:00
draft = false
url = '/python-course/lekcja-2/'
description = 'Druga lekcja z serii Python Podstawowy. Uczymy się zmiennych, funkcji input() i tworzymy pierwszą grę!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'podstawy', 'programowanie', 'nauka', 'zmienne', 'input', 'gra']
series = ['Python Podstawowy']
+++

# 🗣️ Lekcja 2: Rozmawiamy z Komputerem!

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Witaj ponownie młody programisto! 👋 W pierwszej lekcji nauczyłeś się, jak mówić do komputera używając funkcji `print()`. Dzisiaj nauczymy komputer, jak słuchać i rozmawiać z nami! 🚀

<!--more-->

## 🎯 Czego się dzisiaj nauczymy?

W tej drugiej lekcji poznamy:
- 📥 Jak pobierać informacje od użytkownika (`input()`)
- 📦 Czym są zmienne - "pudełka" na nasze dane
- 🔄 Jak łączyć tekst ze zmiennymi
- 🎮 **Napiszemy naszą pierwszą grę: "Zgadnij liczbę"!**
- 🎨 Stworzymy interaktywną wizytówkę

## 💬 Funkcja input() - ucho komputera! 👂

Do tej pory nasz komputer tylko mówił do nas przez `print()`. Teraz nauczymy go słuchać!

### Pierwszy test - poznajmy się!

Otwórz Thonny i wpisz ten kod w Shellu (dolnej części):

```python
input("Jak masz na imię? ")
```

**Co się stanie?**
1. Komputer wypisze pytanie: "Jak masz na imię? "
2. **Zatrzymuje się i czeka na Twoją odpowiedź!** ⏳
3. Wpisz swoje imię i naciśnij Enter
4. Komputer powtórzy to, co wpisałeś!

**To magia!** 🎩✨ Komputer właśnie pierwszy raz Cię wysłuchał!

### Ale czekaj... gdzie się podziała moja odpowiedź? 🤔

**Zauważyłeś, że komputer pokazał Twoje imię i... od razu o nim zapomniał? To dlatego, że nigdzie nie zapisaliśmy tej informacji! 

Wyobraź sobie, że ktoś Ci coś powiedział, ale Ty nie masz pamiętnika, żeby to zapisać - zapomnisz!

**Teraz spróbuj tego:**

```python
imie = input("Jak masz na imię? ")
print("Cześć " + imie + "! Miło Cię poznać! 😊")
```

**WOW!** 🎉 Teraz komputer:
1. Zapyta o Twoje imię
2. **Zapisze je w pamięci** (w zmiennej `imie`)  
3. Użyje tej informacji w drugiej linii!

To tak, jakby komputer napisał Twoje imię na karteczce i schował do kieszonki! 📝

### 🎯 Mini zadanie 1: Pierwsza rozmowa
**Wypróbuj sam!** Napisz program, który:
- Pyta o Twoją ulubioną grę.
- Pyta o ulubiony kolor.
- Wyświetla wiadomość: "Twoja ulubiona gra to [gra], a ulubiony kolor to [kolor]!"

## 📦 Zmienne - pudełka na nasze skarby!

**Zmienna** to pojemnik z etykietą, w którym komputer może przechowywać informacje.

### 🏷️ Jak działają zmienne?

Wyobraź sobie, że masz pudełka w pokoju:
- Pudełko z napisem "imie" - w środku jest Twoje imię
- Pudełko z napisem "wiek" - w środku jest Twoja liczba lat  
- Pudełko z napisem "hobby" - w środku jest to, co lubisz robić

**W Pythonie to wygląda tak:**

```python
imie = "Ania"           # Pudełko "imie" ma w środku "Ania"
wiek = 12               # Pudełko "wiek" ma w środku liczbę 12
hobby = "gry komputerowe"   # Pudełko "hobby" ma "gry komputerowe"
```

### 🔄 Możemy zmieniać zawartość pudełek!

```python
ulubiony_kolor = "niebieski"
print("Mój ulubiony kolor to " + ulubiony_kolor)

# Ups, zmieniłem zdanie!
ulubiony_kolor = "czerwony"
print("Teraz mój ulubiony kolor to " + ulubiony_kolor)
```

**Rezultat:**
```
Mój ulubiony kolor to niebieski
Teraz mój ulubiony kolor to czerwony
```

### 🎯 Zasady nazywania zmiennych (bardzo ważne!)

**✅ DOBRE nazwy zmiennych:**
- `imie`
- `ulubiony_kolor`
- `liczba_punktow`
- `wiek_uzytkownika`

**❌ ZŁE nazwy zmiennych:**
- `x` - co to znaczy?
- `dane1` - jakie dane?
- `zmienna` - to nic nie mówi!
- `a` - za krótkie!

**🚨 Pamiętaj:**
- Używaj angielskich lub polskich nazw, ale bez polskich znaków (ogonków), np. `imie` zamiast `imię`.
- Zamiast spacji używaj podkreślników: `ulubiony_kolor`.
- Python rozróżnia wielkie i małe litery: `imie` to nie to samo co `Imie`.

### 🎯 Mini zadanie 2: Eksperyment ze zmiennymi
**Spróbuj tego!** 
- Stwórz 3 zmienne: `ulubione_zwierze`, `liczba_lat`, `miasto`
- Nadaj im dowolne wartości
- Wyświetl je wszystkie w jednej linii używając `print()`

## 🎮 Nasza pierwsza interaktywna wizytówka!

Zrobimy wizytówkę, która rozmawia z użytkownikiem! 🌟

### Krok po kroku tworzymy interaktywną wizytówkę:

1. **Stwórz nowy plik** w Thonny (Ctrl+N)
2. **Wpisz ten kod:**

```python
# Interaktywna wizytówka - wersja 1.0
print("🌟" * 30)
print("✨  KREATOR WIZYTÓWEK  ✨")
print("🌟" * 30)

# Zbieramy informacje o użytkowniku
imie = input("👤 Jak masz na imię? ")
wiek = input("🎂 Ile masz lat? ")
hobby = input("🎮 Jakie jest Twoje hobby? ")
ulubione_zwierze = input("🐶 Jakie jest Twoje ulubione zwierzę? ")

# Teraz tworzymy piękną wizytówkę!
print("\n" + "🌟" * 30)
print("✨  TWOJA WIZYTÓWKA  ✨")
print("🌟" * 30)
print("👤 Imię: " + imie)
print("🎂 Wiek: " + wiek + " lat")
print("🎮 Hobby: " + hobby)
print("🐶 Ulubione zwierzę: " + ulubione_zwierze)
print("💻 Status: Przyszły programista Python!")
print("🌟" * 30)

print("\nGratulacje " + imie + "! Twoja wizytówka jest gotowa! 🎉")
```

3. **Zapisz jako** `interaktywna_wizytowka.py`
4. **Uruchom** (F5) i wypełnij wszystkie pola!

**Co nowego w tym kodzie?**
- `\n` - to znak "nowej linii" (działa jak Enter w edytorze tekstu).
- `# To jest komentarz` - linie zaczynające się od `#` to notatki dla programistów, ignorowane przez komputer.
- Używamy wielu zmiennych naraz!

### 🎨 Wersja DELUXE wizytówki!

Jeśli chcesz zrobić swoją wizytówkę jeszcze bardziej kreatywną:

```python
# Interaktywna wizytówka - wersja DELUXE
print("🚀" * 40)
print("✨  SUPER KREATOR WIZYTÓWEK 2.0  ✨")
print("🚀" * 40)

print("Cześć! Pomogę Ci stworzyć najlepszą wizytówkę na świecie! 😎")
print()

# Zbieramy wszystkie informacje
imie = input("👤 Podaj swoje imię: ")
wiek = input("🎂 Podaj swój wiek: ")
klasa = input("🏫 Do której klasy chodzisz? ")
hobby = input("🎮 Jakie masz hobby? ")
ulubiony_przedmiot = input("📚 Jaki jest Twój ulubiony przedmiot w szkole? ")
marzenie = input("🌟 Kim chcesz zostać w przyszłości? ")
ulubiona_pizza = input("🍕 Jaka jest Twoja ulubiona pizza? ")

print("\n🔄 Generuję Twoją wizytówkę...")
print("⏳ Proszę czekać...")
print("✅ Gotowe!\n")

# Mega wizytówka!
print("🎆" * 50)
print("✨" + " " * 15 + "WIZYTÓWKA " + imie.upper() + " " * 15 + "✨")
print("🎆" * 50)
print("📋 PODSTAWOWE INFORMACJE:")
print(f"   👤 Imię: {imie}")
print(f"   🎂 Wiek: {wiek} lat")
print(f"   🏫 Klasa: {klasa}")
print()
print("🎯 ZAINTERESOWANIA:")
print(f"   🎮 Hobby: {hobby}")  
print(f"   📚 Ulubiony przedmiot: {ulubiony_przedmiot}")
print(f"   🍕 Ulubiona pizza: {ulubiona_pizza}")
print()
print("🚀 PLANY NA PRZYSZŁOŚĆ:")
print(f"   🌟 Marzenie: {marzenie}")
print("   💻 Dodatkowy cel: Zostać mistrzem Pythona!")
print("🎆" * 50)

print(f"\n🎉 {imie}, Twoja wizytówka jest gotowa!")
print("💫 Możesz ją pokazać rodzinie i znajomym!")
```

**Co nowego tutaj mamy?**
- `imie.upper()` - zamienia tekst w zmiennej `imie` na WIELKIE LITERY!
- `f"..."` - to nowoczesny i wygodny sposób formatowania napisów, który pozwala wstawiać zmienne bezpośrednio do tekstu.
- Bardziej profesjonalny wygląd dzięki lepszemu formatowaniu.

### 🎯 Mini zadanie 3: Własna wizytówka
**Twój projekt!** Zmodyfikuj wizytówkę tak, żeby pytała o:
- Twój ulubiony film
- Liczbę rodzeństwa  
- Co chcesz robić po szkole
Dodaj także kolorowe ramki i emoji!

## 🔢 Python jako super-kalkulator!

Nim przejdziemy do gry, sprawdźmy, jak Python radzi sobie z matematyką!

### Podstawowe operacje matematyczne:

```python
# Proste obliczenia
print("Dodawanie: 5 + 3 =", 5 + 3)
print("Odejmowanie: 10 - 4 =", 10 - 4)  
print("Mnożenie: 6 * 7 =", 6 * 7)
print("Dzielenie: 15 / 3 =", 15 / 3)

# Bardziej skomplikowane
print("Potęgowanie: 2 ** 3 =", 2 ** 3)  # 2 do potęgi 3
print("Reszta z dzielenia: 17 % 5 =", 17 % 5)  # Reszta z 17÷5
```

### 🧮 Interaktywny kalkulator!

```python
# Nasz pierwszy kalkulator!
print("🧮 KALKULATOR PYTHON 🧮")
print("=" * 25)

liczba1 = input("Podaj pierwszą liczbę: ")
liczba2 = input("Podaj drugą liczbę: ")

# UWAGA! input() zawsze daje tekst, musimy zmienić na liczby!
liczba1 = int(liczba1)  # Zmienia tekst na liczbę całkowitą
liczba2 = int(liczba2)

suma = liczba1 + liczba2
roznica = liczba1 - liczba2
iloczyn = liczba1 * liczba2

print("\n📊 WYNIKI:")
print(f"➕ {liczba1} + {liczba2} = {suma}")
print(f"➖ {liczba1} - {liczba2} = {roznica}")
print(f"✖️ {liczba1} × {liczba2} = {iloczyn}")

print("\n🎉 Dziękuję za korzystanie z kalkulatora!")
```

**Ważna nauka:** 🎓
- `input()` zawsze zwraca tekst (string), nawet jeśli użytkownik wpisze cyfry!
- `int()` zmienia tekst na liczbę całkowitą (integer).
- `f"..."` to nowy, wygodny sposób łączenia tekstu ze zmiennymi (tzw. f-string).

### 🎯 Mini zadanie 4: Prosty kalkulator
**Wyzwanie matematyczne!** Napisz program, który:
- Pyta o Twój wiek
- Oblicza, ile lat będziesz miał za 5 lat i ile miałeś 3 lata temu
- Wyświetla wyniki w ładnym formacie

## 🎮 Nasza pierwsza gra: "Zgadnij liczbę!"

A teraz najlepsza część - napiszemy prawdziwą grę! 🎊

### Gra "Zgadnij liczbę" - wersja podstawowa:

```python
# Gra: Zgadnij liczbę!
print("🎮" * 30)
print("🎯  GRA: ZGADNIJ LICZBĘ!  🎯")
print("🎮" * 30)

print("Cześć! Pomyślałem sobie liczbę od 1 do 10.")
print("Czy potrafisz ją zgadnąć? 🤔")

# Nasza sekretna liczba
sekretna_liczba = 7

# Gracz zgaduje
odpowiedz_gracza = input("\nPodaj swoją odpowiedź (1-10): ")
odpowiedz_gracza = int(odpowiedz_gracza)  # Zmieniamy tekst na liczbę

# Sprawdzamy odpowiedź
print("\n🔍 Sprawdzam Twoją odpowiedź...")

if odpowiedz_gracza == sekretna_liczba:
    print("🎉 BRAWO! Zgadłeś! Sekretną liczbą było", sekretna_liczba)
    print("🏆 Jesteś mistrzem zgadywania!")
else:
    print("😔 Niestety, nie tym razem!")
    print("🔢 Sekretną liczbą było:", sekretna_liczba)
    print("💪 Spróbuj jeszcze raz!")

print("\n🎮 Dziękuję za grę!")
```

**Co nowego się nauczyliśmy?**
- `if` - słowo kluczowe, które znaczy "jeżeli"
- `==` - sprawdza, czy dwie rzeczy są równe
- `else` - oznacza "w przeciwnym przypadku"

### � Mini zadanie 5: Sprawdzanie hasła
**Gra w detektywa!** Napisz program, który:
- Ma ustalone "sekretne hasło" w zmiennej (np. "python123")
- Pyta użytkownika o hasło
- Jeśli hasło jest prawidłowe - wyświetla "Dostęp dozwolony! 🔓"
- Jeśli nie - wyświetla "Dostęp zabroniony! 🔒"

### �🌟 Gra "Zgadnij liczbę" - wersja MEGA!

```python
import random  # To pozwala nam losować liczby!

# MEGA Gra: Zgadnij liczbę!
print("🌟" * 40)
print("🎯  MEGA GRA: ZGADNIJ LICZBĘ!  🎯")
print("🌟" * 40)

print("Witaj w najlepszej grze zgadywania liczb! 🚀")
print("Komputer wylosuje liczbę od 1 do 20.")
print("Masz 3 próby, żeby ją zgadnąć! 💪")

# Komputer losuje liczbę
sekretna_liczba = random.randint(1, 20)
ilosc_prob = 3

print(f"\n🎲 Wylosowałem liczbę od 1 do 20!")
print(f"🔥 Masz {ilosc_prob} próby. Powodzenia! 🍀\n")

# Pierwsza próba
print("🥇 PRÓBA 1:")
zgadniecie1 = int(input("Podaj swoją odpowiedź: "))

if zgadniecie1 == sekretna_liczba:
    print("🎉 NIESAMOWITE! Zgadłeś za pierwszym razem!")
    print("🏆 Jesteś prawdziwym mistrzem! 👑")
else:
    if zgadniecie1 < sekretna_liczba:
        print("📈 Za mało! Spróbuj podać większą liczbę!")
    else:
        print("📉 Za dużo! Spróbuj podać mniejszą liczbę!")
    
    # Druga próba
    print("\n🥈 PRÓBA 2:")
    zgadniecie2 = int(input("Podaj swoją odpowiedź: "))
    
    if zgadniecie2 == sekretna_liczba:
        print("🎉 BRAWO! Zgadłeś za drugim razem!")
        print("🏆 Świetna robota! 😎")
    else:
        if zgadniecie2 < sekretna_liczba:
            print("📈 Nadal za mało!")
        else:
            print("📉 Nadal za dużo!")
        
        # Ostatnia próba!
        print("\n🥉 OSTATNIA PRÓBA!")
        print("⚡ To Twoja ostatnia szansa!")
        zgadniecie3 = int(input("Podaj swoją odpowiedź: "))
        
        if zgadniecie3 == sekretna_liczba:
            print("🎉 FANTASTYCZNIE! Zgadłeś w ostatniej chwili!")
            print("🏆 Jesteś niesamowity! 🌟")
        else:
            print("😔 Koniec prób!")
            print(f"🔢 Sekretną liczbą było: {sekretna_liczba}")
            print("💪 Ale nie martw się - każdy może spróbować ponownie!")

print("\n🎮 Dziękuję za świetną grę!")
print("🚀 Uruchom program jeszcze raz, żeby zagrać ponownie!")
```

**Nowe rzeczy w mega-wersji:**
- `import random` - importuje bibliotekę do losowania
- `random.randint(1, 20)` - losuje liczbę całkowitą od 1 do 20
- Więcej instrukcji `if/else` - komputer podpowiada czy za mało/za dużo!
- Trzy próby dla gracza

### 🎯 Mini zadanie 6: Gra z liczbami
**Ulepszenia gry!** Spróbuj zmodyfikować podstawową grę tak, żeby:
- Sekretna liczba była z przedziału 1-100
- Po błędnej odpowiedzi pokazywała podpowiedź "wyższa" lub "niższa"
- Liczyła ile prób potrzebował gracz

## 🎨 Zadania do wykonania!

### Zadanie 1: Ankieta o sobie 📝
Stwórz program, który:
1. Pyta o Twoje imię, wiek, klasę i hobby
2. Pyta o Twoją ulubioną grę komputerową
3. Pyta, czy lubisz matematykę (tak/nie)
4. Na końcu wyświetla podsumowanie w ładnej ramce

### Zadanie 2: Kalkulator wieku psa 🐕
Napisz program, który:
1. Pyta o wiek Twojego psa (lub wymyślonego)
2. Oblicza wiek psa w latach ludzkich (wiek psa × 7)
3. Wyświetla wynik w zabawny sposób

**Przykład:**
```
Twój pies ma 3 lata.
W latach ludzkich to 21 lat!
Twój pies może już iść na studia! 🎓
```

### Zadanie 3: Gra "Zgadnij słowo" 📝
Stwórz grę, gdzie:
1. Komputer "pomyśli" sobie zwierzę (ustaw zmienną na np. "kot")
2. Gracz ma zgadnąć to zwierzę
3. Jeśli zgadnie - wygrywa!
4. Jeśli nie - komputer mówi, jakie było zwierzę

## 🧪 Eksperymenty do wypróbowania!

### Eksperyment 1: Zabawa ze zmiennymi 🔄
```python
# Zamiana miejscami!
a = "czekolada"
b = "wanilia"

print("Przed zamianą:")
print("a =", a)
print("b =", b)

# Magiczna zamiana!
tymczasowa = a
a = b  
b = tymczasowa

print("Po zamianie:")
print("a =", a)
print("b =", b)
```

### Eksperyment 2: ASCII Art Generator 🎨
```python
symbol = input("Podaj symbol do rysunku (np. *, #, @): ")
rozmiar = int(input("Podaj rozmiar (np. 5): "))

print("\n🎨 Twój rysunek:")
for i in range(rozmiar):
    print(symbol * (i + 1))
```

**Uwaga:** `for` i `range` to zaawansowane tematy - poznamy je w kolejnych lekcjach! Na razie po prostu ciesz się efektem! 😊

### 🎯 Mini zadanie 7: ASCII Art
**Kreatywne wyzwanie!** Napisz program, który:
- Pyta o Twoje imię
- Pyta o ulubiony symbol (*, #, @, itp.)
- Narysuje Twoje imię używając tego symbolu (każda litera to jeden symbol)

## 🐛 Najczęstsze błędy w Lekcji 2 (i jak je naprawić!)

### Błąd 1: Zapomnienie o int() ❌
```python
wiek = input("Ile masz lat? ")
za_rok = wiek + 1  # BŁĄD! Nie można dodać liczby do tekstu
```
✅ **Poprawka:**
```python
wiek = input("Ile masz lat? ")
wiek = int(wiek)  # Zmienia tekst na liczbę!
za_rok = wiek + 1
```

### Błąd 2: Mylenie = z == ❌
```python
if imie = "Ania":  # BŁĄD! Jeden znak =
    print("Cześć Ania!")
```
✅ **Poprawka:**
```python
if imie == "Ania":  # Dwa znaki == do porównania!
    print("Cześć Ania!")
```

### Błąd 3: Zapomnienie o cudzysłowach ❌
```python
imie = input(Jak masz na imię?)  # BŁĄD! Brak cudzysłowów
```
✅ **Poprawka:**
```python
imie = input("Jak masz na imię?")  # Tekst w cudzysłowach!
```

## 🎉 Fajne ciekawostki na koniec! 🤓

- Pierwsza gra komputerowa została stworzona w 1958 roku - nazywała się "Tennis for Two"! 🎾
- Zmienna to pomysł, który mają wszystkie języki programowania - nie tylko Python!
- Funkcja `input()` w Pythonie może przyjąć nawet 1000 znaków naraz! 📝
- Najdłuższa nazwa zmiennej w historii programowania miała 1019 znaków! (Ale nie rób tego!) 😅

## 🤖 Twój pomocnik AI - nowe możliwości! 

Teraz, gdy znasz zmienne i input(), możesz zadawać AI jeszcze lepsze pytania!

**🌟 Przykładowe pytania dla AI:**
- "Jak sprawić, żeby moja gra była trudniejsza?"
- "Pokarz mi kod na prostą grę w kamień-papier-nożyce"
- "Jak zrobić program, który sprawdza, czy liczba jest parzysta?"
- "Wygeneruj kod na prostą ankietę z 10 pytaniami"

**Przykład rozmowy z AI:**
**Ty:** "Jak zrobić program, który sprawdza czy podane imię jest długie?"

**AI:** Oto prosty kod:
```python
imie = input("Podaj swoje imię: ")
if len(imie) > 7:
    print("Masz długie imię!")
else:
    print("Masz krótkie imię!")
```

## 🚀 Co nas czeka w Lekcji 3?

W **Lekcji 3** nauczymy się:
- 🔄 Pętle - jak powtarzać kawałki kodu
- 📝 Listy - jak przechowywać wiele rzeczy naraz
- 🎲 Więcej gier z losowaniem
- 🎯 Napiszemy grę "Kamień, Papier, Nożyce"!

**Zapowiedź kodu z następnej lekcji:**
```python
gry = ["Kamień", "Papier", "Nożyce"]
for gra in gry:
    print("Dostępna opcja:", gra)
```

**Nie możesz się doczekać?** Przećwicz dzisiejsze zadania - w programowaniu praktyka czyni mistrza! 🎯

---

**Pamiętaj:** Każda linia kodu, którą napiszesz, to krok bliżej zostania prawdziwym programistą! Nie poddawaj się, jeśli coś nie działa - każdy błąd to nauka! 🌟

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

---

*Napisałeś jakiś fajny program na podstawie tej lekcji? Pochwal się w komentarzach! Wszyscy chcemy zobaczyć Twoje dzieła! 😊*
