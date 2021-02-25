# Roll d20 🎲

```
npm i rolld20
yarn add rolld20
```

A simple tool designed to roll dices, of any side d2 (flip coin), d3, d4, d6, d8, d12, d20, d30, d60, d100, d1000, and jan-ken-po.


## Usage

### Pick a Dice
### 2 sides dice (d2) / flip a coin

```js
import { d2, flipCoin } from 'rolld20'

// Rolling d2 🎲👋
d2(); // return a random number between 1-2;
d2(10); // return an array of 10 elements with random numbers between 1-2;

flipCoin(); // return a string: 'heads' or 'tails" at random;
```

### 3 sides dice (d3)

```js
import { d3 } from 'rolld20'
 // Rolling d3 🎲👋
d3(); // return a random number between 1-3;
d3(10); // return an array of 10 elements with random numbers between 1-3;
```

### 4 sides dice (d4)

```js
import { d4 } from 'rolld20'

 // Rolling d4 🎲👋
d4(); // return a random number between 1-4;
d4(10); // return an array of 10 elements with random numbers between 1-4;
```

### 6 sides dice (d6)

```js
import { d6 } from 'rolld20'

// Rolling d6 🎲👋
d6(); // return a random number between 1-6;
d6(10); // return an array of 10 elements with random numbers between 1-6;
```

### 8 sides dice (d8)

```js
import { d8 } from 'rolld20'

// Rolling d8 🎲👋
d8(); // return a random number between 1-8;
d8(10); // return an array of 10 elements with random numbers between 1-8;
```

### 10 sides dice (d10)

```js
import { d10 } from 'rolld20'

// Rolling d10 🎲👋
d10(); // return a random number between 1-10;
d10(10); // return an array of 10 elements with random numbers between 1-10;
```

### 12 sides dice (d12)

```js
import { d12 } from 'rolld20'

// Rolling d12 🎲👋
d12(); // return a random number between 1-12;
d12(10); // return an array of 10 elements with random numbers between 1-12;
```

### 20 sides dice (d20)

```js
import { d20 } from 'rolld20'

// Rolling d20 🎲👋
d20(); // return a random number between 1-20;
d20(10); // return an array of 10 elements with random numbers between 1-20;
```

### 30 sides dice (d30)

```js
import { d30 } from 'rolld20'

// Rolling d30 🎲👋
d30(); // return a random number between 1-30;
d30(10); // return an array of 10 elements with random numbers between 1-30;
```

### 60 sides dice (d60)

```js
import { d60 } from 'rolld20'

// Rolling d60 🎲👋
d60(); // return a random number between 1-60;
d60(10); // return an array of 10 elements with random numbers between 1-60;
```

### 100 sides dice (d100)

```js
import { d100 } from 'rolld20'

// Rolling d100 🎲👋
d100(); // return a random number between 1-100;
d100(10); // return an array of 10 elements with random numbers between 1-100;
```

### 1000 sides dice (d1000)

```js
import { d1000 } from 'rolld20'

// Rolling d1000 🎲👋
d1000(); // return a random number between 1-1000;
d1000(10); // return an array of 10 elements with random numbers between 1-1000;
```

### Rolling Jan-ken-po
```js
import { janKenPo } from 'rolld20'

// Rolling jan-ken-po ✊✋✌️
janKenPo(); // return a string: 'rock', 'paper', or 'scissors' at random;

// Rolling jan-ken-po with bomb allowed ✊✋✌️👍
janKenPo(true); // return a string: 'rock', 'paper', 'scissors', or 'bomb' at random;
```

### Comparing Jan-ken-po
```js
import { compareJanKenPo } from 'rolld20'

// Compare two jan-ken-po ✊✋✌️👍 x ✊✋✌️👍
compareJanKenPo({player1: 'paper', player2: 'bomb'}); // return 1 (bomb beats paper)
compareJanKenPo({player1: 'scissor', player2: 'paper'}); // return -1 (scissors beats papaer)
compareJanKenPo({player1: 'rock', player2: 'rock'}); // return 0 (it's a tie)
```


## Source code

See the source code [here](./src/index.ts).
