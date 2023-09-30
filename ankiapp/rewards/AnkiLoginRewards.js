class AnkiLoginRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName, index) {
        this.rewardMap.set(rewardName[index], true);
    }

    getReward(rewardName, index){
        return this.rewardMap.get(rewardName)[index]
    }

    get rewardMap() {
        return this.rewardMap;
    }
}

function initializeRewardMap() {
    const map = new Map();
    const rewardNames = Object.values(AnkiLoginRewardNames);
    const rewardValues = Object.values(AnkiLoginRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const AnkiLoginRewardNames = {
    INCREMENT: "Increment",
    LOGIN: "Login",
};

const AnkiLoginRewardValues = {
    INCREMENT: [false, false],
    LOGIN: [false],
};

/*
const AnkiLoginRewards = {
    Increment: [false, false],
    Login: false,
};
*/