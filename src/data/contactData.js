const contacts = [
    {
        id: 1,
        name: 'Joaco',
        last_time_connected: 'últ. vez hoy a la(s) 17:47',
        profile_img: '/profile-image.png',
        last_message: "Perfecto, mañana nos vemos",
        messages: [
            {
                id: 1,
                author: 'Yo',
                content: "¿Salimos mañana a la tarde?",
                timestamp: '16:17'
            },
            {
                id: 2,
                author: "Joaco",
                content: "Dale, ¿a qué hora te viene bien?",
                timestamp: "16:20"
            },
            {
                id: 3,
                author: "Yo",
                content: "Tipo 17hs estaría bien",
                timestamp: "16:22"
            },
            {
                id: 4,
                author: "Joaco",
                content: "Perfecto, mañana nos vemos",
                timestamp: "16:30"
            }
        ]
    },
    {
        id: 2,
        name: 'Gonzalo',
        last_time_connected: 'en línea',
        profile_img: '/profile-image.png',
        last_message: "Bueno, después paso y la reviso",
        messages: [
            {
                id: 1,
                author: 'Yo',
                content: "Che, la compu me anda re lenta.",
                timestamp: '18:17'
            },
            {
                id: 2,
                author: 'Gonzalo',
                content: "¿Probaste reiniciarla?",
                timestamp: '18:18'
            },
            {
                id: 3,
                author: 'Yo',
                content: "Sí, pero sigue igual.",
                timestamp: '18:19'
            },
            {
                id: 4,
                author: 'Gonzalo',
                content: "Bueno, después paso y la reviso",
                timestamp: '18:25'
            }
        ]
    },
        {
        id: 3,
        name: 'Bruno',
        last_time_connected: 'últ. vez hoy a la(s) 18:00',
        profile_img: '/profile-image.png',
        last_message: "De nada, nos vemos mañana.",
        messages: [
            {
                id: 1,
                author: 'Yo',
                content: "¿Hoy hay clase o se suspendió?",
                timestamp: '10:04'
            },
            {
                id: 2,
                author: 'Bruno',
                content: "Se suspendió, avisaron en el grupo.",
                timestamp: '10:30'
            },
            {
                id: 3,
                author: 'Yo',
                content: "Buenísimo, gracias.",
                timestamp: '10:35'
            },
            {
                id: 4,
                author: 'Bruno',
                content: "De nada, nos vemos mañana.",
                timestamp: '10:37'
            }
        ]
    },
        {   
        id: 4,
        name: 'Joel',
        last_time_connected: 'en línea',
        profile_img: '/profile-image.png',
        last_message: "Genial, así lo reviso tranquilo.",
        messages: [
            {
                id: 1,
                author: 'Yo',
                content: "Te paso el trabajo práctico en un rato.",
                timestamp: '16:17'
            },
            {
                id: 2,
                author: 'Joel',
                content: "Dale, ¿antes de las 8 podés?",
                timestamp: '16:18'
            },
                        {
                id: 3,
                author: 'Yo',
                content: "Sí, lo mando a las 7",
                timestamp: '16:18'
            },
                        {
                id: 4,
                author: 'Joel',
                content: "Genial, así lo reviso tranquilo.",
                timestamp: '16:18'
            }
        ]
    },

]

export default contacts