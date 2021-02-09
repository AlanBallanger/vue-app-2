<template>
  <button @click="play">Play a sound</button>
</template>

<script>
import useSound from 'vue-use-sound'
import perfectSfx from '../assets/perfect.mp3'
import percussionSfx from '../assets/percussion.mp3'
import pianoSfx from '../assets/piano.mp3'
import timbalesSfx from '../assets/timbales.mp3'
import bassSfx from '../assets/bass.mp3'
import bass2Sfx from '../assets/bass2.mp3'

export default {
  setup() {
    const [play] = useSound(perfectSfx)
    const [play] = useSound(percussionSfx)
    const [play] = useSound(pianoSfx)
    const [play] = useSound(perfectSfx)
    const [play] = useSound(perfectSfx)
    const [play] = useSound(perfectSfx)
    const [play] = useSound(perfectSfx)

    return {
      play,
    }
  },
}
</script>
