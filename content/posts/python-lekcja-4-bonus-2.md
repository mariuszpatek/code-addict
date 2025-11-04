+++
title = 'Python Podstawowy - Lekcja 4 Bonus 2: Powtarzamy i porządkujemy! – Pętle i listy w Pythonie'
description = "Utrwal swoją wiedzę o pętlach for i while. Naucz się, czym są listy, jak je tworzyć i jak używać ich w praktycznych programach, takich jak lista zakupów."
date = "2025-10-24T12:00:00+02:00"
draft = false
url = "/python-course/lekcja-4-bonus-2/"
author = 'Code Addict'
categories = ['python-course']
tags = ["python", "podstawy", "programowanie", "pętle", "for", "while", "listy", "gra"]
series = ['Python Podstawowy']
+++

**[← Powrót do kursu Python Podstawowy](/python-course/)**

## Wstęp - Dlaczego Powtarzanie Jest Super? 🔄

Cześć! Wiesz, że komputery uwielbiają robić to samo w kółko? My, ludzie, szybko się nudzimy, ale komputer może powtórzyć czynność tysiąc razy i się nie zmęczy! Dzisiaj nauczymy go, jak to robić za pomocą **pętli**.

Pomyśl, ile rzeczy w życiu się powtarza:

- Mycie zębów (ruch szczoteczką w przód i w tył).
- Kroki podczas chodzenia.
- Mruganie oczami.

W programowaniu pętle pozwalają nam automatyzować takie powtarzalne zadania. Zaczynajmy!

## Pętla `for` - Nasz Pierwszy Automat

Pętla `for` to sposób, by powiedzieć komputerowi: "Hej, powtórz tę instrukcję dokładnie 5 razy!".

Zobacz ten prosty kod:

```python
for i in range(5):
    print("Cześć!")
```

**Co się stanie?** Komputer 5 razy wyświetli napis "Cześć!". `range(5)` tworzy sekwencję liczb od 0 do 4, a pętla wykonuje się dla każdej z nich.

### Liczymy z pętlą `for`

A co, jeśli chcemy zobaczyć te liczby?

```python
# Pętla wyświetli liczby od 1 do 10
for i in range(1, 11):
    print(i)
```

Uruchom ten kod! `range(1, 11)` oznacza "daj mi liczby od 1 do 10 włącznie".

**Ćwiczenie:** Zmień kod tak, aby wyświetlał liczby od 1 do 5, a potem od 1 do 20.

## Ćwiczenie Praktyczne: Tabliczka Mnożenia

Pętle są idealne do zadań matematycznych. Stwórzmy tabliczkę mnożenia dla liczby 5.

```python
for i in range(1, 11):
    print(f"5 x {i} = {5 * i}")
```

**Jak to działa?**

- Pętla `for` przechodzi przez liczby od 1 do 10.
- W każdej rundzie `i` to kolejna liczba (1, 2, 3...).
- `f-string` (ten `f` przed tekstem) pozwala wstawić wynik działania prosto do napisu!

**Zadanie dla Ciebie:** Stwórz tabliczkę mnożenia dla liczby 3. A jeśli czujesz się na siłach, spróbuj stworzyć tabliczkę dla wszystkich liczb od 1 do 10 (używając jednej pętli wewnątrz drugiej!).

### 💡 Mini-Zadanie 1: Liczby Parzyste

Napisz program, który za pomocą pętli `for` wypisze wszystkie liczby parzyste od 2 do 20.

<details>
  <summary>Kliknij, aby zobaczyć rozwiązanie</summary>
  
  ```python
  # Używamy range z trzecim argumentem - krokiem
  # range(start, stop, krok)
  for i in range(2, 21, 2):
      print(i)
  ```
</details>

## Pętla `while` - Powtarzaj, Dopóki Warunek Jest Prawdziwy 🕰️

Znasz już pętlę `for`, która powtarza coś określoną liczbę razy. A co, jeśli nie wiemy, ile razy coś ma się powtórzyć? Wtedy z pomocą przychodzi pętla `while`!

Działa ona tak: "Rób coś, **dopóki** pewien warunek jest prawdziwy".

Zobaczmy na przykładzie odliczania:

```python
licznik = 5
while licznik > 0:
    print(licznik)
    licznik = licznik - 1  # Zmniejszamy licznik o 1

print("Start!")
```

**Jak to działa?**

1.  `licznik` na początku ma wartość 5.
2.  Pętla `while` sprawdza warunek: `licznik > 0` (czy 5 jest większe od 0? Tak).
3.  Wykonuje kod w środku: drukuje `5` i zmniejsza `licznik` do 4.
4.  Wraca na początek i znowu sprawdza warunek (czy 4 > 0? Tak).
5.  ...i tak dalej, aż `licznik` osiągnie 0. Wtedy warunek `0 > 0` jest fałszywy i pętla się kończy.

> **Ważne!** W pętli `while` musisz pamiętać, aby zmieniać warunek. Inaczej pętla będzie działać w nieskończoność!

### 💡 Mini-Zadanie 2: Tajne Hasło

Stwórz program, który prosi użytkownika o podanie hasła. Pętla `while` ma działać tak długo, dopóki użytkownik nie wpisze poprawnego hasła, czyli "sekret".

<details>
  <summary>Kliknij, aby zobaczyć rozwiązanie</summary>
  
  ```python
  haslo = ""
  while haslo != "sekret":
      haslo = input("Podaj hasło: ")

print("Hasło poprawne! Dostęp przyznany.")

````
</details>

## Gra: Zgadywanka z Ograniczoną Liczbą Prób! 🎲

Pamiętasz naszą grę w zgadywanie liczb? Ulepszmy ją! Teraz gracz będzie miał tylko 3 próby.

```python
import random

# Komputer losuje liczbę od 1 do 10
liczba = random.randint(1, 10)

# Gracz ma 3 próby
for proba in range(3):
  zgadnij = int(input("Zgadnij liczbę od 1 do 10: "))

  if zgadnij == liczba:
      print("Brawo! Zgadłeś!")
      break  # Przerywamy pętlę, bo gracz wygrał
  else:
      print("Spróbuj ponownie!")

print(f"Prawidłowa liczba to: {liczba}")
````

## Sterowanie Pętlą: `break` i `continue` 🚦

Czasami chcemy mieć większą kontrolę nad tym, jak działa nasza pętla. Do tego służą dwie magiczne komendy: `break` i `continue`.

### `break` - Awaryjne Wyjście

`break` to jak przycisk "STOP". Gdy program go spotyka, **natychmiast wychodzi z pętli**, nawet jeśli nie skończyły się wszystkie powtórzenia. Użyliśmy go już w naszej grze – gdy gracz zgadł liczbę, nie było sensu kontynuować pętli.

### `continue` - Pomiń Tę Rundę

A co, jeśli nie chcemy kończyć całej pętli, a tylko pominąć obecną rundę i przejść do następnej? Wtedy używamy `continue`!

Wyobraź sobie, że chcemy wypisać liczby od 1 do 10, ale pomijając liczbę 5.

```python
for i in range(1, 11):
    if i == 5:
        continue  # Pomiń resztę kodu w tej rundzie i idź do następnej
    print(i)
```

**Wynik:**

```
1
2
3
4
6
7
8
9
10
```

Jak widzisz, liczba 5 została pominięta! Gdy `i` było równe 5, `continue` kazało programowi zignorować `print(i)` i od razu przejść do `i` równego 6.

### 💡 Mini-Zadanie 4: Pomijanie Nieparzystych

Napisz program, który za pomocą pętli `for` i instrukcji `continue` wypisze tylko liczby **parzyste** z zakresu od 1 do 10.

<details>
  <summary>Kliknij, aby zobaczyć rozwiązanie</summary>
  
  ```python
  for i in range(1, 11):
      # Jeśli liczba jest nieparzysta, pomiń ją
      if i % 2 != 0:
          continue
      print(i)
  ```
</details>

## Wprowadzenie do List - Pudełko na Skarby 📦

Do tej pory zmienna mogła przechowywać jedną rzecz (np. `imie = "Ania"`). A co, jeśli chcemy przechować wiele rzeczy w jednym miejscu? Użyjemy **listy**!

Lista to jak pudełko z przegródkami. Możesz do niej wkładać, wyjmować i przeglądać rzeczy.

```python
# Tworzymy listę owoców
owoce = ["jabłko", "banan", "gruszka"]
print(owoce)

# Dodajmy coś do listy
owoce.append("truskawka")
print("Po dodaniu:", owoce)

# Usuńmy coś z listy
owoce.remove("banan")
print("Po usunięciu:", owoce)
```

- Listę tworzymy za pomocą nawiasów kwadratowych `[]`.
- `append()` dodaje element na końcu listy.
- `remove()` usuwa wskazany element.

### 💡 Mini-Zadanie 3: Kolorowa Pętla

Masz listę `kolory = ["czerwony", "zielony", "niebieski"]`. Napisz kod, który za pomocą pętli `for` wyświetli każdy kolor z tej listy w osobnej linijce.

<details>
  <summary>Kliknij, aby zobaczyć rozwiązanie</summary>
  
  ```python
  kolory = ["czerwony", "zielony", "niebieski"]
  for kolor in kolory:
      print(kolor)
  ```
  **Wyjaśnienie:** Pętla `for` w tej formie sama "wyciąga" po kolei każdy element z listy i przypisuje go do zmiennej `kolor`. To bardzo wygodny sposób na przeglądanie list!
</details>

## Ćwiczenie: Twoja Interaktywna Lista Zakupów 🛒

Połączmy pętle `while` i listy! Stwórz program, który pozwala dodawać produkty do listy zakupów tak długo, aż użytkownik wpisze "koniec".

```python
# Pusta lista na zakupy
zakupy = []

print('Wpisuj produkty, które chcesz dodać do listy.')
print('Gdy skończysz, napisz "koniec".')

# Pętla będzie działać w nieskończoność, dopóki jej nie przerwiemy
while True:
    produkt = input("Podaj produkt: ")

    if produkt == "koniec":
        break  # Wychodzimy z pętli
    else:
        zakupy.append(produkt)

print("\nTwoja ostateczna lista zakupów:")
print(zakupy)
```

**Jak to działa?**

1. Tworzymy pustą listę `zakupy`.
2. `while True:` uruchamia pętlę, która sama z siebie nigdy się nie skończy.
3. Program prosi o podanie produktu.
4. Instrukcja `if` sprawdza, czy użytkownik wpisał "koniec".
5. Jeśli tak, `break` przerywa pętlę.
6. Jeśli nie, `append()` dodaje produkt do listy, a pętla wraca do początku.
7. Na końcu program wyświetla całą listę.

## Podsumowanie i Mini-Projekt 🚀

Gratulacje! Opanowałeś pętle i listy - dwa z najważniejszych narzędzi w programowaniu!

**Co dzisiaj zrobiliśmy?**

- Nauczyliśmy komputer powtarzać zadania za pomocą pętli `for`.
- Stworzyliśmy tabliczkę mnożenia i ulepszoną grę w zgadywanie.
- Dowiedzieliśmy się, czym są listy i jak przechowywać w nich dane.
- Zbudowaliśmy program do tworzenia listy zakupów.

**Mini-Projekt do samodzielnego wykonania:**
Spróbuj napisać "kontroler plecaka". Program, który na początku ma pustą listę `plecak` i w pętli pyta użytkownika, co chce zrobić: "dodać" czy "usunąć" przedmiot.

W następnej lekcji połączymy całą naszą wiedzę, by stworzyć jeszcze większy i ciekawszy projekt!

**[Dalej do następnej lekcji →](/python-course/)**
