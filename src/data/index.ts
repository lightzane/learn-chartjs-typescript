const random = () => Math.floor(Math.random() * 70 + 10);

interface Months {
    data: number;
    color?: string;
}

const DATA_MONTHS: { [month: string]: Months; } = {
    'Jan': {
        data: random(),
        color: 'rgba(85, 239, 196, 0.5)'
    },
    'Feb': {
        data: random(),
        color: 'rgba(129, 236, 236, 0.5)'
    },
    'Mar': {
        data: random(),
        color: 'rgba(116, 185, 255, 0.5)'
    },
    'Apr': {
        data: random(),
        color: 'rgba(162, 155, 254, 0.5)'
    },
    'May': {
        data: random(),
        color: 'rgba(0, 184, 148, 0.5)'
    },
    'Jun': {
        data: random(),
        color: 'rgba(0, 206, 201, 0.5)'
    },
    'Jul': {
        data: random(),
        color: 'rgba(9, 132, 227, 0.5)'
    },
    'Aug': {
        data: random(),
        color: 'rgba(108, 92, 231, 0.5)'
    },
    'Sep': {
        data: random(),
        color: 'rgba(253, 203, 110, 0.5)'
    },
    'Oct': {
        data: random(),
        color: 'rgba(225, 112, 85, 0.5)'
    },
    'Nov': {
        data: random(),
        color: 'rgba(214, 48, 49, 0.5)'
    },
    'Dec': {
        data: random(),
        color: 'rgba(232, 67, 147, 0.5)'
    },
};

export const MyData = () => {

    let Labels: string[] = [];
    let Numbers: number[] = [];
    let Colors: string[] = [];

    for (let key in DATA_MONTHS) {
        Labels.push(key.toUpperCase());
        Numbers.push(DATA_MONTHS[key].data);
        Colors.push(DATA_MONTHS[key].color);
    }

    return {
        Labels,
        Numbers,
        Colors
    };
};
