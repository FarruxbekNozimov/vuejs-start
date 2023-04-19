const app = Vue.createApp({
	data() {
		return {
			task: [],
			title: "",
		};
	},

	methods: {
		addTask() {
			const newTask = {
				id: Date.now(),
				title: this.title,
			};
			console.log(newTask);
			if (!newTask.title.length) {
				alert("Please fill the task title");
			}
			this.task.push(newTask);
		},
	},
});

app.mount(document.getElementById("root"));
