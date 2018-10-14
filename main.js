var app = new Vue({
    el: ".app",

    data() {
        return {
            app: {
                name: "idk"
            },

            color: {
                one: "",
                history: [],
            }
        }
    },

    methods: {

        // TODO: If the color clicked is found in this history array, dont push anything into the array
        updateBackground() {
            // this.color.history.push(this.color.one)
            $("body").css("background", this.color.one)

            // FOUND
            if (this.color.history.indexOf(this.color.one) > 0) {
                console.log("FOUND")
            } else {
                console.log("NOT FOUND")
                this.color.history.push(this.color.one)
                // this.updateBackground();
            }
        },

        logindex(i) {
            this.color.one = this.color.history[i]
            this.updateBackground();
        },

        randomBackground() {
            this.color.one = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"

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
        }
    },

    mounted() {
        this.color.one = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"

        this.updateBackground(this.color.one)
        $(".color-history").hide();
        $(".instructions").hide();


    }
})