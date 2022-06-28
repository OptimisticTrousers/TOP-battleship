const renderAttacks = (player, column, row, enemyBoard) => {
    const cell = document.querySelector(
        `.${player}-board > .cell[column='${column}'][row='${row}']`
    )

    const location = enemyBoard.getLocation(column, row)
    if (location.isShip) {
        cell.classList.add('hit')
    } else {
        cell.classList.add('miss')
    }
}

const handleAttack = (column, row, enemyBoard, player) =>
    player.attack(column, row, enemyBoard)

const attackEnemyCell = (column, row, enemyBoard, player) => {
    handleAttack(column, row, enemyBoard, player)
    renderAttacks('enemy', column, row, enemyBoard)
}

const attackPlayerCell = (playerBoard, enemy) => {
    const { elementColumn, elementRow } = playerBoard.makeRandomCoordinates()
    handleAttack(elementColumn, elementRow, playerBoard, enemy)
    renderAttacks('player', elementColumn, elementRow, playerBoard)
}
// https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/

export const pubSub = () => {
    const subscribers = {}

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return
        }
        subscribers[eventName].forEach((callback) => {
            callback(data)
        })
    }
    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribe[eventName])) {
            subscribers[eventName] = []
        }
        subscribers[eventName].push(callback)
        const index = subscribers[eventName].length - 1

        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1)
            },
        }
    }

    return {
        publish,
        subscribe,
    }
}

const cellDragListener = function (event) {
    console.log(this)
}

//const addDraggableProperties = () => {

    //const draggables = document.querySelectorAll('.cell[draggable="true"]')
    //draggables.forEach(draggable => {
        //draggable.addEventListener('dragstart', () => {
            //console.log('bob jones')
        //})
    //})
//}

function getDragAfterElement(container, y, x){
    const draggableElements = [...container.querySelectorAll('.cell:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offsetY = y - box.top - box.height / 2
        const offsetX = x - box.left - box.width/ 2
        if(offsetY < 0 && offsetY > closest.offsetY && offsetX < 0 && offsetX > closest.offsetX){
            return {offsetX, offsetY, element:child}
        }
            return closest

    }, {offsetX: Number.NEGATIVE_INFINITY, offsetY:Number.NEGATIVE_INFINITY}).element
}

const addListenerToBoat = (cells) => {

    //Video for drag and drop: https://www.youtube.com/watch?v=jfYWwQrtzzY

    const cellsContainer = document.querySelector('.player-board')
    cells.forEach(cell => {
        cell.addEventListener('dragstart', () => {
            cell.classList.add('dragging')
        })

        cell.addEventListener('dragend', () => {
            cell.classList.remove('dragging')
        })
    })

    cellsContainer.addEventListener('dragover', (event) => {
        event.preventDefault()
        const afterElement = getDragAfterElement(cellsContainer, event.clientY, event.clientX)
        const draggable = document.querySelector('.dragging')
        if(afterElement === null){

            cellsContainer.appendChild(draggable)
        } else{
            cellsContainer.insertBefore(draggable, afterElement)
        }
    })
}

const queryCells = () => {

    const patrolBoat= document.querySelectorAll('.cell[ship-name="Patrol Boat"]')
    addListenerToBoat(patrolBoat)

    //const patrolBoatContainer = document.createElement('div')

    const submarine = document.querySelectorAll('.cell[ship-name="Submarine"]')
    addListenerToBoat(submarine)
    //const submarineContainer = document.createElement('div')

    const carrier = document.querySelectorAll('.cell[ship-name="Carrier"]')
    addListenerToBoat(carrier)
    //const carrierContainer = document.createElement('div')

    const battleShip= document.querySelectorAll('.cell[ship-name="Battleship"]')
    addListenerToBoat(battleShip)
    //const battleShipContainer= document.createElement('div')

    const destroyer = document.querySelectorAll('.cell[ship-name="Destroyer"]')
    addListenerToBoat(destroyer)
    //const destroyerContainer = document.createElement('div')


}


export const renderPlayerShips = ({ getLocation }) => {
    const playerBoardArea = document.querySelector('div.player-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            const cell = playerBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            cell.setAttribute('column', column)
            cell.setAttribute('row', row)
            const location = getLocation(column, row)
            if (location.isShip) {
                cell.classList.add('ship')
                cell.setAttribute('ship-name', location.getName())
                cell.setAttribute('draggable', true)
            }
        }
    }
                queryCells()
}

const checkIfGameOver = (playerBoard, enemyBoard) => {
    if (playerBoard.checkIfAllShipsHaveSunk()) {
        const modal = document.querySelector('.modal')
        const modalWinner = document.querySelector('.modal-content > p')
        const playAgainButton = document.querySelector(
            '.modal-content > button'
        )

        modal.style.display = 'block'
        playAgainButton.addEventListener('click', () => {
            location.reload()
        })

        modalWinner.textContent = 'You win!'
    }
    if (enemyBoard.checkIfAllShipsHaveSunk()) {
        const modal = document.querySelector('.modal')
        const modalWinner = document.querySelector('.modal-content > p')
        const playAgainButton = document.querySelector(
            '.modal-content > button'
        )

        modal.style.display = 'block'
        modalWinner.textContent = 'You lose!'
        playAgainButton.addEventListener('click', () => {
            location.reload()
        })
    }
}

export const addListenersToEnemyBoard = (
    playerBoard,
    enemyBoard,
    player,
    enemy,
    ps
) => {
    const enemyBoardArea = document.querySelector('div.enemy-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            // Crediting formula to calculate nth-child using nested loop: https://stackoverflow.com/questions/8872662/math-to-determine-item-index-based-on-col-row-selection-in-grid
            const cell = enemyBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            cell.setAttribute('column', column)
            cell.setAttribute('row', row)

            cell.addEventListener(
                'click',
                () => {
                    ps.publish('click', {
                        cell,
                        column,
                        row,
                        playerBoard,
                        enemyBoard,
                        player,
                        enemy,
                    })
                },
                { once: true }
            )
        }
    }
}

export const attack = ({
    cell,
    column,
    row,
    playerBoard,
    enemyBoard,
    player,
    enemy,
}) => {
    // human player attacking computer
    attackEnemyCell(column, row, enemyBoard, player)
    // computer attacking human
    attackPlayerCell(playerBoard, enemy)

    checkIfGameOver(playerBoard, enemyBoard)
}
