export default {
  namespaced: true,

  state: {
    cybersecurityQuestions: [
      {
        question: "Czym jest Hackthebox?",
        answer:
          "Hack The Box (HTB) to platforma treningowa i społeczność skupiająca się na testowaniu penetracyjnym (penetration testing) oraz bezpieczeństwie informatycznym. Jest to platforma online, która umożliwia użytkownikom doskonalenie swoich umiejętności związanych z hackingiem etycznym poprzez praktyczne wyzwania i zadania.Wyzwania i maszyny: Hack The Box oferuje różnorodne wyzwania i maszyny, które można próbować włamać. Te maszyny są wirtualnymi środowiskami, które symulują realistyczne scenariusze ataków i pozwalają użytkownikom testować swoje umiejętności w bezpiecznym środowisku.",
      },
      {
        question: "Czym jest wifi?",
        answer:
          "Wi-Fi, czyli Wireless Fidelity, to technologia komunikacji bezprzewodowej, która umożliwia urządzeniom komunikację i wymianę danych przez fale radiowe. Działa na zasadzie wykorzystania częstotliwości radiowych w celu przesyłania informacji między urządzeniami w sieci lokalnej. Oto ogólny opis działania technologii Wi-FiUrządzenie, które chce wysłać lub odbierać dane za pomocą Wi-Fi, generuje sygnał elektryczny, który jest przekształcany na fale radiowe o odpowiednich częstotliwościach. Te fale radiowe są wytwarzane w zakresie częstotliwości radiowych lub mikrofalowych, co pozwala na efektywną transmisję danych na krótkie odległości.",
      },
      {
        question: "Czym jest nfc?",
        answer:
          "NFC, czyli Near Field Communication (Komunikacja Bliskiego Zasięgu), to technologia bezprzewodowej komunikacji krótkiego zasięgu, która umożliwia wymianę danych między urządzeniami znajdującymi się w bliskiej odległości od siebie, zazwyczaj na odległość do kilku centymetrów. Technologia NFC bazuje na standardach radiowych RFID (Radio Frequency Identification) i pozwala na komunikację między dwoma urządzeniami, z których przynajmniej jedno jest aktywne (wysyła dane), a drugie może być aktywne lub pasywne (odbiera dane).",
      },
      {
        question: "Czym jest OS-Independent Troubleshooting",
        answer:
          "OS-Independent Troubleshooting oznacza proces diagnozowania i rozwiązywania problemów technicznych związanych z urządzeniem lub oprogramowaniem, niezależnie od systemu operacyjnego (OS), na którym działa to urządzenie lub oprogramowanie. Innymi słowy, jest to podejście do rozwiązywania problemów, które skupia się na ogólnych aspektach i cechach, niezależnie od konkretnej platformy lub systemu operacyjnego.",
      },
      {
        question: "Opisz funkcję is_single",
        answer:
          "Określa, czy zapytanie dotyczy istniejącego pojedynczego psotu",
      },
      {
        question: "Opisz funkcję the_post",
        answer: "Iteruje po indeksie posta w pętli",
      },
      {
        question: "Opisz funkcję the_post",
        answer: "Iteruje po indeksie posta w pętli",
      },

      {
        question: "Jakie są podstawowe zasady bezpieczeństwa cybernetycznego?",
        answer:
          "Podstawowe zasady bezpieczeństwa cybernetycznego obejmują: ciągłe aktualizacje oprogramowania, stosowanie silnych haseł, ograniczanie dostępu do danych, regularne tworzenie kopii zapasowych danych, monitorowanie aktywności sieciowej i edukację pracowników w zakresie świadomości cybernetycznej.",
      },
      {
        question: "Czym jest phishing i jak można się przed nim chronić?",
        answer:
          "Phishing to technika wykorzystywana przez cyberprzestępców w celu oszukania użytkowników i wyłudzenia poufnych informacji, takich jak hasła czy dane finansowe. Aby się przed nim chronić, należy być ostrożnym podczas otwierania podejrzanych wiadomości e-mail, unikać klikania w podejrzane linki oraz korzystać z oprogramowania antyphishingowego.",
      },
      {
        question: "Co to jest malware? Podaj przykłady różnych typów malware.",
        answer:
          "Malware to złośliwe oprogramowanie, które jest zaprojektowane w celu uszkodzenia lub zakłócenia działania systemów komputerowych. Przykłady różnych typów malware obejmują wirusy komputerowe, trojany, robaki, ransomware i spyware.",
      },
      {
        question: "Jakie są dobre praktyki przy tworzeniu silnych haseł?",
        answer:
          "Dobre praktyki przy tworzeniu silnych haseł obejmują: stosowanie długich i złożonych haseł, unikanie łatwo dostępnych informacji osobistych w haśle, unikanie użycia tych samych haseł w różnych miejscach oraz regularną zmianę haseł.",
      },
      {
        question:
          "Czym jest autoryzacja dwuskładnikowa (2FA) i jakie są jej korzyści?",
        answer:
          "Autoryzacja dwuskładnikowa (2FA) to proces uwierzytelniania, który wymaga dwóch różnych form weryfikacji tożsamości użytkownika. Korzyścią z 2FA jest zwiększenie poziomu bezpieczeństwa, ponieważ nawet w przypadku przechwycenia jednego elementu uwierzytelniania, atakujący nadal potrzebuje drugiego elementu do uzyskania dostępu.",
      },
      {
        question: "Co to jest firewall i jak działa?",
        answer:
          "Firewall to rodzaj systemu bezpieczeństwa sieciowego, który kontroluje i monitoruje ruch sieciowy między sieciami. Działa na zasadzie zestawienia reguł, które decydują, czy ruch sieciowy powinien być przepuszczony, zablokowany czy przekierowany.",
      },
      {
        question: "Wyjaśnij, czym jest szyfrowanie i dlaczego jest ważne.",
        answer:
          "Szyfrowanie to proces konwersji czytelnych danych na nieczytelny format za pomocą algorytmów matematycznych. Jest ważne, ponieważ zapewnia poufność danych, chroniąc je przed nieautoryzowanym dostępem lub przechwyceniem przez osoby trzecie.",
      },
      {
        question:
          "Jakie są różnice między szyfrowaniem symetrycznym a asymetrycznym?",
        answer:
          "Szyfrowanie symetryczne używa tego samego klucza do szyfrowania i deszyfrowania danych, podczas gdy szyfrowanie asymetryczne wykorzystuje dwa różne klucze: publiczny do szyfrowania i prywatny do deszyfrowania.",
      },
      {
        question:
          "Co to jest VPN i jakie są jego zalety w kontekście bezpieczeństwa?",
        answer:
          "VPN (Virtual Private Network) to technologia, która tworzy bezpieczne połączenie sieciowe między zdalnymi komputerami poprzez publiczną sieć, taką jak Internet. Zaletami VPN w kontekście bezpieczeństwa są: szyfrowanie ruchu sieciowego, ukrywanie adresu IP oraz zapewnienie prywatności i anonimowości podczas przeglądania sieci.",
      },
      {
        question: "Czym jest test penetracyjny i jakie są jego główne cele?",
        answer:
          "Test penetracyjny (penetration testing) to proces oceny zabezpieczeń systemów informatycznych poprzez symulację ataków cybernetycznych. Głównym celem testu penetracyjnego jest zidentyfikowanie słabości systemów oraz pomaganie w poprawie zabezpieczeń poprzez identyfikację i naprawę luk w zabezpieczeniach.",
      },
      {
        question:
          "Jakie są najczęstsze błędy w konfiguracji bezpieczeństwa, które można znaleźć podczas audytu?",
        answer:
          "Najczęstsze błędy w konfiguracji bezpieczeństwa, które można znaleźć podczas audytu, obejmują: niewystarczające aktualizacje oprogramowania, słabe hasła, niewłaściwe zarządzanie dostępem, niewłaściwie skonfigurowane firewalle oraz brak monitorowania aktywności sieciowej.",
      },
      {
        question:
          "Czym jest SQL Injection i jak można się przed tym zabezpieczyć?",
        answer:
          "SQL Injection to atak, który polega na wstrzykiwaniu złośliwych zapytań SQL do aplikacji internetowej w celu manipulacji bazą danych. Aby się przed nim zabezpieczyć, należy stosować parametryzowane zapytania SQL oraz odpowiednio walidować i uciekać dane wejściowe.",
      },
      {
        question: "Wyjaśnij, czym jest XSS i jakie mogą być jego skutki.",
        answer:
          "XSS (Cross-Site Scripting) to atak, który polega na wstrzykiwaniu złośliwego kodu JavaScript do strony internetowej, który następnie jest wykonywany w przeglądarce użytkownika. Skutki XSS mogą obejmować kradzież sesji użytkownika, przechwytywanie danych osobistych oraz zainfekowanie stron internetowych złośliwym oprogramowaniem.",
      },
      {
        question: "Co to jest CSRF i jak zapobiegać takim atakom?",
        answer:
          "CSRF (Cross-Site Request Forgery) to atak, który polega na wykorzystaniu autoryzacji użytkownika w aplikacji internetowej do wykonania nieautoryzowanych działań w jego imieniu. Aby zapobiec takim atakom, można stosować tokeny CSRF, sprawdzanie refererów oraz ograniczanie dostępu do funkcji, które mogą być wykorzystane w ataku CSRF.",
      },
      {
        question:
          "Jakie są podstawowe komponenty skutecznej polityki bezpieczeństwa?",
        answer:
          "Podstawowe komponenty skutecznej polityki bezpieczeństwa obejmują: jasne określenie celów polityki, przypisanie odpowiedzialności za wdrażanie polityki, regularne przeglądy i aktualizacje polityki, edukację pracowników w zakresie świadomości bezpieczeństwa oraz środki kontroli i monitorowania przestrzegania polityki.",
      },
      {
        question:
          "Jakie narzędzia są używane do monitorowania bezpieczeństwa sieci?",
        answer:
          "Narzędzia używane do monitorowania bezpieczeństwa sieci obejmują: systemy zarządzania zdarzeniami bezpieczeństwa (SIEM), systemy detekcji intruzów (IDS), systemy zapobiegania intruzom (IPS), narzędzia do analizy ruchu sieciowego oraz narzędzia do monitorowania wydajności sieci.",
      },
      {
        question: "Czym jest system detekcji intruzów (IDS) i jak działa?",
        answer:
          "System detekcji intruzów (IDS) to narzędzie, które monitoruje ruch sieciowy w poszukiwaniu podejrzanych lub złośliwych zachowań. Działa poprzez analizę ruchu sieciowego i wykrywanie nieprawidłowości, które mogą wskazywać na potencjalne ataki lub incydenty bezpieczeństwa.",
      },
      {
        question:
          "Jakie są zalety i wady korzystania z oprogramowania typu open source w kontekście bezpieczeństwa?",
        answer:
          "Zalety korzystania z oprogramowania typu open source w kontekście bezpieczeństwa obejmują: dostępność kodu źródłowego dla audytu bezpieczeństwa, elastyczność w dostosowywaniu do indywidualnych potrzeb oraz wspólnotę wsparcia i udostępniania informacji. Wady mogą obejmować: brak gwarancji wsparcia technicznego, potencjalne ryzyko bezpieczeństwa związanego z błędami w kodzie oraz ograniczoną kontrolę nad rozwojem oprogramowania.",
      },
      {
        question:
          "Jak działa protokół HTTPS i dlaczego jest bezpieczniejszy niż HTTP?",
        answer:
          "Protokół HTTPS (Hypertext Transfer Protocol Secure) to zabezpieczona wersja protokołu HTTP, która wykorzystuje protokół TLS (Transport Layer Security) do szyfrowania danych przesyłanych między przeglądarką użytkownika a serwerem internetowym. Jest bezpieczniejszy niż HTTP, ponieważ zapewnia poufność i integralność danych poprzez szyfrowanie ruchu sieciowego.",
      },
      {
        question: "Co to jest cyfrowy certyfikat i jakie ma zastosowanie?",
        answer:
          "Cyfrowy certyfikat to elektroniczny dokument, który potwierdza tożsamość osoby, organizacji lub serwera w internecie. Ma zastosowanie głównie w procesach uwierzytelniania, zapewniania bezpieczeństwa komunikacji oraz weryfikacji integralności danych przesyłanych w internecie.",
      },

      {
        question:
          "Jakie są typy skanowania portów i jakie informacje można z nich uzyskać?",
        answer:
          "Typy skanowania portów obejmują skanowanie pełnego zakresu, skanowanie SYN, skanowanie ACK, skanowanie FIN oraz skanowanie XMAS. Z skanowania portów można uzyskać informacje o otwartych portach, usługach działających na tych portach oraz o potencjalnych lukach w zabezpieczeniach.",
      },
      {
        question:
          "Co to jest hashowanie i jak jest wykorzystywane w bezpieczeństwie?",
        answer:
          "Haszowanie to proces konwersji danych na wartość skrótu za pomocą algorytmów haszujących. W bezpieczeństwie haszowanie jest wykorzystywane głównie do przechowywania haseł w formie zabezpieczonej przed odczytem w przypadku wycieku danych.",
      },
      {
        question: "Co oznacza pojęcie “zero-day exploit”?",
        answer:
          "Zero-day exploit to atak, który wykorzystuje lukę w zabezpieczeniach oprogramowania, która jest jeszcze nieznana dla producenta lub nie została jeszcze przez niego załatana. Atak ten jest szczególnie niebezpieczny, ponieważ nie istnieją jeszcze żadne łaty ani aktualizacje, które można zastosować, aby się przed nim zabezpieczyć.",
      },
      {
        question:
          "Jak działają mechanizmy sandboksowania w kontekście bezpieczeństwa aplikacji?",
        answer:
          "Mechanizmy sandboksowania izolują aplikacje od reszty systemu operacyjnego, tworząc bezpieczne środowisko wykonawcze, w którym mogą działać. Dzięki temu aplikacje są ograniczone w dostępie do zasobów systemowych, co pomaga zabezpieczyć system przed potencjalnymi atakami lub złośliwym oprogramowaniem.",
      },
      {
        question:
          "Jakie są typowe słabości w zabezpieczeniach urządzeń mobilnych?",
        answer:
          "Typowe słabości w zabezpieczeniach urządzeń mobilnych obejmują: brak aktualizacji oprogramowania, niewłaściwe zarządzanie dostępem, niezabezpieczone połączenia bezprzewodowe, złośliwe aplikacje oraz utrata lub kradzież urządzeń.",
      },
      {
        question:
          "Czym jest inżynieria społeczna i jak można się przed nią bronić?",
        answer:
          "Inżynieria społeczna to technika manipulacji ludźmi w celu uzyskania poufnych informacji lub dostępu do zabezpieczonych zasobów. Można się przed nią bronić poprzez edukację pracowników, stosowanie procedur weryfikacji tożsamości oraz ostrożność podczas udostępniania poufnych informacji.",
      },
      {
        question:
          "Wyjaśnij, co to jest token JWT i jakie są jego zastosowania.",
        answer:
          "Token JWT (JSON Web Token) to format tokenów używany do bezpiecznej transmisji informacji między dwoma stronami jako obiekt JSON. Jest szeroko stosowany w autoryzacji i uwierzytelnianiu, sesjach użytkownika oraz zarządzaniu uprawnieniami w aplikacjach internetowych.",
      },
      {
        question:
          "Jak można chronić bazę danych przed nieautoryzowanym dostępem?",
        answer:
          "Bazę danych można chronić przed nieautoryzowanym dostępem poprzez: stosowanie silnych haseł, ograniczanie dostępu do bazy danych na poziomie użytkowników i ról, szyfrowanie danych w bazie danych oraz monitorowanie aktywności użytkowników.",
      },
      {
        question: "Czym jest weryfikacja dwuetapowa i jak ją implementować?",
        answer:
          "Weryfikacja dwuetapowa to proces uwierzytelniania, który wymaga od użytkownika podania dwóch różnych form weryfikacji tożsamości, na przykład hasła i kodu jednorazowego. Można ją zaimplementować w aplikacjach internetowych, korzystając z usług SMS, aplikacji autoryzacyjnych lub tokenów OTP.",
      },
      {
        question:
          "Co to jest obrona w głębi (defense in depth) i jak można ją zastosować?",
        answer:
          "Obrona w głębi to strategia bezpieczeństwa, która polega na stosowaniu wielu warstw zabezpieczeń, aby zminimalizować ryzyko ataku. Może być zastosowana poprzez stosowanie zapór sieciowych, oprogramowania antywirusowego, monitorowania ruchu sieciowego oraz szkoleń pracowników w zakresie świadomości bezpieczeństwa.",
      },
      {
        question:
          "Jakie są najlepsze praktyki przy zabezpieczaniu serwera webowego?",
        answer:
          "Najlepsze praktyki przy zabezpieczaniu serwera webowego obejmują: regularne aktualizacje oprogramowania, konfigurację silnych haseł, stosowanie zapór sieciowych, szyfrowanie danych, ograniczenie dostępu do zasobów oraz monitorowanie aktywności.",
      },
      {
        question: "Co to jest patch management i dlaczego jest ważne?",
        answer:
          "Patch management to proces zarządzania aktualizacjami i łatami bezpieczeństwa dla oprogramowania i systemów. Jest ważny, ponieważ pozwala na szybkie wdrażanie poprawek, które naprawiają znalezione luki bezpieczeństwa i zmniejszają ryzyko ataków.",
      },
      {
        question:
          "Jakie są najczęstsze błędy konfiguracyjne, które prowadzą do luk w bezpieczeństwie?",
        answer:
          "Najczęstsze błędy konfiguracyjne, które prowadzą do luk w bezpieczeństwie, obejmują: używanie domyślnych haseł, niewłaściwa konfiguracja uprawnień użytkowników, niewystarczające aktualizacje oprogramowania, niezabezpieczone połączenia sieciowe oraz brak monitorowania aktywności.",
      },
      {
        question: "Czym jest OWASP i jakie zasoby oferuje?",
        answer:
          "OWASP (Open Web Application Security Project) to organizacja non-profit, która zajmuje się poprawą bezpieczeństwa aplikacji internetowych. Oferuje zasoby takie jak listy kontrolne bezpieczeństwa, narzędzia testowe, dokumentacje oraz szkolenia w zakresie bezpieczeństwa aplikacji internetowych.",
      },
      {
        question:
          "Jakie są metody zabezpieczania komunikacji w sieciach bezprzewodowych?",
        answer:
          "Metody zabezpieczania komunikacji w sieciach bezprzewodowych obejmują: stosowanie szyfrowania danych (np. WPA2), ukrywanie SSID, filtrację MAC, użycie silnych haseł oraz aktualizacje firmware'ów urządzeń sieciowych.",
      },
      {
        question: "Co to są honeypoty i jak można je wykorzystać?",
        answer:
          "Honeypoty to pułapki lub systemy przyciągające złośliwe ataki, aby zbadać metody działania i narzędzia używane przez cyberprzestępców. Mogą być wykorzystywane do zbierania informacji o atakach, monitorowania zagrożeń oraz zwiększania świadomości bezpieczeństwa.",
      },
      {
        question:
          "Jakie są różne typy szyfrowania stosowane w sieciach bezprzewodowych?",
        answer:
          "Różne typy szyfrowania stosowane w sieciach bezprzewodowych to między innymi: WEP, WPA, WPA2 oraz WPA3. WPA2 i WPA3 są obecnie uznawane za bardziej bezpieczne i zalecane do stosowania.",
      },
      {
        question:
          "Jakie są najlepsze praktyki przy konfiguracji urządzeń sieciowych?",
        answer:
          "Najlepsze praktyki przy konfiguracji urządzeń sieciowych obejmują: zmianę domyślnych haseł, ograniczenie dostępu do interfejsów administracyjnych, aktualizacje firmware'ów, konfigurację firewalla oraz regularne kopie zapasowe konfiguracji.",
      },
      {
        question:
          "Czym jest bezpieczeństwo oparte na chmurze i jakie wyzwania się z nim wiążą?",
        answer:
          "Bezpieczeństwo oparte na chmurze to model bezpieczeństwa, w którym usługi i dane są przechowywane i zarządzane w chmurze obliczeniowej. Wyzwania z nim związane obejmują: bezpieczne przechowywanie danych, zapewnienie dostępności i integralności danych oraz zapewnienie zgodności z przepisami prawnymi.",
      },
      {
        question:
          "Jakie techniki można stosować do analizy i monitorowania ruchu sieciowego?",
        answer:
          "Techniki stosowane do analizy i monitorowania ruchu sieciowego obejmują: inspekcję pakietów, analizę protokołów, wykrywanie wzorców, monitorowanie logów oraz użycie narzędzi do zarządzania zdarzeniami bezpieczeństwa (SIEM).",
      },

      {
        question:
          "Co to jest zarządzanie tożsamością i dostępem (IAM) i jakie są jego korzyści?",
        answer:
          "Zarządzanie tożsamością i dostępem (IAM) to proces zarządzania identyfikacją, autoryzacją i uprawnieniami użytkowników w systemach informatycznych. Korzyścią IAM jest zapewnienie bezpiecznego i efektywnego zarządzania dostępem do zasobów, zwiększenie kontroli nad uprawnieniami użytkowników oraz ograniczenie ryzyka związanego z nieautoryzowanym dostępem.",
      },
      {
        question:
          "Jakie narzędzia i techniki są używane do audytu bezpieczeństwa aplikacji?",
        answer:
          "Do audytu bezpieczeństwa aplikacji są używane narzędzia i techniki takie jak skanery podatności, testy penetracyjne, analiza statyczna i dynamiczna kodu, monitorowanie logów oraz przegląd kodu źródłowego. Narzędzia te pomagają zidentyfikować potencjalne luki w zabezpieczeniach i słabości aplikacji.",
      },
      {
        question: "Jak można zabezpieczyć komunikację między mikroserwisami?",
        answer:
          "Komunikację między mikroserwisami można zabezpieczyć poprzez stosowanie protokołów szyfrowania (np. TLS), uwierzytelnianie i autoryzację, użycie tokenów JWT do uwierzytelniania żądań oraz kontrolę dostępu na poziomie API.",
      },
      {
        question:
          "Jakie są wyzwania związane z bezpieczeństwem Internetu rzeczy (IoT)?",
        answer:
          "Wyzwania związane z bezpieczeństwem IoT obejmują: brak standaryzacji w zakresie bezpieczeństwa, potencjalne ryzyko ataków DDoS za pomocą zainfekowanych urządzeń IoT, problem zarządzania aktualizacjami oprogramowania oraz ryzyko naruszenia prywatności i wycieku danych.",
      },
      {
        question:
          "Co to jest odpowiedzialne ujawnianie informacji o lukach w zabezpieczeniach?",
        answer:
          "Odpowiedzialne ujawnianie informacji o lukach w zabezpieczeniach (ang. responsible disclosure) to praktyka, w ramach której osoba odkrywająca lukę w zabezpieczeniach zgłasza ją producentowi lub właścicielowi oprogramowania przed ujawnieniem jej publicznie. Ma to na celu umożliwienie producentowi podjęcia działań naprawczych przed wykorzystaniem luki przez cyberprzestępców.",
      },
      {
        question: "Jakie są różnice między atakami DDoS a DoS?",
        answer:
          "Ataki DoS (Denial of Service) polegają na próbie zablokowania lub ograniczenia dostępności usługi dla legalnych użytkowników poprzez przeciążenie serwera atakowanego. Ataki DDoS (Distributed Denial of Service) są podobne, ale wykorzystują do tego celu zainfekowane komputery z różnych lokalizacji, co czyni je bardziej skutecznymi i trudniejszymi do zidentyfikowania.",
      },
      {
        question:
          "Jakie są różne warstwy modelu OSI i jakie mają znaczenie dla bezpieczeństwa?",
        answer:
          "Model OSI (Open Systems Interconnection) składa się z 7 warstw: fizycznej, łącza danych, sieciowej, transportowej, sesji, prezentacji i aplikacyjnej. Każda z tych warstw ma znaczenie dla bezpieczeństwa, np. warstwa aplikacyjna może wymagać szyfrowania danych, podczas gdy warstwa transportowa może zapewniać mechanizmy kontroli błędów.",
      },
      {
        question:
          "Jak działają złożone ataki na aplikacje webowe i jak można się przed nimi bronić?",
        answer:
          "Złożone ataki na aplikacje webowe mogą obejmować kombinację różnych technik, takich jak wstrzykiwanie SQL, ataki XSS, ataki CSRF oraz próby złamania uwierzytelnienia. Aby się przed nimi bronić, należy stosować zabezpieczenia na wielu poziomach, takie jak filtrowanie i walidacja danych wejściowych, stosowanie mechanizmów uwierzytelniania i autoryzacji oraz regularne aktualizacje oprogramowania.",
      },
      {
        question: "Jakie są metody zapobiegania wyciekom danych?",
        answer:
          "Metody zapobiegania wyciekom danych obejmują: szyfrowanie danych w spoczynku i w ruchu, stosowanie silnych zabezpieczeń dostępu, monitorowanie aktywności użytkowników, przestrzeganie zasad zgodności z przepisami prawnymi (np. GDPR) oraz regularne przeglądy i audyty bezpieczeństwa.",
      },
      {
        question: "Jakie są korzyści z automatyzacji procesów bezpieczeństwa?",
        answer:
          "Korzyści z automatyzacji procesów bezpieczeństwa obejmują: zwiększenie efektywności i skuteczności działań, szybsze wykrywanie i reagowanie na zagrożenia, zmniejszenie obciążenia dla personelu IT oraz poprawę spójności i zgodności z politykami bezpieczeństwa.",
      },
      {
        question:
          "Jak można wykryć i zapobiegać nadużyciom uprawnień administratora?",
        answer:
          "Nadużycia uprawnień administratora można wykryć poprzez monitorowanie aktywności i logów, stosowanie zasad zasad least privilege (minimalnych uprawnień), regularne przeglądy kont uprzywilejowanych oraz użycie mechanizmów kontroli dostępu i autoryzacji.",
      },
      {
        question:
          "Co to jest kryptografia klucza publicznego i jak jest używana?",
        answer:
          "Kryptografia klucza publicznego (PKI) to system kryptograficzny, który wykorzystuje dwa klucze: publiczny i prywatny. Klucz publiczny jest używany do szyfrowania danych lub weryfikacji podpisów cyfrowych, podczas gdy klucz prywatny jest używany do deszyfrowania danych lub generowania podpisów cyfrowych. PKI jest używany do zapewnienia poufności, integralności i uwierzytelniania danych.",
      },
      {
        question:
          "Jakie są wyzwania związane z przechowywaniem i zarządzaniem kluczami kryptograficznymi?",
        answer:
          "Wyzwania związane z przechowywaniem i zarządzaniem kluczami kryptograficznymi obejmują: zapewnienie bezpiecznego przechowywania kluczy, kontrolę dostępu do kluczy, rotację kluczy, zapewnienie zgodności z przepisami prawnymi (np. GDPR) oraz reagowanie na utratę lub kradzież kluczy.",
      },
      {
        question: "Jakie są typy testów penetracyjnych i jak są różne?",
        answer:
          "Typy testów penetracyjnych obejmują: testy czarnej skrzynki, testy białej skrzynki, testy szarej skrzynki oraz testy czerwonej skrzynki. Testy te różnią się stopniem wiedzy testerów na temat systemu, której używają podczas testowania.",
      },
      {
        question:
          "Co to jest świadomość bezpieczeństwa i jak można ją podnieść w organizacji?",
        answer:
          "Świadomość bezpieczeństwa to zrozumienie przez pracowników zagrożeń bezpieczeństwa informatycznego oraz umiejętność rozpoznawania i minimalizowania ryzyka. Można ją podnieść w organizacji poprzez szkolenia, kampanie edukacyjne, przeprowadzanie symulacji ataków oraz promowanie kultury bezpieczeństwa.",
      },
      {
        question:
          "Jakie są zasady konfiguracji bezpiecznego środowiska pracy zdalnej?",
        answer:
          "Zasady konfiguracji bezpiecznego środowiska pracy zdalnej obejmują: stosowanie bezpiecznych połączeń VPN, zabezpieczenie urządzeń końcowych (np. antywirusy, aktualizacje systemowe), stosowanie silnych haseł, regularne audyty bezpieczeństwa oraz ograniczenie dostępu do zasobów tylko do niezbędnego minimum.",
      },
      {
        question: "Jakie są najlepsze praktyki w zakresie zabezpieczania API?",
        answer:
          "Najlepsze praktyki w zakresie zabezpieczania API obejmują: uwierzytelnianie i autoryzację, kontrolę dostępu, szyfrowanie danych, walidację danych wejściowych, monitorowanie i logowanie aktywności oraz regularne aktualizacje i przeglądy zabezpieczeń.",
      },
      {
        question:
          "Jakie są zalety i wady korzystania z proxy w kontekście bezpieczeństwa?",
        answer:
          "Zalety korzystania z proxy w kontekście bezpieczeństwa obejmują: filtrowanie ruchu sieciowego, anonimizację adresu IP, ochronę przed atakami DDoS oraz poprawę wydajności sieci. Wady to m.in. konieczność dodatkowej konfiguracji, potencjalne opóźnienia w przekazywaniu żądań oraz zwiększone obciążenie dla serwera proxy.",
      },
      {
        question: "Jak można zabezpieczyć dane w transmisji?",
        answer:
          "Dane w transmisji można zabezpieczyć poprzez stosowanie protokołów szyfrowania, takich jak SSL/TLS, stosowanie protokołów VPN do tunelowania danych przez publiczne sieci oraz zapewnienie kontroli dostępu do danych.",
      },
      {
        question: "Jakie są różne techniki obsługi incydentów bezpieczeństwa?",
        answer:
          "Różne techniki obsługi incydentów bezpieczeństwa obejmują: przygotowanie i planowanie reakcji na incydent, wykrywanie i analizę incydentów, ograniczanie szkód oraz przywracanie systemów do normalnej pracy, a także wdrażanie środków zaradczych i przeciwdziałających.",
      },

      {
        question:
          "Jakie są różnice między symulacją ataku a testem penetracyjnym?",
        answer:
          "Symulacja ataku to symulacja rzeczywistego ataku, w której testowane są reakcje systemu na różne scenariusze ataków. Test penetracyjny to bardziej konkretna procedura, w której specjalista próbuje znaleźć słabości w systemie poprzez próby włamania.",
      },
      {
        question:
          "Jakie narzędzia są używane do zabezpieczania i monitorowania infrastruktury chmurowej?",
        answer:
          "Narzędzia do zabezpieczania i monitorowania infrastruktury chmurowej obejmują: narzędzia do monitorowania logów i metryk, rozwiązania do wykrywania zagrożeń, systemy zarządzania zdarzeniami bezpieczeństwa (SIEM), rozwiązania do zarządzania tożsamościami (IAM) oraz narzędzia do automatyzacji zabezpieczeń.",
      },
      {
        question:
          "Jakie są najlepsze praktyki przy projektowaniu bezpiecznych systemów?",
        answer:
          "Najlepsze praktyki przy projektowaniu bezpiecznych systemów obejmują: uwzględnienie bezpieczeństwa od samego początku procesu projektowania, stosowanie zasad least privilege (minimalnych uprawnień), regularne przeglądy kodu i audyty bezpieczeństwa, stosowanie zabezpieczeń wielopoziomowych oraz regularne aktualizacje oprogramowania.",
      },
      {
        question:
          "Jakie są najczęstsze techniki wykorzystywane przez cyberprzestępców do atakowania organizacji?",
        answer:
          "Najczęstsze techniki wykorzystywane przez cyberprzestępców obejmują: phishing, wstrzykiwanie SQL, ataki XSS, ataki DDoS, ransomware, ataki na systemy uwierzytelniania, ataki na aplikacje webowe oraz wykorzystywanie luk w zabezpieczeniach.",
      },
      {
        question:
          "Jakie są różnice między bezpieczeństwem fizycznym a cyberbezpieczeństwem?",
        answer:
          "Bezpieczeństwo fizyczne dotyczy ochrony fizycznych zasobów, takich jak budynki, urządzenia, sprzęt itp., podczas gdy cyberbezpieczeństwo skupia się na ochronie danych, informacji i zasobów cyfrowych przed atakami i zagrożeniami z sieci.",
      },
      {
        question: "Jakie są etapy rozwoju zabezpieczeń w aplikacji (SDLC)?",
        answer:
          "Etapami rozwoju zabezpieczeń w aplikacji (SDLC) są: analiza zagrożeń i ryzyka, projektowanie zabezpieczeń, implementacja zabezpieczeń, testowanie zabezpieczeń, wdrażanie zabezpieczeń oraz monitorowanie i aktualizacje.",
      },
      {
        question:
          "Jak działają mechanizmy uwierzytelniania i autoryzacji w nowoczesnych aplikacjach?",
        answer:
          "Mechanizmy uwierzytelniania w nowoczesnych aplikacjach mogą obejmować uwierzytelnianie wieloskładnikowe, biometryczne, tokeny JWT, integrację z serwerami uwierzytelniania zewnętrznego itp. Autoryzacja polega na sprawdzaniu uprawnień użytkownika do dostępu do określonych zasobów i działań w aplikacji.",
      },
      {
        question:
          "Jakie są wyzwania związane z zapewnieniem prywatności i bezpieczeństwa danych osobowych?",
        answer:
          "Wyzwania związane z zapewnieniem prywatności i bezpieczeństwa danych osobowych obejmują: zapewnienie zgodności z przepisami prawnymi (np. GDPR), ochronę danych przed wyciekiem, zabezpieczenie dostępu do danych, zapewnienie poufności danych oraz świadomość użytkowników dotycząca prywatności.",
      },
      {
        question:
          "Jakie narzędzia są używane do odkrywania i zarządzania lukami w zabezpieczeniach?",
        answer:
          "Narzędzia do odkrywania i zarządzania lukami w zabezpieczeniach obejmują: skanery podatności, narzędzia do analizy statycznej i dynamicznej kodu, systemy zarządzania podatnościami (Vulnerability Management Systems), platformy bug bounty oraz systemy zarządzania ryzykiem.",
      },
      {
        question: "Jakie są metody zabezpieczania danych w bazach danych?",
        answer:
          "Metody zabezpieczania danych w bazach danych obejmują: szyfrowanie danych w spoczynku i w ruchu, zarządzanie uprawnieniami dostępu, monitorowanie aktywności użytkowników, regularne audyty bezpieczeństwa oraz stosowanie zasad least privilege.",
      },
      {
        question:
          "Jak można wykorzystać analizę behawioralną do wykrywania zagrożeń?",
        answer:
          "Analiza behawioralna polega na monitorowaniu zachowań użytkowników i systemów w celu wykrywania nietypowych lub podejrzanych aktywności, które mogą wskazywać na potencjalne zagrożenia. Można ją wykorzystać do wykrywania ataków typu insider threat, ataków na systemy uwierzytelniania, ransomware itp.",
      },
      {
        question:
          "Jakie są korzyści z używania systemów detekcji i zapobiegania włamaniom?",
        answer:
          "Korzyści z używania systemów detekcji i zapobiegania włamaniom obejmują: szybkie wykrywanie nieautoryzowanych aktywności, blokowanie podejrzanych zachowań, ochronę przed atakami typu zero-day, redukcję ryzyka i szkód spowodowanych przez ataki oraz poprawę świadomości o zagrożeniach.",
      },
      {
        question: "Jak można zabezpieczyć aplikacje mobilne?",
        answer:
          "Aby zabezpieczyć aplikacje mobilne, można stosować metody takie jak: szyfrowanie danych, zabezpieczenie sesji użytkownika, wykorzystanie mechanizmów uwierzytelniania wieloskładnikowego, ograniczenie dostępu do zasobów urządzenia oraz regularne aktualizacje i patche.",
      },
      {
        question:
          "Jak działają technologie rozpoznawania twarzy w kontekście bezpieczeństwa?",
        answer:
          "Technologie rozpoznawania twarzy wykorzystują algorytmy do analizy cech twarzy użytkownika w celu uwierzytelniania tożsamości. Mogą być stosowane do kontroli dostępu do budynków, urządzeń mobilnych, systemów komputerowych itp., zapewniając dodatkową warstwę bezpieczeństwa.",
      },
      {
        question:
          "Jakie są wyzwania związane z bezpieczeństwem danych w dużych organizacjach?",
        answer:
          "Wyzwania związane z bezpieczeństwem danych w dużych organizacjach obejmują: zarządzanie złożonymi i rozproszonymi systemami IT, ochronę danych przed wyciekiem, zapewnienie zgodności z regulacjami prawnymi, zarządzanie dostępem do danych oraz świadomość pracowników dotycząca zagrożeń.",
      },
      {
        question: "Jakie są techniki ochrony przed wyciekiem informacji?",
        answer:
          "Techniki ochrony przed wyciekiem informacji obejmują: klasyfikację danych i stosowanie odpowiednich zabezpieczeń zgodnie z ich poziomem poufności, monitorowanie ruchu sieciowego i działań użytkowników, stosowanie technologii DLP (Data Loss Prevention), szyfrowanie danych, oraz edukację pracowników na temat bezpieczeństwa.",
      },
      {
        question: "Jak można zapobiegać atakom na sieci bezprzewodowe?",
        answer:
          "Aby zapobiegać atakom na sieci bezprzewodowe, można stosować metody takie jak: zabezpieczanie sieci za pomocą silnych haseł, stosowanie szyfrowania WPA2 lub WPA3, wyłączanie niepotrzebnych funkcji (np. WPS), regularne aktualizacje oprogramowania routera oraz monitorowanie aktywności sieci.",
      },
      {
        question:
          "Jakie są najlepsze praktyki w zarządzaniu ryzykiem cybernetycznym?",
        answer:
          "Najlepsze praktyki w zarządzaniu ryzykiem cybernetycznym obejmują: identyfikację i ocenę zagrożeń, opracowanie strategii zarządzania ryzykiem, wdrożenie odpowiednich zabezpieczeń, regularne audyty bezpieczeństwa, monitorowanie środowiska IT oraz ciągłe doskonalenie procedur związanych z bezpieczeństwem.",
      },
      {
        question:
          "Jakie są typowe błędy w zarządzaniu patchami i jak można je unikać?",
        answer:
          "Typowe błędy w zarządzaniu patchami obejmują: opóźnione lub niedostateczne instalowanie patchy, brak planowania i procedur zarządzania aktualizacjami, ignorowanie krytycznych aktualizacji. Aby uniknąć tych błędów, należy stosować regularne harmonogramy aktualizacji, testować patche przed ich wdrożeniem oraz monitorować systemy pod kątem nowych podatności.",
      },
      {
        question:
          "Jakie są różne rodzaje testów bezpieczeństwa w cyklu życia oprogramowania?",
        answer:
          "Różne rodzaje testów bezpieczeństwa w cyklu życia oprogramowania obejmują: testy penetracyjne, testy podatności, analizę kodu, testy bezpieczeństwa aplikacji, testy zagrożeń, testy wydajności pod kątem obciążenia, oraz testy odporności na ataki.",
      },
      {
        question:
          "Jakie są wyzwania związane z zarządzaniem tożsamością cyfrową?",
        answer:
          "Wyzwania związane z zarządzaniem tożsamością cyfrową obejmują: zapewnienie jednoznacznej identyfikacji użytkowników, zarządzanie dużą liczbą kont użytkowników, zapewnienie bezpiecznego dostępu do zasobów w różnych systemach, oraz utrzymanie zgodności z regulacjami dotyczącymi prywatności i bezpieczeństwa danych.",
      },
      {
        question: "Jak działają systemy ochrony przed kradzieżą danych?",
        answer:
          "Systemy ochrony przed kradzieżą danych monitorują i analizują ruch sieciowy oraz aktywność użytkowników w celu wykrycia podejrzanych zachowań, prób wycieku danych lub nieautoryzowanego dostępu. Mogą również stosować reguły i algorytmy do blokowania podejrzanych aktywności oraz alarmowania administratorów.",
      },
      {
        question:
          "Jak można użyć kryptografii do zabezpieczania komunikacji wewnętrznej?",
        answer:
          "Kryptografia może być stosowana do zabezpieczania komunikacji wewnętrznej poprzez szyfrowanie danych przesyłanych między różnymi elementami systemu, stosowanie protokołów szyfrowania, weryfikację tożsamości nadawcy i odbiorcy oraz zarządzanie kluczami szyfrowania.",
      },
      {
        question:
          "Jakie są wyzwania związane z bezpieczeństwem danych w chmurze?",
        answer:
          "Wyzwania związane z bezpieczeństwem danych w chmurze obejmują: kontrolę nad dostępem do danych, zarządzanie kluczami kryptograficznymi, zapewnienie zgodności z regulacjami dotyczącymi prywatności, zapobieganie wyciekom danych, oraz zapewnienie bezpieczeństwa danych w przypadku awarii lub ataku na dostawcę usług chmurowych.",
      },
      {
        question:
          "Jakie są zalety i wady korzystania z szyfrowania na poziomie dysku?",
        answer:
          "Zalety szyfrowania na poziomie dysku obejmują: ochronę danych przed nieautoryzowanym dostępem, szyfrowanie wszystkich danych na dysku w jednym procesie, oraz ułatwioną kontrolę dostępu do danych. Wady obejmują: spowolnienie działania systemu z powodu procesu szyfrowania i deszyfrowania danych oraz ryzyko utraty klucza szyfrowania.",
      },
      {
        question:
          "Jakie są różnice między zarządzaniem bezpieczeństwem informacji a zarządzaniem bezpieczeństwem cybernetycznym?",
        answer:
          "Zarządzanie bezpieczeństwem informacji obejmuje ogólną strategię i procedury dotyczące ochrony informacji, podczas gdy zarządzanie bezpieczeństwem cybernetycznym skupia się na zapobieganiu, wykrywaniu i reagowaniu na zagrożenia cyfrowe oraz ataki na systemy informatyczne i sieci.",
      },
      {
        question:
          "Jak można wykorzystać analizę ryzyka do poprawy bezpieczeństwa organizacji?",
        answer:
          "Analiza ryzyka pozwala zidentyfikować i ocenić potencjalne zagrożenia oraz ich wpływ na organizację. Na podstawie wyników analizy można opracować strategię zarządzania ryzykiem, wdrożyć odpowiednie zabezpieczenia, oraz przewidywać i minimalizować ryzyko wystąpienia incydentów bezpieczeństwa.",
      },
      {
        question:
          "Jak działają różne rodzaje algorytmów haszujących i ich zastosowanie w bezpieczeństwie?",
        answer:
          "Różne rodzaje algorytmów haszujących, takie jak SHA-256, MD5, czy bcrypt, przekształcają dane wejściowe w unikalny ciąg znaków (hash), który jest trudny do odwrócenia. Są one stosowane w bezpieczeństwie do przechowywania haseł, weryfikacji integralności danych, oraz jako elementy procesów uwierzytelniania i autoryzacji.",
      },
      {
        question:
          "Jak można zabezpieczyć komunikację między klientem a serwerem?",
        answer:
          "Komunikację między klientem a serwerem można zabezpieczyć poprzez stosowanie protokołów szyfrowania, takich jak SSL/TLS, uwierzytelnianie klienta i serwera, zarządzanie certyfikatami SSL, oraz monitorowanie ruchu sieciowego w celu wykrycia podejrzanych aktywności.",
      },
      {
        question: "Jakie są różnice między atakami pasywnymi a aktywnymi?",
        answer:
          "Ataki pasywne polegają na podsłuchiwaniu i analizowaniu ruchu sieciowego bez ingerencji w transmisję danych, podczas gdy ataki aktywne obejmują bezpośrednie ingerowanie w transmisję danych poprzez np. wstrzykiwanie pakietów, zmienianie zawartości danych itp.",
      },
      {
        question:
          "Jak działają różne systemy zapobiegania utracie danych (DLP)?",
        answer:
          "Systemy zapobiegania utracie danych monitorują ruch sieciowy i działania użytkowników w celu wykrycia i blokowania prób wycieku poufnych danych. Mogą również stosować reguły, szablony i algorytmy do identyfikacji i klasyfikacji danych, oraz blokować lub alarmować w przypadku wykrycia podejrzanych aktywności.",
      },
      {
        question:
          "Jakie są techniki zabezpieczania aplikacji przed atakami typu man-in-the-middle?",
        answer:
          "Techniki zabezpieczania aplikacji przed atakami typu man-in-the-middle obejmują: stosowanie protokołów szyfrowania (SSL/TLS), weryfikację certyfikatów SSL, weryfikację tożsamości serwera i klienta, użycie unikatowych tokenów sesji, oraz monitorowanie ruchu sieciowego w poszukiwaniu podejrzanych aktywności.",
      },
      {
        question:
          "Jakie są najlepsze praktyki w zakresie bezpieczeństwa dla deweloperów aplikacji?",
        answer:
          "Najlepsze praktyki w zakresie bezpieczeństwa dla deweloperów aplikacji obejmują: regularne przeglądy kodu, stosowanie zasad bezpiecznego programowania, wdrażanie mechanizmów uwierzytelniania i autoryzacji, testowanie zabezpieczeń aplikacji, edukację na temat zagrożeń i praktyk bezpieczeństwa oraz monitorowanie aktywności aplikacji w poszukiwaniu podejrzanych zachowań.",
      },
      {
        question:
          "Jak można wykorzystać analizę statyczną i dynamiczną kodu do wykrywania zagrożeń?",
        answer:
          "Analiza statyczna kodu polega na skanowaniu kodu źródłowego lub wykonywalnego w poszukiwaniu potencjalnych podatności i błędów, podczas gdy analiza dynamiczna kodu polega na testowaniu aplikacji w środowisku produkcyjnym w celu wykrycia zachowań mogących wskazywać na zagrożenia. Oba rodzaje analizy mogą być wykorzystywane do wykrywania zagrożeń w aplikacjach.",
      },
      {
        question: "Jakie są różne typy polityk bezpieczeństwa w organizacji?",
        answer:
          "Różne typy polityk bezpieczeństwa w organizacji obejmują: polityki uwierzytelniania i autoryzacji, polityki hasłowe, polityki korzystania z zasobów IT, polityki bezpieczeństwa fizycznego, polityki zarządzania danymi, oraz polityki w przypadku incydentów bezpieczeństwa.",
      },
      {
        question:
          "Jak działają mechanizmy ochrony przed oprogramowaniem ransomware?",
        answer:
          "Mechanizmy ochrony przed oprogramowaniem ransomware obejmują: oprogramowanie antywirusowe i antimalware, blokowanie nieznanych plików i skryptów, monitorowanie aktywności systemu pod kątem podejrzanych zachowań, tworzenie kopii zapasowych danych oraz edukację pracowników na temat zagrożeń ransomware.",
      },
      {
        question: "Jak można wykorzystać blockchain do zabezpieczania danych?",
        answer:
          "Blockchain można wykorzystać do zabezpieczania danych poprzez tworzenie rozproszonych i niezmienialnych rejestrów danych, które są chronione przed modyfikacją lub usuwaniem. Blockchain może być wykorzystywany do przechowywania danych związanych z transakcjami finansowymi, tożsamością cyfrową, właściwością intelektualną itp.",
      },
      {
        question:
          "Jakie są techniki minimalizacji danych i dlaczego są ważne w kontekście bezpieczeństwa?",
        answer:
          "Techniki minimalizacji danych polegają na ograniczaniu ilości zbieranych, przechowywanych i przetwarzanych danych do niezbędnego minimum. Są one ważne w kontekście bezpieczeństwa, ponieważ ograniczają ryzyko utraty, kradzieży lub wycieku danych oraz pomagają w zapewnieniu zgodności z przepisami dotyczącymi prywatności.",
      },
      {
        question:
          "Jak działają różne protokoły sieciowe i ich znaczenie dla bezpieczeństwa?",
        answer:
          "Różne protokoły sieciowe, takie jak TCP/IP, HTTP, FTP, SSH, itp., określają zasady komunikacji między urządzeniami sieciowymi. Ich znaczenie dla bezpieczeństwa polega na zapewnieniu poufności, integralności i dostępności danych przesyłanych w sieci oraz ochronie przed atakami typu man-in-the-middle, wstrzykiwaniem SQL, atakami DDoS itp.",
      },
      {
        question:
          "Jakie są wyzwania związane z bezpieczeństwem w rozproszonych systemach i jak można je rozwiązać?",
        answer:
          "Wyzwania związane z bezpieczeństwem w rozproszonych systemach obejmują: zarządzanie dostępem do zasobów, monitorowanie aktywności użytkowników, zapewnienie integralności i poufności danych w środowisku rozproszonym, oraz ochronę przed atakami na poziomie sieci. Mogą być one rozwiązywane poprzez stosowanie zabezpieczeń wielopoziomowych, szyfrowanie danych, zarządzanie tożsamościami, oraz stosowanie zasad least privilege.",
      },
      {
        question: "Uwierzytelnianie vs autoryzacja",
        answer:
          "Uwierzytelnianie to proces weryfikacji tożsamości użytkownika, natomiast autoryzacja dotyczy nadania użytkownikowi praw do wykonania określonych operacji lub dostępu do konkretnych zasobów.",
      },
      {
        question: "Gdzie prowadzi adres 127.0.0.1?",
        answer:
          "Adres 127.0.0.1 prowadzi do interfejsu pętli zwrotnej (loopback), co oznacza, że komunikacja z tym adresem odbywa się wewnątrz danego hosta.",
      },
      {
        question: "Czym różni się szyfrowanie symetryczne od asymetrycznego?",
        answer:
          "W szyfrowaniu symetrycznym używany jest ten sam klucz do zarówno szyfrowania, jak i deszyfrowania danych, podczas gdy w szyfrowaniu asymetrycznym korzysta się z pary kluczy: publicznego do szyfrowania i prywatnego do deszyfrowania.",
      },
      {
        question: "Różnica między szyfrowaniem a haszowaniem",
        answer:
          "Szyfrowanie to proces zamiany tekstu jawnego na zaszyfrowany, który można odszyfrować przy użyciu klucza. Haszowanie to proces przekształcenia danych na unikalny ciąg znaków (hasz), który nie może zostać odwrócony, służy głównie do weryfikacji integralności danych.",
      },
      {
        question: "Co oznacza, że HTTP jest protokołem bezstanowym?",
        answer:
          "HTTP jest protokołem bezstanowym, co oznacza, że nie zachowuje żadnych informacji o poprzednich transakcjach. Każde żądanie jest rozpatrywane niezależnie od innych.",
      },
      {
        question: "Z jakich elementów składa się żądanie HTTP?",
        answer:
          "Żądanie HTTP składa się z metody, adresu, wersji protokołu oraz nagłówków.",
      },
      {
        question: "Czym różni się kod błędu 503 od 404 i 301?",
        answer:
          "Kod błędu 503 oznacza usługę niedostępną, 404 - strona nie istnieje, a 301 - przekierowanie trwałe.",
      },
      {
        question: "Czym różni się plik /etc/passwd od /etc/shadow?",
        answer:
          "Plik /etc/passwd zawiera podstawowe informacje o użytkownikach, natomiast /etc/shadow przechowuje hasła w postaci zahaszowanej oraz inne informacje związane z hasłami.",
      },
      {
        question: "TCP vs UDP",
        answer:
          "TCP jest wysoce niezawodnym protokołem, który wykorzystuje trójfazowy handshake, natomiast UDP jest protokołem bezpołączeniowym, gdzie nadawca nie oczekuje na potwierdzenie odbioru pakietów.",
      },
      {
        question: "Co jest głównym powodem błędów typu SQL Injection?",
        answer:
          "Głównym powodem błędów typu SQL Injection jest brak odpowiedniego zabezpieczenia zapytań SQL, co umożliwia potencjalnym atakującym wstrzyknięcie dodatkowych instrukcji SQL do zapytań aplikacji.",
      },
      {
        question: "Na czym polega zasada najmniejszego uprzywilejowania?",
        answer:
          "Zasada najmniejszego uprzywilejowania zakłada, że każdy element systemu powinien mieć dostęp tylko do tych informacji oraz zasobów, które są niezbędne do wykonania swoich konkretnych zadań lub celów, minimalizując tym samym ryzyko naruszenia bezpieczeństwa.",
      },
      {
        question: "Jakie znasz rodzaje ataków XSS?",
        answer:
          "Rodzaje ataków XSS obejmują: Reflected XSS, Stored XSS oraz DOM-based XSS. Reflected XSS polega na umieszczeniu złośliwego kodu w linku, Stored XSS występuje, gdy złośliwy kod jest przechowywany na serwerze i wyświetlany dla użytkowników, a DOM-based XSS wykorzystuje niebezpieczne funkcje JavaScript w celu wykonania ataku na stronę.",
      },
      {
        question: "Gdzie możemy natrafić na błąd typu Race Condition?",
        answer:
          "Błąd typu Race Condition może wystąpić na przykład podczas korzystania z aplikacji internetowej obsługującej kupony rabatowe, gdzie kilka równoczesnych żądań może spowodować nieprzewidywalne efekty, takie jak podwójne wykorzystanie tego samego kuponu.",
      },
      {
        question: "Czy korzystałeś z Damn Vulnerable Web Application?",
        answer:
          "Damn Vulnerable Web Application to specjalnie przygotowana aplikacja, która zawiera wiele luk bezpieczeństwa. Jest wykorzystywana do celów szkoleniowych i testowania umiejętności w dziedzinie bezpieczeństwa aplikacji internetowych.",
      },
      {
        question: "Czym są numery CVE?",
        answer:
          "CVE (Common Vulnerabilities and Exposures) to numer identyfikacyjny przypisywany powszechnie znanym podatnościom, co umożliwia jednoznaczną identyfikację i wymianę informacji o tych podatnościach. Firmy i organizacje używają numery CVE w swoich komunikatach oraz raportach dotyczących podatności. Exploit Database to jedno z miejsc, gdzie można znaleźć informacje na temat podatności oznaczonych numerami CVE.",
      },

      {
        question: "Czym jest Bug Bounty?",
        answer:
          "Bug Bounty to program, w ramach którego organizacje formalnie zapraszają społeczność do zgłaszania odnalezionych podatności w ich systemach. W ramach tego programu często oferowane są nagrody, w tym nagrody finansowe, za znalezienie i zgłoszenie błędów. Popularne platformy do przeprowadzania programów Bug Bounty to m.in. HackerOne i BugCrowd.",
      },

      {
        question: "Co oznacza pojęcie Google Dorks?",
        answer:
          "Google Dorks to specjalnie sformułowane zapytania wyszukiwarki Google, które pozwalają na odnalezienie konkretnych informacji w Internecie. Wykorzystuje się je w celu wyszukiwania różnych rodzajów danych, w tym potencjalnie poufnych lub wrażliwych.",
      },

      {
        question: "Czym różni się test black box od white box?",
        answer:
          "Testy black box polegają na testowaniu systemu bez znajomości jego wewnętrznej struktury czy kodu źródłowego, podczas gdy testy white box zakładają dostęp do kodu źródłowego i wiedzy na temat jego wewnętrznej budowy. Istnieje także podejście grey box, które łączy elementy obu metod.",
      },
      {
        question: "Dlaczego phishing jest niebezpieczny?",
        answer:
          "Phishing jest niebezpieczny, ponieważ umożliwia przestępcom pozyskanie poufnych informacji, takich jak loginy, hasła czy dane finansowe, co może prowadzić do kradzieży tożsamości, oszustw finansowych oraz naruszenia prywatności.",
      },
      {
        question: "Czy oprogramowanie open source jest bezpieczne?",
        answer:
          "Oprogramowanie open source nie gwarantuje bezpieczeństwa, ale dzięki otwartemu kodowi źródłowemu społeczność może weryfikować i poprawiać ewentualne błędy, co może przyczynić się do zwiększenia bezpieczeństwa.",
      },
      {
        question: "Jakie informacje można znaleźć w certyfikacie SSL?",
        answer:
          "Certyfikat SSL zawiera informacje takie jak data ważności, numer seryjny, dane o podmiocie, adres listy CRL oraz dane wystawcy. Jest to kluczowy element w zapewnianiu bezpieczeństwa komunikacji w sieci poprzez szyfrowanie danych.",
      },
      {
        question: "Po co szyfrujemy dyski twarde?",
        answer:
          "Szyfrowanie dysków twardych jest ważne, ponieważ chroni dane przechowywane na komputerach przed dostępem osób nieuprawnionych, szczególnie w przypadku kradzieży urządzenia. Zapobiega to wyciekom informacji i naruszeniom prywatności.",
      },
      {
        question: "Wyjaśnij mechanizm SOP.",
        answer:
          "Same-Origin Policy (SOP) to mechanizm bezpieczeństwa, który kontroluje, jak dokumenty lub skrypty jednego pochodzenia (origin) mogą komunikować się z zasobami innego pochodzenia. Ma to na celu ograniczenie potencjalnych ataków poprzez izolację niebezpiecznych dokumentów.",
      },
      {
        question: "Jakich narzędzi używasz na co dzień?",
        answer:
          "Codziennie korzystam z narzędzi takich jak Burp, ZAP, Metasploit, NMAP, WireShark, HashCAT, SQLmap, DirBuster, WFUZZ, IDA oraz Ghidra. Te narzędzia są niezbędne do różnorodnych zadań związanych z analizą bezpieczeństwa i testowaniem penetracyjnym.",
      },
      {
        question: "Czy adres URL może zawierać login i hasło?",
        answer:
          "Tak, adres URL może zawierać login i hasło. Można to zrobić poprzez umieszczenie ich bezpośrednio w adresie URL, tak jak w podanym przykładzie: http://hans:geheim@www.example.org:8080/demo/example.cgi?land=de&stadt=aa. Jednakże, praktyka ta jest obecnie rzadko stosowana ze względów bezpieczeństwa, ponieważ dane uwierzytelniające mogą być łatwo przechwycone.",
      },
      {
        question: "Wymień popularne numery portów",
        answer:
          "Kilka przykładów popularnych numerów portów to: 20 - FTP, 22 - SSH, 53 - DNS, 80 - HTTP, 443 - HTTPS, 445 - SMB, 3306 - MySQL. Zrozumienie portów jest istotne dla identyfikacji usług działających na serwerach i urządzeniach sieciowych.",
      },
      {
        question: "Co oznacza privilege escalation?",
        answer:
          "Privilege escalation to proces uzyskiwania dodatkowych uprawnień, które normalnie nie są dostępne dla użytkownika. Może to obejmować przejęcie konta administratora lub uzyskanie dostępu do zasobów, do których użytkownik nie ma uprawnień.",
      },
      {
        question: "Jak chronisz swoje bezpieczeństwo?",
        answer:
          "Aby chronić swoje bezpieczeństwo, regularnie korzystam z menedżera haseł, aktywuję dwuskładnikową autentykację (2FA), korzystam z programu antywirusowego, regularnie aktualizuję oprogramowanie, stosuję izolację przy użyciu maszyn wirtualnych i firewalla. Dodatkowo, jestem świadomy potencjalnych zagrożeń związanych z bezpieczeństwem poczty elektronicznej i podejmuję odpowiednie środki ostrożności.",
      },
      {
        question: "Jak przetestować stronę logowania?",
        answer:
          "Podczas testowania strony logowania należy sprawdzić następujące elementy: czy strona posiada captcha lub rate limiting, czy wspiera autentykację dwuskładnikową (2FA/U2F), jak działa resetowanie hasła, jak działa proces rejestracji (np. czy można wykorzystać tzw. ticket trick), czy istnieje możliwość sprawdzenia, kto posiada konto na stronie, jakie komunikaty błędów są zwracane (np. czy są podatne na reflected XSS), czy strona jest podatna na ataki typu SQL Injection/NoSQL Injection, oraz w jaki sposób przechowywane są hasła. Jest to pytanie otwarte, które pozwala na zbadanie wiedzy i zrozumienia procesu testowania strony logowania.",
      },
      {
        question: "Opisz błąd, który Cię zainteresował",
        answer:
          "Błąd, który mnie zainteresował to ... (tutaj opis błędu, który wywołał moją uwagę podczas nauki lub praktyki, np. błąd podatności na XSS, SQL Injection, CSRF, etc.). Zainteresował mnie ten błąd, ponieważ ... (uzasadnienie dlaczego błąd ten był dla mnie interesujący lub pouczający).",
      },
      {
        question: "Jak szukać błędów CSRF?",
        answer:
          "Do szukania błędów CSRF wykorzystuje się przeglądarkę internetową oraz narzędzia do testowania zabezpieczeń, takie jak Burp Suite. Proces ten polega na wysłaniu żądania HTTP do serwera, próbując wykonać akcję w imieniu zalogowanego użytkownika, i sprawdzenie, czy serwis wykorzystuje odpowiednie nagłówki/parametry anty CSRF do zabezpieczenia przed takimi atakami. Następnie, wysyła się zmodyfikowane żądanie, aby sprawdzić, czy atak CSRF jest możliwy.",
      },
      {
        question: "Jakie języki są podatne na niebezpieczną deserializację?",
        answer:
          "Niektóre języki programowania podatne na niebezpieczną deserializację to Java, Python, PHP i .NET. Deserializacja jest procesem konwersji strumienia bajtów na obiekty programu. Ataki deserializacyjne mogą prowadzić do wykonania kodu zdalnego lub wykradania danych z systemu.",
      },
      {
        question: "Jak przetestujesz aplikację mobilną?",
        answer:
          "Do testowania aplikacji mobilnej można użyć różnych narzędzi, takich jak dekompilatory aplikacji, dodawanie nowych certyfikatów do urządzenia, przekierowanie ruchu przez zewnętrzny serwer proxy (np. Burp Suite). Testowanie aplikacji mobilnych wymaga specjalistycznej wiedzy i umiejętności, ponieważ aplikacje te działają w innym środowisku niż aplikacje webowe.",
      },
      {
        question: "Jak sprawdzić czy strona jest podatna na path traversal?",
        answer:
          "Aby sprawdzić, czy strona jest podatna na atak typu path traversal, można spróbować wstrzyknąć sekwencje takie jak '../' lub '..' w adres URL, aby próbować uzyskać dostęp do plików znajdujących się poza katalogiem publicznym. Przekłada się to na próbę nawigacji po systemie plików serwera. W podatności tej attacker próbuje uzyskać dostęp do plików i katalogów na serwerze, do których nie powinien mieć dostępu.",
      },
      {
        question: "Co mówi Ci MS08-067?",
        answer:
          "MS08-067 to numer identyfikacyjny błędu, który został wykorzystany w ataku znanym jako Conficker. Był to błąd w protokole RPC w systemach operacyjnych Microsoft Windows. Choć atak ten jest już historią, wciąż warto znać numery identyfikacyjne i historię znanych błędów, aby lepiej zrozumieć zagrożenia bezpieczeństwa.",
      },
      {
        question:
          "Jak uruchomisz Linuxowe narzędzia jeśli korzystasz z Windowsa?",
        answer:
          "Jeśli korzystam z systemu Windows i chcę uruchomić narzędzia przeznaczone dla systemu Linux, mogę użyć jednej z następujących metod: uruchomić maszynę wirtualną z systemem Linux, skorzystać z Windows Subsystem for Linux (WSL) lub uruchomić narzędzia za pomocą kontenerów Docker.",
      },
      {
        question: "Co powinien zawierać raport z pentestów?",
        answer:
          "Raport z pentestów powinien zawierać m.in.: wagę błędu, nazwę podatności, opis, przykładowe żądania, rekomendacje naprawy. Jest to ważny dokument podsumowujący wyniki testów penetracyjnych i zalecenia dotyczące poprawy bezpieczeństwa.",
      },
    ],
  },
  mutations: {
    randomCybersecurityQuestion(state) {
      state.cybersecurityQuestions.sort(() => Math.floor(Math.random() - 0.5));
    },
  },
  actions: {
    cybersecurityQuestionLoop(context) {
      setInterval(() => {
        context.commit("randomCybersecurityQuestion");
      }, 5000);
    },
    randomCybersecurityQuestion(context) {
      context.commit("randomCybersecurityQuestion");
    },
  },
};
