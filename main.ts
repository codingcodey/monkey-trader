scene.setBackgroundColor(5)
game.splash("Hi!")
let coin = 12
let apple = 2
let applePrice = 3
let strawberry = 3
let strawberryPrice = 6
let peach = 7
let peachPrice = 3
game.splash("You have " + coin + " coins")
coin = coin + apple * applePrice
game.splash("After sold apples, you have " + coin + " coins")
coin = coin + strawberry * strawberryPrice
game.splash("After sold strawberries, you have " + coin + " coins")
coin = coin + peach * peachPrice
game.splash("After sold peaches, you have " + coin + " coins")
game.splash("Thanks for coming!")
