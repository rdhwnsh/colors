var app = new Vue({
    el: ".app",

    data() {
        return {
            app: {
                name: "Colors",
                version: "v1.3.2"
            },

            color: {
                rgb: "",
                history: [],
            }
        }
    },

    methods: {

        // TODO: If the color clicked is found in this history array, dont push anything into the array [DONE]
        updateBackground() {
            $("body").css("background", this.color.rgb)
            let color = this.color.rgb

            // NOT FOUND
            if (this.color.history.indexOf(color) < 0) {
                this.color.history.push(color)
                this.updateButtonColor()
            }

        },

        logindex(i) {

            // CHANGE COLOR OG BUTTON

            this.color.rgb = this.color.history[i]
            this.updateBackground();

            this.updateButtonColor()
        },

        randomBackground() {
            this.color.rgb = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
            this.updateBackground()
        },

        toggle(thing) {
            $("." + thing).slideToggle()
        },

        clearHistory() {
            this.color.history = []
        },

        deleteEntry(i) {
            console.log(i)
            this.color.history.splice(i, 1)
        },

        updateButtonColor() {
            for (var i = 0; i < this.color.history.length; i++) {
                document.getElementsByClassName("changeColor")[i].style.backgroundColor = this.color.history[i]
            }
        },

        discoMode() {
            setInterval(() => {
                app.randomBackground()
            }, 1)
        }
    },

    mounted() {
        this.color.rgb = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
        this.updateBackground(this.color.rgb)

        $(".color-history").hide();
        $(".instructions").hide();
    }
})