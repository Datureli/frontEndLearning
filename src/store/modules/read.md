Before Create - Pierwszy lifecycle hook.Pozwala nam na przeprowadzanie akcji zanim nasz komponent zostanie dodany do drzewa dom.W tym hooku nie mamy jeszcze dostępu do drzewa dom.
Created - Wywoływany zaraz bo beforeCreate.Na tym etapie mamy już dostęp do naszych reaktywnych danych ale templates oraz virtual dom nie zostały jeszcze zamonotowane ani nie zostały wyrenderowane.
Before mount - wywoływany zaraz przed tym jak instancja zostaje dodana do dom. Na tym etapie template zostały skompilowane.
Mounted - Najczęsciej używany hook.Mamy pełen dostęp do reaktywnych komponentów,templatek,oraz wyrenderowaNEGO DOM.
Before update - It's called when any changes are made to data that requires DOM to be updated.
Updated - zostaje wywoływany zaraz po tych jak dane się zaaktualizują(zmienią),Jest to najlepsze miejsce aby uzyskać dostęp do dom zaraz po zmianie.
Before destroy - wywoływany zaraz przed zniszczeniem instancji.Jeżei mamy potrzebe wyczyścić eventy lub reaktywność,to jest to odpowiednie miejsce
destroyed - wywoływany po zniszczeniu instancji.