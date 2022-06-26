const handleAttack = (column, row, enemyBoard, opponent) => {
    opponent.attack(column, row, enemyBoard)
}

const checkIfEnemyCellHasShip = (cell, column, row, enemyBoard, opponent) => {
    const cellLocation = enemyBoard.getLocation(column, row)
    if (cellLocation.isShip) {
        handleAttack(opponent)
        cell.classList.add('hit')
        if (cellLocation.isSunk()) {
            cell.classList.add('sunk')
        }
    }
}

export const addListenersToPlayerBoard = ({ getLocation }) => {
    const playerBoardArea = document.querySelector('div.player-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            const cell = playerBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            if (getLocation(row, column).isShip) {
                cell.classList.add('ship')
            }
        }
    }
}

export const addListenersToEnemyBoard = (enemyBoard, opponent) => {
    const enemyBoardArea = document.querySelector('div.enemy-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            // Crediting formula to calculate nth-child using nested loop: https://stackoverflow.com/questions/8872662/math-to-determine-item-index-based-on-col-row-selection-in-grid
            const cell = enemyBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            cell.setAttribute('column', column)
            cell.setAttribute('row', row)
            cell.addEventListener('click', () => {
                checkIfEnemyCellHasShip(cell, column, row, enemyBoard, opponent)
            })
        }
    }
}
