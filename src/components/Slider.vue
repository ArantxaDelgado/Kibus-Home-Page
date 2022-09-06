
<template>
    <div class="contenidoCarousel">
        <div class="component" id="compo">
            <div class="carousel">
                <img :src="getURL" alt="" srcset="" class="carousel-image">
                <div class="buttons">
                    <div v-for="_, ind in imgArray" :key="ind" @click="SwitchImage(ind)" class="btn"
                        :class="{ active: index === ind }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgArray: ["perroCome", "comedero", "app", "imagen"],
            index: 0,
            interval: null,
            body: document.getElementsByName("body")
        }
    },
    computed: {
        getURL() {
            return `../../public/images/${this.imgArray[this.index]}.png`;
        },
    },
    methods: {
        SwitchImage(value) {
            this.index = value;
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                if (this.index + 1 < this.imgArray.length) {
                    this.index++;
                }
                else {
                    this.index = 0;
                }
            }, 3000);
        }
    },
    created() {
        this.interval = setInterval(() => {
            if (this.index + 1 < this.imgArray.length) {
                this.index++;
            }
            else {
                this.index = 0;
            }
        }, 8000);;
    },
}
</script>

<style scoped>
.contenidoCarousel {
    margin: 10px;
}
#compo {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.component {
    display: flex;
    align-items: center;
    justify-content: center;
}
.carousel {
    width: 100%;
    max-width: fit-content;
    height: fit-content;
    max-height: 400px;
    position: relative;
}
.carousel-image {
    max-height: inherit;
    width: inherit;
}
.carousel .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
}
.btn {
    background-color: var(--color-primary-light);
    width: 15px;
    height: 15px;
    border-radius: 15px;
    transition: background-color .2s;
    box-shadow: 0 2px 2px var(--color-secondary);
}
.btn.active {
    background-color: var(--color-primary);
}
.btn:hover {
    cursor: pointer;
    background-color: var(--color-p-gradient);
}
</style>