var lyricList = ["Destruction leads to a very rough road, but it also breeds creation. - <i>Californication</i>", "I know Bob well. Well enough to tell you about his 67 smells. <i>- Me and My Friends</i>", "I'm the rainbow in your jail cell, all the memories of everything you've ever smelled. <i>- Don't Forget Me</i>", "Riding down the path on the back of a giraffe, me and the giraffe laughed cause I passed some gas. <i>- Nobody Weird Like Me</i>", "It's so lonely when you don't even know yourself. <i>- Knock Me Down</i>", "All on a spaceship persevering, use my hands for everything but steering. <i>- Can't Stop</i>", "I mingle with the Gods, I mingle with divinity. <i>- Blood Sugar Sex Magik</i>", "There's a devil in my dick and some demons in my semen. <i>- Sir Psycho Sexy</i>", "Intercourse with a porpoise is a dream for me, hell bent on inventing a new species. <i>- Nobody Weird Like Me</i>", "To anyone who's listening, you're not born into sin. The guilt they try and give you, puke it in the nearest bin. <i>- Shallow Be Thy Name</i>", "Everyone knows anything goes. We are the lotus kids. <i>- Midnight</i>", "Please don't look too close to me. You might not like what you see. <i>- Warped</i>", "My love is the pussy juice. <i>- Love Trilogy</i>", "I like pleasure spiked with pain, and music is my aeroplane. <i>- Aeroplane</i>", "I wonder if she's living in a magazine. <i>- This Is The Place</i>", "Just a minute, while I reinvent myself. Make it up, and then I take it off the shelf. <i>- Midnight</i>", "Make me excited. I'm an inbred and a pothead, two legs that you spread. <i>- Don't Forget Me</i>", "Throw away your television, take the noose off your ambition. <i>- Throw Away Your Television</i>", "Confusion is my name, ask me again I'll tell you the same. <i>- Funky Monks</i>", "I'm Yertle the turtle, oh marvelous for me, I am ruler of all that I see. <i>- Yertle The Turtle</i>", "A man named Little Richard, born to make them bitches stir. That's right he'll make the sweet substance drip. <i>- Backwoods</i>", "Bob Marley, walkin' like he talk it. <i>- Give It Away</i>", "Listening to Roberta Flack, but I know you won't come back. <i>- My Lovely Man</i>", "Meet me at the coffee shop, we can dance like Iggy Pop. <i>- Coffee Shop</i>", "Nevermind the Soft Cell shit, that's strictly for the twits. Nevermind the Men At Work, those tunes are for the jerks. <i>- Nevermind</i>", "Little Bo Peep cumin' from my stun gun. <i>- Suck My Kiss</i>", "Twinkle twinkle little star, shining down upon my blue car. Driving down the boulevard, she was soft and I was hard. <i>- Apache Rose Peacock</i>", "Got stopped by a lady cop in my automobile. She said get out and spread your legs, and then she tried to cop a feel. <i>- Sir Psycho Sexy</i>", "I'll malinger on your block, give the finger to a cop, and pick a lock before I knock. <i>- Get On Top</i>", "I'll make it to the moon if I have to crawl. <i>- Scar Tissue</i>", "Glorious euphoria is my must, erotic shock is a function of lust. Temporarily blind, dimensions to discover, in time each into the other. <i>- Blood Sugar Sex Magik</i>", "Some come up and some come young, live to love and give good tongue. Sit down get down in the sun, rocket to the woman is on the one. <i>- I Like Dirt</i>", "Throw away your television, make a break big intermission, recreate your super vision. <i>- Throw Away Your Television</i>", "Can't stop the gods from engineering, feel no need for any interfering. <i>- Can't Stop</i>", "Confucius might have been confused. <i>- Coffee Shop</i>", "Eve, she gave good reason, booty looking too good not to be squeezin'. <i>- Sir Psycho Sexy</i>", "I'll be doing all I can, if I die an honest man. <i>- Funky Monks</i>", "Choices are, for one and all, all we are is, leaves that fall. <i>- Transcending</i>", "Choose not a life of imitation, distant cousin to the reservation. <i>- Can't Stop</i>", "This life is more than just a read through. <i>- Can't Stop</i>", "Descending waves of graceful pleasure, for your love there is no measure. <i>- Sir Psycho Sexy</i>", "Earth is made of dirt and wood. And I'd be water, if I could. <i>- I Like Dirt</i>", "I put my middle finger in, your monthly blood is what I win. <i>- Purple Stain</i>", "Give to me sweet sacred bliss, your mouth was made to suck my kiss. <i>- Suck My Kiss</i>", "I want to party on your pussy, baby. <i>- Special Secret Song Inside</i>", "Let's keep the moon awake and do the electric boogaloo. <i>- Cabron</i>", "In the class she's taking notes, just how deep deep is my throat. <i>- Catholic School Girls Rule</i>", "The head that's getting pregnant lives to give. <i>- One Big Mob</i>", "Two of a kind beat all hands tonight. <i>- Universally Speaking</i>"]

function randomLyric() {
  var randIndex = Math.floor((Math.random() * (lyricList.length - 1)) + 1)
  document.getElementById("random-lyric").innerHTML = lyricList[randIndex];
}