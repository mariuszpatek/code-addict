+++
title = 'Python Podstawowy - Lekcja 2: Rozmawiamy z Komputerem!'
date = 2025-09-20T10:00:00+02:00
draft = false
url = '/python-course/lekcja-2/'
description = 'Druga lekcja z serii Python Podstawowy. Uczymy się zmiennych, funkcji input() i tworzymy interaktywną wizytówkę!'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'podstawy', 'programowanie', 'nauka', 'zmienne', 'input']
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

\*\*Zauważyłeś, że komputer pokazał Twoje imię i... od razu o nim zapomniał? To dlatego, że nigdzie nie zapisaliśmy tej informacji!

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

## 🎨 Zadania do wykonania!

### Zadanie 1: Ankieta o sobie 📝

Stwórz program, który:

1. Pyta o Twoje imię, wiek, klasę i hobby
2. Pyta o Twoją ulubioną grę komputerową
3. Pyta, czy lubisz matematykę (tak/nie)
4. Na końcu wyświetla podsumowanie w ładnej ramce

### Zadanie 2: Opowieść przygodowa 📖

Napisz program, który:

1. Pyta o imię bohatera
2. Pyta o ulubione zwierzę
3. Pyta o ulubiony kolor
4. Tworzy krótką opowieść używając tych informacji

**Przykład:**

```
Dawno, dawno temu żył sobie [imię].
Miał on wiernego towarzysza - [zwierzę] o kolorze [kolor].
Razem przeżyli wiele przygód...
```

### Zadanie 3: Kreator nazw superbohaterów 🦸

Stwórz program, który:

1. Pyta o Twoje imię
2. Pyta o ulubiony kolor
3. Pyta o ulubione zwierzę
4. Tworzy nazwę superbohatera łącząc te informacje

**Przykład:** Imię: Ania, Kolor: Niebieski, Zwierzę: Kot → "Niebieski Kot Ania"

## 🐛 Najczęstsze błędy w Lekcji 2 (i jak je naprawić!)

### Błąd 1: Zapomnienie cudzysłowów ❌

```python
imie = input(Jak masz na imię?)  # BŁĄD! Brak cudzysłowów
```

✅ **Poprawka:**

```python
imie = input("Jak masz na imię?")  # Tekst w cudzysłowach!
```

### Błąd 2: Pomylenie nazwy zmiennej ❌

```python
imie = input("Jak masz na imię? ")
print("Cześć " + nazwa)  # BŁĄD! Zmienna nazywa się "imie", nie "nazwa"
```

✅ **Poprawka:**

```python
imie = input("Jak masz na imię? ")
print("Cześć " + imie)  # Używamy tej samej nazwy zmiennej!
```

### Błąd 3: Brak znaku + przy łączeniu tekstów ❌

```python
imie = "Ania"
print("Cześć " imie)  # BŁĄD! Brak +
```

✅ **Poprawka:**

```python
imie = "Ania"
print("Cześć " + imie)  # Dodajemy + między tekstami
```

## 🎉 Fajne ciekawostki na koniec! 🤓

- Pierwsza gra komputerowa została stworzona w 1958 roku - nazywała się "Tennis for Two"! 🎾
- Zmienna to pomysł, który mają wszystkie języki programowania - nie tylko Python!
- Funkcja `input()` w Pythonie może przyjąć nawet 1000 znaków naraz! 📝
- W starszych wersjach Pythona (Python 2) funkcja nazywała się `raw_input()` zamiast `input()`!

## 🤖 Twój pomocnik AI - nowe możliwości!

Teraz, gdy znasz zmienne i input(), możesz zadawać AI jeszcze lepsze pytania!

**🌟 Przykładowe pytania dla AI:**

- "Jak zrobić program, który pyta o 5 różnych rzeczy?"
- "Pokaż mi kod na prostą ankietę"
- "Jak stworzyć program, który tworzy historyjkę z podanych słów?"
- "Wygeneruj kod na kreatywną wizytówkę z emoji"

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

### 🎓 Wskazówka: ChatGPT jako Twój Nauczyciel!

Czy wiesz, że możesz używać ChatGPT do nauki? W **Lekcji 3** pokażę Ci **specjalną magiczną formułę**, dzięki której ChatGPT stanie się Twoim prywatnym nauczycielem programowania! 🧙‍♂️

Będziesz mógł zadawać pytania i dostawać odpowiedzi krok po kroku, z przykładami i ćwiczeniami!

**Nie mogę się doczekać?** Przeczytaj Lekcję 3 - tam znajdziesz pełny przewodnik! 🚀

## 🚀 Co nas czeka w Lekcji 3?

W **Lekcji 3** nauczymy się:

- 🔢 Python jako super-kalkulator
- 🧮 Działania matematyczne w programach
- 🎮 **Napiszemy naszą pierwszą grę: "Zgadnij liczbę"!**
- 💡 Poznamy instrukcje warunkowe `if` i `else`

**Zapowiedź kodu z następnej lekcji:**

```python
wiek = int(input("Ile masz lat? "))
za_5_lat = wiek + 5
print("Za 5 lat będziesz mieć", za_5_lat, "lat!")
```

**Nie możesz się doczekać?** Przećwicz dzisiejsze zadania - w programowaniu praktyka czyni mistrza! 🎯

---

**Pamiętaj:** Każda linia kodu, którą napiszesz, to krok bliżej zostania prawdziwym programistą! Nie poddawaj się, jeśli coś nie działa - każdy błąd to nauka! 🌟

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

---

_Napisałeś jakiś fajny program na podstawie tej lekcji? Pochwal się w komentarzach! Wszyscy chcemy zobaczyć Twoje dzieła! 😊_
