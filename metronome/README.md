# :pushpin: Metronome

Just a Metronome!

## Key points I learnt with this app:
:heavy_check_mark:	  To initialize state in a React component, you can do it inside the constructor or directly inside the class (read [this](https://daveceddia.com/where-initialize-state-react/) for more details). Here we're doing it inside the constructor.

:heavy_check_mark:	“handleX” and “onX” like for example handleClick and onClick is a very common naming convention in React. This way, when you see the props of a React component, if it's onX this means it's a callback function, otherwise it's regular data. Also, it's easier to recognise the handler functions.

:heavy_check_mark:	 The usefullness of arrow functions: => functions are not just a shorter syntax. Actually "this" in arrow functions always refers to the originating context ( in this case the Metronome instance ) and everything will work Fine. If you use a plain function, you'll have to deal with extra binding hastle!


