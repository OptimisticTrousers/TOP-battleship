const createGameBoard = require('../gameboard/gameboard')

const createPlayer = (name, mode = 'default') => {
    const getName = () => name

    const board = createGameBoard()

    const makeRandomMoveAgainstPlayer = (player, enemy) => {
        if (mode === 'AI') {
            const columns = 'ABCDEFGHIJ'
            const randomColumn =
                columns[Math.floor(Math.random() * columns.length)]
            const randomRow = Math.floor(Math.random() * columns.length)

            player.attack(randomColumn, randomRow, enemy)

            return { randomColumn, randomRow }
        }

        return {}
    }
    const attack = (column, row, { getBoard: enemyBoard }) => {
        if (enemyBoard().getShotLocation(column, row).hit === false) {
            enemyBoard().receiveAttack(column, row)
            return "It's a hit!"
        }

        return 'You have already hit this spot!'
    }

    const getBoard = () => board

    return {
        getName,
        attack,
        getBoard,
        makeRandomMoveAgainstPlayer,
    }
}

module.exports = createPlayer
