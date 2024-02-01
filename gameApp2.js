// Defining the pack of Truth cards
const truthPack = ['When was the last time you lied?' , 'When was the last time you cried?' , 'What is your biggest fear?' , 'What is your biggest fantasy?' , 'Who is the last person you searched on Instagram?' , 'What is the strangest thing you have ever eaten?' , 'What is your relationship dealbreaker?' , 'What is a secret you have never told anyone?' , 'Do you have a hidden talent?' , ' Who was your first celebrity crush?' , 'Have you ever cheated in an exam?' , 'If you were going to be on a reality TV show, which would it be?' , 'What is your biggest insecurity?' , 'What is the biggest mistake you have ever made?' , 'What is one thing you hate people knowing about you?' , 'What is the worst thing anyone has ever done to you?' , 'What is the best thing anyone has ever done for you?' , 'What is your worst habit?' , 'What is the biggest misconception about you?' , 'What is one thing you wish people knew about you?' , 'Why did your last relationship break down?' , 'What is the best piece of advice you have been given?' , 'What is the most you have spent on a night out?' , 'Have you ever returned or re-gifted a present?' , 'Do you have a favourite sibling?' , 'What have you purchased that is been the biggest waste of money?' , 'How would you rate your looks on a scale of 1 to 10?' , 'What celebrity do you look up to?' , 'If you could be one celebrity for a day, who would it be?' , 'If you could do any job in the world, what would it be?' , 'What is your dream life?' , 'What do you value the most - money fame success friends family etc?' , 'What is your biggest red flag?' , 'What is one movie you are embarrassed to admit you enjoy?' , 'What music artist do you secretly think is overrated?' , 'What is your most controversial political opinion?' , 'Name something you cannot live without' , 'Where do you think you will be in five years time?' , 'How well do you think you would do in a horror movie?' , 'How many stuffed animals do you own?' , 'Did you ever get in trouble at school? And if so what for?' , 'Do you have any phobias?'];


// Defining the pack of Truth cards
const darePack = ['Try to juggle 3things of the groups choice' , 'Show the most embarrassing photo on your phone' , 'Show the last five people you texted and what the messages said' , 'Let the rest of the group DM someone from your Instagram account' , 'Do 100 squats' , 'Let the group look in your Instagram DMs' , 'Show us your screen time report' , 'Keep three ice cubes in your mouth until they melt' , 'Yell out the first word that comes to your mind' , 'Keep your eyes closed until it is your go again' , 'Empty out your wallet/purse and show everyone what is inside' , 'Pretend to be the person to your right for 10 minutes' , 'Eat a snack without using your hands' , 'Whisper a secret to the person on your left' , 'Say two honest things about everyone else in the group' , 'Tell the saddest story you know' , 'Hold your drink with two hands for the rest of the evening' , 'Put on make-up without a mirror and leave it like that for the rest of the game' , 'Neck the drink (responsibly) of the person on your right' , 'Say yes to everything for the next 1 minute' , 'Show your favourite picture of yourself' , 'Post a TikTok draft' , 'Make a rap about your favourite book' , 'Do 50 push ups' , 'Reveal what you think everyone in the group will be up to in five years time' , 'Give everyone in the room a backhanded compliment' , 'Let the group style your hair and leave it that way for the entire game' , 'Only talk in whispers for the next 10 minutes' , 'Say a secret about someone in the room but not reveal their name' , 'Eat five spoonfuls of a condiment of your choice' , 'Pretend to be a food item of your choice' , 'Eat a raw piece of garlic' , 'Give a lap dance to someone of your choice' , 'Repeat everything the person on your right is saying until it is your turn again' , 'Like the first 15 posts on your Facebook newsfeed' , 'Eat a spoonful of mustard' , 'Show your orgasm face' , 'Seductively eat a banana' , 'Do your best sexy crawl' , 'Twerk for a minute' , 'Try and make the group laugh as quickly as possible' , 'Let another person in the group touch up your makeup' , 'Talk in an American accent for the rest of the evening' , 'Do your best celebrity impression' , 'Play air guitar for 2 minutes straight' , 'Howl like a wolf for two minutes' , 'Dance without music for two minutes' , 'Pole dance with an imaginary pole' , 'Belt out the chorus of a cheesy ballad at full volume' , 'Let someone else tickle you and try not to laugh' , 'Down your drink (responsibly)' , 'Try and make yourself cry in front of the group' , 'Give a celebrity lookalike for every person in the room' , 'Attempt to impersonate everyone in the room' , 'Fill your mouth with drink and gargle your answer to the next Truth' , 'Make another player jump in the next 10 minutes' , 'Attempt the first TikTok dance on your for you page' , 'Try not to laugh for the next 10 minutes' , 'For the next 10 minutes, every time someone asks you something, respond with a bark' , 'Call the first person in your phonebook and howl like a wolf' , 'Let the person next to you wax you wherever they want' , 'Do the cinnamon challenge' , 'Rap the whole of WAP while dancing seductively' , 'Narrate the game like a newsreader for the next round' , 'Allow someone else in the group to blindfold you and feed you one item out of the fridge' , 'Let the group decide your outfit for the night' , 'Do a shot of vinegar' , 'Show a picture of your most cringe outfit' , 'Read out the last five things on your search history' , 'Let another player draw a tattoo on your foot in permanent marker'];

//the functions that calculates the cards randomly
function truthPicker(){
    const truthPickerCalculator = Math.floor(Math.random() * truthPack.length)
    
    return truthPack[truthPickerCalculator]
}

function darePicker(){
    const darePickerCalculator = Math.floor(Math.random() * darePack.length)

    return darePack[darePickerCalculator]
}

//Assigning the interactive displays and buttons.
const truthCardDisplay = document.getElementById('truthDisplay');
const truthClick = document.getElementById('truthButton');
const dareCardDisplay = document.getElementById('dareDisplay');
const dareClick = document.getElementById('dareButton');
const nextPlayerClick = document.getElementById('nextPlayer');


// assigning functions the display and the click buttons

const toReset = ''


nextPlayerClick.addEventListener('click', function(){
    truthCardDisplay.textContent = toReset
    dareCardDisplay.textContent = toReset
});


truthClick.addEventListener('click', function(){
    const finalTruthDisplay = truthPicker()
    truthCardDisplay.textContent = finalTruthDisplay
    dareCardDisplay.textContent = toReset
});

dareClick.addEventListener('click', function(){
    const finalDareDisplay = darePicker()
    dareCardDisplay.textContent = finalDareDisplay
    truthCardDisplay.textContent = toReset
});

