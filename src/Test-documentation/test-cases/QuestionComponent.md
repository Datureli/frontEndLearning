---
id: #QUE001
title: Sprawdź poprawność wyświetlania pytan rekrutacyjnych
description: Walidacja to proces sprawdzania poprawności danych lub informacji w stosunku do określonych reguł lub kryteriów. W przypadku stron internetowycch najczęstszym zastosowaniem są formularze. Zarówno sam formularz całościowo jak i poszczególne pola tego formularza mogą podlegać walidacji.
test Scenario: Poprawne przeglądanie pytań rekrutacyjnych
Test Steps:   
  - Sprawdź czy wyświetlają się pytania rekrutacyjne
  - Sprawdź poprawność wyświetlania pytań rekrutacyjnych
  - Sprawdź poprawność wyboru kategorii
  - Sprawdź nawigacje pomiędzy pytaniami za pomocą strzałek w slajderze
  - Sprawdź nawigacje pomiędzy komponentami za pomocą przycisków na klawiaturze lewo/prawo

Prerequisites: Pytania rekrutacyjne wyświetlają się
Expected/Intended Results: Pytania wyświetlają się i można się między nimi przełączać
---

## Sprawdź poprawność wyboru kategorii:

- Wchodzimy na zakładkę pytania rekrutacyjne
- Kliknij przycisk "kategoria pytań" na środku paska nawigacyjnego
- Sprawdź czy poprawnie wyświetla się lista z wszystkimi kategoriami pytań
- Sprawdź czy po kliknięciu poprawnie wyświetliło się pytanie,odpowiedź oraz strzałki nawigacyjne. Powtórz dla każdej kategorii
- 
## Sprawdź Poprawność Wyświetlania Pytań rekrutacyjnych:

- Wchodzimy na zakładkę pytania rekrutacyjne
- Kliknij przycisk "kategoria pytań" na środku paska nawigacyjnego
- Wybierz jedną z kategorii którą chcesz przetestować
- Sprawdź czy po kliknięciu poprawnie wyświetliło się pytanie,odpowiedź oraz strzałki nawigacyjne

## Spróbuj użyć strzałek nawigacyjnych (left/right), aby przejść między kolejnymi pytaniami.

- Kliknij strzałkę z ikonką arrow left
- Sprawdź czy nawiguje do poprzedniego pytania
- Kliknij strzałke z ikonką arrow right
- Sprawdź czy nawiguje do następnego pytania

## Przetestuj komponent na różnych urządzeniach i rozdzielczościach.

- Spróbuj jednocześnie kliknąć na klawiaturze lewą i prawą strzałke myszy
- W tym przypadku nawigacja powinna zostać zablokowana

Upewnij się, że komponent jest responsywny i prezentuje pytania w czytelny sposób na urządzeniach mobilnych, tabletach i desktopach.
