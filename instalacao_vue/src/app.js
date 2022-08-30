const MyNameApp = {
    data() {
        return {
            name: "Leticia",
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log("input_name");

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");