const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tarot ={
    'the fool':{
        'number': 0,
        'uprightMeaning': 'New beginnings, opportunity and potential.',
        'reversedMeaning': 'Suggests that you have conceived of a new project but aren’t ready to ‘birth’ it into the world just yet. '
    },
    'the magician':{
        'number': 1,
        'uprightMeaning': 'The Magician brings you the tools, resources and energy you need to make your dreams come true. Seriously, everything you need right now is at your fingertips.',
        'reversedMeaning': 'The Magician Reversed shows you are exploring what you wish to manifest, but you are not taking action yet. You are uncertain if you have everything you need and may be unsure about how to make it happen.'
    },
    'the high priestess':{
        'number': 2,
        'uprightMeaning': 'The High Priestess signifies spiritual enlightenment, inner illumination, divine knowledge and wisdom. She shows up in your Tarot readings when the veil between you and the underworld is thin, and you have the opportunity to access the knowledge deep within your soul.',
        'reversedMeaning': 'The High Priestess Reversed calls on you to be still and direct your attention inward to listen to your voice and wisdom. You may be swayed by other people’s opinions or swept up in their drama when what you really need to do is focus on what is right for you. '
    },
    'the empress':{
        'number': 3,
        'uprightMeaning': 'The Empress calls on you to connect with your feminine energy. Create beauty in your life. Connect with your senses through taste, touch, sound, smell and sight. Draw on these senses to experience pleasure and deep fulfilment. Treat yourself to a day spa, learn massage, enjoy a fine restaurant or spend more time with your partner. ',
        'reversedMeaning': 'The Magician Reversed shows you are exploring what you wish to manifest, but you are not taking action yet. You are uncertain if you have everything you need and may be unsure about how to make it happen.'
    },
    'the emperor':{
        'number': 1,
        'uprightMeaning': 'The Emperor suggests that you are adopting this fatherly role (regardless of whether you are male or female), providing for your family, and protecting and defending your loved ones.',
        'reversedMeaning': 'The Emperor Reversed calls on you to assess your relationship with power, control, authority, responsibility and discipline. Are you expressing too much or too little of these elements in your life right now? Are they working for you or against you?'
    },
    'unknown':{
        'number': 'unknown',
        'uprightMeaning': 'unknown',
        'reversedMeaning': 'unknown'
    },
}




app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:tarot', (request,response)=>{
    const tarotCard = request.params.tarot.toLowerCase()
    if(tarot[tarotCard]){
        response.json(tarot[tarotCard])
    }else{
        response.json(tarot['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})