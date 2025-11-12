---
title: "Python Podstawowy - Lekcja 5: Listy, Logika i Funkcje!"
date: 2025-11-08T10:00:00+01:00
draft: false
tags:
  [
    "python",
    "programowanie",
    "nauka",
    "podstawy",
    "listy",
    "if-else",
    "funkcje",
    "logika",
  ]
categories: ["Python Course"]
url: "/python-course/lekcja-5/"
author: "Code Addict"
series: ["Python Podstawowy"]
---

# Lekcja 5: Listy, Logika i Funkcje! 🎒🔍✨

**[← Powrót do kursu Python Podstawowy](/python-course/)**

Cześć młodzi programiści! Witam was w piątej lekcji naszego kursu Pythona. Ostatnio nauczyliśmy się, jak za pomocą pętli kazać komputerowi powtarzać zadania. Dzisiaj zrobimy kolejny wielki krok: zanurzymy się w świat list, poznamy sekrety komputerowej logiki i napiszemy naszą pierwszą prawdziwą funkcję! To będzie super przygoda!

<!--more-->

## 📚 Co dzisiaj w planie?

1.  **Listy** - Twoja cyfrowa kolekcja skarbów.
2.  **Logika Komputera** - `True` czy `False`? Operatory `and`, `or` i `not`.
3.  **Funkcje** - Twoje własne magiczne zaklęcia w kodzie.
4.  **Bonus: Pygame Zero** - Wprowadzenie do tworzenia gier! 🎮
5.  **Ćwiczenia** do utrwalenia nowej wiedzy.

---

## 1. Listy - Twoja kolekcja skarbów! 🎒

Wyobraź sobie, że masz pudełko na swoje ulubione zabawki, plecak na szkolne przybory albo listę zakupów. W Pythonie takim uniwersalnym "pojemnikiem" jest **lista**. Możesz w niej przechowywać różne rzeczy: napisy, liczby, a nawet inne listy!

Listę tworzymy używając nawiasów kwadratowych `[]`, a jej elementy oddzielamy przecinkami.

```python
# Lista z ulubionymi grami
ulubione_gry = ["Minecraft", "Roblox", "Among Us"]
print(ulubione_gry)

# Lista z punktami zdobytymi w grze
punkty = [10, 25, 15, 30, 5]
print(punkty)

# Lista może zawierać różne typy danych!
mix = ["napis", 100, True]
print(mix)
```

### Dostęp do elementów listy (Indeksowanie)

Każdy element w liście ma swój numer porządkowy, czyli **indeks**. To trochę jak numer mieszkania w bloku.

> **Bardzo ważne!** W programowaniu liczenie prawie zawsze zaczyna się od zera! Pierwszy element ma indeks `0`, drugi `1`, trzeci `2` i tak dalej.

```python
ulubione_gry = ["Minecraft", "Roblox", "Among Us"]

# Wyświetlamy pierwszą grę (indeks 0)
pierwsza_gra = ulubione_gry[0]
print("Moja ulubiona gra to:", pierwsza_gra) # Wyświetli: Minecraft

# Wyświetlamy trzecią grę (indeks 2)
trzecia_gra = ulubione_gry[2]
print("Ostatnio gram w:", trzecia_gra) # Wyświetli: Among Us
```

### Dodawanie do listy

Chcesz dodać nową grę do swojej kolekcji? Nic prostszego! Użyj metody `.append()`, która dodaje element na sam koniec listy.

```python
ulubione_gry = ["Minecraft", "Roblox", "Among Us"]
print("Moje gry:", ulubione_gry)

ulubione_gry.append("Fortnite")
print("Moje gry po dodaniu nowej:", ulubione_gry)
# Wynik: ['Minecraft', 'Roblox', 'Among Us', 'Fortnite']
```

### ✏️ Ćwiczenie 1: Lista zakupów

Stwórz program, który:

1. Tworzy pustą listę o nazwie `lista_zakupow`.
2. Za pomocą `input()` pyta użytkownika o 3 produkty, które chce dodać do listy.
3. Po każdym zapytaniu dodaje produkt do listy za pomocą `.append()`.
4. Na koniec wypisuje całą listę zakupów.

<details>
  <summary>Kliknij, aby zobaczyć rozwiązanie</summary>
  
  ```python
  lista_zakupow = []
  print("Twoja lista zakupów jest pusta:", lista_zakupow)

produkt1 = input("Co chcesz dodać do listy? ")
lista_zakupow.append(produkt1)

produkt2 = input("Co jeszcze chcesz dodać? ")
lista_zakupow.append(produkt2)

produkt3 = input("I ostatnia rzecz: ")
lista_zakupow.append(produkt3)

print("Oto Twoja lista zakupów:", lista_zakupow)

````
</details>

---

## 2. Logika Komputera - `True` czy `False`? 🔍

Wasz komputer, tak jak detektyw, cały czas sprawdza, czy coś jest prawdą (`True`) czy fałszem (`False`). To są **wartości logiczne** (ang. *boolean values*). Używaliśmy ich już w instrukcjach `if`, nawet o tym nie wiedząc!

Wyrażenie `wiek >= 12` zwraca `True`, jeśli wiek jest większy lub równy 12, albo `False` w przeciwnym wypadku.

```python
gracz_ma_klucz = True
drzwi_zamkniete = True

if gracz_ma_klucz == True:
  print("Masz klucz! Możesz otworzyć drzwi.")
else:
  print("Nie masz klucza. Poszukaj go!")
````

> **Ciekawostka:** Zapis `if gracz_ma_klucz == True:` można skrócić do `if gracz_ma_klucz:`, ponieważ `if` domyślnie sprawdza, czy warunek jest prawdziwy.

### Operatory logiczne: `and`, `or` i `not`

Czasami musimy sprawdzić więcej niż jeden warunek naraz. Z pomocą przychodzą operatory logiczne! Poznajmy ich działanie:

#### Operator `and` (i) - Wszystkie warunki muszą być prawdziwe

Operator `and` zwraca `True` tylko wtedy, gdy **wszystkie** warunki są prawdziwe. To jak lista wymagań - musisz spełnić je wszystkie!

```python
# Przykład 1: Dostęp do gry
wiek = 14
ma_konto = True

if wiek >= 13 and ma_konto:
    print("Możesz zagrać! Masz odpowiedni wiek i posiadasz konto.")
else:
    print("Nie możesz zagrać. Sprawdź wymagania.")
```

**Wyobraź sobie:** Aby wejść do tajnego klubu, musisz mieć kartę członkowską **I** znać hasło. Bez jednego z nich - nie wejdziesz!

```python
# Przykład 2: Sekretny klub
ma_karte = True
zna_haslo = False

if ma_karte and zna_haslo:
    print("Witaj w tajnym klubie!")
else:
    print("Brak dostępu! Potrzebujesz karty I hasła.")
    # Wyświetli się ten komunikat, bo hasła nie znamy (False)
```

#### Operator `or` (lub) - Wystarczy jeden prawdziwy warunek

Operator `or` zwraca `True`, gdy **przynajmniej jeden** z warunków jest prawdziwy. Wystarczy spełnić jedną opcję!

```python
# Przykład 1: Wejście na film
wiek = 11
ma_zgode_rodzica = True

if wiek >= 12 or ma_zgode_rodzica:
    print("Zapraszamy na seans!")
    # Dostaniesz się, bo masz zgodę rodzica!
else:
    print("Przykro nam, nie możesz wejść.")
```

**Wyobraź sobie:** Aby zagrać w grę online, możesz mieć własne konto **LUB** użyć konta rodzica. Wystarczy jedno z nich!

```python
# Przykład 2: Gra wieloosobowa
ma_wlasne_konto = False
moze_uzyc_konta_rodzica = True

if ma_wlasne_konto or moze_uzyc_konta_rodzica:
    print("Możesz zagrać!")
    # Zagrasz, bo możesz użyć konta rodzica!
else:
    print("Potrzebujesz konta, aby zagrać.")
```

#### Operator `not` (nie) - Odwrócenie wartości

Operator `not` odwraca wartość logiczną: `True` zamienia na `False`, a `False` na `True`. To jak zaprzeczenie!

```python
# Przykład 1: Sprawdzanie pogody
pada_deszcz = False

if not pada_deszcz:
    print("Świetnie! Możemy iść na boisko!")
    # Wyświetli się, bo NIE pada deszcz
else:
    print("Pada deszcz, zostańmy w domu.")
```

```python
# Przykład 2: System bezpieczeństwa
alarm_wlaczony = True

if not alarm_wlaczony:
    print("UWAGA! Alarm jest wyłączony - włącz go!")
else:
    print("System bezpieczeństwa działa prawidłowo.")
    # To się wyświetli, bo alarm JEST włączony
```

#### Łączenie operatorów - Bardziej skomplikowane warunki

Możemy łączyć operatory, aby tworzyć bardziej złożone warunki!

```python
# Przykład: System logowania do gry
uzytkownik_zalogowany = True
ma_internet = True
serwer_dziala = True

if uzytkownik_zalogowany and ma_internet and serwer_dziala:
    print("Łączę z serwerem gry... Gotowe!")
    print("Miłej gry!")
else:
    print("Nie mogę połączyć. Sprawdź:")
    if not uzytkownik_zalogowany:
        print("- Nie jesteś zalogowany")
    if not ma_internet:
        print("- Brak połączenia z internetem")
    if not serwer_dziala:
        print("- Serwer gry jest wyłączony")
```

#### Tabela prawdy - Jak to wszystko działa?

Oto przydatna tabelka, która pokazuje, jak działają operatory:

**Operator `and`:**
| Warunek 1 | Operator | Warunek 2 | Wynik |
|-----------|----------|-----------|---------|
| True | and | True | **True** ✓ |
| True | and | False | False |
| False | and | True | False |
| False | and | False | False |

**Operator `or`:**
| Warunek 1 | Operator | Warunek 2 | Wynik |
|-----------|----------|-----------|---------|
| True | or | True | **True** ✓ |
| True | or | False | **True** ✓ |
| False | or | True | **True** ✓ |
| False | or | False | False |

**Operator `not`:**
| Operator | Warunek | Wynik |
|----------|---------|---------|
| not | True | False |
| not | False | **True** ✓ |

```python
# Sprawdźmy to w praktyce!
print("=== Testujemy operator AND ===")
print(True and True)    # True
print(True and False)   # False
print(False and False)  # False

print("\n=== Testujemy operator OR ===")
print(True or False)    # True
print(False or True)    # True
print(False or False)   # False

print("\n=== Testujemy operator NOT ===")
print(not True)         # False
print(not False)        # True
```

#### Praktyczny przykład: Gra przygodowa

```python
# Gra: Czy możesz otworzyć skrzynię ze skarbem?
ma_klucz_zloty = True
ma_klucz_srebrny = False
zna_zaklecie = True
ma_miecz = True

# Aby otworzyć skrzynię, potrzebujesz:
# (złotego ALBO srebrnego klucza) I (zaklęcia LUB miecza)

ma_klucz = ma_klucz_zloty or ma_klucz_srebrny
ma_sposob_na_otwarcie = zna_zaklecie or ma_miecz

if ma_klucz and ma_sposob_na_otwarcie:
    print("🎉 GRATULACJE! Otwierasz skrzynię ze skarbem!")
    print("Znajdziesz w niej 1000 złotych monet!")
else:
    print("⚠️ Nie możesz otworzyć skrzyni.")
    if not ma_klucz:
        print("   - Potrzebujesz klucza (złotego lub srebrnego)")
    if not ma_sposob_na_otwarcie:
        print("   - Potrzebujesz zaklęcia lub miecza")
```

### ✏️ Ćwiczenie 2: Dostęp do tajnego pliku

Napisz program, który sprawdza, czy użytkownik może otworzyć "tajny plik".

1. Stwórz dwie zmienne: `uzytkownik_zalogowany = True` i `uzytkownik_jest_adminem = False`.
2. Napisz warunek `if`, który pozwoli na dostęp tylko wtedy, gdy użytkownik jest zalogowany **I** jest adminem. Wypisz odpowiedni komunikat.
3. Jeśli warunek nie jest spełniony, wypisz "Odmowa dostępu!".

<details>
<summary>Kliknij, aby zobaczyć rozwiązanie</summary>

```python
uzytkownik_zalogowany = True
uzytkownik_jest_adminem = False

if uzytkownik_zalogowany and uzytkownik_jest_adminem:
    print("Dostęp przyznany. Otwieram tajny plik...")
else:
    print("Odmowa dostępu! Potrzebujesz uprawnień administratora.")
```

</details>

### ✏️ Ćwiczenie 2b: System wejścia na imprezę

Stwórz program sprawdzający, czy osoba może wejść na imprezę. Użyj operatorów logicznych!

1. Utwórz zmienne:
   - `wiek = 15`
   - `ma_bilet = True`
   - `jest_na_liscie_vip = False`
2. Osoba może wejść, jeśli:
   - Ma przynajmniej 13 lat **I** (ma bilet **LUB** jest na liście VIP)
3. Napisz odpowiedni warunek `if` i wyświetl komunikat.

<details>
<summary>Kliknij, aby zobaczyć rozwiązanie</summary>

```python
wiek = 15
ma_bilet = True
jest_na_liscie_vip = False

# Sprawdzamy warunek: wiek >= 13 I (bilet LUB vip)
if wiek >= 13 and (ma_bilet or jest_na_liscie_vip):
    print("✓ Witamy na imprezie! Miłej zabawy!")
else:
    print("✗ Niestety, nie spełniasz wymogów wejścia.")
    if wiek < 13:
        print("  Powód: Za młody/a (musisz mieć min. 13 lat)")
    if not ma_bilet and not jest_na_liscie_vip:
        print("  Powód: Brak biletu i nie jesteś na liście VIP")
```

**Wyjaśnienie:** Nawiasy `()` w warunku są ważne! Pokazują, że najpierw sprawdzamy `ma_bilet or jest_na_liscie_vip`, a dopiero potem łączymy to z wiekiem używając `and`.

</details>

### ✏️ Ćwiczenie 2c: Quiz logiczny

Przepisz ten kod i sprawdź, co się wyświetli. Potem zmień wartości zmiennych i testuj różne kombinacje!

```python
# Zmienne do zabawy
pada_snieg = True
jest_weekend = False
mam_czas_wolny = True

# Test 1: Czy idziemy na sanki?
print("=== Test 1: Sanki ===")
if pada_snieg and (jest_weekend or mam_czas_wolny):
    print("Jedziemy na sanki! ⛷️")
else:
    print("Dzisiaj nie pójdziemy na sanki.")

# Test 2: Czy zostajemy w domu?
print("\n=== Test 2: Zostajemy w domu? ===")
if not pada_snieg or not mam_czas_wolny:
    print("Lepiej zostać w domu.")
else:
    print("Możemy wyjść!")

# Test 3: Idealne warunki
print("\n=== Test 3: Idealne warunki ===")
if pada_snieg and jest_weekend and mam_czas_wolny:
    print("Wszystko idealne! 🎉")
else:
    print("Nie wszystkie warunki są spełnione.")
```

**Wyzwanie:** Zmień wartości zmiennych tak, aby wszystkie trzy testy wyświetliły pozytywne komunikaty!

</details>

---

## 3. Funkcje - Twoje własne mini-programy! ✨

Wyobraź sobie, że masz magiczne zaklęcie, które wykonuje kilka czynności naraz. W Pythonie takim zaklęciem jest **funkcja**! To nazwany fragment kodu, który możemy wywoływać (używać) wielokrotnie, kiedy tylko chcemy.

Funkcję tworzymy za pomocą słowa kluczowego `def`, potem podajemy jej nazwę i nawiasy `()`. Kod wewnątrz funkcji musi być wcięty.

```python
# Definiujemy (tworzymy) naszą pierwszą funkcję
def przywitaj_gracza():
    print("Cześć! Witaj w naszej grze!")
    print("Życzymy Ci świetnej zabawy!")
    print("-------------------------")

# Teraz możemy "wywołać" (użyć) naszą funkcję, ile razy chcemy
print("Start gry...")
przywitaj_gracza()

print("Nowy gracz dołączył...")
przywitaj_gracza()
```

Dzięki funkcji nie musimy pisać tego samego kodu wiele razy! Jeśli zechcemy zmienić powitanie, wystarczy, że zrobimy to w jednym miejscu - wewnątrz definicji funkcji.

### Funkcje z parametrami

A co, jeśli chcemy, żeby nasza funkcja witała konkretnego gracza po imieniu? Możemy przekazać jej informację z zewnątrz, czyli **parametr** (nazywany też argumentem).

```python
# 'imie' jest tutaj parametrem
def przywitaj_gracza_imiennie(imie):
    print(f"Cześć, {imie}! Witaj w naszej grze!")
    print("Życzymy Ci świetnej zabawy!")
    print("-------------------------")

# Wywołujemy funkcję, podając imię jako argument w nawiasach
przywitaj_gracza_imiennie("Ania")
przywitaj_gracza_imiennie("Tomek")
```

Teraz nasza funkcja jest o wiele mądrzejsza i bardziej elastyczna!

### ✏️ Ćwiczenie 3: Funkcja licząca pole prostokąta

Napisz funkcję o nazwie `oblicz_pole_prostokata`, która:

1. Przyjmuje dwa parametry: `dlugosc` i `szerokosc`.
2. Oblicza pole, mnożąc te dwie wartości.
3. Wypisuje wynik w formacie: `f"Pole prostokąta o bokach {dlugosc} i {szerokosc} wynosi {pole}."`
4. Wywołaj funkcję dla prostokąta o bokach 5 i 10.

<details>
<summary>Kliknij, aby zobaczyć rozwiązanie</summary>

```python
def oblicz_pole_prostokata(dlugosc, szerokosc):
    pole = dlugosc * szerokosc
    print(f"Pole prostokąta o bokach {dlugosc} i {szerokosc} wynosi {pole}.")

# Testujemy naszą funkcję
oblicz_pole_prostokata(5, 10)
oblicz_pole_prostokata(3, 7)
```

</details>

---

## 4. Bonus: Wprowadzenie do Pygame Zero 🎮

Teraz, gdy znasz już listy, logikę i funkcje, możesz zacząć tworzyć swoje własne gry! **Pygame Zero** to specjalna biblioteka Pythona, która sprawia, że tworzenie gier jest proste i przyjemne.

### Czym jest Pygame Zero?

Pygame Zero (w skrócie `pgzero`) to narzędzie dla początkujących, które pozwala tworzyć gry bez konieczności pisania skomplikowanego kodu. Idealne dla młodych programistów!

### Instalacja Pygame Zero

Aby zacząć, musimy zainstalować bibliotekę:

**W Thonny:**

1. Otwórz Thonny
2. Z górnego menu wybierz: **Narzędzia** → **Zarządzaj pakietami** (lub **Tools** → **Manage packages**)
3. W okienku wyszukiwania wpisz: `pgzero`
4. Kliknij **Znajdź pakiet z PyPI** i zainstaluj

**Lub w terminalu:**

```bash
pip install pgzero
```

### Twoja pierwsza gra - poruszający się kwadrat!

Stwórz nowy plik o nazwie `moja_gra.py` i wpisz ten kod:

```python
import pgzrun  # Ta linia musi być na początku!

# Jak duże będzie okno gry?
WIDTH = 800
HEIGHT = 600

# Gdzie jest nasz gracz na początku?
x = 400
y = 300

def draw():
    # Ta funkcja rysuje wszystko na ekranie
    screen.fill('blue')  # Niebieskie tło
    screen.draw.filled_circle((x, y), 30, 'yellow')  # Żółte kółko

def update():
    # Ta funkcja sprawdza, co nacisnąłeś na klawiaturze
    global x, y  # Mówimy, że chcemy zmieniać x i y

    if keyboard.left:
        x = x - 5  # Idź w lewo
    if keyboard.right:
        x = x + 5  # Idź w prawo
    if keyboard.up:
        y = y - 5  # Idź w górę
    if keyboard.down:
        y = y + 5  # Idź w dół

pgzrun.go()  # Ta linia musi być na końcu!
```

**Jak to uruchomić?**

1. W Thonny naciśnij zielony przycisk **▶ Run** (lub klawisz F5)
2. Pojawi się okienko z grą!
3. Użyj **strzałek** na klawiaturze, aby poruszać żółtym kółkiem
4. Aby zamknąć grę, kliknij **X** w oknie gry

---

### 🤔 Jak rozumieć współrzędne X i Y?

Okno gry to jak wielka kartka w kratkę! Każde miejsce ma swój adres składający się z dwóch liczb:

**X** - to jak daleko w prawo (w lewo)

- `x = 0` to lewa krawędź ekranu
- `x = 400` to mniej więcej środek (jeśli WIDTH = 800)
- `x = 800` to prawa krawędź

**Y** - to jak daleko w dół (w górę)

- `y = 0` to **GÓRA** ekranu (tak, w komputerze liczenie zaczyna się od góry!)
- `y = 300` to mniej więcej środek (jeśli HEIGHT = 600)
- `y = 600` to dół ekranu

```
     0            400           800
     ├─────────────┼─────────────┤
  0──┌─────────────────────────┐ ← Góra ekranu
     │                         │
     │         ● (400, 300)    │ ← Nasz gracz w środku!
     │                         │
600──└─────────────────────────┘ ← Dół ekranu
```

**Przykłady:**

- `(0, 0)` - lewy górny róg
- `(800, 0)` - prawy górny róg
- `(400, 300)` - środek ekranu (nasz gracz startuje tutaj!)
- `(0, 600)` - lewy dolny róg
- `(800, 600)` - prawy dolny róg

**Poruszanie się:**

- Gdy robisz `x = x - 5`, cofasz się w **lewo** (mniejsze x)
- Gdy robisz `x = x + 5`, idziesz w **prawo** (większe x)
- Gdy robisz `y = y - 5`, idziesz w **górę** (mniejsze y)
- Gdy robisz `y = y + 5`, idziesz w **dół** (większe y)

> 💡 **Pamiętaj!** W grach na komputerze Y działa "do góry nogami" - `y = 0` to góra, nie dół!

---

### Jak to działa?

To jest proste! W Pygame Zero są dwie ważne funkcje:

1. **`draw()`** - tutaj rysujesz rzeczy na ekranie (jak malowanie obrazka!)
2. **`update()`** - tutaj sprawdzasz klawiaturę i poruszasz rzeczami

Python **automatycznie** wywołuje te funkcje wiele razy na sekundę, więc twoja gra żyje!

#### 🎨 Funkcja `draw()` - Twój pędzel do malowania

Funkcja `draw()` jest jak artysta, który **cały czas** maluje nowy obrazek. Co kilka milisekund Python woła: "Hej, narysuj mi nowy obrazek!" i wtedy uruchamia się `draw()`.

```python
def draw():
    screen.fill('blue')  # Najpierw zamaluj całe tło na niebiesko
    screen.draw.filled_circle((x, y), 30, 'yellow')  # Potem narysuj kółko
```

**Co to znaczy?**

- `screen.fill('blue')` - zamaluj całe okno na niebiesko (jak malowanie ściany!)
- `screen.draw.filled_circle((x, y), 30, 'yellow')` - narysuj wypełnione kółko:
  - `(x, y)` - gdzie narysować? (w pozycji x, y)
  - `30` - jak duże? (promień 30 pikseli - jak moneta 5 złotych!)
  - `'yellow'` - jaki kolor? (żółty)

#### 🎮 Funkcja `update()` - Sprawdza, co się dzieje

Funkcja `update()` to jak strażnik, który **cały czas** patrzy, czy naciskasz jakiś klawisz. Python woła ją wiele razy na sekundę i pyta: "Coś się zmieniło?"

```python
def update():
    global x, y  # Chcemy zmieniać zmienne x i y z góry

    if keyboard.left:
        x = x - 5  # Odejmij 5 od x (idź w lewo)
```

**Co to znaczy?**

- `if keyboard.left:` - sprawdź, czy gracz naciska strzałkę w lewo
- `x = x - 5` - to samo co `x -= 5`, zmniejsz x o 5 (przesuń w lewo!)
  - Było: `x = 400`
  - Teraz: `x = 395`
  - Za chwilę: `x = 390`
  - I tak dalej... kółko jedzie w lewo!

> **Co to jest `global x, y`?**  
> To mówi Pythonowi: "Hej, chcę zmieniać zmienne x i y, które stworzyłem na górze!"  
> Bez tego Python by pomyślał, że tworzysz nowe zmienne tylko w funkcji `update()`, które zaraz znikną!

---

### 🔢 Liczby w grze - co oznaczają?

Zobaczmy, co możesz zmieniać w kodzie:

```python
WIDTH = 800   # Szerokość okna w pikselach (punktach na ekranie)
HEIGHT = 600  # Wysokość okna w pikselach
```

💡 1 piksel = 1 malutki punktek na ekranie. 800 pikseli to szerokość mniej więcej jak kartka A4!

```python
x = 400  # Pozycja pozioma gracza (w prawo/lewo)
y = 300  # Pozycja pionowa gracza (góra/dół)
```

💡 Start w środku ekranu (400 to połowa z 800, 300 to połowa z 600)

```python
screen.draw.filled_circle((x, y), 30, 'yellow')
#                                  ↑ promień kółka
```

💡 Promień 30 = kółko ma średnicę 60 pikseli (wielkość małej monety)

```python
x = x - 5  # Zmiana pozycji o 5 pikseli
```

💡 Im większa liczba, tym szybszy ruch! Spróbuj dać 10 lub 2!

### Możesz zmieniać swoją grę! 🎨

Teraz super część - możesz eksperymentować! Zmień te rzeczy w kodzie i zobacz, co się stanie:

#### Kolory w grze 🌈

W Pygame Zero możesz używać nazw kolorów po angielsku. Oto najpopularniejsze:

```python
# Podstawowe kolory:
'red'      # czerwony
'blue'     # niebieski
'green'    # zielony
'yellow'   # żółty
'orange'   # pomarańczowy
'purple'   # fioletowy
'pink'     # różowy
'white'    # biały
'black'    # czarny
'gray'     # szary
'brown'    # brązowy

# Możesz też mieszać nazwy:
'darkblue'    # ciemnoniebieski
'lightgreen'  # jasnozielony
'darkred'     # ciemnoczerwony
```

**Zmień kolor tła:**

```python
screen.fill('purple')  # fioletowy
screen.fill('black')   # czarny - jak w kosmosie!
```

**Zmień kolor gracza:**

```python
screen.draw.filled_circle((x, y), 30, 'red')    # czerwone kółko
screen.draw.filled_circle((x, y), 30, 'green')  # zielone kółko
```

#### Wielkość kółka 📏

Ostatnia liczba w `filled_circle` to **promień** (połowa szerokości kółka):

```python
screen.draw.filled_circle((x, y), 10, 'yellow')   # maleńkie (jak groszek)
screen.draw.filled_circle((x, y), 30, 'yellow')   # normalne (jak moneta)
screen.draw.filled_circle((x, y), 50, 'yellow')   # duże (jak piłka ping-pongowa)
screen.draw.filled_circle((x, y), 100, 'yellow')  # ogromne (jak piłka!)
```

#### Szybkość poruszania 🏃

Im większa liczba przy `x = x - 5`, tym szybciej się poruszasz:

```python
# W funkcji update():
if keyboard.left:
    x = x - 2   # wolno (żółw 🐢)
    x = x - 5   # normalnie (człowiek 🚶)
    x = x - 10  # szybko (samochód 🚗)
    x = x - 20  # bardzo szybko (rakieta 🚀)
```

### Dodajmy tekst do gry! ✍️

Możesz dodać napisy na ekranie. Dodaj tę linię w funkcji `draw()`:

```python
def draw():
    screen.fill('blue')
    screen.draw.filled_circle((x, y), 30, 'yellow')

    # Dodaj tytuł gry:
    screen.draw.text("Moja pierwsza gra!", (250, 50), color='white', fontsize=40)

    # Możesz też dodać instrukcje:
    screen.draw.text("Użyj strzałek", (300, 550), color='yellow', fontsize=25)
```

**Co to znaczy?**

- `"Moja pierwsza gra!"` - tekst do wyświetlenia
- `(250, 50)` - pozycja tekstu (x=250, y=50, czyli blisko góry)
- `color='white'` - kolor tekstu (biały)
- `fontsize=40` - wielkość czcionki (im więcej, tym większe litery!)

### 🎯 Inne kształty, które możesz rysować

Nie musisz rysować tylko kółek! Spróbuj tych:

```python
# Kwadrat/prostokąt:
screen.draw.filled_rect(Rect(x, y, 40, 40), 'red')
#                            x, y, szerokość, wysokość

# Tylko obwódka kółka (nie wypełnione):
screen.draw.circle((x, y), 30, 'green')

# Linia:
screen.draw.line((100, 100), (200, 200), 'white')
#                początek       koniec      kolor
```

### ✏️ Zadanie Pygame Zero - Zrób coś swojego!

Teraz Twoja kolej! Spróbuj dodać te rzeczy do swojej gry:

**🟢 Łatwe zadania (dla początkujących):**

1. Zmień kolor tła na swój ulubiony (np. `'purple'`, `'black'`, `'green'`)
2. Zmień kolor kółka gracza na inny (np. `'red'`, `'pink'`, `'orange'`)
3. Spraw, aby kółko było większe - zmień 30 na 50
4. Dodaj tytuł gry na górze ekranu

**🟡 Średnie zadania (trochę trudniejsze):**

5. Zmień szybkość poruszania - zamiast 5 daj 10 (będzie szybciej!)
6. Narysuj drugiego kółko w stałym miejscu (np. na pozycji 100, 100)
7. Spraw, aby gracz startował w innym miejscu (zmień x i y na początku)
8. Dodaj instrukcję na dole ekranu: "Użyj strzałek"

**🔴 Trudne wyzwania (dla odważnych!):**

9. Spróbuj narysować kwadrat zamiast kółka:
   ```python
   screen.draw.filled_rect(Rect(x, y, 40, 40), 'yellow')
   ```
10. Dodaj drugiego gracza, który porusza się klawiszami **WSAD** (W=góra, S=dół, A=lewo, D=prawo)
    Podpowiedź: Potrzebujesz nowych zmiennych `x2` i `y2` oraz `keyboard.w`, `keyboard.s`, itd.

<details>
<summary>Kliknij, aby zobaczyć przykład rozwiązania zadań 1-8</summary>

```python
import pgzrun

WIDTH = 800
HEIGHT = 600

# Gracz startuje w lewym górnym rogu
x = 100
y = 100

def draw():
    screen.fill('purple')  # Fioletowe tło!
    screen.draw.filled_circle((x, y), 50, 'red')  # Duże czerwone kółko
    
    # Drugi obiekt w stałym miejscu
    screen.draw.filled_circle((700, 500), 30, 'green')
    
    # Napisy
    screen.draw.text("Moja super gra!", (250, 30), color='white', fontsize=50)
    screen.draw.text("Użyj strzałek", (300, 560), color='yellow', fontsize=25)

def update():
    global x, y
    
    # Szybsze poruszanie (o 10 zamiast 5)
    if keyboard.left:
        x = x - 10
    if keyboard.right:
        x = x + 10
    if keyboard.up:
        y = y - 10
    if keyboard.down:
        y = y + 10

pgzrun.go()
```

</details>

<details>
<summary>Kliknij, aby zobaczyć rozwiązanie zadania 10 (dwóch graczy)</summary>

```python
import pgzrun

WIDTH = 800
HEIGHT = 600

# Gracz 1 (strzałki)
x1 = 200
y1 = 300

# Gracz 2 (WSAD)
x2 = 600
y2 = 300

def draw():
    screen.fill('darkblue')
    
    # Rysuj obu graczy
    screen.draw.filled_circle((x1, y1), 30, 'yellow')  # Gracz 1
    screen.draw.filled_circle((x2, y2), 30, 'red')     # Gracz 2
    
    # Napisy
    screen.draw.text("Gracz 1: Strzałki", (50, 30), color='yellow', fontsize=30)
    screen.draw.text("Gracz 2: WSAD", (500, 30), color='red', fontsize=30)

def update():
    global x1, y1, x2, y2
    
    # Gracz 1 - strzałki
    if keyboard.left:
        x1 = x1 - 5
    if keyboard.right:
        x1 = x1 + 5
    if keyboard.up:
        y1 = y1 - 5
    if keyboard.down:
        y1 = y1 + 5
    
    # Gracz 2 - WSAD
    if keyboard.a:  # A = lewo
        x2 = x2 - 5
    if keyboard.d:  # D = prawo
        x2 = x2 + 5
    if keyboard.w:  # W = góra
        y2 = y2 - 5
    if keyboard.s:  # S = dół
        y2 = y2 + 5

pgzrun.go()
```

**Gratulacje!** Masz teraz grę dla dwóch graczy! 🎮🎮

</details>
    screen.draw.filled_circle((x, y), 30, 'red')  # Czerwony gracz
    screen.draw.filled_circle((100, 100), 25, 'green')  # Zielony przeciwnik
    screen.draw.text("Moja super gra!", (250, 30), color='white', fontsize=50)

def update():
    global x, y

    if keyboard.left:
        x = x - 8  # Szybciej!
    if keyboard.right:
        x = x + 8
    if keyboard.up:
        y = y - 8
    if keyboard.down:
        y = y + 8

pgzrun.go()
```

</details>

### Co dalej z Pygame Zero?

Gdy opanujesz ten prosty program, w kolejnych lekcjach nauczysz się:

- 🖼️ Jak dodawać obrazki zamiast kółek (np. rakietę, postać)
- 💥 Jak sprawdzać, czy dwie rzeczy się zderzają
- 🎵 Jak dodać dźwięki i muzykę
- 🎯 Jak zrobić licznik punktów
- 🎮 Jak stworzyć prostą grę "złap gwiazdki"!

**Pygame Zero jest super, bo:**

- Nie musisz pisać dużo kodu
- Gry działają od razu
- Możesz pokazać swoje gry kolegom!

---

- Jak dodać dźwięki i muzykę
- Jak stworzyć licznik punktów
- Jak zrobić grę typu "złap przedmiot" lub prostą platformówkę!

---

## Podsumowanie i zadanie domowe

Wow! Dzisiaj nauczyliśmy się naprawdę dużo!

- **Listy** `[]` do przechowywania kolekcji danych.
- **Wartości logiczne** `True` i `False` oraz operatory `and`, `or` i `not`.
- **Funkcje** `def`, które są jak nasze własne zaklęcia w kodzie.
- **Pygame Zero** - podstawy tworzenia gier w Pythonie!

**Zadanie domowe:**
Stwórz program, który:

1.  Stworzy listę Twoich 3 ulubionych przedmiotów szkolnych, np. `ulubione_przedmioty = ["informatyka", "wf", "matematyka"]`.
2.  Napisze funkcję o nazwie `czy_lubie_przedmiot`, która przyjmuje jeden parametr (nazwę przedmiotu).
3.  Wewnątrz funkcji, użyj instrukcji `if`, aby sprawdzić, czy przedmiot podany jako parametr znajduje się na Twojej liście ulubionych. (Podpowiedź: `if przedmiot in twoja_lista:`).
4.  Jeśli tak, funkcja powinna wydrukować "Tak, to jeden z moich ulubionych przedmiotów!". Jeśli nie, "Uczę się go, ale nie jest moim ulubionym.".
5.  Wywołaj swoją funkcję kilka razy z różnymi nazwami przedmiotów (zarówno tymi z listy, jak i spoza niej).

Powodzenia! Widzimy się na kolejnej lekcji, gdzie będziemy dalej odkrywać magiczny świat Pythona!

---

**[← Powrót do kursu Python Podstawowy](/python-course/)**
