let axios = {
    _fake(url, data) {
        return new Promise(resolve => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
                if (url.indexOf('it-inc') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5) * 1000);
        });
    },

    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function findUserInDB(id) {
    const users = [{id: 1, name: 'Alex', friend: 3}, {id: 2, name: 'Vlad', friend: null}, {
        id: 3,
        name: 'Dima',
        friend: 2
    }]

    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id)
            if (user === null) {
                rej('user not found')
            } else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}


findUserInDB(1)
    .then(user => {
        console.log(user.name)
        return user.friend
    })
    .then(friendId => findUserInDB(friendId))
    .then(friend1 =>{
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friendId => findUserInDB(friendId))
    .then(friend2 => {console.log(friend2.name)})