class AnkiLoginRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName) {
        this.rewardMap.set(rewardName, true);
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
    LOGIN: false,
};

/*
const AnkiLoginRewards = {
    Increment: [false, false],
    Login: false,
};
*/