// User Authentication

const userAuthenticate = (username, password) => {
    const users = {
        'iwan@gmail.com': '12345678',
        'irwan@gmail.com': '1234567890'
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (users[username] && users[username] === password) {
                resolve({ username, message: 'Authentication sucess!!!!'})
            } else {
                reject(new Error('Invalid username of password'));
            }
        }, 1500);
    })
}


userAuthenticate('iwan@gmail.com', '12345678')
    .then((user) => {
        console.log(user.message);
    })
    .catch((error) => {
        console.error(error.message)
    });

// Weather Prediction

const weatherPrediction = (location) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = {
                'Jakarta': 'Cloudy',
                'Bogor': 'Rainy',
                'Jogja': 'Sunny'
            };
            const weather = weatherData[location];

            if (weather) {
                resolve(`The weather in ${location} is ${weather}`)
            } else {
                reject(new Error('Lcation not found!!'))
            }
        }, 2000);
    })
}

weatherPrediction('Jakarta')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });