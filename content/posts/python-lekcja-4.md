+++
title = 'Python Podstawowy - Lekcja 4: Powtórka, Pętle i Magia Notebooków!'
description = "Utrwal wiedzę z poprzednich lekcji, poznaj potęgę pętli."
date = "2025-10-18T12:00:00+01:00"
draft = false
url = "/python-course/lekcja-4/"
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'podstawy', 'programowanie', 'nauka', 'pętle', 'for', 'while', 'f-string', 'notebook']
series = ['Python Podstawowy']
+++

# Lekcja 4: Powtórka, Pętle i Magia Notebooków! 🚀

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Witaj ponownie, młody programisto! W poprzednich lekcjach nauczyliśmy się podstaw komunikacji z komputerem, operacji matematycznych i podejmowania decyzji. Dziś zrobimy krótką powtórkę, a potem nauczymy komputer... powtarzać czynności!

<!--more-->

## 📚 Co dzisiaj w planie?

1.  **Szybka powtórka** z ćwiczeniami.
2.  **Pętle `for` i `while`** - czyli jak kazać komputerowi pracować za nas.
3.  **Nowe sztuczki**: f-stringi i operatory skrócone.
4.  **Wprowadzenie do Notebooków** - interaktywnego środowiska do kodowania.

---

## 1. Powtórka z rozgrzewką 💪

Zanim ruszymy dalej, utrwalmy fundamenty. Dobre zrozumienie tych koncepcji to klucz do sukcesu w dalszej nauce!

- **Zmienne**: To nasze "pudełka" lub "etykiety" na dane. Możemy w nich przechowywać tekst, liczby, czy wyniki obliczeń. Pamiętaj, że dobra, opisowa nazwa zmiennej (np. `wiek_uzytkownika` zamiast `x`) bardzo ułatwia czytanie kodu.

- **`input()` - Komunikacja ze światem**: Funkcja `input()` pozwala zadać użytkownikowi pytanie i przechwycić jego odpowiedź. **Najważniejsza zasada**: `input()` **zawsze** zwraca tekst (typ `str`), nawet jeśli użytkownik wpisze cyfry!

  ```python
  rok_urodzenia_str = input("W którym roku się urodziłeś? ")
  # Nawet jeśli wpiszesz 2005, zmienna przechowuje "2005", a nie liczbę 2005.
  ```

- **Konwersja typów, czyli magia `int()`**: Skoro `input()` daje nam tekst, jak wykonywać na nim obliczenia matematyczne? Tu wkracza `int()`, która próbuje zamienić tekst na liczbę całkowitą.

  - `int("18")` -> zwróci liczbę `18`
  - `int(wiek_str)` -> zamieni tekstową odpowiedź użytkownika na liczbę, którą można porównywać lub dodawać.

  > **Uwaga!** Próba zamiany tekstu, który nie jest liczbą (np. `int("Ania")`), zakończy się błędem `ValueError`. Na razie zakładamy, że użytkownik jest grzeczny i podaje prawidłowe dane.

### ✏️ Ćwiczenie 1: Prosty kalkulator sumy

Napisz program, który:

1. Poprosi użytkownika o podanie pierwszej liczby.
2. Poprosi o podanie drugiej liczby.
3. Zamieni obie odpowiedzi na typ `int`.
4. Obliczy ich sumę i wypisze wynik w formacie: `"Wynik dodawania to: [suma]"`.

<details>
  <summary>Kliknij, aby zobaczyć rozwiązanie</summary>
  
  ```python
  liczba1_str = input("Podaj pierwszą liczbę: ")
  liczba2_str = input("Podaj drugą liczbę: ")

# Konwersja na int jest kluczowa!

liczba1 = int(liczba1_str)
liczba2 = int(liczba2_str)

suma = liczba1 + liczba2
print("Wynik dodawania to: " + str(suma))

````
</details>

### ✏️ Ćwiczenie 2: Strażnik Wirtualnej Krainy

Wyobraź sobie, że jesteś strażnikiem magicznej gry komputerowej. Twoim zadaniem jest wpuszczanie tylko tych graczy, którzy mają odpowiedni wiek.

Napisz program, który:

1.  Zapyta gracza o imię i wiek.
2.  Gra jest przeznaczona dla osób od 12 roku życia. Jeśli gracz ma 12 lat lub więcej, wypisz komunikat: "Witaj w grze 'Przygody Kodomaga', [imię]! Wrota stoją otworem.".
3.  Jeśli gracz ma mniej niż 12 lat, program policzy, ile lat brakuje mu do wymaganego wieku i wypisze: "Przykro mi, [imię]. Ta przygoda jest dla graczy od 12 lat. Wróć za [liczba] lat!".

<details>
<summary>Kliknij, aby zobaczyć rozwiązanie</summary>

```python
imie = input("Jak masz na imię, podróżniku? ")
wiek_str = input("Ile masz lat? ")
wiek = int(wiek_str)

if wiek >= 12:
    print(f"Witaj w grze 'Przygody Kodomaga', {imie}! Wrota stoją otworem.")
else:
    brakuje_lat = 12 - wiek
    print(f"Przykro mi, {imie}. Ta przygoda jest dla graczy od 12 lat. Wróć za {brakuje_lat} lat!")
```

</details>

### ✏️ Ćwiczenie 3: Parzysta czy nieparzysta?

Napisz program, który:
1. Poprosi użytkownika o podanie liczby całkowitej.
2. Sprawdzi, czy liczba jest parzysta, czy nieparzysta.
3. Wypisze odpowiedni komunikat, np. `"Liczba 10 jest parzysta."`
> **Wskazówka**: Użyj operatora reszty z dzielenia `%`. Liczba jest parzysta, jeśli reszta z jej dzielenia przez 2 wynosi 0.

<details>
<summary>Kliknij, aby zobaczyć rozwiązanie</summary>

```python
liczba_str = input("Podaj liczbę całkowitą: ")
liczba = int(liczba_str)

if liczba % 2 == 0:
    print(f"Liczba {liczba} jest parzysta.")
else:
    print(f"Liczba {liczba} jest nieparzysta.")
```

</details>

### ✏️ Ćwiczenie 4: Kalkulator zniżek

Sklep oferuje zniżki w zależności od wartości zakupów:
- Zakupy powyżej 200 zł: **15% zniżki**.
- Zakupy powyżej 100 zł (ale nie więcej niż 200 zł): **10% zniżki**.
- Zakupy za 100 zł lub mniej: **brak zniżki**.

Napisz program, który:
1. Zapyta użytkownika o kwotę zakupów.
2. Obliczy odpowiednią zniżkę i cenę do zapłaty.
3. Wypisze czytelny komunikat, np.: `"Kwota do zapłaty po uwzględnieniu 15% zniżki to: 212.5 zł."` lub `"Kwota do zapłaty: 80 zł."`

<details>
<summary>Kliknij, aby zobaczyć rozwiązanie</summary>

```python
kwota_zakupow_str = input("Podaj kwotę zakupów (zł): ")
kwota_zakupow = float(kwota_zakupow_str) # Używamy float, bo kwota może mieć grosze

cena_do_zaplaty = kwota_zakupow

if kwota_zakupow > 200:
    znizka = kwota_zakupow * 0.15
    cena_do_zaplaty = kwota_zakupow - znizka
    print(f"Otrzymujesz 15% zniżki! Kwota do zapłaty: {cena_do_zaplaty} zł.")
elif kwota_zakupow > 100:
    znizka = kwota_zakupow * 0.10
    cena_do_zaplaty = kwota_zakupow - znizka
    print(f"Otrzymujesz 10% zniżki! Kwota do zapłaty: {cena_do_zaplaty} zł.")
else:
    print(f"Kwota do zapłaty: {cena_do_zaplaty} zł.")

```

</details>

---

## 2. Pętle - Niech Komputer się Napracuje! 🤖

Wyobraź sobie, że chcesz wypisać swoje imię 100 razy. Nudne, prawda? Pętle robią to za nas!

### Pętla `for`

Pętla `for` jest idealna, gdy wiemy, ile razy chcemy coś powtórzyć.

```python
# Wypisz liczby od 0 do 4
for i in range(5):
  print("To jest powtórzenie numer:", i)

# Wypisz każdą literę z imienia
imie = "Kamil"
for litera in imie:
  print("Kolejna litera to:", litera)
```

### Pętla `while`

Pętla `while` działa, dopóki pewien warunek jest prawdziwy. Świetnie nadaje się do gier, gdzie nie wiemy, kiedy nastąpi koniec.

```python
# Prosty licznik do 3
licznik = 1
while licznik <= 3:
    print("Licznik ma wartość:", licznik)
    licznik = licznik + 1 # WAŻNE: Zwiększamy licznik, by uniknąć pętli nieskończonej!

print("Koniec pętli while.")
```

> **Uwaga!** W pętli `while` musisz pamiętać o zmianie warunku. Jeśli warunek zawsze będzie prawdziwy, pętla nigdy się nie skończy (tzw. _pętla nieskończona_) i trzeba będzie zatrzymać program siłą!

### ✏️ Ćwiczenie 2: Ulepszona gra "Zgadnij Liczbę"

Ulepsz grę z poprzedniej lekcji. Komputer losuje liczbę, a użytkownik ma zgadywać tak długo, aż trafi. Po każdej próbie komputer podpowiada "za dużo" lub "za mało".

<details>
  <summary>Kliknij, aby zobaczyć rozwiązanie</summary>

  ```python
  import random

wylosowana_liczba = random.randint(1, 100)
zgadywana_liczba = 0 # Inicjalizujemy zmienną, by warunek pętli był na początku prawdziwy

print("Zgadnij liczbę od 1 do 100!")

while zgadywana_liczba != wylosowana_liczba:
zgadywana_liczba_str = input("Podaj swoją liczbę: ")
zgadywana_liczba = int(zgadywana_liczba_str)

      if zgadywana_liczba < wylosowana_liczba:
          print("Za mało!")
      elif zgadywana_liczba > wylosowana_liczba:
          print("Za dużo!")
      else:
          print("Brawo! Zgadłeś! To była liczba " + str(wylosowana_liczba))

```
</details>

---

## 3. Nowe Sztuczki - Koduj Szybciej! ⚡️

Python ma wiele ułatwień. Poznajmy dwa z nich.

### F-stringi (Formatowanie Tekstu)

Pamiętasz łączenie tekstów za pomocą `+` i konwersję `str()`? Jest lepszy sposób!

**Stary sposób:**
`print("Witaj " + imie + ", masz " + str(wiek) + " lat.")`

**Nowy, lepszy sposób (f-string):**
`print(f"Witaj {imie}, masz {wiek} lat.")`

Wystarczy postawić `f` przed cudzysłowem, a zmienne umieścić w nawiasach klamrowych `{}`. Proste i czytelne!

### Operatory skrócone

Często modyfikujemy wartość zmiennej, np. `licznik = licznik + 1`. Można to zapisać krócej.

- `x = x + 1`  ->  `x += 1`
- `x = x - 5`  ->  `x -= 5`
- `x = x * 2`  ->  `x *= 2`
- `x = x / 4`  ->  `x /= 4`

---

### Asystent do Nauki: Google NotebookLM

A teraz coś zupełnie innego! **NotebookLM** to nie jest środowisko do pisania kodu, ale raczej Twój osobisty asystent do badań i nauki, napędzany przez sztuczną inteligencję.

**Jak to działa?**
1.  **Dodajesz źródła**: Wgrywasz do NotebookLM swoje dokumenty, notatki z lekcji, pliki PDF, a nawet linki do stron.
2.  **Zadajesz pytania**: Pytasz o informacje zawarte w Twoich źródłach.
3.  **Otrzymujesz odpowiedzi**: NotebookLM odpowiada, bazując **wyłącznie na dostarczonych przez Ciebie materiałach**, podając cytaty i odnośniki do konkretnych fragmentów!

**Do czego możesz go użyć w tym kursie?**
-   Możesz wgrać wszystkie nasze lekcje w formacie PDF.
-   Zadać pytanie: "Jakie są różnice między pętlą for a while w Pythonie?".
-   Poprosić o "Stwórz mi ćwiczenie na podstawie lekcji 3, które utrwali wiedzę o instrukcjach warunkowych".

To potężne narzędzie, które pomoże Ci szybciej się uczyć i porządkować wiedzę. Pamiętaj jednak: **NotebookLM nie uruchamia kodu Pythona**. Służy do pracy z tekstem i informacjami.

---

## podsumowanie lekcji

Gratulacje! Za Tobą kolejna duża porcja wiedzy. Potrafisz już nie tylko pisać proste programy, ale też automatyzować zadania za pomocą pętli i korzystać z nowoczesnych narzędzi, jakimi są notebooki.

W następnej lekcji zajmiemy się listami - nauczymy się przechowywać wiele informacji w jednej zmiennej. Do zobaczenia!

---

**[← Powrót do kursu Python Podstawowy](/python-course/)**
**[← Wróć do Lekcji 3](/python-course/lekcja-3/)**
**[→ Przejdź do Lekcji 5](/python-course/lekcja-5/)**
````
