+++
title = 'Python Podstawowy - Lekcja 1: Witaj Świecie Programowania!'
date = 2025-09-18T10:00:00+02:00
draft = false
url = '/python-course/lekcja-1/'
description = 'Pierwsza lekcja z serii Python Podstawowy. Wprowadzenie do programowania, instalacja Python i pierwsze kroki.'
author = 'Code Addict'
categories = ['python-course']
tags = ['python', 'podstawy', 'programowanie', 'nauka', 'wprowadzenie']
series = ['Python Podstawowy']
+++

# 🐍 Witamy w magicznym świecie programowania z Python!

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

Witaj młody programisto! 👋 Dzisiaj zaczynamy niesamowitą przygodę z programowaniem w języku Python. To będzie jak nauka nowego języka - ale takiego, którym możesz rozmawiać z komputerem!

<!--more-->

## 🎯 Co dzisiaj się nauczymy?

W tej pierwszej lekcji poznamy:
- Co to jest programowanie (w prostych słowach!)
- Dlaczego Python jest super dla początkujących
- Jak przygotować nasz komputer do programowania
- Napisać nasz pierwszy program - wizytówkę!

## 🤔 Co to jest programowanie?

Wyobraź sobie, że komputer to bardzo mądry robot, ale... nie rozumie ludzkiej mowy! Programowanie to sposób, w jaki mówimy komputerowi, co ma robić, używając specjalnego języka, który nazywa się **język programowania**.

To tak jak gdybyś:
- 🍳 Napisał przepis na ulubione ciasto - opisujesz każdy krok
- 🎮 Stworzył instrukcję do nowej gry - wyjaśniasz wszystkie zasady
- 🗺️ Narysował mapę do skarbu - pokazujesz dokładną drogę

Komputer robi dokładnie to, co mu napiszesz - ani więcej, ani mniej!

## 🐍 Dlaczego Python?

Python to język programowania, który:
- **Jest łatwy do nauki** - jego składnia przypomina angielski
- **Jest potężny** - możesz z nim stworzyć gry, strony internetowe, a nawet AI!
- **Ma śmieszną nazwę** - został nazwany od Monty Python (grupa komików)
- **Ma przyjaźliwą społeczność** - mnóstwo ludzi chętnie pomoże

## 💻 Przygotowanie do przygody

### Krok 1: Instalacja Python 🐍

Żeby zacząć programować w Python, musimy go najpierw zainstalować na naszym komputerze. To jak pobranie nowej gry!

**Dla systemu Windows:**

1. **Idź na stronę Python** 🌐
   - Kliknij tutaj: [python.org/downloads](https://www.python.org/downloads/)
   - Lub wpisz w przeglądarce: `python.org/downloads`

2. **Kliknij żółty przycisk** �
   - Na górze strony zobaczysz duży **żółty przycisk "Download Python"**
   - Po prostu go kliknij - automatycznie pobierze najlepszą wersję dla Twojego komputera!

3. **Pobierz instalator** 📥
   - Plik automatycznie się pobierze
   - Znajdziesz go w folderze "Pobrane" na swoim komputerze
   - Nazywa się podobnie do: `python-<wersja>.exe`

4. **Uruchom instalator** ⚙️
   - Kliknij dwukrotnie na pobrany plik
   - **WAŻNE!** ✅ Zaznacz krateczką "Add Python to PATH" na dole okna
   - Kliknij "Install Now"

5. **Poczekaj chwilę** ⏳
   - Instalacja zajmie kilka minut
   - Możesz w tym czasie przeczytać dalszą część lekcji!

**Dlaczego "Add to PATH" jest ważne?**
To sprawia, że komputer wie, gdzie znaleźć Python, gdy będziesz chciał go uruchomić. Bez tego Python będzie się krył! 😄

**Dla rodziców**: Żółty przycisk "Download Python" automatycznie wykrywa system operacyjny i pobiera odpowiednią wersję. Jeśli chcesz sprawdzić inne wersje, poniżej znajdziesz szczegółową tabelę z wszystkimi dostępnymi wydaniami.

### Krok 2: Instalacja Thonny - naszego programu do pisania kodu! 📝

Thonny to specjalny program stworzony właśnie dla osób, które zaczynają programować w Python. To jak specjalny notatnik dla programistów!

**Dlaczego Thonny jest super dla początkujących:**
- 🎨 **Piękne kolorowanie** - każda część kodu ma inny kolor, łatwiej się czyta
- 🐛 **Pomaga znajdować błędy** - pokazuje, gdzie zrobiłeś literówkę  
- 👀 **Widzi, co robi program** - możesz obserwować krok po kroku, jak działa Twój kod
- 🎯 **Prosty w użyciu** - nie ma tysięcy przycisków, które Cię mylą

**Jak zainstalować Thonny:**

1. **Idź na stronę Thonny** 🌐
   - Kliknij tutaj: [thonny.org](https://thonny.org/)
   - Kliknij przycisk z logo Windows

2. **Pobierz i zainstaluj** 📥
   - Pobierze się plik podobny do: `thonny-4.x.x.exe`
   - Kliknij dwukrotnie na plik i zainstaluj (jak każdy inny program)

3. **Uruchom Thonny** 🚀
   - Znajdź ikonę Thonny na pulpicie lub w menu Start
   - Kliknij i gotowe - masz swój pierwszy prawdziwy edytor do programowania!

### Krok 3: Sprawdzenie, czy wszystko działa ✨

Teraz sprawdźmy, czy Python i Thonny działają razem jak prawdziwy zespół programistów!

1. **Otwórz Thonny** 🚀
   - Kliknij na ikonę Thonny na pulpicie lub znajdź w menu Start
   - Przy pierwszym uruchomieniu może się pojawić okno z pytaniami - po prostu klikaj "OK" lub "Next"

2. **Poznaj okno Thonny** 👀
   - **Góra (duże białe pole)**: Tu będziesz pisać swoje programy - to nazywa się **edytor**
   - **Dół (mniejsze pole z `>>>')**: Tu Python będzie z Tobą rozmawiać - to **Shell** (czytaj: "szel")
   - Po prawej mogą być dodatkowe panele - na razie je zignoruj 😊

**Tak wygląda Thonny po uruchomieniu:**

![Interfejs Thonny - okno programu podzielone na edytor (góra) i Shell (dół)](/code-addict/post-plugins/thonny-interface.png)

*Na zdjęciu widzisz:*
- 📝 **Edytor na górze** - duże białe pole gdzie piszesz kod (tu akurat jest plik hello.py)
- 💬 **Shell na dole** - miejsce z `>>>` gdzie Python odpowiada na Twoje komendy
- 🗂️ **Panel plików po lewej** - pokazuje pliki w folderze (na razie pusty)
- ⚙️ **Panel pomocy po prawej** - pokazuje wskazówki (możesz go zamknąć)

3. **Pierwszy test - porozmawiaj z Python!** 🧪
   - Kliknij w dolnej części, tam gdzie są strzałki `>>>`
   - Wpisz dokładnie: `print("Hej Python!")`
   - Naciśnij Enter
   - **Jeśli zobaczysz:** `Hej Python!` - to BRAWO! Wszystko działa! 🎉

4. **Drugi test - sprawdź matematykę** 🔢
   - Wpisz: `2 + 3`
   - Naciśnij Enter
   - Powinien pokazać: `5`
   - Python umie liczyć lepiej niż kalkulator! 

**Co robić, jeśli coś nie działa?**
- Sprawdź, czy nie ma literówek w `print("Hej Python!")`
- Spróbuj ponownie uruchomić Thonny
- Sprawdź, czy zaznaczyłeś "Add to PATH" podczas instalacji Python
- Poproś o pomoc starszego brata/siostrę lub rodzica 😊

**Pro tip dla młodych programistów:** 💡
Shell to miejsce do szybkich testów, a edytor (góra) to miejsce na pisanie dłuższych programów!

## 🎉 Nasz pierwszy program!

Tradycyjnie każdy programista zaczyna od programu, który mówi "Witaj świecie!". My zrobimy to samo, ale po polsku:

### Napisz swój pierwszy kod! 📝

1. **Otwórz Thonny** (jeśli jeszcze nie masz otwartego)
2. **Kliknij w górnej części** (w edytorze - białe pole)
3. **Wpisz dokładnie ten kod:**

```python
print("Witaj świecie programowania!")
print("Nazywam się [TWOJE IMIĘ] i jestem programistą!")
```

4. **Zapisz plik** - naciśnij Ctrl+S i nazwij go `moj_pierwszy_program.py`
5. **Uruchom program** - naciśnij F5 lub kliknij zielony przycisk ▶️

### Co się dzieje w tym kodzie?

- `print()` to **funkcja** - myśl o niej jak o megafonie komputera, który wszystkim głośno ogłasza to, co napiszesz
- Tekst w cudzysłowach to **string** (czytaj: string) - to sposób na zapisanie słów, żeby komputer je zrozumiał
- Każda linia to **instrukcja** - jeden krok, który komputer ma wykonać po kolei

### Python jako superkalkulator!

Wiesz co? Python potrafi liczyć lepiej niż każdy kalkulator! Spróbuj w Shell wpisać:

```python
2 + 3        # Dodawanie
10 - 4       # Odejmowanie  
5 * 6        # Mnożenie (gwiazdka to razy!)
10 / 2        # Dzielenie
```

**Fajna sprawa:** Wszystko po znaku `#` to **komentarz** - notatki dla Ciebie!

## Twoje pierwsze zadanie!

### Zadanie: Stwórz swoją wizytówkę 📄

1. **Otwórz nowy plik** w Thonny (Ctrl+N)
2. **Wpisz ten kod i uzupełnij swoimi danymi:**

```python
print("=== MOJA WIZYTÓWKA ===")
print("Imię: [WPISZ SWOJE IMIĘ]")
print("Wiek: [WPISZ SWÓJ WIEK]")
print("Hobby: [WPISZ SWOJE HOBBY]")
print("Chcę zostać: programistą!")
```

3. **Zapisz jako** `wizytowka.py`
4. **Uruchom** i pokaż rodzicom swój pierwszy program!

**Pamiętaj:** Nie bój się eksperymentować! Komputer się nie zepsuje, a każdy błąd to nauka! 😄

##  Fajne ciekawostki na koniec! 🤓

- Python został stworzony w 1991 roku przez Guido van Rossum z Holandii (miał wtedy 35 lat!)
- Nazwa "Python" nie ma nic wspólnego z wężami - pochodzi od Monty Python (śmiesznej grupy komików)!
- Python używają giganci jak Google, Instagram, Spotify i nawet NASA do badania kosmosu! 🚀
- Pierwszy program, który napisał twórca Pythona, też wypisywał "Hello World!"

---

**Pamiętaj**: Programowanie to jak nauka jazdy na rowerze - na początku może być trudno, ale z praktyką stanie się naturalne i bardzo fajne! 🚴‍♂️

**[← Powrót do kursu Python Podstawowy](/code-addict/python-course/)**

---

*Masz pytania? Napisz w komentarzach! Każde pytanie jest dobre - wszyscy kiedyś zaczynali! 😊*
