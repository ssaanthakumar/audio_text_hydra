await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

hydraText.font = "Monospace"
hydraText.lineWidth = "0.2%"
hydraText.textAlign = "center"
hydraText.fontSize = "30%"
str = "test script 1,2fjdfjkdfjkjkfdjkfdjkjfhhsdg,"

solid(0.01,0.01)
	.layer(text(str))
	.rotate(8,0.02)
	//.modulate(o0, Math.sin(time))
	.modulate(noise(1),()=>a.fft[1])
	.repeat(3,3)
	.blend(o0, 0.1)
	.out()
