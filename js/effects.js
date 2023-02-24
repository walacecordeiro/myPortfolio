export class Effects {
    constructor(elements) {
        this.elements = elements;
    }

    shuffle() {
        this.elements.forEach((element) => {
            const text = element.textContent;
            const shuffleTime = 200; // tempo de embaralhamento em milissegundos

            function shuffleText() {
                let shuffledText = "";
                const characters = text.split("");
                while (characters.length > 0) {
                    shuffledText += characters.splice(
                        Math.floor(Math.random() * characters.length),
                        1
                    )
                }
                element.textContent = shuffledText;
            }

            // inicia o embaralhamento
            const intervalId = setInterval(shuffleText, 1) // a cada 5 milissegundos

            // faz o texto voltar ao normal após o tempo de embaralhamento
            setTimeout(() => {
                clearInterval(intervalId)
                element.textContent = text
            }, shuffleTime)
        });
    }

    fadeIn(duration = 200) {
        this.elements.forEach((element) => {
            element.style.opacity = 0;

            let start = null;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                element.style.opacity = percentage;
                if (percentage < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        });
    }
}
