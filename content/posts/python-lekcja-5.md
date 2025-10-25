+++
title = 'Python Podstawowy - Lekcja 5: Tworzymy Własną Grę Tekstową - Przygoda w Labiryncie!'
description = "Naucz się tworzyć własną grę tekstową w Pythonie! Utrwal wiedzę o pętlach i instrukcjach warunkowych, budując ekscytującą przygodę w labiryncie."
date = "2025-10-24T12:00:00+02:00"
draft = false
url = "/python-course/lekcja-5/"
author = 'Code Addict'
categories = ['python-course']
tags = ["python", "podstawy", "programowanie", "gra", "if-else", "while", "for", "random"]
series = ['Python Podstawowy']
+++

**[← Powrót do kursu Python Podstawowy](/python-course/)**

## Wstęp - Zostań Twórcą Gier! 🎮

Witaj w piątej lekcji naszego kursu Pythona! Dzisiaj zrobimy coś wyjątkowo ekscytującego – stworzymy własną grę przygodową. Wykorzystamy wszystko, czego nauczyliśmy się do tej pory: zmienne, `input()`, instrukcje `if/else` oraz pętle `while` i `for`.

Programowanie to nie tylko liczby i napisy. To potężne narzędzie do tworzenia interaktywnych historii i światów. Gotowy, by zostać projektantem gier?

## Plan naszej gry: "Przygoda w Labiryncie" 🗺️

Nasza gra będzie prostą przygodówką tekstową, w której gracz:

1.  Podaje swoje imię.
2.  Podejmuje decyzje, która ścieżka go poprowadzi.
3.  Porusza się po labiryncie w pętli, dopóki ma punkty życia.
4.  Zbiera skarby i unika pułapek.
5.  Na końcu otrzymuje podsumowanie swojej przygody.

Zaczynajmy!

## Krok 1: Powitanie Gracza

Każda dobra przygoda zaczyna się od przedstawienia bohatera. Napiszmy kod, który przywita gracza i zapyta go o imię.

```python
print("=" * 40)
print("TAJEMNICZY LABIRYNT")
print("=" * 40)

imie = input("Jak się nazywasz, śmiałku? ")
print(f"\nWitaj {imie}! Stoisz przed wejściem do tajemniczego labiryntu...")
```

**Wyjaśnienie:**

- `print("=" * 40)`: Ten sprytny trik tworzy ładny nagłówek, powtarzając znak `=` 40 razy.
- `input()`: Czeka na wpisanie imienia przez gracza i zapisuje je w zmiennej `imie`.
- `f-string`: Używamy go, aby wpleść imię gracza bezpośrednio w tekst powitalny.

## Krok 2: Pierwszy Wybór - Utrwalamy `if/else`

Nasz bohater stoi przed pierwszym wyborem. Od tej decyzji zależą jego dalsze losy. To idealne miejsce na przećwiczenie `if/elif/else`.

```python
print("\nPrzed tobą dwie drogi:")
print("1. Ciemny korytarz na lewo.")
print("2. Oświetlona ścieżka na prawo.")

wybor = input("Którą drogę wybierasz? (1 lub 2): ")

if wybor == "1":
    print("\nWchodzisz w ciemność... Słyszysz dziwne dźwięki!")
elif wybor == "2":
    print("\nIdziesz bezpieczną drogą. Znajdujesz złotą monetę!")
else:
    print("\nWahasz się i tracisz czas. Coś cię goni! Uciekasz w głąb labiryntu.")
```

**Przypomnienie:**

- `if`: Sprawdza, czy warunek jest prawdziwy (tutaj: czy gracz wpisał "1").
- `elif`: Jeśli pierwszy warunek był fałszywy, sprawdza kolejny (czy gracz wpisał "2").
- `else`: Wykonuje się, gdy żaden z powyższych warunków nie jest spełniony.

> **Jak myśli komputer?**
> Pomyśl o `if/else` jak o rozgałęzieniu dróg.
>
> - `if`: "Jeśli na znaku jest napis 'w lewo', skręć w lewo."
> - `elif`: "W przeciwnym razie, jeśli na znaku jest 'w prawo', skręć w prawo."
> - `else`: "W przeciwnym razie (jeśli nie ma żadnego z tych znaków), idź prosto."
>   Komputer sprawdza warunki po kolei i wykonuje tylko _pierwszą_ pasującą akcję.

## Krok 3: Główna Pętla Gry - Utrwalamy `while`

Labirynt to miejsce, po którym można krążyć. Główna część naszej gry będzie działać w pętli `while`. Pętla będzie się wykonywać tak długo, jak długo gracz ma więcej niż 0 punktów życia.

> **Ważne!** Cały kod piszemy w jednym pliku, jeden fragment pod drugim. Każdy kolejny krok rozbudowuje nasz program.

### Co to jest pętla `while`?

Wyobraź sobie, że masz talerz z ciastkami. Pętla `while` działa na zasadzie: "**dopóki** na talerzu są ciastka, **bierz** kolejne ciastko".

- **Warunek**: `dopóki na talerzu są ciastka`
- **Czynność**: `bierz kolejne ciastko`

Pętla `while` będzie powtarzać kod w swoim wnętrzu tak długo, jak jej warunek jest prawdziwy.

**Przykład - odliczanie:**

```python
# Proste odliczanie od 3 do 1
licznik = 3
while licznik > 0:
    print(f"Start za... {licznik}")
    licznik -= 1 # Zmniejszamy licznik, by pętla się kiedyś skończyła!
print("START!")
```

> **Uwaga!** Gdybyśmy zapomnieli o `licznik -= 1`, licznik zawsze byłby większy od 0, a pętla działałaby w nieskończoność!

Teraz zastosujmy to w naszej grze. Wprowadzimy też dwie nowe zmienne: `zycie` i `skarby`.

```python
zycie = 3
skarby = 0

# Ta pętla będzie działać, dopóki życie > 0
while zycie > 0:
    print(f"\n[Życie: {zycie} ❤️  | Skarby: {skarby} 💎]")
    print("\nCo robisz?")
    print("1. Idź dalej")
    print("2. Szukaj skarbów")
    print("3. Odpoczywaj")
    print("4. Wyjdź z labiryntu")

    akcja = input("Twój wybór: ")

    if akcja == "1":
        print("\nIdziesz przed siebie. Nic ciekawego się nie dzieje.")
    elif akcja == "2":
        print("\nRozglądasz się uważnie...")
        skarby += 1
        print("Znalazłeś skarb! Masz już ich", skarby)
    elif akcja == "3":
        print("\nOdpoczywasz i odzyskujesz siły.")
        zycie += 1
        print("Twoje życie wzrosło do", zycie)
    elif akcja == "4":
        print("\nPostanawiasz opuścić labirynt.")
        break # To słowo kluczowe przerywa pętlę!
    else:
        print("\nNieznana komenda. Spróbuj jeszcze raz.")

print("\nKONIEC GRY!")
print(f"Zdobyłeś {skarby} skarbów.")
```

**Nowe pojęcia:**

- `while zycie > 0`: Pętla `while` powtarza kod wewnątrz tak długo, jak warunek `zycie > 0` jest prawdziwy.
- `break`: Specjalna komenda, która natychmiast **przerywa działanie pętli**, w której się znajduje. Gracz wychodzi z labiryntu.
- `skarby += 1`: To skrócony zapis `skarby = skarby + 1`. Bardzo przydatne!

## Krok 4: Dodajemy Losowość - `import random`

Żeby gra była ciekawsza, dodajmy element zaskoczenia. Niech pójście naprzód nie zawsze będzie bezpieczne. Użyjemy do tego modułu `random`.

### Co to jest moduł `random`?

Wyobraź sobie, że Python ma magiczne pudełko z narzędziami, których nie używa na co dzień. Jednym z nich jest `random` - narzędzie do losowania.

- **`import random`**: Ta komenda mówi: "Hej, Python! Potrzebuję narzędzi z pudełka `random`." Musimy to zrobić tylko raz, na początku programu.
- **`random.randint(a, b)`**: To jak rzut kostką. Mówimy: "Losuj mi jedną liczbę całkowitą z przedziału od `a` do `b` (włącznie z `a` i `b`)".

**Przykład - rzut kostką:**

```python
import random

# Symulacja rzutu standardową kostką do gry
wynik_rzutu = random.randint(1, 6)
print(f"Wyrzuciłeś {wynik_rzutu} oczek!")
```

Teraz dodajmy losowość do naszej gry. Na samym **początku całego programu** (przed `print("=" * 40)`) dodaj linię:

```python
import random
```

A następnie zmodyfikujmy fragment pętli `while` dla akcji "1" (zastąp prostą wersję bardziej zaawansowaną):

```python
while zycie > 0:
    print(f"\n[Życie: {zycie} ❤️  | Skarby: {skarby} 💎]")
    print("\nCo robisz?")
    print("1. Idź dalej")
    print("2. Szukaj skarbów")
    print("3. Odpoczywaj")
    print("4. Wyjdź z labiryntu")

    akcja = input("Twój wybór: ")

    if akcja == "1":
        print("\nIdziesz przed siebie...")
        # Losujemy liczbę 1 lub 2
        if random.randint(1, 2) == 1:
            print("Niestety, wpadasz w pułapkę! Tracisz życie!")
            zycie -= 1 # To skrót od zycie = zycie - 1
        else:
            print("Bezpiecznie przechodzisz do następnej komnaty.")
    elif akcja == "2":
        print("\nRozglądasz się uważnie...")
        skarby += 1
        print("Znalazłeś skarb! Masz już ich", skarby)
    elif akcja == "3":
        print("\nOdpoczywasz i odzyskujesz siły.")
        zycie += 1
        print("Twoje życie wzrosło do", zycie)
    elif akcja == "4":
        print("\nPostanawiasz opuścić labirynt.")
        break
    else:
        print("\nNieznana komenda. Spróbuj jeszcze raz.")
```

**Wyjaśnienie:**

- `import random`: Mówi Pythonowi, że chcemy używać dodatkowych narzędzi z "pudełka" o nazwie `random`.
- `random.randint(1, 2)`: Funkcja, która losuje jedną liczbę całkowitą z podanego zakresu (w tym przypadku 1 lub 2). To jak rzut monetą - wynik będzie albo 1, albo 2. Dzięki temu nasza gra za każdym razem będzie inna!

## Pełny kod gry

Oto jak powinien wyglądać cały program po złożeniu wszystkich fragmentów:

```python
import random

print("=" * 40)
print("TAJEMNICZY LABIRYNT")
print("=" * 40)

imie = input("Jak się nazywasz, śmiałku? ")
print(f"\nWitaj {imie}! Stoisz przed wejściem do tajemniczego labiryntu...")

print("\nPrzed tobą dwie drogi:")
print("1. Ciemny korytarz na lewo.")
print("2. Oświetlona ścieżka na prawo.")

wybor = input("Którą drogę wybierasz? (1 lub 2): ")

if wybor == "1":
    print("\nWchodzisz w ciemność... Słyszysz dziwne dźwięki!")
elif wybor == "2":
    print("\nIdziesz bezpieczną drogą. Znajdujesz złotą monetę!")
else:
    print("\nWahasz się i tracisz czas. Coś cię goni! Uciekasz w głąb labiryntu.")

zycie = 3
skarby = 0

while zycie > 0:
    print(f"\n[Życie: {zycie} ❤️  | Skarby: {skarby} 💎]")
    print("\nCo robisz?")
    print("1. Idź dalej")
    print("2. Szukaj skarbów")
    print("3. Odpoczywaj")
    print("4. Wyjdź z labiryntu")

    akcja = input("Twój wybór: ")

    if akcja == "1":
        print("\nIdziesz przed siebie...")
        if random.randint(1, 2) == 1:
            print("Niestety, wpadasz w pułapkę! Tracisz życie!")
            zycie -= 1
        else:
            print("Bezpiecznie przechodzisz do następnej komnaty.")
    elif akcja == "2":
        print("\nRozglądasz się uważnie...")
        skarby += 1
        print("Znalazłeś skarb! Masz już ich", skarby)
    elif akcja == "3":
        print("\nOdpoczywasz i odzyskujesz siły.")
        zycie += 1
        print("Twoje życie wzrosło do", zycie)
    elif akcja == "4":
        print("\nPostanawiasz opuścić labirynt.")
        break
    else:
        print("\nNieznana komenda. Spróbuj jeszcze raz.")

print("\nKONIEC GRY!")
print(f"Zdobyłeś {skarby} skarbów.")
```

Skopiuj ten kod do pliku `.py` i uruchom, aby zagrać w swoją pierwszą grę!

## Ćwiczenia praktyczne

Spróbuj samodzielnie rozbudować grę! Oto kilka pomysłów:

**Ćwiczenie 1: "Strażnik Bramy"**
Dodaj do pętli `while` nową opcję, np. "5. Spróbuj otworzyć tajemnicze drzwi". Aby je otworzyć, gracz musi rozwiązać zagadkę matematyczną. Jeśli odpowie źle, traci życie.

```python
# Podpowiedź:
# elif akcja == "5":
#     odpowiedz = input("Strażnik pyta: Ile to 7 * 6? ")
#     if int(odpowiedz) == 42:
#         print("Brama się otwiera! Znajdujesz legendarny skarb!")
#         skarby += 10
#     else:
#         print("Zła odpowiedź! Strażnik cię atakuje!")
#         zycie -= 1
```

**Pamiętaj o `int()`**, aby zamienić odpowiedź gracza (która jest tekstem) na liczbę!

**Ćwiczenie 2: "Magiczny Przedmiot"**
Dodaj do gry przedmiot, który trzeba "naładować". Użyj pętli `for`, aby pokazać proces ładowania.

```python
# Podpowiedź:
# elif akcja == "6": # Nowa akcja: Użyj magicznego kamienia
#     print("Znalazłeś magiczny kamień! Ładuje się...")
#     for i in range(1, 6):
#         print(f"Ładowanie... {i * 20}%")
#     print("Kamień naładowany! Otrzymujesz +2 do życia!")
#     zycie += 2
```

## Praca domowa

Twoim zadaniem jest rozbudowanie gry "Przygoda w Labiryncie". Skopiuj cały kod, który stworzyliśmy na lekcji, i dodaj do niego:

1.  **Co najmniej dwie nowe lokacje/wybory** w pętli `while` (np. spotkanie z potworem, znalezienie mapy).
2.  **System punktów**: na początku gry przyznaj graczowi punkty, a za każdą akcję dodawaj lub odejmuj punkty. Wyświetl wynik na końcu.
3.  **(Dla chętnych)** Dodaj ASCII art, czyli proste obrazki ze znaków, aby urozmaicić opisy, np. skarbu lub potwora.

```
    💎
   /|\
  / | \
 SKARB!
```

## Podsumowanie

Gratulacje! Właśnie stworzyłeś swoją pierwszą grę tekstową w Pythonie! To ogromny krok naprzód. Na tej lekcji utrwaliliśmy działanie instrukcji warunkowych `if/else` i pętli `while`, a także nauczyliśmy się korzystać z modułu `random` do wprowadzania losowości.

Pamiętaj, że programowanie to przede wszystkim kreatywność. Możesz teraz dowolnie modyfikować swoją grę, dodawać nowe zagadki, postacie i przygody. Miłej zabawy!

**[← Powrót do kursu Python Podstawowy](/python-course/)**
