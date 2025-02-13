// index.js
async function runWasm() {
  // Fetch the WASM binary
  const response = await fetch("add_test.wasm");
  const bytes = await response.arrayBuffer();

  // Compile and instantiate the WASM module
  const { instance } = await WebAssembly.instantiate(bytes);

  // Call the exported `add` function from the WASM module
  const result = instance.exports.add(5, 7);
  console.log(`Result from WASM: ${result}`); // Should print: Result from WASM: 12
}
console.log("Running WASM...");

runWasm();
