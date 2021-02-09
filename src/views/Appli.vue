<template>
  <button @click="play">Play a sound</button>
</template>

<script>
import useSound from 'vue-use-sound'
import buttonSfx from '../assets/perfect.mp3'

export default {
  setup() {
    const [play] = useSound(buttonSfx)

    return {
      play,
    }
  },
}
</script>
