import{KEY}

const options ={
    method : 'Post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KEY}`
    },
body: JSON.stringify({
    'model': 'gpt-3-5-turbo',
    'messages': [{ 'role': 'user', 'content': 'Can you teach me JS'}]

})
};

fetch('https://api.openai.com/v1/chat/completions', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));