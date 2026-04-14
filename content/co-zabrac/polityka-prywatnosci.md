+++
title = 'Polityka Prywatności — Co zabrać?'
date = '2026-04-14'
draft = false
noComment = true
+++

_Aplikacja „Co zabrać?" — Ostatnia aktualizacja: 14.04.2026_

[Polityka prywatności](/co-zabrac/polityka-prywatnosci/) | [Regulamin](/co-zabrac/regulamin/) | [Klauzula RODO](/co-zabrac/klauzula-rodo/) | [Usuń konto](/co-zabrac/usun-konto/)

---

## 1. Administrator danych

Administratorem danych osobowych jest:

**Mariusz Pątek**  
E-mail: [patek.android@gmail.com](mailto:patek.android@gmail.com)

## 2. Zakres zbieranych danych

Aplikacja „Co zabrać?" zbiera i przetwarza następujące dane:

- **Adres e-mail** — pozyskiwany automatycznie w procesie logowania przez Google Sign-In.
- **Identyfikator użytkownika (UUID)** — generowany automatycznie w systemie Supabase Auth.
- **Dane o listach pakowania** — tytuły list, przedmioty, stany odhaczenia, kategorie, daty docelowe, zastosowane filtry.
- **Zdarzenia analityczne** — rodzaj zdarzenia (np. dodanie przedmiotu, odhaczenie, ukończenie listy), nazwa przedmiotu, kategoria, identyfikator listy i szablonu. Dane te służą wyłącznie do wewnętrznej analizy popularności przedmiotów.
- **Udostępnienia list** — adresy e-mail osób, którym udostępniono listę.
- **Token powiadomień push (FCM)** — unikalny identyfikator urządzenia generowany przez usługę Firebase Cloud Messaging (Google LLC), używany wyłącznie do wysyłania przypomnień o pakowanych listach. Token jest przechowywany w bazie Supabase i usuwany przy wylogowaniu lub usunięciu konta.
- **Propozycje szablonów** — treść sugestii nowych szablonów przesłanych przez użytkownika.

## 3. Cel przetwarzania danych

Dane osobowe przetwarzane są w następujących celach:

**a) Świadczenie usługi** — tworzenie konta, zapisywanie list pakowania, udostępnianie list innym użytkownikom (art. 6 ust. 1 lit. b RODO).

**b) Analityka wewnętrzna** — analiza popularności przedmiotów w celu ulepszania szablonów. Dane analityczne nie są udostępniane podmiotom trzecim (art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes administratora).

**c) Kontakt** — odpowiadanie na zgłoszenia i prośby użytkowników (art. 6 ust. 1 lit. f RODO).

**d) Powiadomienia push** — wysyłanie przypomnień o konieczności spakowania listy lub konkretnych przedmiotów, zgodnie z terminem wybranym przez użytkownika. Podstawą przetwarzania jest zgoda użytkownika (art. 6 ust. 1 lit. a RODO). Użytkownik może cofnąć zgodę w dowolnym momencie, wyłączając powiadomienia w ustawieniach urządzenia.

## 4. Przechowywanie danych

Dane przechowywane są w usłudze Supabase (baza PostgreSQL) na serwerach zlokalizowanych w Unii Europejskiej.

Dane są przechowywane przez czas korzystania z usługi. Po usunięciu konta dane użytkownika są usuwane w ciągu 30 dni.

## 5. Udostępnianie danych

Dane mogą być udostępniane następującym podmiotom:

- **Google LLC** — w zakresie uwierzytelniania (Google Sign-In), powiadomień push (Firebase Cloud Messaging) oraz wyświetlania reklam (Google AdMob). Google przetwarza dane zgodnie z własną [polityką prywatności](https://policies.google.com/privacy). Token FCM nie jest używany do celów marketingowych.
- **Google LLC (Google AdMob)** — w zakresie wyświetlania reklam w Aplikacji. AdMob może zbierać identyfikatory reklamowe urządzenia w celu personalizacji reklam (za zgodą użytkownika). Dotyczy wyłącznie użytkowników konta standard (darmowego).
- **Supabase Inc.** — jako dostawca infrastruktury bazodanowej i uwierzytelniania. Supabase działa jako podmiot przetwarzający dane na zlecenie administratora.

Administrator nie sprzedaje danych osobowych podmiotom trzecim. Nie stosuje profilowania ani zautomatyzowanego podejmowania decyzji.

## 6. Prawa użytkownika

Użytkownikowi przysługują następujące prawa:

- Prawo dostępu do swoich danych osobowych
- Prawo do sprostowania danych
- Prawo do usunięcia danych („prawo do bycia zapomnianym")
- Prawo do ograniczenia przetwarzania
- Prawo do przenoszenia danych
- Prawo do sprzeciwu wobec przetwarzania
- Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO)

W celu realizacji powyższych praw prosimy o kontakt: [patek.android@gmail.com](mailto:patek.android@gmail.com)

## 7. Pliki cookies i SDK

Aplikacja mobilna nie wykorzystuje plików cookies.

Aplikacja nie korzysta z zewnętrznych SDK analitycznych (takich jak Google Analytics, Firebase Analytics, Facebook SDK itp.). Analityka oparta jest wyłącznie na własnej, wewnętrznej bazie danych.

Aplikacja korzysta z **Google AdMob SDK** (Google LLC) w celu wyświetlania reklam. Dokładne informacje o przetwarzaniu danych przez AdMob zawiera sekcja 8 niniejszej polityki.

## 8. Reklamy (Google AdMob)

Aplikacja wyświetla reklamy dostarczane przez usługę **Google AdMob** (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA).

W związku z wyświetlaniem reklam AdMob może zbierać następujące dane:

- **Android Advertising ID** — identyfikator reklamowy urządzenia.
- **Informacje o interakcjach z reklamami** — kliknięcia, wyświetlenia.
- **Przybliżona lokalizacja** — na podstawie adresu IP.

**Podstawa prawna:** zgoda użytkownika wyrażona w formularzu consent wyświetlanym przy pierwszym uruchomieniu aplikacji (art. 6 ust. 1 lit. a RODO).

**Rezygnacja:** użytkownik może wycofać zgodę na personalizację reklam w ustawieniach urządzenia (Ustawienia → Google → Reklamy).

Użytkownicy konta premium są zwolnieni z wyświetlania reklam.

Polityka prywatności Google: <https://policies.google.com/privacy>

## 9. Bezpieczeństwo danych

Dane chronione są przez:

- Row Level Security (RLS) — każdy użytkownik ma dostęp wyłącznie do swoich danych.
- Szyfrowane połączenia HTTPS.
- Uwierzytelnianie OAuth 2.0 przez Google.
- Tokeny JWT do autoryzacji żądań API.

## 10. Zmiany polityki prywatności

Administrator zastrzega sobie prawo do aktualizacji niniejszej Polityki Prywatności. O istotnych zmianach użytkownicy zostaną poinformowani poprzez komunikat w aplikacji.

Korzystanie z aplikacji po wprowadzeniu zmian oznacza ich akceptację.

---

**Kontakt:** [patek.android@gmail.com](mailto:patek.android@gmail.com)
