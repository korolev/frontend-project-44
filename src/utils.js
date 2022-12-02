export const getRandomInt = (from, to) => {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor(Math.random() * (max - min) + min);
}

export const isEven = (n) => Number(n) % 2 === 0;