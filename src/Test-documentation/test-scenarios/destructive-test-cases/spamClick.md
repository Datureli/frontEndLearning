---
id: #DES001
title: Attempt to break the web page by fast clicking.
description: Try pressing the mouse quickly on various interactive elements to see if unexpected effects occur
test Scenario: Poprawne przeglądanie pytań rekrutacyjnych
Test Steps:



Prerequisites: Pytania rekrutacyjne wyświetlają się
Expected/Intended Results: Pytania wyświetlają się i można się między nimi przełączać
---

## Sprawdź czy pola formularza nie mogą być puste

- Wchodzimy na zakładkę pytania rekrutacyjne
- Kliknij przycisk "kategoria pytań" na środku paska nawigacyjnego
- Wybierz jedną z kategorii którą chcesz przetestować
- Sprawdź czy po kliknięciu poprawnie wyświetliło się pytanie,odpowiedź oraz strzałki nawigacyjne

## Sprawdź Poprawność Wyświetlania Pytań rekrutacyjnych:

- Wchodzimy na zakładkę pytania rekrutacyjne
- Kliknij przycisk "kategoria pytań" na środku paska nawigacyjnego
- Wybierz jedną z kategorii którą chcesz przetestować
- Powinno wyświetlić się pytanie i odpowiedź
- Przetestuj różne pytania i sprawdź czy poprawnie się wyświetlają pomimo dłuższych ciągów znaków, czy nie ma nieregularnych odstępów
- Przetestuj czy pytanie nie wychodzi poza kontener
- Sprawdź czy odpowiedzi nie mają nieregularnych spacji/tab
- Sprawdź czy początek zdania zaczyna się z dużej litery
- sprawdź czy na końcu zdania znajduje się kropka a za nią pojedynczy odstęp
- Sprawdź co się stanie z szerokoscią kontenera jeżeli zabraknie pytania rekrutacyjnego lub odpowiedzi

## Sprawdź poprawność wyboru kategorii:

- Wchodzimy na zakładkę pytania rekrutacyjne
- Kliknij przycisk "kategoria pytań" na środku paska nawigacyjnego
- Sprawdź czy poprawnie wyświetla się lista z wszystkimi kategoriami pytań
- Sprawdź czy po kliknięciu poprawnie wyświetliło się pytanie,odpowiedź oraz strzałki nawigacyjne. Powtórz dla każdej kategorii
- Sprawdź czy po wybraniu kategorii i ponownym kliknięciu przycisku kategoria pytań podświetla aktualnie wyświetlaną kategorię za pomocą właściwości background-color: green;
-

## Spróbuj użyć strzałek nawigacyjnych (left/right), aby przejść między kolejnymi pytaniami.

- Kliknij strzałkę z ikonką arrow left
- Sprawdź czy nawiguje do poprzedniego pytania
- Kliknij strzałke z ikonką arrow right
- Sprawdź czy nawiguje do następnego pytania

## Sprawdź nawigacje pomiędzy komponentami za pomocą przycisków na klawiaturze lewo/prawo

- Spróbuj jednocześnie kliknąć na klawiaturze lewą i prawą strzałke myszy
- W tym przypadku nawigacja powinna zostać zablokowana
- Sprawdź czy jest odpowiednie opóżnienie w momencie gdy klikniesz kilka razy prawą i lewą strzałkę
- Sprawdź czy nawigacja za pomocą strzałek działa dla każdej kategorii
