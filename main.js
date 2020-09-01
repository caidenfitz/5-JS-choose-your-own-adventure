alert("Hello! Do you like to paint?")
alert("I sure hope so because you owe the IRS 1,000,000 and this is the only way you're getting that kind of bread.")
alert("You're are gonna need to whipe up a master peice, like better than bob ross to sell a painting for a million dollars.")
alert("Goodluck and don't make an ugly painting, no one will buy it.")
const colorChoice = prompt("To start off let's see if you have a good eye for colors. What color do you want your canvas to be, blue or green?")
let isLose = false
if (colorChoice === "green") {
  alert("come on no one likes green and no one will buy your painting.")
  let isLose = true
} else {
  alert("Blue is the best color for a painting, great choice!")
}

const settingChoice = prompt("We got two more options here and these are really important. What do you want your background setting to be trees or a lake? ")

if (settingChoice === "trees") {
  alert("Really? Trees, can you be any more basic? No one will buy that painting for any money, let alone a million dollars.")
} else {
  alert("Wow maybe you are bob ross because this pictures is almost worth a million bucks.")
}