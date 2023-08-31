# megaKrefresher_BAZY

### final project of databases module
Rewrote it and added some extra functionalities. Nothing fancy.

 Gifts management for Santa Claus.

 Projects main points.
 ### Outlook.
 Children page === home page
 It contains list of children and attached present  to a given child. We display kids in alphabetical order.
 Child is shown as a text and gift as a select and Save utton.
 There is a possibility to add another child

### Gift page outlook
Gifts it is a simplelist. Name, quantity and simple form to add another gift.
prezenty to prosta lista. nazwa i ilosc

### Display of gifts
In childs select fields we show 'empty' at the first time, and then in alphabetical order available gifts.

Screens
![2023-08-31 (1)](https://github.com/L00ka5z78/megaKrefresher_BAZY/assets/110019733/3d275942-1984-49c5-ad3f-b8309cf64d34)
![2023-08-31](https://github.com/L00ka5z78/megaKrefresher_BAZY/assets/110019733/4a8e9767-f026-4518-a5c1-f3792df1a10f)


#### Realations
During saving first of all we check availability of choosen gift (ha to be greater than 0)
Availability it is amount of gifts minus how many each gift is used. How many kids has it.

### Tech stack used
#### Express, MySql2, ExpressHandlebars, CSS
