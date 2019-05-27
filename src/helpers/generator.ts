
export const generateUserList = (count: number) => {

    return Array(count).fill(1).map((value: any, index: number) => {
        return {
            id: index,
            name: generateName(),
            number: generateNumber(100, 1000000),
            is_online: Math.random() > 0.5
        }
    });
};

export const generateName = () => {
    let result           = '';
    let characters       = 'aeiouyaeiouybcdfghjklmnpqrstvwxz';
    let charactersLength = characters.length;

    let length = generateNumber(4, 10);
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result[0].toUpperCase() + result.slice(1);
};

export const generateNumber = (min: number, max:number) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

