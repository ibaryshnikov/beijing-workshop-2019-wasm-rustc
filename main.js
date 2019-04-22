async function main() {
    const module = await WebAssembly.instantiateStreaming(
        fetch('lib.wasm')
    );
    const { add } = module.instance.exports;
    document.body.innerHTML = `add(2, 3) is ${add(2, 3)}`;
}

window.addEventListener('load', async () => {
    await main();
});
