//console.log("wczytano plik Box.js")
class Box {

    constructor(x, y, bok) {
        this.div = document.createElement("div")
        this.div.id = "id_" + x + "_" + y
        this.div.style.border
        //this.div.style.position = "absolute"
        //this.div.style.height = bok + "px"
        //this.div.style.width = bok + "px"
        this.div.style.top = (x * bok) + "px"     //(x * (2 * bok + 2))
        this.div.style.left = (y * bok) + "px"    //(y * (2 * bok + 2))
        this.div.className = "box"
        //this.div.style.padding = board.padding + "px"
        this.div.addEventListener("click", function () {
            var temp_x = this.id.split("_")[1]
            var temp_y = this.id.split("_")[2]
            if (tabs.tab[temp_x][temp_y] == 0) {
                this.style.backgroundColor = "white"
                tabs.tab[temp_x][temp_y] = 1
            } else if (tabs.tab[temp_x][temp_y] == 1) {
                this.style.backgroundColor = "black"
                tabs.tab[temp_x][temp_y] = 0
            }
        })
        this.div.addEventListener("mouseenter", function () {
            if (board.select) {
                var temp_x = this.id.split("_")[1]
                var temp_y = this.id.split("_")[2]
                if (game.color == 'black') {
                    if (tabs.tab[temp_x][temp_y] == 0) {
                        this.click()
                    }
                }
                else if (game.color == 'white')
                    if (tabs.tab[temp_x][temp_y] == 1) {
                        this.click()
                    }
            }
        })
        this.div.addEventListener("mousedown", function () {
            game.color = this.style.backgroundColor
        })
    }
}