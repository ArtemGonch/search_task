# Компонент поиска

## Как запустить проект

1. Выполнить в директории проекта

```bash
npm install
```

2. Для запуска в режиме разработки выполнить

```bash
npm run dev
```

## Задания

- проверить и поправить функциональность (сейчас выведены mock данные, поиск не работает).
  На ввод в поисковую строку должен идти запрос к api для поиска пользователя.
  Для запроса к api используйте fetch api.
- реализовать поиск пользователей со стороннего ресурса https://dummyjson.com/users/search?q=John
  q - это поисковый запрос
- покрыть типизацией (будет плюсом)
- подумать над оптимизациями приложения (будет плюсом)

Предусмотрите все нюансы (обработка ошибок, оптимизация работы с сетью и т.д.), которые вы знаете и все потенциальные нештатные ситуации, но не тратьте на это слишком много времени (1-4 часа).
Удачи!

## Результат

- функциональность поправлена(после ввода данных идет запрс к api и возвращается список пользователей; использовался await fetch для запроса, сам запрос происходит в папке services, файл api_service)

## Внешний вид стартовой страницы

- ![Внешний вид](https://sun1-98.userapi.com/impg/UvvzJgeF0RjqgB4EuJgos-Sz0VXrsVq78jNM5Q/eS8XvsaWjbY.jpg?size=1820x851&quality=96&sign=616011334642d05c9e67d4e4e964ad73&type=album)

## Вывод результата

- отправляется запрос к api
- ![Внешний вид](https://sun9-12.userapi.com/impg/oOcAGjU1PPwkC7FFBRONVX_36idjsz1ApaI3Fw/I8cvWpMzI1E.jpg?size=1360x570&quality=96&sign=5f73c38d500302062031dca4a829cb1c&type=album)

- результат
- ![Внешний вид](https://sun1-98.userapi.com/impg/QA6J8RyVFXjW0wme7OvMfUnQKtd-fW1hnWSmSQ/D4mrCL_0xAQ.jpg?size=1180x845&quality=96&sign=24c8405c98ab275ada546bb6a018c163&type=album)

## Вывод результата, когда пользователи не найдены

- кнопка блокируется, пользователю нужно перепроверить запрос

- ![Внешний вид](https://sun9-28.userapi.com/impg/HFxvkUHoWK4EILejh6KRpB70q2Czd-Qg0eYRCA/PnP7dH-yKBc.jpg?size=1047x648&quality=96&sign=d27b1dd64197d5e65048151b5773fb5e&type=album)

## Вывод результата, когда введен пустой запрос

- кнопка блокируется, пользоавтелю нужно указать непустой запрос
- ![Внешний вид](https://sun1-14.userapi.com/impg/6BDW9wv6vbEo55CIn2JKe3sx9Vx4JaojDglfzQ/_c60tVtQu6w.jpg?size=676x441&quality=96&sign=f30ff1f6cfdb9c4bf4721e5e065986be&type=album)

## Обработка ошибки, когда пользоатель, вводя данные, стер запрос и птается отправить его пустым

- кнопка блокируется, предыдущий вывод плокируется, нужно ввести норм запрос
