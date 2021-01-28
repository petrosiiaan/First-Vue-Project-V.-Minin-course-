const app = {
    data() {
        return {
            title: "To-DO",
            placeholderString: "Write What You Want",
            inputValue: '',
            notes: {
                name: ["Vahe", "Artur", "Hamazasp", "Hrayr"]
            }
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        newNote() {
            if(this.inputValue === "") {
                alert("Write Value")
            }
            else {
                this.notes.name.push(this.inputValue)
                this.inputValue = ""
            }
        },
        deleteItem(index) {
            this.notes.name.splice(index, 1)
        }
    }
}

Vue.createApp(app).mount("#app")