<script>
	const introduction = "todo made with svelte.js";
	let todos = ["clean keyboard", "drink water", "organize desk"];
	let newTask;

	function addTask() {
		todos = [...todos, newTask];
		newTask = '';
	}

	function removeTask(index) {
		todos.splice(index, 1);
		todos = todos;
	}
</script>

<main>
	<h1>{introduction}!</h1>
	<ul>{#each todos as todo, index}
		<li>{todo}<span on:click={() => removeTask(index)}>X</span>
		</li>
		{/each}
	</ul>
	<div class="add">
	<input type="text" bind:value={newTask}/>
	<button on:click={() => addTask()}>add task</button>
</div>
</main>

<style>
	:root {
		--main-accent-color: #ff3e00;
		--main-background-color: #c5c4c4;

	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: var(--main-accent-color);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	ul {
		width: 80%;
		list-style: none;
	}

	li {
		border: 1px solid black;
		border-radius: 8px;
		padding: 2rem 1rem;
		margin: 1rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	li:hover {
		background: var(--main-background-color);
	}

	li > span {
		cursor: pointer;
	}

	.add {
		width: 80%;
		display: flex;
	}

	input {
		width: 80%;
		border: 1px solid black;
		border-radius: 8px;
		padding: 1rem 0;
		margin-right: 1rem;
		background: var(--main-background-color);
	}

	button {
		border: 1px solid black;
		background: var(--main-accent-color);
		width: 20%;
		border-radius: 8px;
		cursor: pointer;
	}

	button:hover {
		color: white;
	}

</style>