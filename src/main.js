import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    introduction: "todo made with svelte",
    todos: ["clean keyboard", "drink water", "organize desk"],
  },
});

//export default app;
