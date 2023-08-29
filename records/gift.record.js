class GiftRecord {
    static listAll() {
        return [
            {
                id: 'abc1',
                name: 'Dolly house',
                count: 5,
            },
            {
                id: 'abc2',
                name: 'Car',
                count: 3
            },
            {
                id: 'abc3',
                name: 'Knife',
                count: 5
            },
            {
                id: 'abc4',
                name: 'Battle axe',
                count: 6
            },
        ];
    }
}
module.exports = {
    GiftRecord
}