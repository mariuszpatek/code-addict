+++
title = 'Python Podstawowy - Lekcja 3: Python Kalkulator i Pierwsza Gra!'
date = 2025-09-27T10:00:00+02:00
draft = false
url = '/python-course/lekcja-3/'
description = 'Trzecia lekcja z serii Python Podstawowy. Uczymy się matematyki w Pythonie, instrukcji warunkowych i tworzymy grę "Zgadnij liczbę"!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'podstawy', 'programowanie', 'nauka', 'matematyka', 'gra', 'if-else']
series = ['Python Podstawowy']
+++

# 🔢 Lekcja 3: Python Kalkulator i Pierwsza Gra!

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Witaj ponownie młody programisto! 👋 W drugiej lekcji nauczyłeś się zmiennych i funkcji `input()`. Dzisiaj Python stanie się Twoim super-kalkulatorem, a potem napiszemy prawdziwą grę! 🎮

<!--more-->

## 🎯 Czego się dzisiaj nauczymy?

W tej trzeciej lekcji poznamy:
- 🔢 Python jako super-kalkulator
- 🧮 Jak zamieniać tekst na liczby (`int()`)
- ❓ Instrukcje warunkowe `if` i `else`
- 🎮 **Napiszemy grę: "Zgadnij liczbę"!**

## 🔢 Python jako super-kalkulator!

Python to nie tylko narzędzie do wypisywania tekstu - to także potężny kalkulator!

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

**Wypróbuj to w Thonny!** Zobaczysz wyniki:
```
Dodawanie: 5 + 3 = 8
Odejmowanie: 10 - 4 = 6
Mnożenie: 6 * 7 = 42
Dzielenie: 15 / 3 = 5.0
Potęgowanie: 2 ** 3 = 8
Reszta z dzielenia: 17 % 5 = 2
```

### 🎯 Mini zadanie 1: Testy matematyczne
**Eksperyment!** Oblicz w Pythonie:
- 100 + 234
- 50 * 12
- 2 do potęgi 10 (wskazówka: `2 ** 10`)
- Resztę z dzielenia 23 przez 4

## 🧮 Interaktywny kalkulator!

Teraz połączymy matematykę z `input()` - ale jest jeden haczyk! 🪝

### Problem: input() daje tekst, nie liczby!

```python
# To NIE ZADZIAŁA poprawnie!
liczba1 = input("Podaj pierwszą liczbę: ")
liczba2 = input("Podaj drugą liczbę: ")
suma = liczba1 + liczba2  # To połączy teksty, nie doda liczb!
print("Suma:", suma)
```

**Co się stanie?** Jeśli wpiszesz 5 i 3, dostaniesz "53" zamiast 8! 😱

**Dlaczego?** Funkcja `input()` zawsze zwraca **tekst** (string), nawet jeśli wpiszesz cyfry!

### Rozwiązanie: funkcja int()! 🎯

```python
# Teraz ZADZIAŁA!
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

### 🎯 Mini zadanie 2: Kalkulator wieku
**Wyzwanie matematyczne!** Napisz program, który:
- Pyta o Twój wiek
- Oblicza, ile lat będziesz miał za 5 lat
- Oblicza, ile lat miałeś 3 lata temu
- Wyświetla wyniki w ładnym formacie z emoji

**Wskazówka:** Pamiętaj o `int()`!

## 💡 Instrukcje warunkowe - komputer podejmuje decyzje!

Do tej pory nasz komputer robił zawsze to samo. Teraz nauczymy go **podejmować decyzje**! 🤔

### Poznajemy `if` i `else`

**`if`** znaczy "jeżeli"  
**`else`** znaczy "w przeciwnym przypadku"

### Pierwszy przykład - sprawdzanie hasła:

```python
# Prosta gra w hasło
sekretne_haslo = "python123"

print("🔐 SYSTEM OCHRONY 🔐")
haslo = input("Podaj hasło: ")

if haslo == sekretne_haslo:
    print("✅ Dostęp dozwolony! Witaj w systemie! 🎉")
else:
    print("❌ Dostęp zabroniony! Nieprawidłowe hasło! 🔒")
```

**Zwróć uwagę:**
- `==` (dwa znaki równości) - sprawdza, czy dwie rzeczy są równe
- `=` (jeden znak równości) - przypisuje wartość do zmiennej
- Po `if` i `else` jest **dwukropek** `:`
- Kod pod `if` i `else` jest **wcięty** (4 spacje lub Tab)

### 🎯 Mini zadanie 3: Quiz matematyczny
**Sprawdź wiedzę!** Napisz program, który:
- Pyta "Ile to 5 + 3?"
- Jeśli odpowiedź to 8 - wyświetla "Brawo! Poprawna odpowiedź! 🎉"
- Jeśli nie - wyświetla "Niestety, to nie jest 8. Spróbuj jeszcze raz!"

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

### 🎯 Mini zadanie 4: Gra w zgadywanie słowa
**Twoja gra!** Napisz program, który:
- Ma ustalone "sekretne zwierzę" w zmiennej (np. "kot")
- Pyta gracza: "Zgadnij, o jakim zwierzęciu myślę?"
- Jeśli zgadnie - wyświetla "Brawo! To był kot! 🐱"
- Jeśli nie - wyświetla "Nie, to nie było [odpowiedź]. Myślałem o kocie!"

## 🌟 Gra "Zgadnij liczbę" - wersja z podpowiedziami!

Ulepszmy naszą grę - dodajmy podpowiedzi "za mało" lub "za dużo"!

```python
# Gra z podpowiedziami
print("🎮" * 30)
print("🎯  GRA: ZGADNIJ LICZBĘ!  🎯")
print("🎮" * 30)

print("Pomyślałem sobie liczbę od 1 do 20.")
print("Spróbuj ją zgadnąć! 🤔")

sekretna_liczba = 13

odpowiedz = input("\nPodaj swoją odpowiedź (1-20): ")
odpowiedz = int(odpowiedz)

print("\n🔍 Sprawdzam...")

if odpowiedz == sekretna_liczba:
    print("🎉 BRAWO! Zgadłeś za pierwszym razem!")
    print("🏆 Jesteś prawdziwym mistrzem!")
else:
    if odpowiedz < sekretna_liczba:
        print("📈 Za mało! Moja liczba jest większa!")
    else:
        print("📉 Za dużo! Moja liczba jest mniejsza!")
    
    print(f"🔢 Sekretną liczbą było: {sekretna_liczba}")
    print("💪 Następnym razem na pewno zgadniesz!")

print("\n🎮 Dziękuję za grę!")
```

**Co nowego?**
- `<` - mniejsze niż
- `>` - większe niż
- Możemy używać `if` wewnątrz `else` - to nazywa się **zagnieżdżone if**!

### 🎯 Mini zadanie 5: Gra z trzema próbami
**Wyzwanie!** Rozszerz grę tak, żeby:
- Gracz miał 3 próby
- Po każdej błędnej odpowiedzi wyświetlała się podpowiedź
- Po trzech próbach gra się kończy

**Wskazówka:** Będziesz potrzebować kilku instrukcji `if` jedna po drugiej!

## 🎲 Gra z LOSOWĄ liczbą!

Chcesz, żeby komputer sam wybierał liczbę? Użyjmy biblioteki `random`!

```python
import random  # To pozwala nam losować liczby!

# Gra z losową liczbą
print("🌟" * 40)
print("🎯  LOSOWA GRA W ZGADYWANIE!  🎯")
print("🌟" * 40)

print("Komputer wylosuje liczbę od 1 do 20.")
print("Spróbuj ją zgadnąć! 🎲")

# Komputer losuje liczbę
sekretna_liczba = random.randint(1, 20)

print("\n🎲 Wylosowałem liczbę!")
odpowiedz = int(input("Podaj swoją odpowiedź (1-20): "))

print("\n🔍 Sprawdzam...")

if odpowiedz == sekretna_liczba:
    print("🎉 NIESAMOWITE! Zgadłeś!")
    print("🏆 Jesteś prawdziwym szczęściarzem!")
else:
    if odpowiedz < sekretna_liczba:
        print("📈 Za mało!")
    else:
        print("📉 Za dużo!")
    
    print(f"🔢 Wylosowaną liczbą było: {sekretna_liczba}")
    print("💪 Spróbuj ponownie - uruchom program jeszcze raz!")

print("\n🎮 Dziękuję za grę!")
```

**Nowe rzeczy:**
- `import random` - importuje bibliotekę do losowania
- `random.randint(1, 20)` - losuje liczbę całkowitą od 1 do 20
- Teraz za każdym razem będzie inna liczba! 🎲

## 🎨 Zadania do wykonania!

### Zadanie 1: Kalkulator wieku psa 🐕
Napisz program, który:
1. Pyta o wiek Twojego psa (lub wymyślonego)
2. Oblicza wiek psa w latach ludzkich (wiek psa × 7)
3. Wyświetla wynik w zabawny sposób
4. Jeśli pies ma więcej niż 10 lat w "ludzkich latach" - wyświetla "Twój pies może już iść na emeryturę! 👴"

### Zadanie 2: Quiz wiedzy ogólnej 📚
Stwórz quiz z 3 pytaniami, np.:
- "Ile to 10 + 5?"
- "Jaka jest stolica Polski?"
- "Ile nóg ma pająk?"

Program powinien:
- Zadawać każde pytanie
- Sprawdzać odpowiedź
- Wyświetlać "Dobrze!" lub "Źle!"

### Zadanie 3: Mega kalkulator 🧮
Napisz super-kalkulator, który:
1. Pyta o dwie liczby
2. Pyta, jaką operację wykonać (+, -, *, /)
3. Wykonuje odpowiednie działanie
4. Wyświetla wynik w ładnym formacie

## 🐛 Najczęstsze błędy w Lekcji 3 (i jak je naprawić!)

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

### Błąd 3: Zapomnienie o dwukropku i wcięciach ❌
```python
if wiek > 10  # BŁĄD! Brak dwukropka
print("Masz więcej niż 10 lat")  # BŁĄD! Brak wcięcia
```
✅ **Poprawka:**
```python
if wiek > 10:  # Dwukropek!
    print("Masz więcej niż 10 lat")  # Wcięcie (4 spacje lub Tab)
```

### Błąd 4: Próba użycia int() na tekście z literami ❌
```python
odpowiedz = input("Podaj liczbę: ")  # Użytkownik wpisuje "pięć"
liczba = int(odpowiedz)  # BŁĄD! "pięć" to nie cyfra!
```
✅ **Rozwiązanie:**
- Użytkownik musi wpisać cyfrę (5), nie słowo ("pięć")
- Python pokaże błąd, jeśli spróbujesz zamienić litery na liczbę

## 🎉 Fajne ciekawostki na koniec! 🤓

- Pierwsza gra "Zgadnij liczbę" została napisana w latach 60. XX wieku! 🎮
- Python może obliczyć 2 do potęgi 1000 w ułamku sekundy! Spróbuj: `print(2 ** 1000)` 🚀
- Znak `==` używają prawie wszystkie języki programowania do porównywania wartości! 🌍
- Biblioteka `random` w Pythonie używa skomplikowanych algorytmów matematycznych do generowania "losowych" liczb! 🎲

## 🤖 Twój pomocnik AI - rozwiązywanie problemów!

Teraz znasz już sporo! Oto przykłady pytań dla AI:

**🌟 Przykładowe pytania:**
- "Jak sprawić, żeby moja gra miała 5 prób zamiast 3?"
- "Pokaż mi kod na grę w kamień-papier-nożyce"
- "Jak zrobić kalkulator, który działa w pętli?"
- "Jak sprawdzić, czy liczba jest parzysta?"

**Przykład rozmowy:**
**Ty:** "Jak sprawdzić, czy liczba jest parzysta?"

**AI:** Użyj operatora modulo `%`:
```python
liczba = int(input("Podaj liczbę: "))
if liczba % 2 == 0:
    print("Liczba jest parzysta!")
else:
    print("Liczba jest nieparzysta!")
```

## 🎓 Magiczny Tryb Nauki z ChatGPT!

Czy wiesz, że możesz używać ChatGPT jako swojego **prywatnego nauczyciela programowania**? 🧙‍♂️

ChatGPT ma specjalny **"Learning Mode"** (Tryb Nauki), który pomoże Ci zrozumieć Pythona krok po kroku!

### 🌟 Magiczna Formuła - Twój Osobisty Prompt do Nauki!

Skopiuj i wklej ten szablon do ChatGPT, **wypełniając tylko miejsca w {{nawiasach}}**:

```
Jesteś moim nauczycielem programowania 🎓 - z Twoją pomocą chciałbym 
zrozumieć nowe zagadnienie w Pythonie.

Mój poziom wiedzy: {{początkujący/średniozaawansowany}} w Pythonie.
Mam {{ile tygodni/miesięcy}} doświadczenia z programowaniem.
Umiem już: {{np. print(), input(), zmienne, if/else}}.

Cel nauki: Chcę zrozumieć {{np. pętle while, listy, funkcje}} aby 
{{np. stworzyć grę w kółko i krzyżyk}}.

Napotykam następującą blokadę: {{np. nie rozumiem, dlaczego pętla 
się nie kończy / nie wiem, jak dodać element do listy}}.

Proszę o wyjaśnienie tego zagadnienia krok po kroku, zaczynając od 
{{podstaw}} i przechodząc do {{praktycznego zastosowania}}.

Najlepiej uczę się poprzez {{przykłady z grami / proste ćwiczenia / 
kod z komentarzami}}.

Preferuję odpowiedź w formie {{krótkiego kodu z wyjaśnieniami / 
serii łatwych zadań / projektu do zrobienia}}.

Czy możesz mi pomóc zrozumieć to zagadnienie krok po kroku? 🚀
```

### 📝 Przykład Użycia - Dla Ciebie!

**Oto jak mógłbyś użyć tego promptu po dzisiejszej lekcji:**

```
Jesteś moim nauczycielem programowania 🎓 - z Twoją pomocą chciałbym 
zrozumieć nowe zagadnienie w Pythonie.

Mój poziom wiedzy: początkujący w Pythonie.
Mam 3 tygodnie doświadczenia z programowaniem.
Umiem już: print(), input(), zmienne, int(), if/else.

Cel nauki: Chcę zrozumieć jak sprawdzić, czy liczba jest parzysta 
lub nieparzysta aby stworzyć grę, która zgaduje parzystość liczby.

Napotykam następującą blokadę: nie rozumiem, jak działa operator % 
(modulo) i dlaczego liczba % 2 == 0 oznacza, że liczba jest parzysta.

Proszę o wyjaśnienie tego zagadnienia krok po kroku, zaczynając od 
podstaw i przechodząc do praktycznego zastosowania.

Najlepiej uczę się poprzez proste przykłady z komentarzami.

Preferuję odpowiedź w formie krótkiego kodu z wyjaśnieniami i kilku 
prostych zadań do przećwiczenia.

Czy możesz mi pomóc zrozumieć to zagadnienie krok po kroku? 🚀
```

### 🎯 Co Dostaniesz?

ChatGPT odpowie Ci na przykład tak:

**ChatGPT:** "Świetnie! Wyjaśnię Ci operator modulo (%) krok po kroku! 🎓

**Krok 1: Czym jest modulo?**
Operator % (modulo) zwraca **resztę z dzielenia**. Na przykład:
- 7 % 2 = 1 (bo 7 ÷ 2 = 3 reszty 1)
- 8 % 2 = 0 (bo 8 ÷ 2 = 4 reszty 0)

**Krok 2: Jak to działa z liczbami parzystymi?**
```python
# Liczby parzyste dzielą się przez 2 bez reszty
8 % 2 = 0  # Parzysta!
10 % 2 = 0 # Parzysta!

# Liczby nieparzyste mają resztę 1
7 % 2 = 1  # Nieparzysta!
9 % 2 = 1  # Nieparzysta!
```

**Krok 3: Kod z komentarzami:**
```python
liczba = int(input('Podaj liczbę: '))

# Sprawdzamy resztę z dzielenia przez 2
if liczba % 2 == 0:
    print('To liczba parzysta! 😊')
else:
    print('To liczba nieparzysta! 🎲')
```

**Zadania do przećwiczenia:**
1. Sprawdź, czy liczba dzieli się przez 3
2. Sprawdź, czy liczba dzieli się przez 5
3. Stwórz grę: komputer losuje liczbę, gracz zgaduje czy parzysta czy nieparzysta"

### 💡 Wskazówki, jak najlepiej używać ChatGPT:

**✅ DOBRE pytania:**
- "Wyjaśnij mi krok po kroku, jak działa if/else"
- "Pokaż mi 3 proste przykłady użycia zmiennych"
- "Jak mogę ulepszyć tę grę?" [wklejasz swój kod]
- "Dlaczego ten kod nie działa?" [opisujesz błąd]

**❌ ZŁE pytania:**
- "Zrób za mnie zadanie domowe"
- "Napisz całą grę bez wyjaśnień"

**🌟 SUPER pytania:**
- "Napisz kod z komentarzami wyjaśniającymi każdą linię"
- "Podaj mi 5 zadań o rosnącej trudności na temat [...]"
- "Wytłumacz mi ten błąd prostymi słowami: [błąd]"

### 🎮 Przykłady Promptów dla Różnych Sytuacji:

**🔧 Gdy coś nie działa:**
```
Mój kod nie działa i dostaję błąd. Oto mój kod:
[wklej kod]

Oto błąd:
[wklej komunikat błędu]

Wyjaśnij mi prostymi słowami, co jest nie tak i jak to naprawić?
```

**🚀 Gdy chcesz się rozwijać:**
```
Właśnie skończyłem Lekcję 3 o if/else. Podaj mi 5 kreatywnych 
projektów (od łatwego do trudnego), które pomogą mi przećwiczyć 
instrukcje warunkowe. Każdy projekt opisz w 2-3 zdaniach.
```

**💪 Gdy chcesz wyzwania:**
```
Napisałem ten kod [wklej kod]. Działa, ale chcę go ulepszyć. 
Podaj mi 3 pomysły, jak mogę go zrobić lepszym/ciekawszym/bardziej 
zaawansowanym. Wyjaśnij każdy pomysł i pokaż przykład kodu.
```

### 🎯 Twoje Zadanie!

**Wypróbuj to teraz!** 

1. Otwórz ChatGPT (chat.openai.com)
2. Skopiuj "Magiczną Formułę" z góry
3. Wypełnij {{nawiasy}} swoimi informacjami
4. Zadaj pytanie o coś z dzisiejszej lekcji!
5. Zobacz, jak ChatGPT krok po kroku Ci to wyjaśni! 🎓

**Pamiętaj:** ChatGPT to Twój pomocnik, nie zastępstwo za naukę! Najlepiej uczyć się, próbując samemu, a ChatGPT używać, gdy utkniesz lub chcesz zrozumieć coś lepiej. 💡

## 🚀 Co nas czeka w Lekcji 4?

W **Lekcji 4** nauczymy się:
- 🔄 Pętle - jak powtarzać kod wiele razy
- 📝 Listy - jak przechowywać wiele wartości
- 🎮 Stworzymy grę "Kamień, Papier, Nożyce"!
- ⚡ Poznamy pętlę `while` i `for`

**Zapowiedź kodu z następnej lekcji:**
```python
# Gra, która działa w pętli!
while True:
    odpowiedz = input("Chcesz zagrać jeszcze raz? (tak/nie): ")
    if odpowiedz == "nie":
        break
    print("Zagrajmy jeszcze raz!")
```

**Nie możesz się doczekać?** Przećwicz wszystkie zadania z tej lekcji - im więcej ćwiczysz, tym lepszy będziesz! 💪

---

**Pamiętaj:** Każdy błąd to okazja do nauki! Nie martw się, jeśli coś nie działa za pierwszym razem. Wszyscy programiści popełniają błędy - ważne jest, żeby się z nich uczyć! 🌟

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**  
**[← Wróć do Lekcji 2](/code-addict/python-course/lekcja-2/)**  
**[→ Przejdź do Lekcji 4](/code-addict/python-course/lekcja-4/)**

---

*Udało Ci się zgadnąć liczbę za pierwszym razem? A może masz pomysł na ulepszenie gry? Napisz w komentarzach! 😊*
